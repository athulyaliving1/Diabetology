import React, { useEffect } from "react";
// import sample from "../Assest/image3.jpg";
// import Image1 from "../Assest/image4.jpg";
// import Image2 from "../Assest/image6.jpg";
// import Image3 from "../Assest/image1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Grid() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <div div class="  relative bg-zinc-100  ">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center container mx-auto">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="btn-sub-heading pt-5  ">
              Benefits Of Home <span> </span>
              <span className="text-pink-500 capitalize">
                Diabetologist Consultations
              </span>
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Personalized medical care
                    </h5>
                    <p class="btn-sub-para">
                      Seniors who find it difficult to visit the doctor's office
                      can receive excellent medical treatment in the convenience
                      of their own home.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Round-the-clock care
                    </h5>
                    <p class="btn-sub-para">
                      Seniors have full access to top-notch home health care
                      services at Athulya from various medical specialties.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                      Bond with the Specialist
                    </h5>
                    <p class="btn-sub-para ">
                      Athulya makes sure the same specialist consults the senior
                      on subsequent visits in order to foster a strong bond.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-aos="flip-right"
            class="mt-10 md:-mx-12 relative lg:mt-0 lg:col-start-1 "
          >
            <img
              src="https://athulyaliving.com/images/diabetologist-2.webp"
              alt="illustration Intrinsic size:	400 × 600 px"
              class="relative mx-auto shadow-lg rounded w-auto"
            />
          </div>
        </div>

        <div class="container mx-auto">
          <div>
            <h4 class="btn-sub-heading pt-5 ">
              Diabetic Test Packages at <span> </span>
              <span className="text-pink-500 capitalize">Affordable Costs</span>
            </h4>
          </div>
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center container mx-auto">
            <div class="mt-10 md:-mx-12 relative lg:mt-0 lg:col-start-1 ">
              <ul class="mt-10 mb-14">
                <li>
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="h-6 w-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                        On appointments Monday to Sunday
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="h-6 w-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                        No collection charges
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="h-6 w-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                        Reports on same day
                      </h5>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-sky-800 text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="h-6 w-6"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="ml-4">
                      <h5 class="md:text-xl xl:text-2xl text-lg  leading-6 text-sky-800  font-bold capitalize font-Helvetica  ">
                        Tele consultation with discount price
                      </h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-aos="flip-right" class="lg:col-start-2 md:pl-20">
              <img
                src="https://athulyaliving.com/images/Price-Tag.webp"
                alt="illustration Intrinsic size:	400 × 600 px"
                class="relative mx-auto shadow-lg rounded w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] container mx-auto ">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center container mx-auto">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="btn-sub-heading pt-5  ">
              Why Choose <span> </span>
              <span className="text-pink-500 capitalize">Athulya?</span>
            </h4>
            <ul class="mt-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0"></div>
                  <div class="ml-4">
                    <p class="btn-sub-para">
                      Athulya Home Healthcare have been providing a
                      comprehensive care for the seniors for nearly a decade
                      now. Our services are tailored to suit the seniors’
                      requirements in every way possible. With our expert team
                      we ensure the best service reaches the senior citizens.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10">
                <div class="flex">
                  <div class="ml-4">
                    <p class="btn-sub-para">
                      If ‘diabetologist near me’ has been topping your search
                      then Athulya is the right choice. Avail the best
                      diabetologist consultations for your seniors from Athulya.
                      Our well-experienced diabetologists will take care of your
                      loved ones with the best diabetic management.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-aos="flip-right"
            class="mt-10 md:-mx-12 relative lg:mt-0 lg:col-start-1 "
          >
            <img
              src="https://athulyaliving.com/images/diabetologist-3.webp"
              alt="illustration Intrinsic size:	400 × 600 px"
              class="relative mx-auto shadow-lg rounded w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grid;
