import React from "react";
import { useTranslation } from "react-i18next";
import certImg from "../assets/sertificat.webp";
import gmpLogo from "../assets/gmp.webp";
import Header from "../components/Header";

export default function GMP() {
  const { t, i18n } = useTranslation();

  const title = t("gmp.title");

  return (
   <>
   <Header/>
     <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl  overflow-hidden">
        <div className="flex items-center gap-4 p-6 border-b border-slate-100">
          <img src={gmpLogo} alt={t("gmp.logoAlt")} className="h-14 w-14 object-contain" />
          <div className="flex items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-emerald-600 uppercase">{title}</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
            <div className="md:w-1/2  flex justify-center">
              <img src={certImg} alt={t("gmp.imageAlt")} className="w-full object-contain shadow-sm" />
            </div>

            <div className="md:w-2/3 text-slate-700  leading-relaxed">
              <p className="font-semibold mb-3 text-4xl">{t("gmp.p1")}</p>
              <p className="mb-3 text-2xl font-bold">{t("gmp.p2")}</p>
              <p className="mb-0 text-2xl font-bold">{t("gmp.p3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
