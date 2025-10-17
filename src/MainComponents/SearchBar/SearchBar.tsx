"use client";
import React, { useState } from "react";
import { Search } from "lucide-react"; 

const SearchBar = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const categories = [
    { id: "all", name: "All" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "books", name: "Books" },
    { id: "home", name: "Home & Living" },
    { id: "toys", name: "Toys" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Search for "${query}" in category "${category}"`);
  };

  return (
    <div className="lg:w-3xl md:w-xl w-32  justify-center pb-4 pt-5 ">
      
      <form
        onSubmit={handleSearch}
        className="flex items-stretch w-[700px] h-[40px] bg-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400 transition-all"
      >
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#f3f3f3] text-gray-800 text-sm text-center border-r border-gray-300 focus:outline-none hover:bg-gray-200 cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

      
        <input
          type="text"
          placeholder="Search Amazon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 text-sm outline-none"
        />

      
        <button
          type="submit"
          className="bg-[#febd69] hover:bg-[#f3a847] w-[45px] flex items-center justify-center transition-colors"
        >
          <Search className="text-black w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
