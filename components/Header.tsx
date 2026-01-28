'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { m, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks: NavLink[] = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/platform/overview', label: 'Platform' },
    { href: '/sectors/hub', label: 'Industries' },
    { href: '/resources', label: 'Resources' },
    { href: '/partners', label: 'Partners' },
    { href: '/solutions/hub', label: 'Solutions' },
    { href: '/roles/hub', label: 'Roles' },
    { href: '/energy', label: 'Decarbonisation Hub' },
    { href: '/contact', label: 'Contact' },
  ], []);

  // Header is black if it's not the home page OR if it's scrolled on the home page
  const isBlackHeader = !isHomePage || isScrolled;

  return (
    <m.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlackHeader 
          ? 'bg-black border-b border-white/10 py-3' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/unifi-assets/logo.png"
                alt="Unifi.id"
                className={`transition-all duration-500 ${isBlackHeader ? 'h-10' : 'h-12'} w-auto brightness-0 invert`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Visible on medium screens and up */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} />
            ))}
            
            {/* Book a Demo Button */}
            <Link
              href="/contact"
              className="px-8 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Mobile Menu Button - Only visible on small screens */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Only visible on small screens when open */}
        {isMobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden mt-4 pb-6 border-t border-white/10 pt-4"
          >
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-white/10 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-8 py-3 mt-4 rounded-sm font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300 text-center"
              >
                Book a Demo
              </Link>
            </nav>
          </m.div>
        )}
      </div>
    </m.header>
  );
}

function NavLinkItem({ link }: { link: NavLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-2 text-[11px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-white/80"
    >
      {link.label}
      
      {/* Unifi.id Style Hover Line Animation */}
      <m.div
        initial={false}
        animate={{ 
          width: isHovered ? '100%' : '0%',
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 h-[2px] bg-white"
      />
    </Link>
  );
}
