import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 'tech-content',
    title: 'Tech Content',
    description: 'Sharing interesting and useful content around technology, digital tools, and trending ideas.',
    icon: 'Cpu',
  },
  {
    id: 'apps-tools',
    title: 'Apps & Tools',
    description: 'Exploring apps, testing useful tools, and showcasing digital resources that can help people.',
    icon: 'Smartphone',
  },
  {
    id: 'gadget-interest',
    title: 'Gadget Interest',
    description: 'Discovering gadgets, accessories, and tech products that are practical, affordable, and useful.',
    icon: 'Watch',
  },
  {
    id: 'youtube-content',
    title: 'YouTube Content',
    description: 'Creating engaging short-form content, especially around fun, tech, and internet-based ideas.',
    icon: 'Youtube',
  },
  {
    id: 'creative-projects',
    title: 'Creative Projects',
    description: 'Working on personal website ideas, digital showcases, and future online projects.',
    icon: 'Code',
  },
  {
    id: 'learning-journey',
    title: 'Learning Journey',
    description: 'Documenting growth, experiments, and progress as I continue building my skills in tech and content creation.',
    icon: 'TrendingUp',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Only P4X Channel Growth',
    location: 'YouTube Journey',
    category: 'YouTube',
    image: 'https://picsum.photos/seed/youtube/1200/800',
  },
  {
    id: 2,
    title: 'Tech & App Discovery',
    location: 'Digital Exploration',
    category: 'Apps',
    image: 'https://picsum.photos/seed/apps/1200/800',
  },
  {
    id: 3,
    title: 'Personal Website Project',
    location: 'Web Development',
    category: 'Projects',
    image: 'https://picsum.photos/seed/web/1200/800',
  },
  {
    id: 4,
    title: 'Creator Blog Collection',
    location: 'Content Writing',
    category: 'Blogs',
    image: 'https://picsum.photos/seed/writing/1200/800',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Tech Enthusiast',
    project: 'App Review',
    text: 'Shivam has a great eye for useful apps. His content is always practical and easy to follow.',
  },
  {
    id: 2,
    name: 'Content Creator',
    project: 'Collaboration',
    text: 'Working with Only P4X was a great experience. His creative ideas for short-form content are top-notch.',
  },
  {
    id: 3,
    name: 'Digital Explorer',
    project: 'Tool Discovery',
    text: 'I found some of my most used productivity tools through Shivam\'s tech updates. Highly recommended!',
  },
];

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of Tech Content',
    category: 'Tech',
    excerpt: 'Exploring how short-form video is changing the way we learn about new gadgets and apps.',
    image: 'https://picsum.photos/seed/tech-blog/800/600',
  },
  {
    id: 2,
    title: 'Top 5 Apps for Creators',
    category: 'Apps',
    excerpt: 'A curated list of essential digital tools to boost your productivity and creativity.',
    image: 'https://picsum.photos/seed/apps-blog/800/600',
  },
  {
    id: 3,
    title: 'My Journey as a Digital Creator',
    category: 'Creator Journey',
    excerpt: 'Reflections on building a personal brand and learning new skills in the digital age.',
    image: 'https://picsum.photos/seed/journey-blog/800/600',
  },
];
