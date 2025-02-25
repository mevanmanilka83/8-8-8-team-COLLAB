import { Users, Fingerprint, Shield, Zap, Edit, BarChart2 } from "lucide-react";

import user1 from "../assets/dev/user1.png";
import user2 from "../assets/dev/user2.png";
import user3 from "../assets/dev/user3.png";
import user4 from "../assets/dev/user4.png";
import user5 from "../assets/dev/user5.png";
import user6 from "../assets/dev/user6.png";

//team collaboration platform
export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Alex Lee",
    company: "Tech Innovators",
    image: user1,
    text: "Our 8:88 team model has never been more efficient! The tools helped streamline communication and project flow, which resulted in faster deliveries.",
  },
  {
    user: "Sam Taylor",
    company: "Future Solutions",
    image: user2,
    text: "As a team of 8:88 members, we needed a platform that would allow us to work simultaneously on different aspects of the project. This platform exceeded our expectations.",
  },
  {
    user: "Jordan Brown",
    company: "NexTech",
    image: user3,
    text: "Using these collaboration tools has transformed the way our 8:88 team works. Real-time feedback and seamless workflow integration have made us more productive than ever.",
  },
  {
    user: "Rachel White",
    company: "Innovative Systems",
    image: user4,
    text: "The team-based features made it easier to break down tasks and delegate. As an 8:88 team, we were able to complete projects with better coordination and fewer mistakes.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Users />,
    text: "Team-Oriented Workflow",
    description:
      "Facilitate seamless collaboration with an intuitive, team-oriented workflow that lets everyone stay on the same page.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Role Support",
    description:
      "Easily manage different roles within your 8:88 team structure, allowing each team member to have access to the tools they need.",
  },
  {
    icon: <Shield />,
    text: "Customizable Templates",
    description:
      "Start projects quickly with customizable templates that suit various team needs, from design to execution.",
  },
  {
    icon: <Zap />,
    text: "Real-Time Team Previews",
    description:
      "Allow your team to see live changes and updates as they happen, enabling faster decisions and iterations.",
  },
  {
    icon: <Edit />,
    text: "Collaborative Editing Tools",
    description:
      "Enhance team productivity with real-time collaborative editing, so team members can contribute instantly.",
  },
  {
    icon: <BarChart2 />,
    text: "Comprehensive Analytics",
    description:
      "Gain actionable insights into team performance and the effectiveness of your projects with integrated analytics tools.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Team Integration",
    description:
      "Connect your entire team with unified communication channels, shared workspaces, and collaborative tools.",
  },
  {
    title: "Project Progress Tracking",
    description:
      "Monitor team achievements, milestones, and deliverables with visual progress indicators and reporting.",
  },
  {
    title: "Intelligent Team Coordination",
    description:
      "Automatically sync team schedules, distribute workload, and coordinate across different time zones.",
  },
  {
    title: "Cross-Team Collaboration",
    description:
      "Enable smooth interaction between different team units with shared resources and synchronized workflows.",
  },
];

export const pricingOptions = [
  {
    title: "Basic Team",
    price: "$0",
    features: [
      "Limited Board Sharing",
      "5 Gb Team Storage",
      "Basic Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro Team",
    price: "$20",
    features: [
      "Unlimited Board Sharing",
      "10 Gb Team Storage",
      "Advanced Web Analytics",
      "Private Mode",
      "Collaboration Tools",
    ],
  },
  {
    title: "Enterprise Team",
    price: "$300",
    features: [
      "Unlimited Board Sharing",
      "Unlimited Team Storage",
      "High-Performance Network",
      "Private Mode",
      "Dedicated Support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Team Workflow Guide" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Collaborative Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Team Meetups" },
  { href: "#", text: "Networking Events" },
  { href: "#", text: "Team Building Activities" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs and Collaborations" },
];
