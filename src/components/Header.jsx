import React, { useState, useEffect } from 'react'
import Modal from './Modal/ModalNav'
import { DataLocalStorage} from "../helper";
import Constant from '../constant';
function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [dataFromLogin, setDataFromLogin] = useState({});

  useEffect(() => {
    const userData = DataLocalStorage();
    if (userData) {
      setDataFromLogin(userData);
    }
  }, []);
  const NextToHome=()=>{
window.location = (Constant.AFTER_LOGIN)
  }
  return (
    <header data-v-3c88d514="" className="w-full z-10">
    <div data-v-3c88d514="" className="w-full mx-auto">
      <div
        data-v-4b602944=""
        data-v-3c88d514=""
        className="top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50"
      >
        <div
          data-v-4b602944=""
          className="w-full mx-auto base-container flex items-center justify-between"
        >
          <div
            data-v-4b602944=""
            className="flex space-x-4 items-center justify-center w-full &lt;sm:justify-around"
          >
           <a 
           onClick={NextToHome}>
           <img
              data-v-4b602944=""
              className="cursor-pointer object-contain h-auto max-h-[80px] max-w-[120px]"
              src={
                  `data:image/jpeg;base64,${dataFromLogin?.info?.configLobby?.s_logo}`
              }
              alt="center menu"
            />
           </a>
            <div
              data-v-4b602944=""
              className="walletWrapper px-4 flex items-center py-2 text-xs cursor-pointer"
            >
              <div data-v-4b602944="" className="">
                <div
                  data-v-4b602944=""
                  className="text-[var(--balance-wrapper-text1)] justify-between flex gap-x-2"
                >
                  <p data-v-4b602944="">เงิน</p>
                  <p
                    data-v-4b602944=""
                    className="text-right flex justify-center items-center"
                  >
                    <span
                      data-v-4b602944=""
                      className="nuxt-icon nuxt-icon--fill"
                    >
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M76.9458 67.02C76.9458 74.6368 74.8257 80.4083 70.5854 84.3345C66.4236 88.1822 60.0632 90.263 51.5041 90.5771V100H42.1991V90.5771H23V8.12721H42.1991V0H51.5041V8.36278C66.2666 9.77621 73.6478 16.2937 73.6478 27.9152C73.6478 32.5481 72.627 36.3565 70.5854 39.3404C68.5438 42.3243 65.3636 44.6407 61.0448 46.2897V46.6431C66.5414 48.1351 70.5461 50.53 73.0589 53.828C75.6502 57.0475 76.9458 61.4448 76.9458 67.02ZM33.8363 42.874H47.4994C52.5249 42.874 56.3333 41.6961 58.9246 39.3404C61.5159 36.9062 62.8115 33.3726 62.8115 28.7397C62.8115 24.5779 61.3981 21.5548 58.5713 19.6702C55.7444 17.7856 51.2685 16.8433 45.1437 16.8433H33.8363V42.874ZM49.7373 81.861C60.7307 81.861 66.2273 76.8355 66.2273 66.7844C66.2273 61.3663 64.4998 57.4009 61.0448 54.8881C57.6682 52.3753 52.2894 51.119 44.9081 51.119H33.8363V81.861H49.7373Z"
                          fill="#FFD15C"
                        ></path>
                      </svg>
                    </span>{" "}
                   {dataFromLogin?.balance?.amount || 0}
                  </p>
                </div>
                <div
                  data-v-4b602944=""
                  className="goldLine my-1 h-[0.5px]"
                ></div>
           
              </div>
            </div>
          </div>
          
          <span
            data-v-4b602944=""
            className="nuxt-icon nuxt-icon--fill cursor-pointer text-primary text-[23px]"
         onClick={()=>{setOpenModal(true)}}
         >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90.625 25H9.375C5.92344 25 3.125 22.2016 3.125 18.75C3.125 15.2984 5.92344 12.5 9.375 12.5H90.625C94.0766 12.5 96.875 15.2984 96.875 18.75C96.875 22.2016 94.0766 25 90.625 25Z"
                fill="white"
              ></path>
              <path
                d="M90.625 87.5H9.375C5.92344 87.5 3.125 84.7016 3.125 81.25C3.125 77.7984 5.92344 75 9.375 75H90.625C94.0766 75 96.875 77.7984 96.875 81.25C96.875 84.7016 94.0766 87.5 90.625 87.5Z"
                fill="white"
              ></path>
              <path
                d="M90.625 56.25H9.375C5.92344 56.25 3.125 53.4516 3.125 50C3.125 46.5484 5.92344 43.75 9.375 43.75H90.625C94.0766 43.75 96.875 46.5484 96.875 50C96.875 53.4516 94.0766 56.25 90.625 56.25Z"
                fill="white"
              ></path>
            </svg>
          </span>
          {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header