import { useTranslation } from "react-i18next";
import React from "react"

function ModalLanguage({ closeModal, changeLanguage, activeLang }) {
  const { t, i18n } = useTranslation();
  console.log("i18n: ", i18n)
  const _changeLanguage = (lng, img) => {
    console.log("lng: ", lng)
    console.log("img: ", img)
    closeModal();
    changeLanguage(lng, img);
  };
  return (
    <div
      className="vfm vfm--fixed vfm--inset flex justify-center items-center"
      onClick={(e) => {
        if (
          e.target.className ===
          "vfm vfm--fixed vfm--inset flex justify-center items-center"
        ) {
          closeModal();
        }
      }}
      style={{ Zindex: "1000", color: "#fff" }}
    >
      <div
        className="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        className="vfm__content vfm--outline-none flex flex-col p-4 w-full max-w-[333px] items-center gap-y-4 bg-card-secondary rounded-[10px]"
        tabindex="0"
      >
        <span>{t("titleDropdown")}</span>
        <div
          onClick={() => {
            _changeLanguage("en", "/assets/images/flag/en.png");
          }}
          className={`${activeLang === "en" ? "activeLang" : ""
            }  bg-darkCard cursor-pointer hover:activeLang w-full relative flex items-center text-sm py-[11px] rounded-[50px] text-center`}
        >
          <img
            src="/assets/images/flag/en.png"
            alt="English"
            className="w-[30px] absolute rounded-full object-cover h-[30px] ml-4"
          />
          <span className="mx-auto">English</span>
        </div>
        <div
          onClick={() => {
            _changeLanguage("th", "/assets/images/flag/th.png");
          }}
          className={`${activeLang === "th" ? "activeLang" : ""
            }  bg-darkCard cursor-pointer hover:activeLang w-full relative flex items-center text-sm py-[11px] rounded-[50px] text-center`}
        >
          <img
            src="/assets/images/flag/th.png"
            alt="ภาษาไทย"
            className="w-[30px] absolute rounded-full object-cover h-[30px] ml-4"
          />
          <span className="mx-auto">ภาษาไทย</span>
        </div>
        <div
          onClick={() => {
            _changeLanguage("my", "/assets/images/flag/my.png");
          }}
          className={`${activeLang === "my" ? "activeLang" : ""
            }  bg-darkCard cursor-pointer hover:activeLang w-full relative flex items-center text-sm py-[11px] rounded-[50px] text-center`}
        >
          <img
            src="/assets/images/flag/my.png"
            alt="ဗမာဘာသာစကား"
            className="w-[30px] absolute rounded-full object-cover h-[30px] ml-4"
          />
          <span className="mx-auto">ဗမာဘာသာစကား</span>
        </div>
        <div
          onClick={() => {
            _changeLanguage("ch", "/assets/images/flag/ch.png");
          }}
          className={`${activeLang === 'ch' ? 'activeLang' : ''}  bg-darkCard cursor-pointer hover:activeLang w-full relative flex items-center text-sm py-[11px] rounded-[50px] text-center`}

        >
          <img
            src="/assets/images/flag/ch.png"
            alt="中国"
            className="w-[30px] absolute rounded-full object-cover h-[30px] ml-4"
          />
          <span className="mx-auto">中国</span>
        </div>
      </div>
    </div>
  );
}

export default ModalLanguage;
