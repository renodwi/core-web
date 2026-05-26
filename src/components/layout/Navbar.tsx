import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Join", href: "#join" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-core-bg/90 backdrop-blur-md border-b border-core-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand in Character */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-core-brown to-core-warm flex items-center justify-center font-display font-extrabold text-[#0D0D0D] tracking-widest text-sm shadow-md shadow-core-brown/40 group-hover:scale-105 transition-transform duration-200">
            C
          </div>
          <div>
            <div className="font-display font-bold tracking-wider text-core-primary text-lg group-hover:text-core-warm transition-colors duration-200">
              {siteConfig.name}
            </div>
            <div className="text-[9px] text-core-secondary font-mono tracking-widest hidden sm:block uppercase">
              Rally & Offroad
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-display text-xs font-semibold uppercase tracking-wider text-core-secondary hover:text-core-warm transition-colors duration-150"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a
            href={siteConfig.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-core-brown/15 border border-core-brown/40 hover:bg-core-brown/30 hover:border-core-warm text-core-warm px-4 py-1.5 rounded-md font-display text-[11px] font-bold tracking-wider uppercase transition-all duration-200"
          >
            Daftar <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-core-secondary hover:text-core-primary transition-colors duration-150 focus:outline-hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-core-bg border-b border-core-border overflow-hidden absolute top-full left-0 w-full shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="border-b border-stone-900 pb-2">
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className="font-display text-sm font-semibold uppercase tracking-widest text-core-secondary hover:text-core-warm block transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <a
                href={siteConfig.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-1 bg-gradient-to-r from-core-brown to-core-warm text-core-bg font-display text-xs font-bold tracking-widest uppercase py-3 rounded-md transition-all duration-200 cursor-pointer"
              >
                Ajukan Keanggotaan <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
