"use client"; // Assuming this is a comment

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"; // Removed unused import
// import { useRouter } from "next/router"; // Corrected import

function Navbar(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSendClicked, setIsSendClicked] = useState(false);
  const [isMobileNavClicked, setIsMobileNavClicked] = useState(false);
  const divRef = useRef(null);
  const router = useRouter();
  const searchParams = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleModal = () => {
    setIsSendClicked(!isSendClicked);
  };

  const toggleMobileNav = () => {
    setIsMobileNavClicked(!isMobileNavClicked);
  };

  const handleClickOutsideForSendClicked = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsSendClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideForSendClicked);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideForSendClicked);
    };
  }, []);

  return (
    <div className="min-h-full">
      <nav className="border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="/gracenote-logo.svg"
                  alt="Your Company"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  {props.navMenu.map((menu) => (
                    <div key={menu.link}>
                      <p
                        className={`${
                          searchParams === menu.link
                            ? "border-b-4 border-zinc-950 text-zinc-800"
                            : ""
                        } text-zinc-400 px-3 py-5 text-sm font-medium`}
                      >
                        <Link href={menu.link}>{menu.name}</Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div
                  className="cursor-pointer"
                  onClick={toggleDrawer}
                >
                  <p className="relative border mx-3 rounded px-2 py-1 text-gray-400 hover:text-zinc-450 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    Feedback
                  </p>
                </div>
                <button
                  type="button"
                  className="relative rounded-full p-1 text-zinc-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <img
                    className="h-8 w-8"
                    src="/notification-icon.svg"
                    alt="Your Company"
                  />
                </button>
                {/* Profile dropdown */}
                <div className="relative ml-3">
                  <button
                    type="button"
                    className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  <div
                    className={`absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      isDrawerOpen ? "block" : "hidden"
                    }`}
                    ref={divRef}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <div className="w-full max-w-md mx-auto p-2 rounded-md border-b">
                      <textarea
                        rows="4"
                        className="w-full min-h-[3rem] px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
                        placeholder="Ideas to improve this page"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-around">
                      <div className="flex">
                        <img
                          className="h-6 w-6 m-1"
                          src="/verysatisfied.svg"
                          alt="Your Company"
                        />
                        <img
                          className="h-6 w-6 m-1"
                          src="/satisfied.svg"
                          alt="Your Company"
                        />
                        <img
                          className="h-6 w-6 m-1"
                          src="/dissatisfied.svg"
                          alt="Your Company"
                        />
                        <img
                          className="h-6 w-6 m-1"
                          src="/verydissatisfied.svg"
                          alt="Your Company"
                        />
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            toggleDrawer();
                            toggleModal();
                          }}
                          className="my-3 px-2 py-2 bg-black text-white rounded-md focus:outline-none "
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      isSendClicked ? "block" : "hidden"
                    } flex flex-col items-center py-4`}
                    role="menu"
                    ref={divRef}
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <img
                      className="h-8 w-8"
                      src="/check-circle.svg"
                      alt="Checked"
                    />
                    <div>
                      <h5 className="text-zinc-950">Thanks for your feedback!</h5>
                    </div>
                    <div>
                      <p className="text-zinc-500">We will be in touch soon.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button 
                  onClick={toggleMobileNav}
                  type="button"
                  class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5"></span>
                  <span class="sr-only">Open main menu</span>
                  {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`md:hidden ${isMobileNavClicked ? "block" : "hidden"}`} id="mobile-menu">
          <div className={`border-t border-gray-700 pb-3 pt-4`}>
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <img
                  className="h-8 w-8"
                  src="/notification-icon.svg"
                  alt="Your Company"
                />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {props.navMenu.map((menu) => (
                <div key={menu.link}>
                  <Link
                    href={menu.link}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {menu.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </div>
  );
}

export default Navbar;
