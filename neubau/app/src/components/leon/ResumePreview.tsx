'use client';

import dynamic from 'next/dynamic';
import { LoaderCircle } from 'lucide-react';

const ResumePreviewCanvas = dynamic(
  () =>
    import('./ResumePreviewCanvas').then((module) => module.ResumePreviewCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="leon-resume-preview__status" role="status">
        <LoaderCircle aria-hidden="true" />
        Lebenslauf wird gerendert …
      </div>
    ),
  },
);

export function ResumePreview({ file }: { file: string }) {
  return <ResumePreviewCanvas file={file} />;
}
