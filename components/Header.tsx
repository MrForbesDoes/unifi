'use client';

import Link from 'next/link';
import { useMemo, useState, useEffect, useRef } from 'react';
import { m, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Hide header when scrolling down, show when scrolling up
    if (latest < 10) {
      // Always show at the very top
      setIsHeaderVisible(true);
    } else if (latest > lastScrollY.current) {
      // Scrolling down - hide header
      setIsHeaderVisible(false);
    } else {
      // Scrolling up - show header
      setIsHeaderVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  // Close mobile menu when header hides
  useEffect(() => {
    if (!isHeaderVisible && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isHeaderVisible, isMobileMenuOpen]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks: NavLink[] = useMemo(() => [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    {
      href: '/platform/overview',
      label: 'Cortex Platform',
      children: [
        { href: '/platform/overview', label: 'Platform Overview' },
      ],
    },
    {
      href: '/solutions/hub',
      label: 'Solutions',
      children: [
        { href: '/solutions/hub', label: 'Solutions Hub' },
        { href: '/solutions/fireguard', label: 'FireGuard Platform' },
        { href: '/solutions/insurelink', label: 'InsureLink' },
      ],
    },
    {
      href: '/sectors/hub',
      label: 'Sectors',
      children: [
        { href: '/sectors/hub', label: 'All Sectors' },
        { href: '/sectors/education', label: 'Education' },
        { href: '/sectors/healthcare', label: 'Healthcare' },
        { href: '/sectors/government', label: 'Government' },
        { href: '/sectors/commercial', label: 'Commercial' },
        { href: '/sectors/retail', label: 'Retail' },
        { href: '/sectors/industrial', label: 'Industrial' },
        { href: '/sectors/high-security', label: 'High Security' },
      ],
    },
    {
      href: '/roles/hub',
      label: 'Roles',
      children: [
        { href: '/roles/hub', label: 'All Roles' },
        { href: '/roles/ceo', label: 'CEO' },
        { href: '/roles/cfo', label: 'CFO' },
        { href: '/roles/coo', label: 'COO' },
        { href: '/roles/esg-lead', label: 'ESG Lead' },
        { href: '/roles/facilities', label: 'Facilities Manager' },
        { href: '/roles/fire-safety-lead', label: 'Fire Safety Lead' },
        { href: '/roles/security-head', label: 'Security Head' },
      ],
    },
    {
      href: '/energy/hub',
      label: 'Decarbonisation',
      children: [
        { href: '/energy/hub', label: 'Energy Hub' },
        { href: '/energy/technology', label: 'Our Technology' },
        { href: '/energy/funding-options', label: 'Funding Options' },
        { href: '/energy/monitoring', label: 'Energy Monitoring' },
        { href: '/energy/the-energy-trap', label: 'The Energy Trap' },
        { href: '/energy/energy-club', label: 'Unifi.id Energy Club' },
        { href: '/energy/contact', label: 'Energy Contact' },
      ],
    },
    { href: '/partners', label: 'Partners' },
    { href: '/news', label: 'News & Blog' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact Us' },
  ], []);

  // Header is black if it's not the home page OR if it's scrolled on the home page
  const isBlackHeader = !isHomePage || isScrolled;

  return (
    <m.header
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlackHeader 
          ? 'bg-black border-b border-white/10 py-3' 
          : 'bg-white/10 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <img
                src="/unifi-assets/logo.png"
                alt="Unifi.id"
                className={`transition-all duration-500 ${isBlackHeader ? 'h-8 lg:h-10' : 'h-10 lg:h-12'} w-auto brightness-0 invert`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Visible on xl screens and up (1280px) to prevent overlap with logo */}
          <nav className="hidden xl:flex items-center gap-3 2xl:gap-5 flex-1 justify-end min-w-0">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} isMobile={false} />
            ))}
            
            {/* Book a Demo Button */}
            <Link
              href="/contact"
              className="px-4 2xl:px-6 py-2 rounded-sm font-bold text-[10px] 2xl:text-xs uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0 ml-2"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Hamburger Menu Button - Visible on screens smaller than xl (1280px) */}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded transition-colors z-10 relative flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible on screens smaller than xl when hamburger is open */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden border-t w-full shadow-lg transition-all duration-500 ${
          isBlackHeader 
            ? 'bg-black border-white/20' 
            : 'bg-white/10 backdrop-blur-md border-white/10'
        }`}>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <NavLinkItem key={`mobile-${link.href}`} link={link} isMobile={true} onNavigate={() => setIsMobileMenuOpen(false)} />
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-8 py-3 mt-2 rounded-sm font-bold text-sm uppercase tracking-wider bg-white text-black hover:bg-unifi-blue hover:text-white transition-all duration-300 text-center cursor-pointer active:opacity-90"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        </div>
      )}
    </m.header>
  );
}

function NavLinkItem({ link, isMobile, onNavigate }: { link: NavLink; isMobile?: boolean; onNavigate?: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hasChildren = link.children && link.children.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (hasChildren) setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (hasChildren) setIsDropdownOpen(false);
    }
  };

  const handleMobileClick = (e: React.MouseEvent) => {
    if (isMobile && hasChildren) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    if (!isMobile && hasChildren) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <Link
          href={link.href}
          onClick={(e) => {
            handleMobileClick(e);
            if (!hasChildren) onNavigate?.();
          }}
          className="block w-full py-3 px-4 text-base font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer text-white hover:bg-white/20 active:bg-white/30"
        >
          {link.label}
        </Link>
        {hasChildren && isDropdownOpen && (
          <div className="pl-6 py-2 bg-black/20">
            {link.children?.map((childLink) => (
              <Link
                key={childLink.href}
                href={childLink.href}
                onClick={() => onNavigate?.()}
                className="block w-full py-2 px-4 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                {childLink.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <Link
        href={link.href}
        onClick={handleDesktopClick}
        className="relative py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-white whitespace-nowrap flex-shrink-0 cursor-pointer"
      >
        {link.label}
        {hasChildren && (
          <span className="ml-1 inline-block transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>&#9660;</span>
        )}
        {/* Unifi.id Style Hover Line Animation */}
        <m.div
          initial={false}
          animate={{
            width: isHovered || isDropdownOpen ? '100%' : '0%',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 h-[2px] bg-white"
        />
      </Link>
      <AnimatePresence>
        {hasChildren && isDropdownOpen && (
          <m.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 pt-1 z-[60]"
          >
            <div className="mt-1 w-56 bg-black border border-white/10 rounded-md shadow-xl overflow-hidden">
              {link.children?.map((childLink) => (
                <Link
                  key={childLink.href}
                  href={childLink.href}
                  className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {childLink.label}
                </Link>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

