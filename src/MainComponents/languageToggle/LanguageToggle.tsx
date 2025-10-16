"use client";
import React, { useState, useRef, useEffect } from "react";

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "NP", name: "Nepali", flag: "🇳🇵" },
    { code: "HI", name: "Hindi", flag: "🇮🇳" },
    { code: "FR", name: "French", flag: "🇫🇷" },
    { code: "DE", name: "German", flag: "🇩🇪" },
  ];

  const handleSelect = (code: string) => {
    setLanguage(code);
    setOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLang = languages.find((lang) => lang.code === language);

  return (
    <div className="relative " ref={dropdownRef} >
      {/* Button */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 cursor-pointer px-2 py-1 "
      >
        {/* Flag */}
        <span className="text-2xl drop-shadow-sm">{activeLang?.flag}</span>

        <span className="text-white text-sm font-semibold">{activeLang?.code}</span>

        <svg
          className={`w-4 h-4 text-white transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-2">
            <p className="text-xs text-gray-500 mb-1 px-2">Select Language</p>
            {languages.map((lang) => (
              <label
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition ${
                  language === lang.code
                    ? "bg-blue-50 border border-blue-400 shadow-sm"
                    : "hover:bg-gray-100"
                }`}
              >
                {/* Flag emoji with background for visibility */}
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-lg ${
                    language === lang.code
                      ? "bg-blue-100 shadow-md"
                      : "bg-gray-100"
                  }`}
                >
                  {lang.flag}
                </div>

                {/* Radio + Text */}
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="language"
                    checked={language === lang.code}
                    onChange={() => handleSelect(lang.code)}
                    className="accent-blue-600 cursor-pointer"
                  />
                  <span
                    className={`text-sm ${
                      language === lang.code
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {lang.name}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
