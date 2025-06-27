import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

export const PopUp = ({ orderPopup, setorderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);
    setorderPopup(false); // Close popup after submission
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-[320px] bg-white dark:bg-gray-700 dark:text-white rounded-md shadow-md p-4 relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold">Order Now</h1>
              <IoMdClose
                onClick={() => setorderPopup(false)}
                className="text-2xl cursor-pointer hover:text-red-600"
              />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md outline-none resize-none dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
