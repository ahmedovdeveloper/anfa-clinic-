// productsData.js - База данных всех продуктов с данными из PDF
import cassi from "../assets/cassi.webp";
import congnitaz from "../assets/congnitaz.webp";
import aktivaz from "../assets/aktivaz.webp";
import hisgrador from "../assets/hisgrador.webp";
import hereliona from "../assets/hereliona.webp";
import kartaz from "../assets/kartaz.webp";
import nootroz from "../assets/nootroz.webp";
import richomegos from "../assets/richomegos.webp";
import vitazza from "../assets/vitazza.webp";
import stallaz from "../assets/stallaz.webp";
import allergidon from "../assets/allergidon.webp"
import anemak from "../assets/anemak.webp"
import bronhodokds from "../assets/bronhodokds.webp"
import gorlozin from "../assets/gorlozin.webp"
import deparazitol from "../assets/deparazitol.webp"
import dermotonal from "../assets/dermotonal.webp"
import diabetazol from "../assets/diabetazol.webp"
import vetrogonin from "../assets/vetrogonin.webp"
import zrenadol from "../assets/zrenadol.webp"
import aguas from "../assets/aguas.webp"
import carbofer from "../assets/carbofer.webp"
import femista from "../assets/femista.webp"
import akitonozol from "../assets/akitonozol.webp"
import virtusin from "../assets/virtusin.webp"
import vitalit from "../assets/vitalit.webp"
import gastirak from "../assets/gastirak.webp"
import gelmatoksin from "../assets/gelmatoksin.webp"
import ginko from "../assets/ginko.webp"
import dama from "../assets/dama.webp"
import dentovital from "../assets/dentovital.webp"
export const productsData = {
  sirop: { 
  1: {id: 1,
    nameUz: "CASSI",
    nameRu: "КАССИ",
    nameEn: "CASSI",
    name: "CASSI",

    taglineUz: "Bolalar uchun",
    taglineRu: "Для детей",
    taglineEn: "For children",

    image: cassi,
    pdf: "https://drive.google.com/file/d/19Doj-c9VXPEmFLH-KiiDo3LBIQ-BrWGc/view?usp=sharing",

    volume: "150 ml",
    formUz: "Suspenziya",
    formRu: "Суспензия",
    formEn: "Suspension",

    rating: 4.8,
    reviews: 1247,
    manufacturer: "TOP PHARM SERVICE MChJ",
    certification: "O'zMSt 166-2024",

    price: "120,000",
    currency: "сум",

    // GENERAL DESCRIPTION
    description: {
      uz: "CASSI — ayniqsa bolalar uchun ishlab chiqilgan, kalsiy, magniy, vitamin D3, vitamin K2 va sink saqlovchi biologik faol qo'shimcha. Formula bolaning sog'lom o'sishi va rivojlanishini, suyak va tishlarning mustahkamligini, immunitet va mushak-asab tizimining normal faoliyatini qo'llab-quvvatlashga yordam beradi.",
      ru: "CASSI — биологически активная добавка, специально разработанная для детей. Содержит кальций, магний, витамины D3, K2 и цинк. Формула помогает поддерживать здоровый рост и развитие ребенка, крепость костей и зубов, иммунитет и нормальную работу нервно-мышечной системы.",
      en: "CASSI is a dietary supplement specially developed for children. It contains calcium, magnesium, vitamins D3 and K2, and zinc. Its formula helps support healthy growth and development, strong bones and teeth, immune function, and normal muscle and nervous system function."
    },

    // MAIN PURPOSES
    benefits: [
      {
        titleUz: "Mustahkam suyak va tishlar",
        titleRu: "Крепкие кости и зубы",
        titleEn: "Strong Bones and Teeth",

        descriptionUz: "Faol o'sish davrida suyak va tishlarning normal rivojlanishini qo'llab-quvvatlaydi.",
        descriptionRu: "Поддерживает нормальное развитие костей и зубов в период активного роста.",
        descriptionEn: "Supports normal bone and teeth development during periods of active growth.",

        icon: "💪"
      },
      {
        titleUz: "Immunitetni qo'llab-quvvatlash",
        titleRu: "Поддержка иммунитета",
        titleEn: "Immune System Support",

        descriptionUz: "Sink va vitamin D3 immun tizimining normal faoliyatida ishtirok etadi.",
        descriptionRu: "Цинк и витамин D3 участвуют в нормальной работе иммунной системы.",
        descriptionEn: "Zinc and vitamin D3 contribute to the normal functioning of the immune system.",

        icon: "🛡️"
      },
      {
        titleUz: "Teri, soch va tirnoqlar sog'ligi",
        titleRu: "Здоровье кожи, волос и ногтей",
        titleEn: "Healthy Skin, Hair and Nails",

        descriptionUz: "Sink hujayralarning yangilanishi va terining normal holatini qo'llab-quvvatlaydi.",
        descriptionRu: "Цинк поддерживает обновление клеток и нормальное состояние кожи.",
        descriptionEn: "Zinc supports cell renewal and the maintenance of normal skin.",

        icon: "✨"
      },
      {
        titleUz: "Mushaklar va asab tizimi",
        titleRu: "Мышцы и нервная система",
        titleEn: "Muscles and Nervous System",

        descriptionUz: "Magniy mushaklar va asab tizimining normal faoliyatida ishtirok etadi.",
        descriptionRu: "Магний участвует в нормальной работе мышц и нервной системы.",
        descriptionEn: "Magnesium contributes to the normal functioning of muscles and the nervous system.",

        icon: "😴"
      }
    ],

    // COMPOSITION PER 5 ML
    composition: [
      {
        nameUz: "Kalsiy laktat",
        nameRu: "Лактат кальция",
        nameEn: "Calcium Lactate",
        amount: "500 mg",
        per: "5 ml"
      },
      {
        nameUz: "Xolekaltsiferol (Vitamin D3)",
        nameRu: "Холекальциферол (Витамин D3)",
        nameEn: "Cholecalciferol (Vitamin D3)",
        amount: "15 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin K2 (MK-7)",
        nameRu: "Витамин K2 (MK-7)",
        nameEn: "Vitamin K2 (MK-7)",
        amount: "27.5 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Magneziy sitrat",
        nameRu: "Цитрат магния",
        nameEn: "Magnesium Citrate",
        amount: "70 mg",
        per: "5 ml"
      },
      {
        nameUz: "Sink (sink glyukonat)",
        nameRu: "Цинк (глюконат цинка)",
        nameEn: "Zinc (Zinc Gluconate)",
        amount: "5 mg",
        per: "5 ml"
      }
    ],

    // INGREDIENT DETAILS
    ingredients: [
      {
        nameUz: "Kalsiy laktat",
        nameRu: "Лактат кальция",
        nameEn: "Calcium Lactate",
        icon: "🦴",

        benefitsUz: [
          "Suyaklarning asosiy minerallaridan biri.",
          "Suyak va tishlarning mustahkamligini qo'llab-quvvatlaydi.",
          "Yurak va mushak faoliyatida ishtirok etadi.",
          "Asab impulslarining uzatilishida muhim rol o'ynaydi."
        ],

        benefitsRu: [
          "Один из основных минералов костной ткани.",
          "Поддерживает прочность костей и зубов.",
          "Участвует в работе сердца и мышц.",
          "Играет важную роль в передаче нервных импульсов."
        ],

        benefitsEn: [
          "One of the main minerals found in bones.",
          "Supports strong bones and teeth.",
          "Participates in heart and muscle function.",
          "Plays an important role in nerve impulse transmission."
        ]
      },

      {
        nameUz: "Vitamin D3 (Xolekaltsiferol)",
        nameRu: "Витамин D3 (Холекальциферол)",
        nameEn: "Vitamin D3 (Cholecalciferol)",
        icon: "☀️",

        benefitsUz: [
          "Organizm uchun muhim vitamin.",
          "Kalsiy va fosforning so'rilishiga yordam beradi.",
          "Suyaklarning normal rivojlanishini qo'llab-quvvatlaydi.",
          "Immun tizimining normal faoliyatida ishtirok etadi."
        ],

        benefitsRu: [
          "Важный для организма витамин.",
          "Способствует усвоению кальция и фосфора.",
          "Поддерживает нормальное развитие костей.",
          "Участвует в нормальной работе иммунной системы."
        ],

        benefitsEn: [
          "An essential vitamin for the body.",
          "Helps the absorption of calcium and phosphorus.",
          "Supports normal bone development.",
          "Contributes to normal immune system function."
        ]
      },

      {
        nameUz: "Vitamin K2 (MK-7)",
        nameRu: "Витамин K2 (MK-7)",
        nameEn: "Vitamin K2 (MK-7)",
        icon: "🎯",

        benefitsUz: [
          "Suyak metabolizmida ishtirok etadi.",
          "Kalsiyni bog'laydigan oqsillarning faollashishiga yordam beradi.",
          "Vitamin D3 bilan birgalikda suyak salomatligini qo'llab-quvvatlaydi.",
          "Normal suyak shakllanishida ishtirok etadi."
        ],

        benefitsRu: [
          "Участвует в костном обмене веществ.",
          "Способствует активации белков, связывающих кальций.",
          "Совместно с витамином D3 поддерживает здоровье костей.",
          "Участвует в нормальном формировании костной ткани."
        ],

        benefitsEn: [
          "Participates in bone metabolism.",
          "Helps activate calcium-binding proteins.",
          "Works alongside vitamin D3 to support bone health.",
          "Contributes to normal bone formation."
        ]
      },

      {
        nameUz: "Magneziy sitrat",
        nameRu: "Цитрат магния",
        nameEn: "Magnesium Citrate",
        icon: "🧘",

        benefitsUz: [
          "Mushaklarning normal faoliyatini qo'llab-quvvatlaydi.",
          "Asab tizimining normal ishlashida ishtirok etadi.",
          "Energiya almashinuvida muhim rol o'ynaydi.",
          "Organizmning elektrolit muvozanatini saqlashga yordam beradi."
        ],

        benefitsRu: [
          "Поддерживает нормальную работу мышц.",
          "Участвует в нормальной работе нервной системы.",
          "Играет важную роль в энергетическом обмене.",
          "Помогает поддерживать электролитный баланс организма."
        ],

        benefitsEn: [
          "Supports normal muscle function.",
          "Contributes to normal nervous system function.",
          "Plays an important role in energy metabolism.",
          "Helps maintain the body's electrolyte balance."
        ]
      },

      {
        nameUz: "Sink (glyukonat)",
        nameRu: "Цинк (глюконат)",
        nameEn: "Zinc (Gluconate)",
        icon: "⚡",

        benefitsUz: [
          "Hujayralarning o'sishi va bo'linishi uchun zarur.",
          "Immun tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Teri, soch va tirnoqlarning normal holatiga yordam beradi.",
          "Ko'plab fermentlar faoliyatida ishtirok etadi."
        ],

        benefitsRu: [
          "Необходим для роста и деления клеток.",
          "Поддерживает нормальную работу иммунной системы.",
          "Помогает поддерживать здоровье кожи, волос и ногтей.",
          "Участвует в работе многих ферментов."
        ],

        benefitsEn: [
          "Essential for cell growth and division.",
          "Supports normal immune system function.",
          "Helps maintain healthy skin, hair and nails.",
          "Participates in the activity of many enzymes."
        ]
      }
    ],

    // HOW TO USE
    usage: {
      dosageUz: "2 yoshdan boshlab bolalarga kuniga 1 marta 5 ml.",
      dosageRu: "Детям с 2 лет — по 5 мл 1 раз в день.",
      dosageEn: "Children aged 2 years and older: 5 ml once daily.",

      timingUz: "Ovqat paytida.",
      timingRu: "Во время еды.",
      timingEn: "During meals.",

      durationUz: "1 oydan 2 oygacha.",
      durationRu: "От 1 до 2 месяцев.",
      durationEn: "1 to 2 months.",

      instructionUz: "Qo'llashdan oldin flakonni yaxshilab chayqatish kerak.",
      instructionRu: "Перед применением хорошо взболтать флакон.",
      instructionEn: "Shake the bottle well before use."
    },

    // CONTRAINDICATIONS
    contraindications: {
      uz: [
        "Tarkibiy qismlarga individual toqatsizlik.",
        "Giperkalsemiya (qonda kalsiy miqdorining ortishi).",
        "Buyrak toshlari (nefrolitiaz).",
        "2 yoshgacha bo'lgan bolalar — faqat shifokor tavsiyasi bilan."
      ],

      ru: [
        "Индивидуальная непереносимость компонентов.",
        "Гиперкальциемия (повышенный уровень кальция в крови).",
        "Камни в почках (нефролитиаз).",
        "Детям до 2 лет — только по рекомендации врача."
      ],

      en: [
        "Individual intolerance to any of the ingredients.",
        "Hypercalcemia (high calcium levels in the blood).",
        "Kidney stones (nephrolithiasis).",
        "Children under 2 years of age — only on a doctor's recommendation."
      ]
    },

    // SIDE EFFECTS
    sideEffects: {
      uz: [
        "Allergik reaksiyalar (toshma, qichishish).",
        "Qorin dam bo'lishi.",
        "Qorinda noqulaylik.",
        "Yengil ovqat hazm qilish buzilishlari."
      ],

      ru: [
        "Аллергические реакции (сыпь, зуд).",
        "Вздутие живота.",
        "Дискомфорт в животе.",
        "Легкие нарушения пищеварения."
      ],

      en: [
        "Allergic reactions (rash, itching).",
        "Abdominal bloating.",
        "Abdominal discomfort.",
        "Mild digestive disturbances."
      ],

      noteUz: "Tavsiya etilgan dozada nojo'ya ta'sirlar ehtimoli kam.",
      noteRu: "При соблюдении рекомендованной дозировки вероятность побочных эффектов низкая.",
      noteEn: "Side effects are unlikely when the recommended dosage is followed."
    },

    // OVERDOSE
    overdose: {
      symptomsUz: [
        "Ko'ngil aynishi.",
        "Qabziyat.",
        "Holsizlik.",
        "Chanqash.",
        "Giperkalsemiya."
      ],

      symptomsRu: [
        "Тошнота.",
        "Запор.",
        "Слабость.",
        "Жажда.",
        "Гиперкальциемия."
      ],

      symptomsEn: [
        "Nausea.",
        "Constipation.",
        "Weakness.",
        "Increased thirst.",
        "Hypercalcemia."
      ],

      instructionUz: "Bunday belgilar kuzatilsa, qo'shimchani qabul qilishni to'xtating va shifokorga murojaat qiling.",
      instructionRu: "При появлении таких симптомов прекратите прием добавки и обратитесь к врачу.",
      instructionEn: "If these symptoms occur, stop taking the supplement and consult a doctor."
    },

    // INTERACTIONS
    interactions: {
      uz: [
        "Kalsiy va vitamin D preparatlari bilan birga qo'llanganda ularning umumiy dozasi hisobga olinishi kerak.",
        "Yuqori dozadagi temir preparatlari bilan bir vaqtda qabul qilish tavsiya etilmaydi. Kamida 2 soat tanaffus qilish kerak."
      ],

      ru: [
        "При совместном применении с препаратами кальция и витамина D необходимо учитывать их общую дозировку.",
        "Не рекомендуется одновременный прием с высокими дозами препаратов железа. Необходимо соблюдать интервал не менее 2 часов."
      ],

      en: [
        "When used with calcium and vitamin D supplements, their total combined dosage should be taken into account.",
        "Simultaneous use with high-dose iron supplements is not recommended. Maintain an interval of at least 2 hours."
      ]
    },

    // STORAGE CONDITIONS
    storage: {
      uz: [
        "Yopiq flakonni +4°C dan +25°C gacha bo'lgan haroratda saqlang.",
        "Ochilgandan keyin sovutkichda saqlang.",
        "Ochilgandan so'ng 30 kun ichida ishlating.",
        "Bolalar qo'li yetmaydigan joyda saqlang."
      ],

      ru: [
        "Хранить закрытый флакон при температуре от +4°C до +25°C.",
        "После вскрытия хранить в холодильнике.",
        "Использовать в течение 30 дней после вскрытия.",
        "Хранить в недоступном для детей месте."
      ],

      en: [
        "Store the unopened bottle at a temperature between +4°C and +25°C.",
        "Refrigerate after opening.",
        "Use within 30 days after opening.",
        "Keep out of reach of children."
      ]
    },

    // SHELF LIFE
    shelfLife: {
      uz: "Yopiq flakonda ishlab chiqarilgan kundan boshlab 2 yil. Qadoqda ko'rsatilgan yaroqlilik muddati o'tgach ishlatmang.",
      ru: "2 года с даты производства в закрытом флаконе. Не использовать после истечения срока годности, указанного на упаковке.",
      en: "2 years from the date of manufacture when unopened. Do not use after the expiration date indicated on the package."
    },

    // PRODUCT FEATURES
    features: [
      {
        textUz: "Glutensiz",
        textRu: "Без глютена",
        textEn: "Gluten-free"
      },
      {
        textUz: "GMO yo'q",
        textRu: "Без ГМО",
        textEn: "GMO-free"
      },
      {
        textUz: "Soyasiz",
        textRu: "Без сои",
        textEn: "Soy-free"
      },
      {
        textUz: "Suspenziya shakli",
        textRu: "Форма суспензии",
        textEn: "Suspension form"
      }
    ],

    // MANUFACTURER
    manufacturerInfo: {
      name: "TOP PHARM SERVICE MChJ",

      addressUz: "O'zbekiston Respublikasi, Sirdaryo viloyati, Sirdaryo tumani, Kamolot MFY, Yangi ko'cha, 90-uy.",
      addressRu: "Республика Узбекистан, Сырдарьинская область, Сырдарьинский район, МФЙ Камолот, улица Янги, дом 90.",
      addressEn: "90 Yangi Street, Kamolot MFY, Syrdarya District, Syrdarya Region, Republic of Uzbekistan.",

      email: "info@anfa.uz",
      website: "https://www.anfa.uz"
    },

    // IMPORTANT INFORMATION
    disclaimer: {
      uz: "CASSI biologik faol qo'shimcha hisoblanadi, dori vositasi emas. Qo'llashdan oldin shifokor bilan maslahatlashish tavsiya etiladi.",

      ru: "CASSI является биологически активной добавкой, а не лекарственным средством. Перед применением рекомендуется проконсультироваться с врачом.",

      en: "CASSI is a dietary supplement, not a medicinal product. Consultation with a healthcare professional is recommended before use."
    }
  },
    
  3: {
    id: 3,

    // BASIC INFORMATION
    nameUz: "AKTIVAZ",
    nameRu: "АКТИВАЗ",
    nameEn: "AKTIVAZ",
    name: "AKTIVAZ",

    taglineUz: "Chaqaloqlar va yosh bolalar uchun",
    taglineRu: "Для младенцев и маленьких детей",
    taglineEn: "For Infants and Young Children",

    image: aktivaz,

    pdf: "https://drive.google.com/file/d/1zIuBrWFOuU48sP2bdn9u5OYLURcL2yBV/view?usp=sharing",

    volume: "150 ml",

    formUz: "Sirop",
    formRu: "Сироп",
    formEn: "Syrup",

    rating: 4.9,
    reviews: 1532,

    manufacturer: "TOP PHARM SERVICE MChJ",
    certification: "O'zMSt 166-2024",

    price: "75,000",
    currency: "сум",

    // GENERAL DESCRIPTION
    description: {
      uz: "AKTIVAZ — chaqaloqlar va yosh bolalar uchun mo'ljallangan, anis, ukrop va yalpiz efir moylari asosida ishlab chiqilgan biologik faol qo'shimcha. Xalq orasida ukrop suvi sifatida mashhur. Ovqat hazm qilish jarayonini qo'llab-quvvatlash, ortiqcha gaz hosil bo'lishini kamaytirish va ichak spazmlarini yengillashtirishga yordam beradi.",

      ru: "AKTIVAZ — биологически активная добавка для младенцев и маленьких детей на основе эфирных масел аниса, укропа и мяты. Известна как аналог укропной воды. Помогает поддерживать пищеварение, уменьшать избыточное газообразование и облегчать кишечные спазмы.",

      en: "AKTIVAZ is a dietary supplement designed for infants and young children, formulated with anise, dill and peppermint essential oils. It is commonly known as a natural alternative to dill water. It helps support digestion, reduce excessive gas formation and relieve intestinal spasms."
    },

    // MAIN PURPOSES AND BENEFITS
    benefits: [
      {
        titleUz: "Ortiqcha gaz hosil bo'lishini kamaytiradi",
        titleRu: "Уменьшает газообразование",
        titleEn: "Reduces Excessive Gas",

        descriptionUz: "Ichakdagi gazlarning chiqib ketishiga yordam beradi va qorin dam bo'lishidagi noqulaylikni kamaytirishga ko'maklashadi.",
        descriptionRu: "Способствует выведению газов из кишечника и помогает уменьшить дискомфорт при вздутии живота.",
        descriptionEn: "Helps release intestinal gas and reduce discomfort associated with bloating.",

        icon: "🍼"
      },
      {
        titleUz: "Ichak spazmlarini yengillashtiradi",
        titleRu: "Облегчает кишечные спазмы",
        titleEn: "Relieves Intestinal Spasms",

        descriptionUz: "Ichak mushaklarini bo'shashtirishga va kolik bilan bog'liq noqulaylikni yengillashtirishga yordam beradi.",
        descriptionRu: "Помогает расслабить кишечные мышцы и облегчить дискомфорт, связанный с коликами.",
        descriptionEn: "Helps relax intestinal muscles and relieve discomfort associated with colic.",

        icon: "💚"
      },
      {
        titleUz: "Ovqat hazm qilishni qo'llab-quvvatlaydi",
        titleRu: "Поддерживает пищеварение",
        titleEn: "Supports Digestion",

        descriptionUz: "Ovqat hazm qilish jarayonining qulay kechishiga va chaqaloqlarda sut hazm bo'lishiga yordam beradi.",
        descriptionRu: "Способствует комфортному пищеварению и перевариванию молока у младенцев.",
        descriptionEn: "Helps support comfortable digestion and milk digestion in infants.",

        icon: "✨"
      },
      {
        titleUz: "Tinchlantiruvchi ta'sir",
        titleRu: "Успокаивающее действие",
        titleEn: "Soothing Effect",

        descriptionUz: "Bolaning bezovtaligini kamaytirishga va ovqatlanishdan keyingi qulaylikni ta'minlashga yordam beradi.",
        descriptionRu: "Помогает уменьшить беспокойство ребенка и обеспечить комфорт после кормления.",
        descriptionEn: "Helps reduce discomfort and support relaxation after feeding.",

        icon: "😴"
      }
    ],

    // COMPOSITION PER 5 ML
    composition: [
      {
        nameUz: "Anis moyi",
        nameRu: "Анисовое масло",
        nameEn: "Anise Oil",
        amount: "0.736 mg",
        per: "5 ml"
      },
      {
        nameUz: "Ukrop moyi (Anethum graveolens)",
        nameRu: "Укропное масло (Anethum graveolens)",
        nameEn: "Dill Oil (Anethum graveolens)",
        amount: "0.644 mg",
        per: "5 ml"
      },
      {
        nameUz: "Yalpiz moyi",
        nameRu: "Мятное масло",
        nameEn: "Peppermint Oil",
        amount: "0.270 mg",
        per: "5 ml"
      }
    ],

    // INGREDIENT DETAILS
    ingredients: [
      {
        nameUz: "Anis moyi",
        nameRu: "Анисовое масло",
        nameEn: "Anise Oil",

        icon: "🌿",

        benefitsUz: [
          "Ovqat hazm qilish fermentlari sekretsiyasini rag'batlantirishga yordam beradi.",
          "Yumshoq yel haydash ta'siriga ega.",
          "Ichakdagi gazlarning chiqib ketishiga yordam beradi.",
          "Ovqat hazm qilishdagi noqulaylikni kamaytirishga ko'maklashadi."
        ],

        benefitsRu: [
          "Способствует стимуляции секреции пищеварительных ферментов.",
          "Обладает мягким ветрогонным действием.",
          "Помогает выведению газов из кишечника.",
          "Способствует уменьшению пищеварительного дискомфорта."
        ],

        benefitsEn: [
          "Helps stimulate digestive enzyme secretion.",
          "Has a mild carminative effect.",
          "Helps release intestinal gas.",
          "Helps reduce digestive discomfort."
        ]
      },

      {
        nameUz: "Ukrop moyi",
        nameRu: "Укропное масло",
        nameEn: "Dill Oil",

        icon: "🌱",

        benefitsUz: [
          "Ichak silliq mushaklarini bo'shashtirishga yordam beradi.",
          "Ichak spazmlarini kamaytirishga ko'maklashadi.",
          "Oshqozon va ichakning motor-sekretor faoliyatini qo'llab-quvvatlaydi.",
          "Ovqat hazm qilish jarayonining qulay kechishiga yordam beradi."
        ],

        benefitsRu: [
          "Помогает расслаблять гладкую мускулатуру кишечника.",
          "Способствует уменьшению кишечных спазмов.",
          "Поддерживает моторно-секреторную функцию желудка и кишечника.",
          "Способствует комфортному пищеварению."
        ],

        benefitsEn: [
          "Helps relax intestinal smooth muscles.",
          "Helps reduce intestinal spasms.",
          "Supports the motor and secretory functions of the stomach and intestines.",
          "Helps promote comfortable digestion."
        ]
      },

      {
        nameUz: "Yalpiz moyi",
        nameRu: "Мятное масло",
        nameEn: "Peppermint Oil",

        icon: "🍃",

        benefitsUz: [
          "Tarkibida mentol moddasi mavjud.",
          "Ichak retseptorlariga ta'sir ko'rsatadi.",
          "Spazmlarni kamaytirishga yordam beradi.",
          "Gazlarning chiqishini yengillashtirishga ko'maklashadi.",
          "Yengil sovutuvchi va tinchlantiruvchi xususiyatga ega."
        ],

        benefitsRu: [
          "Содержит ментол.",
          "Воздействует на рецепторы кишечника.",
          "Помогает уменьшать спазмы.",
          "Способствует облегчению отхождения газов.",
          "Обладает легким охлаждающим и успокаивающим эффектом."
        ],

        benefitsEn: [
          "Contains menthol.",
          "Acts on intestinal receptors.",
          "Helps reduce spasms.",
          "Helps ease the passage of gas.",
          "Has mild cooling and soothing properties."
        ]
      }
    ],

    // COMBINED ACTION OF INGREDIENTS
    combinedAction: [
      {
        titleUz: "Anis + Ukrop",
        titleRu: "Анис + Укроп",
        titleEn: "Anise + Dill",

        descriptionUz: "Ortiqcha gaz hosil bo'lishini kamaytirishga va ovqat hazm qilishni qo'llab-quvvatlashga yordam beradi.",
        descriptionRu: "Помогают уменьшить избыточное газообразование и поддерживать пищеварение.",
        descriptionEn: "Help reduce excessive gas formation and support digestion."
      },
      {
        titleUz: "Yalpiz + Ukrop",
        titleRu: "Мята + Укроп",
        titleEn: "Peppermint + Dill",

        descriptionUz: "Ichak spazmlarini kamaytirishga va noqulaylikni yengillashtirishga yordam beradi.",
        descriptionRu: "Помогают уменьшить кишечные спазмы и облегчить дискомфорт.",
        descriptionEn: "Help reduce intestinal spasms and relieve discomfort."
      },
      {
        titleUz: "Anis + Yalpiz",
        titleRu: "Анис + Мята",
        titleEn: "Anise + Peppermint",

        descriptionUz: "Ovqat hazm qilishdagi noqulaylikni kamaytirishga va tinchlantiruvchi ta'sirni qo'llab-quvvatlashga yordam beradi.",
        descriptionRu: "Помогают уменьшить пищеварительный дискомфорт и дополняют успокаивающее действие.",
        descriptionEn: "Help reduce digestive discomfort and complement the soothing effect."
      }
    ],

    // HOW TO USE
    usage: {
      dosageUz: "2 haftalikdan 6 oylikkacha: 2.5 ml kuniga 1–2 marta; 6 oylikdan 2 yoshgacha: 5 ml kuniga 1–2 marta; 2 yoshdan katta bolalar: zarurat bo'lsa 5 ml kuniga 3 martagacha.",

      dosageRu: "С 2 недель до 6 месяцев: 2,5 мл 1–2 раза в день; с 6 месяцев до 2 лет: 5 мл 1–2 раза в день; детям старше 2 лет: при необходимости по 5 мл до 3 раз в день.",

      dosageEn: "From 2 weeks to 6 months: 2.5 ml 1–2 times daily; from 6 months to 2 years: 5 ml 1–2 times daily; children over 2 years: if necessary, 5 ml up to 3 times daily.",

      ageGroups: [
        {
          ageUz: "2 haftalikdan 6 oylikkacha",
          ageRu: "От 2 недель до 6 месяцев",
          ageEn: "2 weeks to 6 months",

          dose: "2.5 ml",
          frequencyUz: "Kuniga 1–2 marta",
          frequencyRu: "1–2 раза в день",
          frequencyEn: "1–2 times daily"
        },
        {
          ageUz: "6 oylikdan 2 yoshgacha",
          ageRu: "От 6 месяцев до 2 лет",
          ageEn: "6 months to 2 years",

          dose: "5 ml",
          frequencyUz: "Kuniga 1–2 marta",
          frequencyRu: "1–2 раза в день",
          frequencyEn: "1–2 times daily"
        },
        {
          ageUz: "2 yoshdan katta",
          ageRu: "Старше 2 лет",
          ageEn: "Over 2 years",

          dose: "5 ml",
          frequencyUz: "Zarurat bo'lsa kuniga 3 martagacha",
          frequencyRu: "При необходимости до 3 раз в день",
          frequencyEn: "If necessary, up to 3 times daily"
        }
      ],

      timingUz: "2 haftalikdan 6 oylikkacha bo'lgan chaqaloqlarga emizish vaqtida yoki undan keyin.",
      timingRu: "Младенцам от 2 недель до 6 месяцев — во время или после кормления.",
      timingEn: "For infants aged 2 weeks to 6 months, during or after feeding.",

      durationUz: "Yo'riqnomada aniq kurs muddati ko'rsatilmagan. Zaruratga qarab, shifokor tavsiyasi asosida qo'llanadi.",
      durationRu: "В инструкции точная продолжительность курса не указана. Применять по необходимости согласно рекомендации врача.",
      durationEn: "No specific course duration is stated in the instructions. Use as needed according to a healthcare professional's advice.",

      instructionUz: "Flakonni ishlatishdan oldin yaxshilab chayqatish kerak.",
      instructionRu: "Перед использованием флакон необходимо хорошо взболтать.",
      instructionEn: "Shake the bottle well before use."
    },

    // CONTRAINDICATIONS
    contraindications: {
      uz: [
        "Efir moylariga individual toqatsizlik.",
        "Anisga allergik reaksiya.",
        "Ukropga allergik reaksiya.",
        "Yalpizga allergik reaksiya.",
        "Og'ir ovqat hazm qilish tizimi kasalliklarida faqat shifokor tavsiyasi bilan qo'llash."
      ],

      ru: [
        "Индивидуальная непереносимость эфирных масел.",
        "Аллергическая реакция на анис.",
        "Аллергическая реакция на укроп.",
        "Аллергическая реакция на мяту.",
        "При тяжелых заболеваниях пищеварительной системы применять только по рекомендации врача."
      ],

      en: [
        "Individual intolerance to essential oils.",
        "Allergic reaction to anise.",
        "Allergic reaction to dill.",
        "Allergic reaction to peppermint.",
        "In cases of severe digestive system diseases, use only on a doctor's recommendation."
      ]
    },

    // SIDE EFFECTS
    sideEffects: {
      uz: [
        "Allergik reaksiyalar.",
        "Terida toshma.",
        "Qichishish.",
        "Doza oshirilganda yengil oshqozon noqulayligi."
      ],

      ru: [
        "Аллергические реакции.",
        "Кожная сыпь.",
        "Зуд.",
        "При превышении дозировки — легкий дискомфорт в желудке."
      ],

      en: [
        "Allergic reactions.",
        "Skin rash.",
        "Itching.",
        "Mild stomach discomfort if the dosage is exceeded."
      ],

      noteUz: "Tavsiya etilgan dozada qo'llanganda nojo'ya ta'sirlar kuzatilishi ehtimoli kam.",

      noteRu: "При применении в рекомендованной дозировке вероятность побочных эффектов низкая.",

      noteEn: "Side effects are unlikely when used at the recommended dosage."
    },

    // OVERDOSE
    overdose: {
      symptomsUz: [
        "Ko'ngil aynishi.",
        "Suyuq ich kelishi.",
        "Asabiylikning kuchayishi.",
        "Oshqozon-ichak noqulayligi."
      ],

      symptomsRu: [
        "Тошнота.",
        "Жидкий стул.",
        "Повышенная раздражительность.",
        "Желудочно-кишечный дискомфорт."
      ],

      symptomsEn: [
        "Nausea.",
        "Loose stools.",
        "Increased irritability.",
        "Gastrointestinal discomfort."
      ],

      instructionUz: "Doza sezilarli darajada oshirib yuborilganda qo'shimchani qabul qilishni to'xtating va shifokorga murojaat qiling.",

      instructionRu: "При значительном превышении дозировки прекратите прием добавки и обратитесь к врачу.",

      instructionEn: "If the dosage is significantly exceeded, stop using the supplement and consult a doctor."
    },

    // INTERACTIONS WITH OTHER PRODUCTS
    interactions: {
      uz: [
        "Yengil spazmolitik vositalarning ta'sirini kuchaytirishi mumkin.",
        "Ko'pchilik bolalar uchun mo'ljallangan vitamin majmualari bilan mos keladi.",
        "Ovqat hazm qilish vositalari bilan birgalikda qo'llashda shifokor bilan maslahatlashish tavsiya etiladi."
      ],

      ru: [
        "Может усиливать действие легких спазмолитических средств.",
        "Совместима с большинством витаминных комплексов для детей.",
        "При совместном применении со средствами для пищеварения рекомендуется проконсультироваться с врачом."
      ],

      en: [
        "May enhance the effects of mild antispasmodic agents.",
        "Compatible with most vitamin complexes intended for children.",
        "Consult a healthcare professional before combining with other digestive products."
      ]
    },

    // STORAGE CONDITIONS
    storage: {
      uz: [
        "Yopiq flakonni +4°C dan +25°C gacha bo'lgan haroratda saqlang.",
        "Flakon ochilgandan keyin sovutkichda saqlang.",
        "Ochilgandan so'ng 30 kun ichida ishlating.",
        "Bolalar qo'li yetmaydigan joyda saqlang."
      ],

      ru: [
        "Хранить закрытый флакон при температуре от +4°C до +25°C.",
        "После вскрытия хранить в холодильнике.",
        "Использовать в течение 30 дней после вскрытия.",
        "Хранить в недоступном для детей месте."
      ],

      en: [
        "Store the unopened bottle at a temperature between +4°C and +25°C.",
        "Refrigerate after opening.",
        "Use within 30 days after opening.",
        "Keep out of reach of children."
      ]
    },

    // SHELF LIFE
    shelfLife: {
      uz: "Yopiq flakonda ishlab chiqarilgan kundan boshlab 2 yil. Qadoqda ko'rsatilgan yaroqlilik muddati o'tgach ishlatmang.",

      ru: "2 года с даты производства в закрытом флаконе. Не использовать после истечения срока годности, указанного на упаковке.",

      en: "2 years from the date of manufacture when unopened. Do not use after the expiration date indicated on the package."
    },

    // PRODUCT FEATURES
    features: [
      {
        textUz: "Tabiiy tarkib",
        textRu: "Натуральный состав",
        textEn: "Natural Ingredients"
      },
      {
        textUz: "2 haftalikdan boshlab",
        textRu: "С 2 недель",
        textEn: "From 2 Weeks of Age"
      },
      {
        textUz: "Spirtsiz",
        textRu: "Без спирта",
        textEn: "Alcohol-Free"
      },
      {
        textUz: "Shakarsiz",
        textRu: "Без сахара",
        textEn: "Sugar-Free"
      },
      {
        textUz: "GMO yo'q",
        textRu: "Без ГМО",
        textEn: "GMO-Free"
      },
      {
        textUz: "Glutensiz",
        textRu: "Без глютена",
        textEn: "Gluten-Free"
      },
      {
        textUz: "Soyasiz",
        textRu: "Без сои",
        textEn: "Soy-Free"
      },
      {
        textUz: "O'rganib qolish xususiyatisiz",
        textRu: "Без эффекта привыкания",
        textEn: "Non-Habit-Forming"
      }
    ],

    // MANUFACTURER INFORMATION
    manufacturerInfo: {
      name: "TOP PHARM SERVICE MChJ",

      addressUz: "O'zbekiston Respublikasi, Sirdaryo viloyati, Sirdaryo tumani, Kamolot MFY, Yangi ko'cha, 90-uy.",

      addressRu: "Республика Узбекистан, Сырдарьинская область, Сырдарьинский район, МФЙ Камолот, улица Янги, дом 90.",

      addressEn: "90 Yangi Street, Kamolot MFY, Syrdarya District, Syrdarya Region, Republic of Uzbekistan.",

      email: "info@anfa.uz",
      website: "https://www.anfa.uz"
    },

    // IMPORTANT INFORMATION
    disclaimer: {
      uz: "AKTIVAZ biologik faol qo'shimcha hisoblanadi, dori vositasi emas. Ayniqsa chaqaloqlarda qo'llashdan oldin pediatr bilan maslahatlashish tavsiya etiladi. Belgilangan dozadan oshirmang.",

      ru: "AKTIVAZ является биологически активной добавкой, а не лекарственным средством. Особенно при применении у младенцев рекомендуется предварительно проконсультироваться с педиатром. Не превышайте рекомендованную дозировку.",

      en: "AKTIVAZ is a dietary supplement, not a medicinal product. Consultation with a pediatrician is recommended before use, especially in infants. Do not exceed the recommended dosage."
    }
  },

  9: {
    id: 9,

    // BASIC INFORMATION
    nameUz: "VITAZZA",
    nameRu: "ВИТАЗЗА",
    nameEn: "VITAZZA",
    name: "VITAZZA",

    taglineUz: "Bolalar va kattalar uchun polivitamin kompleks",
    taglineRu: "Поливитаминный комплекс для детей и взрослых",
    taglineEn: "Multivitamin Complex for Children and Adults",

    image: vitazza,

    pdf: "https://drive.google.com/file/d/126JIU5-Fi0KkA7d9sLuRwZ1E15PkjYV1/view?usp=sharing",

    volume: "150 ml",

    formUz: "Sirop",
    formRu: "Сироп",
    formEn: "Syrup",

    rating: 4.8,
    reviews: 1389,

    manufacturer: "TOP PHARM SERVICE MChJ",
    certification: "O'zMSt 166-2024",

    price: "95,000",
    currency: "сум",

    // GENERAL DESCRIPTION
    description: {
      uz: "VITAZZA — bolalar va kattalar uchun mo'ljallangan, Omega-3, A, C, D3, E vitaminlari, B guruhi vitaminlari hamda sink, yod va selen saqlovchi polivitamin-mineral kompleks. Formula organizmning to'laqonli rivojlanishini, immunitetni, moddalar almashinuvini, miya va asab tizimining normal faoliyatini qo'llab-quvvatlashga yordam beradi. Suyuq sirop shakli qabul qilish uchun qulay.",

      ru: "VITAZZA — поливитаминно-минеральный комплекс для детей и взрослых, содержащий Омега-3, витамины A, C, D3, E, витамины группы B, а также цинк, йод и селен. Формула помогает поддерживать полноценное развитие организма, иммунитет, обмен веществ, нормальную работу мозга и нервной системы. Жидкая форма сиропа удобна для приема.",

      en: "VITAZZA is a multivitamin and mineral complex designed for children and adults. It contains Omega-3, vitamins A, C, D3 and E, B-complex vitamins, as well as zinc, iodine and selenium. The formula helps support overall development, immune function, metabolism, and normal brain and nervous system function. Its liquid syrup form is convenient to take."
    },

    // MAIN BENEFITS
    benefits: [
      {
        titleUz: "To'laqonli rivojlanish",
        titleRu: "Полноценное развитие",
        titleEn: "Healthy Development",

        descriptionUz: "Faol o'sish davrida bolalar va o'smirlarning vitamin-mineral ehtiyojlarini qo'llab-quvvatlashga yordam beradi.",
        descriptionRu: "Помогает поддерживать потребность детей и подростков в витаминах и минералах в период активного роста.",
        descriptionEn: "Helps support the vitamin and mineral needs of children and teenagers during active growth.",

        icon: "🌱"
      },
      {
        titleUz: "Immunitetni qo'llab-quvvatlash",
        titleRu: "Поддержка иммунитета",
        titleEn: "Immune System Support",

        descriptionUz: "A, C, D3, E vitaminlari, sink va selen immun tizimining normal faoliyatida ishtirok etadi.",
        descriptionRu: "Витамины A, C, D3, E, цинк и селен участвуют в нормальной работе иммунной системы.",
        descriptionEn: "Vitamins A, C, D3 and E, zinc and selenium contribute to normal immune system function.",

        icon: "🛡️"
      },
      {
        titleUz: "Miya va asab tizimi",
        titleRu: "Мозг и нервная система",
        titleEn: "Brain and Nervous System",

        descriptionUz: "Omega-3 va B guruhi vitaminlari miya va asab tizimining normal faoliyatini qo'llab-quvvatlaydi.",
        descriptionRu: "Омега-3 и витамины группы B поддерживают нормальную работу мозга и нервной системы.",
        descriptionEn: "Omega-3 and B vitamins help support normal brain and nervous system function.",

        icon: "🧠"
      },
      {
        titleUz: "Energiya va ish qobiliyati",
        titleRu: "Энергия и работоспособность",
        titleEn: "Energy and Performance",

        descriptionUz: "B guruhi vitaminlari energiya almashinuvida ishtirok etadi va yuqori jismoniy hamda aqliy yuklamalarda organizmni qo'llab-quvvatlaydi.",
        descriptionRu: "Витамины группы B участвуют в энергетическом обмене и помогают поддерживать организм при физических и умственных нагрузках.",
        descriptionEn: "B vitamins contribute to energy metabolism and help support the body during physical and mental activity.",

        icon: "⚡"
      }
    ],

    // COMPOSITION PER 5 ML
    composition: [
      {
        nameUz: "Omega-3 (baliq yog'i konsentrati, 18:12)",
        nameRu: "Омега-3 (концентрат рыбьего жира, 18:12)",
        nameEn: "Omega-3 (Fish Oil Concentrate, 18:12)",
        amount: "500 mg",
        per: "5 ml",
        details: "18:12"
      },
      {
        nameUz: "Vitamin A",
        nameRu: "Витамин A",
        nameEn: "Vitamin A",
        amount: "500 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin C",
        nameRu: "Витамин C",
        nameEn: "Vitamin C",
        amount: "70 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin D3",
        nameRu: "Витамин D3",
        nameEn: "Vitamin D3",
        amount: "10 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin E",
        nameRu: "Витамин E",
        nameEn: "Vitamin E",
        amount: "12 mg",
        per: "5 ml"
      },
      {
        nameUz: "Sink glyukonat",
        nameRu: "Глюконат цинка",
        nameEn: "Zinc Gluconate",
        amount: "7.5 mg",
        per: "5 ml"
      },
      {
        nameUz: "Yod",
        nameRu: "Йод",
        nameEn: "Iodine",
        amount: "75 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Selen (selenometionin)",
        nameRu: "Селен (селенометионин)",
        nameEn: "Selenium (Selenomethionine)",
        amount: "55 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Folat kislotasi",
        nameRu: "Фолиевая кислота",
        nameEn: "Folic Acid",
        amount: "200 mkg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B1 (tiamin HCl)",
        nameRu: "Витамин B1 (тиамина гидрохлорид)",
        nameEn: "Vitamin B1 (Thiamine HCl)",
        amount: "1.1 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B2 (riboflavin-5-fosfat natriy)",
        nameRu: "Витамин B2 (рибофлавин-5-фосфат натрия)",
        nameEn: "Vitamin B2 (Riboflavin-5-Phosphate Sodium)",
        amount: "1.4 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B3 (nikotinamid)",
        nameRu: "Витамин B3 (никотинамид)",
        nameEn: "Vitamin B3 (Nicotinamide)",
        amount: "16 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B5 (kalsiy pantotenat)",
        nameRu: "Витамин B5 (пантотенат кальция)",
        nameEn: "Vitamin B5 (Calcium Pantothenate)",
        amount: "6 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B6 (piridoksin HCl)",
        nameRu: "Витамин B6 (пиридоксина гидрохлорид)",
        nameEn: "Vitamin B6 (Pyridoxine HCl)",
        amount: "1.4 mg",
        per: "5 ml"
      },
      {
        nameUz: "Vitamin B12 (sianokobalamin)",
        nameRu: "Витамин B12 (цианокобаламин)",
        nameEn: "Vitamin B12 (Cyanocobalamin)",
        amount: "2.5 mkg",
        per: "5 ml"
      }
    ],

    // INGREDIENT DETAILS
    ingredients: [
      {
        nameUz: "Omega-3",
        nameRu: "Омега-3",
        nameEn: "Omega-3",
        icon: "🐟",

        benefitsUz: [
          "Miya faoliyatini qo'llab-quvvatlaydi.",
          "Xotira va diqqat funksiyalarida muhim rol o'ynaydi.",
          "Yurak-qon tomir tizimining normal faoliyatiga yordam beradi.",
          "Organizmdagi normal yog' kislotalari muvozanatini qo'llab-quvvatlaydi."
        ],

        benefitsRu: [
          "Поддерживает работу мозга.",
          "Играет важную роль в процессах памяти и внимания.",
          "Способствует нормальной работе сердечно-сосудистой системы.",
          "Поддерживает нормальный баланс жирных кислот в организме."
        ],

        benefitsEn: [
          "Supports brain function.",
          "Plays an important role in memory and attention.",
          "Helps support normal cardiovascular function.",
          "Supports the body's normal fatty acid balance."
        ]
      },

      {
        nameUz: "Vitamin A",
        nameRu: "Витамин A",
        nameEn: "Vitamin A",
        icon: "👁️",

        benefitsUz: [
          "Normal ko'rish qobiliyatini qo'llab-quvvatlaydi.",
          "Teri va shilliq qavatlarning normal holatini saqlashga yordam beradi.",
          "Immun tizimining normal faoliyatida ishtirok etadi.",
          "Hujayralarning rivojlanishi uchun muhim."
        ],

        benefitsRu: [
          "Поддерживает нормальное зрение.",
          "Помогает поддерживать нормальное состояние кожи и слизистых оболочек.",
          "Участвует в нормальной работе иммунной системы.",
          "Важен для развития клеток."
        ],

        benefitsEn: [
          "Supports normal vision.",
          "Helps maintain healthy skin and mucous membranes.",
          "Contributes to normal immune system function.",
          "Is important for cell development."
        ]
      },

      {
        nameUz: "Vitamin C",
        nameRu: "Витамин C",
        nameEn: "Vitamin C",
        icon: "🍊",

        benefitsUz: [
          "Kuchli antioksidant hisoblanadi.",
          "Immun tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Kollagen hosil bo'lishida ishtirok etadi.",
          "Temirning o'zlashtirilishini yaxshilashga yordam beradi.",
          "Hujayralarni oksidlovchi stressdan himoya qilishga yordam beradi."
        ],

        benefitsRu: [
          "Является антиоксидантом.",
          "Поддерживает нормальную работу иммунной системы.",
          "Участвует в образовании коллагена.",
          "Способствует усвоению железа.",
          "Помогает защищать клетки от окислительного стресса."
        ],

        benefitsEn: [
          "Acts as an antioxidant.",
          "Supports normal immune system function.",
          "Participates in collagen formation.",
          "Helps improve iron absorption.",
          "Helps protect cells from oxidative stress."
        ]
      },

      {
        nameUz: "Vitamin D3",
        nameRu: "Витамин D3",
        nameEn: "Vitamin D3",
        icon: "☀️",

        benefitsUz: [
          "Kalsiy va fosforning so'rilishiga yordam beradi.",
          "Suyak va tishlarning normal rivojlanishini qo'llab-quvvatlaydi.",
          "Mushaklarning normal faoliyatida ishtirok etadi.",
          "Immun tizimining normal ishlashiga yordam beradi."
        ],

        benefitsRu: [
          "Способствует усвоению кальция и фосфора.",
          "Поддерживает нормальное развитие костей и зубов.",
          "Участвует в нормальной работе мышц.",
          "Помогает поддерживать нормальную работу иммунной системы."
        ],

        benefitsEn: [
          "Helps the absorption of calcium and phosphorus.",
          "Supports normal bone and teeth development.",
          "Contributes to normal muscle function.",
          "Helps maintain normal immune system function."
        ]
      },

      {
        nameUz: "Vitamin E",
        nameRu: "Витамин E",
        nameEn: "Vitamin E",
        icon: "✨",

        benefitsUz: [
          "Antioksidant xususiyatga ega.",
          "Hujayralarni oksidlovchi stressdan himoya qiladi.",
          "Hujayra membranalarining normal faoliyatini qo'llab-quvvatlaydi."
        ],

        benefitsRu: [
          "Обладает антиоксидантными свойствами.",
          "Защищает клетки от окислительного стресса.",
          "Поддерживает нормальную работу клеточных мембран."
        ],

        benefitsEn: [
          "Has antioxidant properties.",
          "Protects cells from oxidative stress.",
          "Supports normal cell membrane function."
        ]
      },

      {
        nameUz: "Sink",
        nameRu: "Цинк",
        nameEn: "Zinc",
        icon: "⚡",

        benefitsUz: [
          "Hujayralarning o'sishi va bo'linishida ishtirok etadi.",
          "Immun tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Teri, soch va tirnoqlarning normal holatiga yordam beradi.",
          "Yara bitishi va to'qimalarning tiklanishida ishtirok etadi."
        ],

        benefitsRu: [
          "Участвует в росте и делении клеток.",
          "Поддерживает нормальную работу иммунной системы.",
          "Помогает поддерживать здоровье кожи, волос и ногтей.",
          "Участвует в заживлении ран и восстановлении тканей."
        ],

        benefitsEn: [
          "Participates in cell growth and division.",
          "Supports normal immune system function.",
          "Helps maintain healthy skin, hair and nails.",
          "Contributes to wound healing and tissue repair."
        ]
      },

      {
        nameUz: "Yod",
        nameRu: "Йод",
        nameEn: "Iodine",
        icon: "🦋",

        benefitsUz: [
          "Qalqonsimon bez gormonlari ishlab chiqarilishi uchun zarur.",
          "Moddalar almashinuvini qo'llab-quvvatlaydi.",
          "Asab tizimining normal faoliyatida ishtirok etadi.",
          "Bolalarning normal o'sishi va rivojlanishiga yordam beradi."
        ],

        benefitsRu: [
          "Необходим для выработки гормонов щитовидной железы.",
          "Поддерживает обмен веществ.",
          "Участвует в нормальной работе нервной системы.",
          "Способствует нормальному росту и развитию детей."
        ],

        benefitsEn: [
          "Essential for thyroid hormone production.",
          "Supports metabolism.",
          "Contributes to normal nervous system function.",
          "Helps support normal growth and development in children."
        ]
      },

      {
        nameUz: "Selen",
        nameRu: "Селен",
        nameEn: "Selenium",
        icon: "🛡️",

        benefitsUz: [
          "Antioksidant himoyada ishtirok etadi.",
          "Immun tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Qalqonsimon bez faoliyati uchun muhim.",
          "Reproduktiv salomatlikni qo'llab-quvvatlashda ishtirok etadi."
        ],

        benefitsRu: [
          "Участвует в антиоксидантной защите.",
          "Поддерживает нормальную работу иммунной системы.",
          "Важен для функции щитовидной железы.",
          "Участвует в поддержании репродуктивного здоровья."
        ],

        benefitsEn: [
          "Participates in antioxidant protection.",
          "Supports normal immune system function.",
          "Is important for thyroid function.",
          "Contributes to reproductive health."
        ]
      },

      {
        nameUz: "Folat kislotasi (Vitamin B9)",
        nameRu: "Фолиевая кислота (Витамин B9)",
        nameEn: "Folic Acid (Vitamin B9)",
        icon: "🩸",

        benefitsUz: [
          "Qon hujayralarining hosil bo'lishida ishtirok etadi.",
          "Hujayralarning bo'linishi uchun zarur.",
          "Asab tizimining normal rivojlanishini qo'llab-quvvatlaydi.",
          "Normal homosistein almashinuvida ishtirok etadi."
        ],

        benefitsRu: [
          "Участвует в образовании клеток крови.",
          "Необходим для деления клеток.",
          "Поддерживает нормальное развитие нервной системы.",
          "Участвует в нормальном обмене гомоцистеина."
        ],

        benefitsEn: [
          "Participates in blood cell formation.",
          "Is essential for cell division.",
          "Supports normal nervous system development.",
          "Contributes to normal homocysteine metabolism."
        ]
      },

      {
        nameUz: "Vitamin B1 (Tiamin)",
        nameRu: "Витамин B1 (Тиамин)",
        nameEn: "Vitamin B1 (Thiamine)",
        icon: "🧠",

        benefitsUz: [
          "Energiya almashinuvida ishtirok etadi.",
          "Asab tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Yurakning normal ishlashiga yordam beradi."
        ],

        benefitsRu: [
          "Участвует в энергетическом обмене.",
          "Поддерживает нормальную работу нервной системы.",
          "Способствует нормальной работе сердца."
        ],

        benefitsEn: [
          "Participates in energy metabolism.",
          "Supports normal nervous system function.",
          "Contributes to normal heart function."
        ]
      },

      {
        nameUz: "Vitamin B2 (Riboflavin)",
        nameRu: "Витамин B2 (Рибофлавин)",
        nameEn: "Vitamin B2 (Riboflavin)",
        icon: "🔋",

        benefitsUz: [
          "Energiya ishlab chiqarish jarayonida ishtirok etadi.",
          "Normal ko'rish qobiliyatini qo'llab-quvvatlaydi.",
          "Teri va shilliq qavatlarning normal holatiga yordam beradi.",
          "Hujayralarni oksidlovchi stressdan himoya qilishda ishtirok etadi."
        ],

        benefitsRu: [
          "Участвует в процессах выработки энергии.",
          "Поддерживает нормальное зрение.",
          "Помогает поддерживать здоровье кожи и слизистых оболочек.",
          "Участвует в защите клеток от окислительного стресса."
        ],

        benefitsEn: [
          "Participates in energy production.",
          "Supports normal vision.",
          "Helps maintain healthy skin and mucous membranes.",
          "Contributes to protection against oxidative stress."
        ]
      },

      {
        nameUz: "Vitamin B3 (Nikotinamid)",
        nameRu: "Витамин B3 (Никотинамид)",
        nameEn: "Vitamin B3 (Nicotinamide)",
        icon: "⚙️",

        benefitsUz: [
          "Energiya almashinuvida ishtirok etadi.",
          "Asab tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "Teri va shilliq qavatlarning normal holatiga yordam beradi."
        ],

        benefitsRu: [
          "Участвует в энергетическом обмене.",
          "Поддерживает нормальную работу нервной системы.",
          "Помогает поддерживать здоровье кожи и слизистых оболочек."
        ],

        benefitsEn: [
          "Participates in energy metabolism.",
          "Supports normal nervous system function.",
          "Helps maintain healthy skin and mucous membranes."
        ]
      },

      {
        nameUz: "Vitamin B5 (Pantoten kislotasi)",
        nameRu: "Витамин B5 (Пантотеновая кислота)",
        nameEn: "Vitamin B5 (Pantothenic Acid)",
        icon: "🔬",

        benefitsUz: [
          "Energiya almashinuvida ishtirok etadi.",
          "Steroid gormonlar sintezida qatnashadi.",
          "Aqliy faoliyatni qo'llab-quvvatlashga yordam beradi."
        ],

        benefitsRu: [
          "Участвует в энергетическом обмене.",
          "Участвует в синтезе стероидных гормонов.",
          "Помогает поддерживать нормальную умственную деятельность."
        ],

        benefitsEn: [
          "Participates in energy metabolism.",
          "Contributes to steroid hormone synthesis.",
          "Helps support normal mental performance."
        ]
      },

      {
        nameUz: "Vitamin B6 (Piridoksin)",
        nameRu: "Витамин B6 (Пиридоксин)",
        nameEn: "Vitamin B6 (Pyridoxine)",
        icon: "🧩",

        benefitsUz: [
          "Asab tizimining normal faoliyatida ishtirok etadi.",
          "Neyromediatorlar sintezida qatnashadi.",
          "Oqsil va glikogen almashinuvini qo'llab-quvvatlaydi.",
          "Qizil qon hujayralarining normal hosil bo'lishiga yordam beradi."
        ],

        benefitsRu: [
          "Участвует в нормальной работе нервной системы.",
          "Участвует в синтезе нейромедиаторов.",
          "Поддерживает обмен белков и гликогена.",
          "Способствует нормальному образованию эритроцитов."
        ],

        benefitsEn: [
          "Contributes to normal nervous system function.",
          "Participates in neurotransmitter synthesis.",
          "Supports protein and glycogen metabolism.",
          "Helps maintain normal red blood cell formation."
        ]
      },

      {
        nameUz: "Vitamin B12 (Sianokobalamin)",
        nameRu: "Витамин B12 (Цианокобаламин)",
        nameEn: "Vitamin B12 (Cyanocobalamin)",
        icon: "🩸",

        benefitsUz: [
          "Qizil qon hujayralarining hosil bo'lishida ishtirok etadi.",
          "Asab tizimining normal faoliyatini qo'llab-quvvatlaydi.",
          "DNK sintezida ishtirok etadi.",
          "Energiya almashinuviga yordam beradi."
        ],

        benefitsRu: [
          "Участвует в образовании эритроцитов.",
          "Поддерживает нормальную работу нервной системы.",
          "Участвует в синтезе ДНК.",
          "Способствует энергетическому обмену."
        ],

        benefitsEn: [
          "Participates in red blood cell formation.",
          "Supports normal nervous system function.",
          "Participates in DNA synthesis.",
          "Contributes to energy metabolism."
        ]
      }
    ],

    // COMBINED ACTION OF INGREDIENTS
    combinedAction: [
      {
        titleUz: "Omega-3 + B guruhi vitaminlari",
        titleRu: "Омега-3 + витамины группы B",
        titleEn: "Omega-3 + B-Complex Vitamins",

        descriptionUz: "Miya va asab tizimining normal faoliyatini qo'llab-quvvatlashda ishtirok etadi.",
        descriptionRu: "Участвуют в поддержании нормальной работы мозга и нервной системы.",
        descriptionEn: "Contribute to supporting normal brain and nervous system function."
      },
      {
        titleUz: "Vitaminlar D3 + A + E",
        titleRu: "Витамины D3 + A + E",
        titleEn: "Vitamins D3 + A + E",

        descriptionUz: "Suyaklar, normal ko'rish va hujayralarni oksidlovchi stressdan himoya qilishni qo'llab-quvvatlaydi.",
        descriptionRu: "Поддерживают здоровье костей, нормальное зрение и защиту клеток от окислительного стресса.",
        descriptionEn: "Support bone health, normal vision and protection of cells against oxidative stress."
      },
      {
        titleUz: "Sink + Vitamin C + Selen",
        titleRu: "Цинк + Витамин C + Селен",
        titleEn: "Zinc + Vitamin C + Selenium",

        descriptionUz: "Immun tizimining normal faoliyatini va antioksidant himoyani qo'llab-quvvatlaydi.",
        descriptionRu: "Поддерживают нормальную работу иммунной системы и антиоксидантную защиту.",
        descriptionEn: "Support normal immune system function and antioxidant protection."
      },
      {
        titleUz: "Folat kislotasi + B6 + B12",
        titleRu: "Фолиевая кислота + B6 + B12",
        titleEn: "Folic Acid + B6 + B12",

        descriptionUz: "Qon hujayralarining hosil bo'lishi va normal homosistein almashinuvida ishtirok etadi.",
        descriptionRu: "Участвуют в образовании клеток крови и нормальном обмене гомоцистеина.",
        descriptionEn: "Contribute to blood cell formation and normal homocysteine metabolism."
      }
    ],

    // HOW TO USE
    usage: {
      dosageUz: "2 yoshdan boshlab bolalarga kuniga 1 marta 5 ml. O'smirlar va kattalarga kuniga 1 marta 10 ml.",

      dosageRu: "Детям с 2 лет — 5 мл 1 раз в день. Подросткам и взрослым — 10 мл 1 раз в день.",

      dosageEn: "Children aged 2 years and older: 5 ml once daily. Teenagers and adults: 10 ml once daily.",

      ageGroups: [
        {
          ageUz: "2 yoshdan boshlab bolalar",
          ageRu: "Дети от 2 лет",
          ageEn: "Children aged 2 years and older",

          dose: "5 ml",

          frequencyUz: "Kuniga 1 marta",
          frequencyRu: "1 раз в день",
          frequencyEn: "Once daily"
        },
        {
          ageUz: "O'smirlar",
          ageRu: "Подростки",
          ageEn: "Teenagers",

          dose: "10 ml",

          frequencyUz: "Kuniga 1 marta",
          frequencyRu: "1 раз в день",
          frequencyEn: "Once daily"
        },
        {
          ageUz: "Kattalar",
          ageRu: "Взрослые",
          ageEn: "Adults",

          dose: "10 ml",

          frequencyUz: "Kuniga 1 marta",
          frequencyRu: "1 раз в день",
          frequencyEn: "Once daily"
        }
      ],

      timingUz: "Ovqat vaqtida.",
      timingRu: "Во время еды.",
      timingEn: "During meals.",

      durationUz: "1 oydan 2 oygacha. Zarurat bo'lsa, kurs takrorlanishi mumkin.",
      durationRu: "От 1 до 2 месяцев. При необходимости курс можно повторить.",
      durationEn: "1 to 2 months. The course may be repeated if necessary.",

      instructionUz: "Flakonni ishlatishdan oldin yaxshilab chayqatish kerak.",
      instructionRu: "Перед использованием флакон необходимо хорошо взболтать.",
      instructionEn: "Shake the bottle well before use."
    },

    // CONTRAINDICATIONS
    contraindications: {
      uz: [
        "Tarkibiy qismlarga individual toqatsizlik.",
        "2 yoshgacha bo'lgan bolalar — faqat shifokor tavsiyasi bilan.",
        "Qalqonsimon bez kasalliklarida yod saqlovchi preparatlarni faqat shifokor nazorati ostida qabul qilish.",
        "Tarkibidagi baliq yog'iga yoki baliq mahsulotlariga allergiya bo'lsa, shifokor bilan maslahatlashish."
      ],

      ru: [
        "Индивидуальная непереносимость компонентов.",
        "Детям до 2 лет — только по рекомендации врача.",
        "При заболеваниях щитовидной железы прием средств, содержащих йод, допускается только под наблюдением врача.",
        "При аллергии на рыбий жир или рыбные продукты необходимо проконсультироваться с врачом."
      ],

      en: [
        "Individual intolerance to any of the ingredients.",
        "Children under 2 years of age — only on a doctor's recommendation.",
        "In thyroid disorders, iodine-containing products should only be used under medical supervision.",
        "People with allergies to fish oil or fish products should consult a healthcare professional."
      ]
    },

    // SIDE EFFECTS
    sideEffects: {
      uz: [
        "Allergik reaksiyalar.",
        "Terida toshma.",
        "Qichishish.",
        "Qorin dam bo'lishi.",
        "Qorinda noqulaylik.",
        "Yengil ovqat hazm qilish buzilishlari."
      ],

      ru: [
        "Аллергические реакции.",
        "Кожная сыпь.",
        "Зуд.",
        "Вздутие живота.",
        "Дискомфорт в животе.",
        "Легкие нарушения пищеварения."
      ],

      en: [
        "Allergic reactions.",
        "Skin rash.",
        "Itching.",
        "Abdominal bloating.",
        "Abdominal discomfort.",
        "Mild digestive disturbances."
      ],

      noteUz: "Tavsiya etilgan dozada qabul qilinganda nojo'ya ta'sirlar ehtimoli juda kam.",

      noteRu: "При соблюдении рекомендованной дозировки вероятность побочных эффектов очень низкая.",

      noteEn: "Side effects are very unlikely when the recommended dosage is followed."
    },

    // OVERDOSE
    overdose: {
      symptomsUz: [
        "Ko'ngil aynishi.",
        "Bosh og'rig'i.",
        "Ovqat hazm qilish buzilishlari.",
        "A va D vitaminlari gipervitaminozi.",
        "E vitaminining ortiqcha to'planishi bilan bog'liq nojo'ya holatlar."
      ],

      symptomsRu: [
        "Тошнота.",
        "Головная боль.",
        "Нарушения пищеварения.",
        "Гипервитаминоз витаминов A и D.",
        "Нежелательные последствия избыточного поступления витамина E."
      ],

      symptomsEn: [
        "Nausea.",
        "Headache.",
        "Digestive disturbances.",
        "Hypervitaminosis of vitamins A and D.",
        "Adverse effects associated with excessive vitamin E intake."
      ],

      instructionUz: "Doza oshirib yuborilganda qo'shimchani qabul qilishni to'xtating va shifokorga murojaat qiling.",

      instructionRu: "При превышении дозировки прекратите прием добавки и обратитесь к врачу.",

      instructionEn: "If the dosage is exceeded, stop taking the supplement and consult a healthcare professional."
    },

    // INTERACTIONS
    interactions: {
      uz: [
        "Boshqa vitamin-mineral komplekslari bilan bir vaqtda qabul qilish tavsiya etilmaydi, chunki ayrim vitamin va minerallarning umumiy dozasi oshib ketishi mumkin.",
        "Immunomodulyatorlar bilan birgalikda qo'llashdan oldin shifokor bilan maslahatlashish kerak.",
        "Yod saqlovchi preparatlar va qalqonsimon bez faoliyatiga ta'sir qiluvchi vositalar bilan birga qo'llashda ehtiyot bo'lish kerak.",
        "A, D va E vitaminlari saqlovchi boshqa preparatlar bilan umumiy dozani hisobga olish zarur."
      ],

      ru: [
        "Не рекомендуется одновременный прием с другими витаминно-минеральными комплексами, поскольку суммарная дозировка отдельных витаминов и минералов может превысить необходимую.",
        "Перед совместным применением с иммуномодуляторами необходимо проконсультироваться с врачом.",
        "Следует соблюдать осторожность при совместном применении с препаратами йода и средствами, влияющими на функцию щитовидной железы.",
        "Необходимо учитывать общую дозировку витаминов A, D и E при приеме других препаратов, содержащих эти витамины."
      ],

      en: [
        "Simultaneous use with other vitamin and mineral complexes is not recommended without medical advice, as the combined intake of certain vitamins and minerals may become excessive.",
        "Consult a healthcare professional before combining with immunomodulators.",
        "Use caution when combining with iodine supplements or products affecting thyroid function.",
        "Consider the total intake of vitamins A, D and E when using other products containing these vitamins."
      ]
    },

    // STORAGE CONDITIONS
    storage: {
      uz: [
        "Yopiq flakonni +4°C dan +25°C gacha bo'lgan haroratda saqlang.",
        "Flakon ochilgandan keyin sovutkichda saqlang.",
        "Ochilgandan so'ng 30 kun ichida ishlating.",
        "Bolalar qo'li yetmaydigan joyda saqlang."
      ],

      ru: [
        "Хранить закрытый флакон при температуре от +4°C до +25°C.",
        "После вскрытия хранить в холодильнике.",
        "Использовать в течение 30 дней после вскрытия.",
        "Хранить в недоступном для детей месте."
      ],

      en: [
        "Store the unopened bottle at a temperature between +4°C and +25°C.",
        "Refrigerate after opening.",
        "Use within 30 days after opening.",
        "Keep out of reach of children."
      ]
    },

    // SHELF LIFE
    shelfLife: {
      uz: "Yopiq flakonda ishlab chiqarilgan kundan boshlab 2 yil. Qadoqda ko'rsatilgan yaroqlilik muddati o'tgach ishlatmang.",

      ru: "2 года с даты производства в закрытом флаконе. Не использовать после истечения срока годности, указанного на упаковке.",

      en: "2 years from the date of manufacture when unopened. Do not use after the expiration date indicated on the package."
    },

    // PRODUCT FEATURES
    features: [
      {
        textUz: "Bolalar va kattalar uchun",
        textRu: "Для детей и взрослых",
        textEn: "For Children and Adults"
      },
      {
        textUz: "Suyuq sirop shakli",
        textRu: "Жидкая форма сиропа",
        textEn: "Liquid Syrup Form"
      },
      {
        textUz: "Omega-3 saqlaydi",
        textRu: "Содержит Омега-3",
        textEn: "Contains Omega-3"
      },
      {
        textUz: "Glutensiz",
        textRu: "Без глютена",
        textEn: "Gluten-Free"
      },
      {
        textUz: "GMO yo'q",
        textRu: "Без ГМО",
        textEn: "GMO-Free"
      },
      {
        textUz: "Soyasiz",
        textRu: "Без сои",
        textEn: "Soy-Free"
      }
    ],

    // MANUFACTURER INFORMATION
    manufacturerInfo: {
      name: "TOP PHARM SERVICE MChJ",

      addressUz: "O'zbekiston Respublikasi, Sirdaryo viloyati, Sirdaryo tumani, Kamolot MFY, Yangi ko'cha, 90-uy.",

      addressRu: "Республика Узбекистан, Сырдарьинская область, Сырдарьинский район, МФЙ Камолот, улица Янги, дом 90.",

      addressEn: "90 Yangi Street, Kamolot MFY, Syrdarya District, Syrdarya Region, Republic of Uzbekistan.",

      email: "info@anfa.uz",
      website: "https://www.anfa.uz"
    },

    // IMPORTANT INFORMATION
    disclaimer: {
      uz: "VITAZZA biologik faol qo'shimcha hisoblanadi, dori vositasi emas. Tavsiya etilgan dozadan oshirmang. Bolalar, homiladorlar, qalqonsimon bez kasalliklari bo'lgan shaxslar va boshqa vitamin preparatlarini qabul qilayotganlar foydalanishdan oldin shifokor bilan maslahatlashishlari kerak.",

      ru: "VITAZZA является биологически активной добавкой, а не лекарственным средством. Не превышайте рекомендуемую дозировку. Детям, беременным женщинам, людям с заболеваниями щитовидной железы и принимающим другие витаминные препараты перед применением необходимо проконсультироваться с врачом.",

      en: "VITAZZA is a dietary supplement, not a medicinal product. Do not exceed the recommended dosage. Children, pregnant women, people with thyroid disorders and those taking other vitamin supplements should consult a healthcare professional before use."
    }
  },

  15: {
    id: 15,

    name: "ALLERGIDON",
    nameRu: "АЛЛЕРГИДОН",
    nameEn: "ALLERGIDON",

    tagline: "Allergiyaga qarshi tabiiy o‘simlik siropi",
    taglineRu: "Натуральный растительный сироп против аллергии",
    taglineEn: "Natural herbal syrup for allergy support",

    image: allergidon,
    pdf: "https://drive.google.com/file/d/1ZGFrjqYt5eJ3mVrjj8QnqH_wxa0G7Oxw/view?usp=sharing",

    volume: "150 ml",
    form: "O‘simlik ekstraktlari asosidagi sirop",
    formRu: "Сироп на основе растительных экстрактов",
    formEn: "Syrup based on herbal extracts",

    rating: 4.6,
    reviews: 512,

    manufacturer: "—",
    manufacturerRu: "—",
    manufacturerEn: "—",

    certification: "—",
    price: "—",
    currency: "сум",

    composition: [
      {
        name: "Bodring o‘ti ekstrakti (Borago officinalis)",
        nameRu: "Экстракт огуречной травы (Borago officinalis)",
        nameEn: "Borage extract (Borago officinalis)",
        amount: "300 mg",
        per: "—"
      },
      {
        name: "Dala binafshasi ekstrakti (Viola arvensis)",
        nameRu: "Экстракт фиалки полевой (Viola arvensis)",
        nameEn: "Field pansy extract (Viola arvensis)",
        amount: "200 mg",
        per: "—"
      },
      {
        name: "Dorivor momaqaymoq ekstrakti (Taraxacum officinale)",
        nameRu: "Экстракт одуванчика лекарственного (Taraxacum officinale)",
        nameEn: "Dandelion extract (Taraxacum officinale)",
        amount: "300 mg",
        per: "—"
      },
      {
        name: "Moychechak ekstrakti (Matricaria chamomilla)",
        nameRu: "Экстракт ромашки (Matricaria chamomilla)",
        nameEn: "Chamomile extract (Matricaria chamomilla)",
        amount: "200 mg",
        per: "—"
      }
    ],

    benefits: [
      {
        title: "Allergiya belgilarini qo‘llab-quvvatlash",
        titleRu: "Поддержка при симптомах аллергии",
        titleEn: "Allergy symptom support",

        description: "Ishlab chiqaruvchi ma’lumotiga ko‘ra, allergik reaksiyalar bilan bog‘liq belgilarni kamaytirishga yordam berishi mumkin.",
        descriptionRu: "По информации производителя, может помогать уменьшать проявления аллергических реакций.",
        descriptionEn: "According to the manufacturer, may help reduce symptoms associated with allergic reactions.",

        icon: "🌿"
      },
      {
        title: "Immunitetni qo‘llab-quvvatlash",
        titleRu: "Поддержка иммунитета",
        titleEn: "Immune system support",

        description: "Organizmning tabiiy himoya faoliyatini qo‘llab-quvvatlashga mo‘ljallangan.",
        descriptionRu: "Предназначен для поддержки естественных защитных функций организма.",
        descriptionEn: "Designed to support the body's natural defense functions.",

        icon: "🛡️"
      },
      {
        title: "Teri va nafas yo‘llarini qo‘llab-quvvatlash",
        titleRu: "Поддержка кожи и дыхательных путей",
        titleEn: "Skin and respiratory support",

        description: "Yo‘riqnomada teridagi allergik belgilar va nafas yo‘llari bilan bog‘liq allergik holatlarda qo‘llanishi ko‘rsatilgan.",
        descriptionRu: "В инструкции указано применение при аллергических проявлениях на коже и аллергических состояниях дыхательных путей.",
        descriptionEn: "The leaflet lists its use in allergic skin conditions and allergic respiratory conditions.",

        icon: "💨"
      },
      {
        title: "Hazm tizimi va jigar faoliyatini qo‘llab-quvvatlash",
        titleRu: "Поддержка пищеварительной системы и печени",
        titleEn: "Digestive and liver support",

        description: "Ishlab chiqaruvchi ma’lumotiga ko‘ra, hazm tizimi va jigar faoliyatini qo‘llab-quvvatlashga yordam beradi.",
        descriptionRu: "По информации производителя, способствует поддержке пищеварительной системы и печени.",
        descriptionEn: "According to the manufacturer, supports digestive system and liver function.",

        icon: "⚡"
      }
    ],

    ingredients: [
      {
        name: "Bodring o‘ti ekstrakti",
        nameRu: "Экстракт огуречной травы",
        nameEn: "Borage extract",

        scientificName: "Borago officinalis",
        icon: "🌿",

        benefits: [
          "O‘simlik tarkibidagi biologik faol moddalarni o‘z ichiga oladi",
          "Yallig‘lanish jarayonlarini qo‘llab-quvvatlash bo‘yicha an’anaviy qo‘llaniladi"
        ],

        benefitsRu: [
          "Содержит биологически активные растительные вещества",
          "Традиционно используется в средствах для поддержки при воспалительных процессах"
        ],

        benefitsEn: [
          "Contains biologically active plant compounds",
          "Traditionally used in products intended to support the body during inflammatory processes"
        ]
      },
      {
        name: "Dala binafshasi ekstrakti",
        nameRu: "Экстракт фиалки полевой",
        nameEn: "Field pansy extract",

        scientificName: "Viola arvensis",
        icon: "🌸",

        benefits: [
          "An’anaviy ravishda teri parvarishi vositalarida qo‘llaniladi",
          "O‘simlik tarkibidagi tabiiy birikmalarni o‘z ichiga oladi"
        ],

        benefitsRu: [
          "Традиционно используется в средствах для ухода за кожей",
          "Содержит природные растительные соединения"
        ],

        benefitsEn: [
          "Traditionally used in skincare preparations",
          "Contains natural plant compounds"
        ]
      },
      {
        name: "Dorivor momaqaymoq ekstrakti",
        nameRu: "Экстракт одуванчика",
        nameEn: "Dandelion extract",

        scientificName: "Taraxacum officinale",
        icon: "🌼",

        benefits: [
          "An’anaviy ravishda hazm tizimini qo‘llab-quvvatlashda ishlatiladi",
          "O‘simlik tarkibidagi tabiiy moddalarni o‘z ichiga oladi"
        ],

        benefitsRu: [
          "Традиционно используется для поддержки пищеварения",
          "Содержит природные растительные вещества"
        ],

        benefitsEn: [
          "Traditionally used to support digestion",
          "Contains natural plant compounds"
        ]
      },
      {
        name: "Moychechak ekstrakti",
        nameRu: "Экстракт ромашки",
        nameEn: "Chamomile extract",

        scientificName: "Matricaria chamomilla",
        icon: "🌼",

        benefits: [
          "An’anaviy ravishda tinchlantiruvchi vositalarda qo‘llaniladi",
          "Hazm tizimini qo‘llab-quvvatlash uchun ishlatiladi"
        ],

        benefitsRu: [
          "Традиционно используется в успокаивающих средствах",
          "Применяется для поддержки пищеварительной системы"
        ],

        benefitsEn: [
          "Traditionally used in calming preparations",
          "Used to support digestive function"
        ]
      }
    ],

    usage: {
      dosage: "Kattalar: 15–20 ml kuniga 2–3 marta. 6 yoshgacha bo‘lgan bolalar: 2,5–5 ml kuniga 2–3 marta. 6–12 yoshdagi bolalar: 5–10 ml kuniga 2–3 marta.",
      dosageRu: "Взрослым: по 15–20 мл 2–3 раза в день. Детям до 6 лет: по 2,5–5 мл 2–3 раза в день. Детям от 6 до 12 лет: по 5–10 мл 2–3 раза в день.",
      dosageEn: "Adults: 15–20 ml 2–3 times daily. Children under 6 years: 2.5–5 ml 2–3 times daily. Children aged 6–12 years: 5–10 ml 2–3 times daily.",

      timing: "Ovqat vaqtida",
      timingRu: "Во время еды",
      timingEn: "During meals",

      duration: "1–3 oy. Davolash kursi shifokor tomonidan belgilanadi. Zarurat bo‘lsa, kurs bir oydan keyin takrorlanishi mumkin.",
      durationRu: "От 1 до 3 месяцев. Продолжительность курса определяет врач. При необходимости курс можно повторить через месяц.",
      durationEn: "1–3 months. The treatment duration is determined by a doctor. If necessary, the course may be repeated after one month.",

      instruction: "Qabul qilishdan oldin flakonni yaxshilab chayqating.",
      instructionRu: "Перед применением тщательно взболтать флакон.",
      instructionEn: "Shake the bottle thoroughly before use."
    },

    indications: [
      "Mavsumiy allergiya (pollinoz)",
      "Oziq-ovqat va dori vositalariga allergiya",
      "Allergik dermatologik kasalliklar",
      "Eshakemi va atopik dermatit",
      "Allergik ekzema",
      "Allergik bronxit va bronxial astma",
      "Allergik rinit",
      "Allergik kon’yunktivit"
    ],

    indicationsRu: [
      "Сезонная аллергия (поллиноз)",
      "Пищевая и лекарственная аллергия",
      "Аллергические дерматологические заболевания",
      "Крапивница и атопический дерматит",
      "Аллергическая экзема",
      "Аллергический бронхит и бронхиальная астма",
      "Аллергический ринит",
      "Аллергический конъюнктивит"
    ],

    indicationsEn: [
      "Seasonal allergies (pollinosis)",
      "Food and drug allergies",
      "Allergic skin conditions",
      "Urticaria and atopic dermatitis",
      "Allergic eczema",
      "Allergic bronchitis and bronchial asthma",
      "Allergic rhinitis",
      "Allergic conjunctivitis"
    ],

    contraindications: [
      "Preparat tarkibidagi komponentlarga individual toqatsizlik"
    ],

    contraindicationsRu: [
      "Индивидуальная непереносимость компонентов препарата"
    ],

    contraindicationsEn: [
      "Individual intolerance to any of the product's ingredients"
    ],

    sideEffects: [
      "Kamdan-kam hollarda allergik reaksiyalar yuzaga kelishi mumkin.",
      "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qabul qilishni to‘xtating."
    ],

    sideEffectsRu: [
      "В редких случаях возможны аллергические реакции.",
      "При появлении признаков повышенной чувствительности прекратите применение."
    ],

    sideEffectsEn: [
      "Allergic reactions may occur in rare cases.",
      "Discontinue use if signs of hypersensitivity develop."
    ],

    overdose: "Hozirgi vaqtda dozani oshirib yuborish holatlari haqida ma’lumot mavjud emas.",
    overdoseRu: "В настоящее время случаи передозировки не выявлены.",
    overdoseEn: "No cases of overdose have currently been reported.",

    interactions: "Boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan. Shunga qaramay, boshqa preparatlar bilan birga qabul qilishdan oldin shifokor bilan maslahatlashish tavsiya etiladi.",
    interactionsRu: "При совместном применении с другими лекарственными средствами отрицательных эффектов не выявлено. Тем не менее перед сочетанием с другими препаратами рекомендуется проконсультироваться с врачом.",
    interactionsEn: "No adverse effects have been identified when used with other medicines. Nevertheless, consult a doctor before combining it with other products.",

    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda saqlang",
      "Flakon ochilgandan keyin salqin joyda saqlang",
      "Qizdirmang va muzlatmang",
      "Bolalar qo‘li yetmaydigan joyda saqlang"
    ],

    storageRu: [
      "Температура хранения: от +2°C до +25°C",
      "Хранить в защищённом от света месте",
      "После вскрытия флакона хранить в прохладном месте",
      "Не нагревать и не замораживать",
      "Хранить в недоступном для детей месте"
    ],

    storageEn: [
      "Storage temperature: +2°C to +25°C",
      "Store in a place protected from light",
      "After opening, store in a cool place",
      "Do not heat or freeze",
      "Keep out of reach of children"
    ],

    shelfLife: "24 oy",
    shelfLifeRu: "24 месяца",
    shelfLifeEn: "24 months",

    manufacturerAddress: "1000011, Toshkent viloyati, Toshkent tumani",
    manufacturerAddressRu: "1000011, Ташкентская область, Ташкентский район",
    manufacturerAddressEn: "1000011, Tashkent Region, Tashkent District",

    contact: {
      phone: "+998 (95) 195-59-00",
      email: "info@anfa.uz",
      website: "www.anfa.uz"
    },

    features: [
      {
        text: "Tabiiy o‘simlik ekstraktlari",
        textRu: "Натуральные растительные экстракты",
        textEn: "Natural herbal extracts"
      },
      {
        text: "150 ml sirop",
        textRu: "Сироп 150 мл",
        textEn: "150 ml syrup"
      },
      {
        text: "To‘rtta o‘simlik ekstrakti",
        textRu: "Четыре растительных экстракта",
        textEn: "Four herbal extracts"
      },
      {
        text: "Bolalar va kattalar uchun dozalash ko‘rsatmalari",
        textRu: "Инструкция по дозировке для детей и взрослых",
        textEn: "Dosage instructions for children and adults"
      }
    ]
  },

  16: {
  id: 16,

  name: "ANEMAK",
  nameRu: "АНЕМАК",
  nameEn: "ANEMAK",

  tagline: "Temir tanqisligi va kamqonlikda qo‘llab-quvvatlash",
  taglineRu: "Поддержка при дефиците железа и анемии",
  taglineEn: "Support for iron deficiency and anemia",

  image: anemak,
  pdf: "https://drive.google.com/file/d/1EaYC3UujLTKo9bhABypjV7sbjwhCqoIZ/view?usp=sharing",

  volume: "100 ml",
  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Syrup based on herbal extracts",

  rating: 4.8,
  reviews: 932,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",

  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Qichitqi o‘t ekstrakti (Urtica dioica)",
      nameRu: "Экстракт крапивы двудомной (Urtica dioica)",
      nameEn: "Stinging nettle extract (Urtica dioica)",
      amount: "20 mg",
      per: "100 ml"
    },
    {
      name: "Eleuterokokk ekstrakti (Eleutherococcus senticosus)",
      nameRu: "Экстракт элеутерококка (Eleutherococcus senticosus)",
      nameEn: "Eleuthero extract (Eleutherococcus senticosus)",
      amount: "10 mg",
      per: "100 ml"
    },
    {
      name: "Mingbarg ekstrakti (Achillea millefolium)",
      nameRu: "Экстракт тысячелистника (Achillea millefolium)",
      nameEn: "Yarrow extract (Achillea millefolium)",
      amount: "10 mg",
      per: "100 ml"
    },
    {
      name: "Aloe ekstrakti (Aloe arborescens)",
      nameRu: "Экстракт алоэ (Aloe arborescens)",
      nameEn: "Aloe extract (Aloe arborescens)",
      amount: "10 mg",
      per: "100 ml"
    },
    {
      name: "Qator o‘ti ekstrakti (Bidens tripartita)",
      nameRu: "Экстракт череды (Bidens tripartita)",
      nameEn: "Three-lobed beggarticks extract (Bidens tripartita)",
      amount: "10 mg",
      per: "100 ml"
    }
  ],

  benefits: [
    {
      title: "Qon hosil bo‘lishini qo‘llab-quvvatlash",
      titleRu: "Поддержка кроветворения",
      titleEn: "Blood formation support",

      description: "Ishlab chiqaruvchi yo‘riqnomasiga ko‘ra, temir tanqisligi bilan bog‘liq kamqonlikda qo‘llash uchun mo‘ljallangan.",
      descriptionRu: "Согласно инструкции производителя, предназначен для применения при железодефицитной анемии.",
      descriptionEn: "According to the manufacturer's leaflet, intended for use in iron-deficiency anemia.",

      icon: "🩸"
    },
    {
      title: "Temir so‘rilishini qo‘llab-quvvatlash",
      titleRu: "Поддержка усвоения железа",
      titleEn: "Iron absorption support",

      description: "Yo‘riqnomada ichakda temir so‘rilishini yaxshilashga yordam berishi qayd etilgan.",
      descriptionRu: "В инструкции указано, что средство способствует улучшению всасывания железа в кишечнике.",
      descriptionEn: "The leaflet states that it helps improve iron absorption in the intestine.",

      icon: "❤️"
    },
    {
      title: "Charchoq va holsizlikda qo‘llab-quvvatlash",
      titleRu: "Поддержка при усталости и слабости",
      titleEn: "Support against fatigue and weakness",

      description: "Ishlab chiqaruvchi ma’lumotiga ko‘ra, holsizlik, tez charchash va bosh aylanishi kabi belgilarni kamaytirishga yordam berishi mumkin.",
      descriptionRu: "По информации производителя, может помогать при слабости, повышенной утомляемости и головокружении.",
      descriptionEn: "According to the manufacturer, may help with weakness, fatigue, and dizziness.",

      icon: "⚡"
    },
    {
      title: "Organizmni umumiy qo‘llab-quvvatlash",
      titleRu: "Общая поддержка организма",
      titleEn: "General body support",

      description: "O‘simlik ekstraktlari asosidagi kompleks bo‘lib, organizmning umumiy faoliyatini qo‘llab-quvvatlash uchun mo‘ljallangan.",
      descriptionRu: "Комплекс на основе растительных экстрактов, предназначенный для общей поддержки организма.",
      descriptionEn: "A herbal extract complex designed to provide general support for the body.",

      icon: "🛡️"
    }
  ],

  ingredients: [
    {
      name: "Qichitqi o‘t",
      nameRu: "Крапива",
      nameEn: "Stinging nettle",

      scientificName: "Urtica dioica",
      icon: "🌱",

      benefits: [
        "O‘simlik tarkibidagi tabiiy birikmalarni o‘z ichiga oladi",
        "An’anaviy ravishda umumiy salomatlikni qo‘llab-quvvatlashda ishlatiladi"
      ],

      benefitsRu: [
        "Содержит природные растительные соединения",
        "Традиционно используется для общей поддержки здоровья"
      ],

      benefitsEn: [
        "Contains natural plant compounds",
        "Traditionally used for general health support"
      ]
    },
    {
      name: "Eleuterokokk",
      nameRu: "Элеутерококк",
      nameEn: "Eleuthero",

      scientificName: "Eleutherococcus senticosus",
      icon: "🌿",

      benefits: [
        "An’anaviy ravishda tetiklikni qo‘llab-quvvatlashda ishlatiladi",
        "Jismoniy va aqliy faollik davrida qo‘llaniladi"
      ],

      benefitsRu: [
        "Традиционно используется для поддержания тонуса",
        "Применяется в периоды физической и умственной нагрузки"
      ],

      benefitsEn: [
        "Traditionally used to support vitality",
        "Used during periods of physical and mental activity"
      ]
    },
    {
      name: "Mingbarg",
      nameRu: "Тысячелистник",
      nameEn: "Yarrow",

      scientificName: "Achillea millefolium",
      icon: "🌼",

      benefits: [
        "An’anaviy ravishda hazm tizimini qo‘llab-quvvatlashda ishlatiladi",
        "Tabiiy o‘simlik birikmalarini o‘z ichiga oladi"
      ],

      benefitsRu: [
        "Традиционно используется для поддержки пищеварения",
        "Содержит природные растительные соединения"
      ],

      benefitsEn: [
        "Traditionally used to support digestion",
        "Contains natural plant compounds"
      ]
    },
    {
      name: "Aloe",
      nameRu: "Алоэ",
      nameEn: "Aloe",

      scientificName: "Aloe arborescens",
      icon: "🌵",

      benefits: [
        "O‘simlik tarkibidagi biologik faol moddalarni o‘z ichiga oladi",
        "An’anaviy ravishda turli o‘simlik preparatlarida qo‘llaniladi"
      ],

      benefitsRu: [
        "Содержит биологически активные растительные вещества",
        "Традиционно используется в различных растительных препаратах"
      ],

      benefitsEn: [
        "Contains biologically active plant compounds",
        "Traditionally used in various herbal preparations"
      ]
    },
    {
      name: "Qator o‘ti",
      nameRu: "Череда",
      nameEn: "Three-lobed beggarticks",

      scientificName: "Bidens tripartita",
      icon: "🍃",

      benefits: [
        "An’anaviy ravishda teri parvarishida ishlatiladi",
        "Tabiiy o‘simlik birikmalarini o‘z ichiga oladi"
      ],

      benefitsRu: [
        "Традиционно используется в средствах для ухода за кожей",
        "Содержит природные растительные соединения"
      ],

      benefitsEn: [
        "Traditionally used in skincare preparations",
        "Contains natural plant compounds"
      ]
    }
  ],

  indications: [
    "Temir tanqisligi bilan bog‘liq kamqonlik",
    "B12 vitamini tanqisligi bilan bog‘liq kamqonlik",
    "Homiladorlik va emizish davrida temir tanqisligining oldini olish",
    "Jismoniy va aqliy rivojlanish davri",
    "Faol o‘sish davri",
    "Sport va intensiv jismoniy mehnat",
    "Noto‘g‘ri yoki muvozanatsiz ovqatlanish",
    "Tez-tez uchraydigan O‘RVI va O‘RZ holatlarida kompleks terapiya tarkibida",
    "Qon donorligi",
    "Jarrohlik amaliyotlaridan keyingi davr",
    "Uzoq davom etuvchi qon ketish holatlari",
    "O‘smirlar va kattalarda temir tanqisligi xavfi"
  ],

  indicationsRu: [
    "Анемия, связанная с дефицитом железа",
    "Анемия, связанная с дефицитом витамина B12",
    "Профилактика дефицита железа во время беременности и грудного вскармливания",
    "Период физического и умственного развития",
    "Период интенсивного роста",
    "Занятия спортом и интенсивный физический труд",
    "Недостаточное или несбалансированное питание",
    "В составе комплексной терапии при частых ОРВИ и ОРЗ",
    "Донорство крови",
    "Период после хирургических вмешательств",
    "Длительные кровотечения",
    "Риск дефицита железа у подростков и взрослых"
  ],

  indicationsEn: [
    "Iron-deficiency anemia",
    "Vitamin B12 deficiency anemia",
    "Prevention of iron deficiency during pregnancy and breastfeeding",
    "Periods of physical and mental development",
    "Periods of rapid growth",
    "Sports and intensive physical activity",
    "Insufficient or unbalanced nutrition",
    "As part of комплекс therapy for frequent respiratory infections",
    "Blood donation",
    "Recovery period after surgical procedures",
    "Prolonged bleeding",
    "Risk of iron deficiency in adolescents and adults"
  ],

  usage: {
    dosage: "3–12 yoshdagi bolalar: 2,5–5 ml kuniga 2 marta. 12 yoshdan katta bolalar va kattalar: 5–10 ml kuniga 2 marta.",

    dosageRu: "Детям от 3 до 12 лет: по 2,5–5 мл 2 раза в день. Взрослым и детям старше 12 лет: по 5–10 мл 2 раза в день.",

    dosageEn: "Children aged 3–12 years: 2.5–5 ml twice daily. Adults and children over 12 years: 5–10 ml twice daily.",

    timing: "Ovqatdan 5–10 daqiqa keyin",
    timingRu: "Через 5–10 минут после еды",
    timingEn: "5–10 minutes after meals",

    duration: "Odatda 30 kun. Davolash davomiyligi va dozani shifokor belgilaydi.",
    durationRu: "Обычно 30 дней. Продолжительность курса и дозировку определяет врач.",
    durationEn: "Usually 30 days. The doctor determines the dosage and treatment duration.",

    instruction: "Qabul qilishdan oldin flakonni yaxshilab chayqating.",
    instructionRu: "Перед применением тщательно взболтать флакон.",
    instructionEn: "Shake the bottle thoroughly before use."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients"
  ],

  sideEffects: [
    "Kamdan-kam hollarda allergik reaksiyalar kuzatilishi mumkin.",
    "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qabul qilishni to‘xtating."
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции.",
    "При появлении признаков повышенной чувствительности прекратите применение."
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases.",
    "Discontinue use if signs of hypersensitivity develop."
  ],

  overdose: "Hozirgi vaqtda dozani oshirib yuborish holatlari aniqlanmagan.",
  overdoseRu: "В настоящее время случаи передозировки не выявлены.",
  overdoseEn: "No cases of overdose have currently been reported.",

  interactions: "Yo‘riqnomaga ko‘ra, boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan. Boshqa preparatlar bilan birga qabul qilishdan oldin shifokor bilan maslahatlashish tavsiya etiladi.",
  interactionsRu: "Согласно инструкции, отрицательных эффектов при совместном применении с другими лекарственными средствами не выявлено. Перед сочетанием с другими препаратами рекомендуется проконсультироваться с врачом.",
  interactionsEn: "According to the leaflet, no adverse effects have been identified when used with other medicines. Consult a doctor before combining it with other products.",

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Flakon ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang",
    "Bolalar qo‘li yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "После вскрытия флакона хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store in a place protected from light",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Keep out of reach of children"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "O‘simlik ekstraktlari kompleksi",
      textRu: "Комплекс растительных экстрактов",
      textEn: "Herbal extract complex"
    },
    {
      text: "100 ml sirop",
      textRu: "Сироп 100 мл",
      textEn: "100 ml syrup"
    },
    {
      text: "5 xil o‘simlik ekstrakti",
      textRu: "5 растительных экстрактов",
      textEn: "5 herbal extracts"
    },
    {
      text: "Bolalar va kattalar uchun dozalash",
      textRu: "Дозировка для детей и взрослых",
      textEn: "Dosage for children and adults"
    }
  ]
  },
  
  17: {
  id: 17,

  name: "BRONHODOKS",
  nameRu: "БРОНХОДОКС",
  nameEn: "BRONHODOKS",

  tagline: "Yo‘tal va bronxlarni qo‘llab-quvvatlash",
  taglineRu: "Поддержка при кашле и заболеваниях бронхов",
  taglineEn: "Cough and bronchial support",

  image: bronhodokds,
  pdf: "https://drive.google.com/file/d/1ZZpChhu94EDgMhb7UzcSBS74hRipOIk3/view?usp=sharing",

  volume: "150 ml",

  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Syrup based on herbal extracts",

  rating: 4.8,
  reviews: 876,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",

  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Mavrak (shalfey) ekstrakti (Salvia officinalis)",
      nameRu: "Экстракт шалфея (Salvia officinalis)",
      nameEn: "Sage extract (Salvia officinalis)",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Qizilmiya ildizi ekstrakti (Glycyrrhiza glabra)",
      nameRu: "Экстракт солодки (Glycyrrhiza glabra)",
      nameEn: "Licorice root extract (Glycyrrhiza glabra)",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Ona-o‘gay ona ekstrakti (Tussilago)",
      nameRu: "Экстракт мать-и-мачехи (Tussilago)",
      nameEn: "Coltsfoot extract (Tussilago)",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Aloe ekstrakti (Aloe arborescens)",
      nameRu: "Экстракт алоэ (Aloe arborescens)",
      nameEn: "Aloe extract (Aloe arborescens)",
      amount: "5 mg",
      per: "—"
    },
    {
      name: "Zubturum ekstrakti (Plantago)",
      nameRu: "Экстракт подорожника (Plantago)",
      nameEn: "Plantain extract (Plantago)",
      amount: "5 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Yo‘talni kamaytirishga yordam beradi",
      titleRu: "Помогает уменьшить кашель",
      titleEn: "Helps reduce coughing",

      description: "Yo‘riqnomaga ko‘ra, yo‘tal markaziga ta’sir qilib, yo‘tal refleksini kamaytirishga yordam beradi.",
      descriptionRu: "Согласно инструкции, воздействует на кашлевой центр и помогает уменьшить кашлевой рефлекс.",
      descriptionEn: "According to the leaflet, it acts on the cough center and helps reduce the cough reflex.",

      icon: "🤧"
    },
    {
      title: "Bronxlarni qo‘llab-quvvatlash",
      titleRu: "Поддержка бронхов",
      titleEn: "Bronchial support",

      description: "Yo‘riqnomada bronxlarni kengaytiruvchi va bronxospazmni kamaytirishga yordam beruvchi ta’sir qayd etilgan.",
      descriptionRu: "В инструкции указано бронхорасширяющее действие и способность уменьшать бронхоспазм.",
      descriptionEn: "The leaflet describes bronchodilating activity and an effect that may help reduce bronchospasm.",

      icon: "🌬️"
    },
    {
      title: "Yallig‘lanishga qarshi ta’sir",
      titleRu: "Противовоспалительное действие",
      titleEn: "Anti-inflammatory action",

      description: "Ishlab chiqaruvchi yo‘riqnomasiga ko‘ra, yallig‘lanishga qarshi va kuchsiz mikroblarga qarshi ta’sirga ega.",
      descriptionRu: "Согласно инструкции производителя, обладает противовоспалительным и слабым противомикробным действием.",
      descriptionEn: "According to the manufacturer's leaflet, it has anti-inflammatory and mild antimicrobial activity.",

      icon: "🛡️"
    },
    {
      title: "Bronxial sekretsiyani qo‘llab-quvvatlash",
      titleRu: "Поддержка бронхиальной секреции",
      titleEn: "Bronchial secretion support",

      description: "Yo‘riqnomada yengil sekretolitik ta’sir qayd etilgan.",
      descriptionRu: "В инструкции указано слабое секретолитическое действие.",
      descriptionEn: "The leaflet describes a mild secretolytic effect.",

      icon: "💨"
    }
  ],

  ingredients: [
    {
      name: "Mavrak (shalfey)",
      nameRu: "Шалфей",
      nameEn: "Sage",

      scientificName: "Salvia officinalis",
      icon: "🌿",

      benefits: [
        "An’anaviy ravishda tomoq va og‘iz bo‘shlig‘i parvarishida ishlatiladi",
        "Tabiiy o‘simlik birikmalarini o‘z ichiga oladi"
      ],

      benefitsRu: [
        "Традиционно используется для ухода за горлом и полостью рта",
        "Содержит природные растительные соединения"
      ],

      benefitsEn: [
        "Traditionally used in throat and oral care",
        "Contains natural plant compounds"
      ]
    },
    {
      name: "Qizilmiya ildizi",
      nameRu: "Солодка",
      nameEn: "Licorice root",

      scientificName: "Glycyrrhiza glabra",
      icon: "🍃",

      benefits: [
        "An’anaviy ravishda yo‘tal bilan bog‘liq vositalarda qo‘llaniladi",
        "Nafas yo‘llarini qo‘llab-quvvatlash uchun ishlatiladi"
      ],

      benefitsRu: [
        "Традиционно используется в средствах от кашля",
        "Применяется для поддержки дыхательных путей"
      ],

      benefitsEn: [
        "Traditionally used in cough preparations",
        "Used to support respiratory health"
      ]
    },
    {
      name: "Ona-o‘gay ona",
      nameRu: "Мать-и-мачеха",
      nameEn: "Coltsfoot",

      scientificName: "Tussilago",
      icon: "🌼",

      benefits: [
        "An’anaviy ravishda yo‘tal bilan bog‘liq o‘simlik preparatlarida ishlatiladi",
        "Nafas yo‘llarini qo‘llab-quvvatlash uchun an’anaviy ravishda qo‘llaniladi"
      ],

      benefitsRu: [
        "Традиционно используется в растительных средствах от кашля",
        "Применяется для поддержки дыхательных путей"
      ],

      benefitsEn: [
        "Traditionally used in herbal cough preparations",
        "Traditionally used to support respiratory health"
      ]
    },
    {
      name: "Aloe",
      nameRu: "Алоэ",
      nameEn: "Aloe",

      scientificName: "Aloe arborescens",
      icon: "🌵",

      benefits: [
        "O‘simlik tarkibidagi biologik faol moddalarni o‘z ichiga oladi",
        "Turli o‘simlik preparatlarida qo‘llaniladi"
      ],

      benefitsRu: [
        "Содержит биологически активные растительные вещества",
        "Используется в различных растительных препаратах"
      ],

      benefitsEn: [
        "Contains biologically active plant compounds",
        "Used in various herbal preparations"
      ]
    },
    {
      name: "Zubturum",
      nameRu: "Подорожник",
      nameEn: "Plantain",

      scientificName: "Plantago",
      icon: "🌱",

      benefits: [
        "An’anaviy ravishda tomoq va nafas yo‘llari uchun o‘simlik vositalarida ishlatiladi",
        "Tabiiy o‘simlik birikmalarini o‘z ichiga oladi"
      ],

      benefitsRu: [
        "Традиционно используется в растительных средствах для горла и дыхательных путей",
        "Содержит природные растительные соединения"
      ],

      benefitsEn: [
        "Traditionally used in herbal preparations for the throat and respiratory tract",
        "Contains natural plant compounds"
      ]
    }
  ],

  indications: [
    "O‘tkir va surunkali bronxit",
    "Traxeobronxit",
    "Bronxial astma",
    "Bronxoektatik kasallik",
    "Operatsiyadan oldingi va keyingi davrda bronxlarni tozalash",
    "Atelektaz",
    "Pnevmoniya",
    "Ko‘kyo‘tal",
    "Sil kasalligi",
    "Yo‘tal va bronxokonstriksiya belgilarini kamaytirish"
  ],

  indicationsRu: [
    "Острый и хронический бронхит",
    "Трахеобронхит",
    "Бронхиальная астма",
    "Бронхоэктатическая болезнь",
    "Санация бронхиального дерева до и после операции",
    "Ателектаз",
    "Пневмония",
    "Коклюш",
    "Туберкулёз",
    "Устранение симптомов кашля и бронхоконстрикции"
  ],

  indicationsEn: [
    "Acute and chronic bronchitis",
    "Tracheobronchitis",
    "Bronchial asthma",
    "Bronchiectasis",
    "Bronchial tree clearance before and after surgery",
    "Atelectasis",
    "Pneumonia",
    "Whooping cough",
    "Tuberculosis",
    "Relief of cough and bronchoconstriction symptoms"
  ],

  usage: {
    dosage: "3–12 yoshdagi bolalar: 2,5–5 ml kuniga 3 marta. 12 yoshdan katta bolalar va kattalar: 5–7,5 ml kuniga 3 marta.",

    dosageRu: "Детям от 3 до 12 лет: по 2,5–5 мл 3 раза в день. Взрослым и детям старше 12 лет: по 5–7,5 мл 3 раза в день.",

    dosageEn: "Children aged 3–12 years: 2.5–5 ml 3 times daily. Adults and children over 12 years: 5–7.5 ml 3 times daily.",

    timing: "Ovqatdan 10–15 daqiqa keyin",
    timingRu: "Через 10–15 минут после еды",
    timingEn: "10–15 minutes after meals",

    duration: "14 kun. Davolash davomiyligi va dozani shifokor belgilaydi.",
    durationRu: "14 дней. Продолжительность курса и дозировку определяет врач.",
    durationEn: "14 days. The doctor determines the dosage and treatment duration.",

    instruction: "Qabul qilishdan oldin flakonni yaxshilab chayqating.",
    instructionRu: "Перед применением тщательно взболтать флакон.",
    instructionEn: "Shake the bottle thoroughly before use."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik",
    "Giperatsid gastrit",
    "Homiladorlik",
    "Emizish davri"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов препарата",
    "Гиперацидный гастрит",
    "Беременность",
    "Период грудного вскармливания"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients",
    "Hyperacid gastritis",
    "Pregnancy",
    "Breastfeeding"
  ],

  sideEffects: [
    "Kamdan-kam hollarda allergik reaksiyalar kuzatilishi mumkin.",
    "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qabul qilishni to‘xtating."
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции.",
    "При появлении признаков повышенной чувствительности прекратите применение."
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases.",
    "Discontinue use if signs of hypersensitivity develop."
  ],

  overdose: "Hozirgi vaqtda dozani oshirib yuborish holatlari aniqlanmagan.",
  overdoseRu: "В настоящее время случаи передозировки не выявлены.",
  overdoseEn: "No cases of overdose have currently been reported.",

  interactions: "Yo‘riqnomaga ko‘ra, boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan. Boshqa preparatlar bilan birga qabul qilishdan oldin shifokor bilan maslahatlashish tavsiya etiladi.",
  interactionsRu: "Согласно инструкции, отрицательных эффектов при совместном применении с другими лекарственными средствами не выявлено. Перед сочетанием с другими препаратами рекомендуется проконсультироваться с врачом.",
  interactionsEn: "According to the leaflet, no adverse effects have been identified when used with other medicines. Consult a doctor before combining it with other products.",

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Flakon ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang",
    "Bolalar qo‘li yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "После вскрытия флакона хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store in a place protected from light",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Keep out of reach of children"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "5 xil o‘simlik ekstrakti",
      textRu: "5 растительных экстрактов",
      textEn: "5 herbal extracts"
    },
    {
      text: "Yo‘talni kamaytirishga yordam beradi",
      textRu: "Помогает уменьшить кашель",
      textEn: "Helps reduce coughing"
    },
    {
      text: "Bronxlarni qo‘llab-quvvatlash",
      textRu: "Поддержка бронхов",
      textEn: "Bronchial support"
    },
    {
      text: "150 ml sirop",
      textRu: "Сироп 150 мл",
      textEn: "150 ml syrup"
    }
  ]
  },

  18: {
  id: 18,
  name: "VETROGONIN",
  nameRu: "ВЕТРОГОНИН",
  nameEn: "VETROGONIN",

  tagline: "Ichakdagi gaz, meteorizm va kolik belgilarini yengillashtirishga yordam beruvchi o‘simlik siropi",
  taglineRu: "Растительный сироп для облегчения симптомов метеоризма и кишечных колик",
  taglineEn: "Herbal syrup to help relieve gas, bloating and intestinal colic symptoms",

  image: vetrogonin,
  pdf: "https://drive.google.com/file/d/13XvtYEUe_vDIbR2xgYOVVmyWTa-zOtQX/view?usp=sharing",

  volume: "150 ml",

  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Syrup based on herbal extracts",

  rating: 4.7,
  reviews: 438,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",

  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Romashka ekstrakti",
      nameRu: "Экстракт ромашки аптечной",
      nameEn: "Chamomile extract",
      scientificName: "Matricaria chamomilla L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Chabrets ekstrakti",
      nameRu: "Экстракт тимьяна ползучего",
      nameEn: "Thyme extract",
      scientificName: "Thymus vulgaris L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Yalpiz ekstrakti",
      nameRu: "Экстракт мяты перечной",
      nameEn: "Peppermint extract",
      scientificName: "Mentha piperita L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Zveroboy ekstrakti",
      nameRu: "Экстракт зверобоя продырявленного",
      nameEn: "St. John's wort extract",
      scientificName: "Hypericum perforatum L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Devyasil ekstrakti",
      nameRu: "Экстракт девясила высокого",
      nameEn: "Elecampane extract",
      scientificName: "Inula helenium L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Mingyaproq ekstrakti",
      nameRu: "Экстракт тысячелистника обыкновенного",
      nameEn: "Yarrow extract",
      scientificName: "Achillea millefolium L.",
      amount: "20 mg",
      per: "—"
    },
    {
      name: "Fenxel ekstrakti",
      nameRu: "Экстракт фенхеля обыкновенного",
      nameEn: "Fennel extract",
      scientificName: "Foeniculum vulgare Mill.",
      amount: "20 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Gaz va meteorizmni yengillashtirish",
      titleRu: "Облегчение метеоризма",
      titleEn: "Relief from bloating",
      description: "Oshqozon-ichak tizimida gaz to‘planishi bilan bog‘liq noqulayliklarni kamaytirishga yordam beradi",
      descriptionRu: "Помогает облегчить дискомфорт, связанный со скоплением газов в ЖКТ",
      descriptionEn: "Helps relieve discomfort associated with gas accumulation in the gastrointestinal tract",
      icon: "💨"
    },
    {
      title: "Ovqat hazmini qo‘llab-quvvatlash",
      titleRu: "Поддержка пищеварения",
      titleEn: "Digestive support",
      description: "Ovqat hazm qilish bilan bog‘liq noqulayliklarni yengillashtirishga yordam beradi",
      descriptionRu: "Помогает облегчить дискомфорт, связанный с пищеварением",
      descriptionEn: "Helps relieve digestive discomfort",
      icon: "🍽️"
    },
    {
      title: "Ichak kolikalarida yordam",
      titleRu: "Помощь при кишечных коликах",
      titleEn: "Support during intestinal colic",
      description: "Ichak kolikasi bilan bog‘liq belgilarni yengillashtirish uchun mo‘ljallangan",
      descriptionRu: "Предназначен для облегчения симптомов кишечных колик",
      descriptionEn: "Designed to help relieve symptoms of intestinal colic",
      icon: "🌀"
    },
    {
      title: "O‘simlik ekstraktlari majmuasi",
      titleRu: "Комплекс растительных экстрактов",
      titleEn: "Herbal extract complex",
      description: "Tarkibida yetti xil dorivor o‘simlik ekstrakti mavjud",
      descriptionRu: "Содержит комплекс из семи растительных экстрактов",
      descriptionEn: "Contains a combination of seven herbal extracts",
      icon: "🌿"
    }
  ],

  ingredients: [
    {
      name: "Romashka ekstrakti",
      nameRu: "Экстракт ромашки",
      nameEn: "Chamomile extract",
      scientificName: "Matricaria chamomilla L.",
      icon: "🌼",
      benefits: [
        "An’anaviy ravishda ichak spazmlari va meteorizmda qo‘llanadi",
        "Hazm qilish bilan bog‘liq noqulayliklarni yengillashtirishda ishlatiladi"
      ],
      benefitsRu: [
        "Традиционно применяется при кишечных спазмах и метеоризме",
        "Используется для облегчения пищеварительного дискомфорта"
      ],
      benefitsEn: [
        "Traditionally used for intestinal spasms and bloating",
        "Used to help relieve digestive discomfort"
      ]
    },
    {
      name: "Chabrets ekstrakti",
      nameRu: "Экстракт чабреца",
      nameEn: "Thyme extract",
      scientificName: "Thymus vulgaris L.",
      icon: "🌿",
      benefits: [
        "An’anaviy ravishda ovqat hazmini qo‘llab-quvvatlash uchun ishlatiladi",
        "Qorin sohasidagi noqulayliklarni yengillashtirishda qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно используется для поддержки пищеварения",
        "Применяется для облегчения дискомфорта в животе"
      ],
      benefitsEn: [
        "Traditionally used to support digestion",
        "Used to help relieve abdominal discomfort"
      ]
    },
    {
      name: "Yalpiz ekstrakti",
      nameRu: "Экстракт мяты перечной",
      nameEn: "Peppermint extract",
      scientificName: "Mentha piperita L.",
      icon: "🌱",
      benefits: [
        "An’anaviy ravishda hazm qilish bilan bog‘liq noqulayliklarda ishlatiladi",
        "Ichak spazmlari bilan bog‘liq noqulayliklarni yengillashtirishda qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно применяется при пищеварительном дискомфорте",
        "Используется для облегчения дискомфорта, связанного с кишечными спазмами"
      ],
      benefitsEn: [
        "Traditionally used for digestive discomfort",
        "Used to help relieve discomfort associated with intestinal spasms"
      ]
    },
    {
      name: "Zveroboy ekstrakti",
      nameRu: "Экстракт зверобоя",
      nameEn: "St. John's wort extract",
      scientificName: "Hypericum perforatum L.",
      icon: "🌼",
      benefits: [
        "An’anaviy ravishda oshqozon-ichak tizimi bilan bog‘liq holatlarda qo‘llanadi",
        "Tarkibida o‘simlikka xos biologik faol moddalar mavjud"
      ],
      benefitsRu: [
        "Традиционно применяется при некоторых состояниях желудочно-кишечного тракта",
        "Содержит биологически активные вещества растительного происхождения"
      ],
      benefitsEn: [
        "Traditionally used for certain gastrointestinal conditions",
        "Contains plant-derived biologically active compounds"
      ]
    },
    {
      name: "Devyasil ekstrakti",
      nameRu: "Экстракт девясила",
      nameEn: "Elecampane extract",
      scientificName: "Inula helenium L.",
      icon: "🌿",
      benefits: [
        "An’anaviy ravishda ovqat hazm qilish tizimi bilan bog‘liq holatlarda ishlatiladi",
        "O‘simlik tarkibidagi tabiiy faol moddalarni o‘z ichiga oladi"
      ],
      benefitsRu: [
        "Традиционно используется при некоторых нарушениях пищеварения",
        "Содержит природные активные вещества растения"
      ],
      benefitsEn: [
        "Traditionally used for certain digestive complaints",
        "Contains naturally occurring plant compounds"
      ]
    },
    {
      name: "Mingyaproq ekstrakti",
      nameRu: "Экстракт тысячелистника",
      nameEn: "Yarrow extract",
      scientificName: "Achillea millefolium L.",
      icon: "🌾",
      benefits: [
        "An’anaviy ravishda ovqat hazm qilish bilan bog‘liq noqulayliklarda qo‘llanadi",
        "O‘simlikka xos biologik faol moddalarni o‘z ichiga oladi"
      ],
      benefitsRu: [
        "Традиционно применяется при пищеварительном дискомфорте",
        "Содержит биологически активные вещества растительного происхождения"
      ],
      benefitsEn: [
        "Traditionally used for digestive discomfort",
        "Contains plant-derived biologically active compounds"
      ]
    },
    {
      name: "Fenxel ekstrakti",
      nameRu: "Экстракт фенхеля",
      nameEn: "Fennel extract",
      scientificName: "Foeniculum vulgare Mill.",
      icon: "🌾",
      benefits: [
        "An’anaviy ravishda gaz to‘planishi va meteorizmda ishlatiladi",
        "Ichakdagi gaz bilan bog‘liq noqulayliklarni yengillashtirishda qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно используется при скоплении газов и метеоризме",
        "Применяется для облегчения дискомфорта, связанного с кишечными газами"
      ],
      benefitsEn: [
        "Traditionally used for gas accumulation and bloating",
        "Used to help relieve discomfort associated with intestinal gas"
      ]
    }
  ],

  indications: [
    "Oshqozon-ichak traktida ortiqcha gaz hosil bo‘lishi va to‘planishi",
    "Meteorizm: qorin dam bo‘lishi, to‘lishish va bosim hissi",
    "Aerofagiya",
    "Dispepsiya",
    "Yangi tug‘ilgan chaqaloqlar va emizikli bolalarda ichak kolikasi",
    "Operatsiyalardan keyingi gaz hosil bo‘lishi"
  ],

  indicationsRu: [
    "Избыточное образование и скопление газов в желудочно-кишечном тракте",
    "Метеоризм: вздутие, чувство распирания и переполнения",
    "Аэрофагия",
    "Диспепсия",
    "Кишечные колики у новорождённых и грудных детей",
    "Повышенное газообразование после операций"
  ],

  indicationsEn: [
    "Excessive gas formation and accumulation in the gastrointestinal tract",
    "Bloating, abdominal fullness and pressure",
    "Aerophagia",
    "Dyspepsia",
    "Intestinal colic in newborns and infants",
    "Increased gas formation after surgery"
  ],

  usage: {
    dosage: "Yoshga qarab: yangi tug‘ilgan va emizikli chaqaloqlarga 0,5–1 ml har bir oziqlantirish vaqtida yoki undan oldin/keyin; 1–6 yoshdagi bolalarga 1–2,5 ml kuniga 3–4 marta; 7–12 yoshdagilarga 2,5–5 ml kuniga 3–4 marta; 12 yoshdan kattalar va kattalarga 5–7,5 ml kuniga 3–4 marta.",

    dosageRu: "В зависимости от возраста: новорождённым и грудным детям — 0,5–1 мл во время кормления или до/после каждого кормления; детям 1–6 лет — 1–2,5 мл 3–4 раза в сутки; детям 7–12 лет — 2,5–5 мл 3–4 раза в сутки; взрослым и детям старше 12 лет — 5–7,5 мл 3–4 раза в сутки.",

    dosageEn: "Dosage depends on age: newborns and infants — 0.5–1 ml during, before or after each feeding; children aged 1–6 years — 1–2.5 ml 3–4 times daily; children aged 7–12 years — 2.5–5 ml 3–4 times daily; adults and children over 12 years — 5–7.5 ml 3–4 times daily.",

    timing: "Ovqatdan oldin yoki keyin",
    timingRu: "До или после еды",
    timingEn: "Before or after meals",

    duration: "Qabul qilish kursi 14 kun. Takroriy kurs bir haftadan keyin. Davolash davomiyligi va dozani shifokor belgilaydi.",
    durationRu: "Курс приёма — 14 дней. Повторный курс возможен через неделю. Длительность лечения и дозу определяет врач.",
    durationEn: "The course is 14 days. A repeat course may be considered after one week. The doctor determines the dose and duration of treatment.",

    instruction: "Ishlatishdan oldin yaxshilab chayqatish",
    instructionRu: "Перед применением тщательно взболтать",
    instructionEn: "Shake well before use"
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik reaksiyasi yuzaga kelsa, qabul qilishni to‘xtatish kerak"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При развитии реакции повышенной чувствительности применение следует прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur rarely",
    "Discontinue use if a hypersensitivity reaction develops"
  ],

  overdose: "Hozirgi vaqtda dozani oshirib yuborish holatlari qayd etilmagan.",
  overdoseRu: "В настоящее время случаи передозировки не выявлены.",
  overdoseEn: "No cases of overdose have been reported to date.",

  interactions: "Yo‘riqnomada boshqa dori vositalari bilan salbiy ta’sirlar aniqlanmagani ko‘rsatilgan. Biroq tarkibidagi zveroboy ko‘plab dorilar bilan o‘zaro ta’sirlashishi mumkin. Boshqa dori qabul qilayotgan bo‘lsangiz, shifokor yoki farmatsevt bilan maslahatlashing.",
  interactionsRu: "В инструкции указано, что отрицательные эффекты при сочетании с другими препаратами не выявлены. Однако зверобой может взаимодействовать со многими лекарствами. Если вы принимаете другие препараты, проконсультируйтесь с врачом или фармацевтом.",
  interactionsEn: "The leaflet reports no observed adverse interactions with other medicines. However, St. John's wort can interact with many medications. Consult a doctor or pharmacist if you take other medicines.",

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlash",
    "Ochilgandan keyin salqin joyda saqlash",
    "Qizdirmaslik va muzlatmaslik",
    "Bolalar qo‘li yetmaydigan joyda saqlash"
  ],

  storageRu: [
    "Хранить при температуре от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "После вскрытия хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Store at temperatures between +2°C and +25°C",
    "Protect from light",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Keep out of reach of children"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "7 xil o‘simlik ekstrakti",
      textRu: "7 растительных экстрактов",
      textEn: "7 herbal extracts"
    },
    {
      text: "150 ml sirop",
      textRu: "Сироп объёмом 150 мл",
      textEn: "150 ml syrup"
    },
    {
      text: "Bolalar va kattalar uchun yoshga mos dozalar",
      textRu: "Дозировки для детей и взрослых с учётом возраста",
      textEn: "Age-based dosages for children and adults"
    },
    {
      text: "14 kunlik qabul kursi",
      textRu: "Курс приёма 14 дней",
      textEn: "14-day course"
    }
  ]
  },

  25: {
  id: 25,
  name: "GORLOZIN",
  nameRu: "ГОРЛОЗИН",
  nameEn: "GORLOZIN",

  tagline: "Tomoq va yuqori nafas yo‘llari uchun o‘simlik ekstraktlari majmuasi",
  taglineRu: "Комплекс растительных экстрактов для горла и верхних дыхательных путей",
  taglineEn: "A herbal extract complex for the throat and upper respiratory tract",

  image: gorlozin,
  pdf: "https://drive.google.com/file/d/1jWX8-xwGKfs9FkguEhtnpiDu5mkclSKo/view?usp=sharing",

  volume: "150 ml",

  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Syrup based on herbal extracts",

  rating: 4.7,
  reviews: 982,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",

  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Solyodka ekstrakti",
      nameRu: "Экстракт солодки",
      nameEn: "Licorice extract",
      scientificName: "Glycyrrhiza glabra",
      amount: "30 mg",
      per: "—"
    },
    {
      name: "Kalendula ekstrakti",
      nameRu: "Экстракт календулы",
      nameEn: "Calendula extract",
      scientificName: "Calendula officinalis",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Romashka ekstrakti",
      nameRu: "Экстракт ромашки",
      nameEn: "Chamomile extract",
      scientificName: "Matricaria chamomilla",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Kurkuma ekstrakti",
      nameRu: "Экстракт куркумы",
      nameEn: "Turmeric extract",
      scientificName: "Curcuma longa",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Zanjabil ekstrakti",
      nameRu: "Экстракт имбиря",
      nameEn: "Ginger extract",
      scientificName: "Zingiber officinale",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Kubeba qalampiri ekstrakti",
      nameRu: "Экстракт перца кубебы",
      nameEn: "Cubeb pepper extract",
      scientificName: "Piper cubeba L.",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Aloe ekstrakti",
      nameRu: "Экстракт алоэ",
      nameEn: "Aloe extract",
      scientificName: "Aloe arborescens",
      amount: "10 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Tomoqni parvarish qilish",
      titleRu: "Уход за горлом",
      titleEn: "Throat care",
      description: "Tomoq va og‘iz bo‘shlig‘i shilliq qavatini parvarish qilish uchun mo‘ljallangan",
      descriptionRu: "Предназначен для ухода за слизистой оболочкой горла и полости рта",
      descriptionEn: "Designed to support care of the throat and oral mucosa",
      icon: "🗣️"
    },
    {
      title: "Yallig‘lanish bilan bog‘liq noqulayliklarda",
      titleRu: "При воспалительном дискомфорте",
      titleEn: "For inflammatory discomfort",
      description: "Tarkibidagi o‘simlik ekstraktlari an’anaviy ravishda yallig‘lanish bilan bog‘liq holatlarda qo‘llanadi",
      descriptionRu: "Входящие в состав растительные экстракты традиционно применяются при состояниях, сопровождающихся воспалением",
      descriptionEn: "The herbal extracts are traditionally used for conditions associated with inflammation",
      icon: "🌿"
    },
    {
      title: "Balg‘am ajralishini qo‘llab-quvvatlash",
      titleRu: "Поддержка отхождения мокроты",
      titleEn: "Support for mucus clearance",
      description: "Yo‘riqnomada balg‘am ajralishiga yordam beruvchi xususiyatlar qayd etilgan",
      descriptionRu: "В инструкции отмечены свойства, способствующие отхождению мокроты",
      descriptionEn: "The leaflet describes properties that may support mucus clearance",
      icon: "🫁"
    },
    {
      title: "Yetti xil o‘simlik ekstrakti",
      titleRu: "Семь растительных экстрактов",
      titleEn: "Seven herbal extracts",
      description: "Tarkibida yetti xil o‘simlik ekstrakti mavjud",
      descriptionRu: "Содержит семь растительных экстрактов",
      descriptionEn: "Contains seven herbal extracts",
      icon: "🌱"
    }
  ],

  ingredients: [
    {
      name: "Solyodka",
      nameRu: "Солодка",
      nameEn: "Licorice",
      scientificName: "Glycyrrhiza glabra",
      icon: "🌿",
      benefits: [
        "An’anaviy ravishda tomoqni yumshatish uchun qo‘llanadi",
        "Balg‘am ajralishini qo‘llab-quvvatlashda ishlatiladi",
        "Yallig‘lanish bilan bog‘liq noqulayliklarda an’anaviy qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно применяется для смягчения горла",
        "Используется для поддержки отхождения мокроты",
        "Традиционно применяется при воспалительном дискомфорте"
      ],
      benefitsEn: [
        "Traditionally used to soothe the throat",
        "Used to support mucus clearance",
        "Traditionally used for inflammatory discomfort"
      ]
    },
    {
      name: "Kalendula",
      nameRu: "Календула",
      nameEn: "Calendula",
      scientificName: "Calendula officinalis",
      icon: "🌼",
      benefits: [
        "An’anaviy ravishda shilliq qavatlarni parvarish qilishda ishlatiladi",
        "Tinchlantiruvchi va yumshatuvchi xususiyatlari bilan tanilgan"
      ],
      benefitsRu: [
        "Традиционно используется для ухода за слизистыми оболочками",
        "Известна своими смягчающими и успокаивающими свойствами"
      ],
      benefitsEn: [
        "Traditionally used in mucosal care",
        "Known for its soothing and softening properties"
      ]
    },
    {
      name: "Romashka",
      nameRu: "Ромашка",
      nameEn: "Chamomile",
      scientificName: "Matricaria chamomilla",
      icon: "🌼",
      benefits: [
        "An’anaviy ravishda tomoq va og‘iz bo‘shlig‘i shilliq qavatini parvarish qilishda ishlatiladi",
        "Yallig‘lanish bilan bog‘liq noqulayliklarni yengillashtirish uchun an’anaviy qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно используется для ухода за слизистой горла и полости рта",
        "Применяется в традиционной практике для облегчения воспалительного дискомфорта"
      ],
      benefitsEn: [
        "Traditionally used in throat and oral mucosal care",
        "Traditionally used to help soothe inflammatory discomfort"
      ]
    },
    {
      name: "Kurkuma",
      nameRu: "Куркума",
      nameEn: "Turmeric",
      scientificName: "Curcuma longa",
      icon: "🟡",
      benefits: [
        "Tarkibida kurkumin kabi tabiiy birikmalar mavjud",
        "An’anaviy ravishda yallig‘lanish bilan bog‘liq holatlarda ishlatiladi"
      ],
      benefitsRu: [
        "Содержит природные соединения, включая куркумин",
        "Традиционно используется при состояниях, связанных с воспалением"
      ],
      benefitsEn: [
        "Contains natural compounds, including curcumin",
        "Traditionally used for conditions associated with inflammation"
      ]
    },
    {
      name: "Zanjabil",
      nameRu: "Имбирь",
      nameEn: "Ginger",
      scientificName: "Zingiber officinale",
      icon: "🫚",
      benefits: [
        "An’anaviy ravishda shamollash bilan bog‘liq noqulayliklarda ishlatiladi",
        "Yallig‘lanish bilan bog‘liq holatlarda an’anaviy qo‘llanadi"
      ],
      benefitsRu: [
        "Традиционно используется при дискомфорте, связанном с простудой",
        "Применяется в традиционной практике при воспалительных состояниях"
      ],
      benefitsEn: [
        "Traditionally used for discomfort associated with colds",
        "Traditionally used for inflammatory conditions"
      ]
    },
    {
      name: "Kubeba qalampiri",
      nameRu: "Перец кубеба",
      nameEn: "Cubeb pepper",
      scientificName: "Piper cubeba L.",
      icon: "🌶️",
      benefits: [
        "Tarkibida o‘simlikka xos efir moylari va faol birikmalar mavjud",
        "Yo‘riqnomada balg‘am ajralishini qo‘llab-quvvatlovchi xususiyati qayd etilgan"
      ],
      benefitsRu: [
        "Содержит характерные для растения эфирные масла и активные соединения",
        "В инструкции отмечено свойство, способствующее отхождению мокроты"
      ],
      benefitsEn: [
        "Contains plant-derived essential oils and active compounds",
        "The leaflet describes a property that may support mucus clearance"
      ]
    },
    {
      name: "Aloe",
      nameRu: "Алоэ",
      nameEn: "Aloe",
      scientificName: "Aloe arborescens",
      icon: "🌱",
      benefits: [
        "An’anaviy ravishda teri va to‘qimalarni parvarish qilishda ishlatiladi",
        "Yo‘riqnomada to‘qimalarning tiklanish jarayonini qo‘llab-quvvatlashi qayd etilgan"
      ],
      benefitsRu: [
        "Традиционно используется для ухода за кожей и тканями",
        "В инструкции отмечена поддержка процессов восстановления тканей"
      ],
      benefitsEn: [
        "Traditionally used in skin and tissue care",
        "The leaflet describes support for tissue recovery processes"
      ]
    }
  ],

  indications: [
    "Surunkali va o‘tkir tonzillitda kompleks yordamchi vosita sifatida",
    "Og‘iz bo‘shlig‘ining infeksion-yallig‘lanish kasalliklarida shilliq qavatni parvarish qilish",
    "O‘tkir laringit",
    "O‘tkir tonzillit",
    "Yuqori nafas yo‘llarining o‘tkir infeksiyalari",
    "Surunkali atrofik faringit"
  ],

  indicationsRu: [
    "В качестве вспомогательного средства при комплексном устранении хронического и острого тонзиллита",
    "Для обработки слизистой оболочки полости рта при инфекционно-воспалительных заболеваниях",
    "Острый ларингит",
    "Острый тонзиллит",
    "Острые инфекции верхних дыхательных путей",
    "Хронический атрофический фарингит"
  ],

  indicationsEn: [
    "As an adjunct in the comprehensive management of acute and chronic tonsillitis",
    "For oral mucosal care in infectious and inflammatory conditions",
    "Acute laryngitis",
    "Acute tonsillitis",
    "Acute upper respiratory tract infections",
    "Chronic atrophic pharyngitis"
  ],

  usage: {
    dosage: "Ichga qabul qilish: 1–6 yoshdagi bolalarga 1–2 ml kuniga 3 marta; 7–12 yoshdagilarga 2–2,5 ml kuniga 3 marta; 12 yoshdan katta o‘smirlar va kattalarga 2,5–5 ml kuniga 3 marta.",

    dosageRu: "Внутрь: детям 1–6 лет — по 1–2 мл 3 раза в день; детям 7–12 лет — по 2–2,5 мл 3 раза в день; подросткам старше 12 лет и взрослым — по 2,5–5 мл 3 раза в день.",

    dosageEn: "Oral use: children aged 1–6 years — 1–2 ml 3 times daily; children aged 7–12 years — 2–2.5 ml 3 times daily; adolescents over 12 years and adults — 2.5–5 ml 3 times daily.",

    timing: "Yo‘riqnomada ichga qabul qilish vaqti alohida ko‘rsatilmagan.",
    timingRu: "В инструкции отдельно не указано время приёма внутрь.",
    timingEn: "The leaflet does not specify a particular timing for oral administration.",

    duration: "Terapevtik ta’sirga erishish uchun kamida 15 kun qabul qilish tavsiya etilgan. Kurs davomiyligini shifokor belgilaydi.",
    durationRu: "Для достижения терапевтического эффекта рекомендуется принимать не менее 15 дней. Продолжительность курса определяет врач.",
    durationEn: "A minimum course of 15 days is stated for the intended therapeutic effect. The doctor determines the course duration.",

    instruction: "Ishlatishdan oldin yaxshilab chayqatish. Poloska qilish uchun siropni tozalangan suv bilan 1:6 nisbatda suyultirish. Yo‘riqnomada kuniga 6–10 marta, har bir chayish kamida 30 soniya davom etishi ko‘rsatilgan.",
    instructionRu: "Перед применением тщательно взболтать. Для полоскания развести сироп очищенной водой в соотношении 1:6. Согласно инструкции, полоскать 6–10 раз в сутки, не менее 30 секунд каждое полоскание.",
    instructionEn: "Shake well before use. For gargling, dilute the syrup with purified water at a ratio of 1:6. The leaflet specifies 6–10 gargles per day, with each gargle lasting at least 30 seconds.",

    externalUse: "Faqat yo‘riqnomada ko‘rsatilgan tartibda, suyultirilgan eritma bilan tomoqni chayish uchun.",
    externalUseRu: "Для полоскания горла разведённым раствором согласно инструкции.",
    externalUseEn: "For gargling with a diluted solution as directed in the leaflet."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik reaksiyasi yuzaga kelsa, preparatni qo‘llashni to‘xtatish kerak"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur rarely",
    "Discontinue use if a hypersensitivity reaction develops"
  ],

  overdose: "Yo‘riqnomada hozirgi vaqtgacha dozani oshirib yuborish holatlari aniqlanmagani ko‘rsatilgan.",
  overdoseRu: "В инструкции указано, что на данный момент случаи передозировки не выявлены.",
  overdoseEn: "The leaflet states that no cases of overdose have been reported to date.",

  interactions: "Yo‘riqnomada boshqa dori vositalari bilan salbiy ta’sirlar aniqlanmagani qayd etilgan. Biroq solyodka va zveroboy ayrim dorilar bilan o‘zaro ta’sirlashishi mumkin. Boshqa dori vositalarini qabul qilayotgan bo‘lsangiz, shifokor yoki farmatsevt bilan maslahatlashing.",
  interactionsRu: "В инструкции указано, что отрицательные эффекты при сочетании с другими препаратами не выявлены. Однако солодка и зверобой могут взаимодействовать с некоторыми лекарствами. Если вы принимаете другие препараты, проконсультируйтесь с врачом или фармацевтом.",
  interactionsEn: "The leaflet reports no observed adverse interactions with other medicines. However, licorice and St. John's wort may interact with certain medications. Consult a doctor or pharmacist if you take other medicines.",

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlash",
    "Ochilgandan keyin salqin joyda saqlash",
    "Qizdirmaslik va muzlatmaslik",
    "Bolalar qo‘li yetmaydigan joyda saqlash"
  ],

  storageRu: [
    "Хранить при температуре от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "После вскрытия хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Store at temperatures between +2°C and +25°C",
    "Protect from light",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Keep out of reach of children"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "7 xil o‘simlik ekstrakti",
      textRu: "7 растительных экстрактов",
      textEn: "7 herbal extracts"
    },
    {
      text: "150 ml hajm",
      textRu: "Объём 150 мл",
      textEn: "150 ml volume"
    },
    {
      text: "Ichga qabul qilish va tomoqni chayish",
      textRu: "Приём внутрь и полоскание горла",
      textEn: "Oral use and gargling"
    },
    {
      text: "Yoshga qarab belgilangan dozalar",
      textRu: "Дозировки с учётом возраста",
      textEn: "Age-based dosage instructions"
    }
  ]
  },

  26: {
  id: 26,
  name: "DENTOVITAL",
  nameRu: "ДЕНТОВИТАЛ",
  nameEn: "DENTOVITAL",

  tagline: "Og‘iz bo‘shlig‘i va tishlar salomatligi uchun",
  taglineRu: "Для здоровья полости рта и зубов",
  taglineEn: "For oral and dental health",

  image: dentovital,
  pdf: "https://drive.google.com/file/d/1yP41v4-1XUdxwOzgkiOCD0-27kz_ZQ2K/view?usp=sharing",

  volume: "150 ml",
  form: "Og‘iz chayish siropi",
  formRu: "Сироп для полоскания полости рта",
  formEn: "Oral rinse syrup",

  rating: 4.8,
  reviews: 1120,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Shalfey (Salvia officinalis L.)",
      nameRu: "Экстракт шалфея",
      nameEn: "Sage extract",
      amount: "15 mg",
      per: "—"
    },
    {
      name: "Solyodka (Glycyrrhiza glabra L.)",
      nameRu: "Экстракт солодки",
      nameEn: "Licorice extract",
      amount: "15 mg",
      per: "—"
    },
    {
      name: "Mingbarg (Achillea millefolium)",
      nameRu: "Экстракт тысячелистника",
      nameEn: "Yarrow extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Romashka (Matricaria)",
      nameRu: "Экстракт ромашки",
      nameEn: "Chamomile extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Kalendula (Calendula officinalis)",
      nameRu: "Экстракт календулы",
      nameEn: "Calendula extract",
      amount: "10 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Antimikrob ta’sir",
      titleRu: "Противомикробное действие",
      titleEn: "Antimicrobial action",
      description: "Yo‘riqnomada mikroblarga qarshi ta’sir ko‘rsatilgani qayd etilgan",
      descriptionRu: "Согласно инструкции, обладает противомикробным действием",
      descriptionEn: "The leaflet describes an antimicrobial action",
      icon: "🦠"
    },
    {
      title: "Yallig‘lanishga qarshi",
      titleRu: "Противовоспалительное действие",
      titleEn: "Anti-inflammatory action",
      description: "Og‘iz bo‘shlig‘idagi yallig‘lanish holatlarida qo‘llash uchun mo‘ljallangan",
      descriptionRu: "Предназначен для применения при воспалительных состояниях полости рта",
      descriptionEn: "Intended for use in inflammatory conditions of the oral cavity",
      icon: "🔥"
    },
    {
      title: "Burishtiruvchi ta’sir",
      titleRu: "Вяжущее действие",
      titleEn: "Astringent action",
      description: "Yo‘riqnomada burishtiruvchi xususiyati ko‘rsatilgan",
      descriptionRu: "В инструкции указано вяжущее действие",
      descriptionEn: "The leaflet describes an astringent action",
      icon: "🌿"
    },
    {
      title: "Mahalliy og‘riqsizlantirish",
      titleRu: "Местное анестезирующее действие",
      titleEn: "Local anesthetic action",
      description: "Mahalliy og‘riqsizlantiruvchi ta’sirga ega deb ko‘rsatilgan",
      descriptionRu: "В инструкции заявлено местное анестезирующее действие",
      descriptionEn: "The leaflet describes a local anesthetic action",
      icon: "🦷"
    },
    {
      title: "Antiseptik ta’sir",
      titleRu: "Антисептическое действие",
      titleEn: "Antiseptic action",
      description: "Og‘iz bo‘shlig‘i gigiyenasida qo‘llash uchun mo‘ljallangan",
      descriptionRu: "Предназначен для применения в гигиене полости рта",
      descriptionEn: "Intended for use in oral hygiene",
      icon: "🧴"
    }
  ],

  ingredients: [
    {
      name: "Shalfey",
      nameRu: "Шалфей",
      nameEn: "Sage",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Yallig‘lanishga qarshi ta’sir yo‘riqnomada qayd etilgan",
        "Antimikrob ta’sir yo‘riqnomada qayd etilgan"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Противовоспалительное действие указано в инструкции",
        "Противомикробное действие указано в инструкции"
      ]
    },
    {
      name: "Solyodka",
      nameRu: "Солодка",
      nameEn: "Licorice",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ]
    },
    {
      name: "Mingbarg",
      nameRu: "Тысячелистник",
      nameEn: "Yarrow",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ]
    },
    {
      name: "Romashka",
      nameRu: "Ромашка",
      nameEn: "Chamomile",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ]
    },
    {
      name: "Kalendula",
      nameRu: "Календула",
      nameEn: "Calendula",
      icon: "🌸",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ]
    }
  ],

  indications: [
    "Og‘iz bo‘shlig‘ining infeksion-yallig‘lanish kasalliklari",
    "Stomatit: o‘tkir, aftoz, bakterial va yarali-eroziv shakllari",
    "Parodontit",
    "Gingivit: o‘tkir, surunkali, yarali-nekrotik va atrofik shakllari",
    "Odontogen periostit (flyus)",
    "Singada kompleks davolash tarkibida",
    "Olinadigan protezlarni gigiyenik tozalash",
    "Og‘izdan yoqimsiz hid kelishini bartaraf etishga yordam berish"
  ],

  indicationsRu: [
    "Инфекционно-воспалительные заболевания полости рта",
    "Стоматит: острый, афтозный, бактериальный и язвенно-эрозивный",
    "Пародонтит",
    "Гингивит: острый, хронический, язвенно-некротический и атрофический",
    "Одонтогенный периостит (флюс)",
    "В составе комплексной терапии цинги",
    "Гигиеническая обработка съёмных зубных протезов",
    "Для устранения неприятного запаха изо рта"
  ],

  indicationsEn: [
    "Infectious and inflammatory diseases of the oral cavity",
    "Acute, aphthous, bacterial and ulcerative-erosive stomatitis",
    "Periodontitis",
    "Acute, chronic, ulcerative-necrotic and atrophic gingivitis",
    "Odontogenic periostitis",
    "As part of комплекс treatment for scurvy",
    "Hygienic cleaning of removable dentures",
    "For addressing unpleasant mouth odor"
  ],

  usage: {
    dosage: "10–15 ml preparatni 100 g xona haroratidagi suvga aralashtiring. O‘tkir holatlarda doza 30 ml gacha oshirilishi mumkin.",
    dosageRu: "Развести 10–15 мл препарата в 100 г воды комнатной температуры. При острых заболеваниях дозу можно увеличить до 30 мл.",
    dosageEn: "Dilute 10–15 ml of the product in 100 g of room-temperature water. For acute conditions, the dose may be increased to 30 ml.",

    timing: "Ovqatdan keyin yoki kun davomida tavsiya etilgan tartibda",
    timingRu: "После еды или в соответствии с рекомендованным режимом",
    timingEn: "After meals or according to the recommended schedule",

    duration: "7 kun",
    durationRu: "7 дней",
    durationEn: "7 days",

    instruction: "Og‘iz bo‘shlig‘ini kuniga 3–4 marta yoki har ovqatdan keyin chayish. Davolash davomiyligi va dozani shifokor belgilaydi.",
    instructionRu: "Полоскать полость рта 3–4 раза в сутки или после каждого приёма пищи. Длительность курса и дозу определяет врач.",
    instructionEn: "Rinse the mouth 3–4 times daily or after each meal. The doctor determines the dose and treatment duration.",

    method: "Faqat og‘izni chayish uchun. Eritmani yutmaslik kerak.",
    methodRu: "Только для полоскания полости рта. Раствор не следует проглатывать.",
    methodEn: "For oral rinsing only. Do not swallow the solution."
  },

  contraindications: [
    "Preparat tarkibidagi alohida komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik reaksiyasi paydo bo‘lsa, qo‘llashni to‘xtatish kerak"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При появлении реакции повышенной чувствительности применение необходимо прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Discontinue use if a hypersensitivity reaction develops"
  ],

  overdose: {
    uz: "Hozirgi vaqtda dozani oshirib yuborish holatlari qayd etilmagan.",
    ru: "В настоящее время случаи передозировки не выявлены.",
    en: "No cases of overdose have been reported to date."
  },

  interactions: {
    uz: "Yo‘riqnomaga ko‘ra, boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan.",
    ru: "Согласно инструкции, отрицательных эффектов при применении с другими лекарственными средствами не выявлено.",
    en: "According to the leaflet, no adverse interactions with other medicines have been identified."
  },

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar ololmaydigan joyda saqlang",
    "Flakon ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang",
    "Ishlatishdan oldin yaxshilab chayqating"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "Хранить в недоступном для детей месте",
    "После вскрытия флакона хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Перед применением тщательно взболтать"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store protected from light",
    "Keep out of reach of children",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Shake thoroughly before use"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "Og‘iz bo‘shlig‘i gigiyenasi",
      textRu: "Гигиена полости рта",
      textEn: "Oral hygiene"
    },
    {
      text: "O‘simlik ekstraktlari",
      textRu: "Растительные экстракты",
      textEn: "Herbal extracts"
    },
    {
      text: "Chayish uchun",
      textRu: "Для полоскания",
      textEn: "For oral rinsing"
    },
    {
      text: "150 ml hajm",
      textRu: "Объём 150 мл",
      textEn: "150 ml volume"
    }
  ]
  },

  27: {
  id: 27,
  name: "DEPARAZITOL",
  nameRu: "ДЕПАРАЗИТОЛ",
  nameEn: "DEPARAZITOL",

  tagline: "Parazitlarga qarshi o‘simlik ekstraktlari asosidagi sirop",
  taglineRu: "Растительный сироп, заявленный как средство против гельминтов",
  taglineEn: "Herbal syrup marketed for use against parasitic worms",

  image: deparazitol,
  pdf: "https://drive.google.com/file/d/1BSKYAaf5vEBUE62FwW5fz1HAB5mxYEkz/view?usp=sharing",

  volume: "150 ml",
  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Herbal extract syrup",

  rating: 4.6,
  reviews: 742,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Pijma ekstrakti (Tanacetum vulgare L.)",
      nameRu: "Экстракт пижмы",
      nameEn: "Tansy extract",
      amount: "300 mg",
      per: "—"
    },
    {
      name: "Romashka ekstrakti (Matricaria chamomilla L.)",
      nameRu: "Экстракт ромашки",
      nameEn: "Chamomile extract",
      amount: "200 mg",
      per: "—"
    },
    {
      name: "Zveroboy ekstrakti (Hypericum L.)",
      nameRu: "Экстракт зверобоя",
      nameEn: "St. John's wort extract",
      amount: "300 mg",
      per: "—"
    },
    {
      name: "Mingbarg ekstrakti (Achillea millefolium L.)",
      nameRu: "Экстракт тысячелистника",
      nameEn: "Yarrow extract",
      amount: "200 mg",
      per: "—"
    },
    {
      name: "Bo‘znoch ekstrakti (Helichrysum arenarium L.)",
      nameRu: "Экстракт бессмертника",
      nameEn: "Sandy everlasting extract",
      amount: "200 mg",
      per: "—"
    },
    {
      name: "Oddiy qovoq urug‘i ekstrakti (Cucurbita pepo L.)",
      nameRu: "Экстракт семян тыквы обыкновенной",
      nameEn: "Pumpkin seed extract",
      amount: "300 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Antigelmint ta’sir",
      titleRu: "Антигельминтное действие",
      titleEn: "Anthelmintic action",
      description: "Yo‘riqnomada ayrim gelmintlarga qarshi qo‘llanishi ko‘rsatilgan",
      descriptionRu: "В инструкции заявлено применение против ряда гельминтов",
      descriptionEn: "The leaflet describes use against several types of parasitic worms",
      icon: "🪱"
    },
    {
      title: "O‘simlik ekstraktlari majmuasi",
      titleRu: "Комплекс растительных экстрактов",
      titleEn: "Herbal extract complex",
      description: "Tarkibida oltita o‘simlik ekstrakti mavjud",
      descriptionRu: "Содержит шесть растительных экстрактов",
      descriptionEn: "Contains six plant extracts",
      icon: "🌿"
    },
    {
      title: "Qovoq urug‘i ekstrakti",
      titleRu: "Экстракт семян тыквы",
      titleEn: "Pumpkin seed extract",
      description: "O‘simlik tarkibining bir qismi",
      descriptionRu: "Один из компонентов растительного состава",
      descriptionEn: "One of the ingredients in the herbal formula",
      icon: "🎃"
    }
  ],

  ingredients: [
    {
      name: "Pijma",
      nameRu: "Пижма",
      nameEn: "Tansy",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Yo‘riqnomada antigelmint tarkibiy qism sifatida keltirilgan"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "В инструкции указана как компонент антигельминтного средства"
      ],
      benefitsEn: [
        "Plant extract",
        "Listed in the leaflet as part of the anthelmintic formula"
      ]
    },
    {
      name: "Romashka",
      nameRu: "Ромашка",
      nameEn: "Chamomile",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Zveroboy",
      nameRu: "Зверобой",
      nameEn: "St. John's wort",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Mingbarg",
      nameRu: "Тысячелистник",
      nameEn: "Yarrow",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Bo‘znoch",
      nameRu: "Бессмертник",
      nameEn: "Sandy everlasting",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Qovoq urug‘i",
      nameRu: "Семена тыквы",
      nameEn: "Pumpkin seeds",
      icon: "🎃",
      benefits: [
        "O‘simlik ekstrakti",
        "Tarkibdagi o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    }
  ],

  indications: [
    "Enterobioz",
    "Askarioz",
    "Ankilostomidoz",
    "Strongiloidoz",
    "Trixotsefalyoz",
    "Trixinellyoz",
    "Tenioz",
    "Aralash gelmintozlar"
  ],

  indicationsRu: [
    "Энтеробиоз",
    "Аскаридоз",
    "Анкилостомидоз",
    "Стронгилоидоз",
    "Трихоцефалёз",
    "Трихинеллёз",
    "Тениоз",
    "Смешанные гельминтозы"
  ],

  indicationsEn: [
    "Enterobiasis",
    "Ascariasis",
    "Hookworm infection",
    "Strongyloidiasis",
    "Trichuriasis",
    "Trichinellosis",
    "Taeniasis",
    "Mixed helminth infections"
  ],

  usage: {
    dosage: "3 yoshdan katta bolalar: enterobiozda 5 ml kuniga 1 marta; aralash gelmintozlarda 10 ml ertalab va kechqurun, 7 kun. 14 yoshdan katta bolalar va kattalar: trixinellyozda 1-kuni 10–15 ml kuniga 3 marta, 2-kuni 10–15 ml kuniga 4 marta, 3–14-kunlari 25 ml kuniga 3 marta. Askarioz, trixotsefalyoz, ankilostomidoz, tenioz, strongiloidoz va aralash gelmintozlarda 10 ml ertalab va kechqurun, 3 kun.",
    dosageRu: "Дети старше 3 лет: при энтеробиозе — 5 мл 1 раз в сутки; при смешанных гельминтозах — по 10 мл утром и вечером в течение 7 дней. Взрослые и дети старше 14 лет: при трихинеллёзе — в 1-й день по 10–15 мл 3 раза в сутки, во 2-й день по 10–15 мл 4 раза в сутки, с 3-го по 14-й день по 25 мл 3 раза в сутки. При аскаридозе, трихоцефалёзе, анкилостомидозе, тениозе, стронгилоидозе и смешанных гельминтозах — по 10 мл утром и вечером в течение 3 дней.",
    dosageEn: "Children over 3 years: for enterobiasis, 5 ml once daily; for mixed helminth infections, 10 ml in the morning and evening for 7 days. Adults and children over 14 years: for trichinellosis, 10–15 ml three times on day 1, 10–15 ml four times on day 2, and 25 ml three times daily from days 3 to 14. For ascariasis, trichuriasis, hookworm infection, taeniasis, strongyloidiasis and mixed helminth infections, 10 ml in the morning and evening for 3 days.",

    timing: "Og‘iz orqali, oz miqdordagi suv bilan",
    timingRu: "Внутрь, запивая небольшим количеством воды",
    timingEn: "Take orally with a small amount of water",

    duration: "Davolash davomiyligi tashxis va shifokor ko‘rsatmasiga bog‘liq. Yo‘riqnomada 1–3 oylik qabul muddati va oldingi kurs tugaganidan bir oy o‘tib takrorlash imkoniyati ham keltirilgan.",
    durationRu: "Продолжительность лечения зависит от диагноза и назначения врача. В инструкции также указана продолжительность приёма от 1 до 3 месяцев и возможность повторного курса через месяц после окончания предыдущего.",
    durationEn: "Treatment duration depends on the diagnosis and the doctor's instructions. The leaflet also mentions a 1–3 month period of use and the possibility of repeating a course one month after the previous course ends.",

    instruction: "Ishlatishdan oldin yaxshilab chayqating. Doza va davolash kursini shifokor belgilaydi. Yo‘riqnomada barcha oila a’zolarini bir vaqtda davolash tavsiya qilingan.",
    instructionRu: "Перед применением тщательно взболтать. Дозу и продолжительность лечения определяет врач. В инструкции рекомендуется одновременное лечение всех членов семьи.",
    instructionEn: "Shake thoroughly before use. The doctor determines the dose and treatment duration. The leaflet recommends simultaneous treatment of all family members."
  },

  contraindications: [
    "Preparat tarkibidagi alohida komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik reaksiyasi paydo bo‘lsa, qo‘llashni to‘xtatish kerak"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При появлении реакции повышенной чувствительности применение необходимо прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Discontinue use if a hypersensitivity reaction develops"
  ],

  overdose: {
    uz: "Yo‘riqnomada hozirgi vaqtgacha dozani oshirib yuborish holatlari aniqlanmagani qayd etilgan.",
    ru: "Согласно инструкции, случаи передозировки на данный момент не выявлены.",
    en: "According to the leaflet, no cases of overdose have been reported to date."
  },

  interactions: {
    uz: "Yo‘riqnomada boshqa dorilar bilan salbiy ta’sirlar aniqlanmagani aytilgan. Biroq tarkibidagi zveroboy ko‘plab dorilar bilan o‘zaro ta’sirlashishi mumkin. Qabul qilishdan oldin shifokor yoki farmatsevt bilan maslahatlashish zarur.",
    ru: "В инструкции указано, что отрицательных эффектов при сочетании с другими лекарствами не выявлено. Однако зверобой может взаимодействовать со многими препаратами. Перед применением необходима консультация врача или фармацевта.",
    en: "The leaflet reports no adverse interactions with other medicines. However, St. John's wort can interact with many medications. Consult a doctor or pharmacist before use."
  },

  warnings: {
    uz: [
      "Pijma tarkibida toksik ta’sirga ega bo‘lishi mumkin bo‘lgan moddalar mavjud. Shifokor nazoratisiz qo‘llamang.",
      "Zveroboy ko‘plab dori vositalari, jumladan ayrim kontratseptivlar, antikoagulyantlar va boshqa preparatlar bilan o‘zaro ta’sirlashishi mumkin.",
      "Gelmint infeksiyasini aniqlash va davolash uchun tibbiy tekshiruv zarur.",
      "Ushbu mahsulot shifokor belgilagan, samaradorligi tasdiqlangan antiparazitar davolash o‘rnini bosmaydi."
    ],
    ru: [
      "Пижма содержит вещества, которые могут оказывать токсическое действие. Не применяйте средство без наблюдения врача.",
      "Зверобой взаимодействует со многими лекарствами, включая некоторые контрацептивы, антикоагулянты и другие препараты.",
      "Для подтверждения гельминтной инфекции и выбора лечения необходимо медицинское обследование.",
      "Продукт не заменяет назначенное врачом противопаразитарное лечение с доказанной эффективностью."
    ],
    en: [
      "Tansy contains substances that may have toxic effects. Do not use without medical supervision.",
      "St. John's wort can interact with many medicines, including some contraceptives, anticoagulants and other drugs.",
      "Medical testing is necessary to confirm a parasitic infection and select appropriate treatment.",
      "This product is not a substitute for evidence-based antiparasitic treatment prescribed by a doctor."
    ]
  },

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar ololmaydigan joyda saqlang",
    "Flakon ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang",
    "Ishlatishdan oldin yaxshilab chayqating"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "Хранить в недоступном для детей месте",
    "После вскрытия флакона хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Перед применением тщательно взболтать"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store protected from light",
    "Keep out of reach of children",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Shake thoroughly before use"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "O‘simlik ekstraktlari",
      textRu: "Растительные экстракты",
      textEn: "Herbal extracts"
    },
    {
      text: "150 ml hajm",
      textRu: "Объём 150 мл",
      textEn: "150 ml volume"
    },
    {
      text: "Og‘iz orqali qabul qilish",
      textRu: "Для приёма внутрь",
      textEn: "For oral use"
    },
    {
      text: "Shifokor tavsiyasi bilan",
      textRu: "По назначению врача",
      textEn: "Use under medical supervision"
    }
  ]
  },

  28: {
  id: 28,
  name: "DERMOTONAL",
  nameRu: "ДЕРМОТОНАЛ",
  nameEn: "DERMOTONAL",

  tagline: "Teri parvarishi va mahalliy qo‘llash uchun o‘simlik ekstraktlari",
  taglineRu: "Растительный сироп для наружного и местного применения",
  taglineEn: "Herbal extract syrup for external and topical use",

  image: dermotonal,
  pdf: "https://drive.google.com/file/d/1jtJCe5JVghWt5Ae1pfx0bF2o-Z32Dfoa/view?usp=sharing",

  volume: "150 ml",
  form: "Tashqi va mahalliy qo‘llash uchun o‘simlik siropi",
  formRu: "Растительный сироп для наружного и местного применения",
  formEn: "Herbal syrup for external and topical use",

  rating: 4.7,
  reviews: 1015,

  manufacturer: "—",
  manufacturerRu: "—",
  manufacturerEn: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Dorivor verbena ekstrakti (Verbena officinalis)",
      nameRu: "Экстракт вербены лекарственной",
      nameEn: "Common vervain extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Teshikbarg zveroboy ekstrakti (Hypericum perforatum)",
      nameRu: "Экстракт зверобоя продырявленного",
      nameEn: "St. John's wort extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Mingbarg ekstrakti (Achillea millefolium)",
      nameRu: "Экстракт тысячелистника",
      nameEn: "Yarrow extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Romashka ekstrakti (Matricaria)",
      nameRu: "Экстракт ромашки",
      nameEn: "Chamomile extract",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Uch rangli fialka ekstrakti (Viola tricolor)",
      nameRu: "Экстракт фиалки трёхцветной",
      nameEn: "Wild pansy extract",
      amount: "10 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Antibakterial ta’sir",
      titleRu: "Антибактериальное действие",
      titleEn: "Antibacterial action",
      description: "Yo‘riqnomada antibakterial xususiyat qayd etilgan",
      descriptionRu: "В инструкции заявлено антибактериальное действие",
      descriptionEn: "Antibacterial action is stated in the product leaflet",
      icon: "🦠"
    },
    {
      title: "Antiallergik ta’sir",
      titleRu: "Противоаллергическое действие",
      titleEn: "Antiallergic action",
      description: "Yo‘riqnomada antiallergik xususiyat qayd etilgan",
      descriptionRu: "В инструкции заявлено противоаллергическое действие",
      descriptionEn: "Antiallergic action is stated in the product leaflet",
      icon: "🌿"
    },
    {
      title: "Zamburug‘larga qarshi ta’sir",
      titleRu: "Противогрибковое действие",
      titleEn: "Antifungal action",
      description: "Yo‘riqnomada zamburug‘larga qarshi xususiyat qayd etilgan",
      descriptionRu: "В инструкции заявлено противогрибковое действие",
      descriptionEn: "Antifungal action is stated in the product leaflet",
      icon: "🍄"
    },
    {
      title: "Teri parvarishi",
      titleRu: "Уход за кожей",
      titleEn: "Skin care",
      description: "Yo‘riqnomada terini tonusga keltirish va yumshatish xususiyati ko‘rsatilgan",
      descriptionRu: "В инструкции указаны тонизирующие и смягчающие свойства для кожи",
      descriptionEn: "The leaflet describes skin-toning and softening properties",
      icon: "🧴"
    },
    {
      title: "Burishtiruvchi va qoplovchi ta’sir",
      titleRu: "Вяжущее и обволакивающее действие",
      titleEn: "Astringent and coating action",
      description: "Mahalliy qo‘llash uchun mo‘ljallangan",
      descriptionRu: "Предназначен для местного применения",
      descriptionEn: "Intended for topical application",
      icon: "✨"
    }
  ],

  ingredients: [
    {
      name: "Verbena",
      nameRu: "Вербена лекарственная",
      nameEn: "Common vervain",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Mahsulot tarkibidagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Zveroboy",
      nameRu: "Зверобой продырявленный",
      nameEn: "St. John's wort",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Mahsulot tarkibidagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Mingbarg",
      nameRu: "Тысячелистник",
      nameEn: "Yarrow",
      icon: "🌿",
      benefits: [
        "O‘simlik ekstrakti",
        "Mahsulot tarkibidagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Romashka",
      nameRu: "Ромашка",
      nameEn: "Chamomile",
      icon: "🌼",
      benefits: [
        "O‘simlik ekstrakti",
        "Mahsulot tarkibidagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    },
    {
      name: "Uch rangli fialka",
      nameRu: "Фиалка трёхцветная",
      nameEn: "Wild pansy",
      icon: "🌸",
      benefits: [
        "O‘simlik ekstrakti",
        "Mahsulot tarkibidagi faol o‘simlik komponentlaridan biri"
      ],
      benefitsRu: [
        "Растительный экстракт",
        "Один из растительных компонентов состава"
      ],
      benefitsEn: [
        "Plant extract",
        "One of the herbal ingredients"
      ]
    }
  ],

  indications: [
    "Yuzning yog‘li seboreyasi",
    "Ekssudativ diatez va teri qichishishi",
    "Dermatit",
    "Trofik yaralar",
    "Furunkullar va abssesslar",
    "Yiringli teri kasalliklari va ekzema",
    "Flegmonoz akne",
    "Keratodermiya",
    "Trixofitiya",
    "Yo‘riqnomada ko‘rsatilgan ayrim ginekologik holatlar"
  ],

  indicationsRu: [
    "Жирная себорея лица",
    "Экссудативный диатез и кожный зуд",
    "Дерматит",
    "Трофические язвы",
    "Фурункулы и абсцессы",
    "Гнойничковые заболевания кожи и экзема",
    "Флегмонозные угри",
    "Кератодермия",
    "Трихофития",
    "Некоторые гинекологические состояния, указанные в инструкции"
  ],

  indicationsEn: [
    "Oily facial seborrhea",
    "Exudative diathesis and itchy skin",
    "Dermatitis",
    "Trophic ulcers",
    "Furuncles and abscesses",
    "Pustular skin conditions and eczema",
    "Phlegmonous acne",
    "Keratoderma",
    "Trichophytosis",
    "Certain gynecological conditions listed in the leaflet"
  ],

  usage: {
    dosage: "Faqat tashqi va mahalliy qo‘llash uchun. Vannalar: 0–3 yoshdagi chaqaloqlar uchun 1 osh qoshiq sirop + 0,7 litr iliq qaynatilgan suv; 4–14 yoshdagilar uchun 2 osh qoshiq + 0,7 litr suv; kattalar uchun 1:6 nisbatda suyultirish. Primочки: siropni 1:10 nisbatda suyultirib, tamponni namlash va bog‘lam ostiga qo‘yish. Og‘izni chayish: 1 osh qoshiq sirop + 100 ml iliq qaynatilgan suv. Ginekologik qo‘llash: 1 osh qoshiq sirop + 200 ml iliq qaynatilgan suv.",
    dosageRu: "Только для наружного и местного применения. Ванночки: младенцам 0–3 лет — 1 столовая ложка сиропа на 0,7 л тёплой кипячёной воды; детям 4–14 лет — 2 столовые ложки на 0,7 л воды; взрослым — разведение 1:6. Примочки: смочить тампон сиропом, разведённым 1:10, и наложить под повязку. Полоскание рта: 1 столовая ложка сиропа на 100 мл тёплой кипячёной воды. Гинекологическое применение: 1 столовая ложка сиропа на 200 мл тёплой кипячёной воды.",
    dosageEn: "For external and topical use only. Baths: for infants aged 0–3 years, dilute 1 tablespoon of syrup in 0.7 L of warm boiled water; for children aged 4–14 years, dilute 2 tablespoons in 0.7 L of water; for adults, dilute at a 1:6 ratio. Compresses: soak a tampon in syrup diluted 1:10 and apply under a dressing. Mouth rinse: 1 tablespoon of syrup in 100 ml of warm boiled water. Gynecological use: 1 tablespoon of syrup in 200 ml of warm boiled water.",

    timing: "Qo‘llash usuli va davomiyligini shifokor belgilaydi",
    timingRu: "Способ и продолжительность применения определяет врач",
    timingEn: "The doctor determines the method and duration of use",

    duration: "Shifokor ko‘rsatmasiga binoan",
    durationRu: "По назначению врача",
    durationEn: "As directed by a doctor",

    instruction: "Ishlatishdan oldin yaxshilab chayqating. Mahsulotni ichmang. Faqat ko‘rsatilgan usullarda tashqi yoki mahalliy qo‘llang.",
    instructionRu: "Перед применением тщательно взболтать. Не принимать внутрь. Использовать только наружно или местно указанными способами.",
    instructionEn: "Shake thoroughly before use. Do not swallow. Use only externally or topically by the methods described."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik",
    "Menstruatsiya davri"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата",
    "Менструальный период"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product's ingredients",
    "Menstruation"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qo‘llashni to‘xtating"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При появлении признаков повышенной чувствительности применение необходимо прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Discontinue use if signs of hypersensitivity develop"
  ],

  overdose: {
    uz: "Yo‘riqnomada hozirgi vaqtgacha dozani oshirib yuborish holatlari aniqlanmagani qayd etilgan.",
    ru: "Согласно инструкции, случаи передозировки на данный момент не выявлены.",
    en: "According to the leaflet, no cases of overdose have been reported to date."
  },

  interactions: {
    uz: "Yo‘riqnomada boshqa dorilar bilan salbiy ta’sirlar aniqlanmagani ko‘rsatilgan. Zveroboy ayrim dori vositalari bilan o‘zaro ta’sirlashishi mumkin. Bir vaqtda boshqa dorilar ishlatilsa, shifokor bilan maslahatlashish kerak.",
    ru: "В инструкции указано, что отрицательных эффектов при сочетании с другими препаратами не выявлено. Зверобой может взаимодействовать с некоторыми лекарствами. При одновременном применении других средств проконсультируйтесь с врачом.",
    en: "The leaflet reports no adverse interactions with other medicines. St. John's wort may interact with certain medications. Consult a doctor if using other medicines at the same time."
  },

  warnings: {
    uz: [
      "Preparat faqat tashqi va mahalliy qo‘llash uchun mo‘ljallangan. Ichish mumkin emas.",
      "Ko‘zga tushishidan saqlaning.",
      "Chaqaloqlar va bolalarda qo‘llashdan oldin pediatr bilan maslahatlashish kerak.",
      "Teri kasalliklari, trofik yaralar va yiringli jarayonlar shifokor ko‘rigini talab qiladi.",
      "Ginekologik qo‘llash faqat shifokor tavsiyasi va nazorati ostida amalga oshirilishi kerak."
    ],
    ru: [
      "Препарат предназначен только для наружного и местного применения. Не принимать внутрь.",
      "Избегать попадания в глаза.",
      "Перед применением у младенцев и детей необходимо проконсультироваться с педиатром.",
      "Кожные заболевания, трофические язвы и гнойные процессы требуют осмотра врача.",
      "Гинекологическое применение допускается только по рекомендации и под наблюдением врача."
    ],
    en: [
      "The product is intended for external and topical use only. Do not swallow.",
      "Avoid contact with the eyes.",
      "Consult a pediatrician before use in infants and children.",
      "Skin diseases, trophic ulcers and purulent conditions require medical assessment.",
      "Gynecological use should only take place under medical advice and supervision."
    ]
  },

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar ololmaydigan joyda saqlang",
    "Flakon ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang",
    "Ishlatishdan oldin yaxshilab chayqating"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "Хранить в недоступном для детей месте",
    "После вскрытия флакона хранить в прохладном месте",
    "Не нагревать и не замораживать",
    "Перед применением тщательно взболтать"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store protected from light",
    "Keep out of reach of children",
    "After opening, store in a cool place",
    "Do not heat or freeze",
    "Shake thoroughly before use"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "Tashqi qo‘llash uchun",
      textRu: "Для наружного применения",
      textEn: "For external use"
    },
    {
      text: "Mahalliy qo‘llash",
      textRu: "Местное применение",
      textEn: "Topical application"
    },
    {
      text: "O‘simlik ekstraktlari",
      textRu: "Растительные экстракты",
      textEn: "Herbal extracts"
    },
    {
      text: "150 ml hajm",
      textRu: "Объём 150 мл",
      textEn: "150 ml volume"
    }
  ]
  },

  29: {
  id: 29,
  name: "DIABETAZOL",
  nameRu: "ДИАБЕТАЗОЛ",
  nameEn: "DIABETAZOL",

  tagline: "Uglevod almashinuvini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки углеводного обмена",
  taglineEn: "For support of carbohydrate metabolism",

  image: diabetazol,
  pdf: "https://drive.google.com/file/d/1e1r7eSYvyX9KTFtB0BO9NvaWSv4nDUZO/view?usp=sharing",

  volume: "60 tablets × 0.5 g",
  form: "O‘simlik tabletkalari",
  formRu: "Растительные таблетки",
  formEn: "Herbal tablets",

  rating: 4.8,
  reviews: 1350,

  manufacturer: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Ekma beda (Medicago sativa)",
      nameRu: "Люцерна посевная (Medicago sativa)",
      nameEn: "Alfalfa (Medicago sativa)",
      amount: "—",
      per: "—"
    },
    {
      name: "Topinambur (Helianthus tuberosus)",
      nameRu: "Топинамбур (Helianthus tuberosus)",
      nameEn: "Jerusalem artichoke (Helianthus tuberosus)",
      amount: "—",
      per: "—"
    },
    {
      name: "Qariqiz ildizi (Arctium lappa)",
      nameRu: "Корень лопуха (Arctium lappa)",
      nameEn: "Burdock root (Arctium lappa)",
      amount: "—",
      per: "—"
    },
    {
      name: "Pajitnik urug‘i (Trigonella foenum-graecum)",
      nameRu: "Семена пажитника (Trigonella foenum-graecum)",
      nameEn: "Fenugreek seeds (Trigonella foenum-graecum)",
      amount: "—",
      per: "—"
    },
    {
      name: "Ikki uyli qichitqi o‘t (Urtica dioica)",
      nameRu: "Крапива двудомная (Urtica dioica)",
      nameEn: "Stinging nettle (Urtica dioica)",
      amount: "—",
      per: "—"
    },
    {
      name: "Brusnika barglari (Vaccinium vitis-idaea)",
      nameRu: "Листья брусники (Vaccinium vitis-idaea)",
      nameEn: "Lingonberry leaves (Vaccinium vitis-idaea)",
      amount: "—",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Uglevod almashinuvi",
      titleRu: "Углеводный обмен",
      titleEn: "Carbohydrate metabolism",
      description: "Uglevod almashinuvini qo‘llab-quvvatlashga mo‘ljallangan",
      descriptionRu: "Предназначен для поддержки углеводного обмена",
      descriptionEn: "Designed to support carbohydrate metabolism",
      icon: "🌿"
    },
    {
      title: "Glyukoza nazorati",
      titleRu: "Контроль глюкозы",
      titleEn: "Glucose management",
      description: "Yo‘riqnomada qondagi glyukoza miqdoriga ta’sir qilishi qayd etilgan",
      descriptionRu: "В инструкции указано влияние на уровень глюкозы в крови",
      descriptionEn: "The leaflet describes a potential effect on blood glucose levels",
      icon: "🩸"
    },
    {
      title: "Yog‘ almashinuvi",
      titleRu: "Жировой обмен",
      titleEn: "Lipid metabolism",
      description: "Yog‘ almashinuvini qo‘llab-quvvatlash uchun",
      descriptionRu: "Для поддержки жирового обмена",
      descriptionEn: "For support of lipid metabolism",
      icon: "⚖️"
    },
    {
      title: "Ovqat hazm qilish",
      titleRu: "Пищеварение",
      titleEn: "Digestion",
      description: "Tarkibidagi o‘simlik komponentlari ovqat hazm qilish jarayonini qo‘llab-quvvatlashi mumkin",
      descriptionRu: "Растительные компоненты могут поддерживать процессы пищеварения",
      descriptionEn: "The herbal ingredients may support digestive processes",
      icon: "🌱"
    }
  ],

  ingredients: [
    {
      name: "Lucerna",
      nameRu: "Люцерна",
      nameEn: "Alfalfa",
      icon: "🌿",
      benefits: [
        "O‘simlik tolalari manbai",
        "Uglevod almashinuvini qo‘llab-quvvatlash uchun an’anaviy qo‘llaniladi",
        "Tarkibida turli biologik faol moddalar mavjud"
      ],
      benefitsRu: [
        "Источник растительных волокон",
        "Традиционно используется для поддержки углеводного обмена",
        "Содержит различные биологически активные вещества"
      ],
      benefitsEn: [
        "A source of plant fibers",
        "Traditionally used to support carbohydrate metabolism",
        "Contains various bioactive compounds"
      ]
    },
    {
      name: "Topinambur",
      nameRu: "Топинамбур",
      nameEn: "Jerusalem artichoke",
      icon: "🌿",
      benefits: [
        "Inulin manbai",
        "Tarkibida o‘simlik tolalari mavjud",
        "Ichak mikroflorasini qo‘llab-quvvatlashi mumkin"
      ],
      benefitsRu: [
        "Источник инулина",
        "Содержит растительные волокна",
        "Может поддерживать кишечную микрофлору"
      ],
      benefitsEn: [
        "A source of inulin",
        "Contains dietary fibers",
        "May support gut microbiota"
      ]
    },
    {
      name: "Lopux",
      nameRu: "Лопух",
      nameEn: "Burdock",
      icon: "🌱",
      benefits: [
        "Tarkibida inulin mavjud",
        "An’anaviy ravishda o‘simlik preparatlarida qo‘llaniladi"
      ],
      benefitsRu: [
        "Содержит инулин",
        "Традиционно используется в растительных препаратах"
      ],
      benefitsEn: [
        "Contains inulin",
        "Traditionally used in herbal preparations"
      ]
    },
    {
      name: "Pajitnik",
      nameRu: "Пажитник",
      nameEn: "Fenugreek",
      icon: "🌾",
      benefits: [
        "Tarkibida o‘simlik tolalari mavjud",
        "Uglevod almashinuviga ta’siri o‘rganilgan"
      ],
      benefitsRu: [
        "Содержит растительные волокна",
        "Изучается его влияние на углеводный обмен"
      ],
      benefitsEn: [
        "Contains dietary fibers",
        "Its effects on carbohydrate metabolism have been studied"
      ]
    },
    {
      name: "Krapiva",
      nameRu: "Крапива",
      nameEn: "Stinging nettle",
      icon: "🍃",
      benefits: [
        "Turli vitamin va mineral moddalarni o‘z ichiga oladi",
        "An’anaviy ravishda o‘simlik preparatlarida qo‘llaniladi"
      ],
      benefitsRu: [
        "Содержит различные витамины и минералы",
        "Традиционно используется в растительных препаратах"
      ],
      benefitsEn: [
        "Contains various vitamins and minerals",
        "Traditionally used in herbal preparations"
      ]
    },
    {
      name: "Brusnika",
      nameRu: "Брусника",
      nameEn: "Lingonberry",
      icon: "🍒",
      benefits: [
        "Tarkibida o‘simlik polifenollari mavjud",
        "An’anaviy ravishda o‘simlik preparatlarida qo‘llaniladi"
      ],
      benefitsRu: [
        "Содержит растительные полифенолы",
        "Традиционно используется в растительных препаратах"
      ],
      benefitsEn: [
        "Contains plant polyphenols",
        "Traditionally used in herbal preparations"
      ]
    }
  ],

  indications: [
    "Uglevod almashinuvini qo‘llab-quvvatlash",
    "Yog‘ almashinuvini korreksiya qilish",
    "Qondagi xolesterin va lipidlar miqdorini nazorat qilishga yordamchi vosita sifatida",
    "Ortiqcha vaznni nazorat qilishda yordamchi vosita sifatida"
  ],

  indicationsRu: [
    "Поддержка углеводного обмена",
    "Коррекция жирового обмена",
    "В качестве вспомогательного средства для контроля холестерина и липидов в крови",
    "В качестве вспомогательного средства при контроле избыточного веса"
  ],

  indicationsEn: [
    "Support of carbohydrate metabolism",
    "Support for lipid metabolism",
    "As an auxiliary product for managing blood cholesterol and lipid levels",
    "As an auxiliary product for weight management"
  ],

  usage: {
    dosage: "2 tabletka kuniga 3 marta",
    dosageRu: "По 2 таблетки 3 раза в день",
    dosageEn: "2 tablets 3 times a day",

    timing: "Ovqat vaqtida, yetarli miqdorda suv bilan",
    timingRu: "Во время еды, запивая достаточным количеством воды",
    timingEn: "During meals, with sufficient water",

    duration: "1 oy",
    durationRu: "1 месяц",
    durationEn: "1 month",

    instruction: "Qayta kurs bir haftadan keyin. Davolash davomiyligi va dozani shifokor belgilaydi.",
    instructionRu: "Повторный курс через неделю. Длительность приема и дозу определяет лечащий врач.",
    instructionEn: "A repeat course may be taken after one week. The physician determines the dose and duration."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qabul qilishni to‘xtating"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При появлении признаков повышенной чувствительности прием следует прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Discontinue use if signs of hypersensitivity develop"
  ],

  overdose: "Yo‘riqnomada dozani oshirib yuborish holatlari qayd etilmagan.",
  overdoseRu: "Случаи передозировки в инструкции не описаны.",
  overdoseEn: "No cases of overdose are reported in the leaflet.",

  interactions: "Yo‘riqnomada boshqa dorilar bilan salbiy ta’sirlar aniqlanmagani ko‘rsatilgan. Biroq, tarkibidagi ayrim o‘simliklar qondagi glyukoza miqdoriga ta’sir qilishi mumkin. Qandli diabet dorilari yoki insulin qabul qilayotgan bemorlar shifokor bilan maslahatlashishi kerak.",
  interactionsRu: "В инструкции указано, что отрицательные взаимодействия с другими препаратами не выявлены. Однако некоторые растительные компоненты могут влиять на уровень глюкозы. Пациентам, принимающим сахароснижающие препараты или инсулин, необходимо проконсультироваться с врачом.",
  interactionsEn: "The leaflet reports no negative interactions with other medicines. However, some herbal ingredients may affect blood glucose levels. Patients taking diabetes medication or insulin should consult their doctor.",

  warnings: [
    "Preparat insulin yoki shifokor buyurgan qand miqdorini pasaytiruvchi dorilar o‘rnini bosmaydi.",
    "Qandli diabet bilan og‘rigan bemorlar preparatni faqat shifokor bilan maslahatlashgan holda qabul qilishi kerak.",
    "Qondagi glyukoza miqdorini muntazam nazorat qilish zarur.",
    "Glyukoza miqdori haddan tashqari pasayishi mumkinligi sababli, gipoglikemiya belgilariga e’tibor bering."
  ],

  warningsRu: [
    "Препарат не заменяет инсулин или назначенные врачом сахароснижающие лекарства.",
    "Пациентам с сахарным диабетом следует принимать препарат только после консультации с врачом.",
    "Необходимо регулярно контролировать уровень глюкозы в крови.",
    "Следует учитывать возможность чрезмерного снижения уровня глюкозы и обращать внимание на симптомы гипогликемии."
  ],

  warningsEn: [
    "This product does not replace insulin or prescribed diabetes medication.",
    "People with diabetes should use it only after consulting their doctor.",
    "Blood glucose levels should be monitored regularly.",
    "Be aware of possible excessive reductions in blood glucose and symptoms of hypoglycemia."
  ],

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищенном от света месте",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Store at +2°C to +25°C",
    "Keep protected from light",
    "Keep out of reach of children"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "Uglevod almashinuvi",
      textRu: "Углеводный обмен",
      textEn: "Carbohydrate metabolism"
    },
    {
      text: "O‘simlik tarkibi",
      textRu: "Растительный состав",
      textEn: "Herbal composition"
    },
    {
      text: "60 tabletka",
      textRu: "60 таблеток",
      textEn: "60 tablets"
    },
    {
      text: "Yog‘ almashinuvi",
      textRu: "Жировой обмен",
      textEn: "Lipid metabolism"
    }
  ]
  },

  36: {
  id: 36,
  name: "ZRENODOL CHERNIKA",
  nameRu: "ЗРЕНОДОЛ ЧЕРНИКА +",
  nameEn: "ZRENODOL CHERNIKA +",

  tagline: "Ko‘rish qobiliyatini qo‘llab-quvvatlovchi sirop",
  taglineRu: "Сироп для поддержки зрения",
  taglineEn: "Syrup for vision support",

  image: zrenadol,
  pdf: "https://drive.google.com/file/d/1_bgndr8q6tcwPDBkTrfK3-R2B03Fpd_f/view?usp=sharing",

  volume: "150 ml",
  form: "O‘simlik ekstraktlari asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов",
  formEn: "Herbal extract syrup",

  rating: 4.7,
  reviews: 834,

  manufacturer: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Cherника mevasi ekstrakti (Vaccinium myrtillus)",
      nameRu: "Экстракт плодов черники (Vaccinium myrtillus)",
      nameEn: "Bilberry fruit extract (Vaccinium myrtillus)",
      amount: "30 mg",
      per: "—"
    },
    {
      name: "Do‘lana mevasi ekstrakti (Crataegus)",
      nameRu: "Экстракт плодов боярышника (Crataegus)",
      nameEn: "Hawthorn fruit extract (Crataegus)",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Botqoq igir ekstrakti (Acorus calamus)",
      nameRu: "Экстракт аира болотного (Acorus calamus)",
      nameEn: "Calamus extract (Acorus calamus)",
      amount: "10 mg",
      per: "—"
    },
    {
      name: "Na’matak mevasi ekstrakti (Rosa majalis)",
      nameRu: "Экстракт плодов шиповника (Rosa majalis)",
      nameEn: "Rosehip fruit extract (Rosa majalis)",
      amount: "10 mg",
      per: "—"
    }
  ],

  benefits: [
    {
      title: "Ko‘z charchog‘ini kamaytirish",
      titleRu: "Поддержка при усталости глаз",
      titleEn: "Support against eye fatigue",
      description: "Yuqori ko‘rish yuklamalarida ko‘z salomatligini qo‘llab-quvvatlash uchun",
      descriptionRu: "Для поддержки здоровья глаз при повышенных зрительных нагрузках",
      descriptionEn: "Designed to support eye health during periods of intense visual activity",
      icon: "👁️"
    },
    {
      title: "Tungi ko‘rishga moslashish",
      titleRu: "Адаптация зрения в темноте",
      titleEn: "Dark adaptation support",
      description: "Yo‘riqnomada qorong‘ida ko‘rishga moslashishni qo‘llab-quvvatlashi qayd etilgan",
      descriptionRu: "В инструкции указана поддержка адаптации зрения в темноте",
      descriptionEn: "The leaflet describes support for visual adaptation in low-light conditions",
      icon: "🌙"
    },
    {
      title: "Antioksidant komponentlar",
      titleRu: "Антиоксидантные компоненты",
      titleEn: "Antioxidant components",
      description: "Tarkibida o‘simlik ekstraktlari va tabiiy antioksidant birikmalar mavjud",
      descriptionRu: "Содержит растительные экстракты и природные антиоксидантные соединения",
      descriptionEn: "Contains plant extracts and naturally occurring antioxidant compounds",
      icon: "✨"
    },
    {
      title: "O‘simlik ekstraktlari kompleksi",
      titleRu: "Комплекс растительных экстрактов",
      titleEn: "Herbal extract complex",
      description: "Ko‘rish organlarini qo‘llab-quvvatlash uchun mo‘ljallangan o‘simlik kompleksi",
      descriptionRu: "Растительный комплекс, предназначенный для поддержки органов зрения",
      descriptionEn: "A herbal complex intended to support the visual system",
      icon: "🌿"
    }
  ],

  ingredients: [
    {
      name: "Cherника",
      nameRu: "Черника",
      nameEn: "Bilberry",
      icon: "🫐",
      benefits: [
        "Antosianinlar manbai",
        "Ko‘rish funksiyalarini qo‘llab-quvvatlash uchun an’anaviy qo‘llaniladi",
        "Antioksidant birikmalarni o‘z ichiga oladi"
      ],
      benefitsRu: [
        "Источник антоцианов",
        "Традиционно используется для поддержки зрительных функций",
        "Содержит антиоксидантные соединения"
      ],
      benefitsEn: [
        "A source of anthocyanins",
        "Traditionally used to support visual functions",
        "Contains antioxidant compounds"
      ]
    },
    {
      name: "Do‘lana",
      nameRu: "Боярышник",
      nameEn: "Hawthorn",
      icon: "🌿",
      benefits: [
        "O‘simlik polifenollarini o‘z ichiga oladi",
        "An’anaviy ravishda yurak-qon tomir tizimini qo‘llab-quvvatlashda qo‘llaniladi"
      ],
      benefitsRu: [
        "Содержит растительные полифенолы",
        "Традиционно используется для поддержки сердечно-сосудистой системы"
      ],
      benefitsEn: [
        "Contains plant polyphenols",
        "Traditionally used to support cardiovascular health"
      ]
    },
    {
      name: "Botqoq igir",
      nameRu: "Аир болотный",
      nameEn: "Calamus",
      icon: "🌱",
      benefits: [
        "An’anaviy o‘simlik preparatlarida qo‘llaniladi",
        "Tarkibida biologik faol o‘simlik birikmalari mavjud"
      ],
      benefitsRu: [
        "Используется в традиционных растительных препаратах",
        "Содержит биологически активные растительные соединения"
      ],
      benefitsEn: [
        "Used in traditional herbal preparations",
        "Contains biologically active plant compounds"
      ]
    },
    {
      name: "Na’matak",
      nameRu: "Шиповник",
      nameEn: "Rosehip",
      icon: "🌹",
      benefits: [
        "Vitamin C manbai",
        "Tabiiy antioksidant birikmalarni o‘z ichiga oladi",
        "O‘simlik polifenollari manbai"
      ],
      benefitsRu: [
        "Источник витамина C",
        "Содержит природные антиоксидантные соединения",
        "Источник растительных полифенолов"
      ],
      benefitsEn: [
        "A source of vitamin C",
        "Contains natural antioxidant compounds",
        "A source of plant polyphenols"
      ]
    }
  ],

  indications: [
    "Ko‘rish organlari faoliyatini qo‘llab-quvvatlash bo‘yicha kompleks profilaktik tadbirlar tarkibida",
    "Kompyuterda uzoq ishlash va avtomobil haydash kabi yuqori ko‘rish yuklamalarida",
    "Yorqin quyosh nuri sharoitida uzoq vaqt bo‘lganda",
    "Ko‘zning tomir patologiyalarida kompleks davolash tarkibida",
    "Shom paytidagi ko‘rish buzilishlarida yordamchi vosita sifatida"
  ],

  indicationsRu: [
    "В составе комплексных профилактических мероприятий для поддержки органов зрения",
    "При повышенных зрительных нагрузках: длительной работе за компьютером и вождении автомобиля",
    "При длительном пребывании в условиях яркого солнечного освещения",
    "В составе комплексной терапии сосудистых патологий глаз",
    "В качестве вспомогательного средства при нарушениях сумеречного зрения"
  ],

  indicationsEn: [
    "As part of comprehensive preventive measures to support visual health",
    "During periods of intense visual activity, such as prolonged computer use or driving",
    "During prolonged exposure to bright sunlight",
    "As part of комплексной терапии vascular eye conditions",
    "As an auxiliary product for people with impaired twilight vision"
  ],

  usage: {
    dosage: "3–6 yosh: 1.5–2 ml kuniga 2 marta; 7–14 yosh: 2.5 ml kuniga 2 marta; 14 yoshdan kattalar: 5 ml kuniga 2 marta",
    dosageRu: "Детям 3–6 лет: 1,5–2 мл 2 раза в день; детям 7–14 лет: 2,5 мл 2 раза в день; взрослым и детям старше 14 лет: 5 мл 2 раза в день",
    dosageEn: "Children aged 3–6: 1.5–2 ml twice daily; children aged 7–14: 2.5 ml twice daily; adults and children over 14: 5 ml twice daily",

    timing: "Ovqat vaqtida, yetarli miqdorda suv bilan",
    timingRu: "Во время еды, запивая достаточным количеством воды",
    timingEn: "During meals, with sufficient water",

    duration: "1 oy. Takroriy kurs bir haftadan keyin",
    durationRu: "1 месяц. Повторный курс через неделю",
    durationEn: "1 month. A repeat course may be taken after one week",

    instruction: "Ishlatishdan oldin siropni yaxshilab chayqating. Doza va kurs davomiyligini shifokor belgilaydi.",
    instructionRu: "Перед применением сироп тщательно взболтать. Дозу и продолжительность курса определяет лечащий врач.",
    instructionEn: "Shake the syrup thoroughly before use. The doctor determines the dose and course duration."
  },

  contraindications: [
    "Preparat tarkibidagi komponentlarga individual toqatsizlik"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость отдельных компонентов препарата"
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the product ingredients"
  ],

  sideEffects: [
    "Kam hollarda allergik reaksiyalar kuzatilishi mumkin",
    "Yuqori sezuvchanlik belgilari paydo bo‘lsa, qabul qilishni to‘xtating"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При появлении признаков повышенной чувствительности применение необходимо прекратить"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Discontinue use if signs of hypersensitivity develop"
  ],

  overdose: "Yo‘riqnomada dozani oshirib yuborish holatlari qayd etilmagan.",
  overdoseRu: "Случаи передозировки в инструкции не описаны.",
  overdoseEn: "No cases of overdose are reported in the leaflet.",

  interactions: "Yo‘riqnomada boshqa dorilar bilan salbiy o‘zaro ta’sirlar aniqlanmagani ko‘rsatilgan. Doimiy dori qabul qilayotgan bemorlar, ayniqsa yurak-qon tomir dorilarini ishlatayotganlar, shifokor yoki farmatsevt bilan maslahatlashishi kerak.",
  interactionsRu: "В инструкции указано, что отрицательные взаимодействия с другими препаратами не выявлены. Пациентам, постоянно принимающим лекарства, особенно препараты для сердечно-сосудистой системы, следует проконсультироваться с врачом или фармацевтом.",
  interactionsEn: "The leaflet reports no negative interactions with other medicines. People taking regular medication, especially cardiovascular medicines, should consult a doctor or pharmacist.",

  warnings: [
    "Preparat ko‘z kasalliklarini mustaqil davolash vositasi emas.",
    "Katarakta, glaukoma va miopiya kabi kasalliklarda oftalmolog ko‘rigi va belgilangan davolash zarur.",
    "Ko‘rish qobiliyati to‘satdan yomonlashsa, ko‘zda og‘riq yoki kuchli qizarish paydo bo‘lsa, shifokorga murojaat qiling.",
    "Bolalarga qo‘llashda shifokor tavsiyasiga amal qiling."
  ],

  warningsRu: [
    "Препарат не является самостоятельным средством лечения заболеваний глаз.",
    "При катаракте, глаукоме и миопии необходимы осмотр офтальмолога и назначенное лечение.",
    "При внезапном ухудшении зрения, боли или выраженном покраснении глаз обратитесь к врачу.",
    "При применении у детей следуйте рекомендациям врача."
  ],

  warningsEn: [
    "This product is not a standalone treatment for eye diseases.",
    "Cataracts, glaucoma and myopia require examination by an ophthalmologist and appropriate treatment.",
    "Seek medical attention if vision suddenly worsens or eye pain or significant redness develops.",
    "Follow medical advice when using the product in children."
  ],

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar yetmaydigan joyda saqlang",
    "Ochilgandan keyin salqin joyda saqlang",
    "Qizdirmang va muzlatmang"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищенном от света месте",
    "Хранить в недоступном для детей месте",
    "После вскрытия хранить в прохладном месте",
    "Не нагревать и не замораживать"
  ],

  storageEn: [
    "Store at +2°C to +25°C",
    "Keep protected from light",
    "Keep out of reach of children",
    "After opening, store in a cool place",
    "Do not heat or freeze"
  ],

  shelfLife: "24 oy",
  shelfLifeRu: "24 месяца",
  shelfLifeEn: "24 months",

  features: [
    {
      text: "Ko‘rish qobiliyatini qo‘llab-quvvatlash",
      textRu: "Поддержка зрения",
      textEn: "Vision support"
    },
    {
      text: "Ko‘k meva ekstrakti",
      textRu: "Экстракт черники",
      textEn: "Bilberry extract"
    },
    {
      text: "O‘simlik ekstraktlari",
      textRu: "Растительные экстракты",
      textEn: "Herbal extracts"
    },
    {
      text: "150 ml sirop",
      textRu: "Сироп 150 мл",
      textEn: "150 ml syrup"
    }
  ]
  },
  },


  softJelatine: { 
    2: {
  id: 2,
  name: "COGNITAZ",
  nameRu: "КОГНИТАЗ",
  nameEn: "COGNITAZ",

  tagline: "Xotira, diqqat va stressga chidamlilikni qo‘llab-quvvatlovchi sirop",
  taglineRu: "Сироп для поддержки памяти, внимания и стрессоустойчивости",
  taglineEn: "Syrup to support memory, focus and stress resilience",

  image: congnitaz,
  pdf: "https://drive.google.com/file/d/114kwLSGh2JIUhjcxF5gNUlb_TzatXWud/view?usp=sharing",

  volume: "150 ml",
  form: "O‘simlik ekstraktlari va faol komponentlar asosidagi sirop",
  formRu: "Сироп на основе растительных экстрактов и активных компонентов",
  formEn: "Syrup with herbal extracts and active ingredients",

  rating: 4.7,
  reviews: 892,

  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",

  certification: "O'zMSt 166-2024",
  price: "95,000",
  currency: "сум",

  composition: [
    {
      name: "Inozitol",
      nameRu: "Инозитол",
      nameEn: "Inositol",
      amount: "50 mg",
      per: "5 ml"
    },
    {
      name: "Rodiola ekstrakti (Rhodiola rosea), Rosavin ≥ 3.0%, Salidrozid ≥ 1.0% (HPLC)",
      nameRu: "Экстракт родиолы (Rhodiola rosea), розавин ≥ 3.0%, салидрозид ≥ 1.0% (HPLC)",
      nameEn: "Rhodiola extract (Rhodiola rosea), Rosavin ≥ 3.0%, Salidroside ≥ 1.0% (HPLC)",
      amount: "100 mg",
      per: "5 ml"
    },
    {
      name: "L-Teanin",
      nameRu: "L-Теанин",
      nameEn: "L-Theanine",
      amount: "100 mg",
      per: "5 ml"
    },
    {
      name: "Xolin bitartrat",
      nameRu: "Холина битартрат",
      nameEn: "Choline bitartrate",
      amount: "50 mg",
      per: "5 ml"
    },
    {
      name: "Magniy bisglisinat",
      nameRu: "Магния бисглицинат",
      nameEn: "Magnesium bisglycinate",
      amount: "40 mg",
      per: "5 ml"
    },
    {
      name: "Sink glyukonat",
      nameRu: "Глюконат цинка",
      nameEn: "Zinc gluconate",
      amount: "1.7 mg",
      per: "5 ml"
    }
  ],

  benefits: [
    {
      title: "Xotira va diqqatni qo‘llab-quvvatlash",
      titleRu: "Поддержка памяти и внимания",
      titleEn: "Memory and focus support",
      description: "Aqliy faoliyat va diqqatni jamlashni qo‘llab-quvvatlash uchun",
      descriptionRu: "Для поддержки умственной деятельности и концентрации внимания",
      descriptionEn: "Designed to support mental performance and concentration",
      icon: "🧠"
    },
    {
      title: "Stressga chidamlilik",
      titleRu: "Стрессоустойчивость",
      titleEn: "Stress resilience",
      description: "Stressli davrlarda asab tizimini qo‘llab-quvvatlashga yordam beradi",
      descriptionRu: "Помогает поддерживать нервную систему в периоды стресса",
      descriptionEn: "Helps support the nervous system during stressful periods",
      icon: "💆"
    },
    {
      title: "Hissiy muvozanat",
      titleRu: "Эмоциональный баланс",
      titleEn: "Emotional balance",
      description: "Tinchlanish va hissiy barqarorlikni qo‘llab-quvvatlash uchun",
      descriptionRu: "Для поддержки спокойствия и эмоциональной устойчивости",
      descriptionEn: "Designed to support calmness and emotional balance",
      icon: "☯️"
    },
    {
      title: "Aqliy ish qobiliyati",
      titleRu: "Умственная работоспособность",
      titleEn: "Mental performance",
      description: "O‘qish va yuqori aqliy yuklamalarda qo‘llab-quvvatlash uchun",
      descriptionRu: "Для поддержки во время учёбы и повышенных умственных нагрузок",
      descriptionEn: "Designed to support users during studying and demanding mental activities",
      icon: "📚"
    }
  ],

  ingredients: [
    {
      name: "Inozitol",
      nameRu: "Инозитол",
      nameEn: "Inositol",
      icon: "🧬",
      benefits: [
        "Neyromediatorlar faoliyatida ishtirok etadi",
        "Asab tizimi faoliyatini qo‘llab-quvvatlaydi",
        "Hissiy muvozanat bilan bog‘liq jarayonlarda ishtirok etadi"
      ],
      benefitsRu: [
        "Участвует в работе нейромедиаторных систем",
        "Поддерживает функционирование нервной системы",
        "Участвует в процессах, связанных с эмоциональным балансом"
      ],
      benefitsEn: [
        "Participates in neurotransmitter-related processes",
        "Supports nervous system function",
        "Involved in processes associated with emotional balance"
      ]
    },
    {
      name: "Rodiola",
      nameRu: "Родиола",
      nameEn: "Rhodiola",
      icon: "🌿",
      benefits: [
        "Adaptogen sifatida qo‘llaniladi",
        "Jismoniy va aqliy charchoqni kamaytirishga yordam berishi mumkin",
        "Stressga moslashish jarayonlarini qo‘llab-quvvatlaydi"
      ],
      benefitsRu: [
        "Используется в качестве адаптогена",
        "Может помогать уменьшать физическую и умственную усталость",
        "Поддерживает процессы адаптации к стрессу"
      ],
      benefitsEn: [
        "Used as an adaptogen",
        "May help reduce physical and mental fatigue",
        "Supports the body's adaptation to stress"
      ]
    },
    {
      name: "L-Teanin",
      nameRu: "L-Теанин",
      nameEn: "L-Theanine",
      icon: "🍃",
      benefits: [
        "Yashil choyda uchraydigan aminokislota",
        "Tinchlanish va diqqatni jamlashni qo‘llab-quvvatlashi mumkin",
        "Stress bilan bog‘liq jarayonlarda o‘rganilgan"
      ],
      benefitsRu: [
        "Аминокислота, содержащаяся в зелёном чае",
        "Может поддерживать расслабление и концентрацию",
        "Изучается в контексте стрессовых состояний"
      ],
      benefitsEn: [
        "An amino acid found in green tea",
        "May support relaxation and concentration",
        "Studied in relation to stress"
      ]
    },
    {
      name: "Xolin bitartrat",
      nameRu: "Холина битартрат",
      nameEn: "Choline bitartrate",
      icon: "🧠",
      benefits: [
        "Atsetilxolin sintezi uchun xolin manbai",
        "Asab tizimi faoliyatida ishtirok etadi",
        "Normal kognitiv funksiyalar uchun muhim"
      ],
      benefitsRu: [
        "Источник холина для синтеза ацетилхолина",
        "Участвует в функционировании нервной системы",
        "Важен для нормальных когнитивных функций"
      ],
      benefitsEn: [
        "A source of choline used in acetylcholine synthesis",
        "Participates in nervous system function",
        "Important for normal cognitive functions"
      ]
    },
    {
      name: "Magniy bisglisinat",
      nameRu: "Магния бисглицинат",
      nameEn: "Magnesium bisglycinate",
      icon: "⚡",
      benefits: [
        "Asab tizimining normal faoliyatida ishtirok etadi",
        "Energiya almashinuvi uchun muhim",
        "Mushaklar faoliyatini qo‘llab-quvvatlaydi"
      ],
      benefitsRu: [
        "Участвует в нормальной работе нервной системы",
        "Важен для энергетического обмена",
        "Поддерживает функцию мышц"
      ],
      benefitsEn: [
        "Contributes to normal nervous system function",
        "Important for energy metabolism",
        "Supports normal muscle function"
      ]
    },
    {
      name: "Sink glyukonat",
      nameRu: "Глюконат цинка",
      nameEn: "Zinc gluconate",
      icon: "🔬",
      benefits: [
        "Normal kognitiv funksiyalarni qo‘llab-quvvatlaydi",
        "Immun tizimining normal faoliyatida ishtirok etadi",
        "Ko‘plab fermentativ jarayonlar uchun zarur"
      ],
      benefitsRu: [
        "Поддерживает нормальные когнитивные функции",
        "Участвует в нормальной работе иммунной системы",
        "Необходим для многих ферментативных процессов"
      ],
      benefitsEn: [
        "Supports normal cognitive function",
        "Contributes to normal immune system function",
        "Essential for many enzymatic processes"
      ]
    }
  ],

  indications: [
    "Yuqori aqliy yuklamalarda maktab o‘quvchilari va talabalar uchun",
    "Diqqat va e’tibor pasayganda",
    "Ortiqcha xavotir va stress holatlarida",
    "Xotira va kognitiv funksiyalarni qo‘llab-quvvatlash uchun",
    "Asabiy toliqishni oldini olishga yordamchi vosita sifatida"
  ],

  indicationsRu: [
    "Для школьников и студентов при повышенных умственных нагрузках",
    "При снижении концентрации и внимания",
    "При повышенной тревожности и стрессе",
    "Для поддержки памяти и когнитивных функций",
    "В качестве вспомогательного средства для профилактики нервного переутомления"
  ],

  indicationsEn: [
    "For schoolchildren and students during periods of increased mental workload",
    "When concentration and attention are reduced",
    "During periods of excessive anxiety and stress",
    "To support memory and cognitive functions",
    "As an auxiliary product to help prevent mental fatigue"
  ],

  usage: {
    dosage: "7–12 yosh: 5 ml kuniga 1 marta; o‘smirlar va kattalar: 10 ml kuniga 1 marta",
    dosageRu: "Детям 7–12 лет: 5 мл 1 раз в день; подросткам и взрослым: 10 мл 1 раз в день",
    dosageEn: "Children aged 7–12: 5 ml once daily; adolescents and adults: 10 ml once daily",

    timing: "Ovqat vaqtida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "1–2 oy",
    durationRu: "1–2 месяца",
    durationEn: "1–2 months",

    instruction: "Ishlatishdan oldin flakonni yaxshilab chayqating. Zarur bo‘lsa, kursni takrorlash mumkin.",
    instructionRu: "Перед применением флакон тщательно взболтать. При необходимости курс можно повторить.",
    instructionEn: "Shake the bottle thoroughly before use. The course may be repeated if necessary."
  },

  contraindications: [
    "Tarkibiy qismlarga individual toqatsizlik",
    "7 yoshgacha bo‘lgan bolalar: faqat shifokor tavsiyasi bilan",
    "Homiladorlik va emizish davri: faqat shifokor bilan maslahatlashgandan keyin",
    "Yuqori qon bosimi"
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов",
    "Детям до 7 лет — только по рекомендации врача",
    "Во время беременности и грудного вскармливания — только после консультации с врачом",
    "Повышенное артериальное давление"
  ],

  contraindicationsEn: [
    "Individual intolerance to the ingredients",
    "Children under 7 years: only on a doctor's recommendation",
    "Pregnancy and breastfeeding: only after consulting a doctor",
    "High blood pressure"
  ],

  sideEffects: [
    "В редких случаях возможны аллергические реакции",
    "При приёме вечером возможны лёгкие нарушения сна",
    "При появлении нежелательных реакций прекратите применение и обратитесь к врачу"
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции",
    "При вечернем приёме возможны лёгкие нарушения сна",
    "При появлении нежелательных реакций прекратите применение и обратитесь к врачу"
  ],

  sideEffectsEn: [
    "Allergic reactions may occur in rare cases",
    "Mild sleep disturbances may occur if taken in the evening",
    "Discontinue use and consult a doctor if unwanted reactions develop"
  ],

  overdose: "Doza sezilarli oshirilganda bosh og‘rig‘i, jizzakilik, uyqusizlik va ovqat hazm qilish buzilishlari kuzatilishi mumkin.",
  overdoseRu: "При значительном превышении дозы возможны головная боль, раздражительность, бессонница и нарушения пищеварения.",
  overdoseEn: "Significant overdose may cause headache, irritability, insomnia and digestive disturbances.",

  interactions: "Rodiola antidepressantlar ta’sirini kuchaytirishi mumkin. L-teanin kofein bilan birga qo‘llanishi mumkin. Magniy tetratsiklin guruhidagi antibiotiklarning so‘rilishi va samaradorligiga ta’sir qilishi mumkin, shuning uchun ularni qabul qilish vaqtini ajratish kerak. Boshqa dorilarni qabul qilayotgan bo‘lsangiz, shifokor yoki farmatsevt bilan maslahatlashing.",
  interactionsRu: "Родиола может усиливать действие антидепрессантов. L-теанин совместим с кофеином. Магний может снижать всасывание и эффективность антибиотиков тетрациклинового ряда, поэтому приём следует разделять по времени. При использовании других лекарств проконсультируйтесь с врачом или фармацевтом.",
  interactionsEn: "Rhodiola may enhance the effects of antidepressants. L-theanine can be used with caffeine. Magnesium may reduce the absorption and effectiveness of tetracycline antibiotics, so doses should be separated. Consult a doctor or pharmacist if you take other medicines.",

  warnings: [
    "Yuqori qon bosimi bo‘lgan shaxslar preparatni shifokor bilan maslahatlashmasdan qabul qilmasligi kerak.",
    "Antidepressantlar yoki boshqa doimiy dorilarni qabul qilayotgan bo‘lsangiz, avval shifokor bilan maslahatlashing.",
    "Kechqurun qabul qilish ayrim odamlarda uyquga ta’sir qilishi mumkin.",
    "Tavsiya etilgan dozadan oshirmang.",
    "Preparat kasalliklarni tashxislash yoki davolash uchun mo‘ljallangan dori vositasi o‘rnini bosmaydi."
  ],

  warningsRu: [
    "Людям с повышенным артериальным давлением не следует принимать препарат без консультации врача.",
    "При приёме антидепрессантов или других лекарств на постоянной основе предварительно проконсультируйтесь с врачом.",
    "Приём вечером может влиять на сон у некоторых людей.",
    "Не превышайте рекомендованную дозировку.",
    "Препарат не заменяет лекарственные средства, предназначенные для диагностики или лечения заболеваний."
  ],

  warningsEn: [
    "People with high blood pressure should not use the product without consulting a doctor.",
    "Consult a doctor before use if you take antidepressants or other regular medication.",
    "Taking it in the evening may affect sleep in some people.",
    "Do not exceed the recommended dosage.",
    "This product does not replace medicines intended to diagnose or treat diseases."
  ],

  storage: [
    "Harorat: +4°C dan +25°C gacha",
    "Flakon ochilgandan keyin sovutkichda saqlang",
    "Ochilgandan so‘ng 30 kun ichida ishlating",
    "Bolalar qo‘li yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Температура хранения: от +4°C до +25°C",
    "После вскрытия флакон хранить в холодильнике",
    "Использовать в течение 30 дней после вскрытия",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Store at +4°C to +25°C",
    "Refrigerate after opening",
    "Use within 30 days after opening",
    "Keep out of reach of children"
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Xotira va diqqat",
      textRu: "Память и внимание",
      textEn: "Memory and focus"
    },
    {
      text: "Stressga chidamlilik",
      textRu: "Стрессоустойчивость",
      textEn: "Stress resilience"
    },
    {
      text: "6 faol komponent",
      textRu: "6 активных компонентов",
      textEn: "6 active ingredients"
    },
    {
      text: "150 ml sirop",
      textRu: "Сироп 150 мл",
      textEn: "150 ml syrup"
    }
  ]
    },

    4: {
  id: 4,
  name: "HIS GRADOR",
  nameRu: "ХИС ГРАДОР",
  nameEn: "HIS GRADOR",

  tagline: "Erkaklar salomatligini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки мужского здоровья",
  taglineEn: "For men's health support",

  image: hisgrador,
  pdf: "https://drive.google.com/file/d/10J15FFzX7oUsO64HyB8xdcwDWn1b5SIE/view?usp=sharing",

  volume: "30 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.8,
  reviews: 743,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "145,000",
  currency: "сум",

  composition: [
    {
      name: "Omega-3 yog‘ kislotalari",
      nameRu: "Жирные кислоты Омега-3",
      nameEn: "Omega-3 fatty acids",
      amount: "500 mg",
      per: "1 kapsul",
      details: "DHA 12% va EPA 18%"
    },
    {
      name: "Vitamin D3",
      nameRu: "Витамин D3",
      nameEn: "Vitamin D3",
      amount: "15 mkg (600 IU)",
      per: "1 kapsul"
    },
    {
      name: "Vitamin K2 (MK-7)",
      nameRu: "Витамин K2 (МК-7)",
      nameEn: "Vitamin K2 (MK-7)",
      amount: "90 mkg",
      per: "1 kapsul"
    },
    {
      name: "Rux (sitrat)",
      nameRu: "Цинк (цитрат)",
      nameEn: "Zinc (citrate)",
      amount: "15 mg",
      per: "1 kapsul"
    },
    {
      name: "Selen (selenometionin)",
      nameRu: "Селен (селенометионин)",
      nameEn: "Selenium (selenomethionine)",
      amount: "55 mkg",
      per: "1 kapsul"
    },
    {
      name: "L-arginin",
      nameRu: "L-аргинин",
      nameEn: "L-arginine",
      amount: "125 mg",
      per: "1 kapsul"
    },
    {
      name: "Koenzim Q10 (ubixinon)",
      nameRu: "Коэнзим Q10 (убихинон)",
      nameEn: "Coenzyme Q10 (ubiquinone)",
      amount: "50 mg",
      per: "1 kapsul"
    },
    {
      name: "Jenshen ekstrakti (Panax, 10:1)",
      nameRu: "Экстракт женьшеня (Panax, 10:1)",
      nameEn: "Ginseng extract (Panax, 10:1)",
      amount: "50 mg",
      per: "1 kapsul"
    }
  ],

  benefits: [
    {
      title: "Erkaklar salomatligi",
      titleRu: "Мужское здоровье",
      titleEn: "Men's health",
      description: "Erkaklar reproduktiv salomatligi va umumiy holatini qo‘llab-quvvatlashga yordam beradi.",
      descriptionRu: "Способствует поддержке мужского репродуктивного здоровья и общего состояния.",
      descriptionEn: "Supports male reproductive health and general well-being.",
      icon: "💪"
    },
    {
      title: "Energiya va bardoshlilik",
      titleRu: "Энергия и выносливость",
      titleEn: "Energy and endurance",
      description: "Energiya almashinuvi va jismoniy faollikni qo‘llab-quvvatlaydi.",
      descriptionRu: "Поддерживает энергетический обмен и физическую активность.",
      descriptionEn: "Supports energy metabolism and physical activity.",
      icon: "⚡"
    },
    {
      title: "Yurak-qon tomir tizimi",
      titleRu: "Сердечно-сосудистая система",
      titleEn: "Cardiovascular system",
      description: "Yurak va qon tomirlarining normal faoliyatini qo‘llab-quvvatlashga yordam beradi.",
      descriptionRu: "Способствует поддержанию нормальной работы сердца и сосудов.",
      descriptionEn: "Helps support normal heart and blood vessel function.",
      icon: "❤️"
    },
    {
      title: "Vitamin va mineral ta'minoti",
      titleRu: "Витаминно-минеральная поддержка",
      titleEn: "Vitamin and mineral support",
      description: "Organizmni muhim vitaminlar, minerallar va boshqa faol moddalar bilan ta'minlaydi.",
      descriptionRu: "Обеспечивает организм важными витаминами, минералами и другими активными веществами.",
      descriptionEn: "Provides the body with important vitamins, minerals, and other active ingredients.",
      icon: "🛡️"
    }
  ],

  ingredients: [
    {
      name: "Omega-3 (DHA 12% va EPA 18%)",
      nameRu: "Омега-3 (ДГК 12% и ЭПК 18%)",
      nameEn: "Omega-3 (DHA 12% and EPA 18%)",
      icon: "🐟",
      benefits: [
        "Yurak-qon tomir tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
        "Organizm uchun muhim ko‘p to‘yinmagan yog‘ kislotalari manbai hisoblanadi.",
        "EPA va DHA yurak faoliyatida muhim rol o‘ynaydi."
      ],
      benefitsRu: [
        "Поддерживает нормальную работу сердечно-сосудистой системы.",
        "Является источником важных полиненасыщенных жирных кислот.",
        "ЭПК и ДГК играют важную роль в работе сердца."
      ],
      benefitsEn: [
        "Supports normal cardiovascular function.",
        "Provides important polyunsaturated fatty acids.",
        "EPA and DHA play an important role in heart function."
      ]
    },
    {
      name: "Vitamin D3",
      nameRu: "Витамин D3",
      nameEn: "Vitamin D3",
      icon: "☀️",
      benefits: [
        "Kalsiy va fosforning normal so‘rilishiga yordam beradi.",
        "Suyaklar va mushaklarning normal faoliyatini qo‘llab-quvvatlaydi.",
        "Immun tizimining normal faoliyatida ishtirok etadi."
      ],
      benefitsRu: [
        "Способствует нормальному усвоению кальция и фосфора.",
        "Поддерживает нормальное состояние костей и работу мышц.",
        "Участвует в нормальном функционировании иммунной системы."
      ],
      benefitsEn: [
        "Helps normal absorption of calcium and phosphorus.",
        "Supports normal bones and muscle function.",
        "Contributes to normal immune system function."
      ]
    },
    {
      name: "Vitamin K2 (MK-7)",
      nameRu: "Витамин K2 (МК-7)",
      nameEn: "Vitamin K2 (MK-7)",
      icon: "🎯",
      benefits: [
        "Qon ivishining normal jarayonida ishtirok etadi.",
        "Suyaklarning normal holatini saqlashga yordam beradi.",
        "Vitamin D3 bilan birgalikda suyak salomatligini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в нормальном процессе свертывания крови.",
        "Помогает поддерживать нормальное состояние костей.",
        "В сочетании с витамином D3 поддерживает здоровье костей."
      ],
      benefitsEn: [
        "Contributes to normal blood clotting.",
        "Helps maintain normal bone health.",
        "Together with vitamin D3, supports bone health."
      ]
    },
    {
      name: "Rux (sitrat)",
      nameRu: "Цинк (цитрат)",
      nameEn: "Zinc (citrate)",
      icon: "⚡",
      benefits: [
        "Normal testosteron darajasini saqlashda ishtirok etadi.",
        "Reproduktiv salomatlik va spermatogenez uchun muhim.",
        "Immun tizimining normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Способствует поддержанию нормального уровня тестостерона.",
        "Важен для репродуктивного здоровья и сперматогенеза.",
        "Поддерживает нормальную работу иммунной системы."
      ],
      benefitsEn: [
        "Contributes to maintaining normal testosterone levels.",
        "Is important for reproductive health and spermatogenesis.",
        "Supports normal immune system function."
      ]
    },
    {
      name: "Selen (selenometionin)",
      nameRu: "Селен (селенометионин)",
      nameEn: "Selenium (selenomethionine)",
      icon: "💎",
      benefits: [
        "Hujayralarni oksidlovchi stressdan himoya qilishga yordam beradi.",
        "Spermatogenezning normal jarayonida ishtirok etadi.",
        "Qalqonsimon bezning normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Помогает защищать клетки от окислительного стресса.",
        "Участвует в нормальном процессе сперматогенеза.",
        "Поддерживает нормальную функцию щитовидной железы."
      ],
      benefitsEn: [
        "Helps protect cells from oxidative stress.",
        "Contributes to normal spermatogenesis.",
        "Supports normal thyroid function."
      ]
    },
    {
      name: "L-arginin",
      nameRu: "L-аргинин",
      nameEn: "L-arginine",
      icon: "🔄",
      benefits: [
        "Azot oksidi sintezida ishtirok etadi.",
        "Qon tomirlarining normal faoliyatiga aloqador jarayonlarda qatnashadi.",
        "Qon aylanishi bilan bog‘liq fiziologik jarayonlarni qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в синтезе оксида азота.",
        "Участвует в процессах, связанных с нормальной функцией сосудов.",
        "Поддерживает физиологические процессы, связанные с кровообращением."
      ],
      benefitsEn: [
        "Participates in nitric oxide synthesis.",
        "Is involved in processes related to normal blood vessel function.",
        "Supports physiological processes associated with circulation."
      ]
    },
    {
      name: "Koenzim Q10",
      nameRu: "Коэнзим Q10",
      nameEn: "Coenzyme Q10",
      icon: "⚡",
      benefits: [
        "Hujayralarda energiya ishlab chiqarish jarayonida ishtirok etadi.",
        "Antioksidant xususiyatlarga ega.",
        "Hujayralarning normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в процессах выработки энергии в клетках.",
        "Обладает антиоксидантными свойствами.",
        "Поддерживает нормальную работу клеток."
      ],
      benefitsEn: [
        "Participates in cellular energy production.",
        "Has antioxidant properties.",
        "Supports normal cellular function."
      ]
    },
    {
      name: "Jenshen ekstrakti (Panax)",
      nameRu: "Экстракт женьшеня (Panax)",
      nameEn: "Ginseng extract (Panax)",
      icon: "🌿",
      benefits: [
        "An'anaviy ravishda tonus va faollikni qo‘llab-quvvatlash uchun ishlatiladi.",
        "Charchoq va zo‘riqish davrida umumiy holatni qo‘llab-quvvatlashga qaratilgan.",
        "Organizmning jismoniy va aqliy faolligini qo‘llab-quvvatlash uchun qo‘llaniladi."
      ],
      benefitsRu: [
        "Традиционно используется для поддержания тонуса и активности.",
        "Предназначен для поддержки общего состояния в периоды усталости и напряжения.",
        "Применяется для поддержки физической и умственной активности."
      ],
      benefitsEn: [
        "Traditionally used to support vitality and activity.",
        "Intended to support general well-being during periods of fatigue and stress.",
        "Used to support physical and mental activity."
      ]
    }
  ],

  indications: [
    "Erkaklar uchun qo‘shimcha Omega-3 yog‘ kislotalari, vitaminlar, minerallar, aminokislotalar va o‘simlik ekstraktlari manbai sifatida.",
    "Erkaklar salomatligi va gormonal muvozanatini qo‘llab-quvvatlash.",
    "Energiya yetishmovchiligi, charchoq va stress holatlarida qo‘shimcha qo‘llab-quvvatlash.",
    "Potensiya va libidoni qo‘llab-quvvatlash.",
    "Immunitet va jismoniy bardoshlilikni qo‘llab-quvvatlash."
  ],

  indicationsRu: [
    "В качестве дополнительного источника Омега-3, витаминов, минералов, аминокислот и растительных экстрактов для мужчин.",
    "Для поддержки мужского здоровья и гормонального баланса.",
    "Для дополнительной поддержки при недостатке энергии, усталости и стрессе.",
    "Для поддержки потенции и либидо.",
    "Для поддержки иммунитета и физической выносливости."
  ],

  indicationsEn: [
    "As an additional source of Omega-3, vitamins, minerals, amino acids, and plant extracts for men.",
    "To support men's health and hormonal balance.",
    "For additional support during periods of low energy, fatigue, and stress.",
    "To support sexual function and libido.",
    "To support immunity and physical endurance."
  ],

  usage: {
    dosage: "18 yoshdan boshlab: kuniga 1 kapsula. 40 yoshdan oshgan erkaklar: kuniga 2 kapsula.",
    dosageRu: "С 18 лет: по 1 капсуле в день. Мужчинам старше 40 лет: по 2 капсулы в день.",
    dosageEn: "From 18 years: 1 capsule daily. Men over 40 years: 2 capsules daily.",

    timing: "Ovqat vaqtida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "1 oydan 3 oygacha. Zarurat bo‘lganda takrorlash mumkin.",
    durationRu: "От 1 до 3 месяцев. При необходимости курс можно повторить.",
    durationEn: "From 1 to 3 months. The course may be repeated if necessary.",

    instruction: "Yetarli miqdorda suv bilan qabul qiling.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Komponentlarga individual toqatsizlik.",
    "Arterial gipertenziya.",
    "18 yoshgacha bo‘lgan bolalar.",
    "Jigar yoki buyrakning og‘ir kasalliklarida ehtiyotkorlik bilan, shifokor bilan maslahatlashgan holda qo‘llash tavsiya etiladi."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Артериальная гипертензия.",
    "Детский возраст до 18 лет.",
    "При тяжелых заболеваниях печени или почек применять с осторожностью и после консультации с врачом."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Arterial hypertension.",
    "Children under 18 years of age.",
    "Use with caution and consult a doctor in cases of severe liver or kidney disease."
  ],

  sideEffects: [
    "Kamdan-kam hollarda allergik reaksiyalar kuzatilishi mumkin.",
    "Kechqurun qabul qilinganda uyqusizlik yoki asabiylashish paydo bo‘lishi mumkin.",
    "Yengil dispeptik buzilishlar kuzatilishi mumkin."
  ],

  sideEffectsRu: [
    "В редких случаях возможны аллергические реакции.",
    "При приеме вечером возможны бессонница или раздражительность.",
    "Возможны легкие диспепсические расстройства."
  ],

  sideEffectsEn: [
    "Allergic reactions may occur rarely.",
    "Insomnia or irritability may occur if taken in the evening.",
    "Mild digestive disturbances may occur."
  ],

  overdose: {
    uz: "Me'yordan ortiq qabul qilish qon bosimining oshishi, bosh og‘rig‘i va yurak urishining tezlashishiga olib kelishi mumkin. Bunday hollarda qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "Передозировка может проявляться повышением артериального давления, головной болью и учащенным сердцебиением. В таких случаях прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may cause increased blood pressure, headache, and rapid heartbeat. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Omega-3 yuqori dozalarda antikoagulyantlar bilan birga qo‘llanganda qon ketish xavfiga ta'sir qilishi mumkin.",
      "K2 vitamini varfarin kabi vitamin K antagonistlari bilan o‘zaro ta'sirlashishi mumkin. Bunday dorilarni qabul qilayotganlar shifokor bilan maslahatlashishi kerak.",
      "L-arginin qon bosimini tushiruvchi dorilar ta'sirini kuchaytirishi mumkin.",
      "Jenshen ayrim stimulyatorlar va boshqa dorilar bilan o‘zaro ta'sirlashishi mumkin."
    ],
    ru: [
      "Омега-3 в высоких дозах может влиять на риск кровотечений при совместном применении с антикоагулянтами.",
      "Витамин K2 может взаимодействовать с антагонистами витамина K, такими как варфарин. При приеме таких препаратов необходима консультация врача.",
      "L-аргинин может усиливать действие препаратов, снижающих артериальное давление.",
      "Женьшень может взаимодействовать с некоторыми стимуляторами и лекарственными средствами."
    ],
    en: [
      "High doses of Omega-3 may affect bleeding risk when used with anticoagulants.",
      "Vitamin K2 may interact with vitamin K antagonists such as warfarin. Consult a doctor if taking these medicines.",
      "L-arginine may enhance the effects of blood-pressure-lowering medicines.",
      "Ginseng may interact with certain stimulants and medications."
    ]
  },

  warnings: [
    "Qon suyultiruvchi dorilar, jumladan varfarin yoki aspirin qabul qilayotgan bo‘lsangiz, mahsulotni ishlatishdan oldin shifokor bilan maslahatlashing.",
    "Qon bosimini tushiruvchi dorilar yoki stimulyatorlar qabul qilayotgan bo‘lsangiz, shifokor yoki farmatsevt bilan maslahatlashish tavsiya etiladi.",
    "Mahsulot biologik faol qo‘shimcha hisoblanadi, kasalliklarni tashxislash, davolash yoki shifokor buyurgan dori vositalarining o‘rnini bosmaydi."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Erkaklar uchun maxsus kompleks",
      textRu: "Специальный комплекс для мужчин",
      textEn: "A specialized complex for men"
    },
    {
      text: "Omega-3, vitaminlar va minerallar",
      textRu: "Омега-3, витамины и минералы",
      textEn: "Omega-3, vitamins, and minerals"
    },
    {
      text: "L-arginin va koenzim Q10",
      textRu: "L-аргинин и коэнзим Q10",
      textEn: "L-arginine and Coenzyme Q10"
    },
    {
      text: "Jenshen ekstrakti bilan",
      textRu: "С экстрактом женьшеня",
      textEn: "With ginseng extract"
    }
  ]
    },

    5: {
  id: 5,
  name: "HER ELIONA",
  nameRu: "ХЕР ЭЛИОНА",
  nameEn: "HER ELIONA",

  tagline: "Ayollar salomatligi va go‘zalligini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки женского здоровья и красоты",
  taglineEn: "For women's health and beauty support",

  image: hereliona,
  pdf: "https://drive.google.com/file/d/1NxCW9Z8Aphx9YL6N6RWNySdkvJ4uPbzr/view?usp=sharing",

  volume: "30 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.9,
  reviews: 1156,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "155,000",
  currency: "сум",

  composition: [
    {
      name: "Omega-3 (baliq yog‘i konsentrati)",
      nameRu: "Омега-3 (концентрат рыбьего жира)",
      nameEn: "Omega-3 (fish oil concentrate)",
      amount: "600 mg",
      per: "1 kapsul",
      details: "EPA 360 mg, DHA 240 mg"
    },
    {
      name: "Vitamin E (d-alfa-tokoferol)",
      nameRu: "Витамин E (d-альфа-токоферол)",
      nameEn: "Vitamin E (d-alpha-tocopherol)",
      amount: "15 mg (22.4 IU)",
      per: "1 kapsul"
    },
    {
      name: "Vitamin D3",
      nameRu: "Витамин D3",
      nameEn: "Vitamin D3",
      amount: "15 mkg (600 IU)",
      per: "1 kapsul"
    },
    {
      name: "Vitamin K2 (MK-7)",
      nameRu: "Витамин K2 (МК-7)",
      nameEn: "Vitamin K2 (MK-7)",
      amount: "90 mkg",
      per: "1 kapsul"
    },
    {
      name: "Biotin",
      nameRu: "Биотин",
      nameEn: "Biotin",
      amount: "150 mkg",
      per: "1 kapsul"
    },
    {
      name: "Kollagen (baliq, gidroliz qilingan)",
      nameRu: "Коллаген (рыбный, гидролизованный)",
      nameEn: "Collagen (hydrolyzed fish collagen)",
      amount: "200 mg",
      per: "1 kapsul"
    },
    {
      name: "Klyukva ekstrakti (10:1)",
      nameRu: "Экстракт клюквы (10:1)",
      nameEn: "Cranberry extract (10:1)",
      amount: "100 mg",
      per: "1 kapsul"
    }
  ],

  benefits: [
    {
      title: "Teri, soch va tirnoqlar",
      titleRu: "Кожа, волосы и ногти",
      titleEn: "Skin, hair and nails",
      description: "Biotin, kollagen va vitamin E orqali ularning normal holatini qo‘llab-quvvatlaydi.",
      descriptionRu: "Поддерживает нормальное состояние кожи, волос и ногтей благодаря биотину, коллагену и витамину E.",
      descriptionEn: "Supports normal skin, hair and nail health with biotin, collagen and vitamin E.",
      icon: "✨"
    },
    {
      title: "Yurak va suyaklar salomatligi",
      titleRu: "Здоровье сердца и костей",
      titleEn: "Heart and bone health",
      description: "Omega-3, D3 va K2 vitaminlari orqali yurak-qon tomir tizimi hamda suyaklarni qo‘llab-quvvatlaydi.",
      descriptionRu: "Поддерживает сердечно-сосудистую систему и здоровье костей благодаря Омега-3 и витаминам D3 и K2.",
      descriptionEn: "Supports cardiovascular and bone health with Omega-3 and vitamins D3 and K2.",
      icon: "❤️"
    },
    {
      title: "Siydik yo‘llari salomatligi",
      titleRu: "Здоровье мочевыводящих путей",
      titleEn: "Urinary tract health",
      description: "Klyukva ekstrakti bilan qo‘shimcha o‘simlik komponenti manbai.",
      descriptionRu: "Дополнительный источник растительных компонентов благодаря экстракту клюквы.",
      descriptionEn: "Provides additional plant compounds from cranberry extract.",
      icon: "🛡️"
    },
    {
      title: "Menopauza davrida qo‘llab-quvvatlash",
      titleRu: "Поддержка в период менопаузы",
      titleEn: "Support during menopause",
      description: "Menopauza va postmenopauza davrida Omega-3, vitaminlar va kollagen manbai.",
      descriptionRu: "Источник Омега-3, витаминов и коллагена в период менопаузы и постменопаузы.",
      descriptionEn: "A source of Omega-3, vitamins and collagen during menopause and postmenopause.",
      icon: "💫"
    }
  ],

  ingredients: [
    {
      name: "Omega-3 (EPA 60% va DHA 40%)",
      nameRu: "Омега-3 (ЭПК 60% и ДГК 40%)",
      nameEn: "Omega-3 (EPA 60% and DHA 40%)",
      icon: "🐟",
      benefits: [
        "Yurak-qon tomir tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
        "EPA va DHA organizm uchun muhim ko‘p to‘yinmagan yog‘ kislotalaridir.",
        "DHA miya va ko‘rish faoliyatining normal ishlashida muhim rol o‘ynaydi.",
        "Qondagi triglitseridlar darajasiga ta'sir qilishi mumkin."
      ],
      benefitsRu: [
        "Поддерживает нормальную работу сердечно-сосудистой системы.",
        "ЭПК и ДГК являются важными полиненасыщенными жирными кислотами.",
        "ДГК играет важную роль в нормальной работе мозга и зрительной функции.",
        "Может влиять на уровень триглицеридов в крови."
      ],
      benefitsEn: [
        "Supports normal cardiovascular function.",
        "EPA and DHA are important polyunsaturated fatty acids.",
        "DHA plays an important role in normal brain and visual function.",
        "May affect blood triglyceride levels."
      ]
    },
    {
      name: "Vitamin E",
      nameRu: "Витамин E",
      nameEn: "Vitamin E",
      icon: "🌟",
      benefits: [
        "Hujayralarni oksidlovchi stressdan himoya qilishga yordam beradi.",
        "Antioksidant xususiyatlarga ega.",
        "Hujayralarning normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Помогает защищать клетки от окислительного стресса.",
        "Обладает антиоксидантными свойствами.",
        "Поддерживает нормальную работу клеток."
      ],
      benefitsEn: [
        "Helps protect cells from oxidative stress.",
        "Has antioxidant properties.",
        "Supports normal cellular function."
      ]
    },
    {
      name: "Vitamin D3",
      nameRu: "Витамин D3",
      nameEn: "Vitamin D3",
      icon: "☀️",
      benefits: [
        "Kalsiy va fosforning normal so‘rilishiga yordam beradi.",
        "Suyaklar va tishlarning normal holatini saqlashda ishtirok etadi.",
        "Mushaklar va immun tizimining normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Способствует нормальному усвоению кальция и фосфора.",
        "Участвует в поддержании нормального состояния костей и зубов.",
        "Поддерживает нормальную работу мышц и иммунной системы."
      ],
      benefitsEn: [
        "Helps with normal absorption of calcium and phosphorus.",
        "Contributes to maintaining normal bones and teeth.",
        "Supports normal muscle and immune system function."
      ]
    },
    {
      name: "Vitamin K2 (MK-7)",
      nameRu: "Витамин K2 (МК-7)",
      nameEn: "Vitamin K2 (MK-7)",
      icon: "🎯",
      benefits: [
        "Qon ivishining normal jarayonida ishtirok etadi.",
        "Suyaklarning normal holatini saqlashga yordam beradi.",
        "Vitamin D3 bilan birgalikda suyak salomatligini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в нормальном процессе свертывания крови.",
        "Помогает поддерживать нормальное состояние костей.",
        "В сочетании с витамином D3 поддерживает здоровье костей."
      ],
      benefitsEn: [
        "Contributes to normal blood clotting.",
        "Helps maintain normal bone health.",
        "Together with vitamin D3, supports bone health."
      ]
    },
    {
      name: "Biotin",
      nameRu: "Биотин",
      nameEn: "Biotin",
      icon: "💅",
      benefits: [
        "Soch va terining normal holatini saqlashga yordam beradi.",
        "Tirnoqlarning normal holatini qo‘llab-quvvatlaydi.",
        "Yog‘, uglevod va energiya almashinuvida ishtirok etadi."
      ],
      benefitsRu: [
        "Помогает поддерживать нормальное состояние волос и кожи.",
        "Поддерживает нормальное состояние ногтей.",
        "Участвует в обмене жиров, углеводов и энергии."
      ],
      benefitsEn: [
        "Helps maintain normal hair and skin.",
        "Supports normal nail health.",
        "Participates in fat, carbohydrate and energy metabolism."
      ]
    },
    {
      name: "Kollagen (gidroliz qilingan)",
      nameRu: "Коллаген (гидролизованный)",
      nameEn: "Hydrolyzed collagen",
      icon: "🌸",
      benefits: [
        "Organizm uchun kollagen peptidlari manbai hisoblanadi.",
        "Teri, pay va biriktiruvchi to‘qimalar tarkibida mavjud bo‘lgan oqsil hisoblanadi.",
        "Formulada baliqdan olingan gidrolizlangan kollagen mavjud."
      ],
      benefitsRu: [
        "Является источником коллагеновых пептидов.",
        "Коллаген является белком, входящим в состав кожи, сухожилий и соединительной ткани.",
        "В составе формулы используется гидролизованный коллаген рыбного происхождения."
      ],
      benefitsEn: [
        "Provides a source of collagen peptides.",
        "Collagen is a protein found in skin, tendons and connective tissue.",
        "The formula contains hydrolyzed collagen of fish origin."
      ]
    },
    {
      name: "Klyukva ekstrakti (10:1)",
      nameRu: "Экстракт клюквы (10:1)",
      nameEn: "Cranberry extract (10:1)",
      icon: "🍒",
      benefits: [
        "O‘simlik antioksidantlari, jumladan proantotsianidinlar manbai.",
        "Siydik yo‘llari salomatligini qo‘llab-quvvatlash uchun an'anaviy ravishda ishlatiladi.",
        "Organizmni o‘simlik kelib chiqishidagi faol moddalar bilan ta'minlaydi."
      ],
      benefitsRu: [
        "Является источником растительных антиоксидантов, включая проантоцианидины.",
        "Традиционно используется для поддержки здоровья мочевыводящих путей.",
        "Обеспечивает организм активными веществами растительного происхождения."
      ],
      benefitsEn: [
        "Provides plant antioxidants, including proanthocyanidins.",
        "Traditionally used to support urinary tract health.",
        "Provides the body with plant-derived active compounds."
      ]
    }
  ],

  indications: [
    "Ayollar uchun qo‘shimcha Omega-3 yog‘ kislotalari, vitaminlar va kollagen manbai sifatida.",
    "Suyaklar, sochlar, teri va tirnoqlarning normal holatini qo‘llab-quvvatlash.",
    "Yurak-qon tomir tizimini qo‘llab-quvvatlash.",
    "Yoshlik va umumiy energiyani saqlashga qaratilgan qo‘shimcha oziqlantirish.",
    "Menopauza va postmenopauza davrida Omega-3, vitaminlar va kollagen manbai sifatida."
  ],

  indicationsRu: [
    "В качестве дополнительного источника Омега-3, витаминов и коллагена для женщин.",
    "Для поддержания нормального состояния костей, волос, кожи и ногтей.",
    "Для поддержки сердечно-сосудистой системы.",
    "В качестве дополнительного источника питательных веществ для поддержания общего тонуса и энергии.",
    "В качестве источника Омега-3, витаминов и коллагена в период менопаузы и постменопаузы."
  ],

  indicationsEn: [
    "As an additional source of Omega-3, vitamins and collagen for women.",
    "To support normal bone, hair, skin and nail health.",
    "To support cardiovascular health.",
    "As an additional source of nutrients to support general vitality and energy.",
    "As a source of Omega-3, vitamins and collagen during menopause and postmenopause."
  ],

  usage: {
    dosage: "18 yoshdan kattalar uchun: kuniga 1 marta 1 kapsuladan.",
    dosageRu: "Взрослым с 18 лет: по 1 капсуле 1 раз в день.",
    dosageEn: "Adults aged 18 and over: 1 capsule once daily.",

    timing: "Ovqat paytida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "1 oydan 3 oygacha. Takroriy qo‘llashga ruxsat etiladi.",
    durationRu: "От 1 до 3 месяцев. Допускается повторный курс.",
    durationEn: "From 1 to 3 months. The course may be repeated.",

    instruction: "Yetarli miqdorda suv bilan qabul qiling.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Tarkibiy qismlarga individual toqatsizlik.",
    "Homiladorlik va emizish davri — faqat shifokor tavsiyasi bilan.",
    "18 yoshgacha bo‘lgan bolalar.",
    "Qon ketishga moyillik yoki antikoagulyantlar qabul qilish holatlarida ehtiyotkorlik bilan qo‘llash kerak.",
    "Baliq yoki baliq mahsulotlariga allergiyasi bo‘lganlar tarkibdagi baliq yog‘i va kollagenni hisobga olishi kerak."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Беременность и период грудного вскармливания — только по рекомендации врача.",
    "Детский возраст до 18 лет.",
    "При склонности к кровотечениям или приеме антикоагулянтов применять с осторожностью.",
    "Лицам с аллергией на рыбу или рыбные продукты следует учитывать наличие рыбьего жира и рыбного коллагена."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Pregnancy and breastfeeding — only on a doctor's recommendation.",
    "Children under 18 years of age.",
    "Use with caution in people with a tendency to bleed or those taking anticoagulants.",
    "People with fish or fish-product allergies should consider the fish oil and fish collagen content."
  ],

  sideEffects: [
    "Tavsiya etilgan dozada nojo‘ya ta'sirlar kam uchraydi.",
    "Noyob hollarda allergik reaksiyalar kuzatilishi mumkin.",
    "Yengil dispeptik buzilishlar, masalan, ko‘ngil aynishi yoki qorin noqulayligi kuzatilishi mumkin."
  ],

  sideEffectsRu: [
    "При применении в рекомендуемых дозах побочные эффекты встречаются редко.",
    "В редких случаях возможны аллергические реакции.",
    "Возможны легкие диспепсические расстройства, например тошнота или дискомфорт в животе."
  ],

  sideEffectsEn: [
    "Side effects are uncommon when used at the recommended dose.",
    "Allergic reactions may occur rarely.",
    "Mild digestive disturbances, such as nausea or abdominal discomfort, may occur."
  ],

  overdose: {
    uz: "Me'yordan ortiq qabul qilish qon bosimining ko‘tarilishi, bosh og‘rig‘i yoki yurak urishining tezlashishiga olib kelishi mumkin. Bunday holatlarda qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "Передозировка может проявляться повышением артериального давления, головной болью или учащенным сердцебиением. В таких случаях прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may cause increased blood pressure, headache or rapid heartbeat. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Mahsulot antikoagulyantlar va qon ivishiga ta'sir qiluvchi dorilar bilan o‘zaro ta'sirlashishi mumkin. Bunday dorilarni qabul qilayotganlar shifokor bilan maslahatlashishi kerak.",
      "Varfarin kabi vitamin K antagonistlarini qabul qilayotganlar K2 vitamini mavjudligi sababli shifokor bilan maslahatlashishi zarur.",
      "Temir saqlovchi preparatlarni mahsulot bilan bir vaqtda emas, alohida vaqtda qabul qilish tavsiya etiladi."
    ],
    ru: [
      "Продукт может взаимодействовать с антикоагулянтами и препаратами, влияющими на свертываемость крови. При приеме таких препаратов необходима консультация врача.",
      "При приеме антагонистов витамина K, таких как варфарин, необходимо проконсультироваться с врачом из-за наличия витамина K2.",
      "Препараты железа рекомендуется принимать отдельно, не одновременно с данным продуктом."
    ],
    en: [
      "The product may interact with anticoagulants and medicines that affect blood clotting. Consult a doctor if taking such medicines.",
      "People taking vitamin K antagonists such as warfarin should consult a doctor because the product contains vitamin K2.",
      "Iron supplements are recommended to be taken separately rather than at the same time as this product."
    ]
  },

  warnings: [
    "Antikoagulyantlar yoki qon ivishiga ta'sir qiluvchi dorilar qabul qilayotgan bo‘lsangiz, mahsulotni ishlatishdan oldin shifokor bilan maslahatlashing.",
    "Varfarin qabul qilayotganlar K2 vitamini mavjudligi sababli shifokor nazoratisiz mahsulotni boshlamasligi kerak.",
    "Temir preparatlarini alohida vaqtda qabul qilish tavsiya etiladi.",
    "Klyukva ekstrakti siydik yo‘llari infeksiyalarini davolash uchun dori vositasi hisoblanmaydi. Infeksiya belgilari bo‘lsa, shifokorga murojaat qiling.",
    "Biotin ayrim laboratoriya tahlillari natijalariga ta'sir qilishi mumkin. Tahlil topshirishdan oldin shifokor va laboratoriya xodimiga biotin qabul qilayotganingizni ayting.",
    "Mahsulot biologik faol qo‘shimcha hisoblanadi va kasalliklarni tashxislash yoki davolash uchun mo‘ljallanmagan."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Ayollar uchun maxsus kompleks",
      textRu: "Специальный комплекс для женщин",
      textEn: "A specialized complex for women"
    },
    {
      text: "Omega-3 va muhim vitaminlar",
      textRu: "Омега-3 и важные витамины",
      textEn: "Omega-3 and essential vitamins"
    },
    {
      text: "Baliq kollageni va biotin",
      textRu: "Рыбный коллаген и биотин",
      textEn: "Fish collagen and biotin"
    },
    {
      text: "Klyukva ekstrakti bilan",
      textRu: "С экстрактом клюквы",
      textEn: "With cranberry extract"
    }
  ]
    },
  
    6: {
  id: 6,
  name: "KARTAZ",
  nameRu: "КАРТАЗ",
  nameEn: "KARTAZ",

  tagline: "Bo‘g‘imlar salomatligini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки здоровья суставов",
  taglineEn: "For joint health support",

  image: kartaz,
  pdf: "https://drive.google.com/file/d/1gWnOJlznsyykEOGfe8FltBY1ZwV_6qCE/view?usp=sharing",

  volume: "30 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.7,
  reviews: 628,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "125,000",
  currency: "сум",

  composition: [
    {
      name: "Curcuma longa (zarchava) ekstrakti",
      nameRu: "Экстракт Curcuma longa (куркума)",
      nameEn: "Curcuma longa (turmeric) extract",
      amount: "300 mg",
      per: "1 kapsul"
    },
    {
      name: "Boswellia serrata ekstrakti",
      nameRu: "Экстракт Boswellia serrata (босвеллия)",
      nameEn: "Boswellia serrata extract",
      amount: "250 mg",
      per: "1 kapsul",
      details: "60% bosvellik kislotasi"
    },
    {
      name: "Piperin",
      nameRu: "Пиперин",
      nameEn: "Piperine",
      amount: "5 mg",
      per: "1 kapsul"
    }
  ],

  benefits: [
    {
      title: "Bo‘g‘imlar harakatchanligini qo‘llab-quvvatlash",
      titleRu: "Поддержка подвижности суставов",
      titleEn: "Supporting joint mobility",
      description: "Bo‘g‘imlarning normal harakatchanligini saqlashga qaratilgan.",
      descriptionRu: "Предназначен для поддержания нормальной подвижности суставов.",
      descriptionEn: "Designed to support normal joint mobility.",
      icon: "🦴"
    },
    {
      title: "Yallig‘lanish jarayonlarini qo‘llab-quvvatlash",
      titleRu: "Поддержка при воспалительных процессах",
      titleEn: "Support during inflammatory processes",
      description: "Zarchava va bosvellia ekstraktlari tarkibidagi faol moddalarni o‘z ichiga oladi.",
      descriptionRu: "Содержит активные компоненты экстрактов куркумы и босвеллии.",
      descriptionEn: "Contains active compounds from turmeric and Boswellia extracts.",
      icon: "🛡️"
    },
    {
      title: "Tayanch-harakat tizimi",
      titleRu: "Опорно-двигательная система",
      titleEn: "Musculoskeletal system",
      description: "Bo‘g‘imlar salomatligini qo‘llab-quvvatlash uchun mo‘ljallangan kompleks.",
      descriptionRu: "Комплекс предназначен для поддержки здоровья суставов.",
      descriptionEn: "A complex designed to support joint health.",
      icon: "💪"
    },
    {
      title: "Antioksidant qo‘llab-quvvatlash",
      titleRu: "Антиоксидантная поддержка",
      titleEn: "Antioxidant support",
      description: "Zarchava tarkibidagi kurkumin antioksidant xususiyatlarga ega.",
      descriptionRu: "Куркумин, содержащийся в куркуме, обладает антиоксидантными свойствами.",
      descriptionEn: "Curcumin in turmeric has antioxidant properties.",
      icon: "✨"
    }
  ],

  ingredients: [
    {
      name: "Curcuma longa (zarchava) ekstrakti",
      nameRu: "Экстракт Curcuma longa (куркума)",
      nameEn: "Curcuma longa (turmeric) extract",
      icon: "🌿",
      benefits: [
        "Kurkumin zarchavaning asosiy faol komponentlaridan biridir.",
        "Antioksidant xususiyatlarga ega.",
        "Organizmdagi yallig‘lanish jarayonlari bilan bog‘liq biologik mexanizmlarga ta'sir qilishi mumkin.",
        "An'anaviy ravishda bo‘g‘imlar salomatligini qo‘llab-quvvatlash uchun ishlatiladi."
      ],
      benefitsRu: [
        "Куркумин является одним из основных активных компонентов куркумы.",
        "Обладает антиоксидантными свойствами.",
        "Может влиять на биологические механизмы, связанные с воспалительными процессами в организме.",
        "Традиционно используется для поддержки здоровья суставов."
      ],
      benefitsEn: [
        "Curcumin is one of the main active compounds in turmeric.",
        "Has antioxidant properties.",
        "May affect biological mechanisms associated with inflammatory processes in the body.",
        "Traditionally used to support joint health."
      ]
    },
    {
      name: "Boswellia serrata ekstrakti",
      nameRu: "Экстракт Boswellia serrata (босвеллия)",
      nameEn: "Boswellia serrata extract",
      icon: "🌳",
      benefits: [
        "Tarkibida 60% bosvellik kislotalari mavjud.",
        "Bosvellik kislotalar yallig‘lanish jarayonlari bilan bog‘liq biologik mexanizmlarga ta'sir qilishi mumkin.",
        "Bo‘g‘imlar harakatchanligini qo‘llab-quvvatlash maqsadida ishlatiladi.",
        "An'anaviy o‘simlik preparatlarida qo‘llaniladi."
      ],
      benefitsRu: [
        "Содержит 60% босвеллиевых кислот.",
        "Босвеллиевые кислоты могут влиять на биологические механизмы, связанные с воспалительными процессами.",
        "Используется для поддержки подвижности суставов.",
        "Применяется в традиционных растительных препаратах."
      ],
      benefitsEn: [
        "Contains 60% boswellic acids.",
        "Boswellic acids may affect biological mechanisms associated with inflammatory processes.",
        "Used to support joint mobility.",
        "Used in traditional herbal preparations."
      ]
    },
    {
      name: "Piperin",
      nameRu: "Пиперин",
      nameEn: "Piperine",
      icon: "🌶️",
      benefits: [
        "Qora murchning asosiy faol komponentlaridan biridir.",
        "Kurkuminning organizmda o‘zlashtirilishiga ta'sir qilishi mumkin.",
        "Ayrim oziq moddalar va faol birikmalarning so‘rilish jarayonlariga ta'sir qiladi.",
        "Antioksidant xususiyatlarga ega."
      ],
      benefitsRu: [
        "Является одним из основных активных компонентов черного перца.",
        "Может влиять на усвоение куркумина организмом.",
        "Влияет на процессы всасывания некоторых питательных веществ и активных соединений.",
        "Обладает антиоксидантными свойствами."
      ],
      benefitsEn: [
        "Is one of the main active compounds in black pepper.",
        "May influence the body's absorption of curcumin.",
        "Affects the absorption of certain nutrients and active compounds.",
        "Has antioxidant properties."
      ]
    }
  ],

  indications: [
    "Bo‘g‘imlar harakatchanligini qo‘llab-quvvatlash.",
    "Tog‘ay to‘qimasini himoya qilishga qaratilgan qo‘shimcha oziqlantirish.",
    "Organizmni o‘simlik ekstraktlari va antioksidant birikmalar bilan ta'minlash.",
    "Tayanch-harakat tizimi salomatligini qo‘llab-quvvatlash."
  ],

  indicationsRu: [
    "Для поддержки подвижности суставов.",
    "В качестве дополнительной нутритивной поддержки здоровья хрящевой ткани.",
    "В качестве источника растительных экстрактов и антиоксидантных соединений.",
    "Для поддержки здоровья опорно-двигательной системы."
  ],

  indicationsEn: [
    "To support joint mobility.",
    "As additional nutritional support for cartilage health.",
    "As a source of plant extracts and antioxidant compounds.",
    "To support musculoskeletal health."
  ],

  usage: {
    dosage: "18 yoshdan kattalarga: kuniga 1 marta 1 kapsuladan.",
    dosageRu: "Взрослым с 18 лет: по 1 капсуле 1 раз в день.",
    dosageEn: "Adults aged 18 and over: 1 capsule once daily.",

    timing: "Ovqat vaqtida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "1–2 oy. Zarurat tug‘ilganda kurs takrorlanishi mumkin.",
    durationRu: "1–2 месяца. При необходимости курс можно повторить.",
    durationEn: "1–2 months. The course may be repeated if necessary.",

    instruction: "Yetarli miqdorda suv bilan ichiladi.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Komponentlarga individual toqatsizlik.",
    "Homiladorlik va emizish davri — faqat shifokor tavsiyasi bilan.",
    "18 yoshgacha bo‘lgan bolalar.",
    "Oshqozon-ichak kasalliklari kuchaygan davrda, jumladan oshqozon yarasi va yuqori kislotalilikdagi gastritda ehtiyotkorlik bilan.",
    "Antikoagulyant va antiagregant dorilar qabul qilganda — shifokor nazorati ostida."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Беременность и период грудного вскармливания — только по рекомендации врача.",
    "Детский возраст до 18 лет.",
    "При обострении заболеваний желудочно-кишечного тракта, включая язву желудка и гастрит с повышенной кислотностью, применять с осторожностью.",
    "При приеме антикоагулянтов и антиагрегантов — под наблюдением врача."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Pregnancy and breastfeeding — only on a doctor's recommendation.",
    "Children under 18 years of age.",
    "Use with caution during exacerbations of gastrointestinal conditions, including stomach ulcers and gastritis with high acidity.",
    "Use under medical supervision when taking anticoagulants or antiplatelet medicines."
  ],

  sideEffects: [
    "Tavsiya etilgan dozada nojo‘ya ta'sirlar kam uchrashi mumkin.",
    "Kam hollarda allergik reaksiyalar: terida toshma yoki qichishish.",
    "Dispeptik holatlar: ko‘ngil aynishi yoki qorin og‘irligi."
  ],

  sideEffectsRu: [
    "При применении рекомендуемой дозы побочные эффекты встречаются редко.",
    "В редких случаях возможны аллергические реакции: кожная сыпь или зуд.",
    "Возможны диспепсические явления: тошнота или тяжесть в животе."
  ],

  sideEffectsEn: [
    "Side effects are uncommon when used at the recommended dose.",
    "Rare allergic reactions may include skin rash or itching.",
    "Digestive disturbances such as nausea or abdominal heaviness may occur."
  ],

  overdose: {
    uz: "Dozani oshirib yuborish ko‘ngil aynishi, hazm buzilishi va bosh og‘rig‘i kabi nojo‘ya ta'sirlarni kuchaytirishi mumkin. Bunday holatda qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "Передозировка может усилить побочные эффекты, такие как тошнота, расстройство пищеварения и головная боль. В таком случае прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may increase side effects such as nausea, digestive disturbances and headache. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Antikoagulyantlar, jumladan varfarin, hamda antiagregantlar bilan birga qabul qilinganda qon ketish xavfiga ta'sir qilishi mumkin.",
      "Aspirin qabul qilayotganlar mahsulotni ishlatishdan oldin shifokor bilan maslahatlashishi kerak.",
      "Piperin ayrim dori vositalarining so‘rilishi va organizmda parchalanishiga ta'sir qilishi mumkin.",
      "Yallig‘lanishga qarshi dorilar bilan birga qabul qilishdan oldin shifokor yoki farmatsevt bilan maslahatlashish tavsiya etiladi."
    ],
    ru: [
      "При совместном применении с антикоагулянтами, включая варфарин, и антиагрегантами продукт может влиять на риск кровотечений.",
      "При приеме аспирина перед использованием продукта следует проконсультироваться с врачом.",
      "Пиперин может влиять на всасывание и метаболизм некоторых лекарственных средств.",
      "Перед совместным применением с противовоспалительными препаратами рекомендуется проконсультироваться с врачом или фармацевтом."
    ],
    en: [
      "When taken with anticoagulants, including warfarin, or antiplatelet medicines, the product may affect bleeding risk.",
      "People taking aspirin should consult a doctor before using the product.",
      "Piperine may affect the absorption and metabolism of certain medicines.",
      "Consult a doctor or pharmacist before combining this product with anti-inflammatory medicines."
    ]
  },

  warnings: [
    "Varfarin, aspirin yoki boshqa qon ivishiga ta'sir qiluvchi dorilar qabul qilayotgan bo‘lsangiz, shifokor bilan maslahatlashmasdan mahsulotni boshlamang.",
    "Piperin ayrim dori vositalarining organizmdagi miqdori va ta'sirini o‘zgartirishi mumkin. Doimiy dori qabul qilayotgan bo‘lsangiz, farmatsevt yoki shifokor bilan maslahatlashing.",
    "Oshqozon yarasi yoki gastrit kuchaygan davrida ehtiyotkorlik talab etiladi.",
    "Bo‘g‘imlarda kuchli og‘riq, shish, qizarish yoki harakat cheklanishi kuzatilsa, tibbiy ko‘rikdan o‘ting.",
    "Mahsulot biologik faol qo‘shimcha hisoblanadi. Artrit, osteoartrit yoki boshqa kasalliklarni tashxislash va davolash uchun mo‘ljallanmagan hamda shifokor buyurgan davolash o‘rnini bosmaydi."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Zarchava va bosvellia ekstraktlari",
      textRu: "Экстракты куркумы и босвеллии",
      textEn: "Turmeric and Boswellia extracts"
    },
    {
      text: "Piperin bilan boyitilgan formula",
      textRu: "Формула с пиперином",
      textEn: "Piperine-enriched formula"
    },
    {
      text: "Bo‘g‘imlar salomatligini qo‘llab-quvvatlash",
      textRu: "Поддержка здоровья суставов",
      textEn: "Joint health support"
    },
    {
      text: "O‘simlik ekstraktlari asosida",
      textRu: "На основе растительных экстрактов",
      textEn: "Plant-extract-based formula"
    }
  ]
    },
 
    7: {
  id: 7,
  name: "NOOTROZ",
  nameRu: "НООТРОЗ",
  nameEn: "NOOTROZ",

  tagline: "Miya faoliyati, xotira va diqqatni qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки работы мозга, памяти и внимания",
  taglineEn: "For brain function, memory and focus support",

  image: nootroz,
  pdf: "https://drive.google.com/file/d/19AgvUudggUqiGbxao4jVUZNOiOaOMOTb/view?usp=sharing",

  volume: "30 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.8,
  reviews: 891,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "115,000",
  currency: "сум",

  composition: [
    {
      name: "Ginkgo Biloba bargi ekstrakti",
      nameRu: "Экстракт листьев Ginkgo Biloba",
      nameEn: "Ginkgo Biloba leaf extract",
      amount: "180 mg",
      per: "1 kapsul"
    },
    {
      name: "Omega-3 yog‘ kislotalari",
      nameRu: "Жирные кислоты Омега-3",
      nameEn: "Omega-3 fatty acids",
      amount: "330 mg",
      per: "1 kapsul",
      details: "DHA 12% va EPA 18%"
    },
    {
      name: "Vitamin B1 (Tiamin)",
      nameRu: "Витамин B1 (тиамин)",
      nameEn: "Vitamin B1 (Thiamine)",
      amount: "0.7 mg",
      per: "1 kapsul"
    },
    {
      name: "Vitamin B6 (Piridoksin)",
      nameRu: "Витамин B6 (пиридоксин)",
      nameEn: "Vitamin B6 (Pyridoxine)",
      amount: "1 mg",
      per: "1 kapsul"
    },
    {
      name: "Vitamin B12",
      nameRu: "Витамин B12",
      nameEn: "Vitamin B12",
      amount: "1 mkg",
      per: "1 kapsul"
    },
    {
      name: "Pantoten kislotasi",
      nameRu: "Пантотеновая кислота",
      nameEn: "Pantothenic acid",
      amount: "3 mg",
      per: "1 kapsul"
    }
  ],

  benefits: [
    {
      title: "Xotira va diqqat",
      titleRu: "Память и внимание",
      titleEn: "Memory and attention",
      description: "Xotira, diqqat va konsentratsiyani qo‘llab-quvvatlashga yordam beradi.",
      descriptionRu: "Помогает поддерживать память, внимание и концентрацию.",
      descriptionEn: "Helps support memory, attention and concentration.",
      icon: "🧠"
    },
    {
      title: "Miya faoliyatini qo‘llab-quvvatlash",
      titleRu: "Поддержка работы мозга",
      titleEn: "Brain function support",
      description: "Ginkgo Biloba va Omega-3 yog‘ kislotalarini o‘z ichiga oladi.",
      descriptionRu: "Содержит экстракт гинкго билоба и жирные кислоты Омега-3.",
      descriptionEn: "Contains Ginkgo Biloba extract and Omega-3 fatty acids.",
      icon: "🔄"
    },
    {
      title: "Asab tizimi",
      titleRu: "Нервная система",
      titleEn: "Nervous system",
      description: "B1, B6 va B12 vitaminlari asab tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
      descriptionRu: "Витамины B1, B6 и B12 поддерживают нормальную работу нервной системы.",
      descriptionEn: "Vitamins B1, B6 and B12 support normal nervous system function.",
      icon: "⚡"
    },
    {
      title: "Aqliy yuklama va charchoq",
      titleRu: "Умственные нагрузки и усталость",
      titleEn: "Mental workload and fatigue",
      description: "Energiya almashinuvi va aqliy faoliyatni qo‘llab-quvvatlovchi vitaminlarni o‘z ichiga oladi.",
      descriptionRu: "Содержит витамины, участвующие в энергетическом обмене и поддержке умственной деятельности.",
      descriptionEn: "Contains vitamins involved in energy metabolism and mental function.",
      icon: "📚"
    }
  ],

  ingredients: [
    {
      name: "Ginkgo Biloba bargi ekstrakti",
      nameRu: "Экстракт листьев Ginkgo Biloba",
      nameEn: "Ginkgo Biloba leaf extract",
      icon: "🌿",
      benefits: [
        "Kognitiv faoliyatni qo‘llab-quvvatlash uchun ishlatiladigan o‘simlik ekstrakti.",
        "Mikrotsirkulyatsiya bilan bog‘liq jarayonlarga ta'sir qilishi mumkin.",
        "Antioksidant xususiyatlarga ega.",
        "Xotira va diqqatni qo‘llab-quvvatlash maqsadida qo‘llaniladi."
      ],
      benefitsRu: [
        "Растительный экстракт, используемый для поддержки когнитивной деятельности.",
        "Может влиять на процессы, связанные с микроциркуляцией.",
        "Обладает антиоксидантными свойствами.",
        "Применяется с целью поддержки памяти и внимания."
      ],
      benefitsEn: [
        "A plant extract used to support cognitive function.",
        "May influence processes related to microcirculation.",
        "Has antioxidant properties.",
        "Used to support memory and attention."
      ]
    },
    {
      name: "Omega-3 yog‘ kislotalari (DHA 12% va EPA 18%)",
      nameRu: "Жирные кислоты Омега-3 (ДГК 12% и ЭПК 18%)",
      nameEn: "Omega-3 fatty acids (DHA 12% and EPA 18%)",
      icon: "🐟",
      benefits: [
        "DHA miya va asab to‘qimalarining tarkibiy qismi hisoblanadi.",
        "EPA va DHA yurak-qon tomir tizimining normal faoliyatini qo‘llab-quvvatlashda ishtirok etadi.",
        "Hujayra membranalari faoliyati uchun muhim.",
        "Organizmni Omega-3 yog‘ kislotalari bilan ta'minlaydi."
      ],
      benefitsRu: [
        "ДГК является структурным компонентом тканей мозга и нервной системы.",
        "ЭПК и ДГК участвуют в поддержании нормальной работы сердечно-сосудистой системы.",
        "Важны для функционирования клеточных мембран.",
        "Обеспечивают организм жирными кислотами Омега-3."
      ],
      benefitsEn: [
        "DHA is a structural component of brain and nervous system tissues.",
        "EPA and DHA contribute to normal cardiovascular function.",
        "Important for cell membrane function.",
        "Provide the body with Omega-3 fatty acids."
      ]
    },
    {
      name: "Vitamin B1 (Tiamin)",
      nameRu: "Витамин B1 (тиамин)",
      nameEn: "Vitamin B1 (Thiamine)",
      icon: "💊",
      benefits: [
        "Uglevod almashinuvida ishtirok etadi.",
        "Organizmda energiya hosil bo‘lishiga yordam beradi.",
        "Asab tizimining normal faoliyati uchun zarur.",
        "Normal psixologik faoliyatni qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в углеводном обмене.",
        "Помогает организму вырабатывать энергию.",
        "Необходим для нормальной работы нервной системы.",
        "Поддерживает нормальную психологическую функцию."
      ],
      benefitsEn: [
        "Participates in carbohydrate metabolism.",
        "Helps the body produce energy.",
        "Necessary for normal nervous system function.",
        "Supports normal psychological function."
      ]
    },
    {
      name: "Vitamin B6 (Piridoksin)",
      nameRu: "Витамин B6 (пиридоксин)",
      nameEn: "Vitamin B6 (Pyridoxine)",
      icon: "💊",
      benefits: [
        "Neyrotransmitterlar sintezida ishtirok etadi.",
        "Oqsil va aminokislotalar almashinuviga yordam beradi.",
        "Asab tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
        "Energiya almashinuvida ishtirok etadi."
      ],
      benefitsRu: [
        "Участвует в синтезе нейромедиаторов.",
        "Помогает обмену белков и аминокислот.",
        "Поддерживает нормальную работу нервной системы.",
        "Участвует в энергетическом обмене."
      ],
      benefitsEn: [
        "Participates in neurotransmitter synthesis.",
        "Contributes to protein and amino acid metabolism.",
        "Supports normal nervous system function.",
        "Participates in energy metabolism."
      ]
    },
    {
      name: "Vitamin B12",
      nameRu: "Витамин B12",
      nameEn: "Vitamin B12",
      icon: "💊",
      benefits: [
        "Asab tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
        "Qizil qon tanachalari hosil bo‘lishida ishtirok etadi.",
        "DNK sintezi uchun zarur.",
        "Energiya almashinuvida ishtirok etadi."
      ],
      benefitsRu: [
        "Поддерживает нормальную работу нервной системы.",
        "Участвует в образовании красных кровяных клеток.",
        "Необходим для синтеза ДНК.",
        "Участвует в энергетическом обмене."
      ],
      benefitsEn: [
        "Supports normal nervous system function.",
        "Participates in red blood cell formation.",
        "Essential for DNA synthesis.",
        "Participates in energy metabolism."
      ]
    },
    {
      name: "Pantoten kislotasi (Vitamin B5)",
      nameRu: "Пантотеновая кислота (витамин B5)",
      nameEn: "Pantothenic acid (Vitamin B5)",
      icon: "💊",
      benefits: [
        "Koenzim A tarkibiga kiradi.",
        "Energiya almashinuvida ishtirok etadi.",
        "Steroid gormonlar va ayrim neyromediatorlar sintezida ishtirok etadi.",
        "Aqliy faoliyat uchun zarur bo‘lgan normal energiya almashinuvini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Входит в состав кофермента A.",
        "Участвует в энергетическом обмене.",
        "Участвует в синтезе стероидных гормонов и некоторых нейромедиаторов.",
        "Поддерживает нормальный энергетический обмен, необходимый для умственной деятельности."
      ],
      benefitsEn: [
        "Is a component of coenzyme A.",
        "Participates in energy metabolism.",
        "Participates in the synthesis of steroid hormones and certain neurotransmitters.",
        "Supports normal energy metabolism needed for mental activity."
      ]
    }
  ],

  indications: [
    "Xotira, diqqat va konsentratsiyani qo‘llab-quvvatlash.",
    "Aqliy yuklamalar davrida asab tizimini qo‘llab-quvvatlash.",
    "Charchoq va stress holatlarida qo‘shimcha oziq moddalar manbai sifatida.",
    "Keksalarda kognitiv salomatlikni qo‘llab-quvvatlash maqsadida."
  ],

  indicationsRu: [
    "Для поддержки памяти, внимания и концентрации.",
    "Для поддержки нервной системы в периоды умственных нагрузок.",
    "В качестве дополнительного источника питательных веществ при усталости и стрессе.",
    "Для поддержки когнитивного здоровья в пожилом возрасте."
  ],

  indicationsEn: [
    "To support memory, attention and concentration.",
    "To support the nervous system during periods of mental workload.",
    "As an additional source of nutrients during fatigue and stress.",
    "To support cognitive health in older adults."
  ],

  usage: {
    dosage: "18 yoshdan kattalar: kuniga 1 kapsula.",
    dosageRu: "Взрослым с 18 лет: по 1 капсуле в день.",
    dosageEn: "Adults aged 18 and over: 1 capsule daily.",

    timing: "Ovqat vaqtida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "1–2 oy. Zarurat bo‘lsa, kursni takrorlash mumkin.",
    durationRu: "1–2 месяца. При необходимости курс можно повторить.",
    durationEn: "1–2 months. The course may be repeated if necessary.",

    instruction: "Yetarli miqdorda suv bilan ichiladi.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Tarkibiy qismlarga individual toqatsizlik.",
    "Homiladorlik va emizish davri — faqat shifokor tavsiyasi bilan.",
    "12 yoshgacha bo‘lgan bolalar.",
    "Qon ketishga moyillik yoki antikoagulyantlar qabul qilishda ehtiyotkorlik bilan."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Беременность и период грудного вскармливания — только по рекомендации врача.",
    "Детский возраст до 12 лет.",
    "При склонности к кровотечениям или приеме антикоагулянтов применять с осторожностью."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Pregnancy and breastfeeding — only on a doctor's recommendation.",
    "Children under 12 years of age.",
    "Use with caution in people prone to bleeding or taking anticoagulants."
  ],

  sideEffects: [
    "Tavsiya etilgan dozada nojo‘ya ta'sirlar kam uchrashi mumkin.",
    "Kamdan-kam hollarda allergik reaksiyalar: terida toshma yoki qichishish.",
    "Ovqat hazm qilishdagi noqulayliklar: ko‘ngil aynishi yoki qorin og‘irligi."
  ],

  sideEffectsRu: [
    "При соблюдении рекомендуемой дозировки побочные эффекты встречаются редко.",
    "В редких случаях возможны аллергические реакции: кожная сыпь или зуд.",
    "Возможен дискомфорт со стороны пищеварительной системы: тошнота или тяжесть в животе."
  ],

  sideEffectsEn: [
    "Side effects are uncommon when the recommended dose is followed.",
    "Rare allergic reactions may include skin rash or itching.",
    "Digestive discomfort such as nausea or abdominal heaviness may occur."
  ],

  overdose: {
    uz: "Doza oshirib yuborilganda ko‘ngil aynishi, oshqozon buzilishi va bosh og‘rig‘i kuzatilishi mumkin. Bunday holatda qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "При превышении дозы возможны тошнота, расстройство желудка и головная боль. В таком случае прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may cause nausea, stomach upset and headache. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Ginkgo Biloba varfarin va aspirin kabi qon ivishiga ta'sir qiluvchi dorilar bilan o‘zaro ta'sirlashishi va qon ketish xavfiga ta'sir qilishi mumkin.",
      "Omega-3 yog‘ kislotalari lipid darajasini pasaytiruvchi dorilar bilan birga qo‘llanganda ularning ta'siriga qo‘shimcha ta'sir ko‘rsatishi mumkin.",
      "B guruhi vitaminlari ko‘pchilik dorilar bilan mos keladi, biroq boshqa vitamin komplekslari bilan birga qabul qilishda umumiy dozani hisobga olish kerak.",
      "Doimiy dori vositalarini qabul qilayotgan bo‘lsangiz, shifokor yoki farmatsevt bilan maslahatlashish tavsiya etiladi."
    ],
    ru: [
      "Гинкго билоба может взаимодействовать с препаратами, влияющими на свертываемость крови, такими как варфарин и аспирин, и влиять на риск кровотечений.",
      "Жирные кислоты Омега-3 могут дополнительно влиять на действие препаратов, снижающих уровень липидов.",
      "Витамины группы B совместимы со многими лекарствами, однако при сочетании с другими витаминными комплексами следует учитывать суммарную дозировку.",
      "При регулярном приеме лекарств рекомендуется проконсультироваться с врачом или фармацевтом."
    ],
    en: [
      "Ginkgo Biloba may interact with medicines that affect blood clotting, such as warfarin and aspirin, and may influence bleeding risk.",
      "Omega-3 fatty acids may have an additional effect when used with lipid-lowering medicines.",
      "B vitamins are compatible with many medicines, but total intake should be considered when combining vitamin complexes.",
      "Consult a doctor or pharmacist if you take regular medication."
    ]
  },

  warnings: [
    "Ginkgo Biloba qon ivishiga ta'sir qiluvchi dorilar bilan o‘zaro ta'sirlashishi mumkin. Varfarin, aspirin yoki boshqa antikoagulyant va antiagregantlarni qabul qilsangiz, shifokor bilan maslahatlashmasdan mahsulotni ishlatmang.",
    "Qon ketishga moyilligi bo‘lgan shaxslar mahsulotni ehtiyotkorlik bilan qo‘llashi kerak.",
    "18 yoshgacha bo‘lganlar uchun yo‘riqnomada aniq doza belgilanmagan.",
    "Mahsulot biologik faol qo‘shimcha hisoblanadi. Demensiya, xotira buzilishi yoki boshqa nevrologik kasalliklarni davolash uchun mo‘ljallanmagan va shifokor buyurgan davolash o‘rnini bosmaydi.",
    "Xotira yoki diqqat bilan bog‘liq muammolar davom etsa yoki kuchaysa, shifokorga murojaat qiling."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Ginkgo Biloba ekstrakti",
      textRu: "Экстракт Ginkgo Biloba",
      textEn: "Ginkgo Biloba extract"
    },
    {
      text: "Omega-3 yog‘ kislotalari",
      textRu: "Жирные кислоты Омега-3",
      textEn: "Omega-3 fatty acids"
    },
    {
      text: "B guruhi vitaminlari",
      textRu: "Витамины группы B",
      textEn: "B-complex vitamins"
    },
    {
      text: "Xotira va diqqatni qo‘llab-quvvatlash",
      textRu: "Поддержка памяти и внимания",
      textEn: "Memory and attention support"
    }
  ]
    },
  
    8: {
  id: 8,
  name: "RICH OMEGOS",
  nameRu: "РИЧ ОМЕГОС",
  nameEn: "RICH OMEGOS",

  tagline: "Yuqori konsentratsiyali Omega-3",
  taglineRu: "Высококонцентрированная Омега-3",
  taglineEn: "High-concentration Omega-3",

  image: richomegos,
  pdf: "https://drive.google.com/file/d/1HWqc1s7MHav014gXH7zceJ0UvNHH0tVb/view?usp=sharing",

  volume: "30 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.9,
  reviews: 1023,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "135,000",
  currency: "сум",

  composition: [
    {
      name: "Omega-3 yog‘ kislotalari",
      nameRu: "Жирные кислоты Омега-3",
      nameEn: "Omega-3 fatty acids",
      amount: "1230 mg",
      per: "1 kapsul",
      details: "DHA 12% va EPA 18%"
    },
    {
      name: "Astaksantin",
      nameRu: "Астаксантин",
      nameEn: "Astaxanthin",
      amount: "6 mg",
      per: "1 kapsul"
    },
    {
      name: "Vitamin E (d-α-tokoferol)",
      nameRu: "Витамин E (d-α-токоферол)",
      nameEn: "Vitamin E (d-alpha-tocopherol)",
      amount: "5 mg",
      per: "1 kapsul"
    }
  ],

  benefits: [
    {
      title: "Yurak va qon tomir salomatligi",
      titleRu: "Здоровье сердца и сосудов",
      titleEn: "Heart and cardiovascular health",
      description: "Omega-3 yog‘ kislotalari yurak-qon tomir tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
      descriptionRu: "Жирные кислоты Омега-3 поддерживают нормальную работу сердечно-сосудистой системы.",
      descriptionEn: "Omega-3 fatty acids support normal cardiovascular function.",
      icon: "❤️"
    },
    {
      title: "Miya va kognitiv faoliyat",
      titleRu: "Мозг и когнитивная функция",
      titleEn: "Brain and cognitive function",
      description: "DHA miya va asab to‘qimalarining tarkibiy qismi hisoblanadi.",
      descriptionRu: "ДГК является структурным компонентом тканей мозга и нервной системы.",
      descriptionEn: "DHA is a structural component of brain and nervous system tissues.",
      icon: "🧠"
    },
    {
      title: "Antioksidant himoya",
      titleRu: "Антиоксидантная защита",
      titleEn: "Antioxidant protection",
      description: "Astaksantin va vitamin E antioksidant xususiyatlarga ega.",
      descriptionRu: "Астаксантин и витамин E обладают антиоксидантными свойствами.",
      descriptionEn: "Astaxanthin and vitamin E have antioxidant properties.",
      icon: "🛡️"
    },
    {
      title: "Teri va ko‘rish salomatligi",
      titleRu: "Здоровье кожи и зрения",
      titleEn: "Skin and eye health",
      description: "Tarkibidagi Omega-3, astaksantin va vitamin E organizmning normal faoliyatini qo‘llab-quvvatlashga xizmat qiladi.",
      descriptionRu: "Омега-3, астаксантин и витамин E способствуют поддержанию нормальных функций организма.",
      descriptionEn: "Omega-3, astaxanthin and vitamin E contribute to supporting normal body functions.",
      icon: "👁️"
    }
  ],

  ingredients: [
    {
      name: "Omega-3 yog‘ kislotalari (DHA 12% va EPA 18%)",
      nameRu: "Жирные кислоты Омега-3 (ДГК 12% и ЭПК 18%)",
      nameEn: "Omega-3 fatty acids (DHA 12% and EPA 18%)",
      icon: "🐟",
      benefits: [
        "DHA miya va asab to‘qimalarining muhim tarkibiy qismi hisoblanadi.",
        "EPA va DHA hujayra membranalari faoliyatida ishtirok etadi.",
        "Omega-3 yog‘ kislotalari yurak-qon tomir salomatligini qo‘llab-quvvatlash uchun muhim.",
        "Organizmni Omega-3 yog‘ kislotalari bilan ta'minlaydi."
      ],
      benefitsRu: [
        "ДГК является важным структурным компонентом тканей мозга и нервной системы.",
        "ЭПК и ДГК участвуют в функционировании клеточных мембран.",
        "Жирные кислоты Омега-3 важны для поддержания здоровья сердечно-сосудистой системы.",
        "Обеспечивают организм жирными кислотами Омега-3."
      ],
      benefitsEn: [
        "DHA is an important structural component of brain and nervous system tissues.",
        "EPA and DHA participate in cell membrane function.",
        "Omega-3 fatty acids are important for cardiovascular health support.",
        "Provide the body with Omega-3 fatty acids."
      ]
    },
    {
      name: "Astaksantin",
      nameRu: "Астаксантин",
      nameEn: "Astaxanthin",
      icon: "🦐",
      benefits: [
        "Haematococcus pluvialis mikroalgasidan olinadigan karotinoid pigment.",
        "Antioksidant xususiyatlarga ega.",
        "Hujayralarni oksidlovchi stressdan himoya qilish jarayonlarida ishtirok etadi.",
        "Teri va ko‘rish salomatligini qo‘llab-quvvatlash maqsadida qo‘llaniladi."
      ],
      benefitsRu: [
        "Каротиноидный пигмент, получаемый из микроводоросли Haematococcus pluvialis.",
        "Обладает антиоксидантными свойствами.",
        "Участвует в процессах защиты клеток от окислительного стресса.",
        "Используется для поддержки здоровья кожи и зрения."
      ],
      benefitsEn: [
        "A carotenoid pigment obtained from the microalga Haematococcus pluvialis.",
        "Has antioxidant properties.",
        "Participates in processes that protect cells from oxidative stress.",
        "Used to support skin and eye health."
      ]
    },
    {
      name: "Vitamin E (d-α-tokoferol)",
      nameRu: "Витамин E (d-α-токоферол)",
      nameEn: "Vitamin E (d-alpha-tocopherol)",
      icon: "🌟",
      benefits: [
        "Yog‘da eriydigan antioksidant vitamin.",
        "Hujayralarni oksidlovchi stressdan himoya qilishga yordam beradi.",
        "Hujayra membranalarini himoya qilishda ishtirok etadi.",
        "Organizmning normal faoliyatini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Жирорастворимый витамин с антиоксидантными свойствами.",
        "Помогает защищать клетки от окислительного стресса.",
        "Участвует в защите клеточных мембран.",
        "Поддерживает нормальное функционирование организма."
      ],
      benefitsEn: [
        "A fat-soluble vitamin with antioxidant properties.",
        "Helps protect cells from oxidative stress.",
        "Participates in protecting cell membranes.",
        "Supports normal body function."
      ]
    }
  ],

  indications: [
    "Omega-3, astaksantin va vitamin E ning qo‘shimcha manbai sifatida.",
    "Yurak va qon tomir salomatligini qo‘llab-quvvatlash.",
    "Xotira va kognitiv funksiyalarni qo‘llab-quvvatlash.",
    "Organizmning antioksidant himoyasini qo‘llab-quvvatlash.",
    "Teri va ko‘rish salomatligini qo‘llab-quvvatlash."
  ],

  indicationsRu: [
    "В качестве дополнительного источника Омега-3, астаксантина и витамина E.",
    "Для поддержки здоровья сердца и сосудов.",
    "Для поддержки памяти и когнитивных функций.",
    "Для поддержки антиоксидантной защиты организма.",
    "Для поддержки здоровья кожи и зрения."
  ],

  indicationsEn: [
    "As an additional source of Omega-3, astaxanthin and vitamin E.",
    "To support heart and cardiovascular health.",
    "To support memory and cognitive function.",
    "To support the body's antioxidant protection.",
    "To support skin and eye health."
  ],

  usage: {
    dosage: "16 yoshdan kattalar: kuniga 1 kapsula.",
    dosageRu: "Взрослым с 16 лет: по 1 капсуле в день.",
    dosageEn: "Adults aged 16 and over: 1 capsule daily.",

    timing: "Ovqat bilan birga",
    timingRu: "Во время еды",
    timingEn: "With food",

    duration: "1–3 oy. Zarur bo‘lsa, kursni takrorlash mumkin.",
    durationRu: "От 1 до 3 месяцев. При необходимости курс можно повторить.",
    durationEn: "1–3 months. The course may be repeated if necessary.",

    instruction: "Yetarli miqdorda suv bilan ichiladi.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Tarkibiy qismlarga individual toqatsizlik.",
    "Homiladorlik va emizish davri — faqat shifokor tavsiyasi bilan.",
    "12 yoshgacha bo‘lgan bolalar.",
    "Qon ketishga moyillik yoki antikoagulyantlarni bir vaqtda qabul qilishda ehtiyotkorlik bilan.",
    "12–15 yoshdagilar uchun yo‘riqnomada aniq doza ko‘rsatilmagan; faqat shifokor tavsiyasi bilan."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Беременность и период грудного вскармливания — только по рекомендации врача.",
    "Детский возраст до 12 лет.",
    "При склонности к кровотечениям или одновременном приеме антикоагулянтов применять с осторожностью.",
    "Для детей 12–15 лет дозировка в инструкции не указана; применять только по рекомендации врача."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Pregnancy and breastfeeding — only on a doctor's recommendation.",
    "Children under 12 years of age.",
    "Use with caution in people prone to bleeding or taking anticoagulants.",
    "No dosage is specified for ages 12–15; use only on a doctor's recommendation."
  ],

  sideEffects: [
    "Tavsiya etilgan dozada nojo‘ya ta'sirlar kam uchraydi.",
    "Kamdan-kam hollarda allergik reaksiyalar: terida toshma yoki qichishish.",
    "Ovqat hazm qilishdagi noqulayliklar: ko‘ngil aynishi yoki qorin og‘irligi."
  ],

  sideEffectsRu: [
    "При соблюдении рекомендуемой дозировки побочные эффекты встречаются редко.",
    "В редких случаях возможны аллергические реакции: кожная сыпь или зуд.",
    "Возможен дискомфорт со стороны пищеварительной системы: тошнота или тяжесть в животе."
  ],

  sideEffectsEn: [
    "Side effects are uncommon when the recommended dose is followed.",
    "Rare allergic reactions may include skin rash or itching.",
    "Digestive discomfort such as nausea or abdominal heaviness may occur."
  ],

  overdose: {
    uz: "Doza oshirib yuborilganda ko‘ngil aynishi, diareya va qon ketish xavfining ortishi kuzatilishi mumkin. Qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "При превышении дозы возможны тошнота, диарея и повышение риска кровотечений. Прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may cause nausea, diarrhea and an increased risk of bleeding. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Omega-3 yog‘ kislotalari qon ivishiga ta'sir qiluvchi dorilar bilan birga qabul qilinganda qon ketish xavfiga ta'sir qilishi mumkin.",
      "Varfarin, aspirin yoki boshqa antikoagulyant va antiagregantlarni qabul qilayotgan bo‘lsangiz, shifokor bilan maslahatlashish zarur.",
      "Lipid darajasini pasaytiruvchi dorilar bilan birga qabul qilishda shifokor tavsiyasiga amal qiling.",
      "A, D va K vitaminlari kabi boshqa yog‘da eriydigan vitaminlar bilan birga qabul qilishda yo‘riqnomadagi vaqt oralig‘i bo‘yicha tavsiyaga amal qiling.",
      "Doimiy dori vositalarini qabul qilayotgan bo‘lsangiz, farmatsevt yoki shifokor bilan maslahatlashish tavsiya etiladi."
    ],
    ru: [
      "При совместном приеме Омега-3 с препаратами, влияющими на свертываемость крови, возможно влияние на риск кровотечений.",
      "При приеме варфарина, аспирина или других антикоагулянтов и антиагрегантов необходимо проконсультироваться с врачом.",
      "При сочетании с препаратами, снижающими уровень липидов, следуйте рекомендациям врача.",
      "При совместном приеме с другими жирорастворимыми витаминами, такими как A, D и K, соблюдайте рекомендации инструкции по интервалу приема.",
      "Если вы регулярно принимаете лекарства, рекомендуется проконсультироваться с врачом или фармацевтом."
    ],
    en: [
      "Taking Omega-3 together with medicines that affect blood clotting may influence bleeding risk.",
      "Consult a doctor if you take warfarin, aspirin or other anticoagulant or antiplatelet medicines.",
      "Follow your doctor's advice when combining the product with lipid-lowering medicines.",
      "Follow the leaflet's timing recommendations when taking it with other fat-soluble vitamins such as A, D and K.",
      "Consult a doctor or pharmacist if you take regular medication."
    ]
  },

  warnings: [
    "Mahsulot biologik faol qo‘shimcha hisoblanadi, dori vositasi emas.",
    "Qon ketishga moyilligi bo‘lgan shaxslar mahsulotni ehtiyotkorlik bilan qo‘llashi kerak.",
    "Varfarin, aspirin yoki boshqa qon ivishiga ta'sir qiluvchi dorilarni qabul qilayotgan bo‘lsangiz, shifokor bilan maslahatlashmasdan foydalanmang.",
    "Baliq yoki dengiz mahsulotlariga allergiyasi bo‘lgan shaxslar tarkibiy qismlarni tekshirishi kerak.",
    "Mahsulot yurak-qon tomir kasalliklari, yallig‘lanish yoki ko‘rish muammolarini davolash uchun mo‘ljallanmagan va shifokor buyurgan davolash o‘rnini bosmaydi."
  ],

  warningsRu: [
    "Продукт является биологически активной добавкой, а не лекарственным средством.",
    "Лицам со склонностью к кровотечениям следует применять продукт с осторожностью.",
    "Если вы принимаете варфарин, аспирин или другие препараты, влияющие на свертываемость крови, не используйте продукт без консультации врача.",
    "Лицам с аллергией на рыбу или морепродукты следует проверить состав.",
    "Продукт не предназначен для лечения сердечно-сосудистых заболеваний, воспалений или нарушений зрения и не заменяет назначенное врачом лечение."
  ],

  warningsEn: [
    "This product is a dietary supplement, not a medicine.",
    "People prone to bleeding should use the product with caution.",
    "If you take warfarin, aspirin or other medicines that affect blood clotting, do not use the product without consulting a doctor.",
    "People with fish or seafood allergies should check the ingredients.",
    "The product is not intended to treat cardiovascular diseases, inflammation or vision problems and does not replace prescribed medical treatment."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "1230 mg Omega-3",
      textRu: "1230 мг Омега-3",
      textEn: "1230 mg Omega-3"
    },
    {
      text: "Astaksantin 6 mg",
      textRu: "Астаксантин 6 мг",
      textEn: "Astaxanthin 6 mg"
    },
    {
      text: "Vitamin E 5 mg",
      textRu: "Витамин E 5 мг",
      textEn: "Vitamin E 5 mg"
    },
    {
      text: "Antioksidant kompleks",
      textRu: "Антиоксидантный комплекс",
      textEn: "Antioxidant complex"
    }
  ]
    },

    10: {
  id: 10,
  name: "STALAZ",
  nameRu: "СТАЛАЗ",
  nameEn: "STALAZ",

  tagline: "Suyaklar va yurak-qon tomir tizimini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки костей и сердечно-сосудистой системы",
  taglineEn: "For bone and cardiovascular health support",

  image: stallaz,
  pdf: "https://drive.google.com/file/d/1_U_tGiQ_XZ2leMdvmXJVX4gDfZ6I2mOX/view?usp=sharing",

  volume: "30 / 60 / 90 / 120 / 180 kapsul",
  form: "Yumshoq jelatin kapsulalari",
  formRu: "Мягкие желатиновые капсулы",
  formEn: "Soft gelatin capsules",

  rating: 4.7,
  reviews: 834,
  manufacturer: "TOP PHARM SERVICE MChJ",
  manufacturerRu: "ООО TOP PHARM SERVICE",
  manufacturerEn: "TOP PHARM SERVICE LLC",
  certification: "O'zMSt 166-2024",
  price: "125,000",
  currency: "сум",

  composition: [
    {
      name: "Kalsiy sitrat malat",
      nameRu: "Цитрат-малат кальция",
      nameEn: "Calcium citrate malate",
      amount: "300 mg",
      per: "Yo‘riqnomada ko‘rsatilmagan"
    },
    {
      name: "Omega-3 yog‘ kislotalari",
      nameRu: "Жирные кислоты Омега-3",
      nameEn: "Omega-3 fatty acids",
      amount: "450 mg",
      per: "Yo‘riqnomada ko‘rsatilmagan",
      details: "DHA 12% va EPA 18%"
    },
    {
      name: "Metilkobalamin (Vitamin B12)",
      nameRu: "Метилкобаламин (витамин B12)",
      nameEn: "Methylcobalamin (Vitamin B12)",
      amount: "9 mkg",
      per: "Yo‘riqnomada ko‘rsatilmagan"
    },
    {
      name: "Folat kislotasi (Vitamin B9)",
      nameRu: "Фолиевая кислота (витамин B9)",
      nameEn: "Folic acid (Vitamin B9)",
      amount: "400 mkg",
      per: "Yo‘riqnomada ko‘rsatilmagan"
    },
    {
      name: "Vitamin K2-7",
      nameRu: "Витамин K2-7",
      nameEn: "Vitamin K2-7",
      amount: "45 mkg",
      per: "Yo‘riqnomada ko‘rsatilmagan"
    },
    {
      name: "Vitamin D3 (xolekaltsiferol)",
      nameRu: "Витамин D3 (холекальциферол)",
      nameEn: "Vitamin D3 (Cholecalciferol)",
      amount: "15 mkg",
      per: "Yo‘riqnomada ko‘rsatilmagan"
    }
  ],

  benefits: [
    {
      title: "Suyak va tishlar salomatligi",
      titleRu: "Здоровье костей и зубов",
      titleEn: "Bone and dental health",
      description: "Kalsiy, vitamin D3 va K2 suyaklarning normal holatini qo‘llab-quvvatlashga yordam beradi.",
      descriptionRu: "Кальций, витамины D3 и K2 помогают поддерживать нормальное состояние костей.",
      descriptionEn: "Calcium and vitamins D3 and K2 help support normal bone health.",
      icon: "🦴"
    },
    {
      title: "Yurak-qon tomir salomatligi",
      titleRu: "Здоровье сердца и сосудов",
      titleEn: "Heart and cardiovascular health",
      description: "Omega-3 yog‘ kislotalari yurak-qon tomir tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
      descriptionRu: "Жирные кислоты Омега-3 поддерживают нормальную работу сердечно-сосудистой системы.",
      descriptionEn: "Omega-3 fatty acids support normal cardiovascular function.",
      icon: "❤️"
    },
    {
      title: "Energiya almashinuvi",
      titleRu: "Энергетический обмен",
      titleEn: "Energy metabolism",
      description: "B12 vitamini va folat kislotasi normal energiya almashinuvi hamda qon hosil bo‘lish jarayonlarida ishtirok etadi.",
      descriptionRu: "Витамин B12 и фолиевая кислота участвуют в нормальном энергетическом обмене и процессах кроветворения.",
      descriptionEn: "Vitamin B12 and folic acid participate in normal energy metabolism and blood cell formation.",
      icon: "⚡"
    },
    {
      title: "Asab va immun tizimi",
      titleRu: "Нервная и иммунная системы",
      titleEn: "Nervous and immune systems",
      description: "Vitamin D3 va B12 asab tizimi hamda immun tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
      descriptionRu: "Витамины D3 и B12 поддерживают нормальную работу нервной и иммунной систем.",
      descriptionEn: "Vitamins D3 and B12 support normal nervous and immune system function.",
      icon: "🛡️"
    }
  ],

  ingredients: [
    {
      name: "Kalsiy sitrat malat",
      nameRu: "Цитрат-малат кальция",
      nameEn: "Calcium citrate malate",
      icon: "🦴",
      benefits: [
        "Kalsiy manbai hisoblanadi.",
        "Suyak va tishlarning normal holatini saqlash uchun zarur.",
        "Mushaklarning normal qisqarishida ishtirok etadi.",
        "Asab impulslarining uzatilishida ishtirok etadi.",
        "Qon ivishining normal jarayonida muhim rol o‘ynaydi."
      ],
      benefitsRu: [
        "Является источником кальция.",
        "Необходим для поддержания нормального состояния костей и зубов.",
        "Участвует в нормальном сокращении мышц.",
        "Участвует в передаче нервных импульсов.",
        "Играет важную роль в нормальном процессе свертывания крови."
      ],
      benefitsEn: [
        "Serves as a source of calcium.",
        "Necessary for maintaining normal bones and teeth.",
        "Participates in normal muscle contraction.",
        "Participates in nerve impulse transmission.",
        "Plays an important role in normal blood clotting."
      ]
    },
    {
      name: "Omega-3 yog‘ kislotalari (DHA 12% va EPA 18%)",
      nameRu: "Жирные кислоты Омега-3 (ДГК 12% и ЭПК 18%)",
      nameEn: "Omega-3 fatty acids (DHA 12% and EPA 18%)",
      icon: "🐟",
      benefits: [
        "EPA va DHA hujayra membranalari faoliyatida ishtirok etadi.",
        "DHA miya va ko‘rish tizimining normal faoliyati uchun muhim.",
        "Omega-3 yog‘ kislotalari yurak-qon tomir salomatligini qo‘llab-quvvatlash uchun muhim.",
        "Organizmni Omega-3 yog‘ kislotalari bilan ta'minlaydi."
      ],
      benefitsRu: [
        "ЭПК и ДГК участвуют в функционировании клеточных мембран.",
        "ДГК важна для нормальной работы мозга и зрительной системы.",
        "Жирные кислоты Омега-3 важны для поддержки сердечно-сосудистого здоровья.",
        "Обеспечивают организм жирными кислотами Омега-3."
      ],
      benefitsEn: [
        "EPA and DHA participate in cell membrane function.",
        "DHA is important for normal brain and visual system function.",
        "Omega-3 fatty acids are important for cardiovascular health support.",
        "Provide the body with Omega-3 fatty acids."
      ]
    },
    {
      name: "Metilkobalamin (Vitamin B12)",
      nameRu: "Метилкобаламин (витамин B12)",
      nameEn: "Methylcobalamin (Vitamin B12)",
      icon: "💊",
      benefits: [
        "DNK sintezida ishtirok etadi.",
        "Asab tizimining normal faoliyatini qo‘llab-quvvatlaydi.",
        "Qizil qon tanachalari hosil bo‘lishida ishtirok etadi.",
        "Normal energiya almashinuviga yordam beradi.",
        "Miyelin qobig‘ining hosil bo‘lishi uchun muhim."
      ],
      benefitsRu: [
        "Участвует в синтезе ДНК.",
        "Поддерживает нормальную работу нервной системы.",
        "Участвует в образовании красных кровяных клеток.",
        "Способствует нормальному энергетическому обмену.",
        "Важен для образования миелиновой оболочки."
      ],
      benefitsEn: [
        "Participates in DNA synthesis.",
        "Supports normal nervous system function.",
        "Participates in red blood cell formation.",
        "Contributes to normal energy metabolism.",
        "Important for the formation of the myelin sheath."
      ]
    },
    {
      name: "Folat kislotasi (Vitamin B9)",
      nameRu: "Фолиевая кислота (витамин B9)",
      nameEn: "Folic acid (Vitamin B9)",
      icon: "💊",
      benefits: [
        "Nuklein kislotalar sintezida ishtirok etadi.",
        "Hujayralarning bo‘linishi uchun zarur.",
        "Qizil qon tanachalari hosil bo‘lishida ishtirok etadi.",
        "Gomosistein almashinuvida muhim rol o‘ynaydi.",
        "Homiladorlik davrida homila nerv naychasi rivojlanishi uchun muhim."
      ],
      benefitsRu: [
        "Участвует в синтезе нуклеиновых кислот.",
        "Необходима для деления клеток.",
        "Участвует в образовании красных кровяных клеток.",
        "Играет важную роль в обмене гомоцистеина.",
        "Важна для развития нервной трубки плода во время беременности."
      ],
      benefitsEn: [
        "Participates in nucleic acid synthesis.",
        "Necessary for cell division.",
        "Participates in red blood cell formation.",
        "Plays an important role in homocysteine metabolism.",
        "Important for fetal neural tube development during pregnancy."
      ]
    },
    {
      name: "Vitamin K2-7 (Menaxinon-7)",
      nameRu: "Витамин K2-7 (менахинон-7)",
      nameEn: "Vitamin K2-7 (Menaquinone-7)",
      icon: "🎯",
      benefits: [
        "Kalsiyning normal almashinuvida ishtirok etadi.",
        "Suyak to‘qimalarining normal holatini saqlashga yordam beradi.",
        "Qon ivishining normal jarayoni uchun zarur.",
        "Vitamin D3 bilan birgalikda suyak salomatligini qo‘llab-quvvatlaydi."
      ],
      benefitsRu: [
        "Участвует в нормальном обмене кальция.",
        "Помогает поддерживать нормальное состояние костной ткани.",
        "Необходим для нормального процесса свертывания крови.",
        "Совместно с витамином D3 поддерживает здоровье костей."
      ],
      benefitsEn: [
        "Participates in normal calcium metabolism.",
        "Helps maintain normal bone tissue.",
        "Necessary for normal blood clotting.",
        "Works alongside vitamin D3 to support bone health."
      ]
    },
    {
      name: "Vitamin D3 (Xolekaltsiferol)",
      nameRu: "Витамин D3 (холекальциферол)",
      nameEn: "Vitamin D3 (Cholecalciferol)",
      icon: "☀️",
      benefits: [
        "Ichakda kalsiy va fosfor so‘rilishiga yordam beradi.",
        "Suyak va tishlarning normal holatini saqlash uchun zarur.",
        "Mushaklarning normal faoliyatini qo‘llab-quvvatlaydi.",
        "Immun tizimining normal faoliyatida ishtirok etadi."
      ],
      benefitsRu: [
        "Способствует всасыванию кальция и фосфора в кишечнике.",
        "Необходим для поддержания нормального состояния костей и зубов.",
        "Поддерживает нормальную работу мышц.",
        "Участвует в нормальном функционировании иммунной системы."
      ],
      benefitsEn: [
        "Helps calcium and phosphorus absorption in the intestine.",
        "Necessary for maintaining normal bones and teeth.",
        "Supports normal muscle function.",
        "Participates in normal immune system function."
      ]
    }
  ],

  indications: [
    "Kalsiy, Omega-3, vitamin B12, folat kislotasi, vitamin K2 va D3 ning qo‘shimcha manbai sifatida.",
    "Suyak va tishlarning normal holatini qo‘llab-quvvatlash.",
    "Yurak-qon tomir tizimi salomatligini qo‘llab-quvvatlash.",
    "Normal moddalar almashinuvi va energiya almashinuvini qo‘llab-quvvatlash.",
    "Asab va immun tizimining normal faoliyatini qo‘llab-quvvatlash."
  ],

  indicationsRu: [
    "В качестве дополнительного источника кальция, Омега-3, витамина B12, фолиевой кислоты, витаминов K2 и D3.",
    "Для поддержания нормального состояния костей и зубов.",
    "Для поддержки здоровья сердечно-сосудистой системы.",
    "Для поддержки нормального обмена веществ и энергетического обмена.",
    "Для поддержки нормальной работы нервной и иммунной систем."
  ],

  indicationsEn: [
    "As an additional source of calcium, Omega-3, vitamin B12, folic acid, and vitamins K2 and D3.",
    "To support normal bone and dental health.",
    "To support cardiovascular health.",
    "To support normal metabolism and energy metabolism.",
    "To support normal nervous and immune system function."
  ],

  usage: {
    dosage: "18 yoshdan kattalar: kuniga 1 kapsula.",
    dosageRu: "Взрослым с 18 лет: по 1 капсуле в день.",
    dosageEn: "Adults aged 18 and over: 1 capsule daily.",

    timing: "Ovqat vaqtida",
    timingRu: "Во время еды",
    timingEn: "During meals",

    duration: "Kamida 1 oy. Zarurat bo‘lsa, kursni takrorlash mumkin.",
    durationRu: "Минимум 1 месяц. При необходимости курс можно повторить.",
    durationEn: "At least 1 month. The course may be repeated if necessary.",

    instruction: "Yetarli miqdorda suv bilan ichiladi.",
    instructionRu: "Запивать достаточным количеством воды.",
    instructionEn: "Take with a sufficient amount of water."
  },

  contraindications: [
    "Tarkibiy qismlarga individual toqatsizlik.",
    "Homiladorlik va emizish davri — faqat shifokor tavsiyasi bilan.",
    "12 yoshgacha bo‘lgan bolalar.",
    "Giperkaltsiyemiya holatida ehtiyotkorlik bilan.",
    "Buyrak toshlari mavjud bo‘lsa, shifokor bilan maslahatlashish zarur.",
    "Varfarin yoki boshqa vitamin K ga ta'sir qiluvchi antikoagulyantlarni qabul qilishda shifokor nazorati zarur."
  ],

  contraindicationsRu: [
    "Индивидуальная непереносимость компонентов.",
    "Беременность и период грудного вскармливания — только по рекомендации врача.",
    "Детский возраст до 12 лет.",
    "При гиперкальциемии применять с осторожностью.",
    "При наличии камней в почках необходима консультация врача.",
    "При приеме варфарина или других антикоагулянтов, действие которых зависит от витамина K, необходим контроль врача."
  ],

  contraindicationsEn: [
    "Individual intolerance to any of the ingredients.",
    "Pregnancy and breastfeeding — only on a doctor's recommendation.",
    "Children under 12 years of age.",
    "Use with caution in cases of hypercalcemia.",
    "Consult a doctor if you have kidney stones.",
    "Medical supervision is necessary when taking warfarin or other anticoagulants affected by vitamin K."
  ],

  sideEffects: [
    "Tavsiya etilgan dozada nojo‘ya ta'sirlar kam uchraydi.",
    "Kamdan-kam hollarda allergik reaksiyalar: toshma yoki qichishish.",
    "Ovqat hazm qilishdagi noqulayliklar: ko‘ngil aynishi yoki qorin og‘irligi."
  ],

  sideEffectsRu: [
    "При соблюдении рекомендуемой дозировки побочные эффекты встречаются редко.",
    "В редких случаях возможны аллергические реакции: сыпь или зуд.",
    "Возможен дискомфорт со стороны пищеварительной системы: тошнота или тяжесть в животе."
  ],

  sideEffectsEn: [
    "Side effects are uncommon when the recommended dose is followed.",
    "Rare allergic reactions may include rash or itching.",
    "Digestive discomfort such as nausea or abdominal heaviness may occur."
  ],

  overdose: {
    uz: "Doza oshirib yuborilganda giperkaltsiyemiya (chanqash, holsizlik, ich qotishi), gipervitaminoz D (bosh og‘rig‘i, ishtahaning yo‘qolishi) va ovqat hazm qilish tizimi buzilishlari yuzaga kelishi mumkin. Qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    ru: "При превышении дозы возможны гиперкальциемия (жажда, слабость, запор), гипервитаминоз D (головная боль, потеря аппетита) и нарушения пищеварения. Прекратите прием и обратитесь к врачу.",
    en: "Excessive intake may cause hypercalcemia (thirst, weakness, constipation), vitamin D toxicity (headache, loss of appetite) and digestive disturbances. Stop taking the product and consult a doctor."
  },

  interactions: {
    uz: [
      "Kalsiy va vitamin D preparatlari bilan birga qabul qilinganda organizmga tushadigan umumiy kalsiy va D vitamini miqdorini hisobga olish kerak.",
      "Vitamin K2 varfarin kabi vitamin K ga bog‘liq antikoagulyantlarning ta'sirini o‘zgartirishi mumkin. Bunday dorilarni qabul qilayotgan bo‘lsangiz, shifokor bilan maslahatlashmasdan STALAZni boshlamang.",
      "Omega-3 qon bosimini pasaytiruvchi dorilar bilan birga qabul qilinganda qon bosimiga qo‘shimcha ta'sir ko‘rsatishi mumkin.",
      "Omega-3 va lipid darajasini pasaytiruvchi dorilarni birga qo‘llashda shifokor tavsiyasiga amal qiling.",
      "Kalsiy ayrim antibiotiklar va levotiroksin so‘rilishiga ta'sir qilishi mumkin. Ularni qabul qilish oralig‘ini shifokor yoki farmatsevt bilan aniqlang."
    ],
    ru: [
      "При совместном приеме с препаратами кальция и витамина D необходимо учитывать общее количество поступающего кальция и витамина D.",
      "Витамин K2 может изменять действие антикоагулянтов, зависящих от витамина K, например варфарина. Если вы принимаете такие препараты, не начинайте прием STALAZ без консультации врача.",
      "При совместном приеме Омега-3 с препаратами для снижения артериального давления возможно дополнительное влияние на давление.",
      "При сочетании Омега-3 с препаратами для снижения уровня липидов следуйте рекомендациям врача.",
      "Кальций может влиять на всасывание некоторых антибиотиков и левотироксина. Интервал между приемами уточните у врача или фармацевта."
    ],
    en: [
      "When taking calcium and vitamin D supplements together, consider the total amount of calcium and vitamin D consumed.",
      "Vitamin K2 may alter the effect of vitamin K-dependent anticoagulants such as warfarin. Do not start STALAZ without medical advice if you take these medicines.",
      "Taking Omega-3 with blood pressure-lowering medicines may have an additional effect on blood pressure.",
      "Follow your doctor's advice when combining Omega-3 with lipid-lowering medicines.",
      "Calcium may affect the absorption of some antibiotics and levothyroxine. Ask a doctor or pharmacist about the appropriate interval between doses."
    ]
  },

  warnings: [
    "Mahsulot biologik faol qo‘shimcha hisoblanadi, dori vositasi emas.",
    "Kalsiy sitrat malatning 300 mg miqdori elementar kalsiy miqdorini anglatmaydi. Yo‘riqnomada elementar kalsiy miqdori alohida ko‘rsatilmagan.",
    "Giperkaltsiyemiya yoki buyrak toshlari bo‘lgan shaxslar mahsulotni shifokor bilan maslahatlashgan holda qo‘llashi kerak.",
    "Varfarin yoki boshqa vitamin K ga bog‘liq antikoagulyantlarni qabul qilayotgan shaxslar shifokor nazoratisiz mahsulotni qabul qilmasligi kerak.",
    "Boshqa kalsiy yoki D vitamini qo‘shimchalari bilan birga qabul qilishda umumiy kunlik miqdorni hisobga oling.",
    "Mahsulot osteoporoz, anemiya yoki yurak-qon tomir kasalliklarini davolash uchun mo‘ljallanmagan va shifokor buyurgan davolash o‘rnini bosmaydi."
  ],

  warningsRu: [
    "Продукт является биологически активной добавкой, а не лекарственным средством.",
    "Количество 300 мг цитрата-малата кальция не означает 300 мг элементарного кальция. В инструкции количество элементарного кальция отдельно не указано.",
    "Лицам с гиперкальциемией или камнями в почках следует принимать продукт после консультации с врачом.",
    "Лицам, принимающим варфарин или другие антикоагулянты, действие которых зависит от витамина K, не следует принимать продукт без контроля врача.",
    "При сочетании с другими добавками кальция или витамина D учитывайте их общее суточное количество.",
    "Продукт не предназначен для лечения остеопороза, анемии или сердечно-сосудистых заболеваний и не заменяет назначенное врачом лечение."
  ],

  warningsEn: [
    "This product is a dietary supplement, not a medicine.",
    "The 300 mg amount of calcium citrate malate does not mean 300 mg of elemental calcium. The leaflet does not separately specify the elemental calcium content.",
    "People with hypercalcemia or kidney stones should consult a doctor before using this product.",
    "People taking warfarin or other vitamin K-dependent anticoagulants should not use this product without medical supervision.",
    "Consider the total daily intake when combining this product with other calcium or vitamin D supplements.",
    "The product is not intended to treat osteoporosis, anemia or cardiovascular diseases and does not replace prescribed medical treatment."
  ],

  storage: [
    "Quruq joyda saqlang.",
    "Harorat +25°C dan yuqori bo‘lmasligi kerak.",
    "To‘g‘ridan-to‘g‘ri quyosh nurlaridan himoyalang.",
    "Bolalar qo‘li yetmaydigan joyda saqlang."
  ],

  storageRu: [
    "Хранить в сухом месте.",
    "Хранить при температуре не выше +25°C.",
    "Беречь от прямых солнечных лучей.",
    "Хранить в недоступном для детей месте."
  ],

  storageEn: [
    "Store in a dry place.",
    "Store at a temperature not exceeding +25°C.",
    "Protect from direct sunlight.",
    "Keep out of reach of children."
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Kalsiy sitrat malat",
      textRu: "Цитрат-малат кальция",
      textEn: "Calcium citrate malate"
    },
    {
      text: "Omega-3 yog‘ kislotalari",
      textRu: "Жирные кислоты Омега-3",
      textEn: "Omega-3 fatty acids"
    },
    {
      text: "Vitamin D3 va K2-7",
      textRu: "Витамины D3 и K2-7",
      textEn: "Vitamins D3 and K2-7"
    },
    {
      text: "B12 va folat kislotasi",
      textRu: "Витамин B12 и фолиевая кислота",
      textEn: "Vitamin B12 and folic acid"
    },
    {
      text: "Kompleks vitamin-mineral formula",
      textRu: "Комплексная витаминно-минеральная формула",
      textEn: "Combined vitamin and mineral formula"
    }
  ]
    },
  },


 tabletka: {
  11: {
    id: 11,
    name: "AGUAS",
    nameRu: "АГУАС",
    tagline: "Bo‘g‘imlar va tayanch-harakat tizimi uchun",
    taglineRu: "Для суставов и опорно-двигательной системы",
    image: aguas,
    pdf: "https://drive.google.com/file/d/1_meCETfi_fVwDV4ceDzoEheHyXBVRz-N/view?usp=sharing",
    volume: "450 mg",
    form: "Qattiq jelatin kapsulalari",
    rating: 4.8,
    reviews: 512,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Kollagen II turi (UC-II)", amount: "40 mg", per: "1 kapsul" },
      { name: "Gialuronat natriy", amount: "40 mg", per: "1 kapsul" },
      { name: "Boswellia Serrata ekstrakti", amount: "100 mg", per: "1 kapsul" }
    ],
  
    benefits: [
      {
        title: "Bo‘g‘imlarni tiklash",
        titleRu: "Восстановление суставов",
        description: "Xaftaga va bo‘g‘im to‘qimalarini mustahkamlaydi",
        descriptionRu: "Укрепляет хрящи и суставные ткани",
        icon: "🦴"
      },
      {
        title: "Og‘riqni kamaytirish",
        titleRu: "Снижение боли",
        description: "Yallig‘lanish va og‘riqni kamaytiradi",
        descriptionRu: "Уменьшает воспаление и боль",
        icon: "💊"
      },
      {
        title: "Harakatchanlikni oshirish",
        titleRu: "Подвижность",
        description: "Bo‘g‘imlar elastikligini yaxshilaydi",
        descriptionRu: "Повышает гибкость суставов",
        icon: "🏃"
      },
      {
        title: "Regeneratsiya",
        titleRu: "Регенерация",
        description: "To‘qimalarning tiklanishini tezlashtiradi",
        descriptionRu: "Ускоряет восстановление тканей",
        icon: "⚡"
      }
    ],
  
    ingredients: [
      {
        name: "Kollagen II turi (UC-II)",
        nameRu: "Коллаген типа II (UC-II)",
        icon: "🧬",
        benefits: [
          "Denaturatsiyalanmagan kollagen shakli",
          "Immunomodulyator xususiyatga ega",
          "Xafta parchalanishini sekinlashtiradi",
          "Yallig‘lanishni kamaytiradi",
          "Bo‘g‘imlarni tiklashga yordam beradi"
        ]
      },
      {
        name: "Gialuronat natriy",
        nameRu: "Гиалуронат натрия",
        icon: "💧",
        benefits: [
          "Bo‘g‘im suyuqligini yaxshilaydi",
          "Namlikni ushlab turadi",
          "Xafta uchun amortizatsiya yaratadi",
          "To‘qimalarni himoya qiladi",
          "Regeneratsiyani qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Boswellia Serrata ekstrakti",
        nameRu: "Экстракт Boswellia Serrata",
        icon: "🌿",
        benefits: [
          "Kuchli yallig‘lanishga qarshi ta’sir",
          "Og‘riqni kamaytiradi",
          "Antibakterial va antiseptik",
          "Bo‘g‘im harakatini yaxshilaydi",
          "Artrit, osteoxondrozda foydali"
        ]
      }
    ],
  
    usage: {
      dosage: "1–3 hafta: kuniga 2 marta 1 kapsul",
      dosageRu: "Первые 3 недели: по 1 капсуле 2 раза в день",
      timing: "Ovqat bilan",
      timingRu: "Во время еды",
      duration: "3–6 oy",
      durationRu: "3–6 месяцев",
      instruction: "4-haftadan boshlab kuniga 1 kapsul",
      instructionRu: "С 4-й недели: по 1 капсуле 1 раз в день"
    },
  
    contraindications: [
      "Homiladorlik va emizish davri",
      "12 yoshgacha bolalar",
      "Qon ivish buzilishlari",
      "Qandli diabet",
      "Buyrak va jigar yetishmovchiligi",
      "Individual sezuvchanlik"
    ],
  
    storage: [
      "Harorat: +25°C gacha",
      "Quruq joyda saqlash",
      "Quyoshdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Bo‘g‘imlar uchun kompleks formula", textRu: "Комплекс для суставов" },
      { text: "Yallig‘lanishga qarshi ta’sir", textRu: "Противовоспалительное действие" },
      { text: "Regeneratsiyani tezlashtiradi", textRu: "Ускоряет регенерацию" },
      { text: "Klinik jihatdan o‘rganilgan", textRu: "Клинически изучен" }
    ]
  },
  12: {
  id: 12,
  name: "CARBOFER",
  nameRu: "КАРБОФЕР",
  nameEn: "CARBOFER",

  tagline: "Qon hosil bo‘lishi va temir tanqisligini to‘ldirish uchun",
  taglineRu: "Для поддержки кроветворения и восполнения дефицита железа",
  taglineEn: "For blood formation support and iron deficiency replenishment",

  image: carbofer,
  pdf: "https://drive.google.com/file/d/1Som4373M5jCYeX4kYi1Ejw2rAckJBv6z/view?usp=sharing",

  volume: "30 kapsula",
  volumeRu: "30 капсул",
  volumeEn: "30 capsules",

  form: "Kapsulalar",
  formRu: "Капсулы",
  formEn: "Capsules",

  rating: 4.8,
  reviews: 642,
  manufacturer: "—",
  certification: "—",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Temir bisglisinat xelat",
      nameRu: "Хелат бисглицината железа",
      nameEn: "Iron bisglycinate chelate",
      amount: "20 mg",
      per: "1 kapsula"
    },
    {
      name: "Sink",
      nameRu: "Цинк",
      nameEn: "Zinc",
      amount: "12.5 mg",
      per: "1 kapsula"
    },
    {
      name: "Askorbin kislotasi (Vitamin C)",
      nameRu: "Аскорбиновая кислота (витамин C)",
      nameEn: "Ascorbic acid (Vitamin C)",
      amount: "50 mg",
      per: "1 kapsula"
    },
    {
      name: "L-metilfolat",
      nameRu: "L-метилфолат",
      nameEn: "L-methylfolate",
      amount: "300 mkg",
      per: "1 kapsula"
    },
    {
      name: "Vitamin B12",
      nameRu: "Витамин B12",
      nameEn: "Vitamin B12",
      amount: "2.6 mkg",
      per: "1 kapsula"
    }
  ],

  benefits: [
    {
      title: "Qon hosil bo‘lishini qo‘llab-quvvatlash",
      titleRu: "Поддержка кроветворения",
      titleEn: "Supports blood formation",
      description: "Temir, folat va B12 vitamini normal qon hosil bo‘lish jarayonlarida ishtirok etadi.",
      descriptionRu: "Железо, фолат и витамин B12 участвуют в нормальных процессах кроветворения.",
      descriptionEn: "Iron, folate and vitamin B12 contribute to normal blood formation.",
      icon: "🩸"
    },
    {
      title: "Temir zaxirasini to‘ldirish",
      titleRu: "Восполнение запасов железа",
      titleEn: "Helps replenish iron stores",
      description: "Temir bisglisinat xelat organizmni temir bilan ta’minlashga yordam beradi.",
      descriptionRu: "Хелат бисглицината железа помогает восполнять запасы железа в организме.",
      descriptionEn: "Iron bisglycinate chelate helps replenish the body's iron stores.",
      icon: "⚙️"
    },
    {
      title: "Immunitet faoliyatini qo‘llab-quvvatlash",
      titleRu: "Поддержка иммунной системы",
      titleEn: "Supports immune function",
      description: "Sink va C vitamini immun tizimining normal faoliyatida ishtirok etadi.",
      descriptionRu: "Цинк и витамин C участвуют в поддержании нормальной работы иммунной системы.",
      descriptionEn: "Zinc and vitamin C contribute to normal immune system function.",
      icon: "🛡️"
    },
    {
      title: "Energiya almashinuvi",
      titleRu: "Энергетический обмен",
      titleEn: "Energy metabolism",
      description: "Temir va B12 vitamini organizmdagi muhim metabolik jarayonlarda ishtirok etadi.",
      descriptionRu: "Железо и витамин B12 участвуют в важных обменных процессах организма.",
      descriptionEn: "Iron and vitamin B12 participate in important metabolic processes.",
      icon: "⚡"
    }
  ],

  ingredients: [
    {
      name: "Temir bisglisinat xelat",
      nameRu: "Хелат бисглицината железа",
      nameEn: "Iron bisglycinate chelate",
      icon: "🩸",
      benefits: [
        "Temirning biologik mavjud shakli",
        "Gemoglobin hosil bo‘lishida ishtirok etadi",
        "Organizmda kislorod tashilishiga yordam beradi",
        "Normal qon hosil bo‘lishini qo‘llab-quvvatlaydi",
        "Temir zaxirasini to‘ldirishga yordam beradi"
      ],
      benefitsRu: [
        "Биодоступная форма железа",
        "Участвует в образовании гемоглобина",
        "Способствует транспорту кислорода в организме",
        "Поддерживает нормальное кроветворение",
        "Помогает восполнять запасы железа"
      ],
      benefitsEn: [
        "A bioavailable form of iron",
        "Contributes to hemoglobin formation",
        "Helps support oxygen transport in the body",
        "Supports normal blood formation",
        "Helps replenish iron stores"
      ]
    },
    {
      name: "Sink",
      nameRu: "Цинк",
      nameEn: "Zinc",
      icon: "⚙️",
      benefits: [
        "Temir almashinuvida ishtirok etadi",
        "300 dan ortiq fermentlar tarkibiga kiradi",
        "Immun tizimining normal faoliyatini qo‘llab-quvvatlaydi",
        "Organizmning metabolik jarayonlarida qatnashadi"
      ],
      benefitsRu: [
        "Участвует в обмене железа",
        "Входит в состав более 300 ферментов",
        "Поддерживает нормальную работу иммунной системы",
        "Участвует в обменных процессах организма"
      ],
      benefitsEn: [
        "Participates in iron metabolism",
        "Is a component of more than 300 enzymes",
        "Supports normal immune system function",
        "Participates in the body's metabolic processes"
      ]
    },
    {
      name: "Vitamin C",
      nameRu: "Витамин C",
      nameEn: "Vitamin C",
      icon: "🍊",
      benefits: [
        "Temirning so‘rilishini yaxshilashga yordam beradi",
        "Antioksidant xususiyatlarga ega",
        "Immun tizimining normal faoliyatini qo‘llab-quvvatlaydi",
        "Kollagen hosil bo‘lishi va to‘qimalarning yangilanishida ishtirok etadi",
        "Oksidlovchi stressdan himoya qilishga yordam beradi"
      ],
      benefitsRu: [
        "Способствует улучшению усвоения железа",
        "Обладает антиоксидантными свойствами",
        "Поддерживает нормальную работу иммунной системы",
        "Участвует в образовании коллагена и обновлении тканей",
        "Помогает защищать клетки от окислительного стресса"
      ],
      benefitsEn: [
        "Helps improve iron absorption",
        "Has antioxidant properties",
        "Supports normal immune system function",
        "Contributes to collagen formation and tissue repair",
        "Helps protect cells from oxidative stress"
      ]
    },
    {
      name: "L-metilfolat",
      nameRu: "L-метилфолат",
      nameEn: "L-methylfolate",
      icon: "💊",
      benefits: [
        "Qon hosil bo‘lish jarayonlarida ishtirok etadi",
        "DNK sintezi uchun muhim",
        "Hujayralarning bo‘linish jarayonida qatnashadi",
        "Immun tizimining normal faoliyatini qo‘llab-quvvatlaydi",
        "Homiladorlik davrida muhim ahamiyatga ega"
      ],
      benefitsRu: [
        "Участвует в процессах кроветворения",
        "Важен для синтеза ДНК",
        "Участвует в делении клеток",
        "Поддерживает нормальную работу иммунной системы",
        "Имеет важное значение во время беременности"
      ],
      benefitsEn: [
        "Participates in blood formation",
        "Is important for DNA synthesis",
        "Contributes to cell division",
        "Supports normal immune system function",
        "Plays an important role during pregnancy"
      ]
    },
    {
      name: "Vitamin B12",
      nameRu: "Витамин B12",
      nameEn: "Vitamin B12",
      icon: "🧠",
      benefits: [
        "Eritrotsitlar hosil bo‘lishida ishtirok etadi",
        "Asab tizimining normal faoliyatini qo‘llab-quvvatlaydi",
        "DNK sintezida qatnashadi",
        "Metabolik jarayonlarda ishtirok etadi",
        "Qon hosil bo‘lish jarayonlari uchun muhim"
      ],
      benefitsRu: [
        "Участвует в образовании эритроцитов",
        "Поддерживает нормальную работу нервной системы",
        "Участвует в синтезе ДНК",
        "Участвует в обменных процессах",
        "Важен для процессов кроветворения"
      ],
      benefitsEn: [
        "Contributes to red blood cell formation",
        "Supports normal nervous system function",
        "Participates in DNA synthesis",
        "Participates in metabolic processes",
        "Is important for blood formation"
      ]
    }
  ],

  indications: [
    "Temir tanqisligi anemiyasi",
    "Foliy kislotasi yetishmovchiligi",
    "Foliy kislotasi yetishmovchiligi bilan birga kechadigan temir tanqisligi",
    "Vitamin B12 yetishmovchiligi",
    "B12 vitamini yetishmovchiligi bilan birga kechadigan temir tanqisligi",
    "Homiladorlikning ikkinchi va uchinchi trimestrlarida, tug‘ruqdan keyingi davrda va emizish vaqtida temir hamda foliy kislotasi yetishmovchiligining oldini olish"
  ],

  indicationsRu: [
    "Железодефицитная анемия",
    "Дефицит фолиевой кислоты",
    "Профилактика дефицита железа при одновременном дефиците фолиевой кислоты",
    "Дефицит витамина B12",
    "Профилактика дефицита железа при одновременном дефиците витамина B12",
    "Профилактика дефицита железа и фолиевой кислоты во втором и третьем триместрах беременности, в послеродовом периоде и во время грудного вскармливания"
  ],

  indicationsEn: [
    "Iron-deficiency anemia",
    "Folic acid deficiency",
    "Prevention of iron deficiency accompanied by folic acid deficiency",
    "Vitamin B12 deficiency",
    "Prevention of iron deficiency accompanied by vitamin B12 deficiency",
    "Prevention of iron and folic acid deficiency during the second and third trimesters of pregnancy, the postpartum period and breastfeeding"
  ],

  usage: {
    dosage: "Kattalar: ovqatdan oldin kuniga 2 marta 1 kapsuladan.",
    dosageRu: "Взрослым: по 1 капсуле 2 раза в день перед едой.",
    dosageEn: "Adults: 1 capsule twice daily before meals.",

    timing: "Ovqatdan oldin",
    timingRu: "Перед едой",
    timingEn: "Before meals",

    duration: "Davolash kursining davomiyligi shifokor tomonidan belgilanadi.",
    durationRu: "Продолжительность курса лечения определяет лечащий врач.",
    durationEn: "The duration of the course is determined by the attending physician.",

    instruction: "Kapsulani suv bilan iching.",
    instructionRu: "Запивать капсулу водой.",
    instructionEn: "Take the capsule with water."
  },

  contraindications: [
    "Mahsulot tarkibiy qismlariga yuqori sezuvchanlik",
    "Organizmda temirning ortiqcha to‘planishi",
    "Surunkali gipervitaminoz",
    "Homiladorlik bilan bog‘liq patologik holatlar",
    "Qonni suyultiruvchi dorilarni qabul qilish",
    "Aplastik (plastik) anemiya",
    "Buyrak yetishmovchiligida ehtiyotkorlik talab etiladi: sink to‘planishi xavfi bo‘lishi mumkin"
  ],

  contraindicationsRu: [
    "Повышенная чувствительность к любому из компонентов продукта",
    "Избыточное накопление железа в организме",
    "Хронический гипервитаминоз",
    "Патологические состояния, связанные с беременностью",
    "Приём препаратов, разжижающих кровь",
    "Апластическая анемия",
    "При почечной недостаточности требуется осторожность: существует риск накопления цинка"
  ],

  contraindicationsEn: [
    "Hypersensitivity to any of the product's ingredients",
    "Excessive iron accumulation in the body",
    "Chronic hypervitaminosis",
    "Pregnancy-related pathological conditions",
    "Use of blood-thinning medicines",
    "Aplastic anemia",
    "Caution is required in kidney impairment due to the possible risk of zinc accumulation"
  ],

  sideEffects: [
    "Ko‘ngil aynishi",
    "Ishtahaning pasayishi",
    "Qusish",
    "Oshqozon-ichakdagi noqulaylik",
    "Ich qotishi",
    "Ich ketishi",
    "Najas rangining to‘q bo‘lishi",
    "Kamdan kam hollarda allergik reaksiyalar"
  ],

  sideEffectsRu: [
    "Тошнота",
    "Снижение аппетита",
    "Рвота",
    "Желудочно-кишечный дискомфорт",
    "Запор",
    "Диарея",
    "Потемнение стула",
    "В редких случаях аллергические реакции"
  ],

  sideEffectsEn: [
    "Nausea",
    "Reduced appetite",
    "Vomiting",
    "Gastrointestinal discomfort",
    "Constipation",
    "Diarrhea",
    "Dark-colored stools",
    "Allergic reactions in rare cases"
  ],

  interactions: [
    "Yo‘riqnomada boshqa dori vositalari bilan o‘zaro ta’siri haqida ma’lumot mavjud emas.",
    "Boshqa dorilarni qabul qilayotgan bo‘lsangiz, CARBOFERni boshlashdan oldin shifokor bilan maslahatlashing."
  ],

  interactionsRu: [
    "В инструкции отсутствуют данные о взаимодействии с другими лекарственными средствами.",
    "Если вы принимаете другие препараты, проконсультируйтесь с врачом перед началом приёма CARBOFER."
  ],

  interactionsEn: [
    "The leaflet states that data on interactions with other medicines are unavailable.",
    "If you take other medicines, consult your healthcare professional before using CARBOFER."
  ],

  warnings: [
    "Tavsiya etilgan dozadan oshirmang.",
    "Buyrak yetishmovchiligi bo‘lsa, shifokor bilan maslahatlashing.",
    "Jiddiy nojo‘ya ta’sirlar yuzaga kelsa, mahsulotni qabul qilishni to‘xtating va shifokorga murojaat qiling.",
    "Homiladorlik va emizish davrida faqat shifokor tavsiyasiga ko‘ra foydalaning."
  ],

  warningsRu: [
    "Не превышайте рекомендованную дозировку.",
    "При почечной недостаточности проконсультируйтесь с врачом.",
    "При возникновении серьёзных побочных эффектов прекратите приём и обратитесь к врачу.",
    "Во время беременности и грудного вскармливания применяйте только по рекомендации врача."
  ],

  warningsEn: [
    "Do not exceed the recommended dose.",
    "Consult a healthcare professional if you have kidney impairment.",
    "If serious side effects occur, stop taking the product and seek medical advice.",
    "Use during pregnancy and breastfeeding only on the advice of a healthcare professional."
  ],

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Quruq joyda saqlang",
    "Bolalar qo‘li yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Температура хранения: от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "Хранить в сухом месте",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Storage temperature: +2°C to +25°C",
    "Store away from light",
    "Store in a dry place",
    "Keep out of reach of children"
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Temir bisglisinat xelat va Vitamin C kombinatsiyasi",
      textRu: "Сочетание бисглицината железа и витамина C",
      textEn: "Iron bisglycinate chelate and Vitamin C combination"
    },
    {
      text: "Temir, sink va vitaminlar kompleksi",
      textRu: "Комплекс железа, цинка и витаминов",
      textEn: "A combination of iron, zinc and vitamins"
    },
    {
      text: "Qon hosil bo‘lish jarayonlarini qo‘llab-quvvatlash",
      textRu: "Поддержка процессов кроветворения",
      textEn: "Supports normal blood formation"
    },
    {
      text: "30 kapsul",
      textRu: "30 капсул",
      textEn: "30 capsules"
    }
  ]
},
  13: {
    id: 13,
    name: "FEMISTA",
    nameRu: "ФЕМИСТА",
    tagline: "Ayollar reproduktiv salomatligi uchun",
    taglineRu: "Для женского репродуктивного здоровья",
    image: femista,
    pdf: "https://drive.google.com/file/d/1MxWgw5E0lewSZzIAXSL3jKDeH7BEAsGI/view?usp=sharing",
    volume: "30 sasha",
    form: "Sashe paketlar (poroshok)",
    rating: 4.9,
    reviews: 1043,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "L-arginin", amount: "900 mg", per: "1 sache" },
      { name: "Vitex agnus-castus ekstrakti", amount: "80 mg", per: "1 sache" },
      { name: "Vitamin B9 (metilfolat)", amount: "400 mkg", per: "1 sache" },
      { name: "Vitamin E", amount: "15 mg", per: "1 sache" },
      { name: "Vitamin C", amount: "90 mg", per: "1 sache" },
      { name: "Vitamin B6", amount: "2 mg", per: "1 sache" },
      { name: "Vitamin B2", amount: "2 mg", per: "1 sache" },
      { name: "Rux (Zinc)", amount: "12 mg", per: "1 sache" },
      { name: "Selen", amount: "55 mkg", per: "1 sache" },
      { name: "Yod", amount: "150 mkg", per: "1 sache" },
      { name: "Magniy", amount: "80 mg", per: "1 sache" }
    ],
  
    benefits: [
      {
        title: "Reproduktiv tizim",
        titleRu: "Репродуктивная система",
        description: "Ayollar salomatligini qo‘llab-quvvatlaydi",
        descriptionRu: "Поддержка женского здоровья",
        icon: "👩"
      },
      {
        title: "Gormonal balans",
        titleRu: "Гормональный баланс",
        description: "Prolaktinni normallashtiradi",
        descriptionRu: "Нормализует уровень пролактина",
        icon: "⚖️"
      },
      {
        title: "Homiladorlikka tayyorgarlik",
        titleRu: "Подготовка к беременности",
        description: "Urug‘lanish ehtimolini oshiradi",
        descriptionRu: "Повышает вероятность зачатия",
        icon: "🤰"
      },
      {
        title: "Qon aylanishi",
        titleRu: "Кровообращение",
        description: "Organlarga kislorod yetkazilishini yaxshilaydi",
        descriptionRu: "Улучшает кровоснабжение органов",
        icon: "❤️"
      }
    ],
  
    ingredients: [
      {
        name: "L-arginin",
        nameRu: "L-аргинин",
        icon: "🧬",
        benefits: [
          "Qon tomirlarni kengaytiradi",
          "Qon aylanishini yaxshilaydi",
          "Kislorod yetkazilishini oshiradi",
          "Reproduktiv organlar faoliyatini yaxshilaydi",
          "Homiladorlik ehtimolini oshiradi"
        ]
      },
      {
        name: "Vitex ekstrakti",
        nameRu: "Экстракт витекса",
        icon: "🌿",
        benefits: [
          "Progesteron ishlab chiqarishni oshiradi",
          "Prolaktinni kamaytiradi",
          "Gormonal balansni tiklaydi",
          "Implantatsiyani yaxshilaydi",
          "Homiladorlik ehtimolini oshiradi"
        ]
      },
      {
        name: "Vitamin B9 (metilfolat)",
        nameRu: "Витамин B9 (метилфолат)",
        icon: "💊",
        benefits: [
          "Hujayra bo‘linishini qo‘llab-quvvatlaydi",
          "Plasenta rivojlanishida muhim",
          "Homila nuqsonlarini oldini oladi",
          "Qon tomirlarni rivojlantiradi",
          "Homiladorlik xavfsizligini oshiradi"
        ]
      },
      {
        name: "Vitamin E",
        nameRu: "Витамин E",
        icon: "✨",
        benefits: [
          "Antioksidant himoya",
          "To‘qimalarni kislorod bilan ta’minlaydi",
          "Metabolizmni yaxshilaydi",
          "Homiladorlikni qo‘llab-quvvatlaydi",
          "Erta tushish xavfini kamaytiradi"
        ]
      },
      {
        name: "Vitamin C",
        nameRu: "Витамин C",
        icon: "🍊",
        benefits: [
          "Kollagen sintezini qo‘llab-quvvatlaydi",
          "Tomirlarni mustahkamlaydi",
          "Yallig‘lanishga qarshi ta’sir",
          "Immunitetni oshiradi",
          "Homiladorlikni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Minerallar kompleksi",
        nameRu: "Минеральный комплекс",
        icon: "⚙️",
        benefits: [
          "Zinc — hujayra rivojlanishi uchun",
          "Selen — gormonal balans uchun",
          "Yod — qalqonsimon bez uchun",
          "Magniy — asab tizimi uchun",
          "Organizm funksiyalarini qo‘llab-quvvatlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kuniga 1 sache",
      dosageRu: "По 1 саше 1 раз в день",
      timing: "Ovqatdan keyin",
      timingRu: "После еды",
      duration: "1 oy (3 oy oldin boshlash tavsiya etiladi)",
      durationRu: "1 месяц (начинать за 3 месяца до зачатия)",
      instruction: "Homiladorlik boshlangach qabul qilish to‘xtatiladi",
      instructionRu: "После наступления беременности прием прекращают"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Homiladorlik",
      "Emizish davri",
      "Uglevod almashinuvi buzilishi"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Homiladorlikka tayyorlaydi", textRu: "Подготовка к беременности" },
      { text: "Gormonal balansni tiklaydi", textRu: "Баланс гормонов" },
      { text: "Fertillikni oshiradi", textRu: "Повышает фертильность" },
      { text: "Klinik tasdiqlangan samaradorlik", textRu: "Клинически доказано" }
    ]
  },
  14: {
  id: 14,
  name: "AKITONOZOL",
  nameRu: "АКИТОНОЗОЛ",
  nameEn: "AKITONOZOL",

  tagline: "Qalqonsimon bez faoliyatini qo‘llab-quvvatlash uchun",
  taglineRu: "Для поддержки функции щитовидной железы",
  taglineEn: "For thyroid function support",

  image: akitonozol,
  pdf: "https://drive.google.com/file/d/1QGbeHvipMNRqSHKXy6eA2D3v5cEKLnh9/view?usp=sharing",

  volume: "60 tabletka (0.5 g)",
  volumeRu: "60 таблеток (0,5 г)",
  volumeEn: "60 tablets (0.5 g)",

  form: "O‘simlik asosidagi tabletkalar",
  formRu: "Таблетки на основе растительных компонентов",
  formEn: "Herbal tablets",

  rating: 4.7,
  reviews: 689,
  manufacturer: "—",
  certification: "TS 24481429-03:2015",
  price: "—",
  currency: "сум",

  composition: [
    {
      name: "Durnishnik (Xanthium strumarium)",
      nameRu: "Дурнишник обыкновенный (Xanthium strumarium)",
      nameEn: "Common cocklebur (Xanthium strumarium)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Ayr (Acorus calamus)",
      nameRu: "Аир обыкновенный (Acorus calamus)",
      nameEn: "Sweet flag (Acorus calamus)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Sarimsoq (Allium sativum)",
      nameRu: "Чеснок (Allium sativum)",
      nameEn: "Garlic (Allium sativum)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Laminariya (dengiz karami)",
      nameRu: "Ламинария (морская капуста)",
      nameEn: "Kelp (seaweed)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Chabrets (Thymus serpyllum)",
      nameRu: "Чабрец (Thymus serpyllum)",
      nameEn: "Thyme (Thymus serpyllum)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Shalfey (Salvia officinalis)",
      nameRu: "Шалфей лекарственный (Salvia officinalis)",
      nameEn: "Common sage (Salvia officinalis)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Yong‘oq (Juglans regia)",
      nameRu: "Грецкий орех (Juglans regia)",
      nameEn: "Walnut (Juglans regia)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Zveroboy (Hypericum perforatum)",
      nameRu: "Зверобой продырявленный (Hypericum perforatum)",
      nameEn: "St. John's wort (Hypericum perforatum)",
      amount: "—",
      per: "1 tabletka"
    },
    {
      name: "Yod",
      nameRu: "Йод",
      nameEn: "Iodine",
      amount: "100 mkg",
      per: "1 tabletka"
    }
  ],

  benefits: [
    {
      title: "Qalqonsimon bez faoliyatini qo‘llab-quvvatlash",
      titleRu: "Поддержка функции щитовидной железы",
      titleEn: "Supports thyroid function",
      description: "Yod qalqonsimon bezning normal ishlashi uchun zarur mikroelement hisoblanadi.",
      descriptionRu: "Йод является необходимым микроэлементом для нормальной работы щитовидной железы.",
      descriptionEn: "Iodine is an essential micronutrient required for normal thyroid function.",
      icon: "🦋"
    },
    {
      title: "Yod yetishmovchiligining oldini olish",
      titleRu: "Профилактика йододефицита",
      titleEn: "Helps prevent iodine deficiency",
      description: "Organizmga qo‘shimcha yod yetkazib berishga yordam beradi.",
      descriptionRu: "Помогает обеспечить организм дополнительным йодом.",
      descriptionEn: "Helps provide the body with additional iodine.",
      icon: "⚡"
    },
    {
      title: "Zob qaytalanishining profilaktikasi",
      titleRu: "Профилактика рецидива зоба",
      titleEn: "Goiter recurrence prevention",
      description: "Yo‘riqnomada qalqonsimon bez operatsiyasi yoki dori bilan davolashdan keyin zob qaytalanishining oldini olish uchun ko‘rsatilgan.",
      descriptionRu: "Согласно инструкции, применяется для профилактики рецидива зоба после операции на щитовидной железе или медикаментозного лечения.",
      descriptionEn: "According to the leaflet, it is indicated to help prevent goiter recurrence after thyroid surgery or medication treatment.",
      icon: "🛡️"
    },
    {
      title: "O‘simlik komponentlari majmuasi",
      titleRu: "Комплекс растительных компонентов",
      titleEn: "Combination of herbal ingredients",
      description: "Tarkibida sakkizta o‘simlik komponenti va yod mavjud.",
      descriptionRu: "Содержит восемь растительных компонентов и йод.",
      descriptionEn: "Contains eight herbal ingredients and iodine.",
      icon: "🌿"
    }
  ],

  ingredients: [
    {
      name: "Yod",
      nameRu: "Йод",
      nameEn: "Iodine",
      icon: "🧪",
      benefits: [
        "Qalqonsimon bezning normal faoliyati uchun zarur",
        "Qalqonsimon bez gormonlarini ishlab chiqarishda ishtirok etadi",
        "Organizmda yod yetishmovchiligini to‘ldirishga yordam beradi",
        "Normal moddalar almashinuvi uchun muhim"
      ],
      benefitsRu: [
        "Необходим для нормальной работы щитовидной железы",
        "Участвует в выработке гормонов щитовидной железы",
        "Помогает восполнять недостаток йода в организме",
        "Важен для нормального обмена веществ"
      ],
      benefitsEn: [
        "Essential for normal thyroid function",
        "Participates in thyroid hormone production",
        "Helps replenish iodine deficiency in the body",
        "Important for normal metabolism"
      ]
    },
    {
      name: "Laminariya",
      nameRu: "Ламинария",
      nameEn: "Kelp",
      icon: "🌊",
      benefits: [
        "O‘simlik tarkibidagi tabiiy yod manbai",
        "Yod bilan organizmni ta’minlashga yordam beradi",
        "Qalqonsimon bez faoliyati uchun muhim mikroelementlarni o‘z ichiga oladi"
      ],
      benefitsRu: [
        "Природный растительный источник йода",
        "Помогает обеспечивать организм йодом",
        "Содержит микроэлементы, важные для функции щитовидной железы"
      ],
      benefitsEn: [
        "A natural plant-based source of iodine",
        "Helps provide iodine to the body",
        "Contains micronutrients important for thyroid function"
      ]
    },
    {
      name: "Sarimsoq",
      nameRu: "Чеснок",
      nameEn: "Garlic",
      icon: "🧄",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan",
        "Tarkibida tabiiy biologik faol birikmalar mavjud"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент",
        "Содержит природные биологически активные соединения"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient",
        "Contains naturally occurring bioactive compounds"
      ]
    },
    {
      name: "Durnishnik",
      nameRu: "Дурнишник обыкновенный",
      nameEn: "Common cocklebur",
      icon: "🌿",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    },
    {
      name: "Ayr",
      nameRu: "Аир обыкновенный",
      nameEn: "Sweet flag",
      icon: "🌱",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    },
    {
      name: "Chabrets",
      nameRu: "Чабрец",
      nameEn: "Thyme",
      icon: "🌿",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    },
    {
      name: "Shalfey",
      nameRu: "Шалфей лекарственный",
      nameEn: "Common sage",
      icon: "🍃",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    },
    {
      name: "Yong‘oq",
      nameRu: "Грецкий орех",
      nameEn: "Walnut",
      icon: "🌰",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    },
    {
      name: "Zveroboy",
      nameRu: "Зверобой продырявленный",
      nameEn: "St. John's wort",
      icon: "🌼",
      benefits: [
        "O‘simlik tarkibiy qismi sifatida formulaga kiritilgan"
      ],
      benefitsRu: [
        "Включён в состав формулы как растительный компонент"
      ],
      benefitsEn: [
        "Included in the formula as a plant-based ingredient"
      ]
    }
  ],

  indications: [
    "Organizmga yod yetarli miqdorda tushmasligi bilan bog‘liq qalqonsimon bez kasalliklarining profilaktikasi",
    "Yodga ehtiyoji oshgan shaxslarda yod tanqisligining oldini olish: homiladorlar, emizikli ayollar, o‘smirlar va bolalar",
    "Qalqonsimon bez operatsiyasidan yoki zobni dori vositalari bilan davolash tugaganidan keyin zob qaytalanishining profilaktikasi",
    "Yod yetishmovchiligi sababli yuzaga kelgan diffuz notoksik zob",
    "Diffuz eutireoid zob"
  ],

  indicationsRu: [
    "Профилактика заболеваний щитовидной железы, обусловленных недостаточным поступлением йода в организм",
    "Профилактика йододефицита у лиц с повышенной потребностью в йоде: беременных, кормящих женщин, подростков и детей",
    "Профилактика рецидива зоба после операции на щитовидной железе или после окончания медикаментозного лечения зоба",
    "Диффузный нетоксический зоб, вызванный недостаточным поступлением йода",
    "Диффузный эутиреоидный зоб"
  ],

  indicationsEn: [
    "Prevention of thyroid disorders caused by insufficient iodine intake",
    "Prevention of iodine deficiency in people with increased iodine requirements, including pregnant and breastfeeding women, adolescents and children",
    "Prevention of goiter recurrence after thyroid surgery or completion of medication treatment for goiter",
    "Diffuse non-toxic goiter caused by insufficient iodine intake",
    "Diffuse euthyroid goiter"
  ],

  usage: {
    dosage: "Doza va davolash kursining davomiyligi shifokor tomonidan har bir bemor uchun individual belgilanadi.",

    dosageRu: "Дозу и продолжительность курса лечения врач определяет индивидуально для каждого пациента.",

    dosageEn: "The dosage and duration of treatment are determined individually by the healthcare professional.",

    timing: "Ertalab, ovqat vaqtida",
    timingRu: "Утром, во время еды",
    timingEn: "In the morning, with food",

    duration: "Odatda 1–3 oy. Kurs tugaganidan bir oy o‘tgach, takrorlash mumkin.",
    durationRu: "Обычно от 1 до 3 месяцев. Курс можно повторить через месяц после его окончания.",
    durationEn: "Usually 1–3 months. The course may be repeated one month after completion.",

    instruction: "12 yoshgacha bo‘lgan bolalar: kuniga 1 tabletka. Kattalar va 12 yoshdan katta bolalar: kuniga 2 tabletka. Homilador va emizikli ayollar: kuniga 2–3 tabletka. Barcha dozalar ertalab ovqat bilan qabul qilinadi. Aniq dozani shifokor belgilaydi.",
    instructionRu: "Дети до 12 лет: по 1 таблетке в сутки. Взрослые и дети старше 12 лет: по 2 таблетки в сутки. Беременные и кормящие женщины: по 2–3 таблетки в сутки. Принимать утром во время еды. Точную дозировку определяет врач.",
    instructionEn: "Children under 12: 1 tablet daily. Adults and children over 12: 2 tablets daily. Pregnant and breastfeeding women: 2–3 tablets daily. Take in the morning with food. The exact dosage is determined by a healthcare professional."
  },

  contraindications: [
    "Mahsulotning bir yoki bir nechta tarkibiy qismlariga yuqori sezuvchanlik",
    "Yod preparatlarini ko‘tara olmaslik"
  ],

  contraindicationsRu: [
    "Повышенная чувствительность к одному или нескольким компонентам продукта",
    "Непереносимость препаратов йода"
  ],

  contraindicationsEn: [
    "Hypersensitivity to one or more of the product's ingredients",
    "Intolerance to iodine preparations"
  ],

  sideEffects: [
    "Odatda nojo‘ya ta’sirlar kuzatilmaydi",
    "Ayrim tarkibiy qismlarga individual yuqori sezuvchanlik bo‘lsa, allergik reaksiyalar yuzaga kelishi mumkin",
    "Allergik reaksiya yuzaga kelsa, qabul qilishni to‘xtating"
  ],

  sideEffectsRu: [
    "Обычно побочные эффекты не наблюдаются",
    "При индивидуальной повышенной чувствительности к компонентам возможны аллергические реакции",
    "При возникновении аллергической реакции прекратите применение"
  ],

  sideEffectsEn: [
    "Side effects are generally not observed",
    "Allergic reactions may occur in cases of individual hypersensitivity to one or more ingredients",
    "Discontinue use if an allergic reaction develops"
  ],

  overdose: [
    "Yo‘riqnomada dozani oshirib yuborish natijasida yuzaga keladigan nojo‘ya holatlar aniqlanmagani ko‘rsatilgan."
  ],

  overdoseRu: [
    "Согласно инструкции, нежелательные явления в результате передозировки не выявлены."
  ],

  overdoseEn: [
    "According to the leaflet, no adverse effects resulting from overdose have been identified."
  ],

  interactions: [
    "Yo‘riqnomaga ko‘ra, boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan."
  ],

  interactionsRu: [
    "Согласно инструкции, отрицательных эффектов при совместном назначении с другими лекарственными средствами не выявлено."
  ],

  interactionsEn: [
    "According to the leaflet, no negative effects have been identified when used together with other medicines."
  ],

  warnings: [
    "Dozani va davolash kursining davomiyligini shifokor belgilaydi.",
    "Homiladorlik va emizish davrida dozani shifokor bilan kelishish kerak.",
    "Yod preparatlarini ko‘tara olmaslik holatida qo‘llash mumkin emas.",
    "Allergik reaksiya yuzaga kelganda qabul qilishni to‘xtating."
  ],

  warningsRu: [
    "Дозу и продолжительность курса лечения определяет врач.",
    "Во время беременности и грудного вскармливания дозировку необходимо согласовать с врачом.",
    "Не применять при непереносимости препаратов йода.",
    "При возникновении аллергической реакции прекратите приём."
  ],

  warningsEn: [
    "The dosage and duration of treatment should be determined by a healthcare professional.",
    "During pregnancy and breastfeeding, the dosage should be discussed with a healthcare professional.",
    "Do not use if you are intolerant to iodine preparations.",
    "Discontinue use if an allergic reaction occurs."
  ],

  storage: [
    "Harorat: +2°C dan +25°C gacha",
    "Yorug‘likdan himoyalangan joyda saqlang",
    "Bolalar qo‘li yetmaydigan joyda saqlang"
  ],

  storageRu: [
    "Хранить при температуре от +2°C до +25°C",
    "Хранить в защищённом от света месте",
    "Хранить в недоступном для детей месте"
  ],

  storageEn: [
    "Store at a temperature between +2°C and +25°C",
    "Store in a place protected from light",
    "Keep out of reach of children"
  ],

  shelfLife: "2 yil",
  shelfLifeRu: "2 года",
  shelfLifeEn: "2 years",

  features: [
    {
      text: "Har bir tabletkada 100 mkg yod",
      textRu: "100 мкг йода в каждой таблетке",
      textEn: "100 mcg of iodine in each tablet"
    },
    {
      text: "8 ta o‘simlik komponenti",
      textRu: "8 растительных компонентов",
      textEn: "8 herbal ingredients"
    },
    {
      text: "Qalqonsimon bez faoliyatini qo‘llab-quvvatlash",
      textRu: "Поддержка функции щитовидной железы",
      textEn: "Supports thyroid function"
    },
    {
      text: "60 tabletka",
      textRu: "60 таблеток",
      textEn: "60 tablets"
    }
  ]
  },
 
  19: {
    id: 19,
    name: "VIRTUSIN",
    nameRu: "ВИРТУСИН",
    nameEn: "VIRTUSIN",

    tagline: "Erkaklar salomatligi va quvvatini qo‘llab-quvvatlash uchun",
    taglineRu: "Для поддержки мужского здоровья и потенции",
    taglineEn: "For men's health and vitality",

    image: virtusin,

    pdf: "https://drive.google.com/file/d/1_34mRznbLbz-CGqvcnV11y6H__i-14m-/view?usp=sharing",

    volume: "60 tabletka (0.5 g)",
    volumeRu: "60 таблеток (0,5 г)",
    volumeEn: "60 tablets (0.5 g)",

    form: "O‘simlik asosidagi tabletkalar",
    formRu: "Таблетки на растительной основе",
    formEn: "Herbal tablets",

    rating: 4.8,
    reviews: 721,

    manufacturer: "—",
    certification: "TS 24481429-03:2015",
    price: "—",
    currency: "сум",

    composition: [
      {
        name: "Pion (Paeonia anomala)",
        nameRu: "Пион уклоняющийся (Paeonia anomala)",
        nameEn: "Peony (Paeonia anomala)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Kiprey (Chamerion angustifolium)",
        nameRu: "Кипрей узколистный (Chamerion angustifolium)",
        nameEn: "Fireweed (Chamerion angustifolium)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Osina (Populus tremula)",
        nameRu: "Осина (Populus tremula)",
        nameEn: "Aspen (Populus tremula)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Qovoq (Cucurbita pepo)",
        nameRu: "Тыква (Cucurbita pepo)",
        nameEn: "Pumpkin (Cucurbita pepo)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Ot kashtani (Aesculus hippocastanum)",
        nameRu: "Конский каштан (Aesculus hippocastanum)",
        nameEn: "Horse chestnut (Aesculus hippocastanum)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Qichitqi o‘t (Urtica dioica)",
        nameRu: "Крапива двудомная (Urtica dioica)",
        nameEn: "Stinging nettle (Urtica dioica)",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Lopux (Arctium lappa)",
        nameRu: "Лопух большой (Arctium lappa)",
        nameEn: "Greater burdock (Arctium lappa)",
        amount: "—",
        per: "1 tabletka"
      }
    ],

    benefits: [
      {
        title: "Erkaklar salomatligi",
        titleRu: "Мужское здоровье",
        titleEn: "Men's health",
        description: "Erkaklar siydik-tanosil organlari funksiyasini qo‘llab-quvvatlashga mo‘ljallangan.",
        descriptionRu: "Предназначен для поддержки функций мочеполовых органов у мужчин.",
        descriptionEn: "Designed to support the functions of the male genitourinary system.",
        icon: "🛡️"
      },
      {
        title: "Prostata salomatligi",
        titleRu: "Здоровье простаты",
        titleEn: "Prostate health",
        description: "Prostata bezining funksiyasini qo‘llab-quvvatlashga yordam beradi.",
        descriptionRu: "Способствует поддержанию функции предстательной железы.",
        descriptionEn: "The leaflet states that it supports prostate gland function.",
        icon: "💙"
      },
      {
        title: "Libido va potensiya",
        titleRu: "Либидо и потенция",
        titleEn: "Libido and potency",
        description: "Yo‘riqnomada libido va erkaklar jinsiy potensiyasini rag‘batlantirish qayd etilgan.",
        descriptionRu: "В инструкции указано стимулирующее действие на либидо и половую потенцию мужчин.",
        descriptionEn: "The leaflet describes an effect on libido and male sexual potency.",
        icon: "🔥"
      },
      {
        title: "Energiya va chidamlilik",
        titleRu: "Энергия и выносливость",
        titleEn: "Energy and endurance",
        description: "Yo‘riqnomaga ko‘ra, energiya va chidamlilikni oshirishga mo‘ljallangan.",
        descriptionRu: "Согласно инструкции, способствует повышению энергии и выносливости.",
        descriptionEn: "According to the leaflet, it is intended to support energy and endurance.",
        icon: "⚡"
      },
      {
        title: "Reproduktiv salomatlik",
        titleRu: "Репродуктивное здоровье",
        titleEn: "Reproductive health",
        description: "Erkaklarning reproduktiv imkoniyatlarini qo‘llab-quvvatlash uchun mo‘ljallangan.",
        descriptionRu: "Предназначен для поддержки репродуктивных возможностей мужчин.",
        descriptionEn: "Intended to support male reproductive capabilities.",
        icon: "💪"
      }
    ],

    ingredients: [
      {
        name: "Pion",
        nameRu: "Пион",
        nameEn: "Peony",
        scientificName: "Paeonia anomala",
        icon: "🌸",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Kiprey",
        nameRu: "Кипрей",
        nameEn: "Fireweed",
        scientificName: "Chamerion angustifolium",
        icon: "🌿",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Osina",
        nameRu: "Осина",
        nameEn: "Aspen",
        scientificName: "Populus tremula",
        icon: "🌳",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Qovoq",
        nameRu: "Тыква",
        nameEn: "Pumpkin",
        scientificName: "Cucurbita pepo",
        icon: "🎃",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Ot kashtani",
        nameRu: "Конский каштан",
        nameEn: "Horse chestnut",
        scientificName: "Aesculus hippocastanum",
        icon: "🌰",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Qichitqi o‘t",
        nameRu: "Крапива двудомная",
        nameEn: "Stinging nettle",
        scientificName: "Urtica dioica",
        icon: "🌱",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      },
      {
        name: "Lopux",
        nameRu: "Лопух большой",
        nameEn: "Greater burdock",
        scientificName: "Arctium lappa",
        icon: "🍃",
        description: "O‘simlik tarkibiy qismi.",
        descriptionRu: "Растительный компонент состава.",
        descriptionEn: "A botanical ingredient in the formula."
      }
    ],

    usage: {
      dosage: "Kattalarga kuniga 2 marta 1 tabletkadan.",
      dosageRu: "Взрослым по 1 таблетке 2 раза в день.",
      dosageEn: "Adults: 1 tablet twice a day.",

      timing: "Ovqatdan 5–10 daqiqa oldin.",
      timingRu: "За 5–10 минут до еды.",
      timingEn: "5–10 minutes before meals.",

      duration: "Odatda surunkali kasalliklarda davolash kursi 30 kun.",
      durationRu: "Обычно при хронических заболеваниях курс лечения составляет 30 дней.",
      durationEn: "For chronic conditions, the usual course is 30 days.",

      instruction: "Davolash davomiyligi va dozasi davolovchi shifokor tomonidan individual belgilanadi. Zarurat bo‘lsa, kurs takrorlanishi mumkin.",
      instructionRu: "Длительность курса лечения и дозу определяет лечащий врач индивидуально. При необходимости курс можно повторить.",
      instructionEn: "The treating physician determines the dosage and duration individually. The course may be repeated if necessary."
    },

    indications: [
      {
        uz: "O‘tkir va surunkali prostatitning oldini olish va davolash.",
        ru: "Профилактика и лечение острого и хронического простатита.",
        en: "Prevention and treatment of acute and chronic prostatitis."
      },
      {
        uz: "Prostata bezining adenomasida (DGPJ).",
        ru: "Аденома предстательной железы (ДГПЖ).",
        en: "Benign prostatic hyperplasia (BPH)."
      },
      {
        uz: "Sistit.",
        ru: "Цистит.",
        en: "Cystitis."
      },
      {
        uz: "Prostatitdan keyingi uzoq muddatli qo‘shimcha terapiya.",
        ru: "Дополнительная длительная терапия после перенесённого простатита.",
        en: "Long-term adjunctive therapy after prostatitis."
      },
      {
        uz: "Siydik-tanosil tizimining funksional buzilishlari.",
        ru: "Функциональные нарушения мочеполовой системы.",
        en: "Functional disorders of the genitourinary system."
      },
      {
        uz: "Erektsiyaning pasayishi.",
        ru: "Снижение эрекции.",
        en: "Reduced erectile function."
      },
      {
        uz: "Prostata bezining funksiyasi va tuzilishini me’yorlashtirish hamda uning hujayralaridagi metabolik jarayonlarni yaxshilash.",
        ru: "Для нормализации функций и структуры предстательной железы и улучшения процессов метаболизма в её клетках.",
        en: "For supporting prostate structure and function and improving metabolic processes in its cells."
      }
    ],

    contraindications: [
      "Preparatning bir yoki bir nechta komponentlariga yuqori sezuvchanlik.",
      "Повышенная чувствительность к одному или нескольким компонентам препарата.",
      "Hypersensitivity to one or more ingredients."
    ],

    sideEffects: {
      uz: [
        "Odatda nojo‘ya ta’sirlar kuzatilmaydi.",
        "Ayrim hollarda allergik reaksiyalar yuzaga kelishi mumkin.",
        "Oshqozon-ichak tizimida dispeptik buzilishlar kuzatilishi mumkin.",
        "Yuqori sezuvchanlik reaksiyasi paydo bo‘lsa, preparatni qo‘llashni to‘xtatish kerak."
      ],
      ru: [
        "Обычно побочные эффекты не возникают.",
        "В отдельных случаях возможны аллергические реакции.",
        "Возможны диспептические расстройства со стороны желудочно-кишечного тракта.",
        "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить."
      ],
      en: [
        "Side effects usually do not occur.",
        "Allergic reactions may occur in some cases.",
        "Dyspeptic gastrointestinal disorders may occur.",
        "Discontinue use if a hypersensitivity reaction develops."
      ]
    },

    overdose: {
      uz: "Yo‘riqnomada dozani oshirib yuborish natijasida nojo‘ya holatlar aniqlanmagani qayd etilgan.",
      ru: "В инструкции указано, что нежелательные явления в результате передозировки не выявлены.",
      en: "The leaflet reports that adverse effects resulting from overdose have not been identified."
    },

    interactions: {
      uz: "Boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan.",
      ru: "При назначении с другими лекарственными средствами отрицательных эффектов не выявлено.",
      en: "No negative effects were reported when prescribed with other medicines."
    },

    warnings: {
      uz: "Doza va davolash kursining davomiyligini shifokor individual belgilaydi. Prostatit, prostata adenomasi yoki erektil disfunksiya belgilari bo‘lsa, shifokor ko‘rigidan o‘tish zarur.",
      ru: "Дозу и продолжительность курса врач определяет индивидуально. При симптомах простатита, аденомы простаты или эректильной дисфункции необходимо обратиться к врачу.",
      en: "The physician determines the dosage and treatment duration individually. Consult a doctor if you have symptoms of prostatitis, prostate enlargement, or erectile dysfunction."
    },

    storage: [
      "Harorat: +2°C dan +25°C gacha.",
      "Yorug‘likdan himoyalangan joyda saqlash.",
      "Bolalar qo‘li yetmaydigan joyda saqlash."
    ],

    storageRu: [
      "Хранить при температуре от +2°C до +25°C.",
      "Хранить в защищённом от света месте.",
      "Хранить в недоступном для детей месте."
    ],

    storageEn: [
      "Store at a temperature between +2°C and +25°C.",
      "Keep protected from light.",
      "Keep out of reach of children."
    ],

    shelfLife: "2 yil",
    shelfLifeRu: "2 года",
    shelfLifeEn: "2 years",

    features: [
      {
        text: "Erkaklar uchun",
        textRu: "Для мужчин",
        textEn: "For men"
      },
      {
        text: "O‘simliklar asosidagi tarkib",
        textRu: "Растительный состав",
        textEn: "Herbal formula"
      },
      {
        text: "60 tabletka",
        textRu: "60 таблеток",
        textEn: "60 tablets"
      },
      {
        text: "30 kunlik odatiy kurs",
        textRu: "Обычный курс — 30 дней",
        textEn: "Usual course: 30 days"
      }
    ]
  },
  
  20: {
    id: 20,
    name: "VITALIT",
    nameRu: "ВИТАЛИТ",
    nameEn: "VITALIT",

    tagline: "Umumiy salomatlik va organizm himoyasini qo‘llab-quvvatlash uchun",
    taglineRu: "Для поддержки общего здоровья и защитных сил организма",
    taglineEn: "For general health and supporting the body's natural defenses",

    image: vitalit,

    pdf: "https://drive.google.com/file/d/1ya2FJ0bY7YWQjfqHRbhhmWBJqvPBRJ6O/view?usp=sharing",

    volume: "60 tabletka",
    volumeRu: "60 таблеток",
    volumeEn: "60 tablets",

    form: "O‘simlik asosidagi tabletkalar",
    formRu: "Таблетки на растительной основе",
    formEn: "Herbal tablets",

    rating: 4.9,
    reviews: 1187,

    manufacturer: "—",
    certification: "—",
    standard: "TS 24481429-03:2015",
    price: "—",
    currency: "сум",

    composition: [
      {
        name: "Cheremuxa mevalari",
        nameRu: "Плоды черёмухи",
        nameEn: "Bird cherry fruits",
        scientificName: "Fructus Padus",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Fruktoza: 4–6%, glyukoza: 5–6%, saxaroza: 0,1–0,6%",
          "Organik kislotalar: 0,45–0,72%",
          "Pektinlar: 1,0–1,1%",
          "Antosianlar: 6–8%",
          "Oshlovchi moddalar: 15% gacha",
          "Askorbin kislotasi, flavonoidlar va yod: 2,7–3,4 mkg/kg"
        ],
        naturalContentsRu: [
          "Фруктоза: 4–6%, глюкоза: 5–6%, сахароза: 0,1–0,6%",
          "Органические кислоты: 0,45–0,72%",
          "Пектины: 1,0–1,1%",
          "Антоцианы: 6–8%",
          "Дубильные вещества: до 15%",
          "Аскорбиновая кислота, флавоноиды и йод: 2,7–3,4 мкг/кг"
        ]
      },
      {
        name: "Shipovnik mevalari",
        nameRu: "Плоды шиповника",
        nameEn: "Rosehip fruits",
        scientificName: "Rosa majalis",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Askorbin kislotasi: 4–14%",
          "Shakar: 23,9%",
          "Pektin moddalar: 3,7–14%",
          "Olma va limon kislotalari",
          "Kaliy, natriy, kalsiy, magniy, fosfor va temir tuzlari",
          "Flavonoidlar: kversetin, kemferol, izokversitrin",
          "Tokoferol (E vitamini), karotin, B2 va K1 vitaminlari"
        ],
        naturalContentsRu: [
          "Аскорбиновая кислота: 4–14%",
          "Сахар: 23,9%",
          "Пектиновые вещества: 3,7–14%",
          "Яблочная и лимонная кислоты",
          "Соли калия, натрия, кальция, магния, фосфора и железа",
          "Флавоноиды: кверцетин, кемпферол, изокверцитрин",
          "Токоферол (витамин E), каротин, витамины B2 и K1"
        ]
      },
      {
        name: "Qichitqi o‘t barglari",
        nameRu: "Листья крапивы",
        nameEn: "Nettle leaves",
        scientificName: "Urtica dioica",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Askorbin kislotasi: 269 mg% gacha",
          "K vitamini: 42–45 mkg/g",
          "Pantoten kislotasi",
          "Karotinoidlar: beta-karotin, ksantofill va violaksantin",
          "Oshlovchi va oqsil moddalari",
          "Aminokislotalar: asparagin va glutamin",
          "Xolin, betain, fitonsidlar hamda temir va kremniy tuzlari"
        ],
        naturalContentsRu: [
          "Аскорбиновая кислота: до 269 мг%",
          "Витамин K: 42–45 мкг/г",
          "Пантотеновая кислота",
          "Каротиноиды: бета-каротин, ксантофилл и виолаксантин",
          "Дубильные и белковые вещества",
          "Аминокислоты: аспарагин и глутамин",
          "Холин, бетаин, фитонциды, соли железа и кремния"
        ]
      },
      {
        name: "Oltin ildiz (Rhodiola rosea)",
        nameRu: "Золотой корень (родиола розовая)",
        nameEn: "Golden root (Rhodiola rosea)",
        scientificName: "Rhodiola rosea",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Fenol birikmalari va fenol spirtlari",
          "Salidrozidlar (rodiolozidlar): taxminan 1%",
          "Flavonoidlar: kversetin, giperozid, kemferol",
          "Antraglikozidlar va oshlovchi moddalar",
          "Efir moyi, organik kislotalar va lipidlar",
          "Marganes va boshqa mikroelementlar"
        ],
        naturalContentsRu: [
          "Фенольные соединения и фенолоспирты",
          "Салидрозиды (родиолозиды): около 1%",
          "Флавоноиды: кверцетин, гиперозид, кемпферол",
          "Антрагликозиды и дубильные вещества",
          "Эфирное масло, органические кислоты и липиды",
          "Марганец и другие микроэлементы"
        ]
      },
      {
        name: "Chabrets (Thymus serpyllum)",
        nameRu: "Чабрец (Thymus serpyllum)",
        nameEn: "Wild thyme (Thymus serpyllum)",
        scientificName: "Thymus serpyllum",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Efir moyi: 1% gacha",
          "Timol: 30% gacha",
          "Karvakrol, p-simol, gamma-terpinen, alfa-terpineol va borneol",
          "Oshlovchi moddalar va achchiq moddalar",
          "Ursul va oleanol kislotalari",
          "Flavonoidlar va mineral tuzlar"
        ],
        naturalContentsRu: [
          "Эфирное масло: до 1%",
          "Тимол: до 30%",
          "Карвакрол, п-цимол, гамма-терпинен, альфа-терпинеол и борнеол",
          "Дубильные и горькие вещества",
          "Урсоловая и олеаноловая кислоты",
          "Флавоноиды и минеральные соли"
        ]
      },
      {
        name: "Yong‘oq",
        nameRu: "Орех грецкий",
        nameEn: "Walnut",
        scientificName: "Juglans regia",
        amount: "—",
        per: "1 tabletka",
        naturalContents: [
          "Kalsiy pektat",
          "Oshlovchi moddalar va flavonoidlar",
          "C, PP, E, B1 vitaminlari va A provitamini",
          "Inozit (B8 vitamini) va karotin",
          "Yuglon, glikozidlar va kumarin",
          "Kofein va fenolkarbon kislotalari, inulin, aldegidlar va alkaloidlar"
        ],
        naturalContentsRu: [
          "Пектат кальция",
          "Дубильные вещества и флавоноиды",
          "Витамины C, PP, E, B1 и провитамин A",
          "Инозит (витамин B8) и каротин",
          "Юглон, гликозиды и кумарин",
          "Кофейная и фенолкарбоновые кислоты, инулин, альдегиды и алкалоиды"
        ]
      }
    ],

    benefits: [
      {
        title: "Vitamin va mineral manbalari",
        titleRu: "Источник витаминов и минералов",
        titleEn: "Source of vitamins and minerals",
        description: "Yo‘riqnomada organizmdagi vitamin va mineral moddalar yetishmovchiligini to‘ldirishga yordam beruvchi kompleks sifatida ta’riflangan.",
        descriptionRu: "В инструкции описан как комплекс, восполняющий недостаток витаминов и минеральных веществ в организме.",
        descriptionEn: "The leaflet describes it as a complex intended to replenish vitamin and mineral deficiencies.",
        icon: "💊"
      },
      {
        title: "Organizm himoyasi",
        titleRu: "Защитные силы организма",
        titleEn: "Natural body defenses",
        description: "Organizmning infeksiyalar va tashqi muhitning noqulay ta’sirlariga qarshiligini qo‘llab-quvvatlash uchun tavsiya etilgan.",
        descriptionRu: "Рекомендуется для поддержки сопротивляемости организма инфекциям и неблагоприятным воздействиям окружающей среды.",
        descriptionEn: "Recommended to support the body's resistance to infections and adverse environmental factors.",
        icon: "🛡️"
      },
      {
        title: "Antioksidant faollik",
        titleRu: "Антиоксидантная активность",
        titleEn: "Antioxidant activity",
        description: "Yo‘riqnomada antioksidant faollikka ega ekani qayd etilgan.",
        descriptionRu: "В инструкции отмечено наличие антиоксидантной активности.",
        descriptionEn: "The leaflet describes antioxidant activity.",
        icon: "✨"
      },
      {
        title: "Ichak mikroflorasi",
        titleRu: "Микрофлора кишечника",
        titleEn: "Intestinal microflora",
        description: "Yo‘riqnomaga ko‘ra, ichak mikroflorasini me’yorlashtirishga yordam beradi.",
        descriptionRu: "Согласно инструкции, способствует нормализации микрофлоры кишечника.",
        descriptionEn: "According to the leaflet, it helps normalize intestinal microflora.",
        icon: "🌿"
      },
      {
        title: "Ovqat hazm qilish tizimi",
        titleRu: "Пищеварительная система",
        titleEn: "Digestive system",
        description: "Oshqozon-ichak tizimining normal faoliyatini tiklash va saqlashga ko‘maklashishi qayd etilgan.",
        descriptionRu: "Отмечено содействие восстановлению и поддержанию нормальной работы желудочно-кишечного тракта.",
        descriptionEn: "The leaflet states that it supports the restoration and maintenance of normal gastrointestinal function.",
        icon: "🍽️"
      },
      {
        title: "Tiklanish davri",
        titleRu: "Период восстановления",
        titleEn: "Recovery period",
        description: "Infeksion va shamollash kasalliklaridan keyingi tiklanish davrida tavsiya etilgan.",
        descriptionRu: "Рекомендуется в период выздоровления после инфекционных и простудных заболеваний.",
        descriptionEn: "Recommended during recovery after infectious and respiratory illnesses.",
        icon: "💚"
      }
    ],

    ingredients: [
      {
        name: "Cheremuxa",
        nameRu: "Черёмуха",
        nameEn: "Bird cherry",
        icon: "🍒",
        scientificName: "Padus",
        description: "Tarkibida organik kislotalar, pektinlar, antosianlar va flavonoidlar mavjud.",
        descriptionRu: "Содержит органические кислоты, пектины, антоцианы и флавоноиды.",
        descriptionEn: "Contains organic acids, pectins, anthocyanins and flavonoids."
      },
      {
        name: "Shipovnik",
        nameRu: "Шиповник",
        nameEn: "Rosehip",
        icon: "🌹",
        scientificName: "Rosa majalis",
        description: "Askorbin kislotasi, karotin, tokoferol va boshqa vitaminlar manbai sifatida ko‘rsatilgan.",
        descriptionRu: "Указан как источник аскорбиновой кислоты, каротина, токоферола и других витаминов.",
        descriptionEn: "Listed as a source of ascorbic acid, carotene, tocopherol and other vitamins."
      },
      {
        name: "Qichitqi o‘t",
        nameRu: "Крапива",
        nameEn: "Nettle",
        icon: "🌱",
        scientificName: "Urtica dioica",
        description: "Tarkibida askorbin kislotasi, K vitamini, karotinoidlar va mineral tuzlar mavjud.",
        descriptionRu: "Содержит аскорбиновую кислоту, витамин K, каротиноиды и минеральные соли.",
        descriptionEn: "Contains ascorbic acid, vitamin K, carotenoids and mineral salts."
      },
      {
        name: "Rhodiola rosea",
        nameRu: "Родиола розовая",
        nameEn: "Rhodiola rosea",
        icon: "🌿",
        scientificName: "Rhodiola rosea",
        description: "Tarkibida salidrozidlar, flavonoidlar, fenol birikmalari va mikroelementlar mavjud.",
        descriptionRu: "Содержит салидрозиды, флавоноиды, фенольные соединения и микроэлементы.",
        descriptionEn: "Contains salidrosides, flavonoids, phenolic compounds and trace elements."
      },
      {
        name: "Chabrets",
        nameRu: "Чабрец",
        nameEn: "Wild thyme",
        icon: "🌿",
        scientificName: "Thymus serpyllum",
        description: "Tarkibida timol, efir moylari, flavonoidlar va mineral tuzlar mavjud.",
        descriptionRu: "Содержит тимол, эфирные масла, флавоноиды и минеральные соли.",
        descriptionEn: "Contains thymol, essential oils, flavonoids and mineral salts."
      },
      {
        name: "Yong‘oq",
        nameRu: "Грецкий орех",
        nameEn: "Walnut",
        icon: "🌰",
        scientificName: "Juglans regia",
        description: "Tarkibida C, PP, E, B1 vitaminlari, flavonoidlar va boshqa tabiiy birikmalar mavjud.",
        descriptionRu: "Содержит витамины C, PP, E, B1, флавоноиды и другие природные соединения.",
        descriptionEn: "Contains vitamins C, PP, E and B1, flavonoids and other natural compounds."
      }
    ],

    usage: {
      dosage: "3 yoshdan katta va 12 yoshgacha bo‘lgan bolalarga: 1 tabletkadan kuniga 2–3 marta. Kattalarga: 2 tabletkadan kuniga 2–3 marta.",
      dosageRu: "Детям старше 3 лет и до 12 лет: по 1 таблетке 2–3 раза в день. Взрослым: по 2 таблетки 2–3 раза в день.",
      dosageEn: "Children over 3 and up to 12 years: 1 tablet 2–3 times daily. Adults: 2 tablets 2–3 times daily.",

      timing: "Ovqat vaqtida.",
      timingRu: "Во время еды.",
      timingEn: "During meals.",

      duration: "1–2 oy.",
      durationRu: "1–2 месяца.",
      durationEn: "1–2 months.",

      instruction: "Qo‘llash tartibi individual belgilanadi. Zarurat bo‘lsa, kurs takrorlanishi mumkin.",
      instructionRu: "Режим применения устанавливается индивидуально. При необходимости возможен повторный курс.",
      instructionEn: "The regimen is determined individually. The course may be repeated if necessary."
    },

    indications: [
      {
        uz: "Gipo- va avitaminozning oldini olish hamda kompleks terapiya tarkibida qo‘llash.",
        ru: "Профилактика гипо- и авитаминоза, а также применение в составе комплексной терапии.",
        en: "Prevention of hypo- and avitaminosis and use as part of complex therapy."
      },
      {
        uz: "Vitaminlar, mineral moddalar va mikroelementlar yetishmovchiligining oldini olish.",
        ru: "Профилактика недостатка витаминов, минеральных веществ и микроэлементов.",
        en: "Prevention of vitamin, mineral and trace element deficiencies."
      },
      {
        uz: "Jismoniy va aqliy mehnat hamda sifatsiz ovqatlanish tufayli vitamin va minerallar yetishmovchiligi.",
        ru: "Недостаток витаминов и минералов вследствие физических и умственных нагрузок или неполноценного питания.",
        en: "Vitamin and mineral deficiencies associated with physical or mental exertion or inadequate nutrition."
      },
      {
        uz: "Infeksion va shamollash kasalliklaridan keyingi tiklanish davri.",
        ru: "Период выздоровления после инфекционных и простудных заболеваний.",
        en: "Recovery after infectious and respiratory illnesses."
      },
      {
        uz: "Astenik holatlar.",
        ru: "Астенические состояния.",
        en: "Asthenic conditions."
      },
      {
        uz: "Homiladorlik va emizish davri.",
        ru: "Период беременности и лактации.",
        en: "Pregnancy and breastfeeding."
      },
      {
        uz: "Yo‘riqnomada kompleks terapiya tarkibida gipertoniya, ateroskleroz, qalqonsimon bez faoliyati buzilishi, qandli diabet, gastrit, buyrak kasalliklari, revmatizm, terining allergik kasalliklari va turli kelib chiqishdagi qon ketishlar ham keltirilgan.",
        ru: "В инструкции также указано применение в составе комплексной терапии при гипертонии, атеросклерозе, нарушениях функции щитовидной железы, сахарном диабете, гастрите, заболеваниях почек, ревматизме, аллергических заболеваниях кожи и кровотечениях различного происхождения.",
        en: "The leaflet also lists use as part of complex therapy for hypertension, atherosclerosis, thyroid dysfunction, diabetes, gastritis, kidney diseases, rheumatism, allergic skin diseases and bleeding of various origins."
      }
    ],

    contraindications: [
      "Preparatning bir yoki bir nechta komponentlariga yuqori sezuvchanlik.",
      "Повышенная чувствительность к одному или нескольким компонентам препарата.",
      "Hypersensitivity to one or more ingredients."
    ],

    sideEffects: {
      uz: [
        "Odatda nojo‘ya ta’sirlar kuzatilmaydi.",
        "Ayrim hollarda allergik reaksiyalar yuzaga kelishi mumkin.",
        "Oshqozon-ichak tizimida dispeptik buzilishlar kuzatilishi mumkin.",
        "Yuqori sezuvchanlik reaksiyasi yuzaga kelsa, preparatni qo‘llashni to‘xtatish kerak."
      ],
      ru: [
        "Обычно побочные эффекты не возникают.",
        "В отдельных случаях возможны аллергические реакции.",
        "Возможны диспептические расстройства со стороны желудочно-кишечного тракта.",
        "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить."
      ],
      en: [
        "Side effects usually do not occur.",
        "Allergic reactions may occur in some cases.",
        "Dyspeptic gastrointestinal disorders may occur.",
        "Discontinue use if a hypersensitivity reaction develops."
      ]
    },

    overdose: {
      uz: "Yo‘riqnomada VITALIT preparatini dozadan ortiq qo‘llash natijasida nojo‘ya holatlar aniqlanmagani qayd etilgan.",
      ru: "В инструкции указано, что нежелательные явления в результате передозировки ВИТАЛИТА не выявлены.",
      en: "The leaflet reports that adverse effects resulting from VITALIT overdose have not been identified."
    },

    storage: [
      "Harorat: +2°C dan +25°C gacha.",
      "Yorug‘likdan himoyalangan joyda saqlash.",
      "Bolalar qo‘li yetmaydigan joyda saqlash."
    ],

    storageRu: [
      "Хранить при температуре от +2°C до +25°C.",
      "Хранить в защищённом от света месте.",
      "Хранить в недоступном для детей месте."
    ],

    storageEn: [
      "Store at a temperature between +2°C and +25°C.",
      "Keep protected from light.",
      "Keep out of reach of children."
    ],

    shelfLife: "2 yil",
    shelfLifeRu: "2 года",
    shelfLifeEn: "2 years",

    features: [
      {
        text: "O‘simliklar asosidagi kompleks",
        textRu: "Комплекс на растительной основе",
        textEn: "Plant-based complex"
      },
      {
        text: "Vitamin va minerallar manbai",
        textRu: "Источник витаминов и минералов",
        textEn: "Source of vitamins and minerals"
      },
      {
        text: "Antioksidant faollik",
        textRu: "Антиоксидантная активность",
        textEn: "Antioxidant activity"
      },
      {
        text: "60 tabletka",
        textRu: "60 таблеток",
        textEn: "60 tablets"
      },
      {
        text: "1–2 oylik kurs",
        textRu: "Курс 1–2 месяца",
        textEn: "1–2 month course"
      }
    ]
  },

  21: {
    id: 21,
    name: "GASTIRAK",
    nameRu: "ГАСТИРАК",
    nameEn: "GASTIRAK",

    tagline: "Oshqozon kislotaliligi va hazm bilan bog‘liq muammolarda",
    taglineRu: "При повышенной кислотности и проблемах с пищеварением",
    taglineEn: "For stomach acidity and digestive discomfort",

    image: gastirak,

    pdf: "https://drive.google.com/file/d/18LeuRWch1M-KnItZdVz3xBYWFYNDxzuR/view?usp=sharing",

    volume: "60 tabletka (0.5 g)",
    volumeRu: "60 таблеток (0,5 г)",
    volumeEn: "60 tablets (0.5 g)",

    form: "O‘simlik asosidagi tabletkalar",
    formRu: "Таблетки на растительной основе",
    formEn: "Herbal tablets",

    rating: 4.7,
    reviews: 721,

    manufacturer: "—",
    certification: "—",
    standard: "TS 24481429-03:2015",
    price: "—",
    currency: "сум",

    composition: [
      {
        name: "Ayr botqoq",
        nameRu: "Аир болотный",
        nameEn: "Calamus",
        scientificName: "Acorus calamus",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Zubturum",
        nameRu: "Подорожник",
        nameEn: "Plantain",
        scientificName: "Plantago",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Gretskiy yong‘oq",
        nameRu: "Орех грецкий",
        nameEn: "Walnut",
        scientificName: "Juglans regia",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Aloe",
        nameRu: "Алоэ",
        nameEn: "Aloe",
        scientificName: "Aloe",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        nameEn: "Chamomile",
        scientificName: "Matricaria",
        amount: "—",
        per: "1 tabletka"
      },
      {
        name: "Dorivor melissa",
        nameRu: "Мелисса лекарственная",
        nameEn: "Lemon balm",
        scientificName: "Melissa officinalis",
        amount: "—",
        per: "1 tabletka"
      }
    ],

    benefits: [
      {
        title: "Kislotalilikni kamaytirish",
        titleRu: "Снижение кислотности",
        titleEn: "Reducing acidity",
        description: "Oshqozon shirasi kislotaliligini pasaytirishga va pepsin faolligini kamaytirishga yordam beradi.",
        descriptionRu: "Способствует снижению кислотности желудочного сока и уменьшению активности пепсина.",
        descriptionEn: "Helps reduce gastric juice acidity and pepsin activity.",
        icon: "🧪"
      },
      {
        title: "Oshqozon shilliq qavatini himoya qilish",
        titleRu: "Защита слизистой оболочки желудка",
        titleEn: "Protecting the stomach lining",
        description: "Yo‘riqnomaga ko‘ra, oshqozon shilliq qavatida himoya qatlami hosil qiladi.",
        descriptionRu: "Согласно инструкции, образует защитную плёнку на слизистой оболочке желудка.",
        descriptionEn: "According to the leaflet, it forms a protective film on the stomach lining.",
        icon: "🛡️"
      },
      {
        title: "Spazmolitik ta’sir",
        titleRu: "Спазмолитическое действие",
        titleEn: "Antispasmodic action",
        description: "Tarkibidagi ayr va aloe faol moddalari spazmolitik xususiyatga ega.",
        descriptionRu: "Активные вещества алоэ и корневищ аира обладают спазмолитической активностью.",
        descriptionEn: "The leaflet describes antispasmodic activity in the active substances of aloe and calamus rhizomes.",
        icon: "🌿"
      },
      {
        title: "Oshqozon-ichak faoliyatini qo‘llab-quvvatlash",
        titleRu: "Поддержка работы ЖКТ",
        titleEn: "Supporting digestive function",
        description: "Yo‘riqnomada biriktiruvchi, surgi va yallig‘lanishga qarshi xususiyatlar qayd etilgan.",
        descriptionRu: "В инструкции отмечены вяжущие, слабительные и противовоспалительные свойства.",
        descriptionEn: "The leaflet describes astringent, laxative and anti-inflammatory properties.",
        icon: "🍽️"
      }
    ],

    ingredients: [
      {
        name: "Ayr botqoq",
        nameRu: "Аир болотный",
        nameEn: "Calamus",
        scientificName: "Acorus calamus",
        icon: "🌿",
        description: "Yo‘riqnomada uning faol moddalari spazmolitik xususiyatga ega ekani qayd etilgan.",
        descriptionRu: "В инструкции отмечена спазмолитическая активность его активных веществ.",
        descriptionEn: "The leaflet notes antispasmodic activity of its active substances."
      },
      {
        name: "Zubturum",
        nameRu: "Подорожник",
        nameEn: "Plantain",
        scientificName: "Plantago",
        icon: "🌱",
        description: "GASTIRAK tarkibidagi o‘simlik komponentlaridan biri.",
        descriptionRu: "Один из растительных компонентов состава ГАСТИРАК.",
        descriptionEn: "One of the botanical ingredients in GASTIRAK."
      },
      {
        name: "Gretskiy yong‘oq",
        nameRu: "Орех грецкий",
        nameEn: "Walnut",
        scientificName: "Juglans regia",
        icon: "🌰",
        description: "GASTIRAK tarkibidagi o‘simlik komponentlaridan biri.",
        descriptionRu: "Один из растительных компонентов состава ГАСТИРАК.",
        descriptionEn: "One of the botanical ingredients in GASTIRAK."
      },
      {
        name: "Aloe",
        nameRu: "Алоэ",
        nameEn: "Aloe",
        scientificName: "Aloe",
        icon: "🌿",
        description: "Yo‘riqnomada aloe faol moddalari spazmolitik xususiyatga ega ekani ko‘rsatilgan.",
        descriptionRu: "В инструкции указано, что активные вещества алоэ обладают спазмолитической активностью.",
        descriptionEn: "The leaflet states that aloe active substances have antispasmodic activity."
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        nameEn: "Chamomile",
        scientificName: "Matricaria",
        icon: "🌼",
        description: "GASTIRAK tarkibidagi o‘simlik komponentlaridan biri.",
        descriptionRu: "Один из растительных компонентов состава ГАСТИРАК.",
        descriptionEn: "One of the botanical ingredients in GASTIRAK."
      },
      {
        name: "Dorivor melissa",
        nameRu: "Мелисса лекарственная",
        nameEn: "Lemon balm",
        scientificName: "Melissa officinalis",
        icon: "🍃",
        description: "Yo‘riqnomada melissaning surgi ta’siri qayd etilgan.",
        descriptionRu: "В инструкции отмечено слабительное действие мелиссы.",
        descriptionEn: "The leaflet notes a laxative effect of lemon balm."
      }
    ],

    usage: {
      dosage: "Kattalar: 1–2 tabletkadan kuniga 3 marta. 6–12 yoshli bolalar: 1 tabletkadan kuniga 3 marta.",
      dosageRu: "Взрослым: по 1–2 таблетки 3 раза в сутки. Детям 6–12 лет: по 1 таблетке 3 раза в сутки.",
      dosageEn: "Adults: 1–2 tablets 3 times daily. Children aged 6–12: 1 tablet 3 times daily.",

      timing: "Ovqatdan 30–60 daqiqa keyin.",
      timingRu: "Через 30–60 минут после еды.",
      timingEn: "30–60 minutes after meals.",

      duration: "Odatda 1–3 oy.",
      durationRu: "Обычно от 1 до 3 месяцев.",
      durationEn: "Usually 1–3 months.",

      instruction: "Tabletkalarni oldindan maydalab, 100 ml suv bilan ichish kerak. Avvalgi kurs tugaganidan bir oy o‘tgach, davolash kursini takrorlash mumkin.",
      instructionRu: "Таблетки предварительно измельчают и запивают 100 мл воды. Курс терапии можно повторить спустя месяц после окончания предыдущего курса.",
      instructionEn: "Crush the tablets before taking them and drink with 100 ml of water. The course may be repeated one month after the previous course ends."
    },

    indications: [
      {
        uz: "Giperatsid gastrit.",
        ru: "Гиперацидный гастрит.",
        en: "Hyperacid gastritis."
      },
      {
        uz: "Yarali bo‘lmagan dispepsiya.",
        ru: "Неязвенная диспепсия.",
        en: "Non-ulcer dyspepsia."
      },
      {
        uz: "Gastroezofageal reflyuks kasalligi (GERD).",
        ru: "Гастроэзофагеальная рефлюксная болезнь (ГЭРБ).",
        en: "Gastroesophageal reflux disease (GERD)."
      },
      {
        uz: "O‘n ikki barmoqli ichak va oshqozon yara kasalligi, shu jumladan Helicobacter pylori bilan bog‘liq yara.",
        ru: "Язвенная болезнь двенадцатиперстной кишки и желудка, включая язвенную болезнь, ассоциированную с Helicobacter pylori.",
        en: "Duodenal and gastric ulcer disease, including ulcers associated with Helicobacter pylori."
      },
      {
        uz: "Gastralgiya va nordon kekirish.",
        ru: "Гастралгия и кислая отрыжка.",
        en: "Gastralgia and sour belching."
      },
      {
        uz: "Turli sabablarga ko‘ra yuzaga keladigan jig‘ildon qaynashi.",
        ru: "Изжога различной этиологии.",
        en: "Heartburn of various causes."
      },
      {
        uz: "Parhez buzilishi, spirtli ichimliklarni suiiste’mol qilish, chekish yoki oshqozon shilliq qavatini ta’sirlantiruvchi dorilar sababli yuzaga kelgan oshqozon og‘rig‘ini simptomatik davolash.",
        ru: "Симптоматическая терапия болей в желудке, возникших вследствие нарушения диеты, злоупотребления алкоголем, курения или приёма лекарственных средств, раздражающих слизистую оболочку желудка.",
        en: "Symptomatic treatment of stomach pain caused by dietary violations, alcohol abuse, smoking or medicines that irritate the stomach lining."
      }
    ],

    contraindications: [
      "Preparatning bir yoki bir nechta komponentlariga yuqori sezuvchanlik.",
      "Buyrak yetishmovchiligi."
    ],

    contraindicationsRu: [
      "Повышенная чувствительность к одному или нескольким компонентам препарата.",
      "Почечная недостаточность."
    ],

    contraindicationsEn: [
      "Hypersensitivity to one or more ingredients.",
      "Renal insufficiency."
    ],

    sideEffects: {
      uz: [
        "Odatda nojo‘ya ta’sirlar kuzatilmaydi.",
        "Ayrim hollarda allergik reaksiyalar yuzaga kelishi mumkin.",
        "Yuqori sezuvchanlik reaksiyasi rivojlansa, preparatni qo‘llashni to‘xtatish kerak."
      ],
      ru: [
        "Обычно побочные эффекты не возникают.",
        "В отдельных случаях возможны аллергические реакции.",
        "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить."
      ],
      en: [
        "Side effects usually do not occur.",
        "Allergic reactions may occur in some cases.",
        "Discontinue use if a hypersensitivity reaction develops."
      ]
    },

    overdose: {
      uz: "Yo‘riqnomada GASTIRAK preparatini dozadan ortiq qo‘llash natijasida nojo‘ya holatlar aniqlanmagani qayd etilgan.",
      ru: "В инструкции указано, что нежелательные явления в результате передозировки ГАСТИРАКА не выявлены.",
      en: "The leaflet reports that adverse effects resulting from GASTIRAK overdose have not been identified."
    },

    interactions: {
      uz: "Boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan.",
      ru: "При назначении с другими лекарственными средствами отрицательных эффектов не выявлено.",
      en: "No negative effects were reported when prescribed with other medicines."
    },

    storage: [
      "Harorat: +2°C dan +25°C gacha.",
      "Yorug‘likdan himoyalangan joyda saqlash.",
      "Bolalar qo‘li yetmaydigan joyda saqlash."
    ],

    storageRu: [
      "Хранить при температуре от +2°C до +25°C.",
      "Хранить в защищённом от света месте.",
      "Хранить в недоступном для детей месте."
    ],

    storageEn: [
      "Store at a temperature between +2°C and +25°C.",
      "Keep protected from light.",
      "Keep out of reach of children."
    ],

    shelfLife: "2 yil",
    shelfLifeRu: "2 года",
    shelfLifeEn: "2 years",

    features: [
      {
        text: "Oshqozon shilliq qavatini himoya qilish",
        textRu: "Защита слизистой оболочки желудка",
        textEn: "Stomach lining protection"
      },
      {
        text: "Kislotalilikni kamaytirishga yordam beradi",
        textRu: "Способствует снижению кислотности",
        textEn: "Helps reduce acidity"
      },
      {
        text: "Spazmolitik xususiyat",
        textRu: "Спазмолитическое свойство",
        textEn: "Antispasmodic properties"
      },
      {
        text: "6 ta o‘simlik komponenti",
        textRu: "6 растительных компонентов",
        textEn: "6 botanical ingredients"
      },
      {
        text: "60 tabletka",
        textRu: "60 таблеток",
        textEn: "60 tablets"
      }
    ]
  },  


  22: {
    id: 22,
    name: "GELMOTOKSIN",
    nameRu: "ГЕЛМОТОКСИН",
    tagline: "Parazitlarga qarshi o‘simlik kompleksi",
    taglineRu: "Растительный комплекс против паразитов",
    image: gelmatoksin,
    pdf: "https://drive.google.com/file/d/1xDwl88JEHUTFpEVQfZnBnrWbdC0ZbsFJ/view?usp=sharing",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.7,
    reviews: 689,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",

    composition: [
      { name: "Oddiy pijma (Tanacetum vulgare)", amount: "—", per: "1 tabletka" },
      { name: "Baland devyasil (Inula helenium)", amount: "—", per: "1 tabletka" },
      { name: "O‘tkir bargli kassiya (Cassia acutifolia)", amount: "—", per: "1 tabletka" },
      { name: "Oddiy xmel (Humulus lupulus)", amount: "—", per: "1 tabletka" },
      { name: "Oddiy qovoq urug‘i (Cucurbita pepo)", amount: "—", per: "1 tabletka" },
      { name: "Sarimsoq (Allium sativum)", amount: "—", per: "1 tabletka" }
    ],

    benefits: [
      {
        title: "Gijjalarga qarshi ta’sir",
        titleRu: "Противоглистное действие",
        description: "Yo‘riqnomada askarida va ostritsalarga qarshi ta’siri ko‘rsatilgan.",
        descriptionRu: "В инструкции указано действие против аскарид и остриц.",
        icon: "🪱"
      },
      {
        title: "Lentasimon gijjalarga qarshi",
        titleRu: "Против ленточных гельминтов",
        description: "Qovoq urug‘i lentasimon gijjalarga qarshi qo‘llanilishi bilan tavsiflangan.",
        descriptionRu: "Семена тыквы описаны как средство против ленточных гельминтов.",
        icon: "🎃"
      },
      {
        title: "Hazm jarayonini qo‘llab-quvvatlash",
        titleRu: "Поддержка пищеварения",
        description: "Ayrim tarkibiy qismlari ishtahani va ovqat hazm bo‘lishini qo‘llab-quvvatlaydi.",
        descriptionRu: "Некоторые компоненты способствуют улучшению аппетита и пищеварения.",
        icon: "🌿"
      },
      {
        title: "Ichak faoliyatiga ta’sir",
        titleRu: "Воздействие на работу кишечника",
        description: "Kassiya ich suruvchi ta’sirga ega.",
        descriptionRu: "Кассия обладает слабительным действием.",
        icon: "🧘"
      }
    ],

    ingredients: [
      {
        name: "Pijma",
        nameRu: "Пижма обыкновенная",
        icon: "🌿",
        benefits: [
          "Askarida va ostritsalarga qarshi ta’sir",
          "Lyambliyaga qarshi ta’sir",
          "O‘t haydovchi xususiyat",
          "Spazmolitik va burishtiruvchi ta’sir",
          "Ishtahani oshirishi va ovqat hazm bo‘lishini yaxshilashi mumkin"
        ]
      },
      {
        name: "Devyasil",
        nameRu: "Девясил высокий",
        icon: "🌿",
        benefits: [
          "Askaridozga qarshi ta’sir",
          "Hazm tizimining motor va sekretor faoliyatiga ta’sir",
          "Ovqat hazm qilish yo‘llaridagi yallig‘lanish jarayonini kamaytirishga yordam beradi"
        ]
      },
      {
        name: "Kassiya",
        nameRu: "Кассия остролистная",
        icon: "🌿",
        benefits: [
          "Ich suruvchi ta’sir",
          "Ichak faoliyatini rag‘batlantiradi"
        ]
      },
      {
        name: "Xmel",
        nameRu: "Хмель обыкновенный",
        icon: "🌿",
        benefits: [
          "Tinchlantiruvchi ta’sir",
          "Uyquga yordam beruvchi xususiyat",
          "Achchiq moddalar hazm jarayonini yaxshilashga yordam beradi",
          "Bakteritsid ta’sir"
        ]
      },
      {
        name: "Qovoq urug‘i",
        nameRu: "Семена тыквы",
        icon: "🎃",
        benefits: [
          "Lentasimon gijjalarga qarshi qo‘llaniladi",
          "Buqa, cho‘chqa va pakana solityorlariga qarshi xalq tabobatida ishlatilgan",
          "Keng tasmasimon gijja va ostritsalarga qarshi qo‘llanilishi ko‘rsatilgan"
        ]
      },
      {
        name: "Sarimsoq",
        nameRu: "Чеснок",
        icon: "🧄",
        benefits: [
          "Ishtahani rag‘batlantiradi",
          "Hazm a’zolarida fermentlar ajralishini kuchaytiradi",
          "Ovqat hazm bo‘lishi va o‘zlashtirilishiga yordam beradi",
          "Bakteritsid va dezinfeksiyalovchi xususiyatlarga ega"
        ]
      }
    ],

    indications: [
      "Dumaloq gijjalar: ostritsa va askarida",
      "Lentasimon gijjalar",
      "Gimenolipidoz",
      "Lyamblioz — kompleks terapiya tarkibida"
    ],

    indicationsRu: [
      "Круглые черви: острицы и аскариды",
      "Ленточные черви",
      "Гименолепидоз",
      "Лямблиоз — в составе комплексной терапии"
    ],

    usage: {
      dosage: "Kattalar: 2 tabletkadan kuniga 3 marta. 3 yoshdan boshlab bolalar: 1 tabletkadan kuniga 3 marta.",
      dosageRu: "Взрослым: по 2 таблетки 3 раза в день. Детям с 3 лет: по 1 таблетке 3 раза в день.",
      timing: "Ovqatdan 10–15 daqiqa oldin.",
      timingRu: "За 10–15 минут до еды.",
      duration: "Odatda 21–28 kun. Zarurat bo‘lsa, takroriy kurs mumkin.",
      durationRu: "Обычно 21–28 дней. При необходимости возможен повторный курс.",
      instruction: "Davolash kursi va dozani davolovchi shifokor har bir bemor uchun individual belgilaydi. Dietaga qat’iy rioya qilish tavsiya etiladi.",
      instructionRu: "Длительность курса и дозу определяет лечащий врач индивидуально. Рекомендуется строго соблюдать диету."
    },

    contraindications: [
      "Preparat tarkibiy qismlariga yuqori sezuvchanlik"
    ],

    contraindicationsRu: [
      "Повышенная чувствительность к одному или нескольким компонентам препарата"
    ],

    sideEffects: [
      "Odatda nojo‘ya ta’sirlar kuzatilmaydi.",
      "Allergik reaksiyalar yuz berishi mumkin.",
      "Oshqozon-ichak tizimida dispeptik buzilishlar kuzatilishi mumkin.",
      "Yuqori sezuvchanlik reaksiyasi paydo bo‘lsa, preparatni qo‘llashni to‘xtatish kerak."
    ],

    sideEffectsRu: [
      "Обычно побочные эффекты не возникают.",
      "Возможны аллергические реакции.",
      "Возможны диспепсические расстройства со стороны ЖКТ.",
      "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить."
    ],

    overdose: {
      uz: "Yo‘riqnomada GELMOTOKSIN bilan dozani oshirib yuborish holatlari aniqlanmagani ko‘rsatilgan.",
      ru: "Случаи передозировки препарата ГЕЛМОТОКСИН не выявлены."
    },

    interactions: {
      uz: "Boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan.",
      ru: "При назначении с другими лекарственными средствами отрицательных эффектов не выявлено."
    },

    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda saqlash",
      "Bolalar qo‘li yetmaydigan joyda saqlash"
    ],

    storageRu: [
      "Температура хранения: от +2°C до +25°C",
      "Хранить в защищённом от света месте",
      "Хранить в недоступном для детей месте"
    ],

    shelfLife: "2 yil",
    shelfLifeRu: "2 года",

    features: [
      { text: "Gijjalarga qarshi", textRu: "Противоглистное действие" },
      { text: "O‘simlik tarkibi", textRu: "Растительный состав" },
      { text: "Hazmni qo‘llab-quvvatlash", textRu: "Поддержка пищеварения" },
      { text: "Kompleks terapiya", textRu: "Комплексная терапия" }
    ]
  },

  23: {
    id: 23,
    name: "GINKO CARDIOZEN",
    nameRu: "ГИНКО КАРДИОЗЕН",
    tagline: "Yurak va qon tomir tizimini qo‘llab-quvvatlash uchun o‘simlik kompleksi",
    taglineRu: "Растительный комплекс для поддержки сердца и сосудистой системы",
    image: ginko,
    pdf: "https://drive.google.com/file/d/1KEAMUznlZAqjZ0xRlSFgHQQcc4bz7fOt/view?usp=sharing",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.8,
    reviews: 1045,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",

    composition: [
      { name: "Ginkgo biloba (Ginkgo biloba)", amount: "—", per: "1 tabletka" },
      { name: "Baland devyasil (Inula helenium)", amount: "—", per: "1 tabletka" },
      { name: "Oddiy do‘lana (Crataegus laevigata)", amount: "—", per: "1 tabletka" },
      { name: "Dorivor valeriana (Valeriana officinalis)", amount: "—", per: "1 tabletka" },
      { name: "Dorivor melissa (Melissa officinalis)", amount: "—", per: "1 tabletka" },
      { name: "Oddiy mingbarg (Achillea millefolium)", amount: "—", per: "1 tabletka" },
      { name: "Arslonquyruq (Leonurus)", amount: "—", per: "1 tabletka" },
      { name: "Yalpiz (Mentha piperita)", amount: "—", per: "1 tabletka" }
    ],

    benefits: [
      {
        title: "Yurak faoliyatini qo‘llab-quvvatlash",
        titleRu: "Поддержка работы сердца",
        description: "Yo‘riqnomada yurak mushagining oziqlanishi va qisqarish funksiyasiga ijobiy ta’siri ko‘rsatilgan.",
        descriptionRu: "В инструкции указано влияние на питание сердечной мышцы и её сократительную функцию.",
        icon: "❤️"
      },
      {
        title: "Koronar tomirlarga ta’sir",
        titleRu: "Воздействие на коронарные сосуды",
        description: "Miotrop spazmolitik ta’sir ko‘rsatishi va koronar tomirlarni kengaytirishga yordam berishi qayd etilgan.",
        descriptionRu: "Отмечено миотропное спазмолитическое действие, преимущественно в отношении коронарных сосудов.",
        icon: "🩸"
      },
      {
        title: "Yurak ritmini qo‘llab-quvvatlash",
        titleRu: "Поддержка сердечного ритма",
        description: "Yo‘riqnomada yurak ritmini va miokard o‘tkazuvchanligini normallashtirishga yordam berishi ko‘rsatilgan.",
        descriptionRu: "Согласно инструкции, способствует нормализации сердечного ритма и проводимости миокарда.",
        icon: "💓"
      },
      {
        title: "Tinchlantiruvchi ta’sir",
        titleRu: "Седативное действие",
        description: "Tarkibidagi o‘simliklar majmuasi tinchlantiruvchi xususiyatga ega.",
        descriptionRu: "Комплекс растительных компонентов обладает седативным действием.",
        icon: "🧘"
      }
    ],

    ingredients: [
      {
        name: "Ginkgo biloba",
        nameRu: "Гинкго билоба",
        icon: "🌿",
        benefits: [
          "Preparat tarkibidagi asosiy o‘simlik komponentlaridan biri",
          "Yo‘riqnomada alohida farmakologik ta’siri batafsil ko‘rsatilmagan"
        ]
      },
      {
        name: "Devyasil",
        nameRu: "Девясил высокий",
        icon: "🌿",
        benefits: [
          "O‘simlik asosidagi kompleks tarkibiga kiradi"
        ]
      },
      {
        name: "Do‘lana",
        nameRu: "Боярышник обыкновенный",
        icon: "🌸",
        benefits: [
          "Yo‘riqnomada yurak mushagining oziqlanishiga yordam beruvchi asosiy komponentlardan biri sifatida ko‘rsatilgan",
          "Koronar tomirlarga ta’sir ko‘rsatishi qayd etilgan",
          "Miokarddagi metabolik jarayonlarni qo‘llab-quvvatlashi ko‘rsatilgan",
          "Yurak ritmini tartibga solishga yordam berishi qayd etilgan"
        ]
      },
      {
        name: "Valeriana",
        nameRu: "Валериана лекарственная",
        icon: "🌿",
        benefits: [
          "O‘simlik kompleksining tarkibiy qismi"
        ]
      },
      {
        name: "Melissa",
        nameRu: "Мелисса лекарственная",
        icon: "🌿",
        benefits: [
          "O‘simlik kompleksining tarkibiy qismi"
        ]
      },
      {
        name: "Mingbarg",
        nameRu: "Тысячелистник обыкновенный",
        icon: "🌼",
        benefits: [
          "O‘simlik kompleksining tarkibiy qismi"
        ]
      },
      {
        name: "Arslonquyruq",
        nameRu: "Пустырник",
        icon: "🌿",
        benefits: [
          "Yo‘riqnomada yurak faoliyatiga ta’sir qiluvchi asosiy komponentlardan biri sifatida ko‘rsatilgan",
          "Yurak mushagining oziqlanishini qo‘llab-quvvatlashi qayd etilgan",
          "Yurak ritmini tartibga solishga yordam berishi ko‘rsatilgan",
          "Tinchlantiruvchi ta’sirga ega"
        ]
      },
      {
        name: "Yalpiz",
        nameRu: "Мята перечная",
        icon: "🌿",
        benefits: [
          "O‘simlik kompleksining tarkibiy qismi"
        ]
      }
    ],

    indications: [
      "Yurak yetishmovchiligi",
      "Kardionevroz",
      "Neyrotsirkulyator distoniya",
      "Arterial gipertoniya",
      "Yurak ishemik kasalligi",
      "Surunkali koronar yetishmovchilik",
      "Turli kelib chiqishdagi miokardiodistrofiya",
      "Bosh miya qon aylanishining buzilishlari"
    ],

    indicationsRu: [
      "Сердечная недостаточность",
      "Кардионевроз",
      "Нейроциркуляторная дистония",
      "Артериальная гипертония",
      "Ишемическая болезнь сердца",
      "Хроническая коронарная недостаточность",
      "Миокардиодистрофии различного генеза",
      "Нарушения кровообращения головного мозга"
    ],

    usage: {
      dosage: "1 tabletkadan kuniga 2–3 marta.",
      dosageRu: "По 1 таблетке 2–3 раза в день.",
      timing: "Ovqatdan 30 daqiqa oldin.",
      timingRu: "За 30 минут до еды.",
      duration: "2–4 hafta. Davolash davomiyligi bemorning individual reaksiyasiga qarab belgilanadi.",
      durationRu: "2–4 недели. Длительность лечения определяется индивидуальной реакцией пациента.",
      instruction: "Doza va davolash kursini davolovchi shifokor individual belgilaydi. Takroriy kurs 5–10 kunlik tanaffusdan keyin tavsiya etiladi.",
      instructionRu: "Дозу и длительность курса определяет лечащий врач индивидуально. Повторный курс рекомендуется после перерыва 5–10 дней."
    },

    contraindications: [
      "Eroziv gastrit",
      "Oshqozon yarasi",
      "O‘n ikki barmoq ichak yarasining zo‘rayish bosqichi",
      "O‘tkir miokard infarkti",
      "Doimiy past arterial qon bosimi (gipotenziya)",
      "Bosh miya qon aylanishining o‘tkir buzilishlari",
      "Preparat tarkibiy qismlariga yuqori sezuvchanlik"
    ],

    contraindicationsRu: [
      "Эрозивный гастрит",
      "Язвенная болезнь желудка",
      "Язвенная болезнь двенадцатиперстной кишки в стадии обострения",
      "Острый инфаркт миокарда",
      "Стойкая артериальная гипотензия",
      "Острые нарушения мозгового кровообращения",
      "Повышенная чувствительность к одному или нескольким компонентам препарата"
    ],

    sideEffects: [
      "Kamdan-kam hollarda allergik reaksiyalar kuzatilishi mumkin.",
      "Yuqori sezuvchanlik reaksiyasi paydo bo‘lsa, preparatni qo‘llashni to‘xtatish kerak."
    ],

    sideEffectsRu: [
      "В редких случаях возможны аллергические реакции.",
      "При развитии реакции повышенной чувствительности применение препарата необходимо прекратить."
    ],

    overdose: {
      uz: "Yo‘riqnomada hozirgi vaqtgacha dozani oshirib yuborish holatlari aniqlanmagani ko‘rsatilgan.",
      ru: "В настоящее время случаи передозировки не выявлены."
    },

    interactions: {
      uz: "Boshqa dori vositalari bilan birga qo‘llanganda salbiy ta’sirlar aniqlanmagan.",
      ru: "При назначении с другими лекарственными средствами отрицательных эффектов не выявлено."
    },

    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda saqlash",
      "Bolalar qo‘li yetmaydigan joyda saqlash"
    ],

    storageRu: [
      "Температура хранения: от +2°C до +25°C",
      "Хранить в защищённом от света месте",
      "Хранить в недоступном для детей месте"
    ],

    shelfLife: "24 oy",
    shelfLifeRu: "24 месяца",

    features: [
      { text: "Yurak faoliyatini qo‘llab-quvvatlash", textRu: "Поддержка работы сердца" },
      { text: "Koronar tomirlarga ta’sir", textRu: "Воздействие на коронарные сосуды" },
      { text: "Tinchlantiruvchi ta’sir", textRu: "Седативное действие" },
      { text: "O‘simlik tarkibi", textRu: "Растительный состав" }
    ]
  },

 24: {
  id: 24,
  name: "DAMA PERFETTA",
  nameRu: "ДАМА ПЕРФЕТТА",

  tagline: "Go‘zallik va yoshlikni qo‘llab-quvvatlovchi kompleks",
  taglineRu: "Комплекс для красоты и молодости кожи",

  image: dama,

  pdf: "https://drive.google.com/file/d/1Zd2mdQzl0-2TlAwxzPlZDuV0T-fcNT2u/view?usp=sharing",

  volume: "30 tabletka (1150 mg)",
  form: "Plyonka bilan qoplangan tabletkalar",

  rating: 4.8,
  reviews: 912,

  manufacturer: "MDC PHARMACEUTICALS LIMITED, India; MDC INTERNATIONAL NZ LTD., New Zealand",
  certification: "—",
  price: "—",
  currency: "сум",

  distributor: {
    name: 'OOO "ANFA IMPORTS AND EXPORTS"',
    country: "O‘zbekiston",
    address: "Toshkent viloyati, Toshkent tumani, Sarkedom ko‘chasi, 123-uy",
    email: "info@anfa.uz",
    phone: "+998 95 195-59-00"
  },

  composition: [
    "Uzum urug‘i ekstrakti (Grape Seed Extract)",
    "Yashil choy ekstrakti (Green Tea Extract)",
    "Likopin (Lycopene)",
    "Soya izoflavonlari (Soy Isoflavones)",
    "I turdagi kollagen peptidi (Type I Collagen Peptide)",
    "Askorbin kislotasi (Vitamin C)",
    "Tokoferol asetat (Vitamin E)",
    "Biotin",
    "Nikotinamid (Niacinamide)",
    "L-glutation (L-Glutathione)",
    "Rux (Zinc)"
  ],

  ingredients: [
    {
      name: "Grape Seed Extract",
      nameRu: "Экстракт виноградных косточек",
      amount: "—",
      description: "Antioksidant xususiyatlarga ega o‘simlik ekstrakti.",
      descriptionRu: "Растительный экстракт с антиоксидантными свойствами."
    },
    {
      name: "Green Tea Extract",
      nameRu: "Экстракт зелёного чая",
      amount: "—",
      description: "Tarkibida antioksidant birikmalar mavjud.",
      descriptionRu: "Содержит антиоксидантные соединения."
    },
    {
      name: "Lycopene",
      nameRu: "Ликопин",
      amount: "—",
      description: "Karotinoid guruhiga mansub antioksidant.",
      descriptionRu: "Антиоксидант, относящийся к группе каротиноидов."
    },
    {
      name: "Soy Isoflavones",
      nameRu: "Изофлавоны сои",
      amount: "—",
      description: "Soya tarkibida uchraydigan biologik faol birikmalar.",
      descriptionRu: "Биологически активные соединения, содержащиеся в сое."
    },
    {
      name: "Type I Collagen Peptide",
      nameRu: "Пептид коллагена I типа",
      amount: "—",
      description: "Teri tuzilishida muhim o‘rin tutuvchi kollagen komponenti.",
      descriptionRu: "Компонент коллагена, играющий важную роль в структуре кожи."
    },
    {
      name: "Vitamin C",
      nameRu: "Витамин C",
      amount: "—",
      description: "Kollagen hosil bo‘lishida ishtirok etadigan vitamin.",
      descriptionRu: "Витамин, участвующий в образовании коллагена."
    },
    {
      name: "Vitamin E",
      nameRu: "Витамин E",
      amount: "—",
      description: "Hujayralarni oksidlovchi stressdan himoya qilishga yordam beruvchi antioksidant vitamin.",
      descriptionRu: "Антиоксидантный витамин, помогающий защищать клетки от окислительного стресса."
    },
    {
      name: "Biotin",
      nameRu: "Биотин",
      amount: "—",
      description: "Energiya almashinuvida ishtirok etuvchi B guruhi vitamini.",
      descriptionRu: "Витамин группы B, участвующий в энергетическом обмене."
    },
    {
      name: "Niacinamide",
      nameRu: "Никотинамид",
      amount: "—",
      description: "B3 vitamini shakli bo‘lib, hujayra metabolizmida ishtirok etadi.",
      descriptionRu: "Форма витамина B3, участвующая в клеточном метаболизме."
    },
    {
      name: "L-Glutathione",
      nameRu: "L-глутатион",
      amount: "—",
      description: "Organizmda tabiiy ravishda uchraydigan antioksidant. Yo‘riqnomada terining yorqinroq va ochroq ko‘rinishini qo‘llab-quvvatlashi qayd etilgan.",
      descriptionRu: "Природный антиоксидант организма. В инструкции отмечено его возможное влияние на более сияющий и светлый вид кожи."
    },
    {
      name: "Zinc",
      nameRu: "Цинк",
      amount: "—",
      description: "Teri hujayralarining yangilanishi va normal faoliyatida ishtirok etuvchi mineral.",
      descriptionRu: "Минерал, участвующий в обновлении клеток кожи и её нормальном функционировании."
    }
  ],

  benefits: [
    {
      title: "Teri yorqinligini qo‘llab-quvvatlash",
      titleRu: "Поддержка сияния кожи",
      description: "Glutation terining yanada yorqin va och ko‘rinishiga yordam berishi yo‘riqnomada ta’kidlangan.",
      descriptionRu: "В инструкции отмечено, что глутатион способствует более сияющему и светлому виду кожи.",
      icon: "✨"
    },
    {
      title: "Kollagenni qo‘llab-quvvatlash",
      titleRu: "Поддержка коллагена",
      description: "Kollagen peptidlari va vitamin C kollagen bilan bog‘liq jarayonlarda ishtirok etadi.",
      descriptionRu: "Пептиды коллагена и витамин C участвуют в процессах, связанных с образованием коллагена.",
      icon: "🧬"
    },
    {
      title: "Soch va tirnoqlar parvarishi",
      titleRu: "Уход за волосами и ногтями",
      description: "Tarkibidagi vitaminlar va minerallar yetishmovchiligini to‘ldirish orqali soch va tirnoqlarning tashqi ko‘rinishini qo‘llab-quvvatlashga mo‘ljallangan.",
      descriptionRu: "Предназначен для поддержки внешнего вида волос и ногтей за счёт восполнения дефицита витаминов и минералов.",
      icon: "💇‍♀️"
    },
    {
      title: "Anti-aging kompleks",
      titleRu: "Антивозрастной комплекс",
      description: "Yoshga bog‘liq kollagen yetishmovchiligini qoplash va qarish jarayonlarini sekinlashtirish uchun mo‘ljallangan.",
      descriptionRu: "Предназначен для компенсации возрастного дефицита коллагена и замедления процессов старения.",
      icon: "🌸"
    },
    {
      title: "Antioksidant qo‘llab-quvvatlash",
      titleRu: "Антиоксидантная поддержка",
      description: "Tarkibidagi antioksidant komponentlar organizmning oksidlovchi stressga qarshi himoya tizimini qo‘llab-quvvatlaydi.",
      descriptionRu: "Антиоксидантные компоненты поддерживают защитные системы организма от окислительного стресса.",
      icon: "🛡️"
    }
  ],

  indications: [
    "Vitaminlar va boshqa zarur elementlar yetishmovchiligini to‘ldirish",
    "Yoshga bog‘liq kollagen yetishmovchiligini qoplash",
    "Qarish jarayonlarini sekinlashtirish",
    "Teri, soch va tirnoqlarning tashqi ko‘rinishini yaxshilash",
    "Sellulit belgilarini kamaytirish",
    "Tana vaznini kamaytirish"
  ],

  indicationsRu: [
    "Компенсация дефицита витаминов и других необходимых элементов",
    "Устранение возрастного дефицита коллагена",
    "Замедление процессов старения",
    "Улучшение внешнего вида кожи, волос и ногтей",
    "Снижение проявлений целлюлита",
    "Снижение веса"
  ],

  usage: {
    dosage: "Kattalarga 1 tabletkadan kuniga 2 marta.",
    dosageRu: "Взрослым по 1 таблетке 2 раза в сутки.",
    timing: "Ovqat bilan bir vaqtda qabul qilinadi.",
    timingRu: "Принимать одновременно с приёмом пищи.",
    instruction: "Tabletkani chaynamasdan, butunligicha, oz miqdordagi suyuqlik bilan yutish kerak.",
    instructionRu: "Таблетку следует проглатывать целиком, не разжёвывая, запивая небольшим количеством жидкости.",
    duration: "3–6 oy. Zarurat bo‘lsa, kurs uzaytirilishi yoki takrorlanishi mumkin.",
    durationRu: "3–6 месяцев. При необходимости возможно увеличение продолжительности курса или его повторение."
  },

  contraindications: [
    "Homiladorlik",
    "Bolalar yoshi",
    "Preparatga yuqori sezuvchanlik"
  ],

  contraindicationsRu: [
    "Беременность",
    "Детский возраст",
    "Повышенная чувствительность к препарату"
  ],

  sideEffects: [
    "Nojo‘ya ta’sirlar juda kam uchraydi.",
    "Jiddiy nojo‘ya ta’sirlar yuzaga kelsa, qabul qilishni darhol to‘xtatish va shifokorga murojaat qilish kerak."
  ],

  sideEffectsRu: [
    "Побочные эффекты возникают очень редко.",
    "При возникновении серьёзных побочных эффектов необходимо немедленно прекратить приём и обратиться к врачу."
  ],

  overdose: {
    uz: "Preparatning dozasi oshirib yuborilishi natijasida nojo‘ya holatlar yuzaga kelgani haqida ma’lumot berilmagan.",
    ru: "О случаях возникновения нежелательных явлений в результате передозировки препарата не сообщалось."
  },

  interactions: {
    uz: "Boshqa dori vositalari bilan o‘zaro ta’siri haqida ma’lumot mavjud emas.",
    ru: "Данные о взаимодействии с какими-либо лекарственными средствами отсутствуют."
  },

  storage: {
    temperature: "+2°C dan +25°C gacha",
    uz: "Bolalar ololmaydigan, yorug‘likdan himoyalangan joyda saqlang.",
    ru: "Хранить в недоступном для детей, защищённом от света месте при температуре от +2°C до +25°C."
  },

  shelfLife: "2 yil",

  features: [
    "Anti-aging kompleks",
    "Teri parvarishini qo‘llab-quvvatlash",
    "Soch va tirnoqlar parvarishi",
    "Antioksidant komponentlar",
    "Kollagenni qo‘llab-quvvatlash",
    "Glutation va rux bilan boyitilgan tarkib"
  ]
},
 }
};


export default productsData;    