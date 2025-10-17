import React from "react";
import Sidebar from "@/ElectronicsComponents/Sidebar/Sidebar";
import SecondNavBar from "@/MainComponents/SecondNavBar/SecondNavBar";
import Electronic from "@/ElectronicsComponents/ElectronicNavBar/ElectronicNavBar";

const Page = () => {
  return (
    <>
      {/* Top Navbars */}
      <SecondNavBar />
      <Electronic />

      {/* Main Content + Sidebar */}
      <div className="flex mt-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 p-4">
          {/* Replace this with your product grid or content */}
          <h1 className="text-2xl font-bold mb-4">Electronics Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example product cards */}
            <div className="border p-4">Product 1</div>
            <div className="border p-4">Product 2</div>
            <div className="border p-4">Product 3</div>
            <div className="border p-4">Product 4</div>
          </div>
        </div>
      </div>
   )
}

export default Electronic;