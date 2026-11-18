import { useTranslation } from "react-i18next";
import AboutPng from "../assets/about.png"
export default function AboutCompany() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-4">
            {t("aboutCompany.sectionLabel")}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">
            {t("aboutCompany.title")}
          </h2>

          <div className="space-y-5 text-slate-600 leading-relaxed">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const key = `aboutCompany.p${n}`;
              const text = t(key);
              if (!text) return null;

              // Preserve newlines in paragraph 6
              const isPre = n === 6;

              return (
                <p key={n} className={isPre ? "whitespace-pre-line" : undefined}>
                  {n === 1 ? (
                    <>
                      <strong className="text-slate-800">ANFA Pharmaceuticals</strong>{" "}
                      {text}
                    </>
                  ) : (
                    text
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border border-slate-200 rounded-2xl" />

          <img
            src={AboutPng}
            alt="Office"
            className="relative rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
