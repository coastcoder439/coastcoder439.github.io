'use client';

import { useEffect, useRef, useState } from 'react';
import { FileText, LoaderCircle } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export function ResumePreviewCanvas({ file }: { file: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(900);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateWidth = () => {
      setPageWidth(Math.min(Math.max(frame.clientWidth - 64, 280), 1020));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="leon-resume-preview">
      <Document
        file={file}
        loading={
          <div className="leon-resume-preview__status" role="status">
            <LoaderCircle aria-hidden="true" />
            Lebenslauf wird gerendert …
          </div>
        }
        error={
          <div className="leon-resume-preview__status is-error">
            <FileText aria-hidden="true" />
            <span>Die Vorschau ist nicht verfügbar.</span>
            <a href={file} target="_blank" rel="noopener noreferrer">
              Original-PDF öffnen
            </a>
          </div>
        }
      >
        <Page
          pageNumber={1}
          width={pageWidth}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          loading={null}
        />
      </Document>
    </div>
  );
}
