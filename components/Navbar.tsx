"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, services } from "@/data/site";
import BrandMark from "@/components/ui/BrandMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header-scrolled" : ""}`}>
      <nav className="nav-shell container" aria-label="Main navigation">
        <BrandMark />
        <div className="desktop-nav">
          <div className="nav-services">
            <Link
              href="/services"
              className={pathname.startsWith("/services") ? "nav-link nav-link-active" : "nav-link"}
              aria-current={pathname.startsWith("/services") ? "page" : undefined}
            >
              Services
            </Link>
            <button
              className="nav-dropdown-toggle"
              type="button"
              aria-label="Show service links"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              <ArrowDown size={14} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="nav-dropdown">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/"))
                  ? "nav-link nav-link-active"
                  : "nav-link"
              }
              aria-current={
                pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/"))
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="button button-small button-primary nav-cta" href="/contact">
          Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-nav container" id="mobile-navigation">
          <Link
            href="/services"
            className={pathname.startsWith("/services") ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"}
            aria-current={pathname.startsWith("/services") ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          {services.map((service) => (
            <Link
              key={service.slug}
              className={`mobile-nav-sub${pathname === `/services/${service.slug}` ? " mobile-nav-link-active" : ""}`}
              href={`/services/${service.slug}`}
              aria-current={pathname === `/services/${service.slug}` ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {service.title}
            </Link>
          ))}
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/"))
                  ? "mobile-nav-link mobile-nav-link-active"
                  : "mobile-nav-link"
              }
              aria-current={
                pathname === item.href || (item.href === "/blog" && pathname.startsWith("/blog/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="button button-primary mobile-nav-cta" href="/contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
