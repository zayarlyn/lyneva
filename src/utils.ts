export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener('resize', fn);
}

export const projects = [
  {
    title: 'Jira Clone',
    img: '/assets/jira.webp',
    descr: 'A minimalist replica of the Jira issue tracking software',
    uri: 'https://jira-replica.vercel.app/',
  },
  {
    img: '/assets/ytr.webp',
    title: 'yt-thumbnail-rank',
    descr: 'A thumbnails ranking app designed for YouTubers',
    uri: 'https://yt-thumbnail-rank.vercel.app/',
  },
  {
    img: '/assets/sutakku.webp',
    title: 'Sutakku',
    descr: 'A task tracker for developer working with GitHub',
    uri: 'https://sutakku.netlify.app/',
  },
  {
    img: '/assets/quizu.webp',
    title: 'Quizu',
    descr: 'A fun quiz game with various categories',
    uri: 'https://lyn-eva.github.io/QUIZU/',
  },
];

export const focus = [
  {
    src: '/assets/ts.svg',
    title: 'Typescript',
    tooltip: 'JavaScript with syntax for types',
  },
  {
    src: '/assets/nodejs.svg',
    title: 'Node.js',
    tooltip: 'JavaScript runtime environment',
  },
  {
    src: '/assets/express.svg',
    title: 'Express.js',
    tooltip: 'Minimalist nodejs web framework',
  },
  {
    src: '/assets/nextjs.svg',
    title: 'Next.js',
    tooltip: 'Full stack React framework',
  },
  {
    src: '/assets/react.svg',
    title: 'React.js',
    tooltip: 'JS ibrary for building user interfaces',
  },
  {
    src: '/assets/tailwind.svg',
    title: 'Tailwindcss',
    tooltip: 'Utility-first CSS framework',
  },
  {
    src: '/assets/prisma.svg',
    title: 'Prisma',
    tooltip: 'Next-generation Node.js ORM',
  },
  {
    src: '/assets/mysql.svg',
    title: 'MySQL',
    tooltip: 'Relational database management system',
  },
];
export const familiar = [
  {
    src: '/assets/python.svg',
    title: 'Python',
    tooltip: 'General-purpose programming language',
  },
  {
    src: '/assets/redux.svg',
    title: 'Redux.js',
    tooltip: 'predictable state management container',
  },
  {
    src: '/assets/firebase.svg',
    title: 'Firebase',
    tooltip: 'Backend-as-a-service platform',
  },
  {
    src: '/assets/chakraui.svg',
    title: 'Chakra UI',
    tooltip: 'UI library for React.js',
  },
  { src: '/assets/mui.svg', title: 'MUI', tooltip: 'UI library for React.js' },
  {
    src: '/assets/figma.svg',
    title: 'Figma',
    tooltip: 'Web-based designing tool',
  },
];
