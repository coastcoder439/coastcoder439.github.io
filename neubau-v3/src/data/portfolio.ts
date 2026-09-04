import { PortfolioData } from '@/types';

// Personendaten der Seite (v3). Alle Projekt-, Skill- und Blog-Daten des Templates sind
// entfernt — die Seite zeigt ihre Projekte in StoryContent.tsx (Slideshow mit Live-iframes).
export const portfolioData: PortfolioData = {
    personal: {
        name: 'Leon Pösken',
        title: 'KI-Systembau',
        subtitle: 'IT aus Überzeugung.',
        bio: 'Die meiste Software nimmt: Zeit, Aufmerksamkeit, Nerven. Ich baue die andere Sorte — und ich baue nur, woran ich glaube. Angefangen hat es bei meinem Herzensprojekt, der NGO World Eden Era, wo niemand Budget für Umwege hatte. Große Firmen haben Abteilungen dafür. Kleine haben mich.',
        avatar: '',
        location: 'Leipzig, Deutschland',
        email: '',
        phone: '',
        resumeUrl: '/Leon-Poesken-Lebenslauf.pdf',
        website: '',
        // Cal.com-Buchungslink: direkt auf den 30-Minuten-Termin, damit der Kunde
        // nicht erst auf der Profilseite auswaehlen muss. Der Termintyp heisst in
        // Cal.com noch '30 min meeting' — Umbenennung auf Deutsch liegt beim Owner.
        calLink: 'leon-posken-4hsbjc/30min',
        languages: [
            { name: 'Deutsch', level: 'Native' },
            { name: 'Englisch', level: 'Fluent' },
        ],
        socialLinks: [
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/leonpoesken/',
                icon: 'linkedin',
                username: 'Leon Pösken',
            },
        ],
    },
    projects: [],
    experiences: [],
    education: [],
    achievements: [],
    techStack: [],
    hardSkills: [],
    softSkills: [],
    tools: [],
    faqs: [],
    blogs: [],
    gallery: [],
};
