'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Award, Users, CheckCircle2, Phone, Calendar, Mail, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Button, SectionTitle, ScrollReveal } from './ui-elements';
import { services, projects, testimonials, blogPosts } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const DynamicIcon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://picsum.photos/seed/tech-workspace/1920/1080"
          alt="Tech Workspace"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-bg-main/60 dark:bg-bg-main/70 backdrop-blur-[2px]" />
      </motion.div>

      <div className="container relative z-10 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <ScrollReveal zoom={false}>
          <span className="inline-block px-4 py-1 rounded-full glass text-accent-gold text-xs font-semibold uppercase tracking-widest mb-6">
            100% Committed to Learning
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium text-text-primary mb-6 leading-[1.1] tracking-tight">
            Building My Digital World <br className="hidden md:block" />
            With <span className="italic text-accent-gold">Tech, Apps</span> & Creative Ideas
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
            Hi, I&apos;m Shivam — a young tech creator and digital explorer. I create content around apps, gadgets, tech tools, and useful ideas. This website is my personal online space where I share my projects, blogs, updates, and content journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Tech Content', 'Apps & Tools', 'Gadgets', 'YouTube Creator', 'Blog Updates'].map((cat, i) => (
              <motion.span 
                key={cat} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="px-5 py-2 rounded-full glass text-sm font-medium text-text-secondary hover:text-accent-gold hover:border-accent-gold transition-all cursor-default"
              >
                {cat}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore My Work <ArrowRight size={20} />
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://youtube.com/@onlyp4x', '_blank')}>
              Visit My Channel
            </Button>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export const Services = () => (
  <section id="services" className="py-24 md:py-32 bg-bg-section overflow-hidden">
    <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle
        badge="What I Create"
        title="My Digital Services"
        subtitle="I focus on exploring the digital landscape through content, tools, and creative projects that help people discover the best of tech."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <ScrollReveal
            key={service.id}
            delay={i * 0.1}
            className="group p-8 rounded-[32px] bg-bg-card border border-border-soft hover:border-accent-gold/50 transition-all duration-500 premium-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-bg-card-2 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform duration-500">
              <DynamicIcon name={service.icon} />
            </div>
            <h3 className="text-2xl font-serif font-medium text-text-primary mb-4">{service.title}</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 text-accent-gold font-medium group/link cursor-pointer">
              Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tech', 'Apps', 'YouTube', 'Blogs', 'Projects'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-bg-main overflow-hidden">
      <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionTitle
            badge="My Work"
            title="Projects & Creations"
            subtitle="Explore my latest tech reviews, app discoveries, and digital projects."
          />
          <div className="flex flex-wrap gap-2 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
                  filter === cat ? 'bg-accent-gold text-white' : 'bg-bg-card-2 text-text-secondary hover:text-text-primary'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[32px] cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <span className="text-accent-gold text-sm font-semibold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-text-primary mb-1">{project.title}</h3>
                  <p className="text-text-secondary">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" onClick={() => window.open('https://youtube.com/@onlyp4x', '_blank')}>
            See More on YouTube
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
};

export const About = () => (
  <section id="about" className="py-24 md:py-32 bg-bg-section overflow-hidden">
    <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="right" className="relative aspect-[3/4] rounded-[40px] overflow-hidden">
          <Image
            src="https://picsum.photos/seed/shivam-creator/800/1200"
            alt="Shivam - Only P4X"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent-gold/10 mix-blend-overlay" />
        </ScrollReveal>

        <div className="space-y-8">
          <SectionTitle
            badge="About Me"
            title="Hi, I&apos;m Shivam"
            subtitle="A young creator building a personal tech space to share apps, ideas, tools, and content with the world."
          />
          <p className="text-text-secondary text-lg leading-relaxed">
            I am a tech enthusiast and digital creator passionate about exploring how technology can simplify our lives. From discovering hidden gems in the app store to reviewing the latest gadgets, I aim to provide valuable insights to my audience.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'YouTube Content', value: 'Active', icon: Icons.Youtube },
              { label: 'App Reviews', value: '50+', icon: Icons.Smartphone },
              { label: 'Tech Community', value: 'Growing', icon: Icons.Users },
              { label: 'Creative Projects', value: '10+', icon: Icons.Cpu },
            ].map((stat, i) => (
              <ScrollReveal
                key={stat.label}
                delay={i * 0.1}
                className="p-6 rounded-3xl bg-bg-card border border-border-soft"
              >
                <stat.icon size={24} className="text-accent-gold mb-3" />
                <div className="text-3xl font-serif font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-text-muted">{stat.label}</div>
              </ScrollReveal>
            ))}
          </div>

          <Button variant="primary" size="lg" onClick={() => window.open('https://youtube.com/@onlyp4x', '_blank')}>
            Follow My Journey
          </Button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export const Skills = () => (
  <section id="skills" className="py-24 md:py-32 bg-bg-main overflow-hidden">
    <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle
        badge="My Expertise"
        title="Technical Skills"
        subtitle="The tools and technologies I use to create content and build digital projects."
        centered
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { name: 'Video Editing', icon: Icons.Video },
          { name: 'App Exploration', icon: Icons.Search },
          { name: 'Content Strategy', icon: Icons.Layout },
          { name: 'Digital Marketing', icon: Icons.TrendingUp },
          { name: 'Graphic Design', icon: Icons.Palette },
          { name: 'Tech Reviewing', icon: Icons.Monitor },
          { name: 'Social Media', icon: Icons.Share2 },
          { name: 'Creative Writing', icon: Icons.PenTool },
        ].map((skill, i) => (
          <ScrollReveal
            key={skill.name}
            delay={i * 0.05}
            className="p-6 rounded-3xl bg-bg-card border border-border-soft flex flex-col items-center text-center group hover:border-accent-gold/50 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-bg-card-2 flex items-center justify-center text-accent-gold mb-4 group-hover:scale-110 transition-transform">
              <skill.icon size={24} />
            </div>
            <h3 className="text-lg font-serif font-medium text-text-primary">{skill.name}</h3>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export const Interests = () => (
  <section id="interests" className="py-24 md:py-32 bg-bg-section overflow-hidden">
    <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
      <SectionTitle
        badge="Beyond Tech"
        title="My Interests & Hobbies"
        subtitle="What I do when I&apos;m not exploring apps or creating content."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: 'Photography', icon: Icons.Camera, desc: 'Capturing moments and perspectives through the lens.' },
          { name: 'Gaming', icon: Icons.Gamepad2, desc: 'Exploring virtual worlds and competitive gameplay.' },
          { name: 'Traveling', icon: Icons.Plane, desc: 'Discovering new cultures and digital nomad spots.' },
          { name: 'Reading', icon: Icons.BookOpen, desc: 'Learning from books on tech, business, and growth.' },
        ].map((interest, i) => (
          <ScrollReveal
            key={interest.name}
            delay={i * 0.1}
            className="p-8 rounded-[32px] bg-bg-card border border-border-soft group hover:border-accent-gold/50 transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-bg-card-2 flex items-center justify-center text-accent-gold mb-6 group-hover:rotate-12 transition-transform">
              <interest.icon size={24} />
            </div>
            <h3 className="text-xl font-serif font-medium text-text-primary mb-2">{interest.name}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{interest.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export const Blog = () => (
  <section id="blog" className="py-24 md:py-32 bg-bg-main overflow-hidden">
    <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <SectionTitle
          badge="Latest Blogs"
          title="Tech Updates & Insights"
          subtitle="My thoughts on the latest apps, gadgets, and digital trends."
        />
        <Button variant="outline" className="md:mb-16" onClick={() => window.open('https://youtube.com/@onlyp4x', '_blank')}>View All Updates</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <ScrollReveal
            key={post.id}
            delay={i * 0.1}
            className="group cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-4 py-1 rounded-full glass text-xs font-semibold uppercase tracking-widest text-text-primary">
                {post.category}
              </div>
            </div>
            <h3 className="text-2xl font-serif font-medium text-text-primary mb-3 group-hover:text-accent-gold transition-colors">{post.title}</h3>
            <p className="text-text-secondary mb-4 line-clamp-2">{post.excerpt}</p>
            <span className="inline-flex items-center gap-2 text-accent-gold font-medium">
              Read Article <ArrowRight size={16} />
            </span>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  </section>
);

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-section overflow-hidden">
      <ScrollReveal className="container px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionTitle
              badge="Connect"
              title="Let&apos;s Build Something Together"
              subtitle="Have a question, a content idea, or just want to say hi? I&apos;d love to hear from you."
            />

            <div className="space-y-8 mt-12">
              <a href="tel:7488530499" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-bg-card flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-text-muted text-sm uppercase tracking-widest mb-1">Call Me</div>
                  <div className="text-xl font-serif text-text-primary">7488530499</div>
                </div>
              </a>
              <a href="mailto:shivamkonan143@gmail.com" className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-bg-card flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-text-muted text-sm uppercase tracking-widest mb-1">Email Me</div>
                  <div className="text-xl font-serif text-text-primary">shivamkonan143@gmail.com</div>
                </div>
              </a>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-bg-card flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold group-hover:text-white transition-all">
                  <Icons.Instagram size={24} />
                </div>
                <div>
                  <div className="text-text-muted text-sm uppercase tracking-widest mb-1">Instagram</div>
                  <a href="https://www.instagram.com/skp__101?igsh=MWpsbTJ3NWpzcTV2aA==" target="_blank" className="text-xl font-serif text-text-primary hover:text-accent-gold transition-colors">@skp__101</a>
                </div>
              </div>
            </div>
          </div>

          <ScrollReveal
            direction="left"
            className="p-8 md:p-12 rounded-[40px] bg-bg-card border border-border-soft premium-shadow"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif text-text-primary mb-4">Message Sent</h3>
                  <p className="text-text-secondary">Thank you for reaching out. I&apos;ll get back to you as soon as possible!</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-secondary ml-1">Full Name</label>
                      <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-bg-card-2 border border-border-soft focus:border-accent-gold outline-none transition-colors text-text-primary" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-secondary ml-1">Email Address</label>
                      <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-bg-card-2 border border-border-soft focus:border-accent-gold outline-none transition-colors text-text-primary" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-secondary ml-1">Phone Number</label>
                      <input required type="tel" className="w-full px-6 py-4 rounded-2xl bg-bg-card-2 border border-border-soft focus:border-accent-gold outline-none transition-colors text-text-primary" placeholder="7488530499" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-secondary ml-1">Inquiry Type</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-bg-card-2 border border-border-soft focus:border-accent-gold outline-none transition-colors text-text-primary appearance-none">
                        <option>Collaboration</option>
                        <option>App Review</option>
                        <option>Tech Question</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                    <textarea required rows={4} className="w-full px-6 py-4 rounded-2xl bg-bg-card-2 border border-border-soft focus:border-accent-gold outline-none transition-colors text-text-primary resize-none" placeholder="How can I help you?" />
                  </div>
                  <Button variant="primary" size="lg" className="w-full" type="submit">
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
};
