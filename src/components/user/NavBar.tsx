import { Link } from "react-router";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import VIEWS from "@/misc/VIEWS";


const NavBar = () => {

    return (
        <NavigationMenu className="w-screen">
            <NavigationMenuList className="flex justify-around w-screen">
                <NavigationMenuItem>
                    <Link to={VIEWS.INDEX}>Home</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={VIEWS.GALLERY}>Gallery</Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={VIEWS.LOGIN}>Login</Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

export default NavBar;