import { Button } from './ui/Button';
import { Input } from './ui/Input';
export function Footer() {
  return <footer className="bg-white text-black pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Side - Logo and Navigation */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 group">
              <img src="/shenovate png_1.png" alt="Shenovate Logo" className="w-12 h-12 object-contain" />
             
            </div>

<nav className="flex flex-row gap-1 flex-wrap">
              <a href="#" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
              <a href="#about" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
              <a href="#projects" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">Project</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
              <a href="#contact" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
              <a href="#" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">Help</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
              <a href="#" className="relative px-4 py-2 text-[16px] font-[700] text-slate-600 hover:text-slate-900 transition-colors group overflow-hidden w-fit font-['Instrument_Sans']" style={{ fontStyle: 'normal', lineHeight: '100%', letterSpacing: '-6%' }}>
                <span className="relative z-10">Privacy</span>
                <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 -z-0" />
              </a>
            </nav>
          </div>

          {/* Right Side - Newsletter */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="max-w-md">
              <h3 className="font-semibold mb-2">Stay up to date</h3>
              <form className="flex gap-2 mb-2" onSubmit={e => e.preventDefault()}>
                <Input placeholder="Enter your email" className="bg-gray-100 border-gray-300 focus:ring-pink-500" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Shenovate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
