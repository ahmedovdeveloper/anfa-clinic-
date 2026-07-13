import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Download, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import Header from "./Header";
import productsData from "../data/productsData";

// Ищем продукт по id во всех вложенных группах
const findProduct = (id) => {
  const numId = parseInt(id);
  for (const group of Object.values(productsData)) {
    if (group[numId]) return group[numId];
  }
  return null;
};

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");

  const product = findProduct(id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Mahsulot topilmadi
            </h1>
            <p className="text-slate-600 mb-8">
              Siz qidirayotgan mahsulot mavjud emas
            </p>
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 
              rounded-full font-semibold hover:bg-blue-700 transition"
            >
              <ArrowLeft size={20} />
              Mahsulotlarga qaytish
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleDownloadPDF = () => {
    window.open(product.pdf, '_blank');
  };

  const handleGoBack = () => {
    navigate('/products');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* BACK BUTTON */}
        <div className="max-w-7xl mx-auto px-6 pt-6">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 
            transition font-medium group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Ortga qaytish
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT - IMAGE */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-contain"
                  />
                  {product.certification && product.certification !== "—" && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      ✓ O'zMSt sertifikatlangan
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT - INFO */}
              <div>
                {product.certification && product.certification !== "—" && (
                  <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    {product.certification}
                  </div>
                )}

                <h1 className="text-5xl font-bold text-slate-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-xl text-slate-600 mb-6">
                  {product.tagline}
                </p>

                {/* QUICK INFO */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Hajm</div>
                    <div className="text-lg font-semibold text-slate-900">{product.volume}</div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 border border-slate-200">
                    <div className="text-sm text-slate-500 mb-1">Shakl</div>
                    <div className="text-lg font-semibold text-slate-900">{product.form}</div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={handleDownloadPDF}
                    className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold 
                    hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Download size={20} />
                    Yo'riqnomani yuklab olish
                  </button>
                </div>

                {/* FEATURES */}
                {product.features && (
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-green-500" />
                        {feature.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        {product.benefits && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Nima uchun {product.name}?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  {product.taglineRu}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-6 
                    hover:shadow-xl transition border border-slate-200 hover:border-blue-300"
                  >
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TABS SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* TABS */}
            <div className="flex gap-2 mb-8 overflow-x-auto">
              {[
                { id: "description",      label: "Umumiy ma'lumot" },
                { id: "ingredients",      label: "Tarkibi" },
                { id: "usage",            label: "Qo'llash" },
                { id: "contraindications",label: "Qarshi ko'rsatmalar" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              {/* DESCRIPTION TAB */}
              {activeTab === "description" && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    {product.name} haqida umumiy ma'lumot
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {product.taglineRu}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 bg-blue-50 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-3">Yaroqlilik muddati</h4>
                      <p className="text-slate-700">{product.shelfLife}</p>
                    </div>
                    <div className="p-6 bg-green-50 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-3">Ishlab chiqaruvchi</h4>
                      <p className="text-slate-700">{product.manufacturer}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* INGREDIENTS TAB */}
              {activeTab === "ingredients" && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Tarkibiy qismlar va ularning foydasi
                  </h3>

                  {/* COMPOSITION TABLE */}
                  {product.composition && (
                    <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
                      <table className="w-full">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="text-left p-4 font-semibold text-slate-900">Komponent</th>
                            <th className="text-left p-4 font-semibold text-slate-900">Miqdor</th>
                            <th className="text-left p-4 font-semibold text-slate-900">Hajm</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.composition.map((item, index) => (
                            <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                              <td className="p-4 text-slate-700">{item.name}</td>
                              <td className="p-4 font-semibold text-slate-900">{item.amount}</td>
                              <td className="p-4 text-slate-600">{item.per}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* DETAILED INGREDIENTS */}
                  {product.ingredients && (
                    <div className="space-y-6">
                      {product.ingredients.map((ingredient, index) => (
                        <div key={index} className="p-6 bg-slate-50 rounded-2xl">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">{ingredient.icon}</span>
                            <h4 className="text-xl font-bold text-slate-900">
                              {ingredient.name}
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {ingredient.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-600">
                                <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* USAGE TAB */}
              {activeTab === "usage" && product.usage && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Qo'llash usuli va dozalari
                  </h3>

                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">1</div>
                        <h4 className="text-xl font-bold text-slate-900">Dozalash</h4>
                      </div>
                      <p className="text-slate-700">{product.usage.dosage}</p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">2</div>
                        <h4 className="text-xl font-bold text-slate-900">Qabul qilish vaqti</h4>
                      </div>
                      <p className="text-slate-700">{product.usage.timing}</p>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">3</div>
                        <h4 className="text-xl font-bold text-slate-900">Kurs davomiyligi</h4>
                      </div>
                      <p className="text-slate-700">{product.usage.duration}</p>
                    </div>

                    {product.usage.instruction && (
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Muhim!</h4>
                            <p className="text-slate-700">{product.usage.instruction}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* STORAGE */}
                  {product.storage && (
                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Saqlash sharoitlari</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {product.storage.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* CONTRAINDICATIONS TAB */}
              {activeTab === "contraindications" && product.contraindications && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Qarshi ko'rsatmalar va ehtiyot choralari
                  </h3>
                  <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-200">
                    <h4 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                      <AlertCircle className="text-red-600" />
                      Qarshi ko'rsatmalar
                    </h4>
                    <ul className="space-y-3">
                      {product.contraindications.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-red-600 font-bold mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              To'liq ma'lumot uchun yo'riqnomani yuklab oling
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              {product.name} haqida barcha ma'lumotlar, ko'rsatmalar va tavsiyalar
            </p>
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full 
              font-bold text-lg hover:bg-blue-50 transition shadow-xl hover:shadow-2xl"
            >
              <Download size={24} />
              PDF yo'riqnomani yuklab olish
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductView;