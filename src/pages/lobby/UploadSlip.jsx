import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { showSuccessAlert, showErrorAlert } from "../../helper/SweetAlert";
import Constant from "../../constant";
import jsQR from "jsqr";
import { t } from "i18next";

function Upslip() {
  const bank = "BANK";
  const history = useHistory();
  const banklist = history?.location?.state;
  const _promotion = JSON.parse(localStorage.getItem(Constant.DATA_PROMOTION));
  const dataFromLogin = JSON.parse(
    localStorage.getItem(Constant.LOGIN_USER_DATA)
  );
  const [bankAgentCode, setBankAgentCode] = useState("");
  const [promotionCode, setPromotionCode] = useState("");
  const [errorTextUploadSlip, setErrorTextUploadSlip] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    _getBankAgentCode();
  }, [banklist]);

  const Back = () => {
    history.push(Constant.BANK_LIST, banklist);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const uploadFile = async () => {
    if (!file) return;
    const _URL = window.URL || window.webkitURL;
    const url = _URL.createObjectURL(file);
    const imgData = await uploadSlip(url);
    document.getElementById("fileSlip").value = "";
    if (imgData != null) {
      try {
        console.log(dataFromLogin?.username);
        const response = await axios.post(
          `${Constant.SERVER_URL}/Deposit/Slip`,
          {
            actionBy: dataFromLogin?.username,
            s_agent_code: dataFromLogin?.agent,
            s_username: dataFromLogin?.username,
            qrcode: imgData.data,
            i_bank_agent: bankAgentCode,
            i_ip: "1.2.3.4",
            s_prm_code: promotionCode,
          }
        );
        showErrorAlert(response?.data?.statusDesc);
      } catch (error) {}
    }
  };

  const uploadSlip = async (url) => {
    // console.log("url: ", url);
    let imgData = null;
    const minScale = 0.75;
    const maxScale = 5;
    const step = 0.25;
    let currentScale = minScale;
    do {
      imgData = await addImageProcess(url, currentScale);
      currentScale += step;
    } while (imgData === null && currentScale <= maxScale);

    return imgData;
  };

  const addImageProcess = (src, scale) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(img.width * scale);
        canvas.height = Math.floor(img.height * scale);

        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imgData = ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
        const pixels = imgData.data;
        for (let i = 0; i < pixels.length; i += 4) {
          const lightness = parseInt(
            (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
          );
          pixels[i] = lightness;
          pixels[i + 1] = lightness;
          pixels[i + 2] = lightness;
        }
        ctx.putImageData(imgData, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        resolve(code);
      };
      img.onerror = reject;
      img.src = src;
    });
  };
  const _getBankAgentCode = () => {
    let data = JSON.stringify({
      data: banklist?.id,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${Constant.SERVER_URL}/Decrypt`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setBankAgentCode(response.data.decrypt);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="overflow-x-hidden overflow-y-auto text-primary">
      <div id="__nuxt" data-v-app="">
        <div data-v-3c88d514="">
          <Header />
          <main
            data-v-3c88d514=""
            className="min-h-screen overflow-scroll pb-[80px]"
          >
            <div
              data-v-3c88d514=""
              className="w-full mx-auto base-container pb-2"
            >
              <div
                style={{ marginTop: "5rem" }}
                className="base-container-small"
              >
                <div
                  onClick={Back}
                  data-v-fe9de6ba=""
                  className="breadcrumb-wrapper py-3 w-max overflow-hidden"
                >
                  <div style={{ display: "flex" }}>
                    <span
                      data-v-fe9de6ba=""
                      className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                    >
                      <img
                        src="/assets/images/icons/icon-arrow-left.png"
                        alt="arrow-lft"
                      />
                    </span>
                    <span
                      data-v-fe9de6ba=""
                      className="breadcrumb-wrapper__item font-medium text-sm cursor-pointer flex-shrink-0"
                    >
                      <p>{t("back")}</p>
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-base space-y-4 bg-[var(--card-primary)]">
                  <div>
                    <div
                      style={{ marginBottom: "20px", height: "auto" }}
                      className="w-full h-[34px] flex items-center gap-x-2 justify-center bg-card-secondary rounded-[5px] p-2 &lt;sm:h-auto &lt;sm:text-center &lt;sm:justify-start &lt;sm:p-2"
                    >
                      <p
                        className="text-danger text-lg "
                        style={{ textAlign: "left", width: "100%" }}
                      >
                        {" "}
                        * {t("WarnnigUploadSlip1")}
                        <br />
                        * {t("WarnnigUploadSlip2")}
                        <br />* {t("ContactUs")}{" "}
                      </p>
                    </div>
                    <div
                      style={{ marginBottom: "10px" }}
                      className="text-[red] flex space-x-2"
                    ></div>
                    <div
                      style={{ marginBottom: "10px" }}
                      className="text-[red] flex space-x-2"
                    >
                      <div className="relative w-full">
                        <select
                          onChange={(event) =>
                            setPromotionCode(event?.target?.value)
                          }
                          className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12"
                          id="nuid-1"
                        >
                          <option>{t("ChooseApromotion")}</option>
                          {_promotion?.length > 0 &&
                            _promotion?.map((promotion) => (
                              <option
                                key={promotion?.index}
                                value={promotion?.s_code}
                              >
                                {promotion?.s_promotion}
                              </option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 end-0 flex items-center pointer-events-none px-3.5 pe-3.5">
                          <span
                            className="i-heroicons-chevron-down-20-solid flex-shrink-0 dark:text-gray-500 flex-shrink-0 text-gray-400 dark:text-primary-400 text-primary-500 h-6 w-6"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                    <div className="text-[red] flex space-x-2">
                      <div className="relative w-full">
                        <div className="relative block w-full min-h-[44px] !rounded-base disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-select rounded-md text-base px-3.5 py-2.5 shadow-sm bg-[var(--card-secondary)] text-[var(--primary)] ring-1 ring-inset ring-[var(--card-tertiary)] pe-12">
                          <input
                            style={{ borderRadius: "15px" }}
                            id="fileSlip"
                            onChange={handleFileChange}
                            type="file"
                            className="block w-full text-sm text-[var(--primary)-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full rounded-base bg-card-primary text-center mt-4">
                      <button
                        onClick={uploadFile}
                        data-v-9dec3a92=""
                        id="btn01"
                        type="submit"
                        disabled={
                          file === null || promotionCode === "" ? true : false
                        }
                        className="base-button-wrapper v-rounded btn-primary btn-md mt-4 font-medium text-base cursor-pointer border border-fontPrimary w-full rounded-base btn-primary h-[38px] flex items-center justify-center"
                      >
                        <div
                          data-v-9dec3a92=""
                          className="flex justify-center items-center"
                        >
                     {t("Send")}
                        </div>
                      </button>
                    </div>
                    {errorTextUploadSlip}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer Active={bank} />
        </div>
      </div>
    </div>
  );
}

export default Upslip;
