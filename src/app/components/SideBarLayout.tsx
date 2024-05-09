"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { BiLogoFlask } from "react-icons/bi";
import { BiSolidDashboard } from "react-icons/bi";
import { LuPackageSearch } from "react-icons/lu";
import { BsBoxFill } from "react-icons/bs";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import logo from "../../../public/assets/img4.png";

const SideBarLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex h-full text-sm bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
        <div className="mr-1 hidden md:flex shadow-xl flex-col gap-y-2 backdrop-blur-lg backdrop-saturate-150 bg-background/70 h-screen w-[200px] p-2">
          <div className="flex items-center justify-center">
            <Link href={"/"}>
            <Image
              src={logo}
              height={100}
              style={{ objectFit: "contain" }}
              alt="image"
            />
            </Link>
          </div>
          <p className="underline bg-slate-600 h-1"></p>
          <Listbox aria-label="Navigation" >
            <ListboxItem
              key="dashboard"
              href="/"
              className="my-2 "
              color="primary"
              textValue="dashboard"
            >
              <span className="ml-2 flex items-center">
                <BiSolidDashboard className="mr-2" size={25} />
                Dashboard
              </span>
            </ListboxItem>
            <ListboxItem key="products" color="primary" textValue="products" >
              <Accordion
              className="text-xs"
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
              >
                <AccordionItem
                  key="1"
                  startContent={<LuPackageSearch className="mr-2" size={25} />}
                  
                  aria-label="Product"
                  title="Product"
                >
                  <Listbox aria-label="Actions">
                    <ListboxItem
                      key="Product 1"
                      href="/dashboard/products"
                      startContent={<LuPackageSearch className="mr-2" />}
                      textValue="Product 1"
                    >
                      Product Detail
                    </ListboxItem>
                    <ListboxItem
                      key="Product 2"
                      href="/dashboard/customer"
                      startContent={<LuPackageSearch className="mr-2" />}
                      textValue="Product 2"
                    >
                      Customer
                    </ListboxItem>
                    <ListboxItem
                      key="Product 3"
                      href="/dashboard/ply"
                      startContent={<LuPackageSearch className="mr-2" />}
                      textValue="Product 3"
                    >
                      Plywood
                    </ListboxItem>
                  </Listbox>
                </AccordionItem>
              </Accordion>
            </ListboxItem>
            <ListboxItem
              key="inStock"
              // href="/InStock"
              className="my-2 "
              color="success"
              textValue="InStock"
            >
              <Accordion
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
              >
                <AccordionItem
                  key="1"
                  startContent={<BsBoxFill className="mr-2" size={25} />}
                  className="hover:text-white"
                  aria-label="Product"
                  title="In Stock"
                >
                  <Listbox aria-label="Actions">
                    <ListboxItem
                      key="Product 1"
                      href="/dashboard/Hardware"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 1"
                    >
                      Hardware
                    </ListboxItem>
                    <ListboxItem
                      key="Product 2"
                      href="/dashboard/Plywood"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 2"
                    >
                      Plywoods
                    </ListboxItem>
                    <ListboxItem
                      key="Product 3"
                      href="/dashboard/Sunmica"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 3"
                    >
                      Sunmica
                    </ListboxItem>
                    <ListboxItem
                      key="product 4"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 4"
                    >
                      Wallpaper
                    </ListboxItem>
                    <ListboxItem
                      key="Product 5"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 5"
                    >
                      Veneer
                    </ListboxItem>
                    <ListboxItem
                      key="Product 6"
                      startContent={<BsBoxFill className="mr-2" />}
                      textValue="Product 6"
                    >
                      Glass
                    </ListboxItem>
                  </Listbox>
                </AccordionItem>
              </Accordion>
            </ListboxItem>
            <ListboxItem
              key="NewArrival"
              href="/dashboard/NewArrival"
              className="my-2"
              color="primary"
              textValue="NewArrival"
            >
              <span className="ml-2 flex items-center">
                <BsBoxArrowInDownRight className="mr-2" size={25} />
                New Arrival
              </span>
            </ListboxItem>
          </Listbox>
        </div>
        <main className="h-full max-h-screen flex-1 overflow-y-auto mr-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SideBarLayout;
