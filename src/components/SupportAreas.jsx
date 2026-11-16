import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const areas = [
  { key: "gastroenterology", icon: "/stomach.webp" },
  { key: "dermatology", icon: "/skin.webp" },
  { key: "cardiology", icon: "/heart.webp" },
  { key: "neurology", icon: "/brain.webp" },
  { key: "ent", icon: "/ear.webp" },
  { key: "pulmonology", icon: "/lungs.webp" },
  { key: "urology", icon: "/kidneys.webp" },
  { key: "phyto", icon: "/plant.webp" },
];

export default function SupportAreas() {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
            {t("homeSections.supportLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            {t("homeSections.supportTitle")}
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Link
              to="/products"
              key={area.key}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8
              hover:border-blue-600 hover:shadow-xl hover:-translate-y-1
              transition duration-300 cursor-pointer overflow-hidden"
            >
              {/* BG IMAGE */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src={area.icon}
                  alt={t(`supportAreas.${area.key}`)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={area.icon}
                  alt={area.title}
                  className="w-16 h-16 mb-6 group-hover:scale-110 transition"
                />
                <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600 transition text-center">
                  {t(`supportAreas.${area.key}`)}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
