'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import { Menu, X, Moon, Sun, ChevronRight, Phone, Mail, MapPin, Youtube, Instagram } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/hooks/use-theme';
import { Button } from './ui-elements';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (isMenuOpen) {
      setIsVisible(true);
      return;
    }
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What I Create', href: '#services' },
    { name: 'My Work', href: '#portfolio' },
    { name: 'About Me', href: '#about' },
    { name: 'My Skills', href: '#skills' },
    { name: 'Latest Blogs', href: '#blog' },
    { name: 'Let\'s Connect', href: '#contact' },
    { name: 'App Link', href: '/app-links' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold origin-left z-[100]"
        style={{ scaleX }}
      />
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={isVisible ? 'visible' : 'hidden'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4',
          isScrolled ? 'bg-bg-main/80 backdrop-blur-lg border-b border-border-soft py-3' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-text-primary">
              ONLY P4X
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-accent-gold -mt-1">
              SHIVAM
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.href.startsWith('http')) {
                    window.open(link.href, '_blank');
                  } else if (link.href.startsWith('/')) {
                    router.push(link.href);
                  } else {
                    if (pathname !== '/') {
                      router.push('/' + link.href);
                    } else {
                      document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="text-sm font-medium text-text-secondary hover:text-accent-gold transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-bg-glass transition-colors text-text-primary cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-full hover:bg-bg-glass transition-colors text-text-primary cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
            <Button variant="primary" size="sm" className="hidden lg:flex" onClick={() => window.open('https://youtube.com/@onlyp4x', '_blank')}>
              Visit YouTube
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-bg-main z-[70] p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-text-primary">ONLY P4X</span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-accent-gold">SHIVAM</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-bg-glass text-text-primary"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mb-auto">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (link.href.startsWith('http')) {
                        window.open(link.href, '_blank');
                      } else if (link.href.startsWith('/')) {
                        router.push(link.href);
                      } else {
                        if (pathname !== '/') {
                          router.push('/' + link.href);
                        } else {
                          document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-2xl font-serif text-text-primary hover:text-accent-gold flex items-center justify-between group cursor-pointer text-left w-full"
                  >
                    {link.name}
                    <ChevronRight size={20} className="text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </nav>

              <div className="mt-12 pt-8 border-t border-border-soft space-y-6">
                <div className="space-y-4">
                  <a href="tel:7488530499" className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors">
                    <Phone size={18} />
                    <span>7488530499</span>
                  </a>
                  <a href="mailto:shivamkonan143@gmail.com" className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors">
                    <Mail size={18} />
                    <span>shivamkonan143@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin size={18} />
                    <span>55 Design District, Miami, FL</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://youtube.com/@onlyp4x" target="_blank" className="p-3 rounded-full bg-bg-card-2 text-text-primary hover:bg-accent-gold hover:text-white transition-all">
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.instagram.com/skp__101?igsh=MWpsbTJ3NWpzcTV2aA==" target="_blank" className="p-3 rounded-full bg-bg-card-2 text-text-primary hover:bg-accent-gold hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Button variant="secondary" size="sm" className="w-full" onClick={() => window.location.href = 'tel:7488530499'}>Call Me</Button>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => { setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Connect</Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
