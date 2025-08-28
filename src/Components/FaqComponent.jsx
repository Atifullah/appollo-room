import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const FaqComponent = ({ data }) => {
  const [faqLists, setFaqLists] = useState(
    data.map((item, index) => ({ ...item, showAns: index === 0 }))
  );

  const openAnswer = (id) => {
    setFaqLists(
      faqLists.map((faq) =>
        faq.id === id
          ? { ...faq, showAns: !faq.showAns }
          : { ...faq, showAns: false }
      )
    );
  };

  return (
    <>
      {faqLists.map((faq) => (
        <div
          key={faq.id}
          className="relative shadow rounded-md overflow-hidden mt-4 dark:shadow-gray-700"
        >
          <h2 className="text-base font-medium">
            <button
              type="button"
              onClick={() => openAnswer(faq.id)}
              className="flex justify-between items-center p-5 w-full font-medium text-left bg-gray-50 dark:bg-slate-800 dark:drop-shadow-[1px_1px_0_rgba(2555,255,255,0.2)]"
            >
              <span
                className={`${
                  faq.showAns
                    ? "text-green-600 dark:text-green-600"
                    : "text-black dark:text-white"
                }`}
              >
                {faq.que}
              </span>
              <span className="ms-auto">
                {faq.showAns ? (
                  <MdOutlineKeyboardArrowUp className="text-green-600" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="dark:text-white" />
                )}
              </span>
            </button>
          </h2>
          {faq.showAns && (
            <p className="text-slate-400 p-5 whitespace-pre-line">{faq.ans}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default FaqComponent;
