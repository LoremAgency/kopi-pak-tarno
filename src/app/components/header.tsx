import Image from "next/image";
import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <div
      id="default-carousel"
      className="relative w-[99vw] h-screen"
      data-carousel="slide"
    >
      <div className="relative h-screen overflow-hidden h-screen">
        {[1, 2, 3, 4].map((e, index) => (
          <div
            className="hidden duration-500 ease-in-out"
            data-carousel-item
            suppressHydrationWarning
            key={index}
          >
            <Image
              src={`/assets/header${e}.jpg`}
              className=" object-cover"
              alt="Welcome"
              fill
              priority
            />
          </div>
        ))}
      </div>
      <div
        className="absolute h-screen  top-0 left-0 w-[99vw] z-30 text-white"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      ></div>
      <div className="absolute  top-0 left-0 w-[99vw] z-30 text-white">
        <div
          className=" flex flex-wrap items-center justify-between mx-auto py-4 padding-1 "
          style={{}}
        >
          <Link
            href={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse font-bold text-[20px]"
          >
            KOPI PAK TARNO
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              {["Home", "Product", "Contact"].map((menu, index) => (
                <li key={index}>
                  <Link
                    href={`#${menu.toLowerCase()}`}
                    className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[55%]  left-0 w-[99vw] z-31 text-white">
        <div className="padding-1">
          <span className="jumbotron-text font-bold">
            <div className="m-0 ">Sudut tenang terasa</div>
            <div className="m-0 ">seperti rumah.</div>
          </span>
        </div>
      </div>
    </div>
  );
}
