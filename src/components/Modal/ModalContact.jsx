import React from 'react'

function ModalContact({closeModal}) {
    const _CloseModal = (value)=>{
        closeModal(value)
    }
  return (
    <div
        className="vfm vfm--fixed vfm--inset"
        role="dialog"
        aria-modal="true"
        style={{zIndex: '1000'}}
      >
        <div
          className="vfm__content vfm--outline-none absolute bottom-[80px] right-0 p-4 bg-[transparent] vfm-bounce-back"
          tabindex="0"
          style={{transform: 'translateY(0px)'}}
        >
          <div className="flex text-white items-center gap-y-2 justify-center flex-col-reverse">
            <div 
            onClick={()=>_CloseModal("close")}
            className="w-[44px] h-[44px] cursor-pointer grid place-content-center rounded-full bg-card-tertiary">
              <span className="nuxt-icon nuxt-icon--fill">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8323 10.0164L19.6199 2.22859C20.1267 1.72202 20.1267 0.902971 19.6199 0.396405C19.1133 -0.110162 18.2943 -0.110162 17.7877 0.396405L9.99989 8.18425L2.21228 0.396405C1.70548 -0.110162 0.88667 -0.110162 0.380103 0.396405C-0.126701 0.902971 -0.126701 1.72202 0.380103 2.22859L8.16771 10.0164L0.380103 17.8043C-0.126701 18.3108 -0.126701 19.1299 0.380103 19.6364C0.632556 19.8891 0.964494 20.0161 1.29619 20.0161C1.62789 20.0161 1.95959 19.8891 2.21228 19.6364L9.99989 11.8486L17.7877 19.6364C18.0404 19.8891 18.3721 20.0161 18.7038 20.0161C19.0355 20.0161 19.3672 19.8891 19.6199 19.6364C20.1267 19.1299 20.1267 18.3108 19.6199 17.8043L11.8323 10.0164Z"
                    fill="#8E8E8E"
                  ></path>
                </svg>
              </span>
            </div>
            <img
              src="/assets/lg_files/xchat.d72f1957.webp"
              className="w-[3rem] rounded-full cursor-pointer"
            />
            <img
              src="/assets/lg_files/line.d8d641cf.png"
              className="w-[3rem] rounded-full cursor-pointer"
            />
            <img
              src="/assets/lg_files/telegram.4fe72a0b.png"
              className="w-[3rem] rounded-full cursor-pointer"
            />
            <div></div>
          </div>
        </div>
      </div>
  )
}

export default ModalContact