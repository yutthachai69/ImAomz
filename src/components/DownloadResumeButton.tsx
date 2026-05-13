"use client";

import { useState, useEffect, useMemo } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

export default function DownloadResumeButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Memoize the document to prevent react-pdf from infinitely re-compiling 
  // on every single parent re-render due to JSX referential mismatch.
  const pdfDocument = useMemo(() => <ResumePDF />, []);

  if (!isClient) {
    // Render a placeholder button during SSR
    return (
      <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-black bg-white text-on-surface border-[4px] border-on-surface shadow-neo-lg font-label uppercase tracking-wider opacity-50 cursor-not-allowed">
        Loading...
      </button>
    );
  }

  return (
    <PDFDownloadLink document={pdfDocument} fileName="Aomz_Resume.pdf">
      {({ blob, url, loading, error }) => (
        <button 
          disabled={loading}
          className={`w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-xl font-black bg-white text-on-surface border-[4px] border-on-surface shadow-neo-lg hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-label uppercase tracking-wider ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'GENERATING PDF...' : 'DOWNLOAD RESUME'}
        </button>
      )}
    </PDFDownloadLink>
  );
}
