export function getScreenY(id: string) {
  const node = document.getElementById(id)?.getBoundingClientRect() as DOMRect;
  // return node;
  const y = node.y - window.innerHeight;
  return Math.abs(y > 100 ? 0 : y) / node.height; // > 0
}

export function useScroll() {
  return {
    y: Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    ),
  };
}

export function onResize(fn: () => void) {
  document.addEventListener("resize", fn);
}

export const projects = [
  {
    title: "Jira Clone",
    img: "/assets/jira.png",
    descr: "A minimalist replica of the Jira issue tracking software",
    uri: "https://jira-replica.vercel.app/",
  },
  {
    img: "/assets/ytr.png",
    title: "yt-thumbnail-rank",
    descr: "A thumbnails ranking app designed for YouTubers",
    uri: "https://yt-thumbnail-rank.vercel.app/",
  },
  {
    img: "/assets/sutakku.png",
    title: "Sutakku",
    descr: "A task tracker for developer working with GitHub",
    uri: "https://sutakku.netlify.app/",
  },
  {
    img: "/assets/quizu.png",
    title: "Quizu",
    descr: "A fun quiz game with various categories",
    uri: "https://lyn-eva.github.io/QUIZU/",
  },
];

export const focus = [
  {
    src: "/assets/ts.svg",
    tooltip: "<b>Typescript:</b> JavaScript with syntax for types",
  },
  {
    src: "/assets/nodejs.svg",
    tooltip: "<b>Node.js:</b> JavaScript runtime environment",
  },
  {
    src: "/assets/express.svg",
    tooltip: "<b>Express.js:</b> Minimalist nodejs web framework",
  },
  {
    src: "/assets/nextjs.svg",
    tooltip: "<b>Next.js:</b> Full stack React framework",
  },
  {
    src: "/assets/react.svg",
    tooltip: "<b>React.js:</b> JS ibrary for building user interfaces",
  },
  {
    src: "/assets/tailwind.svg",
    tooltip: "<b>Tailwindcss:</b> Utility-first CSS framework",
  },
  {
    src: "/assets/prisma.svg",
    tooltip: "<b>Prisma:</b> Next-generation Node.js ORM",
  },
  {
    src: "/assets/mysql.svg",
    tooltip: "<b>MySQL:</b> Relational database management system",
  },
];
export const familiar = [
  {
    src: "/assets/python.svg",
    tooltip: "<b>Python:</b> General-purpose programming language",
  },
  {
    src: "/assets/redux.svg",
    tooltip: "<b>Redux:</b> predictable state management container",
  },
  {
    src: "/assets/firebase.svg",
    tooltip: "<b>Firebase:</b> Backend-as-a-service platform",
  },
  {
    src: "/assets/chakraui.svg",
    tooltip: "<b>Chakra UI:</b> UI library for React.js",
  },
  { src: "/assets/mui.svg", tooltip: "<b>MUI:</b> UI library for React.js" },
  {
    src: "/assets/figma.svg",
    tooltip: "<b>Figma:</b> Web-based designing tool",
  },
];
