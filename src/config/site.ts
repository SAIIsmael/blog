/**
 * Site-wide config — edit this file to personalize everything.
 */
export const site = {
  name: 'Ismael',
  handle: 'SAIIsmael',

  role: 'Software Engineer',
  tagline: 'Building software and writing down what I learn.',

  description:
    'Notes on building software. Trade-offs, craft, and the occasional strong opinion.',

  about: {
    intro: `I'm a software engineer in Ottawa. I like to understand a problem properly before jumping into code, and I care about software that still makes sense when you come back to it months later.`,

    background: `Most of my work is Angular and TypeScript. I end up in Java and Spring Boot when something crosses the stack, but that's occasional, not the default. Outside of work I've built things in C and C++ (a multiplayer Hangman server, a real-time earth-moon simulation, puzzle games), played with deep learning on satellite imagery, and picked up other languages when a project needed them.`,

    writing: `This site is where I put ideas that don't fit in a pull request: things I learned the hard way, takes I'm still thinking through, notes I want to find again later. Everything here is my own and doesn't represent any employer, past, present, or future.`,

    hobbies: '' as string,
  },

  stack: {
    main: ['TypeScript', 'JavaScript', 'Angular'],
    sometimes: ['Java', 'Spring Boot'],
    also: ['C', 'C++', 'Python'],
    location: 'Ottawa, ON',
  },

  /** Recommended solid background when exporting avatar.jpg (matches ink-900) */
  avatarBackground: '#0d1117',

  contactNote: 'Always happy to hear from someone who builds things.',

  links: {
    email: 'ismael_sai@icloud.com',
    github: 'https://github.com/SAIIsmael',
    linkedin: 'https://linkedin.com/in/saiismael',
    /** Add a URL when ready — empty string hides the icon */
    instagram: '',
    bluesky: '',
  },

  avatar: '/avatar.jpg',
} as const;

export function siteTitle(page?: string) {
  return page ? `${page} | ${site.name}` : `${site.name} | ${site.role}`;
}

export function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return parts.map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function navHref(base: string, path: string) {
  return path === '/' ? base : `${base}${path.slice(1)}`;
}

export function isNavActive(pathname: string, base: string, path: string) {
  const normalized = pathname.replace(/\/$/, '') || '/';
  const home = base.replace(/\/$/, '') || '/';

  if (path === '/') {
    return normalized === home || normalized === '/';
  }

  const target = navHref(base, path).replace(/\/$/, '');
  return normalized === target || normalized.startsWith(`${target}/`);
}

export type SocialLink = {
  icon: 'github' | 'linkedin' | 'email' | 'instagram' | 'bluesky';
  href: string;
  label: string;
  external: boolean;
};

/** Social links for footer — only entries with a URL are returned */
export function getSocialLinks(): SocialLink[] {
  const { links } = site;
  const entries: SocialLink[] = [
    { icon: 'github', href: links.github, label: 'GitHub', external: true },
    { icon: 'linkedin', href: links.linkedin, label: 'LinkedIn', external: true },
    { icon: 'email', href: links.email ? `mailto:${links.email}` : '', label: 'Email', external: false },
    { icon: 'instagram', href: links.instagram, label: 'Instagram', external: true },
    { icon: 'bluesky', href: links.bluesky, label: 'Bluesky', external: true },
  ];

  return entries.filter((entry) => entry.href);
}
