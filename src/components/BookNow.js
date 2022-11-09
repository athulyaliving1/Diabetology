import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { API_URL1 } from "../Helper/URL";


const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object({
    name: Yup.string().required().min(3).max(15),
    email: Yup.string()
        .email("That doesn't look like a valid email")
        .required("This field is required."),
    number: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10)
        .max(10)
        .required(),

    textarea: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter text only")
        .min(10)
        .max(40)
        .required(),

    location: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter text only")
        .min(3)
        .max(40)
        .required(),


    checkbox: Yup.string().required("A radio option is required"),
}).required();

function Booknow() {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    const [location, setLocation] = useState("");
    const [checkbox, setCheckbox] = useState("");
    const [loadingInProgress, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const sendDataToAPI = async () => {
        setLoading(true);
        if (!name || !number || !email || !textarea || !location) {
            return Swal.fire({
                icon: "error",
                title: "Error!",
                text: "All fields are required.",
                showConfirmButton: true,
            });
        }

        await axios.post(API_URL1, {
            name,
            number,
            email,
            textarea,

            location,
            checkbox,
        });

        setLoading(false);

        navigate("/tkpage");

        // Swal.fire({
        //   icon: "success",
        //   title: "Our Message Has Been Sent!",
        //   text: "Our Team Will Contact You Shortly  ",
        //   showConfirmButton: false,
        //   timer: 2000,
        // });

        setTimeout(function () {
            window.location.reload(1);
        }, 2000);
    };

    return (
        <div className="mt-3 mb-5 text-justify ">
            {/* <ToastContainer /> */}

            <div className=" bg-zinc-300 rounded-2xl font-Poppins">
                {loadingInProgress ? (
                    <div className="flex justify-center h-56 gap-4">
                        <div className="grid content-center">
                            <div
                                class="w-12 h-12 rounded-full animate-spin
              border-x-8 border-solid border-pink-500 border-t-transparent"
                            ></div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <form
                            onSubmit={handleSubmit(sendDataToAPI)}
                            class="p-2 flex flex-col justify-center  "
                        >
                            <div class="flex flex-col">
                                <label className="hidden" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    {...register("name")}
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                                />
                                <p className="font-semibold text-pink-500 font-Poppins">
                                    {errors.name?.message}
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <label className="hidden" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    {...register("email")}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                                />
                                <p className="font-semibold text-pink-500 font-Poppins">
                                    {errors.email?.message}
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <label className="hidden" htmlFor="number">
                                    number
                                </label>
                                <input
                                    {...register("number")}
                                    onChange={(e) => setNumber(e.target.value)}
                                    name="number"
                                    type="number"
                                    id="number"
                                    placeholder="Enter Your Mobile number"
                                    className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                                />
                                <p className="font-semibold text-pink-500 font-Poppins">
                                    {errors.number?.message}
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <label className="hidden" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    {...register("location")}
                                    name="location"
                                    onChange={(e) => setLocation(e.target.value)}
                                    id="location"
                                    type="text"
                                    placeholder="Enter Your Location"
                                    className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                                />
                                <p className="font-semibold text-pink-500 font-Poppins">
                                    {errors.location?.message}
                                </p>
                            </div>
                            <div class="flex flex-col">
                                <label className="hidden" htmlFor="textarea">
                                    Message:
                                </label>
                                <input
                                    {...register("textarea")}
                                    name="textarea"
                                    onChange={(e) => setTextarea(e.target.value)}
                                    id="textarea"
                                    placeholder="Enter Your Message"
                                    className="block w-full px-3 py-3 m-0 mb-1 font-semibold text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-pink-500 focus:outline-none "
                                />
                                <p className="font-semibold text-pink-500 font-Poppins">
                                    {errors.textarea?.message}
                                </p>
                            </div>

                            <div class="mt-3">
                                <label class="inline-flex items-center">
                                    <input
                                        {...register("checkbox")}
                                        onChange={(e) => setCheckbox(e.target.value)}
                                        type="radio"
                                        class="form-radio"
                                        name="checkbox"
                                        value="Diabetic"
                                    />
                                    <span class="ml-2 font-Poppins font-semibold">Diabetic</span>
                                </label>
                                <label class="inline-flex items-center ml-3">
                                    <input
                                        {...register("checkbox")}
                                        onChange={(e) => setCheckbox(e.target.value)}
                                        type="radio"
                                        class="form-radio"
                                        name="checkbox"
                                        value="Non-Diabetic "
                                    />
                                    <span class="ml-1 font-Poppins font-semibold">Non-Diabetic</span>
                                </label>
                                <p className="font-bold text-pink-500 font-Poppins">
                                    {errors.checkbox?.message}
                                </p>
                            </div>


                            <div className="flex justify-center md:py-1">
                                <button
                                    class=" bg-pink-600  text-white font-bold py-3 px-6 rounded-lg mt-3   hover:ring-4 ring-sky-700 transition ease-in-out duration-100"
                                    type="submit"
                                >
                                    Sumbit
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Booknow;