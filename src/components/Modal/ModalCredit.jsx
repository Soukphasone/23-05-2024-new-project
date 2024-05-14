function ModalCredit({closeModal }) {
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
      style={{ zIndex: 1000 }}
      role="dialog"
      aria-modal="true"
      id="cash-back-history-modal"
      title=""
    >
      <div
        class="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
        aria-hidden="true"
      ></div>
      <div
        class="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
        tabindex="0"
      >
        <div data-v-e339f85c="">
          <div data-v-e339f85c="" class="text-center text-primary">
            ใส่โค้ดรับเครดิตฟรี
          </div>
          <div data-v-e339f85c="" class="w-full flex justify-between mt-3">
            <div
              data-v-d0ca5c5c=""
              data-v-e339f85c=""
              class="input-sm base-input-wrapper w-full mb-1 input-primary pr-4"
              id="code"
              rounded="5px"
              background="black"
            >
              <span data-v-d0ca5c5c="" class="text-sm mb-1 relative"></span>
              <div
                data-v-d0ca5c5c=""
                class="main-input !bg-[var(--input-bg)] text-[var(--primary)] w-full rounded-[10px] flex items-center"
              >
                <div
                  data-v-d0ca5c5c=""
                  class="flex justify-center -mt-2 items-center pointer-events-none"
                ></div>
                <input
                  data-v-d0ca5c5c=""
                  class="w-full h-full text-base !bg-[var(--input-bg)] text-primary outline-none placeholder-[var(--input-placeholder)]"
                  type="text"
                  placeholder="ใส่โค้ดที่นี่"
                  autocomplete=""
                  maxlength="false"
                />
              </div>
              <div data-v-d0ca5c5c="" class=""></div>
            </div>
            <button
              data-v-9dec3a92=""
              data-v-e339f85c=""
              id="btn01"
              type="submit"
              disabled="true"
              class="base-button-wrapper v-rounded btn-primary btn-lg btn-primary cursor-pointer <sm:text-base sm:text-base md:text-lg"
            >
              <div data-v-9dec3a92="" class="flex justify-center items-center">
                ตรวจสอบ
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCredit;
