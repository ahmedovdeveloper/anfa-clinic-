// productsData.js - База данных всех продуктов с данными из PDF

export const productsData = {
  sirop: { 
  1: {
      id: 1,
      name: "CASSI",
      nameRu: "КАССI",
      tagline: "Biologik faol qo'shimcha bolalar uchun",
      taglineRu: "Биологически активная добавка для детей",
      image: "https://www.dropbox.com/scl/fi/9e6c1mpna9ksfl59ue2gx/IMG_1928.JPG?rlkey=vm25x38e24ay9um9olx2eg6gg&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/h7wyverbcvoivfd1fp8e1/CASSI.pdf?rlkey=99938vg68i84ull1sr58sh62l&raw=1",
      volume: "150 ml",
      form: "Suspenziya",
      rating: 4.8,
      reviews: 1247,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "120,000",
      currency: "сум",
      
      composition: [
        { name: "Kalsiy laktat", amount: "500 mg", per: "5 ml" },
        { name: "Xolekaltsiferol (Vitamin D3)", amount: "15 mkg", per: "5 ml" },
        { name: "Vitamin K2 (MK-7)", amount: "27.5 mkg", per: "5 ml" },
        { name: "Magneziy sitrat", amount: "70 mg", per: "5 ml" },
        { name: "Sink (glyukonat)", amount: "5 mg", per: "5 ml" }
      ],
  
      benefits: [
        {
          title: "Mustahkam suyak va tishlar",
          titleRu: "Крепкие кости и зубы",
          description: "Faol o'sish davrida suyak va tishlarni mustahkamlash",
          descriptionRu: "Укрепление костей и зубов в период активного роста",
          icon: "💪"
        },
        {
          title: "Immunitetni qo'llab-quvvatlash",
          titleRu: "Поддержка иммунитета",
          description: "Shamollashlarning tez-tez takrorlanishini kamaytirish",
          descriptionRu: "Уменьшение частоты простудных заболеваний",
          icon: "🛡️"
        },
        {
          title: "Teri, soch va tirnoqlar sog'ligi",
          titleRu: "Здоровье кожи, волос и ногтей",
          description: "Organizmning tashqi ko'rinishini yaxshilash",
          descriptionRu: "Улучшение внешнего вида",
          icon: "✨"
        },
        {
          title: "Uyqu va asab tizimi",
          titleRu: "Сон и нервная система",
          description: "Uyquni normallashtirish va charchoqni kamaytirish",
          descriptionRu: "Нормализация сна и снижение усталости",
          icon: "😴"
        }
      ],
  
      ingredients: [
        {
          name: "Kalsiy laktat",
          nameRu: "Лактат кальция",
          icon: "🦴",
          benefits: [
            "Suyaklarning asosiy minerali",
            "Suyak va tishlarning mustahkamligini ta'minlaydi",
            "Yurak va mushak faoliyatida ishtirok etadi",
            "Asab o'tkazuvchanligini boshqaradi"
          ]
        },
        {
          name: "Vitamin D3 (Xolekaltsiferol)",
          nameRu: "Витамин D3 (Холекальциферол)",
          icon: "☀️",
          benefits: [
            '"Quyosh vitamini" - hayotiy muhim',
            "Kalsiy va fosfor o'zlashtirilishini kuchaytiradi",
            "Raxitni oldini oladi",
            "Immunitet va infeksiyalarga qarshilikni mustahkamlaydi"
          ]
        },
        {
          name: "Vitamin K2 (MK-7)",
          nameRu: "Витамин K2 (MK-7)",
          icon: "🎯",
          benefits: [
            "Kalsiyni aynan suyak va tishlarga yo'naltiradi",
            "Qon tomirlarida to'planishini oldini oladi",
            "Vitamin D3 bilan sinergiyada ishlaydi",
            "Suyaklarni mustahkamlash effektini kuchaytiradi"
          ]
        },
        {
          name: "Magneziy sitrat",
          nameRu: "Цитрат магния",
          icon: "🧘",
          benefits: [
            "Mushaklarning normal tonusini qo'llab-quvvatlaydi",
            "Asab tizimini boshqaradi",
            "Tinch bo'lish va yaxshi uyquga yordam beradi",
            "Kalsiy o'zlashtirilishini kuchaytiradi"
          ]
        },
        {
          name: "Sink (glyukonat)",
          nameRu: "Цинк (глюконат)",
          icon: "⚡",
          benefits: [
            "Hujayralarning o'sishi va bo'linishi uchun zarur",
            "Immunitetni mustahkamlaydi",
            "Tez-tez shamollashlardan himoya qiladi",
            "300 dan ortiq fermentlar faoliyatida ishtirok etadi"
          ]
        }
      ],
  
      usage: {
        dosage: "Bolalarga 2 yoshdan boshlab: kuniga 1 marta 5 ml",
        dosageRu: "Детям с 2 лет: 1 раз в день по 5 мл",
        timing: "Ovqat paytida",
        timingRu: "Во время еды",
        duration: "1 oydan 2 oygacha",
        durationRu: "От 1 до 2 месяцев",
        instruction: "Qo'llashdan oldin flakonni yaxshilab chayqatish kerak",
        instructionRu: "Перед применением хорошо взболтать флакон"
      },
  
      contraindications: [
        "Tarkibiy qismlarga individual toqatsizlik",
        "Giperkaltsiyemiya",
        "Buyrak toshlari (nefrolitiaz)",
        "2 yoshgacha bo'lgan bolalar — faqat shifokor tavsiyasi bilan"
      ],
  
      storage: [
        "Harorat: +4°C dan +25°C gacha",
        "Ochilgandan keyin sovutkichda saqlash",
        "Ochilgandan so'ng 30 kun ichida ishlating",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Gluten yo'q", textRu: "Без глютена" },
        { text: "GMO yo'q", textRu: "Без ГМО" },
        { text: "Soya yo'q", textRu: "Без сои" },
        { text: "Oson hazm bo'ladi", textRu: "Легко усваивается" }
      ]
    },
      3: {
      id: 3,
      name: "AKTIVAZ",
      nameRu: "АКТИВАЗ",
      tagline: "Chaqaloqlar va yosh bolalar uchun",
      taglineRu: "Для младенцев и маленьких детей",
      image: "https://www.dropbox.com/scl/fi/hplz03sk3qkzd1g3rzr1w/IMG_1930.JPG?rlkey=bbpw7cmijv8dreqhocd61pweg&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/pcnznm2bdvdu5j9m06pr8/AKTIVAZ.pdf?rlkey=ufaoavkzg1yhm2yy8zhg1hwxi&raw=1",
      volume: "150 ml",
      form: "Sirop",
      rating: 4.9,
      reviews: 1532,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "75,000",
      currency: "сум",
      
      composition: [
        { name: "Anis moyi", amount: "0.736 mg", per: "5 ml" },
        { name: "Ukrop moyi (Anethum graveolens)", amount: "0.644 mg", per: "5 ml" },
        { name: "Yalpiz moyi", amount: "0.270 mg", per: "5 ml" }
      ],
  
      benefits: [
        {
          title: "Ortiqcha gaz hosil bo'lishini kamaytiradi",
          titleRu: "Уменьшает газообразование",
          description: "Ichakdagi gazlarning chiqib ketishiga yordam beradi",
          descriptionRu: "Помогает выводу газов из кишечника",
          icon: "🍼"
        },
        {
          title: "Ichak spazmlarini yengillashtiradi",
          titleRu: "Облегчает кишечные спазмы",
          description: "Kolik paytida noqulaylikni kamaytiradi",
          descriptionRu: "Уменьшает дискомфорт при коликах",
          icon: "💚"
        },
        {
          title: "Ovqat hazm qilishni yaxshilaydi",
          titleRu: "Улучшает пищеварение",
          description: "Chaqaloqlarda sut hazm bo'lishini yaxshilaydi",
          descriptionRu: "Улучшает переваривание молока у младенцев",
          icon: "✨"
        },
        {
          title: "Tinchlantiruvchi ta'sir",
          titleRu: "Успокаивающий эффект",
          description: "Asabiylikni kamaytiradi va uyquni yaxshilaydi",
          descriptionRu: "Уменьшает беспокойство и улучшает сон",
          icon: "😴"
        }
      ],
  
      ingredients: [
        {
          name: "Anis moyi",
          nameRu: "Анисовое масло",
          icon: "🌿",
          benefits: [
            "Ovqat hazm qilish fermentlari sekretsiyasini rag'batlantiradi",
            "Yumshoq vetrogon ta'sirga ega",
            "Asab tizimini tinchlantiradi",
            "Kolik paytida yig'lashni kamaytiradi"
          ]
        },
        {
          name: "Ukrop moyi",
          nameRu: "Укропное масло",
          icon: "🌱",
          benefits: [
            "Ichak silliq mushaklarini bo'shashtiradi",
            "Spazmlarni kamaytiradi",
            "Motor-sekretor funksiyasini yaxshilaydi",
            "Ichak mikroflorasining shakllanishiga yordam beradi"
          ]
        },
        {
          name: "Yalpiz moyi",
          nameRu: "Мятное масло",
          icon: "🍃",
          benefits: [
            "Ichak retseptorlariga yumshoq ta'sir ko'rsatadi",
            "Gazlarning chiqishini yengillashtiradi",
            "Sovutuvchi va tinchlantiruvchi ta'sir",
            "Bolaning umumiy holatini qo'llab-quvvatlaydi"
          ]
        }
      ],
  
      usage: {
        dosage: "2 haftalikdan 6 oylikkacha: 2.5 ml kuniga 1-2 marta; 6 oylikdan 2 yoshgacha: 5 ml kuniga 1-2 marta; 2 yoshdan katta: 5 ml kuniga 3 martagacha",
        dosageRu: "С 2 недель до 6 месяцев: 2.5 мл 1-2 раза в день; С 6 месяцев до 2 лет: 5 мл 1-2 раза в день; Старше 2 лет: 5 мл до 3 раз в день",
        timing: "Emizish vaqtida yoki undan keyin",
        timingRu: "Во время или после кормления",
        duration: "Zarurat bo'lganda",
        durationRu: "По необходимости",
        instruction: "Flakonni ishlatishdan oldin chayqatish kerak",
        instructionRu: "Перед использованием взболтать флакон"
      },
  
      contraindications: [
        "Efir moylariga individual toqatsizlik",
        "Anis, ukrop yoki yalpizga allergik reaksiya",
        "Og'ir ovqat hazm qilish tizimi kasalliklarida (faqat shifokor tavsiyasi bilan)"
      ],
  
      storage: [
        "Harorat: +4°C dan +25°C gacha",
        "Ochilgandan keyin sovutkichda saqlash",
        "Ochilgandan so'ng 30 kun ichida ishlating",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
        { text: "2 haftalikdan", textRu: "С 2 недель" },
        { text: "Spirt yo'q", textRu: "Без спирта" },
        { text: "GMO yo'q", textRu: "Без ГМО" }
      ]
    },
      9: {
      id: 9,
      name: "VITAZZA",
      nameRu: "ВИТАЗЗА",
      tagline: "Bolalar va kattalar uchun polivitamin kompleks",
      taglineRu: "Поливитаминный комплекс для детей и взрослых",
      image: "https://www.dropbox.com/scl/fi/4u0lt9c41gqn0vv3yhrcv/IMG_1936.JPG?rlkey=660nbephy1ioyz2houmzma5sl&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/n0ni9q5b5m873n329u3cl/VITAZZA.pdf?rlkey=j1k5yt5sr0h8iquz1wkfye0hh&raw=1",
      volume: "150 ml",
      form: "Sirop",
      rating: 4.8,
      reviews: 1389,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "95,000",
      currency: "сум",
      
      composition: [
        { name: "Omega-3 (baliq yog'i kontsentrati)", amount: "500 mg", per: "5 ml", details: "18:12" },
        { name: "Vitamin A", amount: "500 mkg", per: "5 ml" },
        { name: "Vitamin C", amount: "70 mg", per: "5 ml" },
        { name: "Vitamin D3", amount: "10 mkg", per: "5 ml" },
        { name: "Vitamin E", amount: "12 mg", per: "5 ml" },
        { name: "Sink glyukonat", amount: "7.5 mg", per: "5 ml" },
        { name: "Yod", amount: "75 mkg", per: "5 ml" },
        { name: "Selen (selenometionin)", amount: "55 mkg", per: "5 ml" },
        { name: "Folat kislotasi", amount: "200 mkg", per: "5 ml" },
        { name: "Vitamin B1 (tiamin HCl)", amount: "1.1 mg", per: "5 ml" },
        { name: "Vitamin B2 (riboflavin-5-fosfat natriy)", amount: "1.4 mg", per: "5 ml" },
        { name: "Vitamin B3 (nikotinamid)", amount: "16 mg", per: "5 ml" },
        { name: "Vitamin B5 (kalsiy pantotenat)", amount: "6 mg", per: "5 ml" },
        { name: "Vitamin B6 (piridoksin HCl)", amount: "1.4 mg", per: "5 ml" },
        { name: "Vitamin B12 (sianokobalamin)", amount: "2.5 mkg", per: "5 ml" }
      ],
  
      benefits: [
        {
          title: "To'laqonli rivojlanish",
          titleRu: "Полноценное развитие",
          description: "Faol o'sish davrida bolalar uchun",
          descriptionRu: "Для детей в период активного роста",
          icon: "🌱"
        },
        {
          title: "Immunitetni mustahkamlash",
          titleRu: "Укрепление иммунитета",
          description: "Shamollashlar tez-tezligini kamaytirish",
          descriptionRu: "Снижение частоты простуд",
          icon: "🛡️"
        },
        {
          title: "Miya va asab tizimi",
          titleRu: "Мозг и нервная система",
          description: "Kognitiv funksiyalarni qo'llab-quvvatlash",
          descriptionRu: "Поддержка когнитивных функций",
          icon: "🧠"
        },
        {
          title: "Energiya va ish qobiliyati",
          titleRu: "Энергия и работоспособность",
          description: "Yuqori jismoniy va aqliy yuklamalarda",
          descriptionRu: "При высоких физических и умственных нагрузках",
          icon: "⚡"
        }
      ],
  
      ingredients: [
        {
          name: "Omega-3",
          nameRu: "Омега-3",
          icon: "🐟",
          benefits: [
            "Miya faoliyatini qo'llab-quvvatlaydi",
            "Xotira va diqqatni yaxshilaydi",
            "Yallig'lanishni kamaytiradi",
            "Yurak va tomirlarni mustahkamlaydi"
          ]
        },
        {
          name: "Vitaminlar to'plami",
          nameRu: "Комплекс витаминов",
          icon: "💊",
          benefits: [
            "Vitamin A: ko'rish, teri va immunitet",
            "Vitamin C: kuchli antioksidant, infeksiyalarga qarshilik",
            "Vitamin D3: suyaklar, tishlar va immunitet",
            "Vitamin E: hujayralarni qarishdan himoya",
            "B guruhi: energiya va asab tizimi"
          ]
        },
        {
          name: "Minerallar kompleksi",
          nameRu: "Комплекс минералов",
          icon: "⚡",
          benefits: [
            "Sink: o'sish, immunitet, teri sog'ligi",
            "Yod: qalqonsimon bez va moddalar almashinuvi",
            "Selen: antioksidant himoya, immunitet",
            "Folat kislotasi: qon hosil bo'lishi, asab tizimi"
          ]
        }
      ],
  
      usage: {
        dosage: "Bolalarga 2 yoshdan: kuniga 1 marta 5 ml; O'smirlar va kattalar: kuniga 1 marta 10 ml",
        dosageRu: "Детям с 2 лет: 1 раз в день 5 мл; Подросткам и взрослым: 1 раз в день 10 мл",
        timing: "Ovqat vaqtida",
        timingRu: "Во время еды",
        duration: "1 oydan 2 oygacha",
        durationRu: "От 1 до 2 месяцев",
        instruction: "Flakonni ishlatishdan oldin chayqatish kerak",
        instructionRu: "Перед использованием взболтать флакон"
      },
  
      contraindications: [
        "Tarkibiy qismlarga individual toqatsizlik",
        "2 yoshgacha bo'lgan bolalar — faqat shifokor tavsiyasi bilan",
        "Qalqonsimon bez kasalliklarida — shifokor nazorati ostida"
      ],
  
      storage: [
        "Harorat: +4°C dan +25°C gacha",
        "Ochilgandan keyin sovutkichda saqlash",
        "Ochilgandan so'ng 30 kun ichida ishlating",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Bolalar va kattalar uchun", textRu: "Для детей и взрослых" },
        { text: "Yaxshi o'zlashtiriladi", textRu: "Хорошо усваивается" },
        { text: "Gluten va GMO yo'q", textRu: "Без глютена и ГМО" },
        { text: "Soya saqlamaydi", textRu: "Без сои" }
      ]
    },
     15: {
    id: 15,
    name: "ALLERGIDON",
    nameRu: "АЛЛЕРГИДОН",
    tagline: "Allergiyaga qarshi tabiiy himoya",
    taglineRu: "Натуральная защита от аллергии",
    image: "https://www.dropbox.com/scl/fi/vxrfx3e5els58qghwexqt/allergidon.jpg?rlkey=74t5wvd3ehmus6qk4q09m4e2o&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/c7h7wvcr2wa5kx9jyufid/ALLERGIDON.pdf?rlkey=fvsib9xwa26z0ragiijvz9pe7&raw=1",
    volume: "150 ml",
    form: "O‘simlik ekstraktlari asosidagi sirop",
    rating: 4.6,
    reviews: 512,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Og‘urchek o‘ti ekstrakti (Borago officinalis)", amount: "—", per: "sirop" },
      { name: "Fialka ekstrakti (Viola arvensis)", amount: "—", per: "sirop" },
      { name: "Oduvanchik ekstrakti (Taraxacum officinale)", amount: "—", per: "sirop" },
      { name: "Romashka ekstrakti (Matricaria chamomilla)", amount: "—", per: "sirop" }
    ],
  
    benefits: [
      {
        title: "Allergiyaga qarshi ta’sir",
        titleRu: "Противоаллергическое действие",
        description: "Allergenlarni organizmdan chiqaradi",
        descriptionRu: "Выводит аллергены из организма",
        icon: "🌿"
      },
      {
        title: "Immunitetni mustahkamlash",
        titleRu: "Укрепление иммунитета",
        description: "Organizm qarshiligini oshiradi",
        descriptionRu: "Повышает устойчивость организма",
        icon: "🛡️"
      },
      {
        title: "Teri va nafas yo‘llari himoyasi",
        titleRu: "Защита кожи и дыхательных путей",
        description: "Qichishish, toshma va burun oqishini kamaytiradi",
        descriptionRu: "Снижает зуд, высыпания и насморк",
        icon: "💨"
      },
      {
        title: "Detoks va organlarni qo‘llab-quvvatlash",
        titleRu: "Детокс и поддержка органов",
        description: "Jigar va hazm tizimini yaxshilaydi",
        descriptionRu: "Поддержка печени и пищеварения",
        icon: "⚡"
      }
    ],
  
    ingredients: [
      {
        name: "Og‘urchek o‘ti ekstrakti",
        nameRu: "Экстракт огуречной травы",
        icon: "🌿",
        benefits: [
          "Yallig‘lanishga qarshi ta’sir",
          "Teri allergiyalarini kamaytiradi",
          "Immunitetni qo‘llab-quvvatlaydi",
          "Organizmni mustahkamlaydi"
        ]
      },
      {
        name: "Fialka ekstrakti",
        nameRu: "Экстракт фиалки",
        icon: "🌸",
        benefits: [
          "Teri kasalliklarida foydali",
          "Allergik reaksiyalarni kamaytiradi",
          "Qon tozalashga yordam beradi",
          "Yallig‘lanishni kamaytiradi"
        ]
      },
      {
        name: "Oduvanchik ekstrakti",
        nameRu: "Экстракт одуванчика",
        icon: "🌼",
        benefits: [
          "Jigarni himoya qiladi",
          "Detoks jarayonini tezlashtiradi",
          "Hazm tizimini yaxshilaydi",
          "Allergenlarni chiqarishga yordam beradi"
        ]
      },
      {
        name: "Romashka ekstrakti",
        nameRu: "Экстракт ромашки",
        icon: "🌼",
        benefits: [
          "Yallig‘lanishga qarshi",
          "Tinchlantiruvchi ta’sir",
          "Allergik simptomlarni kamaytiradi",
          "Asab tizimini qo‘llab-quvvatlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 15–20 ml kuniga 2–3 marta",
      dosageRu: "Взрослым: по 15–20 мл 2–3 раза в день",
      timing: "Ovqat vaqtida",
      timingRu: "Во время еды",
      duration: "1–3 oy (shifokor tavsiyasi bilan)",
      durationRu: "1–3 месяца (по назначению врача)",
      instruction: "Qabul qilishdan oldin yaxshilab chayqatish",
      instructionRu: "Перед применением взболтать"
    },
  
    contraindications: [
      "Komponentlarga individual toqatsizlik",
      "Allergik reaksiyaga moyillikda ehtiyotkorlik bilan"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Ochilgandan keyin salqin joyda saqlash",
      "Muzlatmaslik va qizdirmaslik",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Tabiiy o‘simlik tarkibi", textRu: "Натуральный растительный состав" },
      { text: "Allergiyaga qarshi", textRu: "Против аллергии" },
      { text: "Detoks effekti", textRu: "Детокс эффект" },
      { text: "Immunitetni qo‘llab-quvvatlaydi", textRu: "Поддержка иммунитета" }
    ]
  },
    16: {
    id: 16,
    name: "ANEMAK",
    nameRu: "АНЕМАК",
    tagline: "Qon va temir tanqisligi uchun",
    taglineRu: "Для крови и при дефиците железа",
    image: "https://www.dropbox.com/scl/fi/exj4llpv9kzvp4y188udx/anemak.jpg?rlkey=n11n9e0gs33la8wszyis7qr13&st=7604t5k5&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/e3tuz1ur1xwfj50plokvm/ANEMAK-1.pdf?rlkey=gldzlwc830a6urdmu3rbbugbd&st=5n3sthrg&raw=1",
    volume: "150 ml",
    form: "Sirop (o‘simlik ekstraktlari)",
    rating: 4.8,
    reviews: 932,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Eleuterokokk ekstrakti", amount: "—", per: "100 ml" },
      { name: "Qichitqi o‘t ekstrakti", amount: "—", per: "100 ml" },
      { name: "Mingbarg ekstrakti", amount: "—", per: "100 ml" },
      { name: "Aloe ekstrakti", amount: "—", per: "100 ml" },
      { name: "Chere’da (Bidens) ekstrakti", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Anemiyaga qarshi",
        titleRu: "Против анемии",
        description: "Gemoglobin darajasini oshiradi",
        descriptionRu: "Повышает уровень гемоглобина",
        icon: "🩸"
      },
      {
        title: "Energiya va kuch",
        titleRu: "Энергия и сила",
        description: "Charchoq va holsizlikni kamaytiradi",
        descriptionRu: "Снижает усталость и слабость",
        icon: "⚡"
      },
      {
        title: "Immunitet",
        titleRu: "Иммунитет",
        description: "Organizm himoyasini kuchaytiradi",
        descriptionRu: "Укрепляет иммунитет",
        icon: "🛡️"
      },
      {
        title: "Qon hosil bo‘lishi",
        titleRu: "Кроветворение",
        description: "Temir so‘rilishini yaxshilaydi",
        descriptionRu: "Улучшает усвоение железа",
        icon: "❤️"
      }
    ],
  
    ingredients: [
      {
        name: "Eleuterokokk",
        nameRu: "Элеутерококк",
        icon: "🌿",
        benefits: [
          "Organizmni tonusga keltiradi",
          "Charchoqni kamaytiradi",
          "Stressga chidamlilikni oshiradi",
          "Immunitetni mustahkamlaydi",
          "Energiya beradi"
        ]
      },
      {
        name: "Qichitqi o‘t",
        nameRu: "Крапива",
        icon: "🌱",
        benefits: [
          "Temir manbai",
          "Qon hosil bo‘lishini yaxshilaydi",
          "Gemoglobinni oshiradi",
          "Yallig‘lanishga qarshi ta’sir",
          "Organizmni mustahkamlaydi"
        ]
      },
      {
        name: "Aloe",
        nameRu: "Алоэ",
        icon: "🌵",
        benefits: [
          "Regeneratsiyani tezlashtiradi",
          "Immunitetni oshiradi",
          "Hazmni yaxshilaydi",
          "Yallig‘lanishni kamaytiradi",
          "Organizmni tozalaydi"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Qon aylanishini yaxshilaydi",
          "Vitaminlar bilan boyitadi",
          "Organizmni tiklaydi",
          "Holsizlikni kamaytiradi",
          "Umumiy sog‘liqni qo‘llab-quvvatlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 5–10 ml kuniga 2 marta",
      dosageRu: "Взрослым: по 5–10 мл 2 раза в день",
      timing: "Ovqatdan 5–10 daqiqa keyin",
      timingRu: "Через 5–10 минут после еды",
      duration: "30 kun",
      durationRu: "30 дней",
      instruction: "Bolalar (3–12 yosh): 2.5–5 ml 2 marta",
      instructionRu: "Дети (3–12 лет): 2.5–5 мл 2 раза в день"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Allergik reaksiyaga moyillik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda",
      "Ochilgandan keyin sovuq joyda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Temir manbai", textRu: "Источник железа" },
      { text: "Gemoglobinni oshiradi", textRu: "Повышает гемоглобин" },
      { text: "Tabiiy ekstraktlar", textRu: "Натуральные экстракты" },
      { text: "Bolalar va kattalar uchun", textRu: "Для детей и взрослых" }
    ]
  },
  17: {
    id: 17,
    name: "BRONHODOKS",
    nameRu: "БРОНХОДОКС",
    tagline: "Yo‘tal va bronxlar uchun",
    taglineRu: "От кашля и для бронхов",
    image: "https://www.dropbox.com/scl/fi/8tdm7p6z69upcxyk5tvir/bronxodoks.jpg?rlkey=uq71dtbr8n8o3dt1ix8o27u4d&st=qtefmn2z&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/yex4m96ranhuhwyyjihys/BRONHODOKS.pdf?rlkey=6q7oajur7r4k9mymbir07t4va&st=3yfzbqgd&raw=1",
    volume: "150 ml",
    form: "Sirop (o‘simlik ekstraktlari)",
    rating: 4.8,
    reviews: 876,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Shalfey ekstrakti", amount: "—", per: "100 ml" },
      { name: "Soliq ildizi (lakritsa)", amount: "—", per: "100 ml" },
      { name: "Ona va o‘gay ona (Tussilago)", amount: "—", per: "100 ml" },
      { name: "Aloe ekstrakti", amount: "—", per: "100 ml" },
      { name: "Podorojnik ekstrakti", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Yo‘talga qarshi",
        titleRu: "Против кашля",
        description: "Yo‘tal refleksini kamaytiradi",
        descriptionRu: "Подавляет кашлевой рефлекс",
        icon: "🤧"
      },
      {
        title: "Bronxlarni kengaytiradi",
        titleRu: "Расширяет бронхи",
        description: "Nafas olishni yengillashtiradi",
        descriptionRu: "Облегчает дыхание",
        icon: "🌬️"
      },
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное действие",
        description: "Bronxlardagi yallig‘lanishni kamaytiradi",
        descriptionRu: "Снижает воспаление",
        icon: "🛡️"
      },
      {
        title: "Balg‘am chiqarish",
        titleRu: "Отхаркивающее действие",
        description: "Balg‘amni suyultiradi va chiqaradi",
        descriptionRu: "Разжижает и выводит мокроту",
        icon: "💨"
      }
    ],
  
    ingredients: [
      {
        name: "Shalfey",
        nameRu: "Шалфей",
        icon: "🌿",
        benefits: [
          "Antiseptik xususiyatga ega",
          "Yallig‘lanishni kamaytiradi",
          "Tomoqni tinchlantiradi",
          "Mikroblarga qarshi ta’sir",
          "Immunitetni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Soliq ildizi (lakritsa)",
        nameRu: "Солодка",
        icon: "🍃",
        benefits: [
          "Balg‘am chiqarishni osonlashtiradi",
          "Bronxlarni kengaytiradi",
          "Yo‘talni kamaytiradi",
          "Yallig‘lanishga qarshi",
          "Nafas yo‘llarini tozalaydi"
        ]
      },
      {
        name: "Ona va o‘gay ona",
        nameRu: "Мать-и-мачеха",
        icon: "🌼",
        benefits: [
          "Yo‘talni yumshatadi",
          "Balg‘amni chiqaradi",
          "Bronxitda foydali",
          "Yallig‘lanishni kamaytiradi",
          "Nafas olishni yaxshilaydi"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Bronxlarni tozalaydi",
          "Yallig‘lanishni kamaytiradi",
          "Nafas olishni yaxshilaydi",
          "Organizmni qo‘llab-quvvatlaydi",
          "Infeksiyaga qarshi kurashadi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 5–7.5 ml kuniga 3 marta",
      dosageRu: "Взрослым: по 5–7.5 мл 3 раза в день",
      timing: "Ovqatdan 10–15 daqiqa keyin",
      timingRu: "Через 10–15 минут после еды",
      duration: "14 kun",
      durationRu: "14 дней",
      instruction: "Bolalar (3–12 yosh): 2.5–5 ml 3 marta",
      instructionRu: "Дети (3–12 лет): 2.5–5 мл 3 раза в день"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Giperasid gastrit",
      "Homiladorlik",
      "Emizish davri"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda",
      "Ochilgandan keyin sovuq joyda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Yo‘talga qarshi", textRu: "Против кашля" },
      { text: "Bronxlarni kengaytiradi", textRu: "Расширяет бронхи" },
      { text: "O‘simlik asosida", textRu: "На растительной основе" },
      { text: "Kompleks ta’sir", textRu: "Комплексное действие" }
    ]
  },
    25: {
    id: 25,
    name: "GORLOZIN",
    nameRu: "ГОРЛОЗИН",
    tagline: "Tomoq va yuqori nafas yo‘llari uchun",
    taglineRu: "Для горла и верхних дыхательных путей",
    image: "https://www.dropbox.com/scl/fi/fh5kutiidcxywi19kruo7/gorlozin.jpg?rlkey=qtxupoiy1vo01rdifmrgoj91k&st=sc4e5lwj&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/b8nkwqg46abl15jt6orkv/GORLOZIN-1.pdf?rlkey=z23z88fq8njy3zqioz3cenn5s&st=i2iylt06&raw=1",
    volume: "150 ml",
    form: "O‘simlik siropi",
    rating: 4.7,
    reviews: 982,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Solyodka (Glycyrrhiza glabra)", amount: "—", per: "100 ml" },
      { name: "Kalendula", amount: "—", per: "100 ml" },
      { name: "Romashka", amount: "—", per: "100 ml" },
      { name: "Kurkuma", amount: "—", per: "100 ml" },
      { name: "Zanjabil (Imbir)", amount: "—", per: "100 ml" },
      { name: "Kubeba qalampiri", amount: "—", per: "100 ml" },
      { name: "Aloe", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное",
        description: "Tomoq yallig‘lanishini kamaytiradi",
        descriptionRu: "Снимает воспаление горла",
        icon: "🦠"
      },
      {
        title: "Antibakterial ta’sir",
        titleRu: "Антибактериальное",
        description: "Infeksiyalarga qarshi kurashadi",
        descriptionRu: "Борется с инфекциями",
        icon: "🧫"
      },
      {
        title: "Yo‘talni kamaytirish",
        titleRu: "От кашля",
        description: "Balghamni chiqarishni osonlashtiradi",
        descriptionRu: "Облегчает отхаркивание",
        icon: "🫁"
      },
      {
        title: "Immunitetni oshirish",
        titleRu: "Иммунитет",
        description: "Organizm himoyasini kuchaytiradi",
        descriptionRu: "Укрепляет иммунитет",
        icon: "🛡️"
      }
    ],
  
    ingredients: [
      {
        name: "Solyodka",
        nameRu: "Солодка",
        icon: "🌿",
        benefits: [
          "Yo‘talni kamaytiradi",
          "Yallig‘lanishga qarshi",
          "Balghamni chiqaradi",
          "Antiseptik ta’sir",
          "Tomoqni yumshatadi"
        ]
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        icon: "🌼",
        benefits: [
          "Tinchlantiruvchi ta’sir",
          "Yallig‘lanishni kamaytiradi",
          "Antiseptik xususiyat",
          "Shilliq qavatni himoya qiladi",
          "Og‘riqni kamaytiradi"
        ]
      },
      {
        name: "Kurkuma",
        nameRu: "Куркума",
        icon: "🟡",
        benefits: [
          "Kuchli antiinflamatuar",
          "Mikroblarni yo‘q qiladi",
          "Immunitetni oshiradi",
          "To‘qimalarni tiklaydi",
          "Detoks ta’sir"
        ]
      },
      {
        name: "Zanjabil",
        nameRu: "Имбирь",
        icon: "🫚",
        benefits: [
          "Yallig‘lanishga qarshi",
          "Qon aylanishini yaxshilaydi",
          "Isituvchi ta’sir",
          "Immunitetni oshiradi",
          "Infeksiyaga qarshi"
        ]
      },
      {
        name: "Aloe",
        nameRu: "Алоэ",
        icon: "🌿",
        benefits: [
          "To‘qimalarni tiklaydi",
          "Yallig‘lanishni kamaytiradi",
          "Shifo beruvchi ta’sir",
          "Antibakterial",
          "Tomoqni yumshatadi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kuniga 3 marta 2.5–5 ml",
      dosageRu: "3 раза в день по 2.5–5 мл",
      timing: "Ovqatdan keyin",
      timingRu: "После еды",
      duration: "Kamida 15 kun",
      durationRu: "Не менее 15 дней",
      instruction: "Gargara: 1:6 nisbatda suv bilan suyultirib 6–10 marta",
      instructionRu: "Полоскание: разведение 1:6"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Allergiya"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Qorong‘i va quruq joyda",
      "Bolalar yetmaydigan joyda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Tomoq uchun", textRu: "Для горла" },
      { text: "Yallig‘lanishga qarshi", textRu: "Противовоспалительное" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Antibakterial", textRu: "Антибактериальное" }
    ]
  },
  26:{
    id: 26,
    name: "DENTOVITAL",
    nameRu: "ДЕНТОВИТАЛ",
    tagline: "Og‘iz bo‘shlig‘i va tishlar salomatligi uchun",
    taglineRu: "Для здоровья полости рта и зубов",
    image: "https://www.dropbox.com/scl/fi/ic0sx3hwqzsyfeki8vhd2/dentovital.jpg?rlkey=bjy6xblojmpgpmtldm136b0ui&st=yk9bsho4&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/w2zxts3ikuwv7159cqo7n/DENTOVITAL-1.pdf?rlkey=umgxblpb9pregxw04kdo7qcb8&st=14fqx05u&raw=1",
    volume: "150 ml",
    form: "Og‘iz chayish siropi",
    rating: 4.8,
    reviews: 1120,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Shalfey (Salvia officinalis)", amount: "—", per: "100 ml" },
      { name: "Solyodka (Glycyrrhiza glabra)", amount: "—", per: "100 ml" },
      { name: "Mingbarg (Yarrow)", amount: "—", per: "100 ml" },
      { name: "Romashka", amount: "—", per: "100 ml" },
      { name: "Kalendula", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Antimikrob ta’sir",
        titleRu: "Противомикробное",
        description: "Bakteriyalarni yo‘q qiladi",
        descriptionRu: "Уничтожает бактерии",
        icon: "🦠"
      },
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное",
        description: "Og‘iz yallig‘lanishini kamaytiradi",
        descriptionRu: "Снимает воспаление",
        icon: "🔥"
      },
      {
        title: "Og‘riqni kamaytirish",
        titleRu: "Обезболивающее",
        description: "Mahalliy og‘riqni yengillashtiradi",
        descriptionRu: "Снижает боль",
        icon: "🦷"
      },
      {
        title: "Antiseptik ta’sir",
        titleRu: "Антисептическое",
        description: "Infeksiya tarqalishini oldini oladi",
        descriptionRu: "Предотвращает инфекцию",
        icon: "🧴"
      }
    ],
  
    ingredients: [
      {
        name: "Shalfey",
        nameRu: "Шалфей",
        icon: "🌿",
        benefits: [
          "Antibakterial ta’sir",
          "Yallig‘lanishni kamaytiradi",
          "Og‘iz shilliq qavatini tiklaydi",
          "Og‘riqni kamaytiradi",
          "Antiseptik xususiyat"
        ]
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        icon: "🌼",
        benefits: [
          "Tinchlantiradi",
          "Yallig‘lanishni kamaytiradi",
          "Shifo beruvchi ta’sir",
          "Og‘izni tozalaydi",
          "Bakteriyalarga qarshi"
        ]
      },
      {
        name: "Kalendula",
        nameRu: "Календула",
        icon: "🌸",
        benefits: [
          "To‘qimalarni tiklaydi",
          "Antiseptik ta’sir",
          "Yallig‘lanishga qarshi",
          "Shifo jarayonini tezlashtiradi",
          "Og‘iz gigiyenasini yaxshilaydi"
        ]
      },
      {
        name: "Solyodka",
        nameRu: "Солодка",
        icon: "🌿",
        benefits: [
          "Yallig‘lanishga qarshi",
          "Og‘iz shilliq qavatini himoya qiladi",
          "Antimikrob ta’sir",
          "Og‘riqni kamaytiradi",
          "Tiklanishni tezlashtiradi"
        ]
      }
    ],
  
    usage: {
      dosage: "10–15 ml + 100 ml suv bilan chayish",
      dosageRu: "10–15 мл на 100 мл воды для полоскания",
      timing: "Ovqatdan keyin",
      timingRu: "После еды",
      duration: "7 kun",
      durationRu: "7 дней",
      instruction: "Kuniga 3–4 marta yoki har ovqatdan keyin",
      instructionRu: "3–4 раза в день"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Allergiya"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Qorong‘i va salqin joyda",
      "Bolalardan uzoqda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Og‘iz gigiyenasi", textRu: "Гигиена полости рта" },
      { text: "Antiseptik", textRu: "Антисептик" },
      { text: "Yallig‘lanishga qarshi", textRu: "Противовоспалительное" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" }
    ]
  },
  27: {
    id: 27,
    name: "DEPARAZITOL",
    nameRu: "ДЕПАРАЗИТОЛ",
    tagline: "Parazitlarga qarshi o‘simlik siropi",
    taglineRu: "Растительный сироп против паразитов",
    image: "https://www.dropbox.com/scl/fi/mugrl3gt3kaso3xwhydhm/deparazitol-1.jpg?rlkey=q39rq0mgul0ibx17fb5rrldlv&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/02m7rijo9fpl5p538xh17/DEPARAZITOL.pdf?rlkey=11ifmtlzyq4vdgudn80np7ke0&raw=1",
    volume: "150 ml",
    form: "O‘simlik ekstraktlari asosidagi sirop",
    rating: 4.6,
    reviews: 742,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Pijma ekstrakti (Tanacetum vulgare)", amount: "—", per: "100 ml" },
      { name: "Romashka ekstrakti (Matricaria chamomilla)", amount: "—", per: "100 ml" },
      { name: "Zveroboy ekstrakti (Hypericum)", amount: "—", per: "100 ml" },
      { name: "Yarrow / Mingyaproq (Achillea millefolium)", amount: "—", per: "100 ml" },
      { name: "Bessmertnik (Helichrysum arenarium)", amount: "—", per: "100 ml" },
      { name: "Tykva urug‘i ekstrakti (Cucurbita pepo)", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Keng spektrli antiparazitar ta’sir",
        titleRu: "Широкий антигельминтный эффект",
        description: "Ichakdagi turli parazitlarga qarshi yordam beradi",
        descriptionRu: "Помогает против различных кишечных паразитов",
        icon: "🪱"
      },
      {
        title: "Ichakni tozalash",
        titleRu: "Очищение кишечника",
        description: "Ichak mikroflorasini qo‘llab-quvvatlaydi",
        descriptionRu: "Поддерживает очищение кишечника",
        icon: "🧼"
      },
      {
        title: "Yallig‘lanishga qarshi ta’sir",
        titleRu: "Противовоспалительное действие",
        description: "Ichak yallig‘lanishini kamaytiradi",
        descriptionRu: "Снижает воспалительные процессы",
        icon: "🌿"
      },
      {
        title: "Detoksikatsiya",
        titleRu: "Детоксикация организма",
        description: "Toksinlarni chiqarishga yordam beradi",
        descriptionRu: "Способствует выведению токсинов",
        icon: "⚡"
      }
    ],
  
    ingredients: [
      {
        name: "Pijma",
        nameRu: "Пижма",
        icon: "🌿",
        benefits: [
          "Antiparazitar ta’sir",
          "Hazmni yaxshilash",
          "Antibakterial xususiyat",
          "Ichak faoliyatini qo‘llab-quvvatlash"
        ]
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        icon: "🌼",
        benefits: [
          "Tinchlantiruvchi ta’sir",
          "Yallig‘lanishni kamaytiradi",
          "Ichak spazmlarini yengillashtiradi",
          "Hazmni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Zveroboy",
        nameRu: "Зверобой",
        icon: "🌿",
        benefits: [
          "Antibakterial ta’sir",
          "Ichak mikroflorasini qo‘llab-quvvatlaydi",
          "Yallig‘lanishga qarshi",
          "Umumiy tonusni oshiradi"
        ]
      },
      {
        name: "Yarrow",
        nameRu: "Тысячелистник",
        icon: "🌿",
        benefits: [
          "Qon aylanishini yaxshilaydi",
          "Yallig‘lanishga qarshi",
          "Hazmni normallashtiradi",
          "Ichakni tozalaydi"
        ]
      },
      {
        name: "Bessmertnik",
        nameRu: "Бессмертник",
        icon: "🌿",
        benefits: [
          "Jigar faoliyatini qo‘llab-quvvatlaydi",
          "Safro ajralishini yaxshilaydi",
          "Detoks ta’sir",
          "Hazmni yaxshilaydi"
        ]
      },
      {
        name: "Tykva urug‘i",
        nameRu: "Тыквенные семечки",
        icon: "🎃",
        benefits: [
          "Parazitlarga qarshi ta’sir",
          "Ichakni tozalash",
          "Hazmni qo‘llab-quvvatlash",
          "Yengil antiparazitar effekt"
        ]
      }
    ],
  
    usage: {
      dosage: "Bolalar 3+: 5 ml 1 marta / 10 ml 2 marta (holatga qarab), kattalar: 10–25 ml",
      dosageRu: "Дети 3+: 5 мл 1 раз / 10 мл 2 раза, взрослые: 10–25 мл",
      timing: "Ovqatdan oldin yoki keyin, suv bilan",
      timingRu: "До или после еды, с водой",
      duration: "3–14 kun (kurs 1–3 oy davom ettirilishi mumkin)",
      durationRu: "3–14 дней (курс до 1–3 месяцев)",
      instruction: "Ishlatishdan oldin chayqatish tavsiya etiladi",
      instructionRu: "Перед применением взбалтывать"
    },
  
    contraindications: [
      "Individual intolerans",
      "Homiladorlik va emizish davri",
      "3 yoshgacha bolalar"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quyosh nuridan himoyalangan joyda",
      "Ochilgandan keyin salqin joyda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Antiparazitar ta’sir", textRu: "Антигельминтное действие" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Ichak tozalash", textRu: "Очищение кишечника" },
      { text: "Kompleks o‘simlik formula", textRu: "Комплексная растительная формула" }
    ]
  } ,
  28: {
    id: 28,
    name: "DERMOTONAL",
    nameRu: "ДЕРМОТОНАЛ",
    tagline: "Teri va yallig‘lanish kasalliklari uchun",
    taglineRu: "Для кожи и воспалительных заболеваний",
    image: "https://www.dropbox.com/scl/fi/ns2tx8ksckpmjevwjg0kd/dermotonal.jpg?rlkey=vm5gkkoripo43mxnt9zh2hbmb&st=9vlsruuy&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/k6qshstijann2l4jld6te/DERMOTONAL-1.pdf?rlkey=my55ijxiz5m5ln03hudq250ro&st=cdwt85iu&raw=1",
    volume: "150 ml",
    form: "Tashqi qo‘llash uchun o‘simlik siropi",
    rating: 4.7,
    reviews: 1015,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Verbena officinalis", amount: "—", per: "100 ml" },
      { name: "Zveroboy (Hypericum perforatum)", amount: "—", per: "100 ml" },
      { name: "Mingbarg (Yarrow)", amount: "—", per: "100 ml" },
      { name: "Romashka", amount: "—", per: "100 ml" },
      { name: "Fialka trikolor", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Antibakterial",
        titleRu: "Антибактериальное",
        description: "Bakteriyalarni yo‘q qiladi",
        descriptionRu: "Уничтожает бактерии",
        icon: "🦠"
      },
      {
        title: "Antifungal",
        titleRu: "Противогрибковое",
        description: "Zamburug‘larga qarshi",
        descriptionRu: "Против грибков",
        icon: "🍄"
      },
      {
        title: "Teri tiklanishi",
        titleRu: "Регенерация кожи",
        description: "Teri yangilanishini tezlashtiradi",
        descriptionRu: "Ускоряет восстановление кожи",
        icon: "🧴"
      },
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное",
        description: "Yallig‘lanishni kamaytiradi",
        descriptionRu: "Снимает воспаление",
        icon: "🔥"
      }
    ],
  
    ingredients: [
      {
        name: "Zveroboy",
        nameRu: "Зверобой",
        icon: "🌿",
        benefits: [
          "Antibakterial ta’sir",
          "Teri yallig‘lanishini kamaytiradi",
          "Shifo jarayonini tezlashtiradi",
          "Antiseptik",
          "Og‘riqni kamaytiradi"
        ]
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        icon: "🌼",
        benefits: [
          "Tinchlantiruvchi",
          "Allergiyani kamaytiradi",
          "Teri tiklanishi",
          "Yallig‘lanishga qarshi",
          "Antiseptik"
        ]
      },
      {
        name: "Fialka trikolor",
        nameRu: "Фиалка трехцветная",
        icon: "🌸",
        benefits: [
          "Teri kasalliklariga qarshi",
          "Qichishishni kamaytiradi",
          "Yallig‘lanishni kamaytiradi",
          "Detoks ta’sir",
          "Shifo jarayonini tezlashtiradi"
        ]
      },
      {
        name: "Verbena",
        nameRu: "Вербена",
        icon: "🌿",
        benefits: [
          "Antibakterial",
          "Teri tozalash",
          "Yallig‘lanishga qarshi",
          "Tinchlantiruvchi",
          "Shifo beruvchi"
        ]
      }
    ],
  
    usage: {
      dosage: "Tashqi qo‘llash (vannalar, o‘rash, o‘ramlar)",
      dosageRu: "Наружное применение",
      timing: "Kuniga 1–3 marta",
      timingRu: "1–3 раза в день",
      duration: "Vaziyatga qarab",
      durationRu: "По назначению врача",
      instruction: "1:6–1:10 suyultirish bilan ishlatiladi",
      instructionRu: "Разведение 1:6–1:10"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Menstruatsiya davri"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Qorong‘i joyda",
      "Bolalardan uzoqda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Teri uchun", textRu: "Для кожи" },
      { text: "Antibakterial", textRu: "Антибактериальное" },
      { text: "Antifungal", textRu: "Противогрибковое" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" }
    ]
  },
  29: {
    id: 29,
    name: "DIABETAZOL",
    nameRu: "ДИАБЕТАЗОЛ",
    tagline: "Qand miqdorini nazorat qilish va metabolizm uchun",
    taglineRu: "Для контроля сахара и обмена веществ",
    image: "https://www.dropbox.com/scl/fi/a6usqyqyos58wfbwlmzn4/diabetazol-1.jpg?rlkey=lssdnomk36fj9y8krl2cu3bqr&st=eb2v3de5&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/onz2819dj5ovcukdpj7gu/DIABETAZOL-sirop.pdf?rlkey=bdp2xsg81yfyibqc2ssm0z6wf&st=yh94kpwm&raw=1",
    volume: "150 ml",
    form: "O‘simlik siropi",
    rating: 4.8,
    reviews: 1350,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Lucerna (Medicago sativa)", amount: "—", per: "100 ml" },
      { name: "Topinambur", amount: "—", per: "100 ml" },
      { name: "Lopux (Arctium lappa)", amount: "—", per: "100 ml" },
      { name: "Pajitnik (Trigonella foenum-graecum)", amount: "—", per: "100 ml" },
      { name: "Krapiva (Urtica dioica)", amount: "—", per: "100 ml" },
      { name: "Brusnika (Vaccinium vitis-idaea)", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Qand miqdorini kamaytirish",
        titleRu: "Снижение сахара",
        description: "Qon glyukozasini nazorat qiladi",
        descriptionRu: "Контроль уровня глюкозы",
        icon: "🩸"
      },
      {
        title: "Metabolizm",
        titleRu: "Обмен веществ",
        description: "Uglevod va yog‘ almashinuvini yaxshilaydi",
        descriptionRu: "Улучшает обмен веществ",
        icon: "⚡"
      },
      {
        title: "Detoks",
        titleRu: "Детокс",
        description: "Toksinlarni chiqaradi",
        descriptionRu: "Выводит токсины",
        icon: "🧼"
      },
      {
        title: "Vazn nazorati",
        titleRu: "Контроль веса",
        description: "Semirishni kamaytiradi",
        descriptionRu: "Снижает лишний вес",
        icon: "⚖️"
      }
    ],
  
    ingredients: [
      {
        name: "Lucerna",
        nameRu: "Люцерна",
        icon: "🌿",
        benefits: [
          "Qon shakarini kamaytiradi",
          "Detoks ta’sir",
          "Immunitetni oshiradi",
          "Ferment faoliyatini qo‘llab-quvvatlaydi",
          "Antibakterial ta’sir"
        ]
      },
      {
        name: "Topinambur",
        nameRu: "Топинамбур",
        icon: "🌿",
        benefits: [
          "Inulin manbai",
          "Qand miqdorini tartibga soladi",
          "Ichak mikroflorasini yaxshilaydi",
          "Yog‘ almashinuvini normallashtiradi",
          "Hazmni yaxshilaydi"
        ]
      },
      {
        name: "Pajitnik",
        nameRu: "Пажитник",
        icon: "🌱",
        benefits: [
          "Insulin sezuvchanligini oshiradi",
          "Glyukozani kamaytiradi",
          "Energiya balansini yaxshilaydi",
          "Metabolizmni tezlashtiradi",
          "Appetitni nazorat qiladi"
        ]
      },
      {
        name: "Brusnika",
        nameRu: "Брусника",
        icon: "🍒",
        benefits: [
          "Antibakterial",
          "Qon shakarini kamaytiradi",
          "Yallig‘lanishga qarshi",
          "Siydik tizimini qo‘llab-quvvatlaydi",
          "Detoks ta’sir"
        ]
      }
    ],
  
    usage: {
      dosage: "2.5–5 ml kuniga 3 marta",
      dosageRu: "2.5–5 мл 3 раза в день",
      timing: "Ovqat vaqtida",
      timingRu: "Во время еды",
      duration: "1 oy",
      durationRu: "1 месяц",
      instruction: "Suv bilan ichiladi, 1 hafta tanaffus bilan qayta kurs mumkin",
      instructionRu: "Повторный курс через неделю"
    },
  
    contraindications: [
      "Individual toqatsizlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Qorong‘i joyda",
      "Bolalar yetmaydigan joyda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Qand nazorati", textRu: "Контроль сахара" },
      { text: "Metabolizm", textRu: "Обмен веществ" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Detoks", textRu: "Детокс" }
    ]
  },

  18:{
    id: 18,
    name: "VETROGONIN",
    nameRu: "ВЕТРОГОНИН",
    tagline: "Ichak va gaz muammolariga qarshi tabiiy yechim",
    taglineRu: "Натуральное средство от газообразования и колик",
    image: "https://www.dropbox.com/scl/fi/ndqo4p1dq09sribvri7v3/vetrogonin.jpg?rlkey=bpnr8ls1w9cwrc9bd2gm3fu75&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/4fxw6pxawnj6nsa8l8vz8/VETROGONIN-1.pdf?rlkey=lg6hicj0hokj9q74r9aall1bu&raw=1",
    volume: "150 ml",
    form: "O‘simlik ekstraktlari asosidagi sirop",
    rating: 4.7,
    reviews: 438,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Romashka ekstrakti", amount: "—", per: "sirop" },
      { name: "Chabrets ekstrakti (Thymus)", amount: "—", per: "sirop" },
      { name: "Yalpiz ekstrakti", amount: "—", per: "sirop" },
      { name: "Zveroboy ekstrakti", amount: "—", per: "sirop" },
      { name: "Devyasil ekstrakti", amount: "—", per: "sirop" },
      { name: "Mingyaproq (yarrow) ekstrakti", amount: "—", per: "sirop" },
      { name: "Fenxel ekstrakti", amount: "—", per: "sirop" }
    ],
  
    benefits: [
      {
        title: "Gaz va meteorizmga qarshi",
        titleRu: "Против газообразования",
        description: "Ichakdagi gazlarni kamaytiradi",
        descriptionRu: "Уменьшает газообразование",
        icon: "💨"
      },
      {
        title: "Hazm tizimini yaxshilash",
        titleRu: "Улучшение пищеварения",
        description: "Ovqat hazmini normallashtiradi",
        descriptionRu: "Нормализует пищеварение",
        icon: "🍽️"
      },
      {
        title: "Kolik va og‘riqlarni kamaytirish",
        titleRu: "Снижение колик",
        description: "Ichak spazmlarini kamaytiradi",
        descriptionRu: "Снижает спазмы кишечника",
        icon: "🌀"
      },
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное действие",
        description: "Ichakni tinchlantiradi",
        descriptionRu: "Снимает воспаление",
        icon: "🌿"
      }
    ],
  
    ingredients: [
      {
        name: "Romashka ekstrakti",
        nameRu: "Экстракт ромашки",
        icon: "🌼",
        benefits: [
          "Spazmlarni kamaytiradi",
          "Gaz va diareyada yordam beradi",
          "Yallig‘lanishga qarshi",
          "Tinchlantiruvchi ta’sir"
        ]
      },
      {
        name: "Chabrets ekstrakti",
        nameRu: "Экстракт чабреца",
        icon: "🌿",
        benefits: [
          "Qorin og‘rig‘ini kamaytiradi",
          "Hazmni yaxshilaydi",
          "Gaz chiqishini osonlashtiradi",
          "Antibakterial ta’sir"
        ]
      },
      {
        name: "Yalpiz ekstrakti",
        nameRu: "Экстракт мяты",
        icon: "🌱",
        benefits: [
          "Tomirlarni kengaytiradi",
          "Ovqat hazmni yaxshilaydi",
          "Spazmni kamaytiradi",
          "Tinchlantiradi"
        ]
      },
      {
        name: "Zveroboy ekstrakti",
        nameRu: "Экстракт зверобоя",
        icon: "🌿",
        benefits: [
          "Antiseptik ta’sir",
          "Ichak kasalliklarida foydali",
          "Yallig‘lanishni kamaytiradi",
          "Hazmni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Devyasil ekstrakti",
        nameRu: "Экстракт девясила",
        icon: "🌿",
        benefits: [
          "Gastrit va yaralarda foydali",
          "Ichak faoliyatini yaxshilaydi",
          "Diareyada yordam beradi",
          "Yallig‘lanishni kamaytiradi"
        ]
      },
      {
        name: "Fenxel ekstrakti",
        nameRu: "Экстракт фенхеля",
        icon: "🌾",
        benefits: [
          "Gazni kamaytiradi",
          "Kolikni yengillashtiradi",
          "Ichak faoliyatini yaxshilaydi",
          "Chaqaloqlar uchun foydali"
        ]
      }
    ],
  
    usage: {
      dosage: "Yoshga qarab: 0.5 ml dan 7.5 ml gacha kuniga 3–4 marta",
      dosageRu: "В зависимости от возраста: от 0.5 до 7.5 мл 3–4 раза в день",
      timing: "Ovqatdan oldin yoki keyin",
      timingRu: "До или после еды",
      duration: "Shifokor tavsiyasiga ko‘ra",
      durationRu: "По назначению врача",
      instruction: "Qabul qilishdan oldin chayqatish",
      instructionRu: "Перед применением взболтать"
    },
  
    contraindications: [
      "Komponentlarga individual toqatsizlik",
      "Allergiyaga moyillikda ehtiyotkorlik bilan"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Ochilgandan keyin salqin joyda saqlash",
      "Muzlatmaslik va qizdirmaslik",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Tabiiy o‘simlik tarkibi", textRu: "Натуральный состав" },
      { text: "Bolalar uchun mos", textRu: "Подходит для детей" },
      { text: "Gaz va kolikka qarshi", textRu: "Против колик и газов" },
      { text: "Yumshoq ta’sir", textRu: "Мягкое действие" }
    ]
  },
   36: {
    id: 36,
    name: "ZRENODOL CHERNIKA",
    nameRu: "ЗРЕНОДОЛ ЧЕРНИКА",
    tagline: "Ko‘rish qobiliyatini qo‘llab-quvvatlovchi sirop",
    taglineRu: "Сироп для поддержки зрения",
    image: "https://www.dropbox.com/scl/fi/8ymi5bas5zfgon4o3797o/zrenadol.jpg?rlkey=v24uir1uy4jaeswl8gqubhvng&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/p9hcfa0tlgmlbrm1v58yf/ZRENODOL-CHERNIKA.pdf?rlkey=dkj74txs4b68dhpe6wx95zhsl&raw=1",
    volume: "150 ml",
    form: "O‘simlik ekstraktlari asosidagi sirop",
    rating: 4.7,
    reviews: 834,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Черника ekstrakti (Vaccinium myrtillus)", amount: "—", per: "100 ml" },
      { name: "Боярышник ekstrakti (Crataegus)", amount: "—", per: "100 ml" },
      { name: "Аир болотный (Acorus calamus)", amount: "—", per: "100 ml" },
      { name: "Шиповник ekstrakti (Rosa majalis)", amount: "—", per: "100 ml" }
    ],
  
    benefits: [
      {
        title: "Ko‘rish qobiliyatini qo‘llab-quvvatlash",
        titleRu: "Поддержка зрения",
        description: "Ko‘z charchog‘ini kamaytiradi va ko‘rish sifatini yaxshilaydi",
        descriptionRu: "Снижает усталость глаз и улучшает зрение",
        icon: "👁️"
      },
      {
        title: "Tungi ko‘rishni yaxshilash",
        titleRu: "Улучшение ночного зрения",
        description: "Qorong‘ida ko‘rish moslashuvini kuchaytiradi",
        descriptionRu: "Улучшает адаптацию зрения в темноте",
        icon: "🌙"
      },
      {
        title: "Ko‘z tomirlarini mustahkamlash",
        titleRu: "Укрепление сосудов глаз",
        description: "Kapillyarlarni mustahkamlaydi va qon aylanishini yaxshilaydi",
        descriptionRu: "Укрепляет капилляры глаз",
        icon: "🫀"
      },
      {
        title: "Antioksidant himoya",
        titleRu: "Антиоксидантная защита",
        description: "Ko‘z hujayralarini erkin radikallardan himoya qiladi",
        descriptionRu: "Защищает клетки глаз от свободных радикалов",
        icon: "⚡"
      }
    ],
  
    ingredients: [
      {
        name: "Черника",
        nameRu: "Черника",
        icon: "🫐",
        benefits: [
          "Retina regeneratsiyasini qo‘llab-quvvatlaydi",
          "Ko‘rish aniqligini oshiradi",
          "Qon aylanishini yaxshilaydi",
          "Antioksidant himoya"
        ]
      },
      {
        name: "Боярышник",
        nameRu: "Боярышник",
        icon: "🌿",
        benefits: [
          "Qon aylanishini yaxshilaydi",
          "Tomirlarni mustahkamlaydi",
          "Yurak-qon tomir tizimini qo‘llab-quvvatlaydi",
          "Mikrotsirkulyatsiyani yaxshilaydi"
        ]
      },
      {
        name: "Аир болотный",
        nameRu: "Аир болотный",
        icon: "🌿",
        benefits: [
          "Ko‘z to‘qimalarini qo‘llab-quvvatlaydi",
          "Yallig‘lanishga qarshi",
          "Hazmni yaxshilaydi",
          "Tinchlantiruvchi ta’sir"
        ]
      },
      {
        name: "Шиповник",
        nameRu: "Шиповник",
        icon: "🌹",
        benefits: [
          "Vitamin C manbai",
          "Antioksidant himoya",
          "Immunitetni oshiradi",
          "Teri va tomirlar sog‘ligini qo‘llab-quvvatlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "3–7 yosh: 1.5–2 ml 2 marta / 7–14 yosh: 2.5 ml 2 marta / 14+ yosh: 5 ml 2 marta",
      dosageRu: "3–7 лет: 1.5–2 мл 2 раза / 7–14 лет: 2.5 мл 2 раза / 14+ лет: 5 мл 2 раза",
      timing: "Ovqat paytida, suv bilan",
      timingRu: "Во время еды, с водой",
      duration: "1 oy, 1 haftadan keyin qayta kurs",
      durationRu: "1 месяц, повтор через неделю",
      instruction: "Ishlatishdan oldin chayqatish",
      instructionRu: "Перед применением взбалтывать"
    },
  
    contraindications: [
      "Individual intolerans",
      "Homiladorlik va emizish",
      "Komponentlarga sezgirlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda",
      "Bolalardan yiroqda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Ko‘rish qo‘llab-quvvatlash", textRu: "Поддержка зрения" },
      { text: "Ko‘z tomirlarini mustahkamlash", textRu: "Укрепление сосудов глаз" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Antioksidant kompleks", textRu: "Антиоксидантный комплекс" }
    ]
  }
  },
  softJelatine: { 
    2: {
      id: 2,
      name: "COGNITAZ",
      nameRu: "КОГНИТАЗ",
      tagline: "Miya faoliyatini yaxshilovchi BFQ",
      taglineRu: "БАД для улучшения мозговой деятельности",
      image: "https://www.dropbox.com/scl/fi/414nqrsttxphlqzpgrkxq/IMG_1929.JPG?rlkey=hygxccpleo6ulus2ngwa7otxp&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/r7f5j75udrfis98z3jrr2/COGNITAZ.pdf?rlkey=ew8u7qodsn1essgow1192ivwv&raw=1",
      volume: "30 tabletka",
      form: "Tabletka",
      rating: 4.7,
      reviews: 892,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 165-2024",
      price: "95,000",
      currency: "сум",
      
      composition: [
        { name: "Ginkgo biloba ekstrakti", amount: "120 mg", per: "1 tabletka" },
        { name: "Vitamin B6", amount: "2 mg", per: "1 tabletka" },
        { name: "Vitamin B12", amount: "3 mkg", per: "1 tabletka" },
        { name: "Folik kislota", amount: "400 mkg", per: "1 tabletka" }
      ],
  
      benefits: [
        {
          title: "Xotira va diqqatni yaxshilash",
          titleRu: "Улучшение памяти и внимания",
          description: "Kognitiv funksiyalarni oshirish",
          descriptionRu: "Повышение когнитивных функций",
          icon: "🧠"
        },
        {
          title: "Miya qon aylanishini yaxshilash",
          titleRu: "Улучшение мозгового кровообращения",
          description: "Miyaga kislorod etkazib berishni yaxshilaydi",
          descriptionRu: "Улучшает снабжение мозга кислородом",
          icon: "🔄"
        },
        {
          title: "Mental ish qobiliyati",
          titleRu: "Умственная работоспособность",
          description: "O'qish va o'rganishda samaradorlik",
          descriptionRu: "Эффективность в учебе",
          icon: "📚"
        },
        {
          title: "Stressga qarshilik",
          titleRu: "Стрессоустойчивость",
          description: "Asab tizimini qo'llab-quvvatlash",
          descriptionRu: "Поддержка нервной системы",
          icon: "💆"
        }
      ],
  
      ingredients: [
        {
          name: "Ginkgo biloba",
          nameRu: "Гинкго билоба",
          icon: "🌿",
          benefits: [
            "Miya qon aylanishini yaxshilaydi",
            "Xotira va diqqatni oshiradi",
            "Antioksidant ta'sir ko'rsatadi",
            "Asab hujayralarini himoya qiladi"
          ]
        },
        {
          name: "Vitamin B6",
          nameRu: "Витамин B6",
          icon: "💊",
          benefits: [
            "Asab tizimi uchun zarur",
            "Serotonin ishlab chiqarishda ishtirok etadi",
            "Energiya almashinuvini yaxshilaydi",
            "Immunitetni mustahkamlaydi"
          ]
        }
      ],
  
      usage: {
        dosage: "Kattalar va 12 yoshdan yuqori bolalar: kuniga 1 tabletka",
        dosageRu: "Взрослым и детям старше 12 лет: по 1 таблетке в день",
        timing: "Ovqat paytida yoki ovqatdan keyin",
        timingRu: "Во время или после еды",
        duration: "1-2 oy",
        durationRu: "1-2 месяца",
        instruction: "Ko'p miqdorda suv bilan qabul qiling",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Komponentlarga individual sezuvchanlik",
        "Homiladorlik va emizish davri",
        "12 yoshgacha bolalar",
        "Qon ivish buzilishlari"
      ],
  
      storage: [
        "Harorat: +15°C dan +25°C gacha",
        "Quruq joyda saqlash",
        "Yorug'likdan himoyalangan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Tabiiy komponentlar", textRu: "Натуральные компоненты" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" },
        { text: "Qo'shimcha moddalar yo'q", textRu: "Без добавок" },
        { text: "Vegetarian", textRu: "Вегетарианский" }
      ]
    },
  
  
  
    4: {
      id: 4,
      name: "HIS GRADOR",
      nameRu: "ХИС ГРАДОР",
      tagline: "Erkaklar salomatligi uchun",
      taglineRu: "Для мужского здоровья",
      image: "https://www.dropbox.com/scl/fi/nl6bdh86e9czkolhqbwfd/IMG_1931.PNG?rlkey=yr27hf1v98drwor521smxonnw&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/iesd3ckspgcv5343xk424/GRADOR.pdf?rlkey=stbs6z4oj626fj4rpyytlyi0o&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.8,
      reviews: 743,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "145,000",
      currency: "сум",
      
      composition: [
        { name: "Omega-3 yog' kislotalari", amount: "500 mg", per: "1 kapsul", details: "DHA 12% va EPA 18%" },
        { name: "Vitamin D3", amount: "15 mkg (600 IU)", per: "1 kapsul" },
        { name: "Vitamin K2 (MK-7)", amount: "90 mkg", per: "1 kapsul" },
        { name: "Rux (sitrat)", amount: "15 mg", per: "1 kapsul" },
        { name: "Selen (selenometionin)", amount: "55 mkg", per: "1 kapsul" },
        { name: "L-arginin", amount: "125 mg", per: "1 kapsul" },
        { name: "Koenzim Q10 (ubixinon)", amount: "50 mg", per: "1 kapsul" },
        { name: "Jenshen ekstrakti (Panax, 10:1)", amount: "50 mg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Jinsiy potensiya va libido",
          titleRu: "Половая потенция и либидо",
          description: "Jinsiy funksiyalarni yaxshilash",
          descriptionRu: "Улучшение половых функций",
          icon: "💪"
        },
        {
          title: "Energiya va bardoshlik",
          titleRu: "Энергия и выносливость",
          description: "Charchoqni kamaytiradi va energiyani oshiradi",
          descriptionRu: "Снижает усталость и повышает энергию",
          icon: "⚡"
        },
        {
          title: "Yurak-qon tomir tizimi",
          titleRu: "Сердечно-сосудистая система",
          description: "Qon tomirlarini himoya qilish",
          descriptionRu: "Защита кровеносных сосудов",
          icon: "❤️"
        },
        {
          title: "Immunitet va gormonal muvozanat",
          titleRu: "Иммунитет и гормональный баланс",
          description: "Erkaklar salomatligini qo'llab-quvvatlash",
          descriptionRu: "Поддержка мужского здоровья",
          icon: "🛡️"
        }
      ],
  
      ingredients: [
        {
          name: "Omega-3 (DHA 12% va EPA 18%)",
          nameRu: "Омега-3 (ДГК 12% и ЭПК 18%)",
          icon: "🐟",
          benefits: [
            "Yurak va qon tomir salomatligini qo'llab-quvvatlaydi",
            "Triglitseridlar darajasini pasaytiradi",
            "Yallig'lanishni kamaytiradi",
            "Tomirlarni mustahkamlaydi"
          ]
        },
        {
          name: "Vitamin D3",
          nameRu: "Витамин D3",
          icon: "☀️",
          benefits: [
            "Testosteron darajasini qo'llab-quvvatlaydi",
            "Suyaklarni mustahkamlaydi",
            "Immunitetni kuchaytiradi",
            "Kayfiyatni yaxshilaydi"
          ]
        },
        {
          name: "Vitamin K2 (MK-7)",
          nameRu: "Витамин K2 (МК-7)",
          icon: "🎯",
          benefits: [
            "Kalsiyni suyaklarga yo'naltiradi",
            "Qon tomirlarini kalsifikatsiyadan himoya qiladi",
            "Vitamin D3 bilan sinergiyada ishlaydi",
            "Yurak-qon tomir kasalliklari xavfini kamaytiradi"
          ]
        },
        {
          name: "Rux (sitrat)",
          nameRu: "Цинк (цитрат)",
          icon: "⚡",
          benefits: [
            "Testosteron ishlab chiqarishni qo'llab-quvvatlaydi",
            "Reproduktiv salomatlik uchun zarur",
            "Immunitetni mustahkamlaydi",
            "Prostat salomatligini qo'llab-quvvatlaydi"
          ]
        },
        {
          name: "Selen (selenometionin)",
          nameRu: "Селен (селенометионин)",
          icon: "💎",
          benefits: [
            "Antioksidant himoya",
            "Sperma sifatini yaxshilaydi",
            "Qalqonsimon bez funksiyasini qo'llab-quvvatlaydi",
            "Immunitetni mustahkamlaydi"
          ]
        },
        {
          name: "L-arginin",
          nameRu: "L-аргинин",
          icon: "🔄",
          benefits: [
            "Azot oksidi ishlab chiqarishni oshiradi",
            "Qon aylanishini yaxshilaydi",
            "Erektsiyani qo'llab-quvvatlaydi",
            "Jismoniy ish qobiliyatini oshiradi"
          ]
        },
        {
          name: "Koenzim Q10",
          nameRu: "Коэнзим Q10",
          icon: "⚡",
          benefits: [
            "Hujayralarda energiya ishlab chiqaradi",
            "Yurak faoliyatini qo'llab-quvvatlaydi",
            "Antioksidant ta'sir",
            "Chidamlilikni oshiradi"
          ]
        },
        {
          name: "Jenshen ekstrakti (Panax)",
          nameRu: "Экстракт женьшеня (Panax)",
          icon: "🌿",
          benefits: [
            "Jismoniy va aqliy ish qobiliyatini oshiradi",
            "Stressga chidamlilikni kuchaytiradi",
            "Libido va potensiyani yaxshilaydi",
            "Umumiy tonusni oshiradi"
          ]
        }
      ],
  
      usage: {
        dosage: "18 yoshdan boshlab: kuniga 1 kapsul; 40 yoshdan oshgan erkaklar: kuniga 2 kapsul",
        dosageRu: "С 18 лет: по 1 капсуле в день; Мужчинам старше 40 лет: по 2 капсулы в день",
        timing: "Ovqat vaqtida",
        timingRu: "Во время еды",
        duration: "1 oydan 3 oygacha",
        durationRu: "От 1 до 3 месяцев",
        instruction: "Yetarli miqdorda suv bilan qabul qiling",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Komponentlarga individual toqatsizlik",
        "Arterial gipertenziya (Jenshen qon bosimini oshirishi mumkin)",
        "18 yoshgacha bo'lgan bolalar",
        "Jigar yoki buyrakning og'ir kasalliklarida ehtiyotkorlik bilan"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Erkaklar uchun maxsus formula", textRu: "Специальная формула для мужчин" },
        { text: "Tabiiy komponentlar", textRu: "Натуральные компоненты" },
        { text: "Yuqori samaradorlik", textRu: "Высокая эффективность" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" }
      ]
    },
  
    5: {
      id: 5,
      name: "HER ELIONA",
      nameRu: "ХЕР ЭЛИОНА",
      tagline: "Ayollar salomatligi va go'zalligi uchun",
      taglineRu: "Для женского здоровья и красоты",
      image: "https://www.dropbox.com/scl/fi/gq20r4ww3kxeerc1a6bmt/IMG_1932.PNG?rlkey=m6ji1um55grb8usq68rx5bkh8&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/p20ywwrk2lz19zjobv0y6/HER-ELIONA.pdf?rlkey=y8rrb9s7cp9qzsdvzowqgbmn2&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.9,
      reviews: 1156,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "155,000",
      currency: "сум",
      
      composition: [
        { name: "Omega-3 (baliq yog'i kontsentrati)", amount: "600 mg", per: "1 kapsul", details: "EPA 360 mg, DHA 240 mg" },
        { name: "Vitamin E (d-alfa-tokoferol)", amount: "15 mg (22.4 IU)", per: "1 kapsul" },
        { name: "Vitamin D3", amount: "15 mkg (600 IU)", per: "1 kapsul" },
        { name: "Vitamin K2 (MK-7)", amount: "90 mkg", per: "1 kapsul" },
        { name: "Biotin", amount: "150 mkg", per: "1 kapsul" },
        { name: "Kollagen (baliq, gidroliz qilingan)", amount: "200 mg", per: "1 kapsul" },
        { name: "Klyukva ekstrakti (10:1)", amount: "100 mg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Teri, soch va tirnoqlar go'zalligi",
          titleRu: "Красота кожи, волос и ногтей",
          description: "Kollagen va biotin ta'sirida",
          descriptionRu: "Благодаря коллагену и биотину",
          icon: "✨"
        },
        {
          title: "Yurak va suyaklar sog'ligi",
          titleRu: "Здоровье сердца и костей",
          description: "Omega-3 va vitaminlar bilan mustahkamlash",
          descriptionRu: "Укрепление с Омега-3 и витаминами",
          icon: "❤️"
        },
        {
          title: "Siydik yo'llari himoyasi",
          titleRu: "Защита мочевыводящих путей",
          description: "Klyukva ekstrakti bilan",
          descriptionRu: "С экстрактом клюквы",
          icon: "🛡️"
        },
        {
          title: "Menopauza davrini qo'llab-quvvatlash",
          titleRu: "Поддержка в период менопаузы",
          description: "Gormonal muvozanat va umumiy ahvolni yaxshilash",
          descriptionRu: "Гормональный баланс и улучшение общего состояния",
          icon: "💫"
        }
      ],
  
      ingredients: [
        {
          name: "Omega-3 (EPA 18% va DHA 12%)",
          nameRu: "Омега-3 (ЭПК 18% и ДГК 12%)",
          icon: "🐟",
          benefits: [
            "Yurak va qon tomir tizimini qo'llab-quvvatlaydi",
            "Qondagi yog' darajasini normallashtiradi",
            "Yallig'lanishni kamaytiradi",
            "Bo'g'imlar salomatligini yaxshilaydi"
          ]
        },
        {
          name: "Vitamin E",
          nameRu: "Витамин E",
          icon: "🌟",
          benefits: [
            "Kuchli antioksidant",
            "Teri salomatligini qo'llab-quvvatlaydi",
            "Erta qarishning oldini oladi",
            "Reproduktiv tizim faoliyatida ishtirok etadi"
          ]
        },
        {
          name: "Vitamin D3",
          nameRu: "Витамин D3",
          icon: "☀️",
          benefits: [
            "Kalsiyni o'zlashtirishni yaxshilaydi",
            "Suyaklar va tishlarni mustahkamlaydi",
            "Immunitet va gormonal muvozanatni qo'llab-quvvatlaydi",
            "40 yoshdan keyingi osteoporoz xavfini kamaytiradi"
          ]
        },
        {
          name: "Vitamin K2",
          nameRu: "Витамин K2",
          icon: "🎯",
          benefits: [
            "Vitamin D3 bilan hamohang ishlaydi",
            "Kalsiyni suyaklarga yo'naltiradi",
            "Qon tomirlarini kalsifikatsiyadan himoya qiladi",
            "Yurak-qon tomir kasalliklari xavfini kamaytiradi"
          ]
        },
        {
          name: "Biotin",
          nameRu: "Биотин",
          icon: "💅",
          benefits: [
            '"Go\'zallik vitamini"',
            "Sochlarni mustahkamlaydi va qalin qiladi",
            "Teri holatini yaxshilaydi",
            "Tirnoqlarning mo'rtligini kamaytiradi"
          ]
        },
        {
          name: "Kollagen (gidroliz qilingan)",
          nameRu: "Коллаген (гидролизованный)",
          icon: "🌸",
          benefits: [
            "Teri elastikligi va tarangligini ta'minlaydi",
            "Bo'g'im, pay va suyaklar salomatligini mustahkamlaydi",
            "Oson o'zlashtiriladi",
            "Qarishning sekinlashishi"
          ]
        },
        {
          name: "Klyukva ekstrakti",
          nameRu: "Экстракт клюквы",
          icon: "🍒",
          benefits: [
            "Siydik yo'llari salomatligini qo'llab-quvvatlaydi",
            "Siydik yo'li infeksiyalarini oldini oladi",
            "Antioksidantlar (proantotsianidinlar) o'z ichiga oladi",
            "Immunitetni va umumiy ahvolni yaxshilaydi"
          ]
        }
      ],
  
      usage: {
        dosage: "18 yoshdan kattalar uchun: kuniga 1 kapsul",
        dosageRu: "Взрослым с 18 лет: по 1 капсуле в день",
        timing: "Ovqat paytida",
        timingRu: "Во время еды",
        duration: "1 oydan 3 oygacha",
        durationRu: "От 1 до 3 месяцев",
        instruction: "Yetarli miqdorda suv bilan qabul qiling",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Tarkibiy qismlarga individual toqatsizlik",
        "Homiladorlik va emizish davri (faqat shifokor tavsiyasi bilan)",
        "18 yoshgacha bo'lgan bolalar",
        "Qon ketishga moyillik yoki antikoagulyantlar qabul qilish — ehtiyotkorlik bilan"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Ayollar uchun premium kompleks", textRu: "Премиум комплекс для женщин" },
        { text: "Tabiiy kollagen va biotin", textRu: "Натуральный коллаген и биотин" },
        { text: "Yuqori konsentratsiyali Omega-3", textRu: "Высококонцентрированная Омега-3" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" }
      ]
    },
  
    6: {
      id: 6,
      name: "KARTAZ",
      nameRu: "КАРТАЗ",
      tagline: "Bo'g'imlar salomatligi uchun",
      taglineRu: "Для здоровья суставов",
      image: "https://www.dropbox.com/scl/fi/sto1z2abwno8xx83ca7iv/IMG_1933.PNG?rlkey=3qrtnahbv2td1i18mwvqui8kq&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/8g8lz7co7jltu5j7xkh48/KARTAZ.pdf?rlkey=x0tmta6paex9czq2jzlxpa386&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.7,
      reviews: 628,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "125,000",
      currency: "сум",
      
      composition: [
        { name: "Curcuma Longa (zarchava) ekstrakti", amount: "300 mg", per: "1 kapsul" },
        { name: "Boswellia serrata ekstrakti", amount: "250 mg", per: "1 kapsul", details: "60% bosvellik kislotasi" },
        { name: "Piperin", amount: "5 mg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Bo'g'imlarning harakatchanligini yaxshilash",
          titleRu: "Улучшение подвижности суставов",
          description: "Og'riq va qotib qolishni kamaytiradi",
          descriptionRu: "Уменьшает боль и скованность",
          icon: "🦴"
        },
        {
          title: "Yallig'lanishga qarshi ta'sir",
          titleRu: "Противовоспалительное действие",
          description: "Tabiiy yallig'lanish jarayonlarini kamaytiradi",
          descriptionRu: "Естественно уменьшает воспалительные процессы",
          icon: "🛡️"
        },
        {
          title: "Tog'ay to'qimasini himoya qilish",
          titleRu: "Защита хрящевой ткани",
          description: "Bo'g'imlarni tiklashga yordam beradi",
          descriptionRu: "Помогает восстановлению суставов",
          icon: "💪"
        },
        {
          title: "Antioksidant himoya",
          titleRu: "Антиоксидантная защита",
          description: "Hujayralarni zararlanishdan himoya qiladi",
          descriptionRu: "Защищает клетки от повреждений",
          icon: "✨"
        }
      ],
  
      ingredients: [
        {
          name: "Curcuma Longa (Zarchava) ekstrakti",
          nameRu: "Экстракт куркумы",
          icon: "🌿",
          benefits: [
            "Kurkumin — asosiy faol komponent",
            "Kuchli yallig'lanishga qarshi ta'sir",
            "Og'riq va shishni chaqiruvchi sitokinlarni kamaytiradi",
            "Kuchli antioksidant xususiyatlarga ega",
            "Jigar faoliyatini qo'llab-quvvatlaydi"
          ]
        },
        {
          name: "Boswellia serrata ekstrakti",
          nameRu: "Экстракт босвеллии",
          icon: "🌳",
          benefits: [
            "Bosvellik kislotalar yallig'lanishni kamaytiradi",
            "Bo'g'imlardagi og'riq va qotib qolishni yengillashtiradi",
            "NSYAPlarga xos zararli ta'sirlarsiz",
            "Bo'g'imlarning harakatchanligini yaxshilaydi",
            "Tog'ay to'qimasini tiklashga yordam beradi"
          ]
        },
        {
          name: "Piperin",
          nameRu: "Пиперин",
          icon: "🌶️",
          benefits: [
            "Qora murchning faol komponenti",
            "Kurkumin biokirishuvchanligini sezilarli oshiradi",
            "Vitamin va minerallarning o'zlashtirilishini yaxshilaydi",
            "Yengil rag'batlantiruvchi va antioksidant ta'sir"
          ]
        }
      ],
  
      usage: {
        dosage: "18 yoshdan kattalarga: kuniga 1 kapsul",
        dosageRu: "Взрослым с 18 лет: по 1 капсуле в день",
        timing: "Ovqat vaqtida",
        timingRu: "Во время еды",
        duration: "1-2 oy",
        durationRu: "1-2 месяца",
        instruction: "Yetarli miqdorda suv bilan ichiladi",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Komponentlarga individual toqatsizlik",
        "Homiladorlik va emizish davri (faqat shifokor tavsiyasi bilan)",
        "18 yoshgacha bo'lgan bolalar",
        "Oshqozon-ichak kasalliklari kuchaygan davrda — ehtiyotkorlik bilan",
        "Antikoagulyant va antiagregantlar bilan — shifokor nazorati ostida"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Tabiiy kompleks", textRu: "Натуральный комплекс" },
        { text: "Yuqori biokirishish", textRu: "Высокая биодоступность" },
        { text: "Kliniyaviy isbot etilgan", textRu: "Клинически доказано" },
        { text: "NSYAPsiz yallig'lanishga qarshi", textRu: "Без НПВС" }
      ]
    },
  
    7: {
      id: 7,
      name: "NOOTROZ",
      nameRu: "НУТРОЗ",
      tagline: "Miya faoliyati va xotira uchun",
      taglineRu: "Для мозговой деятельности и памяти",
      image: "https://www.dropbox.com/scl/fi/mrkm207aijfbkelkeuuol/IMG_1934.PNG?rlkey=2gbjkhuecb2q0zsjktpyoxwpm&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/kadmc1zktspjibrlbtdnf/NOOTROZ.pdf?rlkey=mfkhhvpnfxuauoe0r9o10nk7v&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.8,
      reviews: 891,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "115,000",
      currency: "сум",
      
      composition: [
        { name: "Ginkgo Biloba bargi ekstrakti", amount: "180 mg", per: "1 kapsul" },
        { name: "Omega-3 yog' kislotalari", amount: "330 mg", per: "1 kapsul", details: "DHA 12% va EPA 18%" },
        { name: "Vitamin B1", amount: "0.7 mg", per: "1 kapsul" },
        { name: "Vitamin B6", amount: "1 mg", per: "1 kapsul" },
        { name: "Vitamin B12", amount: "1 mkg", per: "1 kapsul" },
        { name: "Pantoten kislotasi", amount: "3 mg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Xotira va diqqatni yaxshilash",
          titleRu: "Улучшение памяти и внимания",
          description: "Kognitiv funksiyalarni qo'llab-quvvatlash",
          descriptionRu: "Поддержка когнитивных функций",
          icon: "🧠"
        },
        {
          title: "Miya qon aylanishi",
          titleRu: "Мозговое кровообращение",
          description: "Miyaga kislorod etkazib berishni yaxshilaydi",
          descriptionRu: "Улучшает снабжение мозга кислородом",
          icon: "🔄"
        },
        {
          title: "Aqliy yuklamalarda yordam",
          titleRu: "Помощь при умственных нагрузках",
          description: "Asab tizimini qo'llab-quvvatlash",
          descriptionRu: "Поддержка нервной системы",
          icon: "📚"
        },
        {
          title: "Stressga chidamlilik",
          titleRu: "Стрессоустойчивость",
          description: "Charchoqni kamaytiradi",
          descriptionRu: "Снижает усталость",
          icon: "💆"
        }
      ],
  
      ingredients: [
        {
          name: "Ginkgo Biloba bargi ekstrakti",
          nameRu: "Экстракт листьев гинкго билоба",
          icon: "🌿",
          benefits: [
            "Miya qon aylanishini va mikrotsirkulyatsiyani yaxshilaydi",
            "Xotira, diqqat va konsentratsiyani oshiradi",
            "Miya hujayralarini oksidativ stressdan himoya qiladi",
            "Keksalarda kognitiv pasayishni oldini olishga yordam beradi",
            "Bosh aylanishi va quloqda shovqinni kamaytiradi"
          ]
        },
        {
          name: "Omega-3 yog' kislotalari (DHA 12% va EPA 18%)",
          nameRu: "Омега-3 жирные кислоты (ДГК 12% и ЭПК 18%)",
          icon: "🐟",
          benefits: [
            "DHA neyron hujayra membranalarining asosiy qismi",
            "Asab impulslarini uzatishni yaxshilaydi",
            "EPA yallig'lanishga qarshi ta'sir ko'rsatadi",
            "Xotirani va fikr ravshanligini mustahkamlaydi",
            "Hissiy holatni qo'llab-quvvatlaydi"
          ]
        },
        {
          name: "Vitamin B1 (Tiamin)",
          nameRu: "Витамин B1 (Тиамин)",
          icon: "💊",
          benefits: [
            "Uglevod almashinuvini tartibga soladi",
            "Miyani energiya bilan ta'minlaydi",
            "Asab impulslarini uzatishda ishtirok etadi",
            "Yetishmovchiligi charchoq va xotira pasayishiga olib keladi"
          ]
        },
        {
          name: "Vitamin B6 (Piridoksin)",
          nameRu: "Витамин B6 (Пиридоксин)",
          icon: "💊",
          benefits: [
            "Neyrotransmitterlar sintezi uchun muhim",
            "Serotonin, dofamin, GABA ishlab chiqarishda ishtirok etadi",
            "Aminokislotalar va oqsillar almashinuviga ta'sir qiladi",
            "Asab tizimi faoliyati va kayfiyatni qo'llab-quvvatlaydi"
          ]
        },
        {
          name: "Vitamin B12 (Metilkobalamin)",
          nameRu: "Витамин B12 (Метилкобаламин)",
          icon: "💊",
          benefits: [
            "Miyelin hosil bo'lishini ta'minlaydi",
            "DNK sintezi va qizil qon tanachalari shakllanishida ishtirok etadi",
            "Yetishmovchiligi anemiya va kognitiv buzilishlarga olib keladi",
            "Asab tizimini himoya qiladi"
          ]
        },
        {
          name: "Pantoten kislotasi",
          nameRu: "Пантотеновая кислота",
          icon: "💊",
          benefits: [
            "Coenzyme A tarkibiy qismi",
            "Energiya almashinuvi uchun zarur",
            "Buyrak usti bezlari gormonlari ishlab chiqilishida ishtirok etadi",
            "Stressga chidamlilikni oshiradi va charchoqlikni kamaytiradi"
          ]
        }
      ],
  
      usage: {
        dosage: "18 yoshdan kattalar: kuniga 1 kapsul",
        dosageRu: "Взрослым с 18 лет: по 1 капсуле в день",
        timing: "Ovqat vaqtida",
        timingRu: "Во время еды",
        duration: "1-2 oy",
        durationRu: "1-2 месяца",
        instruction: "Yetarli miqdorda suv bilan",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Tarkibiy qismlarga individual toqatsizlik",
        "Homiladorlik va emizish davri (faqat shifokor tavsiyasi bilan)",
        "12 yoshgacha bo'lgan bolalar",
        "Qon ketishga moyillik yoki antikoagulyantlar qabul qilishda ehtiyotkorlik bilan"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "To'liq nutropik kompleks", textRu: "Полный ноотропный комплекс" },
        { text: "Tabiiy komponentlar", textRu: "Натуральные компоненты" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" },
        { text: "Yuqori biokirishish", textRu: "Высокая биодоступность" }
      ]
    },
  
    8: {
      id: 8,
      name: "RICH OMEGOS",
      nameRu: "РИЧ ОМЕГОС",
      tagline: "Yuqori konsentratsiyali Omega-3",
      taglineRu: "Высококонцентрированная Омега-3",
      image: "https://www.dropbox.com/scl/fi/iqk0fkodd1m93fphiys2a/IMG_1935.PNG?rlkey=s0ar2x1mfq4qvwofyxtn6hvsa&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/zxmy8f6g4p9j06xlmz1my/RICH-OMEGOS.pdf?rlkey=s3u7obxvycxqrvp1g2iuj5y0e&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.9,
      reviews: 1023,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "135,000",
      currency: "сум",
      
      composition: [
        { name: "Omega-3 yog'lari", amount: "1230 mg", per: "1 kapsul", details: "DHA 12% va EPA 18%" },
        { name: "Astaksantin", amount: "6 mg", per: "1 kapsul" },
        { name: "Vitamin E (d-α-tokoferol)", amount: "5 mg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Yurak va qon tomir tizimi",
          titleRu: "Сердце и сосуды",
          description: "Kardioprotektiv va yallig'lanishga qarshi ta'sir",
          descriptionRu: "Кардиопротекторное и противовоспалительное действие",
          icon: "❤️"
        },
        {
          title: "Miya va kognitiv funksiyalar",
          titleRu: "Мозг и когнитивные функции",
          description: "Xotira va aqliy faoliyatni qo'llab-quvvatlash",
          descriptionRu: "Поддержка памяти и умственной деятельности",
          icon: "🧠"
        },
        {
          title: "Ko'rish va teri salomatligi",
          titleRu: "Здоровье зрения и кожи",
          description: "Antioksidant himoya",
          descriptionRu: "Антиоксидантная защита",
          icon: "👁️"
        },
        {
          title: "Immunitet va yallig'lanish",
          titleRu: "Иммунитет и воспаление",
          description: "To'qimalardagi yallig'lanishni kamaytiradi",
          descriptionRu: "Уменьшает воспаление в тканях",
          icon: "🛡️"
        }
      ],
  
      ingredients: [
        {
          name: "Omega-3 yog' kislotalari (DHA 12% va EPA 18%)",
          nameRu: "Омега-3 жирные кислоты (ДГК 12% и ЭПК 18%)",
          icon: "🐟",
          benefits: [
            "EPA triglitserid darajasini pasaytiradi",
            "Yallig'lanishni kamaytiradi va tomirlarni mustahkamlaydi",
            "DHA kognitiv funksiyalarni qo'llab-quvvatlaydi",
            "Miya faoliyati va ko'rishni yaxshilaydi",
            "Qondagi lipid profilini normallashtiradi",
            "Ateroskleroz va tromboz xavfini kamaytiradi"
          ]
        },
        {
          name: "Astaksantin",
          nameRu: "Астаксантин",
          icon: "🦐",
          benefits: [
            "Eng kuchli tabiiy antioksidantlardan",
            "Hujayralarni erkin radikallardan himoya qiladi",
            "Erta qarishni oldini oladi",
            "Teri va ko'rish salomatligini qo'llab-quvvatlaydi",
            "To'qimalardagi yallig'lanishni kamaytiradi",
            "Immunitetni mustahkamlaydi",
            "Sportchilarda chidamlilikni oshiradi"
          ]
        },
        {
          name: "Vitamin E (d-α-tokoferol)",
          nameRu: "Витамин E (d-α-токоферол)",
          icon: "🌟",
          benefits: [
            "Yog'da eriydigan antioksidant",
            "Hujayra membranalarini oksidlovchi stressdan himoya qiladi",
            "Qonning mikroaylanishini yaxshilaydi",
            "Teri va reproduktiv tizim salomatligini qo'llab-quvvatlaydi",
            "Omega-3 ning oksidlanishini oldini oladi"
          ]
        }
      ],
  
      usage: {
        dosage: "16 yoshdan kattalar: kuniga 1 kapsul",
        dosageRu: "Взрослым с 16 лет: по 1 капсуле в день",
        timing: "Ovqat bilan birga",
        timingRu: "Вместе с едой",
        duration: "1 oydan 3 oygacha",
        durationRu: "От 1 до 3 месяцев",
        instruction: "Yetarli miqdorda suv bilan",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Komponentlarga individual toqatsizlik",
        "Homiladorlik va emizish davri (faqat shifokor tavsiyasi bilan)",
        "12 yoshgacha bo'lgan bolalar",
        "Qon ketishga moyillik yoki antikoagulyantlarni qabul qilish — ehtiyotkorlik bilan"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Yuqori konsentratsiyali Omega-3", textRu: "Высококонцентрированная Омега-3" },
        { text: "Kuchli antioksidant — Astaksantin", textRu: "Мощный антиоксидант — Астаксантин" },
        { text: "Premium sifat", textRu: "Премиум качество" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" }
      ]
    },
  
  
  
    10: {
      id: 10,
      name: "STALAZ",
      nameRu: "СТАЛАЗ",
      tagline: "Suyaklar va yurak-qon tomir tizimi uchun",
      taglineRu: "Для костей и сердечно-сосудистой системы",
      image: "https://www.dropbox.com/scl/fi/66nzpvql4n1afavf12o42/IMG_1937.PNG?rlkey=tdrrbcxsb47xmotrhm22b4k40&raw=1",
      pdf: "https://www.dropbox.com/scl/fi/s0zu2mps91m3exh99dp2n/STALAZ.pdf?rlkey=l92r8xedkn7aur61mao1yfm34&raw=1",
      volume: "30 kapsul",
      form: "Yumshoq jelatin kapsulalari",
      rating: 4.7,
      reviews: 834,
      manufacturer: "TOP PHARM SERVICE MChJ",
      certification: "O'zMSt 166-2024",
      price: "125,000",
      currency: "сум",
      
      composition: [
        { name: "Kalsiy sitrat malat", amount: "300 mg", per: "1 kapsul" },
        { name: "Omega-3 yog' kislotalari", amount: "450 mg", per: "1 kapsul", details: "DHA 12% va EPA 18%" },
        { name: "Metilkobalamin", amount: "9 mkg", per: "1 kapsul" },
        { name: "Folat kislotasi", amount: "400 mkg", per: "1 kapsul" },
        { name: "Vitamin K2-7", amount: "45 mkg", per: "1 kapsul" },
        { name: "Vitamin D3 (xolekaltsiferol)", amount: "15 mkg", per: "1 kapsul" }
      ],
  
      benefits: [
        {
          title: "Osteoporozning oldini olish",
          titleRu: "Профилактика остеопороза",
          description: "Suyaklarni mustahkamlash",
          descriptionRu: "Укрепление костей",
          icon: "🦴"
        },
        {
          title: "Yurak-qon tomir tizimi",
          titleRu: "Сердечно-сосудистая система",
          description: "Qon tomirlarini mustahkamlash",
          descriptionRu: "Укрепление кровеносных сосудов",
          icon: "❤️"
        },
        {
          title: "Moddalar almashinuvi",
          titleRu: "Обмен веществ",
          description: "Energiya balansini yaxshilash",
          descriptionRu: "Улучшение энергетического баланса",
          icon: "⚡"
        },
        {
          title: "Immunitet va asab tizimi",
          titleRu: "Иммунитет и нервная система",
          description: "Umumiy salomatlikni qo'llab-quvvatlash",
          descriptionRu: "Поддержка общего здоровья",
          icon: "🛡️"
        }
      ],
  
      ingredients: [
        {
          name: "Kalsiy sitrat malat",
          nameRu: "Цитрат малат кальция",
          icon: "🦴",
          benefits: [
            "Eng yaxshi o'zlashtiriladigan kalsiy shakli",
            "Oshqozon kislotasi past bo'lganda ham so'riladi",
            "Ich qotishini keltirib chiqarmaydi",
            "Suyak va tish to'qimalarini mustahkamlaydi",
            "Osteoporoz va sinishlarning oldini oladi"
          ]
        },
        {
          name: "Omega-3 yog'lari",
          nameRu: "Омега-3 жиры",
          icon: "🐟",
          benefits: [
            "EPA triglitseridlarni kamaytiradi",
            "DHA miya va ko'rish uchun muhim",
            "Qon lipid profilini yaxshilaydi",
            "Tromboz va aterosklerozning oldini oladi",
            "Tomir elastikligini oshiradi"
          ]
        },
        {
          name: "Metilkobalamin (Vitamin B12)",
          nameRu: "Метилкобаламин (Витамин B12)",
          icon: "💊",
          benefits: [
            "DNK va miyelin sintezida ishtirok etadi",
            "Qon hosil bo'lishi uchun zarur",
            "Megaloblast anemiyasini oldini oladi",
            "Xotira, diqqat va kayfiyatni qo'llab-quvvatlaydi",
            "Gomotsestein almashinuvida muhim"
          ]
        },
        {
          name: "Folat kislotasi",
          nameRu: "Фолат кислота",
          icon: "💊",
          benefits: [
            "Nuklein kislotalar sintezi va hujayra bo'linishida qatnashadi",
            "Eritrotsitlar hosil bo'lishi uchun zarur",
            "Gomosistein darajasini pasaytiradi",
            "Yurak va tomirlarni mustahkamlaydi",
            "Asab tizimi faoliyatida muhim"
          ]
        },
        {
          name: "Vitamin K2-7",
          nameRu: "Витамин K2-7",
          icon: "🎯",
          benefits: [
            "Yuqori o'zlashtiriladigan vitamin K shakli",
            "Kalsiyni suyak va tishlarga yo'naltiradi",
            "Yumshoq to'qimalarda yig'ilishini oldini oladi",
            "Tomirlarning qotishini kamaytiradi",
            "Vitamin D3 bilan sinergiyada ishlaydi"
          ]
        },
        {
          name: "Vitamin D3 (xolekaltsiferol)",
          nameRu: "Витамин D3 (холекальциферол)",
          icon: "☀️",
          benefits: [
            "Ichakda kalsiy va fosfor so'rilishini oshiradi",
            "Suyak mustahkamligini kuchaytirib, osteoporoz xavfini kamaytiradi",
            "Immun tizimining himoyaviy vazifasida muhim",
            "Mushak faoliyatini qo'llab-quvvatlaydi",
            "Kayfiyat va ruhiy salomatlikka ijobiy ta'sir"
          ]
        }
      ],
  
      usage: {
        dosage: "18 yoshdan kattalarga: kuniga 1 kapsul",
        dosageRu: "Взрослым с 18 лет: по 1 капсуле в день",
        timing: "Ovqat vaqtida",
        timingRu: "Во время еды",
        duration: "Kamida 1 oy",
        durationRu: "Минимум 1 месяц",
        instruction: "Yetarli miqdorda suv bilan ichiladi",
        instructionRu: "Запить достаточным количеством воды"
      },
  
      contraindications: [
        "Komponentlarga individual toqatsizlik",
        "Homiladorlik va emizish davri (faqat shifokor tavsiyasi bilan)",
        "12 yoshgacha bo'lgan bolalar",
        "Giperkaltsiyemiya, buyrak toshlari — ehtiyotkorlik bilan"
      ],
  
      storage: [
        "Harorat: +25°C dan yuqori bo'lmagan",
        "Quruq joyda saqlash",
        "To'g'ridan-to'g'ri quyosh nurlari tushmaydighan joyda",
        "Bolalar qo'li yetmaydigan joyda"
      ],
  
      shelfLife: "2 yil",
      features: [
        { text: "Kompleks formula", textRu: "Комплексная формула" },
        { text: "Yuqori biokirishish", textRu: "Высокая биодоступность" },
        { text: "Sinergik ta'sir", textRu: "Синергическое действие" },
        { text: "Kliniyaviy sinovdan o'tgan", textRu: "Клинически проверено" }
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
    image: "https://www.dropbox.com/scl/fi/pspn2gvadkxrjyel3xzwr/aguas3d.png?rlkey=qadi1mvumph1na3dc5jrrwcde&st=eedi9i79&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/lw5divc3qxzw4nnpw2dpd/flayer-aguas.pdf?rlkey=krdmv5gp2a50uwt07nozl5zao&st=bknyd3uf&raw=1",
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
    tagline: "Qon hosil bo‘lishi va temir yetishmovchiligiga qarshi",
    taglineRu: "Для кроветворения и восполнения дефицита железа",
    image: "https://www.dropbox.com/scl/fi/4fyknpfr8aq2q8ehs3g9s/carbofer-new.png?rlkey=z04gb9wu14hf5amq9rwmzoq9o&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/y4fdhg8gl58k1jyyc0rgz/CARBOFER-Qollanma.pdf?rlkey=svh01msx378sva1cm0jvyatpb&raw=1",
    volume: "30 kapsul",
    form: "Kapsulalar",
    rating: 4.8,
    reviews: 642,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Temir bisglisinat xelat", amount: "20 mg", per: "1 kapsul" },
      { name: "Sink", amount: "12.5 mg", per: "1 kapsul" },
      { name: "Askorbin kislotasi (Vitamin C)", amount: "50 mg", per: "1 kapsul" },
      { name: "L-metilfolat", amount: "300 mkg", per: "1 kapsul" },
      { name: "Vitamin B12", amount: "2.6 mkg", per: "1 kapsul" }
    ],
  
    benefits: [
      {
        title: "Qon hosil bo‘lishini qo‘llab-quvvatlash",
        titleRu: "Поддержка кроветворения",
        description: "Gemoglobin va eritrotsitlarni oshiradi",
        descriptionRu: "Повышает уровень гемоглобина и эритроцитов",
        icon: "🩸"
      },
      {
        title: "Temir tanqisligini to‘ldirish",
        titleRu: "Восполнение дефицита железа",
        description: "Temir darajasini tiklaydi",
        descriptionRu: "Восстанавливает уровень железа",
        icon: "⚙️"
      },
      {
        title: "Immunitetni mustahkamlash",
        titleRu: "Укрепление иммунитета",
        description: "Organizmni infeksiyalardan himoya qiladi",
        descriptionRu: "Повышает защиту организма",
        icon: "🛡️"
      },
      {
        title: "Energiya va metabolizm",
        titleRu: "Энергия и обмен веществ",
        description: "Charchoqni kamaytiradi",
        descriptionRu: "Снижает усталость",
        icon: "⚡"
      }
    ],
  
    ingredients: [
      {
        name: "Temir bisglisinat xelat",
        nameRu: "Бисглицинат железа",
        icon: "🩸",
        benefits: [
          "Yuqori o‘zlashtiriladigan temir shakli",
          "Gemoglobin hosil bo‘lishiga yordam beradi",
          "Kislorod tashilishini yaxshilaydi",
          "Anemiyaning oldini oladi",
          "Oshqozon uchun yumshoqroq ta’sir qiladi"
        ]
      },
      {
        name: "Sink",
        nameRu: "Цинк",
        icon: "⚙️",
        benefits: [
          "Temir almashinuvini yaxshilaydi",
          "300+ ferment faoliyatida ishtirok etadi",
          "Immunitetni kuchaytiradi",
          "Energiya darajasini qo‘llab-quvvatlaydi",
          "Homiladorlikda muhim element"
        ]
      },
      {
        name: "Vitamin C",
        nameRu: "Витамин C",
        icon: "🍊",
        benefits: [
          "Temir so‘rilishini oshiradi",
          "Kuchli antioksidant",
          "Immunitetni qo‘llab-quvvatlaydi",
          "Qon tomirlarni mustahkamlaydi",
          "To‘qimalar regeneratsiyasini yaxshilaydi"
        ]
      },
      {
        name: "L-metilfolat",
        nameRu: "L-метилфолат",
        icon: "💊",
        benefits: [
          "Qon hosil bo‘lish jarayonida muhim",
          "DNK sintezida ishtirok etadi",
          "Homiladorlikda muhim rol o‘ynaydi",
          "Immunitetni qo‘llab-quvvatlaydi",
          "Jigar faoliyatini yaxshilaydi"
        ]
      },
      {
        name: "Vitamin B12",
        nameRu: "Витамин B12",
        icon: "🧠",
        benefits: [
          "Eritrotsitlar hosil bo‘lishida ishtirok etadi",
          "Asab tizimini qo‘llab-quvvatlaydi",
          "Energiya ishlab chiqarishda muhim",
          "DNK sintezida qatnashadi",
          "Anemiyani oldini oladi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalarga: kuniga 2 marta 1 kapsul",
      dosageRu: "Взрослым: по 1 капсуле 2 раза в день",
      timing: "Ovqatdan oldin",
      timingRu: "Перед едой",
      duration: "Shifokor tavsiyasiga ko‘ra",
      durationRu: "По назначению врача",
      instruction: "Suv bilan ichiladi",
      instructionRu: "Запить водой"
    },
  
    contraindications: [
      "Komponentlarga yuqori sezuvchanlik",
      "Temir ortiqcha yig‘ilishi",
      "Buyrak yetishmovchiligi — ehtiyotkorlik bilan",
      "Qon suyultiruvchi dorilar bilan birga qabul qilishda ehtiyot bo‘lish",
      "Surunkali gipervitaminoz"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Quruq joyda saqlash",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Yuqori biokirishish", textRu: "Высокая биодоступность" },
      { text: "Kompleks formula", textRu: "Комплексная формула" },
      { text: "Anemiyaga qarshi", textRu: "Против анемии" },
      { text: "Immunitetni qo‘llab-quvvatlaydi", textRu: "Поддержка иммунитета" }
    ]
  },
  13: {
    id: 13,
    name: "FEMISTA",
    nameRu: "ФЕМИСТА",
    tagline: "Ayollar reproduktiv salomatligi uchun",
    taglineRu: "Для женского репродуктивного здоровья",
    image: "https://www.dropbox.com/scl/fi/grdsqn7pm27lor60wjqjf/Femista.png?rlkey=xiv9gfubkrocseq81gr9u6rlq&st=sxzq308t&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/bppz3qtzxo9pbjy55h3g4/Femista-flyer.pdf?rlkey=wccdv1c0okx4lix47ecjwvcvr&st=y4np92k8&raw=1",
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
    tagline: "Qalqonsimon bez salomatligi uchun",
    taglineRu: "Для здоровья щитовидной железы",
    image: "https://www.dropbox.com/scl/fi/m5vr7da45gkk73s1iv3ye/akitonozol-1.jpg?rlkey=469indghrr66u98e16px1lmvq&st=t88w4wm3&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/1vhk5jjdpcwnkzaqmy4n2/AKITONOZOL-1-1.pdf?rlkey=wlz01aavcjwuvin0atyvrsy5x&st=jr2wiv8w&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.7,
    reviews: 689,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Durnishnik (Xanthium strumarium)", amount: "—", per: "1 tabletka" },
      { name: "Ayr (Acorus calamus)", amount: "—", per: "1 tabletka" },
      { name: "Sarimsoq (Allium sativum)", amount: "—", per: "1 tabletka" },
      { name: "Laminariya (dengiz karam)", amount: "—", per: "1 tabletka" },
      { name: "Chabrets (Thymus serpyllum)", amount: "—", per: "1 tabletka" },
      { name: "Shalfey (Salvia officinalis)", amount: "—", per: "1 tabletka" },
      { name: "Yong‘oq (Juglans regia)", amount: "—", per: "1 tabletka" },
      { name: "Zveroboy (Hypericum perforatum)", amount: "—", per: "1 tabletka" },
      { name: "Yod", amount: "100 mkg", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Qalqonsimon bezni qo‘llab-quvvatlash",
        titleRu: "Поддержка щитовидной железы",
        description: "Gormonlar balansini normallashtiradi",
        descriptionRu: "Нормализует гормональный баланс",
        icon: "🦋"
      },
      {
        title: "Yod yetishmovchiligini to‘ldirish",
        titleRu: "Восполнение йода",
        description: "Organizmda yod darajasini oshiradi",
        descriptionRu: "Восполняет дефицит йода",
        icon: "⚡"
      },
      {
        title: "Zob profilaktikasi",
        titleRu: "Профилактика зоба",
        description: "Qalqonsimon bez kasalliklarini oldini oladi",
        descriptionRu: "Предотвращает заболевания щитовидной железы",
        icon: "🛡️"
      },
      {
        title: "Umumiy salomatlik",
        titleRu: "Общее здоровье",
        description: "Organizm funksiyalarini qo‘llab-quvvatlaydi",
        descriptionRu: "Поддержка организма",
        icon: "💚"
      }
    ],
  
    ingredients: [
      {
        name: "Yod",
        nameRu: "Йод",
        icon: "🧪",
        benefits: [
          "Qalqonsimon bez uchun zarur",
          "Gormon ishlab chiqarishni qo‘llab-quvvatlaydi",
          "Yod yetishmovchiligini oldini oladi",
          "Endemik zob xavfini kamaytiradi",
          "Moddalar almashinuvini yaxshilaydi"
        ]
      },
      {
        name: "Laminariya",
        nameRu: "Ламинария",
        icon: "🌊",
        benefits: [
          "Tabiiy yod manbai",
          "Qalqonsimon bezni qo‘llab-quvvatlaydi",
          "Metabolizmni yaxshilaydi",
          "Detoks effekt",
          "Immunitetni oshiradi"
        ]
      },
      {
        name: "Sarimsoq",
        nameRu: "Чеснок",
        icon: "🧄",
        benefits: [
          "Antibakterial ta’sir",
          "Qon aylanishini yaxshilaydi",
          "Immunitetni mustahkamlaydi",
          "Yallig‘lanishni kamaytiradi",
          "Organizmni himoya qiladi"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Organizmni tabiiy qo‘llab-quvvatlaydi",
          "Yallig‘lanishga qarshi ta’sir",
          "Gormon balansini qo‘llab-quvvatlaydi",
          "Asab tizimiga ijobiy ta’sir",
          "Umumiy sog‘liqni yaxshilaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: kuniga 2 tabletka",
      dosageRu: "Взрослым: по 2 таблетки 1 раз в день",
      timing: "Ertalab ovqat bilan",
      timingRu: "Утром во время еды",
      duration: "1–3 oy",
      durationRu: "1–3 месяца",
      instruction: "Bolalar: 1 tabletka / Homiladorlar: 2–3 tabletka",
      instructionRu: "Дети: 1 табл / Беременные: 2–3 табл"
    },
  
    contraindications: [
      "Komponentlarga individual toqatsizlik",
      "Yodga allergiya",
      "Yod preparatlariga sezuvchanlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Yod manbai", textRu: "Источник йода" },
      { text: "O‘simlik asosida", textRu: "На основе трав" },
      { text: "Qalqonsimon bez uchun", textRu: "Для щитовидной железы" },
      { text: "Profilaktika va davolash", textRu: "Профилактика и лечение" }
    ]
  },
 

  19: {
    id: 19,
    name: "VIRTUSIN",
    nameRu: "ВИРТУСИН",
    tagline: "Erkaklar salomatligi va quvvat uchun",
    taglineRu: "Для мужского здоровья и потенции",
    image: "https://www.dropbox.com/scl/fi/wa8oyqsprdvneh3wl3no4/virtusin.jpg?rlkey=4zrt5sgrxj2o2iwwkyr97a0mu&st=9mflq2xb&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/sj7r4ij9fzgpz8ieh8d0j/VIRTUSIN-1.pdf?rlkey=i7bu96n67xawjvxwzqr75u57e&st=uflzl5xz&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.8,
    reviews: 721,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Pion (Paeonia anomala)", amount: "—", per: "1 tabletka" },
      { name: "Kiprey (Ivan-choy)", amount: "—", per: "1 tabletka" },
      { name: "Osina (Populus tremula)", amount: "—", per: "1 tabletka" },
      { name: "Qovoq (Cucurbita pepo)", amount: "—", per: "1 tabletka" },
      { name: "Ot kashtani (Aesculus hippocastanum)", amount: "—", per: "1 tabletka" },
      { name: "Qichitqi o‘t", amount: "—", per: "1 tabletka" },
      { name: "Lopux (Arctium lappa)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Potensiya",
        titleRu: "Потенция",
        description: "Erektsiyani yaxshilaydi",
        descriptionRu: "Улучшает эрекцию",
        icon: "🔥"
      },
      {
        title: "Prostata salomatligi",
        titleRu: "Здоровье простаты",
        description: "Prostata funksiyasini qo‘llab-quvvatlaydi",
        descriptionRu: "Поддерживает функцию простаты",
        icon: "🛡️"
      },
      {
        title: "Energiya va chidamlilik",
        titleRu: "Энергия и выносливость",
        description: "Jismoniy quvvatni oshiradi",
        descriptionRu: "Повышает выносливость",
        icon: "⚡"
      },
      {
        title: "Reproduktiv tizim",
        titleRu: "Репродуктивная система",
        description: "Erkaklar reproduktiv salomatligini yaxshilaydi",
        descriptionRu: "Улучшает репродуктивную функцию",
        icon: "💪"
      }
    ],
  
    ingredients: [
      {
        name: "Qovoq urug‘i",
        nameRu: "Тыква",
        icon: "🎃",
        benefits: [
          "Prostata uchun foydali",
          "Sink manbai",
          "Gormon balansini qo‘llab-quvvatlaydi",
          "Yallig‘lanishni kamaytiradi",
          "Erkaklar salomatligini yaxshilaydi"
        ]
      },
      {
        name: "Kiprey (Ivan-choy)",
        nameRu: "Кипрей",
        icon: "🌿",
        benefits: [
          "Prostatitda foydali",
          "Yallig‘lanishga qarshi",
          "Siydik tizimini qo‘llab-quvvatlaydi",
          "Organizmni tinchlantiradi",
          "Immunitetni oshiradi"
        ]
      },
      {
        name: "Qichitqi o‘t",
        nameRu: "Крапива",
        icon: "🌱",
        benefits: [
          "Qon aylanishini yaxshilaydi",
          "Prostata faoliyatini qo‘llab-quvvatlaydi",
          "Vitaminlarga boy",
          "Yallig‘lanishga qarshi",
          "Organizmni mustahkamlaydi"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Prostatani himoya qiladi",
          "Siydik chiqarish tizimini yaxshilaydi",
          "Energiya beradi",
          "Organizmni tiklaydi",
          "Umumiy salomatlikni yaxshilaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kuniga 2 marta 1 tabletka",
      dosageRu: "По 1 таблетке 2 раза в день",
      timing: "Ovqatdan 5–10 daqiqa oldin",
      timingRu: "За 5–10 минут до еды",
      duration: "30 kun",
      durationRu: "30 дней",
      instruction: "Zarurat bo‘lsa kurs takrorlanadi",
      instructionRu: "При необходимости курс повторяют"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Komponentlarga allergiya"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Erkaklar uchun", textRu: "Для мужчин" },
      { text: "Potensiyani oshiradi", textRu: "Повышает потенцию" },
      { text: "Prostata himoyasi", textRu: "Защита простаты" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" }
    ]
  },
  20: {
    id: 20,
    name: "VITALIT",
    nameRu: "ВИТАЛИТ",
    tagline: "Umumiy salomatlik va immunitet uchun",
    taglineRu: "Для общего здоровья и иммунитета",
    image: "https://www.dropbox.com/scl/fi/ms7uzjez9qo63phcxm7gm/vitalit.jpg?rlkey=yxvbwysj5kywix997t0cvzio9&st=wa0d6eqj&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/4cotcacl6xg69v11mgcqg/VITALIT-1.pdf?rlkey=x4v5hht7hsti62fxo4lfe7993&st=gvzycu1z&raw=1",
    volume: "60 tabletka",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.9,
    reviews: 1187,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Cheremuxa mevalari", amount: "—", per: "1 tabletka" },
      { name: "Shipovnik mevalari", amount: "—", per: "1 tabletka" },
      { name: "Qichitqi o‘t barglari", amount: "—", per: "1 tabletka" },
      { name: "Zolotoy koren (Rhodiola rosea)", amount: "—", per: "1 tabletka" },
      { name: "Chabrets (Thymus)", amount: "—", per: "1 tabletka" },
      { name: "Yong‘oq (Juglans regia)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Immunitet",
        titleRu: "Иммунитет",
        description: "Organizm himoyasini kuchaytiradi",
        descriptionRu: "Укрепляет иммунную систему",
        icon: "🛡️"
      },
      {
        title: "Energiya va tonus",
        titleRu: "Энергия и тонус",
        description: "Charchoq va holsizlikni kamaytiradi",
        descriptionRu: "Снижает усталость",
        icon: "⚡"
      },
      {
        title: "Vitamin balans",
        titleRu: "Витаминный баланс",
        description: "Vitamin va minerallarni to‘ldiradi",
        descriptionRu: "Восполняет витамины и минералы",
        icon: "💊"
      },
      {
        title: "Ovqat hazm qilish",
        titleRu: "Пищеварение",
        description: "Ichak faoliyatini yaxshilaydi",
        descriptionRu: "Нормализует работу ЖКТ",
        icon: "🍽️"
      }
    ],
  
    ingredients: [
      {
        name: "Shipovnik",
        nameRu: "Шиповник",
        icon: "🍒",
        benefits: [
          "Vitamin C ga boy",
          "Immunitetni oshiradi",
          "Antioksidant ta’sir",
          "Tomirlarni mustahkamlaydi",
          "Organizmni tiklaydi"
        ]
      },
      {
        name: "Rhodiola rosea",
        nameRu: "Родиола розовая",
        icon: "🌿",
        benefits: [
          "Stressga chidamlilikni oshiradi",
          "Energiya beradi",
          "Aqliy faoliyatni yaxshilaydi",
          "Charchoqni kamaytiradi",
          "Organizmni mustahkamlaydi"
        ]
      },
      {
        name: "Qichitqi o‘t",
        nameRu: "Крапива",
        icon: "🌱",
        benefits: [
          "Vitaminlarga boy",
          "Qon aylanishini yaxshilaydi",
          "Immunitetni oshiradi",
          "Yallig‘lanishga qarshi",
          "Organizmni tozalaydi"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Organizmni umumiy mustahkamlaydi",
          "Metabolizmni yaxshilaydi",
          "Detoks effekt",
          "Stressni kamaytiradi",
          "Umumiy sog‘liqni qo‘llab-quvvatlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 2 tabletka kuniga 2–3 marta",
      dosageRu: "Взрослым: по 2 таблетки 2–3 раза в день",
      timing: "Ovqat vaqtida",
      timingRu: "Во время еды",
      duration: "1–2 oy",
      durationRu: "1–2 месяца",
      instruction: "Bolalar (3–12 yosh): 1 tabletka 2–3 marta",
      instructionRu: "Дети (3–12 лет): по 1 таблетке 2–3 раза в день"
    },
  
    contraindications: [
      "Individual toqatsizlik",
      "Komponentlarga allergiya"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Yorug‘likdan himoyalangan joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Immunitetni oshiradi", textRu: "Укрепляет иммунитет" },
      { text: "Vitamin kompleksi", textRu: "Комплекс витаминов" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Energiya va tonus", textRu: "Энергия и тонус" }
    ]
  },
  21: {
    id: 21,
    name: "GASTIRAK",
    nameRu: "ГАСТИРАК",
    tagline: "Oshqozon kislotaligi va hazm muammolariga qarshi",
    taglineRu: "Против повышенной кислотности и проблем ЖКТ",
    image: "https://www.dropbox.com/scl/fi/liwbaqdmzo0xl84xlc7hv/gastirak.jpg?rlkey=wsy86ygx8hs8akj3skyzfw6rh&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/svvmw7rxdra2hcfmil5qv/GASTIRAK-1.pdf?rlkey=w5dlm2y49zo2l13o80o9c4k3z&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.7,
    reviews: 721,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Ayr botqoq (Acorus calamus)", amount: "—", per: "1 tabletka" },
      { name: "Plantain (Plantago)", amount: "—", per: "1 tabletka" },
      { name: "Yong‘oq (Juglans regia)", amount: "—", per: "1 tabletka" },
      { name: "Aloe (Aloe L.)", amount: "—", per: "1 tabletka" },
      { name: "Romashka (Matricaria)", amount: "—", per: "1 tabletka" },
      { name: "Melissa (Melissa officinalis)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Kislotalikni kamaytirish",
        titleRu: "Снижение кислотности",
        description: "Oshqozon kislotasini normallashtiradi",
        descriptionRu: "Нормализует кислотность желудка",
        icon: "🧪"
      },
      {
        title: "Oshqozon himoyasi",
        titleRu: "Защита слизистой желудка",
        description: "Shilliq qavatni himoya qiladi",
        descriptionRu: "Защищает слизистую оболочку",
        icon: "🛡️"
      },
      {
        title: "Spazmni kamaytirish",
        titleRu: "Снятие спазмов",
        description: "Qorin og‘riqlarini kamaytiradi",
        descriptionRu: "Снимает боли в животе",
        icon: "🌿"
      },
      {
        title: "Hazmni yaxshilash",
        titleRu: "Улучшение пищеварения",
        description: "Ovqat hazmini normallashtiradi",
        descriptionRu: "Улучшает пищеварение",
        icon: "🍽️"
      }
    ],
  
    ingredients: [
      {
        name: "Ayr botqoq",
        nameRu: "Аир болотный",
        icon: "🌿",
        benefits: [
          "Spazmolitik ta’sir",
          "Hazmni yaxshilaydi",
          "Oshqozonni tinchlantiradi",
          "Yallig‘lanishga qarshi"
        ]
      },
      {
        name: "Plantain",
        nameRu: "Подорожник",
        icon: "🌱",
        benefits: [
          "Yara bitishini tezlashtiradi",
          "Shilliq qavatni himoya qiladi",
          "Antibakterial ta’sir",
          "Oshqozon og‘rig‘ini kamaytiradi"
        ]
      },
      {
        name: "Yong‘oq",
        nameRu: "Грецкий орех",
        icon: "🌰",
        benefits: [
          "Antibakterial xususiyat",
          "Yallig‘lanishni kamaytiradi",
          "Hazmni qo‘llab-quvvatlaydi",
          "Immunitetni kuchaytiradi"
        ]
      },
      {
        name: "Aloe",
        nameRu: "Алоэ",
        icon: "🌿",
        benefits: [
          "Shilliq qavatni tiklaydi",
          "Spazmni kamaytiradi",
          "Yallig‘lanishga qarshi",
          "Hazmni yaxshilaydi"
        ]
      },
      {
        name: "Romashka",
        nameRu: "Ромашка",
        icon: "🌼",
        benefits: [
          "Tinchlantiruvchi ta’sir",
          "Yallig‘lanishni kamaytiradi",
          "Spazmni yengillashtiradi",
          "Hazmni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Melissa",
        nameRu: "Мелисса",
        icon: "🌿",
        benefits: [
          "Yengil ich ketkazuvchi ta’sir",
          "Stressni kamaytiradi",
          "Hazmni yaxshilaydi",
          "Ichakni tinchlantiradi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 1–2 tabletka kuniga 3 marta",
      dosageRu: "Взрослым: по 1–2 таблетки 3 раза в день",
      timing: "Ovqatdan 30–60 daqiqa keyin",
      timingRu: "Через 30–60 минут после еды",
      duration: "1–3 oy",
      durationRu: "1–3 месяца",
      instruction: "Tabletkani maydalab suv bilan ichish",
      instructionRu: "Разжевать или измельчить и запить водой"
    },
  
    contraindications: [
      "Komponentlarga individual toqatsizlik",
      "Buyrak yetishmovchiligi",
      "Allergik reaksiyaga moyillik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda saqlash",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Oshqozon himoyasi", textRu: "Защита желудка" },
      { text: "Kislotalikni kamaytiradi", textRu: "Снижает кислотность" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Spazmga qarshi", textRu: "Против спазмов" }
    ]
  },
  22: {
    id: 22,
    name: "GELMOTOKSIN",
    nameRu: "ГЕЛМОТОКСИН",
    tagline: "Parazitlarga qarshi tabiiy kompleks",
    taglineRu: "Натуральный комплекс против паразитов",
    image: "https://www.dropbox.com/scl/fi/aylc8gm6rxw9matc2t3ab/gelmotoksin.jpg?rlkey=a3k2in8tfqfzvb00itvie6iei&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/bacu3ttwyfatxjjjykos2/GELMOTOKSIN-1.pdf?rlkey=2ha26ou7owvxw47gkh40fikzn&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.7,
    reviews: 689,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Pijma (Tanacetum vulgare)", amount: "—", per: "1 tabletka" },
      { name: "Devyasil (Inula helenium)", amount: "—", per: "1 tabletka" },
      { name: "Kassiya (Cassia acutifolia)", amount: "—", per: "1 tabletka" },
      { name: "Xmel (Humulus lupulus)", amount: "—", per: "1 tabletka" },
      { name: "Tykva urug‘i (Cucurbita pepo)", amount: "—", per: "1 tabletka" },
      { name: "Chesnok (Allium sativum)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Parazitlarga qarshi ta’sir",
        titleRu: "Противопаразитарное действие",
        description: "Ichakdagi parazitlarni yo‘qotishga yordam beradi",
        descriptionRu: "Помогает выводить паразитов",
        icon: "🪱"
      },
      {
        title: "Hazm tizimini tozalash",
        titleRu: "Очищение ЖКТ",
        description: "Ichak faoliyatini normallashtiradi",
        descriptionRu: "Нормализует работу кишечника",
        icon: "🧼"
      },
      {
        title: "Immunitetni mustahkamlash",
        titleRu: "Укрепление иммунитета",
        description: "Organizm qarshiligini oshiradi",
        descriptionRu: "Повышает иммунитет",
        icon: "🛡️"
      },
      {
        title: "Yallig‘lanishga qarshi",
        titleRu: "Противовоспалительное действие",
        description: "Ichakdagi yallig‘lanishni kamaytiradi",
        descriptionRu: "Снимает воспаление",
        icon: "🌿"
      }
    ],
  
    ingredients: [
      {
        name: "Pijma",
        nameRu: "Пижма",
        icon: "🌿",
        benefits: [
          "Parazitlarga qarshi kuchli ta’sir",
          "Jigar va o‘t pufagini qo‘llab-quvvatlaydi",
          "Hazmni yaxshilaydi",
          "Antibakterial xususiyat"
        ]
      },
      {
        name: "Devyasil",
        nameRu: "Девясил",
        icon: "🌿",
        benefits: [
          "Ichak motorikasini normallashtiradi",
          "Yallig‘lanishga qarshi",
          "Parazitlarga qarshi yordam beradi",
          "Hazmni yaxshilaydi"
        ]
      },
      {
        name: "Kassiya",
        nameRu: "Кассия",
        icon: "🌿",
        benefits: [
          "Yengil ich ketkazuvchi ta’sir",
          "Ichakni tozalaydi",
          "Toksinlarni chiqaradi",
          "Hazmni yaxshilaydi"
        ]
      },
      {
        name: "Xmel",
        nameRu: "Хмель",
        icon: "🌿",
        benefits: [
          "Tinchlantiruvchi ta’sir",
          "Uyquni yaxshilaydi",
          "Hazmni qo‘llab-quvvatlaydi",
          "Antibakterial ta’sir"
        ]
      },
      {
        name: "Tykva urug‘i",
        nameRu: "Тыквенные семена",
        icon: "🎃",
        benefits: [
          "Lenta qurtlarga qarshi",
          "Ichakni tozalaydi",
          "Parazitlarni yo‘qotadi",
          "Hazmni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Chesnok",
        nameRu: "Чеснок",
        icon: "🧄",
        benefits: [
          "Kuchli antibakterial ta’sir",
          "Parazitlarga qarshi",
          "Immunitetni oshiradi",
          "Hazm fermentlarini faollashtiradi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 2 tabletka kuniga 3 marta",
      dosageRu: "Взрослым: по 2 таблетки 3 раза в день",
      timing: "Ovqatdan 10–15 daqiqa oldin",
      timingRu: "За 10–15 минут до еды",
      duration: "21–28 kun",
      durationRu: "21–28 дней",
      instruction: "Dietaga rioya qilish tavsiya etiladi",
      instructionRu: "Рекомендуется соблюдать диету"
    },
  
    contraindications: [
      "Komponentlarga individual toqatsizlik",
      "Homiladorlik va emizish davri",
      "3 yoshgacha bolalar"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "2 yil",
  
    features: [
      { text: "Parazitlarga qarshi", textRu: "Против паразитов" },
      { text: "Ichak tozalash", textRu: "Очищение кишечника" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Kompleks ta’sir", textRu: "Комплексное действие" }
    ]
  },
  23: {
    id: 23,
    name: "GINKO CARDIOZEN",
    nameRu: "ГИНКО КАРДИОЗЕН",
    tagline: "Yurak va qon tomir tizimi uchun",
    taglineRu: "Для сердца и сосудов",
    image: "https://www.dropbox.com/scl/fi/anx1hz27i11ty3ks73qx6/ginko-1.jpg?rlkey=f21hhvj4efyrbqode8g1yoxy0&st=5c2pplc0&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/5w9f122h0iri20dnlefkk/GINKO-KARDIOZEN.pdf?rlkey=ikis7zkh3z7tul905w2b1opn5&st=ytti4r9f&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.8,
    reviews: 1045,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Ginkgo biloba", amount: "—", per: "1 tabletka" },
      { name: "Devyasil", amount: "—", per: "1 tabletka" },
      { name: "Boyařishnik (Crataegus)", amount: "—", per: "1 tabletka" },
      { name: "Valeriana", amount: "—", per: "1 tabletka" },
      { name: "Melissa", amount: "—", per: "1 tabletka" },
      { name: "Yarrow (Mingbarg)", amount: "—", per: "1 tabletka" },
      { name: "Pustyrnik", amount: "—", per: "1 tabletka" },
      { name: "Mint (Yalpiz)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Yurak faoliyati",
        titleRu: "Работа сердца",
        description: "Yurak ritmini normallashtiradi",
        descriptionRu: "Нормализует сердечный ритм",
        icon: "❤️"
      },
      {
        title: "Qon aylanishi",
        titleRu: "Кровообращение",
        description: "Qon tomirlarni kengaytiradi",
        descriptionRu: "Расширяет сосуды",
        icon: "🩸"
      },
      {
        title: "Stenokardiya simptomlari",
        titleRu: "Стенокардия",
        description: "Ko‘krak og‘riqlarini kamaytiradi",
        descriptionRu: "Снижает боли в груди",
        icon: "⚡"
      },
      {
        title: "Tinchlantiruvchi ta’sir",
        titleRu: "Седативный эффект",
        description: "Asab tizimini tinchlantiradi",
        descriptionRu: "Успокаивает нервную систему",
        icon: "🧘"
      }
    ],
  
    ingredients: [
      {
        name: "Ginkgo biloba",
        nameRu: "Гинкго билоба",
        icon: "🌿",
        benefits: [
          "Miya qon aylanishini yaxshilaydi",
          "Xotira va diqqatni oshiradi",
          "Antioksidant ta’sir",
          "Tomirlarni kengaytiradi",
          "Qon oqimini yaxshilaydi"
        ]
      },
      {
        name: "Boyařishnik",
        nameRu: "Боярышник",
        icon: "🌸",
        benefits: [
          "Yurak ritmini normallashtiradi",
          "Kardio tizimni qo‘llab-quvvatlaydi",
          "Qon bosimini tartibga soladi",
          "Yurak mushagini mustahkamlaydi",
          "Stressni kamaytiradi"
        ]
      },
      {
        name: "Valeriana",
        nameRu: "Валериана",
        icon: "🌿",
        benefits: [
          "Asab tizimini tinchlantiradi",
          "Uyqu sifatini yaxshilaydi",
          "Stressni kamaytiradi",
          "Yurak urishini barqarorlashtiradi",
          "Tinchlantiruvchi ta’sir"
        ]
      },
      {
        name: "O‘simliklar kompleksi",
        nameRu: "Комплекс трав",
        icon: "🌿",
        benefits: [
          "Yurak faoliyatini qo‘llab-quvvatlaydi",
          "Qon aylanishini yaxshilaydi",
          "Nerv tizimini tinchlantiradi",
          "Energiya balansini normallashtiradi",
          "Umumiy sog‘liqni yaxshilaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kuniga 2–3 marta 1 tabletka",
      dosageRu: "По 1 таблетке 2–3 раза в день",
      timing: "Ovqatdan 30 daqiqa oldin",
      timingRu: "За 30 минут до еды",
      duration: "2–4 hafta",
      durationRu: "2–4 недели",
      instruction: "5–10 kun tanaffus bilan qayta kurs mumkin",
      instructionRu: "Повторный курс после 5–10 дней перерыва"
    },
  
    contraindications: [
      "Eroziv gastrit",
      "Yarali kasalliklar (oshqozon va o‘n ikki barmoq ichak)",
      "O‘tkir infarkt holati",
      "Past qon bosimi",
      "Individual toqatsizlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda",
      "Bolalar qo‘li yetmaydigan joyda"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Yurak uchun", textRu: "Для сердца" },
      { text: "Tomirlarni kengaytiradi", textRu: "Расширяет сосуды" },
      { text: "Tinchlantiruvchi ta’sir", textRu: "Седативное действие" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" }
    ]
  },
  24: {
    id: 24,
    name: "DAMA PERFETTA",
    nameRu: "ДАМА ПЕРФЕТТА",
    tagline: "Go‘zallik va yoshlikni qo‘llab-quvvatlovchi kompleks",
    taglineRu: "Комплекс для красоты и молодости кожи",
    image: "https://www.dropbox.com/scl/fi/o946aguqyivmmcokrqskz/DAMA.jpg?rlkey=7b0kfmd5qtqjqfpgbz9qrztwv&st=9uhqzzrv&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/6m43ieyagnaw4jc0ij2f7/Dama-Perfetta-Instructions-RU-ENG-UZ-1.pdf?rlkey=sygcm0unvrkr002t735tgjaue&st=v9atzz5y&raw=1",
    volume: "30 tabletka (1150 mg)",
    form: "Plyonka bilan qoplangan tabletkalar",
    rating: 4.8,
    reviews: 912,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Uzum urug‘i ekstrakti", amount: "—", per: "1 tabletka" },
      { name: "Yashil choy ekstrakti", amount: "—", per: "1 tabletka" },
      { name: "Likopin", amount: "—", per: "1 tabletka" },
      { name: "Soya izoflavonlari", amount: "—", per: "1 tabletka" },
      { name: "Kollagen peptidi (I tur)", amount: "—", per: "1 tabletka" },
      { name: "Askorbin kislota (Vitamin C)", amount: "—", per: "1 tabletka" },
      { name: "Tokoferol asetat (Vitamin E)", amount: "—", per: "1 tabletka" },
      { name: "Biotin", amount: "—", per: "1 tabletka" },
      { name: "Niasinamid", amount: "—", per: "1 tabletka" },
      { name: "L-glutation", amount: "—", per: "1 tabletka" },
      { name: "Rux (Zinc)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Teri yoshligini saqlash",
        titleRu: "Сохранение молодости кожи",
        description: "Ajinlar paydo bo‘lishini sekinlashtiradi va teri elastikligini qo‘llab-quvvatlaydi",
        descriptionRu: "Замедляет старение кожи и поддерживает эластичность",
        icon: "✨"
      },
      {
        title: "Soch va tirnoqlarni mustahkamlash",
        titleRu: "Укрепление волос и ногтей",
        description: "Soch o‘sishini va tirnoq mustahkamligini yaxshilaydi",
        descriptionRu: "Улучшает рост волос и прочность ногтей",
        icon: "💇‍♀️"
      },
      {
        title: "Antioksidant himoya",
        titleRu: "Антиоксидантная защита",
        description: "Erkin radikallarga qarshi himoya qiladi",
        descriptionRu: "Защищает клетки от свободных радикалов",
        icon: "🛡️"
      },
      {
        title: "Metabolizm va teri holati",
        titleRu: "Обмен веществ и состояние кожи",
        description: "Teri rangini yaxshilaydi va umumiy holatni qo‘llab-quvvatlaydi",
        descriptionRu: "Улучшает цвет кожи и общее состояние организма",
        icon: "🌿"
      }
    ],
  
    ingredients: [
      {
        name: "Uzum urug‘i ekstrakti",
        nameRu: "Экстракт виноградных косточек",
        icon: "🍇",
        benefits: [
          "Kuchli antioksidant ta’sir",
          "Kollagen sintezini qo‘llab-quvvatlaydi",
          "Teri elastikligini oshiradi",
          "Yallig‘lanishga qarshi ta’sir"
        ]
      },
      {
        name: "Yashil choy ekstrakti",
        nameRu: "Экстракт зеленого чая",
        icon: "🍵",
        benefits: [
          "Antibakterial ta’sir",
          "Teri tozalash va tinchlantirish",
          "Metabolizmni yaxshilash",
          "Teri porasini toraytirish"
        ]
      },
      {
        name: "Likopin",
        nameRu: "Ликопин",
        icon: "🍅",
        benefits: [
          "Kollagen va elastinni himoya qiladi",
          "Teri qarishini sekinlashtiradi",
          "Antioksidant himoya",
          "Terini yorqinlashtiradi"
        ]
      },
      {
        name: "Soya izoflavonlari",
        nameRu: "Соевые изофлавоны",
        icon: "🌱",
        benefits: [
          "Gormonal balansni qo‘llab-quvvatlaydi",
          "Teri va soch holatini yaxshilaydi",
          "Estrogenga o‘xshash ta’sir",
          "Yoshga bog‘liq o‘zgarishlarni kamaytiradi"
        ]
      },
      {
        name: "Kollagen",
        nameRu: "Коллаген",
        icon: "🧬",
        benefits: [
          "Teri mustahkamligi va elastikligi",
          "Ajinlarni kamaytiradi",
          "Teri regeneratsiyasini qo‘llab-quvvatlaydi",
          "Yoshartiruvchi ta’sir"
        ]
      },
      {
        name: "Vitamin C",
        nameRu: "Витамин C",
        icon: "🍋",
        benefits: [
          "Immunitetni oshiradi",
          "Kollagen ishlab chiqarishni faollashtiradi",
          "Antioksidant himoya",
          "Teri yorqinligini oshiradi"
        ]
      },
      {
        name: "Vitamin E",
        nameRu: "Витамин E",
        icon: "🫒",
        benefits: [
          "Kuchli antioksidant",
          "Teri hujayralarini himoya qiladi",
          "Regeneratsiyani tezlashtiradi",
          "Yallig‘lanishni kamaytiradi"
        ]
      },
      {
        name: "Biotin",
        nameRu: "Биотин",
        icon: "💊",
        benefits: [
          "Soch o‘sishini qo‘llab-quvvatlaydi",
          "Tirnoqlarni mustahkamlaydi",
          "Metabolizmni yaxshilaydi",
          "Teri sog‘ligini qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "L-glutation",
        nameRu: "L-глутатион",
        icon: "⚡",
        benefits: [
          "Detoksikatsiya ta’siri",
          "Antioksidant himoya",
          "Teri yorqinligini oshiradi",
          "Hujayralarni himoya qiladi"
        ]
      },
      {
        name: "Rux",
        nameRu: "Цинк",
        icon: "🧪",
        benefits: [
          "Teri yangilanishini tezlashtiradi",
          "Immunitetni qo‘llab-quvvatlaydi",
          "Yallig‘lanishga qarshi",
          "Soch va tirnoqlarni mustahkamlaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 1 tabletka kuniga 2 marta",
      dosageRu: "Взрослым: по 1 таблетке 2 раза в день",
      timing: "Ovqat bilan birga qabul qilinadi",
      timingRu: "Принимать во время еды",
      duration: "3–6 oy",
      durationRu: "3–6 месяцев",
      instruction: "Doimiy qabul qilish tavsiya etiladi",
      instructionRu: "Рекомендуется регулярный прием"
    },
  
    contraindications: [
      "Homiladorlik va emizish davri",
      "Bolalar yoshi",
      "Komponentlarga individual toqatsizlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda saqlash",
      "Bolalardan yiroqda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Anti-aging ta’sir", textRu: "Антивозрастной эффект" },
      { text: "Teri va soch parvarishi", textRu: "Уход за кожей и волосами" },
      { text: "Antioksidant kompleks", textRu: "Антиоксидантный комплекс" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" }
    ]
  },

  30: {
    id: 30,
    name: "DIABETAZOL",
    nameRu: "ДИАБЕТАЗОЛ",
    tagline: "Qon shakarini nazorat qilish uchun o‘simlik kompleks",
    taglineRu: "Растительный комплекс для контроля сахара в крови",
    image: "https://www.dropbox.com/scl/fi/qpttb25nm8c782o14yfhm/DIABETAZOL.jpg?rlkey=o7gnkmf6ihqhovizva50cunnn&raw=1",
    pdf: "https://www.dropbox.com/scl/fi/s66ibbqcwj8fm4t0nihz9/DIABETAZOL-tabletka.pdf?rlkey=xpcuc7ogn3qhq4p3ey144aq4f&raw=1",
    volume: "60 tabletka (0.5 g)",
    form: "O‘simlik asosidagi tabletkalar",
    rating: 4.7,
    reviews: 856,
    manufacturer: "—",
    certification: "—",
    price: "—",
    currency: "сум",
  
    composition: [
      { name: "Lюserna (Medicago sativa)", amount: "—", per: "1 tabletka" },
      { name: "Topinambur (Helianthus tuberosus)", amount: "—", per: "1 tabletka" },
      { name: "Lopux ildizi (Arctium lappa)", amount: "—", per: "1 tabletka" },
      { name: "Pajitnik (Trigonella foenum-graecum)", amount: "—", per: "1 tabletka" },
      { name: "Krapiva (Urtica dioica)", amount: "—", per: "1 tabletka" },
      { name: "Brusnika bargi (Vaccinium vitis-idaea)", amount: "—", per: "1 tabletka" }
    ],
  
    benefits: [
      {
        title: "Qon shakarini pasaytirish",
        titleRu: "Снижение уровня сахара в крови",
        description: "Glyukoza darajasini barqarorlashtirishga yordam beradi",
        descriptionRu: "Помогает стабилизировать уровень глюкозы",
        icon: "🩸"
      },
      {
        title: "Metabolizmni qo‘llab-quvvatlash",
        titleRu: "Поддержка обмена веществ",
        description: "Uglevod va yog‘ almashinuvini yaxshilaydi",
        descriptionRu: "Улучшает углеводный и жировой обмен",
        icon: "⚙️"
      },
      {
        title: "Qon tomirlarni mustahkamlash",
        titleRu: "Укрепление сосудов",
        description: "Mikrotsirkulyatsiyani yaxshilaydi",
        descriptionRu: "Улучшает микроциркуляцию крови",
        icon: "🫀"
      },
      {
        title: "Og‘irlikni nazorat qilish",
        titleRu: "Контроль веса",
        description: "Ortiqcha vaznni kamaytirishga yordam beradi",
        descriptionRu: "Способствует снижению лишнего веса",
        icon: "⚖️"
      }
    ],
  
    ingredients: [
      {
        name: "Lюserna",
        nameRu: "Люцерна",
        icon: "🌿",
        benefits: [
          "Qon shakarini pasaytiradi",
          "Detoks ta’sir",
          "Immunitetni qo‘llab-quvvatlaydi",
          "Yallig‘lanishga qarshi"
        ]
      },
      {
        name: "Topinambur",
        nameRu: "Топинамбур",
        icon: "🥔",
        benefits: [
          "Inulin manbai",
          "Glyukozani tartibga soladi",
          "Ichak mikroflorasini yaxshilaydi",
          "Metabolizmni qo‘llab-quvvatlaydi"
        ]
      },
      {
        name: "Lopux",
        nameRu: "Лопух",
        icon: "🌿",
        benefits: [
          "Pankreas faoliyatini qo‘llab-quvvatlaydi",
          "Metabolizmni yaxshilaydi",
          "Detoks ta’sir",
          "Qon tozalash"
        ]
      },
      {
        name: "Pajitnik",
        nameRu: "Пажитник",
        icon: "🌱",
        benefits: [
          "Qon shakarini kamaytiradi",
          "Insulin sezgirligini oshiradi",
          "Hazmni yaxshilaydi",
          "Energiya beradi"
        ]
      },
      {
        name: "Krapiva",
        nameRu: "Крапива",
        icon: "🌿",
        benefits: [
          "Glyukoza darajasini pasaytiradi",
          "Qon tozalash",
          "Vitaminlar manbai",
          "Metabolizmni yaxshilaydi"
        ]
      },
      {
        name: "Brusnika",
        nameRu: "Брусника",
        icon: "🍒",
        benefits: [
          "Antibakterial ta’sir",
          "Yallig‘lanishga qarshi",
          "Qon shakarini qo‘llab-quvvatlaydi",
          "Buyrak faoliyatini yaxshilaydi"
        ]
      }
    ],
  
    usage: {
      dosage: "Kattalar: 2 tabletka kuniga 3 marta",
      dosageRu: "Взрослым: по 2 таблетки 3 раза в день",
      timing: "Ovqat paytida",
      timingRu: "Во время еды",
      duration: "1 oy, qayta kurs 1 haftadan keyin",
      durationRu: "1 месяц, повторный курс через неделю",
      instruction: "Suv bilan qabul qilish tavsiya etiladi",
      instructionRu: "Принимать с водой"
    },
  
    contraindications: [
      "Individual intolerans",
      "Homiladorlik va emizish davri",
      "Komponentlarga sezgirlik"
    ],
  
    storage: [
      "Harorat: +2°C dan +25°C gacha",
      "Quruq va qorong‘i joyda",
      "Bolalardan yiroqda saqlash"
    ],
  
    shelfLife: "24 oy",
  
    features: [
      { text: "Qon shakarini nazorat qilish", textRu: "Контроль сахара в крови" },
      { text: "Metabolik balans", textRu: "Метаболический баланс" },
      { text: "Tabiiy tarkib", textRu: "Натуральный состав" },
      { text: "Vaskulyar qo‘llab-quvvatlash", textRu: "Поддержка сосудов" }
    ]
  }

 }
};


export default productsData;    