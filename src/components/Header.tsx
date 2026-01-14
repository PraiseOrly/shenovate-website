import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    scrollY
  } = useScroll();
  // Parallax/Movement effects for the header content
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#'
  }, {
    name: 'About Us',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <>
      <motion.header className="fixed z-50 left-0 right-0 flex justify-center transition-all duration-500 ease-out" initial={{
      y: -100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1,
      top: isScrolled ? '1.5rem' : '0rem'
    }} transition={{
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }}>
        <motion.div className={`
            relative flex items-center justify-between px-6 md:px-8 transition-all duration-500
${isScrolled ? 'w-[45%] md:w-full md:max-w-[1260px] bg-white/90 backdrop-blur-xl py-2 rounded-lg' : 'w-full bg-transparent py-4'}
          `} layout>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
<img src="/shenovate png_1.png" alt="Shenovate Logo" className="w-16 h-16 object-contain" />
            
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
{navLinks.map(link => <a key={link.name} href={link.href} className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">{link.name}</span>
                <motion.div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" layoutId="navbar-hover" transition={{
              duration: 0.2
            }} />
              </a>)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button size="sm" variant="primary" className={isScrolled ? 'shadow-none' : 'shadow-lg shadow-pink-600/20'}>
              Join Community!
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden pt-24 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => <motion.a key={link.name} href={link.href} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: i * 0.1
          }} className="text-2xl font-medium text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </motion.a>)}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="pt-6">
                <Button className="w-full text-lg h-12">
                  Join Our Community
                </Button>
              </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}