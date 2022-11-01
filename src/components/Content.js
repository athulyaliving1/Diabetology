import React, { useEffect } from "react";
// import Titleimage from "../Assest/image5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container py-16 mx-auto lg:py-20">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto"
      >
        <div className="relative lg:w-1/2">
          <img
            src="https://athulyaliving.com/images/diabetologist-1.webp"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="btn-sub-heading">
            Diabetologist Consultations is <span> </span>
            <span className="text-pink-500 capitalize">
              now at your doorstep!
            </span>
          </h5>
          <p className="mt-8 mb-8 btn-sub-para">
            <span className="font-bold">Athulya</span> is one of the largest
            home healthcare service providers in Chennai. Providing
            diabetologist consultations for seniors at the comfort of home. Why
            travel to hospital when the seniors can have consultations at home.
            Athulya is here to make doctor consultations easier with the top
            diabetologist in Chennai.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
