import React from "react";

function ChangePassword({closeModal}) {
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
      style={{Zindex: '1000'}}
      role="dialog"
      aria-modal="true"
      id=""
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
        <p class="text-center text-primary text-base">เปลี่ยนรหัสผ่านเข้าเกม</p>
        <p class="text-center mt-1 text-secondary text-xs">
          กรุณากรอกรหัสผ่านใหม่และกดยืนยัน
        </p>
        <div
          data-v-d0ca5c5c=""
          class="input-sm base-input-wrapper w-full mb-1 input-primary mt-2"
          id="password"
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
              placeholder="กรุณากรอกรหัสผ่านใหม่"
              autocomplete=""
              maxlength="false"
            />
          </div>
          <div data-v-d0ca5c5c="" class=""></div>
        </div>
        <div
          data-v-d0ca5c5c=""
          class="input-sm base-input-wrapper w-full mb-1 input-primary"
          id="password-com"
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
              placeholder="กรุณายืนยันรหัสผ่านใหม่"
              autocomplete=""
              maxlength="false"
            />
          </div>
          <div data-v-d0ca5c5c="" class=""></div>
        </div>
        <div></div>
        <div class="flex gap-x-4 mt-8">
          <button
          onClick={closeModal}
            data-v-9dec3a92=""
            id="btn01"
            type="submit"
            class="base-button-wrapper v-rounded btn-primary btn-md btn-secondary cursor-pointer w-full &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div data-v-9dec3a92="" class="flex justify-center items-center">
              ปิด
            </div>
          </button>
          <button
            data-v-9dec3a92=""
            id="btn01"
            type="submit"
            class="base-button-wrapper v-rounded btn-primary btn-md btn-primary cursor-pointer w-full &lt;sm:text-base sm:text-base md:text-lg"
          >
            <div data-v-9dec3a92="" class="flex justify-center items-center">
              ยืนยัน
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
