import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  FlaskConical,
  Target,
  Package,
  Microscope,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/pagination";
import csr1 from '../assets/csr1.jpg'
import csr2 from '../assets/csr2.jpg'
import csr3 from '../assets/csr3.jpg'
import csr4 from '../assets/csr4.jpg'
import csrabout1 from "../assets/csrabout1.jpg";
import csrabout2 from "../assets/csrabout2.avif";
import csrabout3 from "../assets/csrabout3.jpg";
import csrabout4 from "../assets/csrabout4.jpeg";
import csrabout5 from "../assets/csrabout5.png";
// ─── SVG IMAGES ───────────────────────────────────────────────────────────────
const PillsImage = () => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </radialGradient>
      <radialGradient id="pill1" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fde68a" />
        <stop offset="100%" stopColor="#f59e0b" />
      </radialGradient>
      <radialGradient id="pill2" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#3b82f6" />
      </radialGradient>
      <radialGradient id="pill3" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#6ee7b7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </radialGradient>
      <radialGradient id="pill4" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#c4b5fd" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </radialGradient>
      <radialGradient id="pill5" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#fca5a5" />
        <stop offset="100%" stopColor="#ef4444" />
      </radialGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg1)" rx="20" />
    <ellipse cx="80" cy="60" rx="30" ry="12" fill="url(#pill1)" transform="rotate(-30 80 60)" />
    <ellipse cx="300" cy="40" rx="28" ry="11" fill="url(#pill2)" transform="rotate(20 300 40)" />
    <ellipse cx="200" cy="80" rx="32" ry="12" fill="url(#pill3)" transform="rotate(-10 200 80)" />
    <ellipse cx="350" cy="120" rx="25" ry="10" fill="url(#pill4)" transform="rotate(45 350 120)" />
    <ellipse cx="50" cy="160" rx="28" ry="11" fill="url(#pill5)" transform="rotate(-20 50 160)" />
    <ellipse cx="320" cy="200" rx="30" ry="12" fill="url(#pill1)" transform="rotate(15 320 200)" />
    <ellipse cx="150" cy="220" rx="27" ry="11" fill="url(#pill2)" transform="rotate(-35 150 220)" />
    <ellipse cx="250" cy="160" rx="29" ry="12" fill="url(#pill3)" transform="rotate(25 250 160)" />
    <ellipse cx="100" cy="250" rx="25" ry="10" fill="url(#pill4)" transform="rotate(-15 100 250)" />
    <ellipse cx="360" cy="260" rx="28" ry="11" fill="url(#pill5)" transform="rotate(40 360 260)" />
    <circle cx="180" cy="150" r="22" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
    <circle cx="180" cy="150" r="18" fill="url(#pill1)" opacity="0.9" />
    <circle cx="280" cy="90" r="18" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
    <circle cx="280" cy="90" r="14" fill="url(#pill3)" opacity="0.9" />
    <circle cx="120" cy="190" r="20" fill="#fff" stroke="#bfdbfe" strokeWidth="2" />
    <circle cx="120" cy="190" r="16" fill="url(#pill4)" opacity="0.9" />
  </svg>
);

const FactoryImage = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="factBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#0f2642" />
      </linearGradient>
      <linearGradient id="machine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="belt" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="50%" stopColor="#334155" />
        <stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#factBg)" />
    <rect x="0" y="300" width="500" height="80" fill="#0a1628" opacity="0.8" />
    <rect x="50" y="260" width="400" height="40" rx="5" fill="url(#belt)" />
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <rect key={i} x={70 + i * 42} y="260" width="4" height="40" fill="#0f172a" rx="2" />
    ))}
    <rect x="150" y="100" width="200" height="170" rx="8" fill="url(#machine)" />
    <rect x="160" y="110" width="180" height="140" rx="5" fill="#1e3a6e" />
    <rect x="170" y="120" width="160" height="80" rx="4" fill="#0a192f" />
    <rect x="175" y="125" width="150" height="70" rx="3" fill="#0d2137" />
    <circle cx="220" cy="155" r="15" fill="none" stroke="#38bdf8" strokeWidth="2" />
    <line x1="220" y1="140" x2="220" y2="155" stroke="#38bdf8" strokeWidth="2" />
    <line x1="220" y1="155" x2="230" y2="162" stroke="#4ade80" strokeWidth="2" />
    <text x="250" y="152" fill="#38bdf8" fontSize="10" fontFamily="monospace">98.6%</text>
    <text x="250" y="165" fill="#4ade80" fontSize="8" fontFamily="monospace">QUALITY OK</text>
    <circle cx="175" cy="210" r="5" fill="#4ade80" />
    <circle cx="195" cy="210" r="5" fill="#38bdf8" />
    <circle cx="215" cy="210" r="5" fill="#f87171" />
    <rect x="240" y="205" width="30" height="12" rx="3" fill="#22c55e" />
    <rect x="280" y="205" width="30" height="12" rx="3" fill="#ef4444" />
    <ellipse cx="100" cy="270" rx="14" ry="6" fill="#fde68a" />
    <ellipse cx="145" cy="272" rx="13" ry="5" fill="#93c5fd" />
    <ellipse cx="390" cy="270" rx="14" ry="6" fill="#38bdf8" />
    <ellipse cx="435" cy="272" rx="13" ry="5" fill="#6ee7b7" />
    <line x1="250" y1="60" x2="250" y2="100" stroke="#3b82f6" strokeWidth="6" />
    <circle cx="250" cy="55" r="10" fill="#1d4ed8" />
    <line x1="250" y1="80" x2="210" y2="100" stroke="#60a5fa" strokeWidth="4" />
    <rect x="0" y="0" width="500" height="3" fill="#38bdf8" opacity="0.5" />
    <text x="250" y="345" fill="#475569" fontSize="10" fontFamily="monospace" textAnchor="middle">
      PRODUCTION LINE A1 — ACTIVE
    </text>
  </svg>
);





const HardCapsulesImage = () => (
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="hcBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ecfeff" />
        <stop offset="100%" stopColor="#cffafe" />
      </radialGradient>
    </defs>
    <rect width="300" height="200" fill="url(#hcBg)" rx="16" />
    {[
      { x: 80, y: 70, angle: -30, c1: "#ef4444", c2: "#fff" },
      { x: 165, y: 55, angle: 15, c1: "#3b82f6", c2: "#fff" },
      { x: 240, y: 85, angle: -50, c1: "#8b5cf6", c2: "#fff" },
      { x: 100, y: 148, angle: 25, c1: "#06b6d4", c2: "#fff" },
      { x: 210, y: 153, angle: -20, c1: "#f59e0b", c2: "#fff" },
      { x: 50, y: 128, angle: 60, c1: "#ec4899", c2: "#fff" },
      { x: 265, y: 140, angle: -40, c1: "#10b981", c2: "#fff" },
    ].map((cap, i) => (
      <g key={i} transform={`translate(${cap.x}, ${cap.y}) rotate(${cap.angle})`}>
        <rect x="-8" y="-20" width="16" height="22" rx="8" fill={cap.c1} />
        <rect x="-7" y="2" width="14" height="18" rx="7" fill={cap.c2} stroke={cap.c1} strokeWidth="1" />
        <rect x="-5" y="-18" width="5" height="10" rx="3" fill="rgba(255,255,255,0.4)" />
      </g>
    ))}
  </svg>
);

// ─── STEP / PRODUCT CONFIG ──────────── ────────────────────────────────────────
const stepIcons = [FlaskConical, Target, Package, Microscope, Sparkles, Truck];

const stepStyles = [
  { iconBg: "from-blue-500 to-blue-700", numColor: "text-blue-500", hoverBorder: "hover:border-blue-400" },
  { iconBg: "from-cyan-500 to-cyan-700", numColor: "text-cyan-500", hoverBorder: "hover:border-cyan-400" },
  { iconBg: "from-emerald-500 to-emerald-700", numColor: "text-emerald-500", hoverBorder: "hover:border-emerald-400" },
  { iconBg: "from-violet-500 to-violet-700", numColor: "text-violet-500", hoverBorder: "hover:border-violet-400" },
  { iconBg: "from-amber-500 to-amber-700", numColor: "text-amber-500", hoverBorder: "hover:border-amber-400" },
  { iconBg: "from-indigo-500 to-indigo-700", numColor: "text-indigo-500", hoverBorder: "hover:border-indigo-400" },
];

const productStyles = [
  {
    cardBg: "bg-amber-50",
    btnClass: "text-amber-500 border-amber-400 hover:bg-amber-500 hover:text-white",
  },
  {
    cardBg: "bg-violet-50",
    btnClass: "text-violet-500 border-violet-400 hover:bg-violet-500 hover:text-white",
  },
  {
    cardBg: "bg-cyan-50",
    btnClass: "text-cyan-500 border-cyan-400 hover:bg-cyan-500 hover:text-white",
  },
];
const productImages = [csrabout1, csrabout2, csrabout3, csrabout4, csrabout5];
const csrGalleryImages = [csr1, csr2, csr3, csr4];
// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function INVPoland() {
  const { t } = useTranslation();
  const [expandedStep, setExpandedStep] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const steps = t("invpoland.manufacturing.steps", { returnObjects: true }) || [];
  const products = t("invpoland.productsSection.items", { returnObjects: true }) || [];
  const modalTitle = t("invpoland.productsSection.modal.title");
  const modalClose = t("invpoland.productsSection.modal.close");

  return (
    <div className="bg-slate-50 text-slate-900 antialiased">
      <Header />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <p className="text-blue-600 font-extrabold text-[11px] tracking-[3px] uppercase mb-4">
              {t("invpoland.hero.tagline")}
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 text-slate-900">
              <span className="text-blue-600">ANFA</span>
            </h1>
            <p className="text-slate-500 text-base leading-relaxed max-w-lg mb-8">
              {t("invpoland.hero.subtitle")}
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 transition-all duration-300">
              {t("invpoland.hero.cta")} <ChevronRight size={16} />
            </button>
          </div>
          {/* Illustration */}
          <div className="flex-1">
            <img src={csrGalleryImages[0]} alt="CSR Illustration" />
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1 min-w-[280px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100">
            <img src={csrGalleryImages[1]} alt="Who We Are" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <span className="inline-block bg-blue-50 text-blue-600 text-[11px] font-extrabold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">
              {t("invpoland.who.badge")}
            </span>
            <h2 className="text-4xl font-extrabold mb-5 text-slate-900">
              <span className="text-blue-600">ANFA</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4 text-[15px]">
              {t("invpoland.who.text1")}
            </p>
            <p className="text-slate-500 leading-relaxed mb-8 text-[15px]">
              {t("invpoland.who.text2")}
            </p>
            <div className="flex gap-3 flex-wrap">
              {["ISO 22000", "GMP", "HACCP"].map((cert) => (
                <div key={cert} className="flex flex-col items-center gap-1 border border-blue-200 rounded-2xl px-5 py-3 bg-slate-50">
                  <Shield size={18} className="text-blue-600" />
                  <span className="text-[11px] font-extrabold text-blue-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR OFFER ── */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 py-20 px-6">
        <div className="flex flex-col  lg:flex-col items-center ">
            <span className="inline-block bg-blue-500/20 text-blue-300 text-[11px] font-extrabold tracking-[2px] uppercase px-4 py-1.5 rounded-full mb-4">
              {t("invpoland.offer.badge")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
              {t("invpoland.offer.title")}
            </h2>
            <p className="text-sky-400 text-2xl italic font-semibold mb-6">
              {t("invpoland.offer.subtitle")}
            </p>
            <p className="text-slate-400 leading-relaxed text-[15px] mb-8  text-center">
              {t("invpoland.offer.text")}
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-900/50 hover:shadow-xl hover:shadow-blue-800/60 hover:-translate-y-0.5 transition-all duration-300">
              {t("invpoland.offer.cta")} <ChevronRight size={16} />
            </button>
        </div>
      </section>

      {/* ── CONTRACT MANUFACTURING ── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              {t("invpoland.manufacturing.title")}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
              {t("invpoland.manufacturing.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => {
              const Icon = stepIcons[i] || FlaskConical;
              const s = stepStyles[i] || stepStyles[0];
              const isOpen = expandedStep === i;
              return (
                <div
                  key={i}
                  onClick={() => setExpandedStep(isOpen ? null : i)}
                  className={`bg-white rounded-2xl p-7 cursor-pointer border-2 border-transparent transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 ${s.hoverBorder}`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[11px] font-extrabold tracking-wider ${s.numColor}`}>
                      0{i + 1}
                    </span>
                    <h3 className="text-[15px] font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <p className="text-slate-500 text-sm leading-relaxed pt-1">{step.desc}</p>
                  </div>
                  <div className={`flex items-center gap-1 mt-3 text-sm font-bold ${s.numColor}`}>
                    {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    <span>{isOpen ? t("invpoland.less") : t("invpoland.more")}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CSR GALLERY SWIPER ── */}
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-slate-900">
              {t("invpoland.productsSection.title")}
            </h2>
          </div>

         <div className="relative px-4 sm:px-8 py-6">
  <Swiper
    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    spaceBetween={30}
    coverflowEffect={{
      rotate: 20,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    }}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    className="!pb-12"
  >
    {csrGalleryImages.map((src, index) => (
      <SwiperSlide key={index}>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src={src}
            alt={`CSR gallery image ${index + 1}`}
            className="h-[400px] sm:h-[420px] lg:h-[480px] w-full object-cover"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
        </div>
      </section>

      {/* ── OUR PRODUCTS ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-slate-900">
              {t("invpoland.productsSection.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {products.map((item, i) => {
              const image = productImages[i] || productImages[0];
              const ps = productStyles[i] || productStyles[0];

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="h-48 p-5 flex items-center justify-center">
                    <img
                      src={image}
                      alt={item.name}
                      className="h-full object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                      {item.name}
                    </h3>

                    <p className="text-slate-500 text-[13px] leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => setSelectedProduct(item)}
                      className={`border-2 rounded-full px-5 py-2 text-[13px] font-bold transition-all duration-200 ${ps.btnClass}`}
                    >
                      {t("invpoland.productsSection.cta")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
              <h3 className="text-xl font-extrabold text-slate-900">{modalTitle}</h3>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                aria-label={modalClose}
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
              <div className="mb-4 rounded-2xl bg-blue-50 px-4 py-3 text-[15px] font-bold text-blue-900">
                {selectedProduct.name}
              </div>

              <div className="space-y-4 text-[14px] leading-7 text-slate-700">
                {(selectedProduct.details || []).map((paragraph, index) => (
                  <p key={`${selectedProduct.name}-${index}`} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}