import React, { useState } from "react";

function History({ closeModal }) {
  const [active, setActive] = useState("deposit");
  const handleDeposit = () => {
    setActive("deposit");
  };
  const handleWithdraw = () => {
    setActive("withdraw");
  };
  const handleBonus = () => {
    setActive("bonus");
  };
  const Class_Depodit =
    active === "deposit"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  const Class_Withdraw =
    active === "withdraw"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  const Class_Bonus =
    active === "bonus"
      ? "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 active"
      : "tabslinks relative cursor-pointer flex items-center justify-center history mx-2 ";
  return (
    <div
      className="vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
      onClick={(e) => {
        if (
          e.target.className ===
          "vfm vfm--fixed vfm--inset flex justify-center items-center dialog"
        ) {
          closeModal("close");
        }
      }}
      role="dialog"
      aria-modal="true"
      id="detail-affiliate-modail-show"
      title=""
      style={{ zIndex: 1000 }}
    >
      <div
        class="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        class="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <span
          onClick={closeModal}
          class="nuxt-icon nuxt-icon--fill absolute bg-[red] top-[-10px] right-[-10px] text-sm p-2 rounded-full z-10 text-xs cursor-pointer"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1401_15474)">
              <path
                d="M4.88369 100C3.91784 100 2.97363 99.7139 2.17049 99.1774C1.36735 98.6409 0.741374 97.8782 0.371733 96.9859C0.00209162 96.0936 -0.0946053 95.1117 0.0938733 94.1644C0.282352 93.2171 0.747538 92.347 1.43059 91.6641L91.6644 1.43032C92.5802 0.514502 93.8223 0 95.1175 0C96.4126 0 97.6548 0.514502 98.5706 1.43032C99.4864 2.34614 100.001 3.58826 100.001 4.88342C100.001 6.17859 99.4864 7.42071 98.5706 8.33653L8.3368 98.5703C7.88375 99.0243 7.34547 99.3843 6.75288 99.6297C6.16029 99.875 5.52506 100.001 4.88369 100Z"
                fill="white"
              ></path>
              <path
                d="M95.1172 100C94.4758 100.001 93.8406 99.875 93.248 99.6297C92.6554 99.3843 92.1172 99.0243 91.6641 98.5703L1.43032 8.33653C0.514502 7.42071 0 6.17859 0 4.88342C0 3.58826 0.514502 2.34614 1.43032 1.43032C2.34614 0.514502 3.58826 0 4.88342 0C6.17859 0 7.42071 0.514502 8.33653 1.43032L98.5703 91.6641C99.2534 92.347 99.7186 93.2171 99.907 94.1644C100.096 95.1117 99.9988 96.0936 99.6292 96.9859C99.2595 97.8782 98.6336 98.6409 97.8304 99.1774C97.0273 99.7139 96.0831 100 95.1172 100V100Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clippath id="clip0_1401_15474">
                <rect width="100" height="100" fill="white"></rect>
              </clippath>
            </defs>
          </svg>
        </span>
        <div>
          <div>
            <div data-v-ea58f736="" id="affiliate-advance-tab" class="w-full">
              <div data-v-ea58f736="" class="tabsWrapper">
                <div
                  data-v-ea58f736=""
                  class="tabs relative flex items-center justify-center tab-primary w-max"
                >
                  {/* <div
                    data-v-ea58f736=""
                    class="w-full absolute bottom-0 left-0 rounded-full slide affiliate-advance-tab"
                  ></div> */}
                  <div
                    onClick={handleDeposit}
                    data-v-ea58f736=""
                    id="affiliate-advance-tab"
                    class={Class_Depodit}
                  >
                    <span
                      data-v-ea58f736=""
                      class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      style={{ marginRight: "6rem" }}
                    >
                      ฝาก
                    </span>
                  </div>
                  <div
                    onClick={handleWithdraw}
                    data-v-ea58f736=""
                    id="affiliate-advance-tab"
                    class={Class_Withdraw}
                  >
                    <span
                      data-v-ea58f736=""
                      class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      style={{}}
                    >
                      ถอน
                    </span>
                  </div>
                  <div
                    onClick={handleBonus}
                    data-v-ea58f736=""
                    id="affiliate-advance-tab"
                    class={Class_Bonus}
                  >
                    <span
                      data-v-ea58f736=""
                      class="font-normal &lt;sm:text-base sm:text-base md:text-lg"
                      style={{ marginLeft: "6rem" }}
                    >
                      โบนัส
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center mb-4">
            {/* <span class="text-gray-500">( 5 รายการล่าสุด )</span> */}
          </div>
          <div class="w-full my-2 min-h-[356px] flex flex-col items-center">
            <div class="text-base mx-auto text-secondary flex flex-col justify-center items-center">
              {active === "deposit" ? (
                <h1>ฝาก</h1>
              ) : active === "withdraw" ? (
                <h1> ถอน</h1>
              ) : active === "bonus" ? (
                <h1>โบนัส</h1>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
