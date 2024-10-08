import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3b7663c6-851a-47b0-9d88-841cf410f21c"); // Add your access key here

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        // Show toast if the submission is successful
        if (res.success) {
            toast.success("Submitted!", {
                position: toast.TOP_RIGHT,
            });
        } else {
            toast.error("Submission failed. Please try again.");
        }
    };

    return (
        <div className="p-4 mx-auto max-w-xl bg-gray-100 font-[sans-serif] rounded-md shadow-md">
            <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact Us</h1>
            <form onSubmit={onSubmit} className="mt-8 space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-blue-500"
                    required
                    maxLength="50"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-blue-500"
                    required
                    maxLength="50"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-blue-500"
                    maxLength="50"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm pt-3 outline-blue-500"
                    required
                    maxLength="100"
                ></textarea>
                <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full"
                >
                    Submit
                </button>
            </form>

            <ToastContainer />
        </div>
    );
};

export default ContactForm;
