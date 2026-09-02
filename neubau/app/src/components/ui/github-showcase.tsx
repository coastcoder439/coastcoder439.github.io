"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Github, Maximize2, Minimize2, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubCalendar } from "./retro-space-shooter-git-hub-calendar";

const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "coastcoder439";
const PRODUCT_REPOS = [
  "oasis-simulation-app",
  "google-drive-management",
  "keel-showcase",
  "keel-harness-standalone-setup",
  "voiceai",
  "wl-bikerental",
  "shopify-x-paperclip",
];

const PRODUCT_REPO_LABELS: Record<string, string> = {
  "oasis-simulation-app": "Oasis Simulator",
  "google-drive-management": "Drive-Automatisierung",
  "keel-showcase": "Keel Showcase",
  "keel-harness-standalone-setup": "Keel-Harness",
  "voiceai": "FlowVoice",
  "wl-bikerental": "E-Bike-Vermietung",
  "shopify-x-paperclip": "Shopify-Shop",
};

type PublicRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

type PublicUser = {
  login: string;
  followers: number;
  public_repos: number;
  html_url: string;
};

export const GitHubShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<PublicUser | null>(null);
  const [repos, setRepos] = useState<PublicRepo[]>([]);

  useEffect(() => {
    let active = true;
    Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`).then((response) => response.ok ? response.json() : null),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`).then((response) => response.ok ? response.json() : []),
    ]).then(([userData, repoData]) => {
      if (!active) return;
      setUser(userData);
      setRepos(Array.isArray(repoData)
        ? repoData.filter((repo: PublicRepo) => PRODUCT_REPOS.includes(repo.name))
        : []);
    }).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, []);

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  return (
    <section id="github-stats" className="w-full max-w-[1700px] mx-auto px-6 pt-10 pb-24 md:pt-14 md:pb-32">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => setIsExpanded(true)}
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-[3rem] border border-black/5 bg-white p-8 shadow-2xl dark:border-white/10 dark:bg-[#0A0A0A] md:p-10",
          loading && "animate-pulse",
        )}
      >
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); setIsExpanded(true); }}
          aria-label="GitHub-Ansicht vergrößern"
          className="absolute right-8 top-8 rounded-full bg-black p-4 text-white shadow-xl dark:bg-white dark:text-black"
        >
          <Maximize2 size={22} />
        </button>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-[#39d353]">
              <Github className="h-8 w-8" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">GitHub / {GITHUB_USER}</span>
            </div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-tight text-black dark:text-white md:text-6xl">
              Echte Repositories.<br /><span className="text-[#39d353]">Öffentlich belegt.</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6 text-right">
            <Stat value={user?.public_repos} label="Öffentliche Repos" />
            <Stat value={user?.followers} label="Follower" />
            <Stat value={totalStars} label="Sterne" />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] overflow-y-auto bg-white/80 p-4 backdrop-blur-xl dark:bg-black/85 md:p-10"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              className="relative mx-auto max-w-[1500px] rounded-[3rem] border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#0A0A0A] md:p-12"
            >
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="GitHub-Ansicht schließen"
                className="absolute right-8 top-8 z-10 rounded-full bg-black p-4 text-white dark:bg-white dark:text-black"
              >
                <Minimize2 size={22} />
              </button>
              <div className="mb-10 space-y-3 pr-20">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#39d353]">ÖFFENTLICHER QUELLCODE</p>
                <h3 className="text-4xl font-black tracking-tight md:text-6xl">{GITHUB_USER}</h3>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="overflow-x-auto rounded-[2rem] bg-[#F8F8F8] p-7 dark:bg-[#111] lg:col-span-2">
                  <p className="mb-6 text-xs font-black uppercase tracking-widest opacity-40">Beitragskalender</p>
                  <div className="min-w-[760px]">
                    <GithubCalendar username={GITHUB_USER} cellSize={15} cellGap={4} />
                  </div>
                </div>
                <div className="rounded-[2rem] bg-[#F8F8F8] p-7 dark:bg-[#111]">
                  <p className="mb-6 text-xs font-black uppercase tracking-widest opacity-40">Produkt-Repositories</p>
                  <div className="space-y-3">
                    {repos.length > 0 ? repos.map((repo) => (
                      <Link
                        key={repo.name}
                        href={repo.html_url}
                        target="_blank"
                        className="block rounded-2xl border border-black/5 bg-white p-4 transition hover:border-[#39d353]/60 dark:border-white/5 dark:bg-black"
                      >
                        <span className="flex items-center gap-2 font-bold"><BookOpen size={14} className="text-[#39d353]" />{PRODUCT_REPO_LABELS[repo.name] || repo.name}</span>
                        <span className="mt-2 flex items-center gap-3 text-xs opacity-50">
                          {repo.language || "Repository"} <span className="flex items-center gap-1"><Star size={11} />{repo.stargazers_count}</span>
                        </span>
                      </Link>
                    )) : (
                      <p className="text-sm opacity-50">{loading ? "Wird geladen …" : "Öffentliche Daten derzeit nicht erreichbar."}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Stat = ({ value, label }: { value?: number; label: string }) => (
  <div>
    <p className="text-3xl font-black tabular-nums text-[#39d353]">{value ?? "—"}</p>
    <p className="mt-1 text-[9px] font-black uppercase tracking-wider opacity-40">{label}</p>
  </div>
);
