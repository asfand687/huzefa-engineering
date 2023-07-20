import React from 'react'



const Footer = () => {
  const handleShare = async () => {
    console.log("it kinda works")
    try {
      if(navigator.share) {
        await navigator.share({
          title: "MDN",
          text: "Learn web development on MDN!",
          url: "https://developer.mozilla.org"
        })
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }
  return (
    <footer>
      <div className="w-full bg-[#0065E7] text-white py-20 relative">
        <div className="w-[clamp(270px,80vw,1300px)] mx-auto relative z-50 flex flex-col md:flex-row md:justify-between">
          <article className="w-full max-w-[450px] flex flex-col items-center md:items-start gap-y-8">
            <h2 className="text-3xl md:text-5xl text-center md:text-left font-extrabold max-w-[220px] md:max-w-[340px]">Get In Touch With Us</h2>
            <ul className="text-center md:text-left text-xl md:text-2xl font-semibold flex flex-col gap-y-8">
              <li>
                +1 (403) 401-2929
              </li>
              <li 
                onClick={handleShare}
                className='cursor-pointer'
              >
                info@huzefaengineering.com
              </li>
              <li>
                47 Pleasant St, Suite 2-S, Northampton, MA 01060
              </li>
            </ul>
          </article>
          <article className="w-full md:max-w-[380px] flex flex-col gap-y-8 py-8 md:py-0">
            <div className="flex justify-center items-center gap-x-8">
              <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.12991 36.4875C7.12991 33.5638 7.10053 30.6402 7.14643 27.7165C7.16112 26.8576 6.86366 26.6091 6.04473 26.6384C4.57579 26.6932 3.10685 26.6639 1.6379 26.6493C0.46826 26.6384 0.0532871 26.2839 0.0349253 25.1381C-0.000574072 22.8857 -0.000574072 20.632 0.0349253 18.3771C0.0532871 17.1894 0.429709 16.866 1.60119 16.8586C3.13072 16.8586 4.6621 16.8276 6.19163 16.8696C6.90774 16.8879 7.14644 16.6503 7.15379 15.9304C7.17398 13.8016 7.04913 11.6746 7.29518 9.54579C7.92682 4.08216 12.2529 0.126055 17.7614 0.0547904C19.9024 0.0273808 22.0452 0.0419992 24.188 0.0547904C25.3136 0.0547904 25.6992 0.381877 25.7212 1.51663C25.764 3.61559 25.764 5.71638 25.7212 7.81899C25.701 8.91537 25.2842 9.28083 24.1825 9.29911C22.8366 9.31921 21.4888 9.29911 20.1429 9.31738C18.136 9.35575 17.3593 10.125 17.328 12.0967C17.3078 13.405 17.3409 14.7152 17.3115 16.0236C17.2987 16.6503 17.53 16.8879 18.1708 16.8787C20.0676 16.8513 21.9644 16.8641 23.863 16.8787C25.0657 16.8787 25.409 17.2095 25.4146 18.3844C25.428 20.6381 25.428 22.8918 25.4146 25.1455C25.4146 26.2857 25.0216 26.6566 23.8483 26.6658C22.0727 26.6786 20.299 26.6658 18.5234 26.6658C17.328 26.6658 17.3225 26.6658 17.3225 27.901C17.3225 33.5644 17.3225 39.2291 17.3225 44.8949C17.3366 45.2614 17.3169 45.6284 17.2638 45.9913C17.1536 46.5998 16.7864 46.9689 16.129 46.9707C13.529 46.9707 10.9271 46.989 8.32711 46.9707C7.46961 46.9707 7.15746 46.5285 7.15379 45.4669C7.12441 42.4555 7.12991 39.4715 7.12991 36.4875Z" fill="white"/>
              </svg>

              <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.3557 22.2273C47.3557 26.8065 47.4402 30.0974 47.3337 33.3738C47.2254 36.694 46.3679 39.7986 44.0965 42.386C41.7095 45.1142 38.61 46.4591 35.0791 46.7076C28.2375 47.19 21.383 46.9305 14.5341 46.8666C11.9634 46.841 9.41115 46.3842 7.10491 45.1215C3.20671 42.9909 1.11164 39.6012 0.643419 35.2925C-0.0616732 28.8037 0.276181 22.2803 0.342283 15.7732C0.349796 14.4349 0.435017 13.0981 0.597514 11.7696C1.44399 5.0817 6.28964 0.571916 13.0633 0.208284C19.6735 -0.157177 26.2728 0.0255548 32.8756 0.0840285C35.5785 0.105956 38.252 0.511615 40.6757 1.83275C44.6125 3.97618 46.6323 7.40785 47.1703 11.744C47.6569 15.6618 47.2382 19.5978 47.3557 22.2273ZM43.0499 23.4826C43.0169 20.0436 43.1344 16.601 42.8553 13.1675C42.6019 10.0611 41.5461 7.4115 38.6559 5.80531C36.9483 4.85694 35.046 4.59746 33.1474 4.57736C26.4215 4.51158 19.6882 4.28134 12.966 4.72537C8.86949 4.99581 5.97566 7.55586 5.17141 11.5065C4.86477 13.0067 4.80418 14.5398 4.80418 16.0492C4.76378 21.9824 4.62056 27.9266 4.94373 33.8525C5.21181 38.7223 8.04503 41.7191 12.9274 42.2874C15.3934 42.5761 17.8741 42.4939 20.3474 42.5797C24.7542 42.7351 29.1611 42.5304 33.5587 42.4208C34.814 42.3926 36.0585 42.1827 37.2531 41.7976C40.5582 40.725 42.6276 37.741 42.8589 33.8891C43.0756 30.419 43.0205 26.9508 43.0499 23.4826Z" fill="white"/>
                <path d="M23.8857 35.6105C17.1727 35.6105 11.6384 30.1011 11.6788 23.4626C11.7098 20.2443 13.0175 17.1686 15.317 14.9056C17.6165 12.6425 20.7215 11.3755 23.9555 11.3804C30.6061 11.3914 36.1716 16.8623 36.0945 23.4863C36.0082 30.7352 30.1838 35.6379 23.8857 35.6105ZM23.9004 31.1427C24.9123 31.1497 25.9155 30.9578 26.8527 30.578C27.7898 30.1982 28.6423 29.638 29.3614 28.9295C30.0805 28.2211 30.6519 27.3783 31.0429 26.4495C31.4339 25.5208 31.6368 24.5243 31.6399 23.5174C31.6423 22.5096 31.4448 21.5113 31.0587 20.5797C30.6726 19.6481 30.1054 18.8015 29.3898 18.0884C28.6741 17.3754 27.8241 16.81 26.8884 16.4246C25.9527 16.0393 24.9498 15.8415 23.9372 15.8427C22.9178 15.8301 21.9061 16.0195 20.961 16.3999C20.0159 16.7803 19.1564 17.3441 18.4324 18.0584C17.7085 18.7727 17.1347 19.6233 16.7444 20.5605C16.3541 21.4977 16.1551 22.5029 16.1591 23.5174C16.1605 24.5246 16.3623 25.5217 16.7529 26.4509C17.1435 27.3801 17.7152 28.2232 18.4349 28.9314C19.1546 29.6397 20.0081 30.1991 20.9462 30.5774C21.8842 30.9556 22.8883 31.1453 23.9004 31.1354V31.1427Z" fill="white"/>
                <path d="M36.4837 13.8655C36.1013 13.8762 35.7206 13.8114 35.3635 13.6748C35.0064 13.5382 34.68 13.3325 34.4033 13.0697C34.1265 12.8068 33.9048 12.492 33.7511 12.1434C33.5973 11.7948 33.5144 11.4194 33.5073 11.0387C33.4706 9.49281 34.811 8.12599 36.3974 8.0931C37.1693 8.08279 37.9141 8.37638 38.4695 8.90994C39.0249 9.44349 39.346 10.1738 39.3629 10.9419C39.3722 11.3234 39.3045 11.7029 39.1639 12.058C39.0233 12.4131 38.8125 12.7365 38.544 13.0091C38.2756 13.2817 37.9549 13.4979 37.6011 13.645C37.2472 13.7921 36.8672 13.8671 36.4837 13.8655Z" fill="white"/>
              </svg>

              <svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.018 19.5813C29.2214 16.4895 32.0051 14.9583 35.481 14.7993C41.9259 14.5051 46.3658 16.8696 47.5887 23.8755C47.8613 25.466 47.994 27.077 47.9853 28.6904C47.9688 34.3843 47.9614 40.0782 48 45.772C48 46.6857 47.754 46.9872 46.8157 46.9653C44.245 46.9068 41.6744 46.9141 39.1037 46.9653C38.2444 46.9817 38.0957 46.6181 38.0993 45.8689C38.1251 41.6369 38.1103 37.4048 38.1122 33.171C38.1122 31.2541 38.0993 29.3336 37.7449 27.4406C37.3024 25.0413 35.8941 23.6873 33.7843 23.5448C30.7657 23.3383 28.8266 24.4255 27.993 26.812C27.5911 27.9979 27.3918 29.2425 27.4036 30.494C27.3951 35.5483 27.3914 40.6038 27.3926 45.6606C27.3926 46.9397 27.3926 46.9397 26.1367 46.9397C23.5972 46.9397 21.0578 46.9141 18.5184 46.9543C17.7013 46.9671 17.3836 46.735 17.3854 45.878C17.4075 36.1324 17.4075 26.3868 17.3854 16.6412C17.3854 15.8116 17.6535 15.5247 18.4982 15.5448C20.9746 15.5911 23.4528 15.5911 25.9328 15.5448C26.8014 15.5284 27.0676 15.8555 27.0345 16.6631C26.9831 17.5439 27.018 18.4228 27.018 19.5813Z" fill="white"/>
                <path d="M1.5943 31.2341C1.5943 26.4258 1.5943 21.6176 1.5943 16.8093C1.5943 15.5759 1.59431 15.5704 2.79701 15.5686C5.3346 15.5686 7.87403 15.607 10.4116 15.5485C11.3664 15.5266 11.6015 15.8792 11.5996 16.7655C11.5751 26.4429 11.5751 36.1209 11.5996 45.7995C11.5996 46.6492 11.3609 46.9817 10.4557 46.9635C7.88504 46.9123 5.3144 46.905 2.74375 46.9635C1.78159 46.9872 1.56492 46.6364 1.57043 45.7501C1.60348 40.9096 1.5943 36.0746 1.5943 31.2341Z" fill="white"/>
                <path d="M6.53547 0.0346948C7.29472 0.0284096 8.0477 0.172051 8.7508 0.457306C9.4539 0.74256 10.0932 1.16376 10.6316 1.69653C11.17 2.2293 11.5969 2.86306 11.8876 3.56111C12.1782 4.25917 12.3269 5.00767 12.3249 5.76328C12.3066 8.8697 9.68634 11.4736 6.57586 11.4827C3.38274 11.4937 0.843318 8.9373 0.843318 5.71212C0.832724 4.96471 0.97261 4.22276 1.25475 3.53002C1.5369 2.83728 1.95559 2.20778 2.4861 1.67864C3.01662 1.14949 3.64822 0.73142 4.34369 0.449077C5.03915 0.166735 5.78441 0.0258381 6.53547 0.0346948Z" fill="white"/>
              </svg>
            </div>
            <div className="md:py-11 relative">
              <input
                type="text"
                className="w-full bg-transparent font-bold border border-white rounded-lg outline-none py-6 px-8 pr-24 md:pr-8 placeholder:text-white"
                placeholder='Enter Email address to subscribe'
              />
              <div className="absolute top-[50%] right-4 translate-y-[-50%]">
                <svg width="27" height="1s8" viewBox="0 0 47 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M46.0925 18.8144C46.0925 19.4348 45.8195 20.0056 45.3231 20.4774L28.842 36.9583C28.3207 37.43 27.7995 37.6285 27.2286 37.6285C25.9875 37.6285 25.0443 36.7351 25.0443 35.494C25.0443 34.9232 25.2677 34.3274 25.665 33.9302L31.1999 28.2711L39.5894 20.651L33.5579 21.0482H2.1843C0.893642 21.0482 -7.62939e-06 20.105 -7.62939e-06 18.8144C-7.62939e-06 17.5237 0.893642 16.6051 2.1843 16.6051H33.5579L39.5646 16.9775L31.1999 9.3575L25.665 3.72316C25.2428 3.30119 25.0443 2.73031 25.0443 2.13462C25.0443 0.91838 25.9875 0 27.2286 0C27.7995 0 28.3455 0.223388 28.8916 0.744632L45.3231 17.1513C45.8195 17.6477 46.0925 18.2186 46.0925 18.8144Z" fill="#F6FBFF"/>
                </svg>
              </div>
            </div>
            <div className="text-center md:text-left text-base md:text-lg">
              <p>Copyright 2023 <strong>Huzefa Engineering</strong></p>
              <p>All rights reserved.</p>
            </div>
          </article>
        </div>
      </div>
    </footer>
  )
}

export default Footer








