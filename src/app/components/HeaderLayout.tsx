"use client";
import React, { ReactNode } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
// import { AvatarIcon} from "@nextui-org/react";
import { FcShop } from "react-icons/fc";
import { Toaster, toast } from 'sonner'


import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const HeaderLayout = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const sign_Out = () => {
    
    signOut()
    toast.error('Logged out successfully');
  };

  return (
    <>
    <div className="h-fit pb-1">
      <Navbar isBordered >
        <div className=" items-center mr-6">
          <Link href="/">
            <Avatar
              radius="md"
              icon={<FcShop size={35} />}
              classNames={{
                base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                icon: "text-black/100 ",
              }}
            />
          </Link>
        </div>
        {children}
        <NavbarContent
          as="div"
          className="items-center max-w-screen-xl"
          justify="end"
        >
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="search"
          />
          <div>{session?.user?.name || session?.user?.name}</div>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform bg-gradient-to-br from-[#FFB457] to-[#FF705B]"
                color="secondary"
                name=""
                size="sm"
                src={session?.user?.image ? session?.user?.image : undefined}
                // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session?.user?.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => sign_Out()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      </div>
    </>
  );
};

export default HeaderLayout;
