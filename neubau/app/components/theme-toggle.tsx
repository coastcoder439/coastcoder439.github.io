'use client';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  function toggleTheme() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.style.colorScheme = next ? 'dark' : 'light';
    localStorage.setItem('leon-theme', next ? 'dark' : 'light');
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      aria-label="Farbschema wechseln"
      onClick={toggleTheme}
      className="size-11 rounded-none border-line bg-transparent hover:bg-foreground hover:text-background"
    >
      <Moon aria-hidden="true" className="size-4 dark:hidden" />
      <Sun aria-hidden="true" className="hidden size-4 dark:block" />
    </Button>
  );
}
