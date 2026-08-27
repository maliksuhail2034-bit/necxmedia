// Single source of truth for site copy. Edit here — components just render it.
// Anything genuinely missing (real proof, real numbers) is marked TODO instead of invented.

import type { IconName } from '@/components/Icon';

export const site = {
  name: 'NECXMEDIA',
  domain: 'https://necxmedia.com',
  contactEmail: 'suhail@necxmedia.com',
  calendlyUrl:
    'https://calendly.com/maliksuhail2034/30min?hide_gdpr_banner=1&background_color=111108&text_color=faf8f4&primary_color=e8531a',
  youtubeVideoId: process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'Df_MkNlI9CM',
  metaTitle: 'NECXMEDIA — Leads That Already Understand You',
  metaDescription:
    'We build lead education systems that filter, warm, and qualify your prospects before they ever speak to you.',
};

export const nav = {
  links: [
    { label: 'The Problem', href: '/#problem' },
    { label: 'How It Works', href: '/#howitworks' },
    { label: 'The System', href: '/#system' },
    { label: 'Who We Help', href: '/#whowehelp' },
  ],
  cta: { label: 'Book a Strategy Call', href: '/book' },
};

export const hero = {
  eyebrow: 'Lead Education System',
  heading: [
    'Leads that understand you',
    { text: 'before they ever call you.', emphasis: true },
  ],
  sub: 'We build the sales funnels, content systems, Meta ads, and email sequences that educate, filter, and qualify your leads for you. By the time someone reaches out, they already know what you do, they already trust you, and they are already sold.',
  primaryCta: { label: 'Book a Strategy Call', href: '/book' },
  secondaryCta: { label: 'See How It Works', href: '/#howitworks' },
  videoLabel: 'Watch the overview',
  trust: [
    'No more explaining your offer from scratch',
    'Leads that filter themselves',
    'Runs without you',
  ],
};

export const problem = {
  tag: 'The Real Problem',
  heading: 'You repeat your offer on every single call. That is time you will never get back.',
  intro:
    'Your leads come in knowing nothing. You spend the first half of every conversation just getting them up to speed. That is not a sales problem. That is a system problem.',
  cards: [
    {
      num: '01',
      title: 'Every conversation starts from zero',
      body: 'You explain what you do, how it works, why it is different, and why it is worth it. Every single time. The same 20 minutes, every single call, with no system doing it for you in the background.',
    },
    {
      num: '02',
      title: 'Interested leads go cold and disappear',
      body: 'Someone shows interest, then life happens. Without a sequence following up and keeping them warm, those half-won opportunities just quietly walk away. You never even know why.',
    },
    {
      num: '03',
      title: 'Wrong-fit people waste your best hours',
      body: 'No filter means anyone can book a call. You end up spending serious time with people who were never going to buy. A good lead education system removes them before they ever reach you.',
    },
  ],
};

export const howItWorks = {
  tag: 'How It Works',
  heading: 'We build the system that educates. You show up and close.',
  intro:
    'Here is exactly what happens from the moment a stranger finds you to the moment they book a call ready to buy.',
  steps: [
    {
      num: '1',
      title: 'We find the beliefs your leads need to hold before they buy',
      body: 'Every offer has a specific set of objections and mental blocks that stop people from saying yes. We map those out first. That becomes the entire content strategy. Everything we build from here is designed to move people through those beliefs one at a time.',
    },
    {
      num: '2',
      title: 'We build a sales funnel that explains your offer without you',
      body: 'A landing page alone does nothing. We build a full funnel journey where each step educates, removes doubt, and builds trust. By the end of it a lead understands exactly what you do, why it works, and whether it is right for them. The right ones move forward. The wrong ones self-select out.',
    },
    {
      num: '3',
      title: 'We deploy content across channels to keep the funnel fed',
      body: 'Videos, short-form posts, email sequences. We turn your knowledge into content that reaches your audience where they already are, answers the questions they are already asking, and pulls warm leads into your funnel every week without you posting manually every day.',
    },
    {
      num: '4',
      title: 'Leads arrive pre-educated, pre-qualified, and ready to decide',
      body: 'When someone books a call after going through your system, they already understand your offer, they already believe in the approach, and they have already decided you are worth talking to. The conversation becomes a formality. You just confirm the fit and close.',
    },
  ],
};

export const system = {
  tag: 'What Goes Into the System',
  heading: 'Every piece has one job. Move the lead closer to yes.',
  intro: 'The system is made up of five components that work together. Each one feeds the next.',
  items: [
    {
      title: 'Sales Funnels That Educate',
      body: 'Not just a page. A full journey from stranger to sold. We design and write funnels where every step shifts one belief and makes the next step obvious. Leads who go through it understand your offer better than most people you explain it to in person.',
      tag: 'The Core',
      icon: 'funnel' as IconName,
    },
    {
      title: 'Video Content System',
      body: "Video is the fastest way to build trust at scale. We build a content system around short videos that answer your leads' biggest questions, address their real objections, and show them exactly why your approach works. Each one pulls people deeper into your world.",
      tag: 'Trust Builder',
      icon: 'video' as IconName,
    },
    {
      title: 'Email Sequences That Nurture',
      body: 'Not newsletters. Sequences. Every email has a specific job: shift a belief, remove an objection, share proof, or invite action. We write them so they feel personal and worth reading, not like something to archive and forget.',
      tag: 'Always-On Follow-Up',
      icon: 'mail' as IconName,
    },
    {
      title: 'Multi-Channel Content Deployment',
      body: 'We take your core ideas and turn them into content for every channel your audience uses. Your funnel keeps getting new leads without you having to be active everywhere manually every single day.',
      tag: 'Continuous Reach',
      icon: 'network' as IconName,
    },
    {
      title: 'Meta Ads — Copy, Creative & Management',
      body: 'We write the ad copy, design the creative, and run your Meta account ourselves — daily, not on autopilot. Ads bring in people who are already halfway through the funnel\'s beliefs, not cold strangers starting from zero.',
      tag: 'Paid Acquisition',
      icon: 'target' as IconName,
    },
  ],
};

// Note: this is an illustrative model of how the mechanism moves someone through belief
// stages — not a measured client result. Framed as illustrative per the "never invent
// results" rule. Replace with real, sourced numbers once available.
export const funnel = {
  tag: 'The Sales Funnel',
  heading: 'A funnel is not a page. It is a sequence of beliefs.',
  intro:
    'Most businesses have a website. We build a system where every single step moves a stranger one belief closer to becoming a paying client. Here is an illustrative example of that mechanism.',
  illustrativeLabel: 'Illustrative example, not a guaranteed or measured outcome',
  stages: [
    {
      name: 'Awareness',
      desc: 'They discover you through content, ads, or referral',
      count: 100,
      icon: 'awareness' as IconName,
    },
    {
      name: 'Interest',
      desc: 'They enter your funnel and start consuming your content',
      count: 68,
      icon: 'interest' as IconName,
    },
    {
      name: 'Education',
      desc: 'Emails and videos answer their questions and remove doubt',
      count: 41,
      icon: 'education' as IconName,
    },
    {
      name: 'Conviction',
      desc: 'They believe in your approach and self-qualify as a right fit',
      count: 19,
      icon: 'conviction' as IconName,
    },
    {
      name: 'Conversion',
      desc: 'They book a call already sold. You just confirm and close.',
      count: 12,
      icon: 'conversion' as IconName,
    },
  ],
  outcome: 'An illustrative funnel: strangers in, sold conversations out',
  cards: [
    {
      num: '01',
      title: 'Every page has one job',
      body: 'We never put two goals on the same page. Each step in the funnel does exactly one thing: move the lead to the next step. No distractions, no confusion, no leaks.',
    },
    {
      num: '02',
      title: 'The funnel educates, not just sells',
      body: 'Most funnels push people toward a yes. Ours pull people toward understanding. When someone truly understands your offer, the yes happens on its own. That is what makes it stick.',
    },
    {
      num: '03',
      title: 'Wrong-fit leads exit themselves',
      body: 'A well-built funnel does not just convert the right people. It politely removes the wrong ones before they ever waste your time. You only speak to people who have already decided.',
    },
  ],
};

export const whoWeHelp = {
  tag: 'Who We Help',
  heading: 'Built for businesses that already have an offer worth explaining properly.',
  intro:
    "We work best with founders who have a proven high-ticket offer and real demand, but whose growth is capped by how much of their own time each sale takes.",
  fitFor: [
    'You have a high-ticket offer with a track record — this is not your first client.',
    'You are personally on every sales call, and every call starts with the same 20-minute explanation.',
    'You already get leads, but too many of them are the wrong fit for what you sell.',
    'You have real expertise and proof, but no system turning that into content and follow-up.',
  ],
  notFor: [
    "You are still validating your offer or have not closed a client yet.",
    'You are looking for a one-off website, not an ongoing lead system.',
    'You want the cheapest option rather than a system built to convert.',
  ],
};

// TODO — CONTENT REQUIRED: add real testimonials, client logos, case studies, or
// screenshots of results once available. Never fabricate names, numbers, or quotes.
export const socialProof: {
  quote: string;
  name: string;
  role: string;
}[] = [];

export const faq = {
  tag: 'Questions',
  heading: 'Before you book.',
  items: [
    {
      q: 'Who do you work with?',
      a: 'Founders and service businesses with a proven high-ticket offer who are personally handling every sales conversation and want a system to educate and filter leads before they reach the calendar.',
    },
    {
      q: 'What happens after I book a call?',
      a: "We'll ask about your offer, your current lead flow, and where conversations are breaking down. If it looks like a fit, we'll walk you through what building your system would actually involve. If it's not a fit, we'll tell you directly.",
    },
    {
      q: 'How does the process work once we start?',
      a: 'We start by mapping the beliefs your leads need to hold before they buy, then build the funnel, content, and follow-up sequences around that map — the same four-step process described above in "How It Works."',
    },
    {
      q: 'What do you need from us?',
      a: 'Access to your existing offer materials, any past sales calls or objections you can share, and your input during the belief-mapping stage. Most of the ongoing execution is on us.',
    },
    {
      q: 'How long does it take to see results?',
      a: "It depends on your starting point — how much content and proof already exists, and how complex your offer is. We'll give you a realistic timeline for your specific business on the strategy call rather than a generic promise.",
    },
    {
      q: 'What happens on the strategy call itself?',
      a: "It's a fit conversation, not a sales pitch. We diagnose where your current funnel is leaking, and you leave knowing whether this is worth pursuing — whether or not we end up working together.",
    },
    {
      q: 'Is this right for my business?',
      a: "If you already have a proven offer and are the bottleneck in your own sales process, most likely yes. If you're still figuring out what you sell, probably not yet — see \"Who We Help\" above.",
    },
  ],
};

export const finalCta = {
  tag: 'Work With Us',
  heading: ['Let your system do', 'the explaining.'],
  body: 'If you are ready to stop explaining your offer on every call and want a system that does it for you, book a strategy call or send us a short application.',
  primaryCta: { label: 'Book a Strategy Call', href: '/book' },
  secondaryCta: { label: 'Apply to Work With Us', href: '/apply' },
};

export const applyPage = {
  eyebrow: 'Apply',
  heading: "Let's see if we're a fit.",
  intro:
    "Tell us a little about your business and what you're trying to achieve. We'll review it and determine whether a conversation makes sense.",
  submitLabel: 'Apply to Work With NECXMEDIA',
  successHeading: "You're in.",
  successBody:
    "We've received your application and will review it shortly. Want to skip the wait?",
  successCta: { label: 'Book your strategy call', href: '/book' },
};

export const applyFields: {
  id: 'name' | 'email' | 'companyWebsite' | 'whatDoesCompanyDo' | 'whatToImprove' | 'biggestProblem' | 'anythingElse';
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
  placeholder?: string;
}[] = [
  { id: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
  { id: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'you@company.com' },
  {
    id: 'companyWebsite',
    label: 'Company / Website',
    type: 'text',
    required: true,
    placeholder: 'Company name and website',
  },
  {
    id: 'whatDoesCompanyDo',
    label: 'What does your company do?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'whatToImprove',
    label: 'What are you looking to improve?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'biggestProblem',
    label: 'What is your biggest growth/acquisition problem?',
    type: 'textarea',
    required: true,
  },
  {
    id: 'anythingElse',
    label: 'Anything else we should know?',
    type: 'textarea',
    required: false,
    placeholder: 'Optional',
  },
];

export const bookFormFields: {
  id: 'name' | 'email' | 'companyWebsite' | 'biggestProblem';
  label: string;
  type: 'text' | 'email' | 'textarea';
  required: boolean;
  placeholder?: string;
}[] = [
  { id: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
  { id: 'email', label: 'Work email', type: 'email', required: true, placeholder: 'you@company.com' },
  {
    id: 'companyWebsite',
    label: 'Company / Website',
    type: 'text',
    required: true,
    placeholder: 'Company name and website',
  },
  {
    id: 'biggestProblem',
    label: 'What are you looking to fix?',
    type: 'textarea',
    required: false,
    placeholder: 'Optional — a sentence or two is plenty',
  },
];

export const bookPage = {
  eyebrow: 'Book a Call',
  heading: "Let's see whether we can solve this.",
  intro:
    'A 30-minute call to understand your offer, your current lead flow, and whether our system is the right fit for where you are.',
  expect: [
    'We ask about your offer, your audience, and where your current sales process breaks down.',
    'We show you how the belief-mapping and funnel approach would apply to your specific business.',
    "We tell you plainly whether we think it's a fit — no pressure, no pitch deck.",
  ],
  forWho: 'For founders with a proven offer who are ready to stop explaining it on every call.',
  formHeading: 'Tell us where to reach you.',
  formIntro: "Share a few details and we'll set up a time that works.",
  submitLabel: 'Request a Strategy Call',
  calendlyHeading: 'Pick a time that works.',
  calendlyIntro: "Thanks — now grab a slot on the calendar below and you're set.",
};

export const thankYouPage = {
  applied: {
    heading: 'Application received.',
    body: "We'll review what you shared and follow up shortly. If you'd rather not wait, you can grab a strategy call slot directly.",
  },
  booked: {
    heading: "You're booked.",
    body: "We'll see you on the call. In the meantime, here's the overview video if you'd like a head start.",
  },
  cta: { label: 'Book a Strategy Call', href: '/book#calendly' },
};

export const footer = {
  tagline: `${new Date().getFullYear()} NECXMEDIA. Built for founders who want leverage.`,
};
