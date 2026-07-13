"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";

// ТВОИ ДАННЫЕ ДЛЯ TELEGRAM
const BOT_TOKEN = "8323618565:AAE4ig_iLWcuD98CUu61guXOCJDhj_j2w9M";
const GROUP_ID = "-5031603161";

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Функция отправки в Telegram
  const sendToTelegram = async () => {
    try {
      setIsLoading(true);

      const messageText = `
**${t("contact.telegramNewRequest")}**

👤 ${t("contact.nameLabel")}: ${formData.name || "—"}
📞 ${t("contact.phoneLabel")}: ${formData.phone || "—"}
✉️ ${t("contact.emailLabel")}: ${formData.email || "—"}
💬 ${t("contact.messageLabel")}:
${formData.message || "—"}

⏰ ${t("contact.telegramTime")}: ${new Date().toLocaleString("ru-RU")}
🌐 ${t("contact.telegramSite")}: ${window.location.origin}
      `.trim();

      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: GROUP_ID,
          text: messageText,
          parse_mode: "Markdown",
        }),
      });

      const data = await response.json();

      if (!data.ok) {
        console.error("Telegram error:", data);
      }
    } catch (err) {
      console.error("Ошибка отправки в Telegram:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем в Telegram
    await sendToTelegram();

    // Показываем успех (как было раньше)
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    }, 3000);
  };

  const locations = [
    {
      country: t("contact.countryUzbekistan"),
      company: 'ООО «TOP PHARM SERVICE»',
      phone: "+998 (95) 144 24 20",
      email: "info@anfa.uz",
      address: t("contact.addressTashkent"),
      color: "from-blue-500 to-cyan-500"
    }
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

        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .contact-form { animation: slideInLeft 0.8s ease-out; }
        .contact-info { animation: slideInRight 0.8s ease-out; }
        .location-card { animation: fadeInUp 0.6s ease-out backwards; }
        .success-message { animation: successPulse 0.5s ease-out; }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }
      `}</style>

      <Header />

      <section className="contact-page relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden min-h-screen">
        {/* Decorative Background */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">
                {t("contact.title").toUpperCase()}
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t("contact.formTitle")}
                </h2>

                {isSubmitted ? (
                  <div className="success-message flex flex-col items-center justify-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {t("contact.successTitle")}
                    </h3>
                    <p className="text-slate-600 text-center">
                      {t("contact.successText")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contact.nameLabel")}*
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <User size={20} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.namePlaceholder")}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contact.phoneLabel")}*
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Phone size={20} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("contact.phonePlaceholder")}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contact.emailLabel")}*
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <Mail size={20} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.emailPlaceholder")}
                          required
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t("contact.messageLabel")}
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-4 text-slate-400">
                          <MessageSquare size={20} />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contact.messagePlaceholder")}
                          rows="5"
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`group relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      <div className="shimmer-effect absolute inset-0"></div>
                      
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isLoading ? t("contact.sending") : t("contact.sendButton")}
                        {!isLoading && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
                      </span>

                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info space-y-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="location-card group relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="mb-6">
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${location.color} text-white rounded-xl font-bold text-lg mb-3`}>
                      {location.country}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {location.company}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0`}>
                        <Phone size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">{t("contact.phone")}:</p>
                        <a 
                          href={`tel:${location.phone.replace(/\s/g, '')}`}
                          className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0`}>
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">E-mail:</p>
                        <a 
                          href={`mailto:${location.email}`}
                          className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${location.color} flex items-center justify-center flex-shrink-0`}>
                        <MapPin size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500 mb-1">{t("contact.address")}:</p>
                        <p className="text-slate-700 leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${location.color} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;