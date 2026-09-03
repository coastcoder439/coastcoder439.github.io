import { PortfolioData } from '@/types';

// Personendaten der Seite (v3). Alle Projekt-, Skill- und Blog-Daten des Templates sind
// entfernt — die Seite zeigt ihre Projekte in StoryContent.tsx (Slideshow mit Live-iframes).
export const portfolioData: PortfolioData = {
    personal: {
        name: 'Leon Pösken',
        title: 'KI-Systembau',
        subtitle: 'Technik mit Auftrag.',
        bio: 'Die Mitgründung einer NGO brachte mich zum KI-Systembau. Durch die IT-Welt begleitete mich eine Frage: Was zählt wirklich? Heute ist aus diesem holistischen Gedanken mehr als nur eine Methodik geworden — deinen Weg finden und ihn gemeinsam gehen.',
        avatar: '',
        location: 'Leipzig, Deutschland',
        email: '',
        phone: '',
        resumeUrl: '/Leon-Poesken-Lebenslauf.pdf',
        website: '',
        // Cal.com-Buchungslink (Free-Plan). Sobald ein Termintyp existiert: 'leon-posken-4hsbjc/<slug>'.
        calLink: 'leon-posken-4hsbjc',
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
