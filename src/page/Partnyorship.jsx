"use client";

import React, { useState, useEffect } from "react";
import {
  Handshake,
  Building2,
  GraduationCap,
  Factory,
  FlaskConical,
  Users,
  ChevronRight,
  Send,
  Mail, 
  Phone,
  MapPin,
  Briefcase,
  Target,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Package,
  Pill,
  Droplet,
  Layers,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../components/Footer";
import Header from "../components/Header";

// ТВОИ ДАННЫЕ ДЛЯ TELEGRAM
const BOT_TOKEN = "8323618565:AAE4ig_iLWcuD98CUu61guXOCJDhj_j2w9M";
const GROUP_ID = "-5031603161";

// Переводы для трёх языков
const translations = {
  ru: {
    heroBadge: "Партнёрство и сотрудничество",
    heroTitle: "Области сотрудничества",
    heroText: "Партнёрство играет важную роль в успехе ANFA. Это иллюстрируется отношениями, которые мы построили, и продуктами, которые мы запустили и улучшили.",

    category1Badge: "Категория 1",
    category1Title: "Сотрудничество",
    internationalPartnershipTitle: "Международное партнёрство",
    internationalPartnershipP1: "ANFA имеет опыт сотрудничества с узбекскими и международными компаниями и заинтересована в дальнейшем расширении партнёрских отношений.",
    internationalPartnershipP2: "ANFA стремится объединять свои усилия с профессиональными партнёрами, которые имеют сильные компетенции и готовы работать в кооперации.",
    internationalPartnershipP3: "Мы видим партнёрские отношения и сотрудничество с Научными Академиями, научно-исследовательскими институтами, предприятиями, благотворительными организациями и частными лицами в качестве фундаментальной части построения успешного, диверсифицированного глобального бизнеса в сфере здравоохранения.",

    businessPartnershipTitle: "Деловое партнёрство",
    businessPartnershipText: "Сотрудничество в разработке новых продуктов фитотерапии и дистрибуции существующих продуктов.",

    academicPartnershipTitle: "Академическое партнёрство",
    academicPartnershipText: "В области исследований и разработок — для обнаружения и развития новых продуктов мы регулярно работаем с институтами и внешними исследовательскими группами.",

    category2Badge: "Категория 2",
    category2Title: "Партнёрство — Развитие бизнеса",
    category2P1: "Мы придаём большое значение сотрудничеству с другими компаниями, учреждениями и организациями, потому что мы знаем, что многие великие идеи приходят из-за пределов нашей компании.",
    category2P2: "ANFA PHARMACEUTICALS намерена укрепить свои возможности продаж и сбыта в разных странах, а подразделение «Бизнес-бизнес» создано для обеспечения широкого спектра интегрированных решений.",
    category2P3: "В среде B2B мы используем наши навыки для создания видения и предоставления наилучших возможных решений нашим партнёрам. Наш опыт и экспертные знания имеют решающее значение для лучшего понимания ваших потребностей в строго регулируемой фармацевтической среде.",
    category2P4: "Работая в отрасли нутрицевтики, мы принимаем на себя ответственность за здоровье и жизнь человека. Таким образом, качество наших продуктов и безопасность пациентов — наши приоритеты.",

    category2Cards: {
      qualityTitle: "Качество",
      qualityText: "Наш приоритет — качество продуктов",
      safetyTitle: "Безопасность",
      safetyText: "Безопасность пациентов превыше всего",
      partnershipTitle: "Партнёрство",
      partnershipText: "Долгосрочное сотрудничество",
    },

    category3Badge: "Категория 3",
    category3Title: "Производственные мощности",
    category3Subtitle: "Компания производит около 40 видов нутрицевтиков",
    productionCapacity: [
      { value: "295,000,000", label: "Таблеток в год" },
      { value: "4,000,000", label: "Блистеров в год" },
      { value: "4,000,000", label: "Флаконов сиропа в год" },
    ],
    productFormsTitle: "Продукты доступны в различных формах",
    productForms: [
      {
        category: "Жидкие",
        items: ["Сиропы", "Аэрозоли и спреи", "Капли"],
      },
      {
        category: "Твердые",
        items: ["Таблетки"],
      },
    ],

    category4Badge: "Категория 4",
    category4Title: "Исследования и разработка",
    innovationsTitle: "Инновации и развитие",
    innovationsText1: "Компания ANFA PHARMACEUTICALS всегда ориентирована на повышение качества, разработку и внедрение новых технологий. Компания уделяет особое внимание вопросу исследований и разработок.",
    innovationsText2: "Целью её исследований является разработка новых фито-препаратов для помощи нуждающихся людей и улучшения качества их жизни. Отличительными чертами ее является химико-аналитическая разработка новых активных веществ.",
    researchAreasTitle: "Области исследований нашей лаборатории:",
    researchAreas: [
      "Лечение кожных заболеваний",
      "Лечение респираторного заболевания",
      "Лечение заболеваний глаз, носа и ушей",
      "Улучшение антидиабетических средств растительного происхождения",
      "Лечение заболеваний желудочно-кишечного тракта",
      "Разработка седативных средств и антидепрессантов растительного происхождения",
      "Лечение заболеваний щитовидной железы",
      "Лечение заболеваний простаты и мочевыделительной системы",
      "Улучшение травяных добавок для тонизирования аппетита",
      "Фито препараты для лечения гинекологических заболеваний",
      "Усовершенствование натуральных кальций содержащих препаратов",
    ],
    researchFooter: "Хотя мы уделяем особое внимание этим областям, наши партнёрские интересы не ограничиваются ими. ANFA может быть правильным партнёром для продвижения ваших идей для производства традиционной НУТРИЦЕВТИКИ в борьбе за здоровье.",

    category5Badge: "Категория 5",
    partnersTitle: "Наши партнёры",
    partnersSubtitle: "Мы сотрудничаем с ведущими компаниями и организациями",

    category6Badge: "Категория 6",
    feedbackTitle: "Обратная связь для дистрибьюторов",
    contactText: "Для сотрудничества свяжитесь с отделом развития бизнеса:",
    formTitle: "Или заполните заявку прямо сейчас",
    form: {
      companyNameLabel: "Название компании *",
      companyNamePlaceholder: "Введите название",
      contactPersonLabel: "Контактное лицо *",
      contactPersonPlaceholder: "ФИО",
      emailLabel: "Email *",
      emailPlaceholder: "company@email.com",
      phoneLabel: "Телефон *",
      phonePlaceholder: "+998 XX XXX XX XX",
      countryLabel: "Страна *",
      countryPlaceholder: "Узбекистан",
      partnershipTypeLabel: "Тип партнёрства *",
      partnershipTypePlaceholder: "Выберите тип",
      partnershipTypeBusiness: "Деловое партнёрство",
      partnershipTypeAcademic: "Академическое партнёрство",
      partnershipTypeResearch: "Исследования и разработка",
      messageLabel: "Сообщение",
      messagePlaceholder: "Расскажите о вашей компании и интересах в сотрудничестве...",
      submitButton: "Отправить заявку",
      formSuccessTitle: "Заявка отправлена!",
      formSuccessText: "Мы свяжемся с вами в ближайшее время",
    },
  },

  en: {
    heroBadge: "Partnership and Cooperation",
    heroTitle: "Areas of Cooperation",
    heroText: "Partnership plays an important role in ANFA's success. This is illustrated by the relationships we have built and the products we have launched and improved.",

    category1Badge: "Category 1",
    category1Title: "Cooperation",
    internationalPartnershipTitle: "International Partnership",
    internationalPartnershipP1: "ANFA has experience in cooperating with Uzbek and international companies and is interested in further expanding partnership relations.",
    internationalPartnershipP2: "ANFA strives to join forces with professional partners who have strong competencies and are ready to work in cooperation.",
    internationalPartnershipP3: "We see partnership relations and cooperation with Scientific Academies, research institutes, enterprises, charitable organizations and individuals as a fundamental part of building a successful, diversified global healthcare business.",

    businessPartnershipTitle: "Business Partnership",
    businessPartnershipText: "Cooperation in the development of new phytotherapy products and distribution of existing products.",

    academicPartnershipTitle: "Academic Partnership",
    academicPartnershipText: "In the field of research and development — for the discovery and development of new products we regularly work with institutes and external research groups.",

    category2Badge: "Category 2",
    category2Title: "Partnership — Business Development",
    category2P1: "We attach great importance to cooperation with other companies, institutions and organizations because we know that many great ideas come from outside our company.",
    category2P2: "ANFA PHARMACEUTICALS intends to strengthen its sales and distribution capabilities in different countries, and the 'Business-to-Business' division has been created to provide a wide range of integrated solutions.",
    category2P3: "In the B2B environment, we use our skills to create a vision and provide the best possible solutions to our partners. Our experience and expertise are crucial for a better understanding of your needs in a strictly regulated pharmaceutical environment.",
    category2P4: "Working in the nutraceutical industry, we take responsibility for human health and life. Therefore, the quality of our products and patient safety are our priorities.",

    category2Cards: {
      qualityTitle: "Quality",
      qualityText: "Our priority is product quality",
      safetyTitle: "Safety",
      safetyText: "Patient safety above all",
      partnershipTitle: "Partnership",
      partnershipText: "Long-term cooperation",
    },

    category3Badge: "Category 3",
    category3Title: "Production Capacity",
    category3Subtitle: "The company produces about 40 types of nutraceuticals",
    productionCapacity: [
      { value: "295,000,000", label: "Tablets per year" },
      { value: "4,000,000", label: "Blisters per year" },
      { value: "4,000,000", label: "Syrup bottles per year" },
    ],
    productFormsTitle: "Products are available in various forms",
    productForms: [
      {
        category: "Liquid",
        items: ["Syrups", "Aerosols and sprays", "Drops"],
      },
      {
        category: "Solid",
        items: ["Tablets"],
      },
    ],

    category4Badge: "Category 4",
    category4Title: "Research and Development",
    innovationsTitle: "Innovation and Development",
    innovationsText1: "ANFA PHARMACEUTICALS is always focused on improving quality, developing and implementing new technologies. The company pays special attention to research and development.",
    innovationsText2: "The purpose of its research is to develop new phyto-preparations to help people in need and improve their quality of life. Its distinctive feature is the chemical-analytical development of new active substances.",
    researchAreasTitle: "Areas of research of our laboratory:",
    researchAreas: [
      "Treatment of skin diseases",
      "Treatment of respiratory diseases",
      "Treatment of eye, nose and ear diseases",
      "Improvement of herbal antidiabetic agents",
      "Treatment of gastrointestinal diseases",
      "Development of herbal sedatives and antidepressants",
      "Treatment of thyroid diseases",
      "Treatment of prostate and urinary system diseases",
      "Improvement of herbal supplements for appetite toning",
      "Phyto-preparations for the treatment of gynecological diseases",
      "Improvement of natural calcium-containing preparations",
    ],
    researchFooter: "Although we pay special attention to these areas, our partnership interests are not limited to them. ANFA can be the right partner for promoting your ideas for the production of traditional NUTRACEUTICALS in the fight for health.",

    category5Badge: "Category 5",
    partnersTitle: "Our Partners",
    partnersSubtitle: "We cooperate with leading companies and organizations",

    category6Badge: "Category 6",
    feedbackTitle: "Feedback for Distributors",
    contactText: "For cooperation, contact the business development department:",
    formTitle: "Or fill out the application right now",
    form: {
      companyNameLabel: "Company Name *",
      companyNamePlaceholder: "Enter name",
      contactPersonLabel: "Contact Person *",
      contactPersonPlaceholder: "Full name",
      emailLabel: "Email *",
      emailPlaceholder: "company@email.com",
      phoneLabel: "Phone *",
      phonePlaceholder: "+998 XX XXX XX XX",
      countryLabel: "Country *",
      countryPlaceholder: "Uzbekistan",
      partnershipTypeLabel: "Partnership Type *",
      partnershipTypePlaceholder: "Select type",
      partnershipTypeBusiness: "Business Partnership",
      partnershipTypeAcademic: "Academic Partnership",
      partnershipTypeResearch: "Research and Development",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your company and interests in cooperation...",
      submitButton: "Send Application",
      formSuccessTitle: "Application Sent!",
      formSuccessText: "We will contact you soon",
    },
  },

  uz: {
    heroBadge: "Hamkorlik va sheriklik",
    heroTitle: "Hamkorlik yo‘nalishlari",
    heroText: "Hamkorlik ANFA muvaffaqiyatida muhim rol o‘ynaydi. Bu biz yaratgan munosabatlar va yo‘lga qo‘ygan hamda takomillashtirgan mahsulotlarimizda namoyon bo‘ladi.",

    category1Badge: "1-kategoriya",
    category1Title: "Hamkorlik",
    internationalPartnershipTitle: "Xalqaro hamkorlik",
    internationalPartnershipP1: "ANFA o‘zbek va xalqaro kompaniyalar bilan hamkorlik tajribasiga ega va hamkorlik munosabatlarini yanada kengaytirishdan manfaatdor.",
    internationalPartnershipP2: "ANFA kuchli kompetensiyalarga ega va hamkorlikda ishlashga tayyor professional hamkorlar bilan birgalikda harakat qilishga intiladi.",
    internationalPartnershipP3: "Biz ilmiy akademiyalar, ilmiy-tadqiqot institutlari, korxonalar, xayriya tashkilotlari va jismoniy shaxslar bilan hamkorlik munosabatlarini sog‘liqni saqlash sohasida muvaffaqiyatli, diversifikatsiyalangan global biznes qurishning asosiy qismi deb bilamiz.",

    businessPartnershipTitle: "Ishbilarmonlik hamkorligi",
    businessPartnershipText: "Yangi fitoterapiya mahsulotlarini ishlab chiqish va mavjud mahsulotlarni distribyutsiya qilish bo‘yicha hamkorlik.",

    academicPartnershipTitle: "Akademik hamkorlik",
    academicPartnershipText: "Tadqiqot va ishlanmalar sohasida — yangi mahsulotlarni aniqlash va rivojlantirish uchun biz institutlar va tashqi tadqiqot guruhlari bilan muntazam ishlaymiz.",

    category2Badge: "2-kategoriya",
    category2Title: "Hamkorlik — Biznes rivojlanishi",
    category2P1: "Biz boshqa kompaniyalar, muassasalar va tashkilotlar bilan hamkorlikka katta ahamiyat beramiz, chunki ko‘plab buyuk g‘oyalar kompaniyamizdan tashqaridan kelishini bilamiz.",
    category2P2: "ANFA PHARMACEUTICALS turli mamlakatlarda sotish va tarqatish imkoniyatlarini mustahkamlashni maqsad qilgan, “Biznes-biznes” bo‘limi esa keng ko‘lamli integratsiyalangan yechimlarni ta’minlash uchun tashkil etilgan.",
    category2P3: "B2B muhitida biz o‘z mahoratimizdan foydalanib, hamkorlarimizga eng yaxshi yechimlarni taklif qilamiz. Tajribamiz va ekspert bilishlarimiz qat’iy tartibga solinadigan farmatsevtika muhitida sizning ehtiyojlaringizni yaxshiroq tushunish uchun hal qiluvchi ahamiyatga ega.",
    category2P4: "Nutritsevtika sohasida ishlayotganimizda, inson salomatligi va hayoti uchun mas’uliyatni o‘z zimmamizga olamiz. Shuning uchun mahsulotlarimiz sifati va bemorlar xavfsizligi bizning asosiy ustuvor yo‘nalishlarimizdir.",

    category2Cards: {
      qualityTitle: "Sifat",
      qualityText: "Bizning ustuvor yo‘nalishimiz — mahsulot sifati",
      safetyTitle: "Xavfsizlik",
      safetyText: "Bemorlar xavfsizligi hamma narsadan ustun",
      partnershipTitle: "Hamkorlik",
      partnershipText: "Uzoq muddatli hamkorlik",
    },

    category3Badge: "3-kategoriya",
    category3Title: "Ishlab chiqarish quvvatlari",
    category3Subtitle: "Kompaniya taxminan 40 turdagi nutritsevtik ishlab chiqaradi",
    productionCapacity: [
      { value: "295,000,000", label: "Yiliga tabletka" },
      { value: "4,000,000", label: "Yiliga blister" },
      { value: "4,000,000", label: "Yiliga sirop flakonlari" },
    ],
    productFormsTitle: "Mahsulotlar turli shakllarda mavjud",
    productForms: [
      {
        category: "Suyuq",
        items: ["Sirop", "Aerozol va spreylar", "Tomchilar"],
      },
      {
        category: "Qattiq",
        items: ["Tabletkalar"],
      },
    ],

    category4Badge: "4-kategoriya",
    category4Title: "Tadqiqot va ishlanmalar",
    innovationsTitle: "Innovatsiyalar va rivojlanish",
    innovationsText1: "ANFA PHARMACEUTICALS kompaniyasi har doim sifatni oshirish, yangi texnologiyalarni ishlab chiqish va joriy etishga yo‘naltirilgan. Kompaniya tadqiqot va ishlanmalar masalasiga alohida e’tibor beradi.",
    innovationsText2: "Uning tadqiqotlari maqsadi — muhtoj odamlarga yordam berish va hayot sifatini yaxshilash uchun yangi fito-preparatlarni ishlab chiqishdir. Uning o‘ziga xos xususiyati — yangi faol moddalarni kimyoviy-tahliliy ishlab chiqishdir.",
    researchAreasTitle: "Laboratoriyamiz tadqiqot yo‘nalishlari:",
    researchAreas: [
      "Teri kasalliklarini davolash",
      "Nafas olish yo‘llari kasalliklarini davolash",
      "Ko‘z, burun va quloq kasalliklarini davolash",
      "O‘simlikdan olingan antidiabet vositalarini takomillashtirish",
      "Me’da-ichak yo‘llari kasalliklarini davolash",
      "O‘simlikdan olingan sedativ va antidepressant vositalarni ishlab chiqish",
      "Qalqonsimon bez kasalliklarini davolash",
      "Prostata va siydik chiqarish tizimi kasalliklarini davolash",
      "Ishtahani tonizatsiya qiluvchi o‘simlik qo‘shimchalarini takomillashtirish",
      "Ginekologik kasalliklarni davolash uchun fito-preparatlar",
      "Tabiiy kaltsiy saqlovchi preparatlarni takomillashtirish",
    ],
    researchFooter: "Biz ushbu yo‘nalishlarga alohida e’tibor qaratsak-da, hamkorlik manfaatlarimiz bilan cheklanmaydi. ANFA sog‘liq uchun kurashda an’anaviy NUTRITSEVTIK ishlab chiqarish bo‘yicha sizning g‘oyalaringizni ilgari surish uchun to‘g‘ri hamkor bo‘lishi mumkin.",

    category5Badge: "5-kategoriya",
    partnersTitle: "Bizning hamkorlarimiz",
    partnersSubtitle: "Biz yetakchi kompaniyalar va tashkilotlar bilan hamkorlik qilamiz",

    category6Badge: "6-kategoriya",
    feedbackTitle: "Distribyutorlar uchun fikr-mulohaza",
    contactText: "Hamkorlik uchun biznes rivojlantirish bo‘limi bilan bog‘laning:",
    formTitle: "Yoki hozir ariza to‘ldiring",
    form: {
      companyNameLabel: "Kompaniya nomi *",
      companyNamePlaceholder: "Nomini kiriting",
      contactPersonLabel: "Aloqa shaxsi *",
      contactPersonPlaceholder: "FIO",
      emailLabel: "Email *",
      emailPlaceholder: "company@email.com",
      phoneLabel: "Telefon *",
      phonePlaceholder: "+998 XX XXX XX XX",
      countryLabel: "Mamlakat *",
      countryPlaceholder: "O‘zbekiston",
      partnershipTypeLabel: "Hamkorlik turi *",
      partnershipTypePlaceholder: "Turini tanlang",
      partnershipTypeBusiness: "Ishbilarmonlik hamkorligi",
      partnershipTypeAcademic: "Akademik hamkorlik",
      partnershipTypeResearch: "Tadqiqot va ishlanmalar",
      messageLabel: "Xabar",
      messagePlaceholder: "Kompaniyangiz va hamkorlikdagi qiziqishlaringiz haqida yozing...",
      submitButton: "Arizani yuborish",
      formSuccessTitle: "Ariza yuborildi!",
      formSuccessText: "Tez orada siz bilan bog‘lanamiz",
    },
  },
};

const Partnership = () => {
  const [lang, setLang] = useState("ru");
  const tr = translations[lang];

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    partnershipType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Читаем язык из localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && ["ru", "en", "uz"].includes(savedLang)) {
      setLang(savedLang);
    }
  }, []);

  // Отправка в Telegram
  const sendToTelegram = async () => {
    try {
      setIsSending(true);

      const messageText = `
**Новая заявка с сайта → Партнёрство**

🏢 Компания: ${formData.companyName || "—"}
👤 Контактное лицо: ${formData.contactPerson || "—"}
📧 Email: ${formData.email || "—"}
📞 Телефон: ${formData.phone || "—"}
🌍 Страна: ${formData.country || "—"}
🤝 Тип партнёрства: ${formData.partnershipType || "—"}
💬 Сообщение:
${formData.message || "—"}

⏰ Время: ${new Date().toLocaleString("ru-RU")}
🌐 Сайт: ${window.location.origin}
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
        console.error("Ошибка Telegram:", data);
      }
    } catch (err) {
      console.error("Ошибка отправки в Telegram:", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем в Telegram
    await sendToTelegram();

    // Показываем успех
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        partnershipType: "",
        message: "",
      });
    }, 3000);
  };

  // Партнеры (логотипы и имена остаются одинаковыми)
  const partnersData = [
    { id: 1, name: tr.partners?.micros || "Micros Pac", logo: "/micros.svg" },
    { id: 2, name: tr.partners?.minzdrav || "Узбекистон Республикаси Согликни саклаш вазирлиги", logo: "/uzb.webp" },
    { id: 3, name: tr.partners?.ozstandart || "o'zstandart agentligi", logo: "/stz.webp" },
    { id: 5, name: tr.partners?.chamber || "o'zbekiston savdo sanoat palatasi", logo: "/ozdi.webp" },
    { id: 88, name: tr.partners?.lidep || "oz lidep", logo: "/uzb2.webp" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap');
        
        * { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
        h1, h2, h3, .logo-text { font-family: 'Sora', sans-serif; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

        .animate-fade-in { animation: fadeInUp 0.6s ease-out backwards; }
        .floating { animation: float 3s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .partners-swiper .swiper-button-prev,
        .partners-swiper .swiper-button-next {
          width: 52px;
          height: 52px;
          background: #ffffff;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          transition: all 0.35s ease;
        }

        .partners-swiper .swiper-button-prev { left: -10px; }
        .partners-swiper .swiper-button-next { right: -10px; }

        .partners-swiper .swiper-button-prev::after,
        .partners-swiper .swiper-button-next::after {
          font-size: 18px;
          font-weight: 700;
          color: #2563eb;
        }

        .partners-swiper .swiper-button-prev:hover,
        .partners-swiper .swiper-button-next:hover {
          background: #2563eb;
          border-color: #2563eb;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 18px 45px rgba(37, 99, 235, 0.35);
        }

        .partners-swiper .swiper-button-prev:hover::after,
        .partners-swiper .swiper-button-next:hover::after {
          color: #ffffff;
        }

        .partners-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .partners-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 999px;
          background: #2563eb;
        }
      `}</style>

      <Header />

      <div className="partnership-page min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                <Handshake size={16} />
                {tr.heroBadge}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">{tr.heroTitle}</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {tr.heroText}
              </p>
            </div>
          </div>
        </section>

        {/* 1. СОТРУДНИЧЕСТВО */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                <Handshake size={16} />
                {tr.category1Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.category1Title}</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 shadow-xl">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 floating">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {tr.internationalPartnershipTitle}
                    </h3>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>{tr.internationalPartnershipP1}</p>
                      <p>{tr.internationalPartnershipP2}</p>
                      <p>{tr.internationalPartnershipP3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {tr.businessPartnershipTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {tr.businessPartnershipText}
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {tr.academicPartnershipTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {tr.academicPartnershipText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ПАРТНЕРСТВО - РАЗВИТИЕ БИЗНЕСА */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
                <TrendingUp size={16} />
                {tr.category2Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.category2Title}</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-8">
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>{tr.category2P1}</p>
                  <p>{tr.category2P2}</p>
                  <p>{tr.category2P3}</p>
                  <p>{tr.category2P4}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-200">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Target size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {tr.category2Cards.qualityTitle}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {tr.category2Cards.qualityText}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <Award size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {tr.category2Cards.safetyTitle}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {tr.category2Cards.safetyText}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-purple-200">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Handshake size={24} className="text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {tr.category2Cards.partnershipTitle}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {tr.category2Cards.partnershipText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ПРОИЗВОДСТВЕННЫЕ МОЩНОСТИ */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                <Factory size={16} />
                {tr.category3Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.category3Title}</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {tr.category3Subtitle}
              </p>
            </div>

            {/* Production Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {tr.productionCapacity.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 floating`}
                  >
                    {index === 0 ? <Pill size={32} className="text-white" /> :
                     index === 1 ? <Package size={32} className="text-white" /> :
                     <Droplet size={32} className="text-white" />}
                  </div>
                  <h3 className="text-4xl font-bold text-slate-900 mb-2">
                    {item.value}
                  </h3>
                  <p className="text-slate-600 font-semibold">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Product Forms */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                {tr.productFormsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tr.productForms.map((form, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br from-${index === 0 ? "blue" : "cyan"}-500 to-${index === 0 ? "blue" : "cyan"}-600 rounded-xl flex items-center justify-center`}
                      >
                        {index === 0 ? <Droplet size={28} className="text-white" /> : <Pill size={28} className="text-white" />}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {form.category}
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {form.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <CheckCircle size={20} className="text-blue-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. ИССЛЕДОВАНИЯ И РАЗРАБОТКА */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                <FlaskConical size={16} />
                {tr.category4Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.category4Title}</span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-3xl p-8 lg:p-12 shadow-xl mb-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 floating">
                    <FlaskConical size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {tr.innovationsTitle}
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {tr.innovationsText1}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {tr.innovationsText2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h4 className="text-xl font-bold text-slate-900 mb-6">
                  {tr.researchAreasTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tr.researchAreas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all"
                    >
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white text-center">
              <p className="text-lg leading-relaxed">
                {tr.researchFooter}
              </p>
            </div>
          </div>
        </section>

        {/* 5. ПАРТНЕРЫ */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                <Users size={16} />
                {tr.category5Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.partnersTitle}</span>
              </h2>
              <p className="text-lg text-slate-600">
                {tr.partnersSubtitle}
              </p>
            </div>

            {/* Partners Swiper */}
            <div className="max-w-7xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 3, spaceBetween: 25 },
                  1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
                className="partners-swiper pb-16"
              >
                {partnersData.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <div className="partner-slide group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[280px]">
                      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-12">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-white text-lg font-bold line-clamp-2">
                              {partner.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        {/* 6. ОБРАТНАЯ СВЯЗЬ */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                <Send size={16} />
                {tr.category6Badge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.feedbackTitle}</span>
              </h2>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 mb-8">
              <p className="text-slate-700 text-center mb-6 text-lg">
                {tr.contactText}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+998951955900"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  <Phone size={20} className="text-blue-600" />
                  +998 (95) 195 59 00
                </a>
                <a
                  href="mailto:info@anfa.uz"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-700 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  <Mail size={20} className="text-blue-600" />
                  info@anfa.uz
                </a>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {tr.formTitle}
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">
                    {tr.form.formSuccessTitle}
                  </h4>
                  <p className="text-slate-600">
                    {tr.form.formSuccessText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.companyNameLabel}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.companyNamePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.contactPersonLabel}
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.contactPersonPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.phonePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.countryLabel}
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.countryPlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.partnershipTypeLabel}
                      </label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      >
                        <option value="">
                          {tr.form.partnershipTypePlaceholder}
                        </option>
                        <option value="distribution">Дистрибуция</option>
                        <option value="business">{tr.form.partnershipTypeBusiness}</option>
                        <option value="academic">{tr.form.partnershipTypeAcademic}</option>
                        <option value="research">{tr.form.partnershipTypeResearch}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {tr.form.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder={tr.form.messagePlaceholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <Send size={20} />
                    {isSending ? "Отправка..." : tr.form.submitButton}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Partnership;