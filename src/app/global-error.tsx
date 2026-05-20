"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Global Error Boundary]", error);
    try {
      window.parent.postMessage(
        { type: "webild-runtime-error", message: error.message },
        "*",
      );
    } catch {}
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#fafafa",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 420 }}>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#111",
              marginBottom: "0.5rem",
            }}
          >
            Something went wrong
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: "0.875rem",
              lineHeight: 1.5,
              marginBottom: "1.25rem",
            }}
          >
            An error occurred while rendering this page.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.5rem 1.25rem",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#fff",
              background: "#111",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
