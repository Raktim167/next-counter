"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);

  const handleAdd = () => {
    if (inputValue === "") {
      showToast();
    } else {
      const value = parseInt(inputValue, 10) || 0;
      const newCount = count + value;
      setCount(newCount);
      setHistory([...history, `Added ${value}`]);
      setInputValue("");
    }
  };

  const handleSubtract = () => {
    if (inputValue === "") {
      showToast();
    } else {
      const value = parseInt(inputValue, 10) || 0;
      const newCount = count - value;
      setCount(newCount);
      setHistory([...history, `Subtracted ${value}`]);
      setInputValue("");
    }
  };

  const showToast = () => {
    if (inputValue === "") {
      toast.warn("Kindly enter a value!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h1 className="text-3xl mb-4 font-bold">Counter App</h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 mb-4 border border-red-500 rounded outline-none focus:border-red-700"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 mr-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
      <button
        onClick={handleSubtract}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Subtract
      </button>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">History</h2>
        <ul>
          {history.map((step, index) => (
            <li key={index} className="mb-1">
              {step}
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Counter;
