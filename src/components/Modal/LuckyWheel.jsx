import React from 'react'

function LuckyWheel({closeModal}) {
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
      className="vfm__overlay vfm--overlay vfm--absolute vfm--inset vfm--prevent-none"
      aria-hidden="true"
    ></div>
    <div
      className="vfm__content vfm--outline-none flex flex-col bg-white rounded-lg max-w-[540px] mx-4"
      tabindex="0"
    >
      <div data-v-e339f85c="">
        <div data-v-e339f85c="" className="w-full flex justify-between mt-3">
        
          <button
            data-v-9dec3a92=""
            data-v-e339f85c=""
            id="btn01"
            type="submit"
            // disabled={codeCupon === ''  ? true : false}
            className="base-button-wrapper v-rounded btn-primary btn-lg btn-primary cursor-pointer <sm:text-base sm:text-base md:text-lg"
          >
            <div data-v-9dec3a92="" className="flex justify-center items-center">
              ยืนยัน
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LuckyWheel