'use client';

import React from 'react';
import { Youtube, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

import { useRouter, usePathname } from 'next/navigation';

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-main pt-24 pb-12 border-t border-border-soft">
      <div className="container px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold text-text-primary tracking-tight">ONLY P4X</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent-gold font-semibold -mt-1">SHIVAM</span>
            </div>
            <p className="text-text-secondary leading-relaxed">
              Exploring Apps, Tech Tools, and Smart Digital Ideas. A young creator building a personal tech space.
            </p>
            <div className="flex gap-4">
              <a href="https://youtube.com/@onlyp4x" target="_blank" className="p-3 rounded-full bg-bg-card-2 text-text-primary hover:bg-accent-gold hover:text-white transition-all">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/skp__101?igsh=MWpsbTJ3NWpzcTV2aA==" target="_blank" className="p-3 rounded-full bg-bg-card-2 text-text-primary hover:bg-accent-gold hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-text-primary font-serif text-xl mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: 'What I Create', id: 'services' },
                { name: 'My Work', id: 'portfolio' },
                { name: 'About Me', id: 'about' },
                { name: 'My Skills', id: 'skills' },
                { name: 'Latest Blogs', id: 'blog' },
                { name: 'Let\'s Connect', id: 'contact' },
                { name: 'App Links', id: '/app-links' }
              ].map((item) => (
                <li key={item.name}>
                  <button 
                    onClick={() => {
                      if (item.id.startsWith('/')) {
                        router.push(item.id);
                      } else {
                        if (pathname !== '/') {
                          router.push('/' + item.id);
                        } else {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="text-text-secondary hover:text-accent-gold transition-colors cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-text-primary font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-text-secondary">
                <Phone size={18} className="text-accent-gold shrink-0" />
                <span>7488530499</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Mail size={18} className="text-accent-gold shrink-0" />
                <span>shivamkonan143@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Instagram size={18} className="text-accent-gold shrink-0" />
                <a href="https://www.instagram.com/skp__101?igsh=MWpsbTJ3NWpzcTV2aA==" target="_blank" className="hover:text-accent-gold transition-colors">@skp__101</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-soft flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Only P4X. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-text-muted">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="p-4 rounded-full bg-bg-card-2 text-accent-gold border border-border-soft hover:bg-accent-gold hover:text-white transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
