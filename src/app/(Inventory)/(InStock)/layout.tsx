"use client";
import HeaderLayout from "@/app/components/HeaderLayout";
import SideBarLayout from "@/app/components/SideBarLayout";
import { NavbarContent, NavbarBrand } from "@nextui-org/react";

export default function InStockLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <SideBarLayout>
         <HeaderLayout>
           <NavbarContent justify="start">
             <NavbarBrand className="mr-4">
               <p className="hidden sm:block font-bold text-inherit">
                 In Stock Page
               </p>
             </NavbarBrand>
            
           </NavbarContent>
         </HeaderLayout>
        {children}
       </SideBarLayout>
   
      </section>
    )
  }