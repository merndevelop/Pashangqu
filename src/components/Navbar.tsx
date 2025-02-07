"use client";
import React, { useState } from "react";
// import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logonav from "../../public/images/logo-nav.png";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  
  const navMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Cosmetics",
      link: "/cosmetic",
    },
    {
      id: 3,
      title: "Paper",
      link: "/paper",
    },
    {
      id: 4,
      title: "Stationary",
      link: "/stationary",
    },
    {
      id: 5,
      title: "Garments",
      link: "/garments",
    },
    {
      id: 6,
      title: "Contact Us",
      link: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOffCanvas = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 main-nav-bar text-black">
        <div className="nav-logo">
          <figure>
            <Image src={logonav} alt="Pashangqu Logo" objectFit="cover" />
          </figure>
        </div>
        <div className="nav-bar-content">
          {navMenu?.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleOffCanvas}
          className="nav-button border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <GiHamburgerMenu size={20} />
        </button>
      </div>

      <div>
        {isOpen && (
          <div
            id="hs-offcanvas-example"
            className="fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white  text-black"
            role="dialog"
            tabIndex={-1}
            aria-labelledby="hs-offcanvas-example-label"
          >
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-offcanvas-example-label" className="offcanvas-img">
                <figure>
                  <Image src={logonav} alt="Pashangqu Logo" objectFit="cover" />
                </figure>
              </h3>
              <button
                type="button"
                onClick={toggleOffCanvas}
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent  focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-black dark:text-white "
                aria-label="Close"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 font-bold offcanvas-nav-menu">
              {navMenu?.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/*  */}

      {/* <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 main-nav-bar")}>
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <div className="relative flex items-center justify-center nav-logo">
            <figure>
              <Image src={Logo} alt="Pashangqu Logo" objectFit="cover" />
            </figure>
          </div>
        </Link>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Cosmetics"
                href="/"
                src="/images/3.png"
                description="Cosmetics enhance beauty and self-expression through a wide range of products for skin, hair, and personal care."
              />
              <ProductItem
                title="Paper"
                href="/"
                src="/images/2.png"
                description="Paper is a versatile material used for writing, printing, packaging, and creative applications."
              />
              <ProductItem
                title="Stationary"
                href="/"
                src="/images/3.png"
                description="Stationery encompasses essential tools and supplies for writing, organizing, and creative expression."
              />
              <ProductItem
                title="Garments"
                href="/"
                src="/images/8.png"
                description="Garments are clothing items designed for comfort, style, and self-expression across diverse occasions."
              />
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div> */}
    </>
  );
};

export default Navbar;
