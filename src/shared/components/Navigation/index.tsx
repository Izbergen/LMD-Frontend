import * as React from "react"
import {Link} from "react-router-dom"

import { cn } from "@/shared/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Introduction",
        href: "#home",
        description:
            "An introduction to LMD and what it does.",
    },
    {
        title: "How It Works?",
        href: "#how-it-works",
        description:
            "A section that explains the process of partnering with LMD for delivery services.",
    },
    {
        title: "Features",
        href: "#features",
        description:
            "Highlights of the main features like fast delivery, smart routing, and eco-friendly vehicles.",
    },
    {
        title: "Partners",
        href: "#partners",
        description: "A section that showcases existing partners or invites potential partners to join.",
    },
]

export default function Navigation() {
    return (
        <NavigationMenu className={''}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                        <Link className={navigationMenuTriggerStyle()} to={'/orders'}>
                            Orders
                        </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"