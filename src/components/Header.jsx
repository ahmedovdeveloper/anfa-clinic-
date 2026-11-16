"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ru", short: "RU", name: "Русский", flag: "🇷🇺" },
  { code: "uz", short: "UZ", name: "O'zbek", flag: "🇺🇿" },
  { code: "en", short: "EN", name: "English", flag: "🇬🇧" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  // Загружаем язык из localStorage при монтировании
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && languages.some((l) => l.code === savedLang)) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  // Отслеживание скролла
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentCode = (i18n.language || "ru").split("-")[0];
  const selectedLang = languages.find((l) => l.code === currentCode) || languages[0];

  // Функция смены языка + сохранение в localStorage
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setLangDropdown(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        
        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, .logo-text {
          font-family: 'Sora', sans-serif;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }

        .mega-menu {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }
      `}</style>

      {/* TOP BAR - Desktop Only */}
      <div className="hidden lg:block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white text-xs">
        <div className="max-w-7xl mx-auto px-5 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={12} />
              <span className="font-medium">+998 (95) 144 24 20</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} />
              <span>{t("header.topBarAddress")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "glass-effect shadow-lg border-b border-slate-200/50" : "bg-white shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* LOGO */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Link to="/" className="relative rounded-2xl group-hover:scale-105 transition-transform duration-300">
                  <img src="/logo.webp" alt="Logo" className="w-15" />
                </Link>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.about")}
              </Link>

              <Link
                to="/products"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.products")}
              </Link>

              <Link
                to="/partners"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.partners")}
              </Link>

              <Link
                to="/kso"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.csr")}
              </Link>

              <Link
                to="/news"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.news")}
              </Link>

              <Link
                to="/career"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.career")}
              </Link>
               <Link
                to="/gmp"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                GMP
              </Link>

              <Link
                to="/contact"
                className="nav-link px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                {t("header.contacts")}
              </Link>
            </nav>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* LANGUAGE SELECTOR */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="hidden sm:flex items-center gap-2 px-3 lg:px-4 py-2 lg:py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all font-medium text-sm"
                >
                  <span className="text-2xl">{selectedLang.flag}</span>
                  <span className="hidden lg:inline text-slate-700">{selectedLang.short}</span>
                  <ChevronDown
                    size={14}
                    className={`text-slate-500 transition-transform ${langDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {langDropdown && (
                  <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/50 p-2 w-48 animate-slideDown">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                          currentCode === l.code ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className="text-2xl">{l.flag}</span>
                        <div>
                          <div className="font-medium text-sm">{l.name}</div>
                          <div className="text-xs text-slate-500">{l.short}</div>
                        </div>
                        {currentCode === l.code && (
                          <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-all"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={24} className="text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="mobile-menu fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="p-6">
              {/* HEADER MOBILE */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Link to="/" className="p-3">
                    <img src="/logo.webp" alt="logo" className="w-15" />
                  </Link>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-xl transition-all"
                >
                  <X size={24} className="text-slate-700" />
                </button>
              </div>

              {/* NAVIGATION MOBILE */}
              <nav className="space-y-2 mb-8">
                <Link
                  to="/"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.about")}
                </Link>

               <Link
                  to="/gmp"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  GMP
                </Link>

                <Link
                  to="/products"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.products")}
                </Link>

                <Link
                  to="/partners"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.partners")}
                </Link>

                <Link
                  to="/kso"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.csr")}
                </Link>

                <Link
                  to="/news"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.news")}
                </Link>

                <Link
                  to="/career"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.career")}
                </Link>

                <Link
                  to="/contact"
                  className="mobile-menu-item block px-4 py-4 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all font-medium text-slate-700 hover:text-blue-600 border border-transparent hover:border-blue-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("header.contacts")}
                </Link>
              </nav>

              {/* LANGUAGE SELECTOR MOBILE */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-slate-400 uppercase mb-3 px-2">
                  {t("header.languageLabel")}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => changeLanguage(l.code)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                        currentCode === l.code
                          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      <span className="text-3xl">{l.flag}</span>
                      <span className="text-xs font-bold">{l.short}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTACT INFO MOBILE */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  {t("header.contacts")}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-blue-600" />
                    <span className="text-sm text-slate-700 font-medium">
                      +998 71 123-45-67
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="text-sm text-slate-700">
                      {t("header.contactAddress")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-blue-600" />
                    <span className="text-sm text-slate-700">
                      Пн-Пт: 08:00 - 20:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Закрытие выпадающего меню по клику вне */}
      {langDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangDropdown(false)}
        />
      )}
    </>
  );
}