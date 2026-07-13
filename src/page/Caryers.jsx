"use client";

import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Send,
  Mail,
  Phone,
  Upload,
  User,
  FileText,
  Sparkles,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";

// ТВОИ ДАННЫЕ ДЛЯ TELEGRAM
const BOT_TOKEN = "8323618565:AAE4ig_iLWcuD98CUu61guXOCJDhj_j2w9M";
const GROUP_ID = "-5031603161";

const translations = {
  ru: {
    badge: "Карьера в ANFA",
    heroTitle: "Присоединяйтесь к ANFA PHARMACEUTICALS",
    heroText: "Мы ищем талантливых и мотивированных специалистов, готовых расти вместе с нами",
    aboutPolicyTitle: "Наша кадровая политика",
    aboutPolicyText1: "Высококвалифицированные специалисты являются основой ANFA PHARMACEUTICALS. Они отражают высокие стандарты и ценности компании. Учитывая специфику фармацевтического сектора, наша компания уделяет особое внимание вопросам кадровой политики.",
    aboutPolicyText2: "Кадровая политика компании – это акцент на возможности профессионального и карьерного роста. Успешное развитие карьеры в компании во многом зависит от умения и желания сотрудника повышать уровень профессионализма, осваивать дополнительные должностные обязанности, предлагать и внедрять новые способы работы.",
    trainingTitle: "Обучение и развитие",
    trainingText: "Специалисты компании проходят обязательный курс переподготовки в собственном тренинг-центре и специфические тренинги для повышения профессионального уровня сотрудников.",
    vacancyTitle: "Вакансия: Медицинский представитель",
    vacancySubtitle: "Мы ищем энергичных и целеустремлённых специалистов",
    responsibilitiesTitle: "Основные обязанности",
    responsibilities: [
      "Работа с поликлиниками, стационарами и аптеками города по своему направлению",
      "Организация круглых столов и фармацевтических кружков",
      "Участие в организации крупных мероприятий",
      "Выполнение и перевыполнение плана по продвижению препаратов компании на вверенной территории",
    ],
    requirementsTitle: "Требования к кандидату",
    requirementsIntro: "Если Вы хотите стать Медицинским представителем, Вы должны иметь законченное высшее медицинское или фармацевтическое образование, быть энергичным и мобильным, амбициозным, готовым учиться и постоянно развиваться.",
    requirements: [
      "Опыт работы Медицинским представителем не менее 1 года",
      "Наличие водительских прав категории «В»",
      "Опыт проведения презентаций",
      "Умение и желание общаться с людьми",
      "Стрессоустойчивость",
      "Активность и инициативность",
    ],
    benefitsTitle: "Условия работы и компенсации",
    benefits: [
      "Занятость — полный рабочий день",
      "Испытательный срок — 3 месяца",
      "Социальный пакет",
      "Автомобиль",
      "Конкурентоспособная заработная плата",
      "Компенсация бензина (дорожных расходов), мобильных переговоров",
      "Квартальный и годовой бонусы по результатам работы",
      "Профессиональное обучение и развитие",
    ],
    values: [
      { title: "Профессионализм", description: "Высокие стандарты и ценности компании" },
      { title: "Карьерный рост", description: "Возможности для успешного развития" },
      { title: "Инновации", description: "Внедрение новых способов работы" },
      { title: "Равенство", description: "Независимо от национальности, религии или пола" },
    ],
    applyBadge: "Присоединяйтесь к нам",
    applyTitle: "Оставьте заявку",
    applySubtitle: "Мы свяжемся с Вами в ближайшее время",
    form: {
      fullName: "ФИО *",
      fullNamePlaceholder: "Введите ваше имя",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      phone: "Телефон *",
      phonePlaceholder: "+998 XX XXX XX XX",
      position: "Желаемая должность *",
      positionPlaceholder: "Медицинский представитель",
      experience: "Опыт работы",
      experiencePlaceholder: "Например: 2 года",
      education: "Образование",
      educationPlaceholder: "Медицинское/Фармацевтическое",
      coverLetter: "Сопроводительное письмо",
      coverPlaceholder: "Расскажите о себе и почему хотите работать у нас...",
      resumeLabel: "Резюме (PDF, DOC)",
      resumePlaceholder: "Прикрепить резюме",
      orSendTo: "Или отправьте резюме напрямую",
      submit: "Отправить заявку",
      successTitle: "Заявка отправлена!",
      successText: "Спасибо! Мы свяжемся с вами в ближайшее время.",
    },
  },

  en: {
    badge: "Career at ANFA",
    heroTitle: "Join ANFA PHARMACEUTICALS",
    heroText: "We are looking for talented and motivated professionals ready to grow with us",
    aboutPolicyTitle: "Our HR Policy",
    aboutPolicyText1: "Highly qualified specialists are the foundation of ANFA PHARMACEUTICALS. They reflect the high standards and values of the company. Considering the specifics of the pharmaceutical sector, our company pays special attention to HR policy issues.",
    aboutPolicyText2: "The company's HR policy focuses on opportunities for professional and career growth. Successful career development in the company largely depends on the employee's ability and desire to improve professionalism, master additional job duties, propose and implement new ways of working.",
    trainingTitle: "Training and Development",
    trainingText: "Company specialists undergo mandatory retraining courses at our own training center and specific trainings to improve their professional level.",
    vacancyTitle: "Vacancy: Medical Representative",
    vacancySubtitle: "We are looking for energetic and goal-oriented professionals",
    responsibilitiesTitle: "Main Responsibilities",
    responsibilities: [
      "Working with city polyclinics, hospitals and pharmacies in your direction",
      "Organization of round tables and pharmaceutical circles",
      "Participation in organizing major events",
      "Fulfillment and overfulfillment of the plan for promoting company drugs in the assigned territory",
    ],
    requirementsTitle: "Requirements for the candidate",
    requirementsIntro: "If you want to become a Medical Representative, you must have completed higher medical or pharmaceutical education, be energetic and mobile, ambitious, ready to learn and constantly develop.",
    requirements: [
      "At least 1 year of experience as a Medical Representative",
      "Category 'B' driving license",
      "Experience in conducting presentations",
      "Ability and desire to communicate with people",
      "Stress resistance",
      "Activity and initiative",
    ],
    benefitsTitle: "Working conditions and compensations",
    benefits: [
      "Full-time employment",
      "Probation period — 3 months",
      "Social package",
      "Company car",
      "Competitive salary",
      "Compensation for gasoline (travel expenses), mobile communication",
      "Quarterly and annual bonuses based on performance",
      "Professional training and development",
    ],
    values: [
      { title: "Professionalism", description: "High standards and values of the company" },
      { title: "Career Growth", description: "Opportunities for successful development" },
      { title: "Innovation", description: "Implementation of new working methods" },
      { title: "Equality", description: "Regardless of nationality, religion or gender" },
    ],
    applyBadge: "Join us",
    applyTitle: "Submit your application",
    applySubtitle: "We will contact you soon",
    form: {
      fullName: "Full Name *",
      fullNamePlaceholder: "Enter your name",
      email: "Email *",
      emailPlaceholder: "your@email.com",
      phone: "Phone *",
      phonePlaceholder: "+998 XX XXX XX XX",
      position: "Desired Position *",
      positionPlaceholder: "Medical Representative",
      experience: "Work Experience",
      experiencePlaceholder: "For example: 2 years",
      education: "Education",
      educationPlaceholder: "Medical/Pharmaceutical",
      coverLetter: "Cover Letter",
      coverPlaceholder: "Tell us about yourself and why you want to work with us...",
      resumeLabel: "Resume (PDF, DOC)",
      resumePlaceholder: "Attach resume",
      orSendTo: "Or send resume directly",
      submit: "Submit Application",
      successTitle: "Application Submitted!",
      successText: "Thank you! We will contact you soon.",
    },
  },

  uz: {
    badge: "ANFA'da karyera",
    heroTitle: "ANFA PHARMACEUTICALS ga qo'shiling",
    heroText: "Biz iste'dodli va motivatsiyali mutaxassislar izlayapmiz, biz bilan birga o'sishga tayyor",
    aboutPolicyTitle: "Bizning kadrlar siyosatimiz",
    aboutPolicyText1: "Yuqori malakali mutaxassislar ANFA PHARMACEUTICALS ning asosidir. Ular kompaniyaning yuqori standartlari va qadriyatlarini aks ettiradi. Farmatsevtika sohasining o'ziga xosligini hisobga olgan holda, kompaniyamiz kadrlar siyosati masalalariga alohida e'tibor beradi.",
    aboutPolicyText2: "Kompaniyaning kadrlar siyosati – bu professional va karyera o'sishiga imkoniyatlariga urg'u berishdir. Kompaniyada muvaffaqiyatli karyera rivojlanishi ko'p jihatdan xodimning professional darajasini oshirish, qo'shimcha vazifalarni o'zlashtirish, yangi ish usullarini taklif qilish va joriy etish qobiliyati va istagiga bog'liq.",
    trainingTitle: "O'qitish va rivojlanish",
    trainingText: "Kompaniya mutaxassislari o'z trening-markazida majburiy qayta tayyorlash kursidan o'tadilar va xodimlarning professional darajasini oshirish uchun maxsus treninglar o'tkaziladi.",
    vacancyTitle: "Bo'sh ish o'rni: Tibbiy vakil",
    vacancySubtitle: "Biz energik va maqsadga yo'naltirilgan mutaxassislar izlayapmiz",
    responsibilitiesTitle: "Asosiy vazifalar",
    responsibilities: [
      "Shahar poliklinikalari, statsionarlar va dorixonalar bilan o'z yo'nalishi bo'yicha ishlash",
      "Davra suhbatlari va farmatsevtika doiralarini tashkil etish",
      "Katta tadbirlarni tashkil etishda ishtirok etish",
      "Ishonchli hududda kompaniya preparatlarini targ'ib qilish bo'yicha reja bajarish va ortiqcha bajarish",
    ],
    requirementsTitle: "Nomzodga qo'yiladigan talablar",
    requirementsIntro: "Agar Siz Tibbiy vakil bo'lmoqchi bo'lsangiz, Siz tugallangan oliy tibbiy yoki farmatsevtika ta'limiga ega bo'lishingiz, energik va mobil, ambitsiyali, o'rganishga va doimiy rivojlanishga tayyor bo'lishingiz kerak.",
    requirements: [
      "Tibbiy vakil sifatida kamida 1 yil ish tajribasi",
      "«B» toifali haydovchilik guvohnomasi mavjudligi",
      "Prezentatsiya o'tkazish tajribasi",
      "Odamlar bilan muloqot qilish qobiliyati va istagi",
      "Stressga chidamlilik",
      "Faollik va tashabbuskorlik",
    ],
    benefitsTitle: "Ish sharoitlari va kompensatsiyalar",
    benefits: [
      "Ish bilan ta'minlash – to'liq ish kuni",
      "Sinov muddati – 3 oy",
      "Ijtimoiy paket",
      "Avtomobil",
      "Raqobatbardosh ish haqi",
      "Benzin (yo'l xarajatlari), mobil aloqa xarajatlari kompensatsiyasi",
      "Ish natijalari bo'yicha choraklik va yillik bonuslar",
      "Professional o'qitish va rivojlanish",
    ],
    values: [
      { title: "Professionalizm", description: "Kompaniyaning yuqori standartlari va qadriyatlar" },
      { title: "Karyera o'sishi", description: "Muvaffaqiyatli rivojlanish imkoniyatlari" },
      { title: "Innovatsiyalar", description: "Yangi ish usullarini joriy etish" },
      { title: "Tenglik", description: "Millat, din yoki jinsdan qat'i nazar" },
    ],
    applyBadge: "Bizga qo'shiling",
    applyTitle: "Ariza qoldiring",
    applySubtitle: "Tez orada siz bilan bog'lanamiz",
    form: {
      fullName: "FIO *",
      fullNamePlaceholder: "Ismingizni kiriting",
      email: "Email *",
      emailPlaceholder: "sizning@email.com",
      phone: "Telefon *",
      phonePlaceholder: "+998 XX XXX XX XX",
      position: "Kerakli lavozim *",
      positionPlaceholder: "Tibbiy vakil",
      experience: "Ish tajribasi",
      experiencePlaceholder: "Masalan: 2 yil",
      education: "Ta'lim",
      educationPlaceholder: "Tibbiy/Farmatsevtika",
      coverLetter: "Motivatsion xat",
      coverPlaceholder: "O'zingiz haqida va nima uchun bizda ishlashni xohlayotganingiz haqida yozing...",
      resumeLabel: "Rezyume (PDF, DOC)",
      resumePlaceholder: "Rezyumeni yuklang",
      orSendTo: "Yoki rezyumeni to'g'ridan-to'g'ri yuboring",
      submit: "Ariza yuborish",
      successTitle: "Ariza yuborildi!",
      successText: "Rahmat! Tez orada siz bilan bog'lanamiz.",
    },
  },
};

const Careers = () => {
  const [lang, setLang] = useState("ru");
  const tr = translations[lang];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    message: "",
    resume: null,
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

      const resumeName = formData.resume ? formData.resume.name : "—";

      const messageText = `
**Новая заявка с сайта → Карьера**

👤 ФИО: ${formData.fullName || "—"}
📧 Email: ${formData.email || "—"}
📞 Телефон: ${formData.phone || "—"}
💼 Желаемая должность: ${formData.position || "—"}
🕒 Опыт работы: ${formData.experience || "—"}
🎓 Образование: ${formData.education || "—"}
💬 Сопроводительное письмо:
${formData.message || "—"}

📄 Резюме: ${resumeName}

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем в Telegram
    await sendToTelegram();

    // Показываем успех пользователю
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        education: "",
        message: "",
        resume: null,
      });
    }, 3000);
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

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in { animation: fadeInUp 0.6s ease-out backwards; }
        .animate-slide-in { animation: slideInLeft 0.6s ease-out backwards; }
        .floating { animation: float 3s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f5f9; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #2563eb; }
      `}</style>

      <Header />

      <div className="careers-page min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative">
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
                <Briefcase size={16} />
                {tr.badge}
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                {tr.heroTitle.split("ANFA")[0]}
                <span className="gradient-text">ANFA PHARMACEUTICALS</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {tr.heroText}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {tr.values.map((value, index) => {
                const Icon = [Target, TrendingUp, Lightbulb, Heart][index];
                return (
                  <div
                    key={index}
                    className="animate-fade-in bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 floating">
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <div className="animate-slide-in bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {tr.aboutPolicyTitle}
                    </h2>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {tr.aboutPolicyText1}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {tr.aboutPolicyText2}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="animate-slide-in bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 lg:p-12"
                style={{ animationDelay: "100ms" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                      {tr.trainingTitle}
                    </h2>
                    <p className="text-slate-700 leading-relaxed">
                      {tr.trainingText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vacancy Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.vacancyTitle}</span>
              </h2>
              <p className="text-lg text-slate-600">
                {tr.vacancySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Briefcase size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {tr.responsibilitiesTitle}
                </h3>
                <ul className="space-y-3">
                  {tr.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <FileText size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {tr.requirementsTitle}
                </h3>
                <div className="mb-6">
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {tr.requirementsIntro}
                  </p>
                </div>
                <ul className="space-y-3">
                  {tr.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Award size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {tr.benefitsTitle}
                </h3>
                <ul className="space-y-3">
                  {tr.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                <Send size={16} />
                {tr.applyBadge}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="gradient-text">{tr.applyTitle}</span>
              </h2>
              <p className="text-lg text-slate-600">{tr.applySubtitle}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {tr.form.successTitle}
                  </h3>
                  <p className="text-slate-600">{tr.form.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.fullName}
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder={tr.form.fullNamePlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.email}
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder={tr.form.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.phone}
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder={tr.form.phonePlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.position}
                      </label>
                      <div className="relative">
                        <Briefcase size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder={tr.form.positionPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.experience}
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.experiencePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {tr.form.education}
                      </label>
                      <input
                        type="text"
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder={tr.form.educationPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {tr.form.coverLetter}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder={tr.form.coverPlaceholder}
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {tr.form.resumeLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-white border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all"
                      >
                        <Upload size={24} className="text-slate-400" />
                        <span className="text-slate-600">
                          {formData.resume ? formData.resume.name : tr.form.resumePlaceholder}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded-xl p-6">
                    <p className="text-sm text-slate-700 mb-3">
                      {tr.form.orSendTo}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="mailto:hr@anfa.uz"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        <Mail size={16} />
                        hr@anfa.uz
                      </a>
                      <a
                        href="mailto:info@anfa.uz"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        <Mail size={16} />
                        info@anfa.uz
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    <Send size={20} />
                    {isSending ? "Отправка..." : tr.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Careers;