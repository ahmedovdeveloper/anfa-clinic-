import React from "react";
import { useTranslation } from "react-i18next";
import certImg from "../assets/sertificat.png";
import gmpLogo from "../assets/gmp.jpg";

export default function GMP() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>{t("gmp.titleUz")}</h2>
          <h2 style={{ margin: 0 }}>{t("gmp.titleRu")}</h2>
          <h2 style={{ margin: 0 }}>{t("gmp.titleEn")}</h2>
        </div>
        <img
          src={gmpLogo}
          alt={t("gmp.logoAlt")}
          style={{ height: 56, marginLeft: "auto" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
        <img
          src={certImg}
          alt={t("gmp.imageAlt")}
          style={{ width: 320, maxWidth: "40%", objectFit: "contain" }}
        />

        <div style={{ flex: 1, minWidth: 200 }}>
          <p style={{ marginTop: 0 }}>{t("gmp.p1")}</p>
          <p>{t("gmp.p2")}</p>
          <p>{t("gmp.p3")}</p>
        </div>
      </div>
    </div>
  );
}
