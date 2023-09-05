"use client";

import React, { useEffect, useState } from "react";
import ListView from "@/Components/ListView/Page";
import CardView from "@/Components/CardView/Page";

function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [ascProducts, setAscProducts] = useState([]);
  const [desProducts, setDesProducts] = useState([]);

  const [listView, setListView] = useState(false);

  const [selectedOption, setSelectedOption] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSortOptionChange = (option) => {
    console.log("Sorting option selected:", option);
    setSelectedOption(option);
    setSortOrder(null);
  };

  const handleSortOrderChange = (order) => {
    console.log("Sorting order selected:", order);
    setSortOrder(order);
  };

  const toggleView = () => {
    setListView(!listView);
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // get products
  async function getData() {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );

    setAllProducts(data);
    console.log("data", data);
  }
  async function getDescData() {
    const data = await fetch(
      "https://fakestoreapi.com/products?sort=desc"
    ).then((res) => res.json());

    setAllProducts(data);
    console.log("data", data);
    if (data) {
      toggleDrawer();
    }
  }
  async function getAscData() {
    const data = await fetch("https://fakestoreapi.com/products?sort=asc").then(
      (res) => res.json()
    );

    // Function to sort data by name in ascending order
  const sortDataByNameAscending = () => {
    const sortedData = [...allProducts];
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
    setAllProducts(sortedData);
  };

  // Function to sort data by name in descending order
  const sortDataByNameDescending = () => {
    const sortedData = [...allProducts];
    sortedData.sort((a, b) => b.name.localeCompare(a.name));
    setAllProducts(sortedData);
  };

    setAllProducts(data);
    console.log("data", data);
    if (data) {
      toggleDrawer();
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Card View
          </span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={listView} // Set the value to listView
              class="sr-only peer"
              onClick={toggleView} // Call toggleDrawer when the input is clicked
            />

            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              List View
            </span>
          </label>{" "}
        </div>
        <div className="relative inline-block text-left">
          <div className="">
            <button
              type="button"
              onClick={toggleDrawer}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sorting by Price
            </button>

            <button
              type="button"
              onClick={toggleDrawer}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sorting by Name
            </button>
          </div>

          {/* Dropdown menu */}
          <div
            className={`${
              isDrawerOpen ? "block" : "hidden"
            } origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mb-8 z-50`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => {
                  getAscData();
                }}
                className={`${
                  isDrawerOpen === "name" ? "bg-white" : ""
                } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left`}
                role="menuitem"
              >
                Ascending
              </button>
              <button
                onClick={() => {
                  getDescData();
                }}
                className={`${
                  isDrawerOpen === "price" ? "bg-white" : ""
                } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left mb-8`}
                role="menuitem"
              >
                Descending
              </button>
            </div>
          </div>
          {/* Dropdown menu for name*/}
          <div
            className={`${
              isDrawerOpen ? "block" : "hidden"
            } origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 mb-8 z-50`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                onClick={() => {
                  sortDataByNameAscending();
                }}
                className={`${
                  isDrawerOpen === "name" ? "bg-white" : ""
                } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left`}
                role="menuitem"
              >
                Ascending
              </button>
              <button
                onClick={() => {
                  sortDataByNameDescending();
                }}
                className={`${
                  isDrawerOpen === "price" ? "bg-white" : ""
                } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left mb-8`}
                role="menuitem"
              >
                Descending
              </button>
            </div>
          </div>

          {/* Sorting options */}
        </div>
      </div>
      <div className={`text-black ${listView ? "block" : "hidden"} w-full`}>
        {" "}
        {/* {ascProducts?<ListView allProducts={ascProducts} />
        :<>{desProducts?<ListView allProducts={desProducts} />: <ListView allProducts={allProducts} />}</>} */}
        <ListView allProducts={allProducts} />
      </div>
      <div className={`text-black ${listView ? "hidden" : "block"}`}>
        <CardView allProducts={allProducts} />
      </div>
    </div>
  );
}

export default Page;
