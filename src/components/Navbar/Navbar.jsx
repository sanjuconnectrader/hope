import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({
  logoSrc = "/logoo.png",
  links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  initialActive = "Home",
}) {
  const [active, setActive] = useState(initialActive);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Update active state based on current URL
  useEffect(() => {
    const currentPath = location.pathname;
    const activeLink = links.find(link => 
      link.href === currentPath || 
      (currentPath === "/" && link.label === "Home")
    );
    if (activeLink) {
      setActive(activeLink.label);
    }
  }, [location.pathname, links]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) setMenuOpen(false);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (item) => {
    setActive(item.label);
    setMenuOpen(false);
    
    // Navigate to the page using React Router
    navigate(item.href);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActive("Home");
    navigate("/");
  };

  return (
    <header className={`navWrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navPill" aria-label="Primary navigation">
        {/* Logo */}
        <a 
          className="navLogo" 
          href="/"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
        >
          <img src={logoSrc} alt="Logo" />
          <span className="logoText"></span>
        </a>

        {/* Desktop Navigation - Only render on desktop */}
        {!isMobile && (
          <>
            <ul className="navLinks" role="list">
              {links.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className={`navLink ${active === item.label ? "isActive" : ""}`}
                    onClick={() => handleNav(item)}
                    aria-current={active === item.label ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button (Desktop) */}
            <button 
              className="navCta" 
              onClick={() => handleNav({ label: "Contact Us", href: "/contact" })}
            >
              Get Started
            </button>
          </>
        )}

        {/* Mobile Menu Button - Only render on mobile */}
        {isMobile && (
          <>
            <button
              type="button"
              className={`navBurger ${menuOpen ? "open" : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <span />
              <span />
              <span />
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
              <div 
                className="navOverlay" 
                onClick={() => setMenuOpen(false)} 
                aria-hidden="true"
              />
            )}

            {/* Mobile Menu */}
            <div 
              id="mobile-menu" 
              className={`navMobile ${menuOpen ? "show" : ""}`}
              role="dialog"
              aria-modal="true"
              aria-hidden={!menuOpen}
              style={{ display: menuOpen ? 'flex' : 'none' }}
            >
              <div className="mobileHeader">
                <img src={logoSrc} alt="Logo" />
                <button 
                  className="closeMenu" 
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="mobileLinks">
                {links.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`navMobileLink ${active === item.label ? "isActive" : ""}`}
                    onClick={() => handleNav(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <button 
                className="mobileCta" 
                onClick={() => handleNav({ label: "Contact Us", href: "/contact" })}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}