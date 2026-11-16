import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productsData from "../data/productsData";

const translations = {
  uz: {
    searchPlaceholder: "Mahsulot nomi bo'yicha qidirish...",
    foundLabel: "Topildi",
    categoriesTitle: "Kategoriyalar",
    categoryAll: "Barchasi",
    categorySirop: "Siroplar",
    categorySoft: "Yumshoq jelatin",
    categoryTabletka: "Tabletkalar",
    details: "Batafsil",
  },
  ru: {
    searchPlaceholder: "Поиск по названию продукта...",
    foundLabel: "Найдено",
    categoriesTitle: "Категории",
    categoryAll: "Все",
    categorySirop: "Сиропы",
    categorySoft: "Мягкий желатин",
    categoryTabletka: "Таблетки",
    details: "Подробнее",
  },
  en: {
    searchPlaceholder: "Search by product name...",
    foundLabel: "Found",
    categoriesTitle: "Categories",
    categoryAll: "All",
    categorySirop: "Syrups",
    categorySoft: "Soft Gelatine",
    categoryTabletka: "Tablets",
    details: "View Details",
  },
};


// Flatten all groups into a flat array with _categoryKey tag
const getAllProducts = () => {
  const result = [];
  Object.entries(productsData).forEach(([categoryKey, group]) => {
    Object.values(group).forEach((product) => {
      result.push({ ...product, _categoryKey: categoryKey });
    });
  });
  return result;
};

const ALL_PRODUCTS = getAllProducts();

const ProductAll = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "uz";
  const tr = translations[lang] || translations["uz"];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all",          name: tr.categoryAll,      count: ALL_PRODUCTS.length },
    { id: "sirop",        name: tr.categorySirop,    count: Object.keys(productsData.sirop      || {}).length },
    { id: "softJelatine", name: tr.categorySoft,     count: Object.keys(productsData.softJelatine || {}).length },
    { id: "tabletka",     name: tr.categoryTabletka, count: Object.keys(productsData.tabletka   || {}).length },
  ];

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameRu?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.taglineRu?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product._categoryKey === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getTagline = (product) => {
    if (lang === "ru") return product.taglineRu || product.tagline;
    return product.tagline || product.taglineRu;
  };

  const handleProductClick = (id) => navigate(`/products/${id}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">

      <Header />

      {/* SEARCH BAR */}
      <section className="sticky top-0 z-20 backdrop-blur bg-white/70">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center justify-between">

          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder={tr.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 
              focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition shadow-sm"
            />
          </div>

          <div className="text-slate-600 font-medium">
            {tr.foundLabel}:{" "}
            <span className="text-blue-600 font-bold">
              {filteredProducts.length}
            </span>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <aside>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-white/40 sticky top-32">

            <div className="flex items-center gap-2 mb-6">
              <Filter className="text-blue-600" size={20} />
              <h3 className="font-bold text-lg">
                {tr.categoriesTitle}
              </h3>
            </div>

            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full px-4 py-3 rounded-xl mb-2 transition-all duration-300 flex justify-between items-center
                ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-sm opacity-80">{cat.count}</span>
              </button>
            ))}

          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group relative bg-white/80 backdrop-blur border border-white/40 rounded-3xl p-6
              shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-400/10 to-purple-400/10" />

              <div className="relative h-52 mb-5 overflow-hidden rounded-2xl bg-slate-50">
                <img
                  src={`${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">
                {product.name}
              </h3>

              <p className="text-sm text-slate-600 mb-5 line-clamp-2">
                {getTagline(product)}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleProductClick(product.id);
                }}
                className="w-full py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                flex items-center justify-center gap-2 shadow-lg"
              >
                {tr.details}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>

            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductAll;