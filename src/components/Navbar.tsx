import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a href="/" className="ml-2 font-bold text-xl flex">
              Hirvana
            </a>
          </NavigationMenuItem>

          {/* Mobile Menu */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Hirvana</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href=""
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <ChatBubbleIcon className="mr-2 w-5 h-5" />
                    GitHub
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {/* <a
              href="https://chat.whatsapp.com/J6BzHTTOploAnSUnEViRv6"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <ChatBubbleIcon className="mr-2 w-5 h-5" />
              HELLO!
            </a> */}

            <ModeToggle />

            {/* Join the Waitlist Button (Desktop only) */}
            <a
              href="https://forms.gle/fUZoogSfLStuZKdZA" // Replace this with your actual waitlist Google Form link
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Join the Waitlist
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
