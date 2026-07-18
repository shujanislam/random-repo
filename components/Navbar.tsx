'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, QrCode } from 'lucide-react';

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'team', label: 'Team' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const reference = window.scrollY + 300;
      let current = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= reference) {
          current = section.id;
        }
      }

      // Snap to the last section once we reach the bottom of the page.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <nav className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
      {/* Logo */}
      <Link
        href="/"
        className="bg-brand hover:bg-brand-dark rounded-full w-12 h-12 flex items-center justify-center pointer-events-auto transition-colors cursor-pointer"
      >
        <QrCode className="w-6 h-6 text-neutral-900" />
      </Link>

      {/* Navigation Pill - Desktop */}
      <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-neutral-200 shadow-sm pointer-events-auto gap-0.5">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={hrefFor(section.id)}
            onClick={(e) => handleNav(e, section.id)}
            aria-current={
              isHome && activeSection === section.id ? 'page' : undefined
            }
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
              isHome && activeSection === section.id
                ? 'bg-brand text-neutral-900'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            {section.label}
          </Link>
        ))}
        <Link
          href={hrefFor('hero')}
          onClick={(e) => handleNav(e, 'hero')}
          className="px-4 py-1.5 rounded-full bg-brand text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-brand-dark cursor-pointer"
        >
          Buy Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
        className="md:hidden bg-white/80 backdrop-blur-md rounded-full w-11 h-11 flex items-center justify-center pointer-events-auto border border-neutral-200 shadow-sm cursor-pointer"
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5 text-neutral-900" />
        ) : (
          <Menu className="w-5 h-5 text-neutral-900" />
        )}
      </button>

      {/* Mobile Menu - full width */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200 shadow-lg p-2 md:hidden pointer-events-auto flex flex-col">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={hrefFor(section.id)}
              onClick={(e) => handleNav(e, section.id)}
              aria-current={
                isHome && activeSection === section.id ? 'page' : undefined
              }
              className={`block w-full text-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isHome && activeSection === section.id
                  ? 'bg-brand text-neutral-900'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {section.label}
            </Link>
          ))}
          <Link
            href={hrefFor('hero')}
            onClick={(e) => handleNav(e, 'hero')}
            className="block w-full text-center px-4 py-3 rounded-xl bg-brand text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-brand-dark cursor-pointer"
          >
            Buy Now
          </Link>
        </div>
      )}
    </nav>
  );
}
