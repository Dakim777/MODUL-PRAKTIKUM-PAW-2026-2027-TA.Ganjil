"use client";

import React, { useState } from "react";
import Prism from "prismjs";

// Prevent Prism from automatically querying or modifying the DOM
if (typeof window !== "undefined") {
  const win = window as unknown as { Prism?: { manual?: boolean } };
  win.Prism = win.Prism || {};
  win.Prism.manual = true;
}
(Prism as unknown as { manual?: boolean }).manual = true;

// Load Prism language definitions
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-python";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-ini";
import "prismjs/components/prism-jsx";

interface CodeBlockProps {
  children?: React.ReactNode;
  code?: string;
  language?: string;
  filename?: string;
}

function renderFileIcon(lang: string, filename: string) {
  const lowerFile = filename.toLowerCase();

  if (lowerFile.endsWith(".html") || lang === "html") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    );
  }
  if (lowerFile.endsWith(".jsx") || lowerFile.endsWith(".tsx")) {
    return (
      <svg width="16" height="16" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#0284c7" />
        <g stroke="#0284c7" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }
  if (lowerFile.endsWith(".js") || lang === "javascript") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect width="20" height="20" x="2" y="2" rx="4" fill="#eab308" />
        <text x="5.5" y="16" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="11" fill="#000">JS</text>
      </svg>
    );
  }
  if (lowerFile.endsWith(".py") || lang === "python") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.5 2 8 3.5 8 5v2h4v1H6C4 8 2 9.5 2 13s2 5 4 5h2v-2.5C8 13.5 9.5 12 11.5 12h3c1.5 0 2.5-1 2.5-2.5V5c0-1.5-.5-3-5-3zm-2 2.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="#2563eb" />
        <path d="M12 22c3.5 0 4-1.5 4-3v-2h-4v-1h6c2 0 4-1.5 4-5s-2-5-4-5h-2v2.5c0 2-1.5 3.5-3.5 3.5h-3c-1.5 0-2.5 1-2.5 2.5V19c0 1.5.5 3 5 3zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" fill="#ca8a04" />
      </svg>
    );
  }
  if (lang === "bash" || lang === "sh" || lang === "shell" || filename.toLowerCase().includes("terminal")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }
  if (lowerFile.endsWith(".sql") || lang === "sql") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (lowerFile.endsWith(".ini") || lowerFile.endsWith(".env") || lowerFile.endsWith(".txt") || lowerFile.endsWith(".json")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function parseCode(raw: string, propLang?: string, propFilename?: string) {
  let lang = propLang || "javascript";
  if (lang === "js") lang = "javascript";
  if (lang === "py") lang = "python";
  if (lang === "sh" || lang === "shell") lang = "bash";
  if (lang === "html" || lang === "markup") lang = "html";

  const lines = raw.trim().split("\n");
  const firstLine = lines[0]?.trim() || "";

  let filename = propFilename || "";
  let cleanCode = raw.trim();

  if (!propFilename) {
    const htmlMatch = firstLine.match(/^<!--\s*([a-zA-Z0-9_\-./]+\.[a-zA-Z0-9]+)\s*-->$/i);
    const jsMatch = firstLine.match(/^\/\/\s*([a-zA-Z0-9_\-./]+\.[a-zA-Z0-9]+(?:\s*\([^)]+\))?)/i);
    const pyMatch = firstLine.match(/^#\s*([a-zA-Z0-9_\-./]+\.[a-zA-Z0-9]+(?:\s*\([^)]+\))?)/i);
    const cMatch = firstLine.match(/^\/\*\s*([a-zA-Z0-9_\-./]+\.[a-zA-Z0-9]+)\s*\*\/$/i);
    const sqlMatch = firstLine.match(/^--\s*([a-zA-Z0-9_\-./]+\.sql)/i);

    if (htmlMatch) {
      filename = htmlMatch[1];
      cleanCode = lines.slice(1).join("\n").replace(/^\n+/, "");
    } else if (jsMatch) {
      filename = jsMatch[1];
      cleanCode = lines.slice(1).join("\n").replace(/^\n+/, "");
    } else if (pyMatch) {
      filename = pyMatch[1];
      cleanCode = lines.slice(1).join("\n").replace(/^\n+/, "");
    } else if (cMatch) {
      filename = cMatch[1];
      cleanCode = lines.slice(1).join("\n").replace(/^\n+/, "");
    } else if (sqlMatch) {
      filename = sqlMatch[1];
      cleanCode = lines.slice(1).join("\n").replace(/^\n+/, "");
    }
  }

  if (!filename) {
    if (lang === "bash" || lang === "sh" || lang === "shell") filename = "Terminal";
    else if (lang === "python") filename = "script.py";
    else if (lang === "javascript") filename = "script.js";
    else if (lang === "html") filename = "index.html";
    else if (lang === "jsx") filename = "Component.jsx";
    else if (lang === "sql") filename = "query.sql";
    else if (lang === "ini") filename = "config.ini";
    else filename = "code";
  }

  return { filename, lang, cleanCode };
}

function getGrammar(lang: string) {
  if (lang === "html" || lang === "markup") return Prism.languages.markup;
  if (lang === "javascript" || lang === "js") return Prism.languages.javascript;
  if (lang === "jsx") return Prism.languages.jsx || Prism.languages.javascript;
  if (lang === "python" || lang === "py") return Prism.languages.python;
  if (lang === "bash" || lang === "sh") return Prism.languages.bash;
  if (lang === "sql") return Prism.languages.sql;
  if (lang === "json") return Prism.languages.json;
  if (lang === "ini") return Prism.languages.ini;
  if (lang === "css") return Prism.languages.css;
  return Prism.languages.javascript || Prism.languages.markup;
}

export default function CodeBlock({
  children,
  code,
  language,
  filename: customFilename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const rawCode = typeof children === "string" ? children : code || "";
  const { filename, lang, cleanCode } = parseCode(rawCode, language, customFilename);

  let highlighted = cleanCode;
  try {
    const grammar = getGrammar(lang);
    if (grammar) {
      highlighted = Prism.highlight(cleanCode, grammar, lang);
    }
  } catch (err) {
    console.error("Prism highlight error:", err);
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="code-block-card">
      <div className="code-block-header">
        <div className="code-block-tab">
          <span className="code-block-icon">{renderFileIcon(lang, filename)}</span>
          <span className="code-block-filename">{filename}</span>
        </div>
        <div className="code-block-actions">
          <span className="code-block-lang-badge">{lang.toUpperCase()}</span>
          <button
            type="button"
            onClick={handleCopy}
            className={`code-block-copy-btn ${copied ? "copied" : ""}`}
            aria-label="Salin kode"
            title="Salin ke clipboard"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>
      <div className="code-block-content">
        <pre className={`code-block-pre language-${lang}`}>
          <code
            className={`code-block-code language-${lang}`}
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </div>
  );
}
