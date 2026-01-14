import React from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
export function Footer() {
  return <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Shenovate
              </span>
            </div>

            <div className="max-w-md">
              <h3 className="text-white font-semibold mb-2">Stay up to date</h3>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="flex gap-2 mb-2" onSubmit={e => e.preventDefault()}>
                <Input placeholder="Enter your email" className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:ring-pink-500" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-slate-500">
                This is a hint text to help user.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-pink-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-pink-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-pink-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400 transition-colors">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Shenovate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
}