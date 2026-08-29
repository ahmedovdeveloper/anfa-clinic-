import { useTranslation } from "react-i18next";

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
            <p>
              <strong className="text-slate-800">
                ANFA Pharmaceuticals
              </strong>{" "}
              {t("aboutCompany.p1")}
            </p>

            <p>
              {t("aboutCompany.p2")}
            </p>

            <p>
              {t("aboutCompany.p3").split("ISO 22000")[0]}
              <strong className="text-slate-800">
                {" "}ISO 22000{" "}
              </strong>
              {t("aboutCompany.p3").split("ISO 22000")[1]?.split("ISO 9001")[0]}и
              <strong className="text-slate-800">
                {" "}ISO 9001
              </strong>
              {t("aboutCompany.p3").split("ISO 9001")[1] || ""}
            </p>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full border border-slate-200 rounded-2xl" />

          <img
            src="https://www.dropbox.com/scl/fi/f52tbqlnltaowcr1yt7p4/IMG_0585.PNG?rlkey=41ih6o0cdc3kzdoq97xo4irda&st=hx4na4k3&raw=1"
            alt="Office"
            className="relative rounded-2xl object-cover w-full h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
