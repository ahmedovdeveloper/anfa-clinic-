import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // ==================== СТАРЫЕ КЛЮЧИ (en) ====================
      header: {
        about: "About company",
        products: "Products",
        partners: "Partners",
        csr: "CSR",
        news: "News",
        career: "Career",
        contacts: "Contacts",
        languageLabel: "Language",
        contactAddress: "Tashkent city, Example street 123",
        topBarAddress:
          "Uzbekistan, Tashkent region, Tashkent district, Gulistan SFY, GSKB street",
      },
      footer: {
        menu: "Menu",
        aboutTitle: "About company",
        aboutText:
          "Leading pharmaceutical company providing high-quality medical solutions",
        companyName: 'LLC "TOP PHARM SERVICE"',
        addressLine1: "GSKB street, Gulistan SFY,",
        addressLine2: "Tashkent district, Tashkent region",
        contactUs: "Contact us",
      },
      aboutCompany: {
        sectionLabel: "About company",
        title: "ANFA Pharmaceuticals",
        p1: "ANFA Pharmaceuticals was founded in 2013 and is one of the dynamically developing pharmaceutical companies in the markets of Uzbekistan and CIS countries.",
        p2: "The company is one of the leaders in the production of dietary supplements and distribution of modern, high-quality and affordable medicines that meet the requirements of the healthcare system and patient expectations.",
        p3: "Production processes comply with international ISO 22000 and ISO 9001 standards, which ensures high quality and safety of products.",
      },
      newsView: {
        notFoundTitle: "News not found",
        backToList: "Back to news",
        allNews: "All news",
      },
      common: {
        backShort: "Back",
      },
      homeSections: {
        productsLabel: "Products",
        productsTitle: "Our assortment",
        productsSubtitle: "High-quality dietary supplements",
        newsBadge: "Stay informed",
        newsTitle: "Latest news",
        newsSubtitle: "Up-to-date information about new products, promotions and events",
        partnersBadge: "Trusted by professionals",
        partnersTitle: "Our partners",
        partnersSubtitle:
          "We cooperate with leading companies in the field of medicine and healthcare",
        supportLabel: "Support areas",
        supportTitle: "Therapeutic directions",
      },
      newsList: {
        readMore: "Read more",
        moreDetails: "Details",
        showAll: "Show all news",
        showLess: "Show less",
        mainNewsBadge: "Main news",
      },
      newsData: {
        1: {
          title: 'Aziz Gaibullaevich gave an interview to the magazine "MEDICAL EXPRESS"',
          description:
            'Attention announcement! Dear readers of the "Medical Express" magazine!\n\nIssue No. 3, 2017 is scheduled for September 1 – Independence Day of the Republic of Uzbekistan. The cover of issue No. 3, 2017 is dedicated to the activities of the national manufacturer "ANFA PHARMACEUTICALS".\n\nWe offer you a video interview with the General Director of "ANFA PHARMACEUTICALS" Aziz Gaibullaevich Mikhliyev.',
        },
        2: {
          title: "New cooperation with UAE",
          description:
            "Currently, the company is attracting foreign currency by negotiating the export of our products to Dubai, UAE.",
        },
        3: {
          title: "New cooperation with Switzerland",
          description:
            "As part of his visit to Switzerland, the head of the company, Aziz Gaibullaevich, held negotiations with several large pharmaceutical companies and signed a cooperation agreement.",
        },
        4: {
          title: 'International Women\'s Day March 8!',
          description:
            'The company "ANFA PHARMACEUTICALS" congratulates you on the first holiday of spring — International Women\'s Day March 8!\n\nMay this wonderful spring day bring you many smiles, good mood, joy and happiness. We wish you eternal spring in your soul and bright sunshine. Always remain charming, feminine and loved!',
        },
        5: {
          title:
            '"ANFA PHARMACEUTICALS" took part in the FOOD EXPO GREECE 2018 exhibition',
          description:
            '"ANFA PHARMACEUTICALS" and "Oriental Food and Beverages", which are part of "AGM Group", took part in the FOOD EXPO GREECE 2018 exhibition.\n\nFrom March 10 to 12 this year, the International Food and Beverage Exhibition FOOD EXPO GREECE 2018 was held in Athens. This event is the largest regional international exhibition of food and beverages in Southeast Europe. Since the first exhibition in 2014, FOOD EXPO has become one of the fastest growing food and beverage exhibitions in the world.\n\nWith the direct assistance of the Chamber of Commerce and Industry of the Republic of Uzbekistan, the Export Support Fund under NBU, as well as the Consulate General of the Republic of Uzbekistan in Greece, the Uzbek side for the first time took part in FOOD EXPO 2018 with a national pavilion. In particular, the Republic of Uzbekistan was represented by 30 small and medium-sized businesses, 12 of them with stands.',
        },
        6: {
          title:
            "For the first time in the history of our country, a cricket tournament was held",
          description:
            "Last week, many significant events took place in the sports history of our country. Earlier we reported that the first tournament in a new sport — polo — was held in the capital. And at the end of the week, another tournament was organized for the first time — cricket.\n\nRecently, the Cricket Federation was established in Uzbekistan. Within a short period of time, two of our coaches underwent training at the Cricket Academy of India and have now started training the youth of our country. Currently, two cricket teams have been created in our country: “Barlos” and “Afrosiyob”. These two teams played a match within the framework of the “ANFA TASHKENT T20” tournament.\n\nThe leadership of the National Olympic Committee, as well as representatives of the Ministry of Physical Culture and Sports and the Cricket Federation of Uzbekistan, observed the competitions. It can be said that this cricket tournament left a warm impression on the experts. In the first match, Barlos had the advantage.\n\nFor reference, the Cricket Federation of Uzbekistan is a non-profit organization recognized by state bodies and other organizations that develops and promotes cricket in the Republic of Uzbekistan, trains athletes, coaches and referees in accordance with international requirements and standards, and also organizes competitions in this sport. The Cricket Federation of Uzbekistan was established on November 29, 2019 and registered with certificate No. 910 of the Ministry of Justice.",
        },
      },
      products: {
        showAll: "Show all products",
      },
      supportAreas: {
        gastroenterology: "Gastroenterology",
        dermatology: "Dermatology",
        cardiology: "Cardiology",
        neurology: "Neurology",
        ent: "Otolaryngology",
        pulmonology: "Pulmonology",
        urology: "Urology",
        phyto: "Phyto-preparations",
      },
      productAll: {
        searchPlaceholder: "Search products...",
        foundLabel: "Found",
        categoriesTitle: "Categories",
        categoryAll: "All",
        details: "Details",
      },
      newsAll: {
        title: "News and events",
        subtitle: "Current information about the activities of ANFA PHARMACEUTICALS",
        searchButton: "Search news",
        searchPlaceholder: "Enter keywords...",
        foundCount: "News found",
        emptyTitle: "No news found",
        emptySubtitle: "Try changing your search query",
        resetSearch: "Reset search",
        backHome: "Back to home",
      },
      contact: {
        title: "Contacts",
        subtitle: "Your feedback is very important to us!",
        formTitle: "Send us a message",
        nameLabel: "Your name",
        phoneLabel: "Your phone",
        emailLabel: "Your e-mail address",
        messageLabel: "Your message...",
        messagePlaceholder: "Write your message here...",
        sendButton: "Send",
        successTitle: "Thank you!",
        successText:
          "Your message has been successfully sent. We will contact you shortly.",
        phoneFieldLabel: "Phone:",
        emailFieldLabel: "E-mail:",
        addressFieldLabel: "Address:",
      },
      careers: {
        badge: "Join us",
        heroTitle: "Work at ANFA PHARMACEUTICALS",
        heroText:
          "Our company provides opportunities for successful career growth for all employees, regardless of nationality, religion or gender.",
        vacancyTitle: "Vacancy: Medical representative",
        vacancySubtitle:
          "We are currently hiring medical representatives in all regions of Uzbekistan and Kazakhstan.",
        applyBadge: "Apply",
        applyTitle: "Send your resume",
        applySubtitle:
          "We strive to ensure that our company is always an attractive employer!",
        form: {
          fullName: "Full name",
          email: "Email",
          phone: "Phone",
          position: "Desired position",
          experience: "Work experience (years)",
          education: "Education",
          coverLetter: "Cover letter",
          coverPlaceholder:
            "Tell us about yourself and why you want to work at ANFA PHARMACEUTICALS...",
          resumeLabel: "Upload resume",
          resumePlaceholder: "Choose file (PDF, DOC, DOCX)",
          orSendTo: "Or send your resume directly to email:",
          submit: "Submit application",
          successTitle: "Application sent!",
          successText: "We will contact you shortly.",
        },
      },
      productView: {
        notFoundTitle: "Product not found",
        notFoundText: "The product you are looking for does not exist.",
        backToList: "Back to products",
        back: "Back",
        volume: "Volume",
        form: "Form",
        downloadPdf: "Download instruction",
        whyTitle: "Why {{name}}?",
        ingredientsTitle: "Composition and their benefits",
        dosageTitle: "Dosage",
        timingTitle: "Time of intake",
        durationTitle: "Course duration",
        importantTitle: "Important!",
        storageTitle: "Storage conditions",
        contraindicationsTitle: "Contraindications and precautions",
        gxDescriptionTitle: "General information about {{name}}",
        shelfLifeTitle: "Shelf life",
        manufacturerTitle: "Manufacturer",
        ctaTitle: "Download the instruction for full information",
        ctaText:
          "All information, indications and recommendations about {{name}}",
        ctaButton: "Download PDF instruction",
        tabs: {
          description: "Overview",
          ingredients: "Composition",
          usage: "Usage",
          contraindications: "Contraindications",
        },
      },
      partnership: {
        heroBadge: "Partnership and cooperation",
        heroTitle: "Areas of cooperation",
        heroText:
          "Partnership plays an important role in the success of ANFA. This is illustrated by the relationships we have built and the products we have launched and improved.",
      },
      csr: {
        heroText:
          "As a leading manufacturer of socially significant products, ANFA strives to bring relief and treatment for specific diseases that require special attention.",
        more: "More details",
        less: "Hide",
        category1Badge: "Category 1",
        category2Badge: "Category 2",
        category3Badge: "Category 3",
        categories: {
          0: {
            title: "Socially significant products",
            description:
              "THE MOST POPULAR AND SOCIALLY SIGNIFICANT PRODUCTS OF THE COMPANY",
          },
          1: {
            title: "Corporate social responsibility",
            description: "CARE FOR THE ENVIRONMENT AND SOCIETY",
          },
          2: {
            title: "Quality control",
            description:
              "GUARANTEE OF EFFECTIVENESS AND SAFETY IN QUALITY",
          },
        },
        products: {
          0: {
            name: "DIABETAZOL®",
            description:
              "Effectively affects the body in diabetes and reduces blood sugar levels.",
            fullDescription:
              "Medicinal herbs remove toxins from the body, have antibacterial, immunomodulatory and wound-healing effects, normalize the number of leukocytes in the blood, and significantly improve metabolism.",
          },
          1: {
            name: "NATUROSED®",
            description:
              "An effective product based on a unique complex of medicinal herbs for stress relief.",
            fullDescription:
              "Improves the functioning of the central nervous system, helps improve the functioning of the autonomic nervous system, increases the psycho-emotional stability of the body, normalizes the sleep pattern, helps to maintain calmness in stressful situations, strengthens the immune system and increases the body's defenses.",
          },
          2: {
            name: "SOLTOSTEN®",
            description:
              "Effectively promotes the removal of stones of various nature in urolithiasis.",
            fullDescription:
              "Normalizes salt metabolism. Has antispasmodic, diuretic and anti-inflammatory effects.",
          },
          3: {
            name: "CALCIDOKS-ANTIDIATEZIN®",
            description:
              "Exclusive formula of herbal ingredients for regulating calcium and phosphorus metabolism.",
            fullDescription:
              "Effectively helps regulate calcium and phosphorus metabolism in the body (in bones, teeth, hair, muscles). An additional source of calcium, phosphorus and minerals in the diet of adults and children.",
          },
        },
        gxpStages: {
          0: { name: "GLP", description: "Formulation development" },
          1: { name: "GCP", description: "Preclinical studies" },
          2: { name: "GCP", description: "Clinical trials" },
          3: { name: "GMP", description: "Production" },
          4: { name: "GSP", description: "Storage site" },
          5: { name: "GDP", description: "Wholesale trade" },
          6: { name: "GPP", description: "Retail trade" },
          7: { name: "Consumer", description: "End user" },
        },
        qualityStandards: {
          0: {
            title: "O'z DSt ISO 9001–2015",
            description: "National standard of quality management system",
          },
          1: {
            title: "ISO 9001–2015",
            description: "International standard of quality management system",
          },
          2: {
            title: "GMP Standards",
            description:
              "Good manufacturing practice standard for pharmaceutical products",
          },
        },
        qualityIntro:
          "ANFA is responsible for the effectiveness and safety of its dietary supplements.",
        qualityHeading: "Quality management system",
        qualityText1:
          "All ANFA PHARMACEUTICALS products are manufactured in strict accordance with the quality management system. The company's modernized production lines comply with national and international standards, which ensures the highest quality, effectiveness and safety of all products.",
        qualityText2:
          "The quality of dietary supplements means their compliance with all conditions of registration, production (technology, production site, personnel) and specified characteristics. Ensuring the quality of manufactured products is the main task of the company's management.",
        gxpTitle: "GxP lifecycle system",
        gxpSubtitle: "At the stages of the pharmaceutical product lifecycle",
        responsibilityHeading: "Our commitment to sustainable development",
        responsibilityText1:
          "ANFA seeks to conduct its activities and manage its products in a way that protects the environment and consumer health.",
        responsibilityText2:
          "We devote significant resources to environmental sustainability, focusing our efforts where they will have the greatest impact.",
        responsibilityText3:
          "We conduct our business in a socially responsible manner and in accordance with local regulations, and we constantly review our operations to improve efficiency and, where necessary, reduce our environmental impact.",
        responsibilityText4:
          "ANFA also participates in a number of environmental initiatives. We believe that through these efforts we have positively reduced our environmental footprint and improved the overall sustainability of our business.",
        responsibilitySubtitle:
          "Protection of the environment and consumer health",
        responsibilityCards: {
          0: {
            title: "Environmental initiatives",
            description:
              "Active participation in environmental programs and reducing environmental impact",
          },
          1: {
            title: "Social responsibility",
            description:
              "Doing business in accordance with local regulations and social norms",
          },
          2: {
            title: "Continuous improvement",
            description:
              "Continuous improvement of operational efficiency and reduction of environmental footprint",
          },
        },
      },
      sotrudniki: {
        heroBadge: "Cooperation with ANFA",
        heroTitle: "Partnership for development",
        heroSubtitle:
          "ANFA strives to join forces with professional partners who have strong competencies and are ready to work in cooperation.",
      },

      // ==================== НОВЫЕ КЛЮЧИ invpoland (en) ====================
      invpoland: {
        more: "More",
        less: "Less",
        hero: {
          tagline: "Contract Manufacturing Excellence",
          subtitle:
           "ANFA Pharmaceuticals helps companies create competitive private-label products. Using modern production technologies and extensive expertise, we ensure efficient product production while meeting international quality and safety requirements. We manufacture softgel capsules, hard capsules, tablets, syrups, suspensions, powders, and sachets, offering flexible solutions tailored to each partner's needs.", 
          cta: "See More",
        },
        who: {
          badge: "WHO WE ARE",
          text1:
          `ANFA Pharmaceuticals is one of the leading contract manufacturers of pharmaceutical products, dietary supplements (DS), herbal and natural products, vitamin and mineral complexes, nutraceuticals and products for health and healthy lifestyle in Uzbekistan. We offer a full range of contract manufacturing services (Private Label) for pharmaceutical companies, brand owners, distributors and retail chains - from formulation development and raw material selection to production, packaging, labeling and registration process support. Our manufacturing facility complies with international product quality and safety standards, including GMP (Good Manufacturing Practice), ISO 22000, HACCP and Halal. Compliance with these standards guarantees the release of safe, effective and high-quality products that meet the requirements of national and international markets. ANFA Pharmaceuticals' modern production complex is equipped with advanced technologies, high-tech equipment and its own quality control laboratory. We produce a wide range of products, including soft gelatin capsules (Softgel), hard capsules, tablets, syrups, Suspensions, powders, and sachets, ensuring strict quality control at every stage of the production process. We build long-term partnerships by carefully studying the goals, needs, and strategy of each client. A personalized approach, high-level expertise, modern technologies, and consistently high quality allow us to create competitive products and successfully launch them on the market. ANFA Pharmaceuticals is a reliable partner in contract manufacturing, offering innovative solutions, international quality standards, and comprehensive project support at all stages of implementation.`,
          text2:
            "We have implemented the ISO 22000 Quality Management System, which allows us to operate in accordance with the highest standards, ensuring our customers receive products of the highest quality and effectiveness.",
        },
        offer: {
          badge: "OFFER",
          title: "Our Offer",
          subtitle: "specially for You",
          text: "Our offer is tailored specifically for you If you're planning to launch your own brand of pharmaceuticals, dietary supplements, herbal preparations, or other health products, ANFA Pharmaceuticals will be your reliable contract manufacturing partner. We provide a full range of private label services—from product concept development and unique formulation creation to raw material selection, production, packaging, labeling, preparation of necessary documentation, and registration support. Our team supports the project at every stage, ensuring high quality standards, compliance with international requirements, and an efficient product launch.",
          cta: "See More",
        },
        manufacturing: {
          title: "Contract Manufacturing",
          subtitle:
            "ANFA offers comprehensive consulting services in the field of contract manufacturing. We provide services from the process of creating a recipe to the final product. We fulfill orders for dietary supplements in the form of tablets, hard capsules, gelatin capsules, and cellulose capsules.",
          steps: [
            {
              title: "Formula Design",
              desc: "We collaborate with the client in the product creation stage to develop the appropriate recipe. The provided brief serves as the basis for creating the product.",
            },
            {
              title: "Product Selection",
              desc: "Advice on choosing the appropriate product, including the size of the capsule or tablet.",
            },
            {
              title: "Raw Material Supply",
              desc: "According to the established formula, we supply the appropriate raw materials for the production process, confirmed by quality certificates.",
            },
            {
              title: "Testing and Quality Control",
              desc: "Testing and quality control of products are important stages to ensure they meet specified standards and are safe for consumption.",
            },
            {
              title: "Labeling",
              desc: "Label design in compliance with regulatory and legal requirements for dietary supplements is included in the production process.",
            },
            {
              title: "Distribution",
              desc: "We offer support in the final stage of production. Packaging is selected based on the specifics and quantity of the product according to the client's requirements.",
            },
          ],
        },
        productsSection: {
          title: "Our Products",
          cta: "See Details",
          modal: {
            title: "Product Details",
            close: "Close",
          },
          items: [
            {
              name: "Softgel Capsules",
              desc: "Soft gelatin capsules for superior bioavailability and precise dosing",
              details: [
                "Softgel capsules (Softgel) are one of the most in-demand and effective dosage forms for pharmaceutical products, dietary supplements, and nutraceuticals. They provide accurate dosing, reliable protection of the contents from environmental influence, and a high level of comfort in use.",
                "Thanks to the hermetic gelatin shell, the capsules are ideal for liquid, oily, and semi-liquid formulas, including vitamins, minerals, Omega-3, plant extracts, Coenzyme Q10, and other biologically active substances.",
                "ANFA Pharmaceuticals uses modern equipment to manufacture softgel capsules in different shapes and sizes according to individual customer requirements and international quality standards.",
                "Available forms and sizes: Oval — 7, 14. Oblong — 11, 12, 16, 20, 22. Custom capsule shapes and sizes are available on request.",
                "Packaging options: blisters, HDPE/PET bottles, and bulk packaging for subsequent filling. We offer a full production cycle for softgel capsules under your brand with GMP, ISO 22000, HACCP, and Halal compliance.",
                "Below are samples of softgel capsule variants produced by ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Hard Capsules",
              desc: "Robust hard capsules for powders, granules, and sensitive formulations",
              details: [
                "Hard capsules are a universal and widely demanded dosage form for pharmaceutical products, dietary supplements, and nutraceuticals. They ensure precise dosing, safe content protection, and ease of use.",
                "Hard gelatin capsules are ideal for powder and granule ingredients, including vitamins, minerals, plant extracts, amino acids, probiotics, and other functional components. If needed, both gelatin and vegetarian capsules (HPMC) can be used.",
                "ANFA Pharmaceuticals manufactures capsules in different sizes according to customer requirements and international quality standards.",
                "Available capsule sizes: Size 00, Size 0, Size 1. Individual size selection is possible according to project requirements.",
                "Packaging options: blisters, HDPE/PET bottles, and bulk packaging for subsequent filling. We provide a full production cycle for hard capsules under your brand, ensuring compliance with GMP, ISO 22000, HACCP, and Halal standards.",
                "Below are samples of hard gelatin capsules of various sizes produced by ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Tablets",
              desc: "Precision-compressed tablets for stable dosing and long shelf life",
              details: [
                "Tablets are one of the most common and demanded dosage forms for pharmaceutical products, dietary supplements, and nutraceuticals. They provide precise dosing, high stability, long shelf life, and convenience in use.",
                "Tablets are an optimal form for a wide range of ingredients, including vitamins, minerals, plant extracts, amino acids, and other functional components. Modern production technologies ensure uniform distribution of active substances and high quality of the final product.",
                "Available forms: round tablets and other shapes and sizes by individual request.",
                "Packaging options: blisters, HDPE/PET bottles, and bulk packaging for subsequent filling. ANFA Pharmaceuticals offers a full production cycle for tablets under your own brand, in line with GMP, ISO 22000, HACCP, and Halal standards.",
                "Below are samples of tablets manufactured by ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Syrups",
              desc: "Liquid dosage form designed for quick absorption and easy administration",
              details: [
                "Syrups are an effective and convenient dosage form for pharmaceutical products, dietary supplements, and health products. They provide fast absorption of active ingredients, ease of use, and precise dosing, which makes them an optimal choice for adults and children.",
                "ANFA Pharmaceuticals produces syrups based on vitamins, minerals, plant extracts, amino acids, and other functional ingredients. We offer formulation development with different flavor profiles and compositions according to customer requirements.",
                "Production capabilities: water-based syrups, herbal-extract syrups, vitamin-mineral complexes, and custom formulation and flavor development.",
                "Packaging options: plastic (PET/HDPE) and glass bottles of various volumes, different sealing systems and dosing accessories on request, and custom packaging design and labeling under the client’s brand.",
                "ANFA Pharmaceuticals offers a full contract manufacturing cycle for syrups under your own brand, meeting GMP, ISO 22000, HACCP, and Halal standards, while ensuring product quality, safety, and batch stability.",
                "Below are samples of syrups produced by ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Suspensions",
              desc: "Stable liquid form for even distribution and comfortable use",
              details: [
                "Suspensions are an effective liquid dosage form for pharmaceutical products, dietary supplements, and health products. They ensure uniform distribution of active ingredients, convenience in use, and are suitable for a wide range of consumers, including children and adults.",
                "ANFA Pharmaceuticals produces suspensions with various active ingredients, including vitamins, minerals, plant extracts, and other functional components. We develop formulations according to customer requirements, ensuring stability, safety, and high quality of the final product.",
                "Production capabilities: suspensions for children and adults, vitamin-mineral complexes, products based on plant extracts, and custom formulation and flavor development.",
                "Packaging options: plastic (PET/HDPE) and glass bottles of different volumes, various closure systems and dispensing accessories on request, as well as individual package design and labeling under the client’s brand.",
                "ANFA Pharmaceuticals offers a full contract manufacturing cycle for suspensions in compliance with GMP, ISO 22000, HACCP, and Halal standards, guaranteeing high quality, safety, and consistency of every batch.",
                "Below are samples of suspensions produced by ANFA Pharmaceuticals.",
              ],
            },
          ],
        },
      },
    },
  },

  ru: {
    translation: {
      // ==================== СТАРЫЕ КЛЮЧИ (ru) ====================
      header: {
        about: "О компании",
        products: "Продукты",
        partners: "Партнёры",
        csr: "КСО",
        news: "Новости",
        career: "Карьера",
        contacts: "Контакты",
        languageLabel: "Язык",
        contactAddress: "г. Ташкент, ул. Примерная, 123",
        topBarAddress:
          "Узбекистан, Ташкентский обл., Ташкентский район, Гулистан КФЙ, ул. ГСКБ",
      },
      footer: {
        menu: "Меню",
        aboutTitle: "О компании",
        aboutText:
          "Ведущая фармацевтическая компания, предоставляющая качественные медицинские решения",
        companyName: 'ООО "TOP PHARM SERVICE"',
        addressLine1: "ул. ГСКБ, Гулистан КФЙ,",
        addressLine2: "Ташкентский р-н, Ташкентский обл.",
        contactUs: "Свяжитесь с нами",
      },
      aboutCompany: {
        sectionLabel: "О компании",
        title: "ANFA Pharmaceuticals",
        p1: "ANFA Pharmaceuticals основана в 2013 году и является одной из динамично развивающихся фармацевтических компаний на рынке Узбекистана и стран СНГ.",
        p2: "Компания является одним из лидеров в области производства биологически активных добавок и дистрибуции современных, качественных и доступных препаратов, соответствующих требованиям системы здравоохранения и ожиданиям пациентов.",
        p3: "Производственные процессы соответствуют международным стандартам ISO 22000 и ISO 9001, что гарантирует высокое качество и безопасность продукции.",
      },
      newsView: {
        notFoundTitle: "Новость не найдена",
        backToList: "Вернуться к новостям",
        allNews: "Все новости",
      },
      common: {
        backShort: "Назад",
      },
      homeSections: {
        productsLabel: "Продукты",
        productsTitle: "Наш ассортимент",
        productsSubtitle: "Высококачественные биологически активные добавки",
        newsBadge: "Будьте в курсе",
        newsTitle: "Последние новости",
        newsSubtitle:
          "Актуальная информация о новых продуктах, акциях и событиях",
        partnersBadge: "Доверие профессионалов",
        partnersTitle: "Наши партнеры",
        partnersSubtitle:
          "Мы сотрудничаем с ведущими компаниями в области медицины и здравоохранения",
        supportLabel: "Области поддержки",
        supportTitle: "Терапевтические направления",
      },
      newsList: {
        readMore: "Читать далее",
        moreDetails: "Подробнее",
        showAll: "Показать все новости",
        showLess: "Показать меньше",
        mainNewsBadge: "Главная новость",
      },
      newsData: {
        1: {
          title: "Азиз Гайбуллаевич дал интервью журналу «MEDICAL EXPRESS»",
          description:
            "Внимание анонс! Дорогие читатели журнала «Мedical Еxpress»!\n\nВыпуск журнала №3,2017 запланирован к 1 сентября – Дню независимости Республики Узбекистан. Обложка журнала №3,2017 посвящена деятельности национального производителя компании «ANFA PHARMACEUTICALS».\n\nПредлагаем вашему вниманию видео интервью с Генеральным директором компании «ANFA PHARMACEUTICALS» Азизом Гайбуллаевичем Михлиевым.",
        },
        2: {
          title: "Новое сотрудничество с ОАЭ",
          description:
            "В настоящее время компания привлекает иностранную валюту путем переговоров экспортировать нашу продукцию в город ОАЭ Дубая.",
        },
        3: {
          title: "Новое сотрудничество со Швейцарией",
          description:
            "В рамках своего визита в Швейцарию руководитель компании Азиз Гайбуллаевич провел переговоры с несколькими крупными фармацевтическими компаниями и подписал соглашение о сотрудничестве.",
        },
        4: {
          title: "Международным женским днём 8 марта!",
          description:
            "Компания «ANFA PHARMACEUTICALS» поздравляет вас с первым праздником весны — Международным женским днем 8 Марта!\n\nПусть этот чудесный весенний день принесет вам море улыбок, хорошего настроения, радости и счастья. Желаем вам вечной весны в душе и яркого солнца. Будьте всегда обаятельными, женственными и любимыми!",
        },
        5: {
          title:
            "«ANFA PHARMACEUTICALS» принял участие в выставке FOOD EXPO GREECE 2018",
          description:
            "«ANFA PHARMACEUTICALS» и «Oriental Food and Beverages» которые входят в состав «AGM Group» приняли участие в выставке FOOD EXPO GREECE 2018.\n\nС 10 по 12 марта этого года в Афинах состоялась Международная выставка продуктов питания и напитков FOOD EXPO GREECE 2018. Данное мероприятие является крупнейшей региональной международной выставкой продуктов питания и напитков в Юго-Восточной Европе. С момента первой выставки в 2014г. FOOD EXPO стала одной из самых быстрорастущих выставок по продуктам питания и напиткам в мире.\n\nПри непосредственном содействии Торгово-промышленной палаты Республики Узбекистан, Фонда поддержки экспорта при НБУ ВЭД РУ, а также Генерального консульства Республики Узбекистан в Греции, узбекская сторона впервые приняла участие в нынешней выставке FOOD EXPO 2018 с национальным павильоном. В частности, Республика Узбекистан была представлена 30 субъектами малого и среднего бизнеса, из них 12 со стендами.",
        },
        6: {
          title:
            "Впервые в истории нашей страны прошёл турнир по крикету",
          description:
            "На прошедшей неделе в истории спорта нашей страны прошли много знаменательных событий. Ранее нами сообщалось, что в столице прошёл первый турнир по новому виду спорта — поло. А в конце недели впервые был организован ещё один турнир — по крикету.\n\nНедавно в Узбекистане была создана Федерация крикета. За короткий период времени двое наших тренеров прошли обучение в Академии крикета Индии и теперь начали обучать молодёжь нашей страны. В настоящее время в нашей стране созданы две команды по крикету: «Барлос» и «Афросиёб». Эти две команды провели игру в рамках турнира «ANFA TASHKENT T20».\n\nЗа соревнованиями наблюдало руководство Национального Олимпийского комитета, а также, представители Министерства физической культуры и спорта, Федерации крикета Узбекистана. Можно сказать, что этот турнир по крикету оставил у специалистов тёплое впечатление. В первом матче преимущество было у «Барлоса».\n\nДля сведения, Федерация крикета Узбекистана — это некоммерческая организация, признанная государственными органами и другими организациями, которая развивает и продвигает крикет в Республике Узбекистан, обучает спортсменов, тренеров и судей крикету в соответствии с международными требованиями и стандартами, а также проводит соревнования по данному виду спорта. Федерация крикета Узбекистана создана 29 ноября 2019 года и зарегистрированная свидетельством № 910 Министерства юстиции.",
        },
      },
      products: {
        showAll: "Показать все продукты",
      },
      supportAreas: {
        gastroenterology: "Гастроэнтерология",
        dermatology: "Дерматология",
        cardiology: "Кардиология",
        neurology: "Неврология",
        ent: "Отоларингология",
        pulmonology: "Пульмонология",
        urology: "Урология",
        phyto: "Фито-препараты",
      },
      productAll: {
        searchPlaceholder: "Поиск продуктов...",
        foundLabel: "Найдено",
        categoriesTitle: "Категории",
        categoryAll: "Все",
        details: "Подробнее",
      },
      newsAll: {
        title: "Новости и события",
        subtitle:
          "Актуальная информация о деятельности компании ANFA PHARMACEUTICALS",
        searchButton: "Поиск по новостям",
        searchPlaceholder: "Введите ключевые слова...",
        foundCount: "Найдено новостей",
        emptyTitle: "Новости не найдены",
        emptySubtitle: "Попробуйте изменить поисковый запрос",
        resetSearch: "Сбросить поиск",
        backHome: "Вернуться на главную",
      },
      contact: {
        title: "Контакты",
        subtitle: "Ваши отзывы очень важны для нас!",
        formTitle: "Отправьте нам сообщение",
        nameLabel: "Ваше имя",
        phoneLabel: "Ваш телефон",
        emailLabel: "Ваш e-mail адрес",
        messageLabel: "Ваше сообщение...",
        messagePlaceholder: "Напишите ваше сообщение здесь...",
        sendButton: "Отправить",
        successTitle: "Спасибо!",
        successText:
          "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
        phoneFieldLabel: "Телефон:",
        emailFieldLabel: "E-mail:",
        addressFieldLabel: "Адрес:",
      },
      careers: {
        badge: "Присоединяйтесь к нам",
        heroTitle: "Работа в ANFA PHARMACEUTICALS",
        heroText:
          "Наша компания предоставляет возможности для успешного карьерного роста всем сотрудникам независимо от национальности, религии или пола.",
        vacancyTitle: "Вакансия: Медицинский представитель",
        vacancySubtitle:
          "На данный момент мы набираем медицинских представителей по всем регионам Узбекистана и Казахстана.",
        applyBadge: "Подать заявку",
        applyTitle: "Отправьте ваше резюме",
        applySubtitle:
          "Мы стремимся к тому, чтобы наша компания всегда была привлекательным работодателем!",
        form: {
          fullName: "Полное имя",
          email: "Email",
          phone: "Телефон",
          position: "Желаемая должность",
          experience: "Опыт работы (лет)",
          education: "Образование",
          coverLetter: "Сопроводительное письмо",
          coverPlaceholder:
            "Расскажите о себе и почему вы хотите работать в ANFA PHARMACEUTICALS...",
          resumeLabel: "Загрузить резюме",
          resumePlaceholder: "Выберите файл (PDF, DOC, DOCX)",
          orSendTo: "Или отправьте резюме напрямую на email:",
          submit: "Отправить заявку",
          successTitle: "Заявка отправлена!",
          successText: "Мы свяжемся с вами в ближайшее время",
        },
      },
      productView: {
        notFoundTitle: "Махсулот топилмади",
        notFoundText: "Сиз қидираётган маҳсулот мавжуд эмас.",
        backToList: "Mahsulotlarga qaytish",
        back: "Ortga qaytish",
        volume: "Hajm",
        form: "Shakl",
        downloadPdf: "Yo'riqnomani yuklab olish",
        whyTitle: "Nima uchun {{name}}?",
        ingredientsTitle: "Tarkibiy qismlar va ularning foydasi",
        dosageTitle: "Dozalash",
        timingTitle: "Qabul qilish vaqti",
        durationTitle: "Kurs davomiyligi",
        importantTitle: "Muhim!",
        storageTitle: "Saqlash sharoitlari",
        contraindicationsTitle: "Qarshi ko'rsatmalar va ehtiyot choralari",
        gxDescriptionTitle: "{{name}} haqida umumiy ma'lumot",
        shelfLifeTitle: "Yaroqlilik muddati",
        manufacturerTitle: "Ishlab chiqaruvchi",
        ctaTitle: "To'liq ma'lumot uchun yo'riqnomani yuklab oling",
        ctaText:
          "{{name}} haqida barcha ma'lumotlar, ko'rsatmalar va tavsiyalar",
        ctaButton: "PDF yo'riqnomani yuklab olish",
        tabs: {
          description: "Umumiy ma'lumot",
          ingredients: "Tarkibi",
          usage: "Qo'llash",
          contraindications: "Qarshi ko'rsatmalar",
        },
      },
      partnership: {
        heroBadge: "Партнерство и сотрудничество",
        heroTitle: "Области сотрудничества",
        heroText:
          "Партнерство играет важную роль в успехе ANFA. Это иллюстрируется в отношениях, которые мы создали, и продуктах, которые мы запустили и улучшили.",
      },
      csr: {
        heroText:
          "ANFA как ведущий производитель социально значимых препаратов стремится принести облегчение и лечение для конкретных заболеваний, которые нуждаются в особом внимании.",
        more: "Подробнее",
        less: "Свернуть",
        category1Badge: "Категория 1",
        category2Badge: "Категория 2",
        category3Badge: "Категория 3",
        categories: {
          0: {
            title: "Социально значимые продукты",
            description:
              "САМЫЕ ПОПУЛЯРНЫЕ И СОЦИАЛЬНО ЗНАЧИМЫЕ ПРОДУКТЫ КОМПАНИИ",
          },
          1: {
            title: "Корпоративная социальная ответственность",
            description: "ЗАБОТА ОБ ОКРУЖАЮЩЕЙ СРЕДЕ И ОБЩЕСТВЕ",
          },
          2: {
            title: "Контроль качества",
            description:
              "ГАРАНТИЯ ЭФФЕКТИВНОСТИ И БЕЗОПАСНОСТИ В КАЧЕСТВЕ",
          },
        },
        products: {
          0: {
            name: "ДИАБЕТАЗОЛ®",
            description:
              "Эффективно влияет на организм при диабете и снижает уровень сахара в крови.",
            fullDescription:
              "Лекарственные травы удаляют токсины из организма, оказывают антибактериальное, иммуномодулирующее и ранозаживляющее действие, нормализуют количество лейкоцитов в крови, значительно улучшают обмен веществ.",
          },
          1: {
            name: "НАТУРОСЕД®",
            description:
              "Эффективный препарат на основе уникального комплекса лекарственных трав для снятия стресса.",
            fullDescription:
              "Улучшает работу центральной нервной системы, способствует улучшению работы вегетативной нервной системы, повышает психо-эмоциональную устойчивость организма, нормализует режим сна, способствует сохранению спокойствия в стрессовых ситуациях, укрепляет иммунитет и повышает защитные силы организма.",
          },
          2: {
            name: "СОЛТОСТЕН®",
            description:
              "Эффективно способствуют отхождению камней различной природы при почечнокаменной болезни.",
            fullDescription:
              "Нормализуют солевой обмен. Оказывает спазмолитическое, мочегонное и противовоспалительное действие.",
          },
          3: {
            name: "КАЛЬЦИДОКС-АНТИДИАТЕЗИН®",
            description:
              "Эксклюзивная формула растительных ингредиентов для регуляции обмена кальция и фосфора.",
            fullDescription:
              "Эффективно способствуют регуляции обмена кальция и фосфора в организме (в костях, зубах, волосах, мышцах). Дополнительный источник кальция, фосфора и минералов в рационе взрослых и детей.",
          },
        },
        gxpStages: {
          0: { name: "GLP", description: "Разработка рецептур" },
          1: { name: "GCP", description: "Доклинические исследования" },
          2: { name: "GCP", description: "Клинические испытания" },
          3: { name: "GMP", description: "Производство" },
          4: { name: "GSP", description: "Место хранения" },
          5: { name: "GDP", description: "Оптовая торговля" },
          6: { name: "GPP", description: "Розничная торговля" },
          7: { name: "Потребитель", description: "Конечный пользователь" },
        },
        qualityStandards: {
          0: {
            title: "O'z DSt ISO 9001–2015",
            description: "Национальный стандарт системы менеджмента качества",
          },
          1: {
            title: "ISO 9001–2015",
            description: "Международный стандарт системы менеджмента качества",
          },
          2: {
            title: "GMP Standards",
            description:
              "Надлежащая производственная практика фармацевтической продукции",
          },
        },
        qualityIntro:
          "ANFA отвечает за эффективность и безопасность производимых биологически активных добавок.",
        qualityHeading: "Система управления качеством",
        qualityText1:
          "Все препараты ANFA PHARMACEUTICALS производятся в строгом соответствии с системой управления качеством. Модернизированные производственные линии предприятия соответствуют национальным и международным стандартам, что гарантирует высочайшее качество, эффективность и безопасность всех продуктов.",
        qualityText2:
          "Под качеством биологических активных добавок понимается их соответствие всем условиям регистрации, производства (технология, производственная площадка, персонал) и заданным характеристикам. Обеспечение качества выпускаемой продукции является основной задачей руководства компании.",
        gxpTitle: "GxP система жизненного цикла",
        gxpSubtitle: "На этапах жизненного цикла фармацевтического продукта",
        responsibilityHeading: "Наша приверженность устойчивому развитию",
        responsibilityText1:
          "ANFA стремится осуществлять свою деятельность и управлять своими продуктами таким образом, который защищает окружающую среду и здоровье потребителей.",
        responsibilityText2:
          "Мы посвящаем значительные ресурсы экологической устойчивости, уделяя особое внимание нашим усилиям, в которых они будут иметь наибольшее влияние.",
        responsibilityText3:
          "Мы ведем наш бизнес социально ответственным образом и в соответствии с местными правилами, и постоянно пересматриваем наши операции по повышению эффективности и, при необходимости, снижению воздействия на окружающую среду.",
        responsibilityText4:
          "ANFA также участвует в ряде экологических инициатив. Мы считаем, что благодаря этим усилиям мы положительно снизили наш экологический след и повысили общую устойчивость нашего бизнеса.",
        responsibilitySubtitle:
          "Защита окружающей среды и здоровья потребителей",
        responsibilityCards: {
          0: {
            title: "Экологические инициативы",
            description:
              "Активное участие в экологических программах и снижение воздействия на окружающую среду",
          },
          1: {
            title: "Социальная ответственность",
            description:
              "Ведение бизнеса в соответствии с местными правилами и социальными нормами",
          },
          2: {
            title: "Постоянное улучшение",
            description:
              "Непрерывное повышение эффективности операций и снижение экологического следа",
          },
        },
      },
      sotrudniki: {
        heroBadge: "Сотрудничество с ANFA",
        heroTitle: "Партнерство для развития",
        heroSubtitle:
          "ANFA стремится объединять усилия с профессиональными партнерами, которые имеют сильные компетенции и готовы работать в кооперации.",
      },

      // ==================== НОВЫЕ КЛЮЧИ invpoland (ru) ====================
      invpoland: {
        more: "Подробнее",
        less: "Свернуть",
        hero: {
          tagline: "Контрактное производство высшего качества",
          subtitle:
            "Мы являемся контрактным производителем фармацевтической продукции, биологически активных добавок (БАД), растительных и натуральных препаратов, витаминов и минералов, нутрицевтиков и продукции для здоровья и здорового образа жизни. Мы — один из лидеров контрактного производства на рынке Узбекистана.",
          cta: "Узнать больше",
        },
        who: {
          badge: "КТО МЫ",
          text1:
            "ANFA Pharmaceuticals — один из ведущих контрактных производителей фармацевтической продукции, биологически активных добавок (БАД), растительных и натуральных препаратов, витаминно-минеральных комплексов, нутрицевтиков и продукции для здоровья и здорового образа жизни в Узбекистане. Мы предлагаем полный комплекс услуг по контрактному производству (Private Label) для фармацевтических компаний, владельцев брендов, дистрибьюторов и торговых сетей — от разработки рецептуры и подбора сырья до производства, упаковки, маркировки и сопровождения регистрационных процессов. Наше производственное предприятие соответствует международным стандартам качества и безопасности продукции, включая GMP (Good Manufacturing Practice), ISO 22000, HACCP и Halal. Соблюдение этих стандартов гарантирует выпуск безопасной, эффективной и высококачественной продукции, отвечающей требованиям национального и международного рынков. Современный производственный комплекс ANFA Pharmaceuticals оснащён передовыми технологиями, высокотехнологичным оборудованием и собственной лабораторией контроля качества. Мы выпускаем широкий ассортимент продукции, включая мягкие желатиновые капсулы (Softgel), твёрдые капсулы, таблетки, сиропы, суспензии, порошки и саше, обеспечивая строгий контроль качества на каждом этапе производственного процесса. Мы строим долгосрочные партнёрские отношения, внимательно изучая цели, потребности и стратегию каждого клиента. Индивидуальный подход, высокий уровень экспертизы, современные технологии и неизменно высокое качество позволяют нам создавать конкурентоспособные продукты и успешно выводить их на рынок. ANFA Pharmaceuticals — это надёжный партнёр в сфере контрактного производства, предлагающий инновационные решения, международные стандарты качества и комплексное сопровождение проектов на всех этапах их реализации.",
          text2:
            "Мы внедрили Систему управления качеством ISO 22000, которая позволяет нам работать в соответствии с высочайшими стандартами, гарантируя нашим клиентам продукцию высочайшего качества и эффективности.",
        },
        offer: {
          badge: "ПРЕДЛОЖЕНИЕ",
          title: "Наше предложение",
          subtitle: "специально для Вас",
          text: "Наше предложение — специально для Вас Если вы планируете вывести на рынок собственный бренд фармацевтической продукции, биологически активных добавок (БАД), растительных препаратов или других продуктов для здоровья, ANFA Pharmaceuticals станет вашим надёжным партнёром в сфере контрактного производства. Мы предоставляем полный комплекс услуг Private Label — от разработки концепции продукта и создания уникальной рецептуры до подбора сырья, производства, упаковки, маркировки, подготовки необходимой документации и сопровождения регистрационных процедур. Наша команда сопровождает проект на каждом этапе, обеспечивая высокие стандарты качества, соответствие международным требованиям и эффективный вывод продукции на рынок.",
          cta: "Узнать больше",
        },
        manufacturing: {
          title: "Контрактное производство",
          subtitle:
            "ANFA Pharmaceuticals помогает компаниям создавать конкурентоспособные продукты под собственной торговой маркой. Благодаря современным производственным технологиям и высокой экспертизе мы обеспечиваем эффективный выпуск продукции с соблюдением международных требований к качеству и безопасности. Мы производим Softgel-капсулы, твёрдые капсулы, таблетки, сиропы, суспензии, порошки и саше, предлагая гибкие решения, адаптированные под задачи каждого партнёра.",
          steps: [
            {
              title: "Разработка формулы",
              desc: "Мы сотрудничаем с клиентом на этапе создания продукта для разработки соответствующей рецептуры. Предоставленный бриф служит основой для создания продукта.",
            },
            {
              title: "Подбор продукта",
              desc: "Консультации по выбору подходящего продукта, включая размер капсулы или таблетки.",
            },
            {
              title: "Поставка сырья",
              desc: "В соответствии с установленной формулой мы поставляем подходящее сырьё, подтверждённое сертификатами качества.",
            },
            {
              title: "Тестирование и контроль качества",
              desc: "Тестирование и контроль качества продукции — важные этапы для обеспечения соответствия стандартам и безопасности потребления.",
            },
            {
              title: "Маркировка",
              desc: "Разработка этикетки в соответствии с нормативными и юридическими требованиями к диетическим добавкам включена в производственный процесс.",
            },
            {
              title: "Дистрибуция",
              desc: "Мы предлагаем поддержку на завершающем этапе производства. Упаковка подбирается исходя из специфики и количества продукта по требованиям клиента.",
            },
          ],
        },
        productsSection: {
          title: "Наши продукты",
          cta: "Подробнее",
          modal: {
            title: "Подробности продукта",
            close: "Закрыть",
          },
          items: [
            {
              name: "Мягкие желатиновые капсулы (Softgel)",
              desc: "Мягкие желатиновые капсулы для высокой биодоступности и точного дозирования",
              details: [
                "Мягкие желатиновые капсулы (Softgel) — одна из самых востребованных и эффективных форм выпуска фармацевтической продукции, биологически активных добавок и нутрицевтиков. Они обеспечивают точное дозирование активных компонентов, надёжную защиту содержимого от воздействия внешней среды и высокий уровень комфорта при применении.",
                "Благодаря герметичной желатиновой оболочке капсулы идеально подходят для жидких, масляных и полужидких формул, включая витамины, минералы, Омега-3, растительные экстракты, коэнзим Q10 и другие биологически активные вещества.",
                "Современное оборудование ANFA Pharmaceuticals позволяет производить мягкие желатиновые капсулы различных форм и размеров в соответствии с индивидуальными требованиями заказчика и международными стандартами качества.",
                "Доступные формы и размеры: овальные — 7, 14; продолговатые — 11, 12, 16, 20, 22. Индивидуальная разработка формы и размера капсул по запросу клиента возможна.",
                "Варианты упаковки: блистеры, флаконы (HDPE/PET), bulk-упаковка для последующей фасовки. Мы предлагаем полный цикл производства мягких желатиновых капсул под вашей торговой маркой, гарантируя высокое качество продукции, соответствие стандартам GMP, ISO 22000, HACCP и Halal.",
                "Ниже представлены образцы мягких желатиновых капсул различных форм и размеров, выпускаемых ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Твёрдые желатиновые капсулы",
              desc: "Универсальная форма выпуска для порошков, гранул и чувствительных составов",
              details: [
                "Твёрдые капсулы — универсальная и широко востребованная форма выпуска фармацевтической продукции, биологически активных добавок и нутрицевтиков. Они обеспечивают точное дозирование активных компонентов, надёжную защиту содержимого и удобство применения.",
                "Твёрдые желатиновые капсулы идеально подходят для порошкообразных и гранулированных ингредиентов, включая витамины, минералы, растительные экстракты, аминокислоты, пробиотики и другие функциональные компоненты. При необходимости возможно использование как желатиновых, так и растительных капсул (HPMC).",
                "Современные производственные мощности ANFA Pharmaceuticals позволяют выпускать капсулы различных размеров в соответствии с требованиями заказчика и международными стандартами качества.",
                "Доступные размеры капсул: 00, 0, 1. Возможен индивидуальный подбор размеров капсул в соответствии с требованиями проекта.",
                "Варианты упаковки: блистеры, флаконы (HDPE/PET), bulk-упаковка для последующей фасовки. Мы предлагаем полный цикл производства твёрдых капсул под вашей торговой маркой, обеспечивая соответствие международным стандартам GMP, ISO 22000, HACCP и Halal.",
                "Ниже представлены образцы твёрдых желатиновых капсул различных размеров, выпускаемых ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Таблетки",
              desc: "Таблетки точного прессования для стабильного дозирования и длительного хранения",
              details: [
                "Таблетки — одна из наиболее распространённых и востребованных форм выпуска фармацевтической продукции, биологически активных добавок и нутрицевтиков. Они обеспечивают точное дозирование активных компонентов, отличаются высокой стабильностью, длительным сроком хранения и удобством применения.",
                "Таблетки являются оптимальной формой для широкого спектра ингредиентов, включая витамины, минералы, растительные экстракты, аминокислоты и другие функциональные компоненты. Благодаря современным технологиям производства они гарантируют равномерное распределение действующих веществ и высокое качество готовой продукции.",
                "Доступные формы: круглые таблетки. Возможность изготовления таблеток других форм и размеров по индивидуальному запросу.",
                "Варианты упаковки: блистеры, флаконы (HDPE/PET), bulk-упаковка для последующей фасовки. ANFA Pharmaceuticals предлагает полный цикл производства таблеток под собственной торговой маркой с соблюдением международных стандартов GMP, ISO 22000, HACCP и Halal.",
                "Ниже представлены образцы таблеток, выпускаемых ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Сиропы",
              desc: "Жидкая форма выпуска с высокой биодоступностью и удобным применением",
              details: [
                "Сиропы — эффективная и удобная форма выпуска фармацевтической продукции, биологически активных добавок и продуктов для здоровья. Они обеспечивают быстрое усвоение активных компонентов, удобство применения и возможность точного дозирования, что делает их оптимальным выбором для детей и взрослых.",
                "Современные производственные линии ANFA Pharmaceuticals позволяют выпускать сиропы на основе витаминов, минералов, растительных экстрактов, аминокислот и других функциональных ингредиентов. Мы предлагаем разработку рецептур с различными вкусовыми характеристиками и составом в соответствии с требованиями заказчика.",
                "Производственные возможности: сиропы на водной основе, сиропы на основе растительных экстрактов, витаминно-минеральные комплексы, индивидуальная разработка рецептуры и вкусовых решений.",
                "Варианты упаковки: пластиковые (PET/HDPE) и стеклянные флаконы различных объёмов, различные типы укупорки и дозирующих аксессуаров по запросу, индивидуальный дизайн упаковки и маркировки под торговую марку заказчика.",
                "ANFA Pharmaceuticals предлагает полный цикл контрактного производства сиропов под собственной торговой маркой с соблюдением международных стандартов GMP, ISO 22000, HACCP и Halal, гарантируя высокое качество, безопасность и стабильность каждой партии продукции.",
                "Ниже представлены образцы сиропов, выпускаемых ANFA Pharmaceuticals.",
              ],
            },
            {
              name: "Суспензии",
              desc: "Эффективная жидкая форма для равномерного распределения активных веществ",
              details: [
                "Суспензии — эффективная жидкая форма выпуска фармацевтической продукции, биологически активных добавок и продукции для здоровья. Они обеспечивают равномерное распределение активных компонентов, удобство применения и подходят для широкого круга потребителей, включая детей и взрослых.",
                "Современные производственные мощности ANFA Pharmaceuticals позволяют выпускать суспензии с различными активными ингредиентами, включая витамины, минералы, растительные экстракты и другие функциональные компоненты. Мы разрабатываем рецептуры с учётом требований заказчика, обеспечивая стабильность, безопасность и высокое качество готовой продукции.",
                "Производственные возможности: суспензии для детей и взрослых, витаминно-минеральные комплексы, продукты на основе растительных экстрактов, индивидуальная разработка рецептуры и вкусовых решений.",
                "Варианты упаковки: пластиковые (PET/HDPE) и стеклянные флаконы различных объёмов, различные типы укупорки и дозирующих аксессуаров по запросу, индивидуальный дизайн упаковки и маркировки под торговую марку заказчика.",
                "ANFA Pharmaceuticals предлагает полный цикл контрактного производства суспензий с соблюдением международных стандартов GMP, ISO 22000, HACCP и Halal, гарантируя высокое качество, безопасность и стабильность каждой партии продукции.",
                "Ниже представлены образцы суспензий, выпускаемых ANFA Pharmaceuticals.",
              ],
            },
          ],
        },
      },
    },
  },

  uz: {
    translation: {
      // ==================== СТАРЫЕ КЛЮЧИ (uz) ====================
      header: {
        about: "Kompaniya haqida",
        products: "Mahsulotlar",
        partners: "Hamkorlar",
        csr: "KSO",
        news: "Yangiliklar",
        career: "Karyera",
        contacts: "Aloqa",
        languageLabel: "Til",
        contactAddress: "Toshkent sh., Namunaviy ko‘cha, 123",
        topBarAddress:
          "Oʻzbekiston, Toshkent vil., Toshkent tumani, Guliston QFY, GSKB ko'chasi",
      },
      footer: {
        menu: "Menyu",
        aboutTitle: "Kompaniya haqida",
        aboutText:
          "Sifatli tibbiy yechimlarni taqdim etuvchi yetakchi farmatsevtika kompaniyasi",
        companyName: '"TOP PHARM SERVICE" MCHJ',
        addressLine1: "GSKB ko'chasi, Guliston QFY,",
        addressLine2: "Toshkent tumani, Toshkent viloyati",
        contactUs: "Biz bilan bog‘laning",
      },
      aboutCompany: {
        sectionLabel: "Kompaniya haqida",
        title: "ANFA Pharmaceuticals",
        p1: "ANFA Pharmaceuticals 2013 yilda tashkil etilgan bo‘lib, O‘zbekiston va MDH davlatlari bozorida jadal rivojlanayotgan farmatsevtika kompaniyalaridan biridir.",
        p2: "Kompaniya biologik faol qo‘shimchalar ishlab chiqarish va zamonaviy, sifatli hamda arzon dori vositalarini sog‘liqni saqlash tizimi talablari va bemorlar kutilmalariga mos ravishda yetkazib berish sohasida yetakchilardan hisoblanadi.",
        p3: "Ishlab chiqarish jarayonlari ISO 22000 va ISO 9001 xalqaro standartlariga mos keladi, bu esa mahsulotlarning yuqori sifati va xavfsizligini ta’minlaydi.",
      },
      newsView: {
        notFoundTitle: "Yangilik topilmadi",
        backToList: "Yangiliklarga qaytish",
        allNews: "Barcha yangiliklar",
      },
      common: {
        backShort: "Orqaga",
      },
      homeSections: {
        productsLabel: "Mahsulotlar",
        productsTitle: "Bizning assortiment",
        productsSubtitle: "Yuqori sifatli biologik faol qo‘shimchalar",
        newsBadge: "Doimo xabardor bo‘ling",
        newsTitle: "So‘nggi yangiliklar",
        newsSubtitle:
          "Yangi mahsulotlar, aksiyalar va tadbirlar haqida dolzarb ma’lumot",
        partnersBadge: "Mutaxassislar ishonchi",
        partnersTitle: "Bizning hamkorlar",
        partnersSubtitle:
          "Biz tibbiyot va sog‘liqni saqlash sohasidagi yetakchi kompaniyalar bilan hamkorlik qilamiz",
        supportLabel: "Qo‘llab-quvvatlash sohalari",
        supportTitle: "Terapevtik yo‘nalishlar",
      },
      newsList: {
        readMore: "Batafsil o‘qish",
        moreDetails: "Batafsil",
        showAll: "Barcha yangiliklarni ko‘rish",
        showLess: "Kamroq ko‘rsatish",
        mainNewsBadge: "Asosiy yangilik",
      },
      newsData: {
        1: {
          title:
            "Aziz G‘aybullaevich «MEDICAL EXPRESS» jurnaliga intervyu berdi",
          description:
            "Diqqat, e’lon! «Medical Express» jurnali aziz o‘quvchilari!\n\nJurnalning 3-soni, 2017-yil, O‘zbekiston Respublikasi Mustaqillik kuniga – 1-sentabrga bag‘ishlab chiqarilishi rejalashtirilgan. 3-son muqovasi milliy ishlab chiqaruvchi «ANFA PHARMACEUTICALS» kompaniyasi faoliyatiga bag‘ishlangan.\n\nSizlarga «ANFA PHARMACEUTICALS» kompaniyasi bosh direktori Aziz G‘aybullaevich Mixliyev bilan video-intervyuni taqdim etamiz.",
        },
        2: {
          title: "BAA bilan yangi hamkorlik",
          description:
            "Hozirda kompaniya mahsulotlarimizni BAAning Dubay shahriga eksport qilish bo‘yicha muzokaralar olib borish orqali chet el valutasi jalb qilmoqda.",
        },
        3: {
          title: "Shveysariya bilan yangi hamkorlik",
          description:
            "Kompaniya rahbari Aziz G‘aybullaevichning Shveysariyaga tashrifi doirasida bir nechta yirik farmatsevtika kompaniyalari bilan muzokaralar o‘tkazilib, hamkorlik to‘g‘risida kelishuv imzolandi.",
        },
        4: {
          title: "8-mart Xalqaro xotin-qizlar bayrami bilan!",
          description:
            "«ANFA PHARMACEUTICALS» kompaniyasi sizni bahorning ilk bayrami — 8-mart Xalqaro xotin-qizlar kuni bilan tabriklaydi!\n\nUshbu go‘zal bahor kuni sizga ko‘plab tabassumlar, yaxshi kayfiyat, quvonch va baxt olib kelsin. Sizga ruhingizda abadiy bahor va yorqin quyosh tilaymiz. Har doim maftunkor, nozik va sevikli bo‘ling!",
        },
        5: {
          title:
            "«ANFA PHARMACEUTICALS» FOOD EXPO GREECE 2018 ko‘rgazmasida ishtirok etdi",
          description:
            "«AGM Group» tarkibiga kiruvchi «ANFA PHARMACEUTICALS» va «Oriental Food and Beverages» kompaniyalari FOOD EXPO GREECE 2018 ko‘rgazmasida ishtirok etdi.\n\nJoriy yilning 10–12 mart kunlari Afinada FOOD EXPO GREECE 2018 xalqaro oziq-ovqat va ichimliklar ko‘rgazmasi bo‘lib o‘tdi. Ushbu tadbir Janubi-Sharqiy Yevropadagi oziq-ovqat va ichimliklar bo‘yicha eng yirik mintaqaviy xalqaro ko‘rgazma hisoblanadi. 2014-yildagi birinchi ko‘rgazmadan boshlab FOOD EXPO dunyodagi eng tez rivojlanayotgan oziq-ovqat va ichimliklar ko‘rgazmalaridan biriga aylandi.\n\nO‘zbekiston Respublikasi Savdo-sanoat palatasi, Tashqi iqtisodiy faoliyat Milliy banki huzuridagi Eksportni qo‘llab-quvvatlash jamg‘armasi hamda O‘zbekiston Respublikasining Gretsiyadagi Bosh konsulxonasi ko‘magida o‘zbek tomoni birinchi marta FOOD EXPO 2018 ko‘rgazmasida milliy pavilyon bilan ishtirok etdi. Xususan, O‘zbekiston Respublikasi 30 ta kichik va o‘rta biznes subyektlari tomonidan, shundan 12 tasi stendlar bilan namoyish etildi.",
        },
        6: {
          title:
            "Yurtimiz tarixida ilk bor kriket bo‘yicha turnir o‘tkazildi",
          description:
            "O‘tgan hafta mamlakatimiz sport tarixida ko‘plab muhim voqealar bo‘lib o‘tdi. Avval xabar berganimizdek, poytaxtda yangi sport turi — polo bo‘yicha ilk turnir o‘tkazildi. Haftaning oxirida esa ilk bor kriket bo‘yicha ham turnir tashkil etildi.\n\nYaqinda O‘zbekistonda Kriket federatsiyasi tashkil etildi. Qisqa vaqt ichida ikki nafar murabbiyimiz Hindiston Kriket akademiyasida o‘qishdan o‘tib, hozirda yurtimiz yoshlari bilan shug‘ullanishni boshladi. Hozirda mamlakatimizda kriket bo‘yicha ikki jamoa tashkil etilgan: «Barlos» va «Afrosiyob». Ushbu ikki jamoa «ANFA TASHKENT T20» turniri doirasida o‘yin o‘tkazdi.\n\nMusobaqalarni Milliy Olimpiya qo‘mitasi rahbariyati, shuningdek, Jismoniy tarbiya va sport vazirligi, O‘zbekiston Kriket federatsiyasi vakillari kuzatdi. Aytish mumkinki, bu kriket turniri mutaxassislar qalbida iliq taassurot qoldirdi. Birinchi o‘yinda ustunlik «Barlos» jamoasi tomonida bo‘ldi.\n\nMa’lumot uchun, O‘zbekiston Kriket federatsiyasi — davlat organlari va boshqa tashkilotlar tomonidan tan olingan notijorat tashkilot bo‘lib, kriket sport turini O‘zbekiston Respublikasi hududida rivojlantirish va ommalashtirish, sportchilar, murabbiylar va hakamlarni xalqaro talab va standartlarga muvofiq o‘qitish, shuningdek, ushbu sport turi bo‘yicha musobaqalar o‘tkazish bilan shug‘ullanadi. O‘zbekiston Kriket federatsiyasi 2019-yil 29-noyabrda tashkil etilgan va Adliya vazirligining 910-sonli guvohnomasi bilan ro‘yxatdan o‘tkazilgan.",
        },
      },
      products: {
        showAll: "Barcha mahsulotlarni ko‘rsatish",
      },
      supportAreas: {
        gastroenterology: "Gastroenterologiya",
        dermatology: "Dermatologiya",
        cardiology: "Kardiologiya",
        neurology: "Nevrologiya",
        ent: "Otorinolaringologiya",
        pulmonology: "Pulmonologiya",
        urology: "Urologiya",
        phyto: "Fito-preparatlar",
      },
      productAll: {
        searchPlaceholder: "Mahsulotlarni qidirish...",
        foundLabel: "Topildi",
        categoriesTitle: "Kategoriyalar",
        categoryAll: "Barchasi",
        details: "Batafsil",
      },
      newsAll: {
        title: "Yangiliklar va voqealar",
        subtitle:
          "ANFA PHARMACEUTICALS faoliyati haqida dolzarb ma’lumot",
        searchButton: "Yangiliklar bo‘yicha qidirish",
        searchPlaceholder: "Kalit so‘zlarni kiriting...",
        foundCount: "Topilgan yangiliklar",
        emptyTitle: "Yangilik topilmadi",
        emptySubtitle: "Qidiruv so‘zlarini o‘zgartirib ko‘ring",
        resetSearch: "Qidiruvni tozalash",
        backHome: "Bosh sahifaga qaytish",
      },
      contact: {
        title: "Aloqa",
        subtitle: "Sizning fikr-mulohazalaringiz biz uchun juda muhim!",
        formTitle: "Bizga xabar yuboring",
        nameLabel: "Ismingiz",
        phoneLabel: "Telefon raqamingiz",
        emailLabel: "E-mail manzilingiz",
        messageLabel: "Xabaringiz...",
        messagePlaceholder: "Xabaringizni shu yerga yozing...",
        sendButton: "Yuborish",
        successTitle: "Rahmat!",
        successText:
          "Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog‘lanamiz.",
        phoneFieldLabel: "Telefon:",
        emailFieldLabel: "E-mail:",
        addressFieldLabel: "Manzil:",
      },
      careers: {
        badge: "Bizga qo‘shiling",
        heroTitle: "ANFA PHARMACEUTICALSda ish",
        heroText:
          "Kompaniyamiz barcha xodimlar uchun millati, dini yoki jinsidan qat’i nazar, muvaffaqiyatli martaba o‘sishi uchun imkoniyatlar yaratadi.",
        vacancyTitle: "Vakansiya: Tibbiy vakil",
        vacancySubtitle:
          "Hozirda biz O‘zbekiston va Qozog‘istonning barcha hududlari bo‘yicha tibbiy vakillarni tanlab olmoqdamiz.",
        applyBadge: "Ariza topshirish",
        applyTitle: "Rezyumengizni yuboring",
        applySubtitle:
          "Biz kompaniyamiz har doim jozibador ish beruvchi bo‘lishini istaymiz!",
        form: {
          fullName: "To‘liq ism",
          email: "Email",
          phone: "Telefon",
          position: "Kerakli lavozim",
          experience: "Ish tajribasi (yil)",
          education: "Ma’lumoti",
          coverLetter: "Hamroh xat",
          coverPlaceholder:
            "O‘zingiz haqida va nima uchun ANFA PHARMACEUTICALSda ishlamoqchi ekanligingizni yozing...",
          resumeLabel: "Rezyumeni yuklash",
          resumePlaceholder: "Faylni tanlang (PDF, DOC, DOCX)",
          orSendTo: "Yoki rezyumeni to‘g‘ridan-to‘g‘ri emailga yuboring:",
          submit: "Ariza yuborish",
          successTitle: "Ariza yuborildi!",
          successText: "Tez orada siz bilan bog‘lanamiz",
        },
      },
      productView: {
        notFoundTitle: "Mahsulot topilmadi",
        notFoundText: "Siz qidirayotgan mahsulot mavjud emas.",
        backToList: "Mahsulotlarga qaytish",
        back: "Ortga qaytish",
        volume: "Hajm",
        form: "Shakl",
        downloadPdf: "Yo'riqnomani yuklab olish",
        whyTitle: "Nima uchun {{name}}?",
        ingredientsTitle: "Tarkibiy qismlar va ularning foydasi",
        dosageTitle: "Dozalash",
        timingTitle: "Qabul qilish vaqti",
        durationTitle: "Kurs davomiyligi",
        importantTitle: "Muhim!",
        storageTitle: "Saqlash sharoitlari",
        contraindicationsTitle: "Qarshi ko'rsatmalar va ehtiyot choralari",
        gxDescriptionTitle: "{{name}} haqida umumiy ma'lumot",
        shelfLifeTitle: "Yaroqlilik muddati",
        manufacturerTitle: "Ishlab chiqaruvchi",
        ctaTitle:
          "To'liq ma'lumot uchun yo'riqnomani yuklab oling",
        ctaText:
          "{{name}} haqida barcha ma'lumotlar, ko'rsatmalar va tavsiyalar",
        ctaButton: "PDF yo'riqnomani yuklab olish",
        tabs: {
          description: "Umumiy ma'lumot",
          ingredients: "Tarkibi",
          usage: "Qo'llash",
          contraindications: "Qarshi ko'rsatmalar",
        },
      },
      partnership: {
        heroBadge: "Hamkorlik va sheriklik",
        heroTitle: "Hamkorlik yo‘nalishlari",
        heroText:
          "Hamkorlik ANFA muvaffaqiyatida muhim rol o‘ynaydi. Bu biz yaratgan munosabatlar va yo‘lga qo‘ygan hamda takomillashtirgan mahsulotlarimizda namoyon bo‘ladi.",
      },
      csr: {
        heroText:
          "ANFA ijtimoiy ahamiyatga ega preparatlarning yetakchi ishlab chiqaruvchisi sifatida alohida e’tibor talab qiladigan kasalliklar uchun yengillik va davolash imkoniyatlarini yaratishga intiladi.",
        more: "Batafsil",
        less: "Yig‘ish",
        category1Badge: "1-kategoriya",
        category2Badge: "2-kategoriya",
        category3Badge: "3-kategoriya",
        categories: {
          0: {
            title: "Ijtimoiy ahamiyatga ega mahsulotlar",
            description:
              "KOMPANIYANING ENG MASHHUR VA IJTIMOIY AHAMIYATGA EGA MAHSULOTLARI",
          },
          1: {
            title: "Korporativ ijtimoiy mas’uliyat",
            description: "ATROF-MUHIT VA JAMIYATGA G‘AMXO‘RLIK",
          },
          2: {
            title: "Sifat nazorati",
            description:
              "SAMARADORLIK VA XAVFSIZLIKNI TA’MINLASH GAROVI",
          },
        },
        products: {
          0: {
            name: "DIABETAZOL®",
            description:
              "Qandli diabetda organizmga samarali ta’sir etadi va qondagi shakar miqdorini kamaytirishga yordam beradi.",
            fullDescription:
              "Dorivor o‘simliklar organizmdan toksinlarni chiqaradi, antibakterial, immunomodulyator va yarani bitkazuvchi ta’sir ko‘rsatadi, qondagi leykotsitlar miqdorini normallashtiradi, moddalar almashinuvini sezilarli darajada yaxshilaydi.",
          },
          1: {
            name: "NATUROSED®",
            description:
              "Stressni kamaytirish uchun noyob dorivor o‘simliklar kompleksiga asoslangan samarali preparat.",
            fullDescription:
              "Markaziy asab tizimi faoliyatini yaxshilaydi, vegetativ asab tizimi ishini qo‘llab-quvvatlaydi, organizmning psixo-emotsional barqarorligini oshiradi, uyqu rejimini normallashtiradi, stressli vaziyatlarda xotirjamlikni saqlashga yordam beradi, immunitetni mustahkamlaydi va organizmning himoya kuchlarini oshiradi.",
          },
          2: {
            name: "SOLTOSTEN®",
            description:
              "Buyrak-tosh kasalligida turli tabiattagi toshlarning chiqishiga samarali yordam beradi.",
            fullDescription:
              "Tuz almashinuvini normallashtiradi. Spazmolitik, siydik haydovchi va yallig‘lanishga qarshi ta’sir ko‘rsatadi.",
          },
          3: {
            name: "KAL‘TSIDOKS-ANTIDIATEZIN®",
            description:
              "Kaltsiy va fosfor almashinuvini tartibga solish uchun o‘simlik tarkibli maxsus formula.",
            fullDescription:
              "Organizmda (suyaklar, tishlar, sochlar, mushaklar) kaltsiy va fosfor almashinuvini tartibga solishga yordam beradi. Kattalar va bolalar ratsionida kaltsiy, fosfor va minerallarning qo‘shimcha manbai bo‘lib xizmat qiladi.",
          },
        },
        gxpStages: {
          0: { name: "GLP", description: "Retseptura ishlab chiqish" },
          1: { name: "GCP", description: "Doklinik tadqiqotlar" },
          2: { name: "GCP", description: "Klinik sinovlar" },
          3: { name: "GMP", description: "Ishlab chiqarish" },
          4: { name: "GSP", description: "Saqlash joyi" },
          5: { name: "GDP", description: "Ulgurji savdo" },
          6: { name: "GPP", description: "Chakana savdo" },
          7: { name: "Iste’molchi", description: "Yakuniy foydalanuvchi" },
        },
        qualityStandards: {
          0: {
            title: "O'z DSt ISO 9001–2015",
            description: "Sifat menejmenti tizimining milliy standarti",
          },
          1: {
            title: "ISO 9001–2015",
            description:
              "Sifat menejmenti tizimining xalqaro standarti",
          },
          2: {
            title: "GMP Standards",
            description:
              "Farmatsevtika mahsulotlari uchun yaxshi ishlab chiqarish amaliyoti standarti",
          },
        },
        qualityIntro:
          "ANFA ishlab chiqarayotgan biologik faol qo‘shimchalarning samaradorligi va xavfsizligi uchun javobgardir.",
        qualityHeading: "Sifatni boshqarish tizimi",
        qualityText1:
          "Barcha ANFA PHARMACEUTICALS preparatlari sifatni boshqarish tizimiga qat’iy muvofiq ravishda ishlab chiqariladi. Korxonaning modernizatsiya qilingan ishlab chiqarish liniyalari milliy va xalqaro standartlarga javob beradi, bu esa barcha mahsulotlarning eng yuqori sifati, samaradorligi va xavfsizligini ta’minlaydi.",
        qualityText2:
          "Biologik faol qo‘shimchalar sifati deganda ularning ro‘yxatdan o‘tkazish, ishlab chiqarish (texnologiya, ishlab chiqarish maydonchasi, xodimlar) va belgilangan xususiyatlarga to‘liq mosligi tushuniladi. Ishlab chiqarilayotgan mahsulotlar sifatini ta’minlash kompaniya rahbariyatining asosiy vazifasidir.",
        gxpTitle: "GxP hayotiy tsikl tizimi",
        gxpSubtitle:
          "Farmatsevtika mahsulotining hayotiy tsikli bosqichlarida",
        responsibilityHeading: "Barqaror rivojlanishga sodiqligimiz",
        responsibilityText1:
          "ANFA o‘z faoliyatini atrof-muhit va iste’molchilar salomatligini muhofaza qiladigan tarzda yuritishga intiladi.",
        responsibilityText2:
          "Biz ekologik barqarorlik yo‘lida sezilarli resurslarni safarbar etamiz va eng katta ta’sir ko‘rsatadigan yo‘nalishlarga alohida e’tibor qaratamiz.",
        responsibilityText3:
          "Biz o‘z biznesimizni ijtimoiy mas’uliyat bilan va mahalliy qoidalar talablariga muvofiq olib boramiz hamda operatsiyalarimiz samaradorligini oshirish va zarur holatlarda atrof-muhitga ta’sirni kamaytirish uchun doimo qayta ko‘rib chiqamiz.",
        responsibilityText4:
          "ANFA bir qator ekologik tashabbuslarda ham faol ishtirok etadi. Biz bu sa’y-harakatlar natijasida ekologik izimizni kamaytirganimiz va biznesimizning umumiy barqarorligini oshirganimizga ishonamiz.",
        responsibilitySubtitle:
          "Atrof-muhit va iste’molchilar salomatligini muhofaza qilish",
        responsibilityCards: {
          0: {
            title: "Ekologik tashabbuslar",
            description:
              "Ekologik dasturlarda faol ishtirok etish va atrof-muhitga ta’sirni kamaytirish",
          },
          1: {
            title: "Ijtimoiy mas’uliyat",
            description:
              "Mahalliy qoidalar va ijtimoiy me’yorlarga muvofiq biznes yuritish",
          },
          2: {
            title: "Doimiy takomillashtirish",
            description:
              "Operatsion samaradorlikni uzluksiz oshirish va ekologik izni kamaytirish",
          },
        },
      },
      sotrudniki: {
        heroBadge: "ANFA bilan hamkorlik",
        heroTitle: "Rivojlanish uchun hamkorlik",
        heroSubtitle:
          "ANFA kuchli kompetensiyalarga ega va hamkorlikda ishlashga tayyor bo‘lgan professional hamkorlar bilan birgalikda ishlashga intiladi.",
      },

      // ==================== НОВЫЕ КЛЮЧИ invpoland (uz) ====================
      invpoland: {
        more: "Batafsil",
        less: "Yig'ish",
        hero: {
          tagline: "Shartnomaviy ishlab chiqarishda yetakchi",
          subtitle:
            "Biz farmatsevtika mahsulotlari, parhez qo'shimchalari, o'simlik va tabiiy mahsulotlar, vitaminlar va minerallar, nutrasevtik vositalar, sog'liq va turmush tarzi mahsulotlarini shartnoma asosida ishlab chiqaruvchimiz. Biz O'zbekiston bozorida shartnoma asosida ishlab chiqarish bo'yicha yetakchilardan biri.",
          cta: "Batafsil",
        },
        who: {
          badge: "BIZ KIMIZ",
          text1:
            `ANFA Pharmaceuticals O'zbekistonda farmatsevtika mahsulotlari, parhez qo'shimchalari (DS), o'simlik va tabiiy mahsulotlar, vitamin va mineral komplekslar, nutrasevtiklar va sog'liq va sog'lom turmush tarzi uchun mahsulotlar ishlab chiqaruvchi yetakchi shartnomaviy ishlab chiqaruvchilardan biridir. Biz farmatsevtika kompaniyalari, brend egalari, distribyutorlar va chakana savdo tarmoqlari uchun formulalarni ishlab chiqish va xom ashyo tanlashdan tortib, ishlab chiqarish, qadoqlash, yorliqlash va ro'yxatdan o'tish jarayonini qo'llab-quvvatlashgacha bo'lgan barcha shartnomaviy ishlab chiqarish xizmatlarini (xususiy yorliq) taklif etamiz. Bizning ishlab chiqarish korxonamiz GMP (Yaxshi ishlab chiqarish amaliyoti), ISO 22000, HACCP va Halal kabi xalqaro mahsulot sifati va xavfsizlik standartlariga javob beradi. Ushbu standartlarga rioya qilish milliy va xalqaro bozor talablariga javob beradigan xavfsiz, samarali va yuqori sifatli mahsulotlarni chiqarishни kafolatlaydi. ANFA Pharmaceuticals zamonaviy ishlab chiqarish kompleksi ilg'or texnologiyalar, yuqori texnologiyali uskunalar va o'zining sifat nazorati laboratoriyasi bilan jihozlangan. Biz ishlab chiqarish jarayonining har bir bosqichida qat'iy sifat nazoratini ta'minlovchi yumshoq jelatin kapsulalari (Softgel), qattiq kapsulalar, tabletkalar, siroplar, suspenziyalar, kukunlar va paketchalar kabi keng turdagi mahsulotlarni ishlab chiqaramiz. Biz har bir mijozning maqsadlari, ehtiyojlari va strategiyasini sinchkovlik bilan o'rganish orqali uzoq muddatli hamkorlikни o'rnatamiz." Shaxsiylashtirilgan yondashuv, yuqori darajadagi tajriba, zamonaviy texnologiyalar va doimiy yuqori sifat bizga raqobatbardosh mahsulotlar yaratish va ularни bozorga muvaffaqiyatli chiqarish imkonни beradi. ANFA Pharmaceuticals shartnoma asosida ishlab chiqarishda ishonchли hamkor bo'lib, innovatsion yechimlar, xalqaro sifat standartlari va amalga oshirishning barcha bosqichlarida loyihalarni kompleks qollab-quvvatlashни taklif etadi.`,
          text2:
            "Biz ISO 22000 Sifat Boshqaruv Tizimini joriy etdik, bu esa eng yuqori standartlarga muvofiq faoliyat yuritishga imkon beradi va mijozlarimizga eng yuqori sifatdagi mahsulotlarni kafolatlaydi.",
        },
        offer: {
          badge: "TAKLIF",
          title: "Bizning taklifimiz",
          subtitle: "maxsus siz uchun",
          text: "Bizning taklifimiz siz uchun maxsus ishlab chiqilgan. Agar siz o'zingizning farmatsevtika mahsulotlari, parhez qo'shimchalari, o'simlik preparatlari yoki boshqa sog'liqni saqlash mahsulotlari brendingizni chiqarishni rejalashtirmoqchi bo'lsangiz, ANFA Pharmaceuticals sizning ishonchli shartnoma asosida ishlab chiqarish hamkoringiz bo'ladi. Biz mahsulot konsepsiyasini ishlab chiqish va noyob formulalarni yaratishdan tortib, xom ashyo tanlash, ishlab chiqarish, qadoqlash, yorliqlash, zarur hujjatlarni tayyorlash va ro'yxatdan o'tkazishni qo'llab-quvvatlashgacha bo'lgan barcha turdagi xususiy yorliq xizmatlarini taqdim etamiz. Bizning jamoamiz loyihani har bir bosqichda qo'llab-quvvatlaydi, yuqori sifat standartlari, xalqaro talablarga muvofiqlik va samarali mahsulotni ishga tushirishni ta'minlaydi.",
          cta: "Batafsil",
        },
        manufacturing: {
          title: "Shartnomaviy ishlab chiqarish",
          subtitle:
            "ANFA Pharmaceuticals kompaniyalarga raqobatbardosh xususiy yorliqli mahsulotlar yaratishda yordam beradi. Zamonaviy ishlab chiqarish texnologiyalari va keng ko'lamli tajribadan foydalangan holda, biz xalqaro sifat va xavfsizlik talablariga javob berish bilan birga samarali mahsulot ishlab chiqarishni ta'minlaymiz. Biz har bir hamkorning ehtiyojlariga moslashtirilgan moslashuvchan yechimlarni taklif qilib, yumshoq kapsulalar, qattiq kapsulalar, tabletkalar, siroplar, suspenziyalar, kukunlar va paketchalarni ishlab chiqaramiz.",
          steps: [
            {
              title: "Formula ishlab chiqish",
              desc: "Mahsulot yaratish bosqichida mijoz bilan hamkorlik qilib, tegishli retsepturani ishlab chiqamiz. Taqdim etilgan bref mahsulot yaratish uchun asos bo'lib xizmat qiladi.",
            },
            {
              title: "Mahsulot tanlash",
              desc: "Kapsul yoki tabletka o'lchami va tegishli mahsulotni tanlash bo'yicha maslahat.",
            },
            {
              title: "Xom ashyo ta'minoti",
              desc: "Belgilangan formula asosida sifat sertifikatlari bilan tasdiqlangan ishlab chiqarish jarayoni uchun tegishli xom ashyoni ta'minlaymiz.",
            },
            {
              title: "Sinov va sifat nazorati",
              desc: "Mahsulotlarni sinovdan o'tkazish va sifat nazorati standartlarga muvofiqligini va iste'mol uchun xavfsizligini ta'minlashning muhim bosqichlaridir.",
            },
            {
              title: "Yorliq qo'yish",
              desc: "Parhez qo'shimchalariga qo'yiladigan me'yoriy va huquqiy talablarga muvofiq yorliq dizayni ishlab chiqarish jarayoniga kiritilgan.",
            },
            {
              title: "Tarqatish",
              desc: "Ishlab chiqarishning yakuniy bosqichida qo'llab-quvvatlash xizmatini taqdim etamiz. Qadoqlash mijoz talablariga ko'ra tanlanadi.",
            },
          ],
        },
        productsSection: {
          title: "Bizning mahsulotlarimiz",
          cta: "Batafsil",
          modal: {
            title: "Mahsulot tafsilotlari",
            close: "Yopish",
          },
          items: [
            {
              name: "Yumshoq jelatin kapsulalar (Softgel)",
              desc: "Yuqori biokirishuvchanlik va aniq dozlash uchun yumshoq jelatin kapsulalar",
              details: [
                "Yumshoq jelatin kapsulalar (Softgel) — farmatsevtika mahsulotlari, biologik faol qo‘shimchalar va nutrasevtiklar uchun eng talabgor va samarali shakllardan biri. Ular faol komponentlarni aniq dozani ta’minlaydi, tarkibning tashqi muhit ta’siridan ishonchli himoyalanishini va qo‘llash qulayligini ta’minlaydi.",
                "Germetik jelatin qobiq tufayli kapsulalar suyuq, yog‘li va yarim suyuq formulalar uchun ideal bo‘lib, vitaminlar, minerallar, Omega-3, o‘simlik ekstraktlari, koenzim Q10 va boshqa biologik faol moddalar uchun mos keladi.",
                "ANFA Pharmaceuticals zamonaviy uskunalar orqali har xil shakl va o‘lchamdagi yumshoq jelatin kapsulalarini mijozning individual talablariga va xalqaro sifat standartlariga muvofiq ishlab chiqaradi.",
                "Mavjud shakllar va o‘lchamlar: oval — 7, 14; cho‘ziq — 11, 12, 16, 20, 22. Mijoz so‘rovi bo‘yicha individual shakl va o‘lchamlarni ishlab chiqish mumkin.",
                "Qadoqlash variantlari: blisterlar, HDPE/PET flakonlar va keyingi qadoqlash uchun bulk-upakovka. Biz brendingiz ostida yumshoq jelatin kapsulalarni to‘liq ishlab chiqarish tsikli bilan taqdim etamiz, GMP, ISO 22000, HACCP va Halal standartlariga muvofiqlikni kafolatlaymiz.",
                "Quyida ANFA Pharmaceuticals tomonidan chiqariladigan turli shakl va o‘lchamdagi yumshoq jelatin kapsulalarining namunalarini ko‘rishingiz mumkin.",
              ],
            },
            {
              name: "Qattiq jelatin kapsulalar",
              desc: "Kukunlar, granulalar va nozik formulalar uchun universal shakl",
              details: [
                "Qattiq kapsulalar — farmatsevtika mahsulotlari, biologik faol qo‘shimchalar va nutrasevtiklar uchun universal va keng talabgor shakldir. Ular faol komponentlarni aniq dozanishini, tarkibning ishonchli himoyalanishini va qulay qo‘llanishini ta’minlaydi.",
                "Qattiq jelatin kapsulalar kukunli va granulali ingredientlar uchun juda mos, jumladan vitaminlar, minerallar, o‘simlik ekstraktlari, aminokislotalar, probiotiklar va boshqa funksional komponentlar. Zarur bo‘lsa, jelatin va o‘simlikdan olingan kapsulalar (HPMC) ham ishlatilishi mumkin.",
                "ANFA Pharmaceuticals zamonaviy ishlab chiqarish quvvatlari orqali turli o‘lchamdagi kapsulalarni mijozning talablariga va xalqaro sifat standartlariga muvofiq ishlab chiqaradi.",
                "Mavjud kapsula o‘lchamlari: 00, 0, 1. Loyihaga ko‘ra individual o‘lcham tanlash mumkin.",
                "Qadoqlash variantlari: blisterlar, HDPE/PET flakonlar, keyingi qadoqlash uchun bulk-upakovka. Biz brendingiz ostida qattiq kapsulalarni to‘liq ishlab chiqarish tsikli bilan taqdim etamiz, GMP, ISO 22000, HACCP va Halal standartlariga muvofiqlikni kafolatlaymiz.",
                "Quyida ANFA Pharmaceuticals tomonidan ishlab chiqariladigan turli o‘lchamdagi qattiq jelatin kapsulalarining namunalarini ko‘rishingiz mumkin.",
              ],
            },
            {
              name: "Tabletkalar",
              desc: "Barqaror dozlash va uzoq saqlash uchun aniq presslangan tabletkalar",
              details: [
                "Tabletkalar — farmatsevtika mahsulotlari, biologik faol qo‘shimchalar va nutrasevtiklar uchun eng keng tarqalgan va talabgor shakllardan biri. Ular faol komponentlarni aniq dozayishini, yuqori barqarorlikni, uzoq saqlash muddatini va qulay qo‘llanishni ta’minlaydi.",
                "Tabletkalar vitaminlar, minerallar, o‘simlik ekstraktlari, aminokislotalar va boshqa funksional komponentlar uchun optimal shakldir. Zamonaviy ishlab chiqarish texnologiyalari faol komponentlarning teng taqsimlanishi va tayyor mahsulotning yuqori sifatini kafolatlaydi.",
                "Mavjud shakllar: yumaloq tabletkalar. Boshqa shakllar va o‘lchamlar individual so‘rov bo‘yicha ishlab chiqarilishi mumkin.",
                "Qadoqlash variantlari: blisterlar, HDPE/PET flakonlar, keyingi qadoqlash uchun bulk-upakovka. ANFA Pharmaceuticals o‘z brendi ostida tabletkalarni to‘liq ishlab chiqarish tsikliga ega bo‘lib, GMP, ISO 22000, HACCP va Halal standartlariga muvofiqlikni ta’minlaydi.",
                "Quyida ANFA Pharmaceuticals tomonidan ishlab chiqariladigan tabletka namunalarini ko‘rishingiz mumkin.",
              ],
            },
            {
              name: "Siroplar",
              desc: "Tez so‘rilish va qulay qo‘llanish uchun suyuq dozalama shakli",
              details: [
                "Siroplar — farmatsevtika mahsulotlari, biologik faol qo‘shimchalar va salomatlik mahsulotlari uchun samarali va qulay shakldir. Ular faol komponentlarning tez so‘rilishini, qo‘llanish qulayligini va aniq dozani ta’minlaydi, bu esa ularni kattalar va bolalar uchun optimal tanlovga aylantiradi.",
                "ANFA Pharmaceuticals zamonaviy ishlab chiqarish liniyalari yordamida vitaminlar, minerallar, o‘simlik ekstraktlari, aminokislotalar va boshqa funksional ingredientlar asosida siroplar ishlab chiqaradi. Biz mijoz talablariga muvofiq turli ta’mlash xususiyatlari va tarkibga ega retsepturalarni taklif etamiz.",
                "Ishlab chiqarish imkoniyatlari: suvli asosli siroplar, o‘simlik ekstraktlari asosidagi siroplar, vitamin-mineral komplekslar, retseptura va ta’mlash yechimlarini individual ishlab chiqish.",
                "Qadoqlash variantlari: turli hajmdagi plastik (PET/HDPE) va shisha flakonlar, so‘rov bo‘yicha turli muhrlash tizimlari va dozator aksessuarlari, mijoz brendi ostida individual qadoqlash va yorliqlash dizayni.",
                "ANFA Pharmaceuticals brendingiz ostida siroplar uchun to‘liq kontrakt ishlab chiqarish tsiklini taqdim etadi, GMP, ISO 22000, HACCP va Halal standartlariga muvofiqlikni kafolatlaydi, mahsulot sifati, xavfsizligi va partiya barqarorligini ta’minlaydi.",
                "Quyida ANFA Pharmaceuticals tomonidan ishlab chiqariladigan sirop namunalarini ko‘rishingiz mumkin.",
              ],
            },
            {
              name: "Suspenziyalar",
              desc: "Faol moddalarni bir tekis taqsimlash uchun barqaror suyuq forma",
              details: [
                "Suspenziyalar — farmatsevtika mahsulotlari, biologik faol qo‘shimchalar va salomatlik mahsulotlari uchun samarali suyuq dozalama shaklidir. Ular faol komponentlarning teng taqsimlanishini ta’minlaydi, qo‘llanish qulayligi bilan ajralib turadi va bolalar ham, kattalar ham uchun keng iste’molchilar guruhiga mos keladi.",
                "ANFA Pharmaceuticals turli faol ingredientlardan, jumladan vitaminlar, minerallar, o‘simlik ekstraktlari va boshqa funksional komponentlardan suspenziyalar ishlab chiqaradi. Biz mijoz talablarini hisobga olgan holda retsepturalarni ishlab chiqamiz, mahsulotning barqarorligi, xavfsizligi va yuqori sifatini ta’minlaymiz.",
                "Ishlab chiqarish imkoniyatlari: bolalar va kattalar uchun suspenziyalar, vitamin-mineral komplekslar, o‘simlik ekstraktlari asosidagi mahsulotlar, retseptura va ta’mlash yechimlarini individual ishlab chiqish.",
                "Qadoqlash variantlari: turli hajmdagi plastik (PET/HDPE) va shisha flakonlar, so‘rov bo‘yicha turli muhrlash tizimlari va dozator aksessuarlari, mijoz brendi ostida individual qadoqlash va yorliqlash dizayni.",
                "ANFA Pharmaceuticals suspenziyalar uchun to‘liq kontrakt ishlab chiqarish tsikliga ega bo‘lib, GMP, ISO 22000, HACCP va Halal standartlariga muvofiqlikni kafolatlaydi, har bir partiya uchun yuqori sifat, xavfsizlik va barqarorlikni ta’minlaydi.",
                "Quyida ANFA Pharmaceuticals tomonidan ishlab chiqariladigan suspenziya namunalarini ko‘rishingiz mumkin.",
              ],
            },
          ],
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;