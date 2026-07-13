import React from "react";
import { Phone, Mail, MapPin, Facebook, Send, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const menuLinks = [
    { key: "about", href: "#about" },
    { key: "products", href: "#products" },
    { key: "partners", href: "#partners" },
    { key: "csr", href: "#csr" },
    { key: "news", href: "#news" },
    { key: "career", href: "#career" },
    { key: "contacts", href: "#contacts" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/AnfaPharmaceuticals/", color: "hover:bg-blue-600" },
    { icon: Send, href: "https://t.me/anfauz", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/anfa_clinic/", color: "hover:bg-pink-500" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        h1, h2, h3, h4 {
          font-family: 'Sora', sans-serif;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #7c6b95 0%, #8b7ba8 50%, #6b5b7e 100%);
        }

        .footer-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d);
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .contact-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff8e53);
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: linear-gradient(135deg, #ff8e53, #ffd93d);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }
      `}</style>

      <footer className="gradient-bg text-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Logo */}
            <div className="space-y-6">
              <div className="floating">
                <img src="/logo.png" alt="ANFA Pharmaceuticals" className="h-20" />
              </div>
              <p className="text-white/80 text-sm">
                {t("footer.aboutText")}
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t("footer.menu")}</h4>
              <ul className="space-y-3">
                {menuLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link text-white/80 hover:text-white text-sm">
                      {t(`header.${link.key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="text-xl font-bold mb-6">
                {t("footer.aboutTitle")}
              </h4>
              <div className="space-y-4 text-sm">
                <p className="font-semibold">{t("footer.companyName")}</p>

                <div className="flex gap-3">
                  <Phone size={18} className="text-orange-300" />
                  <a href="tel:+998951442420">+998 (95) 144 24 20</a>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="text-orange-300" />
                  <a href="mailto:info@anfa.uz">info@anfa.uz</a>
                </div>

                <div className="flex gap-3">
                  <MapPin size={18} className="text-orange-300" />
                  <p>
                    {t("footer.addressLine1")}
                    <br />
                    {t("footer.addressLine2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-xl font-bold mb-6">Социальные медиа</h4>

              <div className="flex gap-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`social-icon w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center ${social.color}`}
                  >
                    <social.icon size={20} className="text-white" />
                  </a>
                ))}
              </div>

              <Link
                to="/contact"
                className="contact-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
              >
                <Mail size={18} />
                {t("footer.contactUs")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
          © 2020 <span className="font-semibold text-white">Anfa.uz</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
