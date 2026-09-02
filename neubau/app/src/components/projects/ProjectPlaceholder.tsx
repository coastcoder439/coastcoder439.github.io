import { FileCode2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectPlaceholderProps {
    className?: string;
    title?: string;
}

export function ProjectPlaceholder({
    className,
    title = 'Textbasierter Projektstand',
}: ProjectPlaceholderProps) {
    return (
        <div
            className={cn(
                'relative flex h-full w-full items-center justify-center overflow-hidden border border-black/10 bg-zinc-100 p-8 text-center dark:border-white/10 dark:bg-zinc-950',
                className,
            )}
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px] text-foreground/[0.035]" />
            <div className="relative z-10 max-w-sm">
                <FileCode2 className="mx-auto h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                    Echtes Repository · keine Bildquelle
                </p>
                <p className="mt-3 text-xl font-black tracking-tight text-foreground">{title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Bewusst textbasiert: Im Projekt liegt kein belegter Screenshot oder öffentlicher Build vor.
                </p>
            </div>
        </div>
    );
}
