import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, IntlProvider } from "react-intl";

const messages = {
  en: {
    title: "FarmLand India",
    lione: "My groups",
    litwo: "Create",
  },
  mr: {
    title: "थेट शेतातून",
    lione: "माझं समूह",
    litwo: "नवीन समूह तयार करा",
  },
};

export default function Navbar({ setLanguage, language }) {
  const t = (id) => <FormattedMessage id={id} />;

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "mr" : "en"));
  };

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <div className="leftheaditems flex  justify-evenly bg-[#6C5F5B] rounded-b-2xl">
          <h2 className="text-white px-8 w-60 my-4 ">
            {" "}
            <FormattedMessage id="title" />
          </h2>

          <div className="flex w-full">
            <nav className="navbar text-white justify-start flex my-2 gap-2 ">
              <ul className="navul flex gap-2">
                <li className="px-2 py-2 text-white">
                  <Link to="/home">
                    {" "}
                    <FormattedMessage id="lione" />
                  </Link>
                </li>
                <li className="px-2 py-2 ">
                  <Link to="/central">
                    {" "}
                    <FormattedMessage id="litwo" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="lang flex justify-end mx-4 my-4">
          <button type="button" onClick={toggleLanguage}>
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div> </div>
      
      </IntlProvider>
    </>
  );
}
