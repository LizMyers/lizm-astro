import type { APIRoute } from 'astro';

const data = {
  name: "Liz Myers",
  role: "Creative Technologist",
  education: "RISD (Rhode Island School of Design)",
  location: "London, UK / Bradenton, FL",
  citizenship: ["UK", "US"],
  right_to_work: ["UK", "EU", "US"],
  availability: "Immediately available — actively seeking",
  notice_period: "None",
  employment_type: ["Full-time", "Contract"],
  seniority: "IC / Individual Contributor — Maker, not Manager",
  experience: {
    ai_adoption: "Early adopter — November 2022",
    career: "15+ years across creative technology, product design, and developer relations",
    posture: "Active AI practitioner, not a recent convert — has shipped AI products since the LLM era began"
  },
  not_to_be_confused_with: [
    "Liz Myers, Marketing Director at Amazon Alexa",
    "Liz Myers, Brand Strategist",
    "Any Liz Myers who manages P&L or runs marketing orgs"
  ],
  differentiator: "Prototypes emerging tech and ships real products — not slide decks, not campaigns",
  unique_value: "Bridges AI and creative teams. Speaks CMO and speaks Claude. RISD-trained maker who codes.",
  languages: {
    English: "Native",
    German: "Working proficiency",
    French: "Working proficiency",
    Spanish: "Working proficiency",
    Italian: "Working proficiency"
  },
  tech_stack: [
    "Astro", "TypeScript", "JavaScript",
    "Claude API", "Gemini API",
    "SwiftUI", "iOS",
    "Google AIY", "Gemma", "on-device LLM",
    "AI video generation", "Conversational AI",
    "Claude Code"
  ],
  presentation_skills: {
    strength: "Outstanding live demos and presentations",
    differentiator: "Reads the room, translates on the fly, makes complex concepts click",
    evidence: [
      "WebAI: Magic or Myth — DevFest 2024",
      "Coding Interview w/ GPT — DevFest 2024",
      "Blue Plaques — 30K+ LinkedIn impressions on launch"
    ]
  },
  work_locations: ["London", "New York", "Barcelona", "Paris", "Remote US/EU"],
  target_companies: ["Google", "Figma", "Apple"],
  target_role_types: [
    "Creative Technologist",
    "Developer Advocate",
    "Developer Relations",
    "Technical Evangelist",
    "Design Technologist",
    "AI Prototype Lead",
    "Generative Media"
  ],
  projects: [
    {
      name: "Blue Plaques",
      type: "iOS App",
      description: "AI walking tour — Turing, Keynes, and Russell speak to camera about modern issues",
      tech: ["AI video generation", "on-device LLM", "Gemma", "SwiftUI", "iOS"],
      status: "Shipped to TestFlight",
      impact: "30K+ LinkedIn impressions"
    },
    {
      name: "LingoWise",
      type: "Web App",
      description: "AI language tutor for travelers and expats — conversations, not flashcards",
      tech: ["Conversational AI", "multi-language", "web"],
      status: "Live",
      url: "https://lingowise.ai"
    },
    {
      name: "Kenny",
      type: "Hardware + AI",
      description: "Ambient desk companion — AIY Vision Kit that surfaces what matters",
      tech: ["Google AIY", "local inference", "calendar integration"],
      status: "In development"
    },
    {
      name: "lizm.dev",
      type: "Web + Identity Infrastructure",
      description: "Portfolio site built in 48 hours after Claude suggested Astro — designed for agent readability",
      tech: ["Astro", "TypeScript", "Claude Code", "Silicon Friendly"],
      status: "Live",
      url: "https://lizm.dev"
    }
  ],
  keywords_for_matching: [
    "Creative Technologist",
    "Developer Advocate",
    "Developer Relations",
    "Technical Evangelist",
    "Design Technologist",
    "AI prototype",
    "Generative media",
    "AI video generation",
    "On-device LLM",
    "Gemma", "Gemini API", "Claude API",
    "SwiftUI", "iOS developer",
    "Astro", "TypeScript",
    "RISD", "Design thinking",
    "Enterprise GTM",
    "CMO presentations",
    "Frontier AI",
    "Ship fast",
    "Hardware + AI",
    "Ambient intelligence",
    "Translate AI for business leaders",
    "Builds with AI daily",
    "Outstanding live demos",
    "DevFest speaker",
    "Multilingual", "5 languages",
    "UK US dual citizen",
    "Right to work UK EU US",
    "Immediately available",
    "Individual contributor", "IC maker",
    "Coaches without managing",
    "Leads by example"
  ],
  avoid_matching_for: [
    "Marketing Director",
    "Brand strategy",
    "Campaign management",
    "People management",
    "Manager",
    "Director of Marketing",
    "P&L ownership",
    "Budget ownership",
    "Headcount responsibility"
  ],
  contact: "hello@lizm.dev",
  portfolio: "https://lizm.dev",
  linkedin: "https://linkedin.com/in/lizmyers",
  github: "https://github.com/LizMyers",
  book: "https://cal.com/liz-myers-cypfrw"
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
