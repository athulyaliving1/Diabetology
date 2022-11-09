import React, { useEffect } from "react";
// import sample from "../Assest/image3.jpg";
// import Image1 from "../Assest/image4.jpg";
// import Image2 from "../Assest/image6.jpg";
// import Image3 from "../Assest/image1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Booknow from "./BookNow";




const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};




function Grid() {
  const [details, setDetails] = React.useState(false);

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  const handleDetailsClose = () => {
    setDetails(false);
  };

  const handleDetailsOpen = () => {
    setDetails(true);
  };


  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <div className="">
      <div div class="  relative bg-zinc-100  pb-5 md:pb-10 ">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center container mx-auto">
          <div class="lg:col-start-2 md:pl-20">
            <h4 class="btn-sub-heading pt-5 ">
              Diabetic Test Packages at <span> </span>
              <span className="text-pink-500 capitalize">Affordable Costs</span>
            </h4>
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

        <div class="container mx-auto  mb-10 mt-4 md:mt-8">
          <div class="grid place-items-center   md:grid md:grid-cols-2   gap-5  ">
            <div className="max-w-sm px-6 pt-6 pb-2 ">
              <img
                src="https://res.cloudinary.com/drywqd3hf/image/upload/v1667889161/Price-tag-_2_1_wlluad.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 "
              />
              <div className="flex flex-col justify-between p-6 space-y-8 ">
                <div className="space-y-2">
                  <h2 className="text-center btn-sub-heading">
                    Diabetic Test
                  </h2>
                  <p className="text-center btn-sub-para">
                    Providing comprehensive screening tests for all diabetes complications.
                  </p>
                </div>
                <button
                  onClick={handleDetailsOpen}
                  onChange={handleFullWidthChange}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide text-white bg-pink-500 rounded-md"
                >
                  Book Now
                </button>


                <div>
                  <BootstrapDialog
                    onClose={handleDetailsClose}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    aria-labelledby="customized-dialog-title"
                    open={details}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={handleDetailsClose}
                      className
                    >
                      <h1 className="flex justify-center p-2 font-sans text-xl font-semibold md:text-xl xl:text-3xl text-sky-800 md:p-5 ">
                        Sumbit Your Details
                      </h1>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <Booknow />

                    </DialogContent>
                  </BootstrapDialog>
                </div>

              </div>
            </div>
            <div className="max-w-sm px-6 pt-6 pb-2 text-gray-900 ">
              <div
                
               
              >
                <img
                  src="https://res.cloudinary.com/drywqd3hf/image/upload/v1667889160/Price-tag-_1_mugr3w.png"
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 "
                />
              </div>
              <div className="flex flex-col justify-between p-6 space-y-8 ">
                <div className="space-y-2">
                  <h2 className="text-center btn-sub-heading">
                    Non-Diabetic  Test
                  </h2>
                  <p className="text-center btn-sub-para">
                    Simple and customizable features to meet your testing needs.
                  </p>
                </div>
                <button
                  onClick={handleDetailsOpen}
                  onChange={handleFullWidthChange}
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide text-white bg-pink-500 rounded-md "
                >
                  Book Now
                </button>
                <div>
                  <BootstrapDialog
                    onClose={handleDetailsClose}
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    aria-labelledby="customized-dialog-title"
                    open={details}
                  >
                    <BootstrapDialogTitle
                      id="customized-dialog-title"
                      onClose={handleDetailsClose}
                      className
                    >
                      <h1
                        value={maxWidth}
                        onChange={handleMaxWidthChange}
                        className="flex justify-center p-2 font-sans text-xl font-semibold underline md:text-xl xl:text-3xl text-sky-800 md:p-5"
                      >
                        Sumbit your Details
                      </h1>
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <Booknow />

                    </DialogContent>
                  </BootstrapDialog>
                </div>
              </div>
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
