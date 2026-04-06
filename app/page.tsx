'use client';

import React from 'react';
import { Header } from '@/components/header';
import { Hero, Services, Portfolio, About, Skills, Interests, Blog, Contact } from '@/components/sections';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
