'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button, SectionTitle } from '@/components/ui-elements';
import { ExternalLink, Download, ArrowLeft, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

const apps = [
  {
    id: 1,
    name: 'Earning App',
    description: 'A reliable earning platform with great rewards and easy withdrawal options.',
    link: 'https://dl2ti09at2kbw.cloudfront.net/v/U/ZJq.html?uid=193058851&pid=202404000',
    icon: <TrendingUp className="text-accent-gold" size={32} />,
    badge: 'Recommended',
    features: ['High Rewards', 'Instant Payout', 'Secure Platform']
  },
  // Add more apps here in the future
];

export default function AppLinksPage() {
  return (
    <main className="min-h-screen bg-bg-main text-text-primary">
      <Header />
      
      <div className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-gold transition-colors mb-12 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <SectionTitle 
            badge="Exclusive Apps"
            title="Recommended Applications"
            subtitle="Explore a curated list of apps for earning, productivity, and more. Handpicked for my community."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card-2 border border-border-soft rounded-3xl p-8 hover:border-accent-gold/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Decorative Background Element */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-bg-main rounded-2xl border border-border-soft group-hover:border-accent-gold/30 transition-colors">
                      {app.icon}
                    </div>
                    {app.badge && (
                      <span className="px-3 py-1 bg-accent-gold/10 text-accent-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-accent-gold/20">
                        {app.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-accent-gold transition-colors">
                    {app.name}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                        <ShieldCheck size={14} className="text-accent-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.open(app.link, '_blank')}
                  >
                    <Download size={18} />
                    Get App Now
                  </Button>
                </div>
              </motion.div>
            ))}

            {/* Placeholder for future apps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-bg-card-2/50 border border-dashed border-border-soft rounded-3xl p-8 flex flex-col items-center justify-center text-center group"
            >
              <div className="p-4 bg-bg-main/50 rounded-2xl border border-dashed border-border-soft mb-4">
                <Zap className="text-text-secondary/30" size={32} />
              </div>
              <h3 className="text-lg font-serif font-medium text-text-secondary/50 mb-2">
                More Apps Coming Soon
              </h3>
              <p className="text-text-secondary/40 text-xs">
                Stay tuned for more handpicked recommendations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
