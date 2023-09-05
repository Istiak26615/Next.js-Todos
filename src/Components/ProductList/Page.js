"use client"

import React, { useEffect, useState } from "react";
import ListView from "@/Components/ListView/Page";
import CardView from "@/Components/CardView/Page";

function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSortNameDrawerOpen, setIsSortNameDrawerOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [listView, setListView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const toggleView = () => {
    setListView(!listView);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSortName = () => {
    setIsSortNameDrawerOpen(!isSortNameDrawerOpen);
  };

  async function getData(sortType = "") {
    const sortParam = sortType ? `?sort=${sortType}` : "";
    const data = await fetch(`https://fakestoreapi.com/products${sortParam}`).then(
      (res) => res.json()
    );

    setAllProducts(data);
    toggleDrawer()
  }

  const sortDataByName = (order) => {
    if (allProducts) {
      const sortedData = [...allProducts];
      sortedData.sort((a, b) => {
        if (a.title && b.title) {
          return order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else {
          return 0; // Handle cases where a.title or b.title is undefined
        }
      });
      setAllProducts(sortedData);
      toggleSortName();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="m-8">
      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Card View
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={listView}
              className="sr-only peer"
              onClick={toggleView}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              List View
            </span>
          </label>{" "}
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="relative inline-block text-left p-2">
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
            </div>
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
                    getData("asc");
                  }}
                  className={`${
                    isDrawerOpen === "price" ? "bg-white" : ""
                  } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left`}
                  role="menuitem"
                >
                  Ascending
                </button>
                <button
                  onClick={() => {
                    getData("desc");
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
          </div>
          <div className="relative inline-block text-left p-2">
            <div className="">
              <button
                type="button"
                onClick={() => toggleSortName()}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Sorting by Name
              </button>
            </div>
            <div
              className={`${
                isSortNameDrawerOpen ? "block" : "hidden"
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
                  onClick={() => sortDataByName("asc")}
                  className={`${
                    isDrawerOpen === "name" ? "bg-white" : ""
                  } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left`}
                  role="menuitem"
                >
                  Ascending
                </button>
                <button
                  onClick={() => sortDataByName("desc")}
                  className={`${
                    isDrawerOpen === "name" ? "bg-white" : ""
                  } block px-4 py-2 text-sm text-gray-700 bg-white w-full text-left mb-8`}
                  role="menuitem"
                >
                  Descending
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-black ${listView ? "block" : "hidden"} w-full`}>
        <ListView allProducts={allProducts} itemsPerPage={10} />
      </div>
      <div className={`text-black ${listView ? "hidden" : "block"}`}>
        <CardView allProducts={allProducts} itemsPerPage={10} />
      </div>
    </div>
  );
}

export default Page;
