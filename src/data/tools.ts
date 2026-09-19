// Public, curated inventory. Keep addresses, account IDs, serial numbers,
// credentials, and live connection state out of this file.
export type DeviceKind = "laptop" | "board" | "desktop" | "server" | "phone";
export type Device = {
  id: string;
  name: string;
  kind: DeviceKind;
  category: string;
  model: string;
  summary: string;
  specs: [string, string][];
  storage?: { total: string; drives: string[] };
  note?: string;
  x: number;
  y: number;
};

export const devices: Device[] = [
  {
    id: "ingenuity",
    name: "Ingenuity",
    kind: "laptop",
    category: "Primary Machine",
    model: "14 inch MacBook Pro · M4 Max",
    summary: "Primary work machine.",
    specs: [
      ["Chip", "Apple M4 Max"],
      ["CPU", "14 cores · 10 performance + 4 efficiency"],
      ["GPU", "32 cores"],
      ["Memory", "36 GB unified"],
      ["Operating System", "macOS"],
    ],
    x: 25,
    y: 25,
  },
  {
    id: "perseverance",
    name: "Perseverance",
    kind: "desktop",
    category: "Gaming + Local LLM Machine",
    model: "RTX 4070 Ti SUPER · Core i7-14700K",
    summary: "Gaming and local LLM machine.",
    storage: {
      total: "5.73 TB",
      drives: [
        "1 TB · Crucial P3 Plus · NVMe SSD",
        "2 TB · Kingston NV3 · NVMe SSD",
        "480 GB · Kingston SA400S37480G · SATA SSD",
        "250 GB · Samsung 860 EVO · SATA SSD",
        "2 TB · Western Digital WD20EZRZ · SATA HDD",
      ],
    },
    specs: [
      ["CPU", "Intel Core i7-14700K"],
      ["GPU", "Gigabyte RTX 4070 Ti SUPER WINDFORCE MAX OC · 16 GB"],
      ["Memory", "Corsair 32 GB DDR5-5200 · 2 × 16 GB"],
      ["Motherboard", "Gigabyte Z790 UD AX"],
      ["Cooling", "Cooler Master ML240L Core ARGB"],
      ["Case", "Cooler Master MB520 Mesh ARGB"],
      ["Power supply", "Gigabyte AORUS P850W · 850 W · 80 Plus Gold · Modular"],
      ["Operating System", "Windows 11"],
    ],
    x: 75,
    y: 25,
  },
  {
    id: "curiosity",
    name: "Curiosity",
    kind: "board",
    category: "Hermes agent host",
    model: "Raspberry Pi 4 Model B",
    summary: "Hermes agent host machine.",
    specs: [
      ["CPU", "ARM Cortex-A72 · 4 cores"],
      ["Clock", "Up to 1.8 GHz"],
      ["Memory", "8 GB"],
      ["Storage", "512 GB"],
      ["Operating System", "Debian 13"],
    ],
    x: 25,
    y: 75,
  },
  {
    id: "serenity",
    name: "Serenity",
    kind: "server",
    category: "Self hosting server",
    model: "DigitalOcean Droplet",
    summary: "Self hosting server.",
    specs: [
      ["CPU", "1 Intel virtual CPU"],
      ["Memory", "2 GB"],
      ["Storage", "50 GiB"],
      ["Operating System", "Debian 12"],
    ],
    x: 75,
    y: 75,
  },
];

export const agents = [
  {
    name: "OpenAI Codex",
    url: "https://openai.com/codex/",
    logo: "/images/agents/codex.svg",
    tag: "Primary agent",
    detail: "GPT-6 Astra",
    description: "My primary AI agent.",
  },
  {
    name: "Hermes Agent",
    url: "https://hermes-agent.nousresearch.com/",
    logo: "/images/agents/hermes.svg",
    tag: "Non-Coding Generalist Agent",
    detail: "Hermes agent",
    description: "For general life-os tasks",
  },
  {
    name: "Noesis",
    url: "https://github.com/SwarnimWalavalkar/noesis",
    mark: "n",
    tag: "Custom Agent",
    detail: "A self evolving agent harness",
    description:
      "An agent I’m building myself. Part tool, part ongoing experiment.",
  },
];

export const accessories = [
  { category: "Phone", name: "iPhone 16 Pro" },
  { category: "Earbuds", name: "AirPods Pro 2" },
  { category: "Keyboard", name: "Lofree Flow 2 - 100% layout, Void Switches" },
  { category: "Monitor", name: "Samsung Odyssey G7 - 27 inch, 1440p, 240hz" },
  { category: "Headphones", name: "Sony WH-1000XM4" },
  { category: "Fitness tracker", name: "Google Fitbit Air" },
];

type SoftwareItem = {
  links: { name: string; url: string }[];
  note?: string;
  secondary?: { name: string; url: string };
};

export const software: { category: string; items: SoftwareItem[] }[] = [
  {
    category: "Devtools",
    items: [
      {
        links: [
          { name: "Ghostty", url: "https://ghostty.org/" },
          { name: "zsh", url: "https://www.zsh.org/" },
          { name: "Starship", url: "https://starship.rs/" },
          { name: "tmux", url: "https://github.com/tmux/tmux" },
        ],
        secondary: { name: "cmux", url: "https://cmux.com/" },
      },
      {
        links: [{ name: "ChatGPT app", url: "https://chatgpt.com/download/" }],
      },
      { links: [{ name: "Cursor", url: "https://cursor.com/" }] },
      { links: [{ name: "OrbStack", url: "https://orbstack.dev/" }] },
      { links: [{ name: "Yaak", url: "https://yaak.app/" }] },
      { links: [{ name: "TablePlus", url: "https://tableplus.com/" }] },
    ],
  },
  {
    category: "General utilities",
    items: [
      {
        links: [{ name: "Helium", url: "https://helium.computer/" }],
        note: "Primary browser",
      },
      {
        links: [{ name: "Dia", url: "https://www.diabrowser.com/" }],
        note: "Reading / research",
      },
      { links: [{ name: "Raycast", url: "https://www.raycast.com/" }] },
      { links: [{ name: "Antinote", url: "https://antinote.io/" }] },
      { links: [{ name: "Obsidian", url: "https://obsidian.md/" }] },
      { links: [{ name: "Notion", url: "https://www.notion.com/" }] },
      { links: [{ name: "Readwise Reader", url: "https://readwise.io/read" }] },
      { links: [{ name: "Tailscale", url: "https://tailscale.com/" }] },
    ],
  },
  {
    category: "Work",
    items: [
      { links: [{ name: "Slack", url: "https://slack.com/" }] },
      { links: [{ name: "Linear", url: "https://linear.app/" }] },
      { links: [{ name: "Granola", url: "https://www.granola.ai/" }] },
      { links: [{ name: "Telegram", url: "https://telegram.org/" }] },
      {
        links: [
          { name: "Google Workspace", url: "https://workspace.google.com/" },
        ],
      },
    ],
  },
];
