"use client"
import HeaderLayout from '@/app/components/HeaderLayout'
import SideBarLayout from '@/app/components/SideBarLayout'
import { NavbarBrand, NavbarContent } from '@nextui-org/react'
import React from 'react'

const NewArrival = () => {
  return (
    <div>
        <SideBarLayout>
            <HeaderLayout>
            <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">
              New Arrival Page
            </p>
          </NavbarBrand>
          {/* <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent> */}
        </NavbarContent>
            </HeaderLayout>
            
        </SideBarLayout>

    </div>
  )
}

export default NewArrival