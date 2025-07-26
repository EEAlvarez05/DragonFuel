import Logo from "./Logo";
import Nav from "./Nav";
import NavIcon from "./NavIcon";
function Header() {
    return ( 
        <div className="bg-primary h-[50px] flex justify-evenly items-center fixed w-full z-50">
            <Logo />
            <Nav />
            <div className="hidden md:flex">
                <NavIcon />
            </div>
        </div>
     );
}

export default Header;