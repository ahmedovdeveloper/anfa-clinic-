import React, { useState } from "react";
import { 
  Users, 
  Building2, 
  FlaskConical, 
  TrendingUp, 
  Globe, 
  Microscope,
  Factory,
  Pill,
  Droplets,
  Package,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Sotrudniki = () => {
  const [activeTab, setActiveTab] = useState("business");

  // Статистика производства
  const productionStats = [
    {
      number: "295M",
      label: "Таблеток в год",
      icon: <Pill size={32} className="text-blue-600" />
    },
    {
      number: "4M",
      label: "Блистеров в год",
      icon: <Package size={32} className="text-green-600" />
    },
    {
      number: "4M",
      label: "Флаконов сиропа в год",
      icon: <Droplets size={32} className="text-purple-600" />
    },
    {
      number: "40+",
      label: "Видов продукции",
      icon: <Factory size={32} className="text-orange-600" />
    }
  ];

  // Формы продукции
  const productForms = [
    {
      category: "Жидкие формы",
      icon: <Droplets size={24} className="text-blue-600" />,
      items: ["Сиропы", "Аэрозоли и спреи", "Капли"]
    },
    {
      category: "Твердые формы",
      icon: <Pill size={24} className="text-purple-600" />,
      items: ["Таблетки", "Капсулы", "Блистеры"]
    }
  ];

  // Направления исследований
  const researchAreas = [
    {
      title: "Кожные заболевания",
      icon: "🧴",
      description: "Разработка натуральных препаратов для лечения кожных проблем"
    },
    {
      title: "Респираторные заболевания",
      icon: "🫁",
      description: "Фито-препараты для поддержки дыхательной системы"
    },
    {
      title: "ЛОР заболевания",
      icon: "👂",
      description: "Лечение заболеваний глаз, носа и ушей"
    },
    {
      title: "Антидиабетические средства",
      icon: "💉",
      description: "Улучшение препаратов растительного происхождения"
    },
    {
      title: "ЖКТ заболевания",
      icon: "🔬",
      description: "Лечение заболеваний желудочно-кишечного тракта"
    },
    {
      title: "Седативные средства",
      icon: "🧘",
      description: "Антидепрессанты растительного происхождения"
    },
    {
      title: "Щитовидная железа",
      icon: "⚕️",
      description: "Натуральные решения для эндокринной системы"
    },
    {
      title: "Урология",
      icon: "🩺",
      description: "Лечение заболеваний простаты и мочевыделительной системы"
    },
    {
      title: "Витамины и минералы",
      icon: "💊",
      description: "Усовершенствование натуральных кальций содержащих препаратов"
    },
    {
      title: "Гинекология",
      icon: "👩‍⚕️",
      description: "Фито препараты для женского здоровья"
    },
    {
      title: "Аппетит",
      icon: "🍽️",
      description: "Улучшение травяных добавок для тонизирования аппетита"
    },
    {
      title: "Общее здоровье",
      icon: "❤️",
      description: "Комплексные решения для улучшения качества жизни"
    }
  ];

  // Преимущества партнерства
  const partnershipBenefits = [
    {
      icon: <Globe className="text-blue-600" size={32} />,
      title: "Глобальный охват",
      description: "Расширение присутствия на международных рынках"
    },
    {
      icon: <Factory className="text-green-600" size={32} />,
      title: "Мощное производство",
      description: "Современное оборудование и высокие объемы выпуска"
    },
    {
      icon: <Microscope className="text-purple-600" size={32} />,
      title: "Научная база",
      description: "Собственная R&D лаборатория и квалифицированные специалисты"
    },
    {
      icon: <CheckCircle className="text-orange-600" size={32} />,
      title: "Качество GMP",
      description: "Соответствие международным стандартам качества"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white mb-6">
              <Users size={20} />
              <span className="text-sm font-medium">Сотрудничество с ANFA</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Партнерство для развития
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              ANFA стремится объединять усилия с профессиональными партнерами, которые имеют 
              сильные компетенции и готовы работать в кооперации
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#business"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full 
                font-bold hover:bg-blue-50 transition shadow-xl"
              >
                Деловое партнерство
                <ArrowRight size={20} />
              </a>
              <a 
                href="#academic"
                className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full 
                font-bold hover:bg-blue-600 transition border-2 border-white/20"
              >
                Академическое сотрудничество
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PARTNERSHIP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Почему сотрудничество с ANFA?
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Мы видим партнерские отношения с научными академиями, научно-исследовательскими 
                институтами, предприятиями, благотворительными организациями и частными лицами 
                в качестве фундаментальной части построения успешного, диверсифицированного 
                глобального бизнеса в сфере здравоохранения.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Работа с иностранными партнерами помогает нам продвигать наши научные исследования 
                и увеличивать портфель продуктов, которые могут удовлетворять потребности здоровья 
                людей во всем мире.
              </p>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Международное сотрудничество</h3>
                  <p className="text-slate-600">
                    Мы уже вовлечены в широком спектре сотрудничества с внутренними и внешними 
                    партнерами в нескольких странах
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {partnershipBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 border-2 
                  border-slate-200 hover:border-blue-300 hover:shadow-xl transition"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TYPES TABS */}
      <section id="business" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Области сотрудничества
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Выберите направление, которое вас интересует
            </p>
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("business")}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition ${
                activeTab === "business"
                  ? 'bg-blue-600 text-white shadow-xl'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Building2 size={24} />
              Деловое партнерство
            </button>
            <button
              onClick={() => setActiveTab("academic")}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition ${
                activeTab === "academic"
                  ? 'bg-blue-600 text-white shadow-xl'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FlaskConical size={24} />
              Академическое сотрудничество
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {activeTab === "business" && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Building2 className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">Деловое партнерство</h3>
                    <p className="text-slate-600">Развитие бизнеса и расширение рынков сбыта</p>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Партнерство играет важную роль в успехе ANFA. Это иллюстрируется в отношениях, 
                    которые мы создали, и продуктах, которые мы запустили и улучшили.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Мы придаем большое значение сотрудничеству с другими компаниями, учреждениями 
                    и организациями, потому что знаем, что многие великие идеи приходят извне нашей компании.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="text-blue-600" size={28} />
                      <h4 className="text-xl font-bold text-slate-900">Разработка продуктов</h4>
                    </div>
                    <p className="text-slate-700">
                      Сотрудничество в разработке новых продуктов фитотерапии и натуральных БАД
                    </p>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="text-green-600" size={28} />
                      <h4 className="text-xl font-bold text-slate-900">Дистрибуция</h4>
                    </div>
                    <p className="text-slate-700">
                      Расширение сети продаж и дистрибуции существующих продуктов на новых рынках
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl text-white">
                  <h4 className="text-xl font-bold mb-3">B2B решения</h4>
                  <p className="text-blue-100 leading-relaxed">
                    ANFA PHARMACEUTICALS намерена укрепить свои возможности продаж и сбыта в разных странах. 
                    Подразделение «Бизнес-бизнес» создано для обеспечения широкого спектра интегрированных 
                    решений. Наш опыт и экспертные знания имеют решающее значение для лучшего понимания 
                    ваших потребностей в строго регулируемой фармацевтической среде.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "academic" && (
              <div id="academic">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <FlaskConical className="text-purple-600" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">Академическое сотрудничество</h3>
                    <p className="text-slate-600">Исследования и разработки новых решений</p>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Партнерство с академическими исследователями и исследовательскими институтами является 
                    важной частью наших исследований и разработок. Эти партнерские отношения стали особенно 
                    актуальными в условиях растущего экономического давления и глобальной конкуренции.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Необходимость в междисциплинарных подходах и растущая сложность проблем требуют 
                    совместных решений между академическими учреждениями и частным сектором.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Наша цель</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Компания ANFA PHARMACEUTICALS всегда ориентирована на повышение качества, разработку 
                    и внедрение новых технологий. Целью наших исследований является разработка новых 
                    фито-препаратов для помощи нуждающимся людям и улучшения качества их жизни.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl">
                  <Microscope className="text-orange-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Химико-аналитическая разработка
                    </h4>
                    <p className="text-slate-700">
                      Отличительной чертой компании является химико-аналитическая разработка новых 
                      активных веществ с использованием современных методов и инновационных решений.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Направления исследований
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Наша лаборатория ведет разработки в следующих областях
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 
                border-slate-200 hover:border-blue-400 hover:shadow-xl transition group"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white text-center">
            <p className="text-xl font-semibold mb-2">
              Хотя мы уделяем особое внимание этим областям, наши партнерские интересы не ограничиваются ими
            </p>
            <p className="text-blue-100">
              ANFA может быть правильным партнером для продвижения ваших идей для производства 
              традиционной нутрицевтики в борьбе за здоровье
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTION CAPACITY */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Производственные мощности</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Современное оборудование и высокие объемы производства
            </p>
          </div>

          {/* STATS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {productionStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center 
                hover:bg-white/20 transition border border-white/20"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* PRODUCT FORMS */}
          <div className="grid md:grid-cols-2 gap-8">
            {productForms.map((form, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  {form.icon}
                  <h3 className="text-2xl font-bold">{form.category}</h3>
                </div>
                <ul className="space-y-3">
                  {form.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                      <span className="text-lg text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/20">
            <p className="text-lg text-slate-200 leading-relaxed text-center">
              Технологическое оборудование предприятий осуществляет упаковку препаратов во флаконах, 
              блистерных упаковках, аэрозольных баллонах и других типах первичной упаковки. 
              Благодаря нашим командам по исследованиям и развитию, портфолио компании регулярно 
              пополняется новыми БАД препаратами.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Начните сотрудничество
            </h2>
            <p className="text-lg text-slate-600">
              Мы всегда заинтересованы услышать от вас, если вы заинтересованы в деловом 
              и академическом партнерстве
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                    focus:border-blue-500 focus:outline-none transition"
                    placeholder="Введите имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Компания *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                    focus:border-blue-500 focus:outline-none transition"
                    placeholder="Название компании"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                    focus:border-blue-500 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                    focus:border-blue-500 focus:outline-none transition"
                    placeholder="+998 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Тип партнерства *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                  focus:border-blue-500 focus:outline-none transition"
                >
                  <option value="">Выберите тип</option>
                  <option value="business">Деловое партнерство</option>
                  <option value="academic">Академическое сотрудничество</option>
                  <option value="distribution">Дистрибуция</option>
                  <option value="research">Исследования</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl 
                  focus:border-blue-500 focus:outline-none transition resize-none"
                  placeholder="Расскажите о вашем предложении..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 
                rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition 
                shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Отправить заявку
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Mail className="mx-auto mb-3 text-blue-600" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Email</h4>
              <a href="mailto:info@anfa.uz" className="text-blue-600 hover:underline">
                info@anfa.uz
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <Phone className="mx-auto mb-3 text-green-600" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Телефон</h4>
              <a href="tel:+998" className="text-green-600 hover:underline">
                +998 XX XXX XX XX
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="mx-auto mb-3 text-purple-600" size={32} />
              <h4 className="font-bold text-slate-900 mb-2">Адрес</h4>
              <p className="text-slate-600 text-sm">
                Sirdaryo viloyati, Sirdaryo tumani
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sotrudniki;