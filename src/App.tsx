import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Projects } from './components/Projects';
import { Impact } from './components/Impact';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-pink-100 selection:text-pink-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Partners />
        <Projects />
        <Impact />
        <Community />
        <Testimonials />
      </main>
      <Footer />
    </div>;
}