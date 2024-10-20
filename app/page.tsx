"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Tailwind</i> CSS.", "&amp; React", "Typescript"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="lg:h-128 container mx-auto px-4 py-10 lg:flex lg:items-center lg:space-x-8">
        <div className="w-full text-center lg:-mt-8 lg:w-1/2 lg:text-left">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">tech blog</span> for community{" "}
            <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>{" "}
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source blog and templates to <br className="hidden lg:block" />{" "}
            bootstrap your new apps, projects or landing sites!
          </p>{" "}
          <div className="mt-6 rounded-lg border bg-transparent focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-20 dark:border-gray-700 dark:focus-within:border-primary lg:w-2/3">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required={true}
                className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200 lg:h-12"
              />

              <button
                type="submit"
                className="m-1 flex w-full transform items-center justify-center rounded-lg bg-primary p-2 text-white transition-colors duration-300 hover:bg-primary/70 focus:bg-primary/70 focus:outline-none dark:bg-gray-800 lg:h-12 lg:w-12 lg:p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>{" "}
        <div className="mt-4 w-full lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="mx-auto h-full w-full max-w-md"
            width={500}
            height={500}
          />
        </div>
      </section>

      <section className="body-font text-gray-600 dark:text-gray-50">
        <div className="container mx-auto px-5 py-24">
          <h2 className="mb-4 pb-8 text-center text-4xl font-bold">
            About Our Services
          </h2>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-200 bg-opacity-75 px-8 pb-24 pt-16 text-center shadow-lg dark:bg-gray-900">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest">
                  WEB DEVELOPMENT
                </h2>
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
                  Full-Stack Solutions
                </h1>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-50">
                  Building robust, scalable, and responsive web applications
                  using modern tech stacks like React, Node.js, and more.
                </p>
                <a className="inline-flex items-center hover:text-indigo-700">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none">
                  <span className="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    2.4K Views
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    32 Comments
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-200 bg-opacity-75 px-8 pb-24 pt-16 text-center shadow-lg dark:bg-gray-900">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest">
                  MOBILE DEVELOPMENT
                </h2>
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
                  Cross-Platform Apps
                </h1>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-400">
                  Crafting seamless mobile experiences for both Android and iOS
                  using frameworks like React Native and Flutter.
                </p>
                <a className="inline-flex items-center hover:text-indigo-700">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none">
                  <span className="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.8K Views
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    18 Comments
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="relative h-full overflow-hidden rounded-lg bg-gray-200 bg-opacity-75 px-8 pb-24 pt-16 text-center shadow-lg dark:bg-gray-900">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest">
                  CLOUD SOLUTIONS
                </h2>
                <h1 className="title-font mb-3 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
                  Scalable Infrastructure
                </h1>
                <p className="mb-3 leading-relaxed text-gray-700 dark:text-gray-400">
                  Implementing and managing cloud environments with AWS, Azure,
                  and GCP to ensure your applications scale effortlessly.
                </p>
                <a className="inline-flex items-center hover:text-indigo-700">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div className="absolute bottom-0 left-0 mt-2 flex w-full justify-center py-4 text-center leading-none">
                  <span className="mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    3.1K Views
                  </span>
                  <span className="inline-flex items-center text-sm leading-none text-gray-400 dark:text-gray-500">
                    <svg
                      className="mr-1 h-4 w-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    24 Comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
