import Logo from "./Logo";
import Nav from "./Nav";
import NavIcon from "./NavIcon";
function Header() {
    return ( 
        <div className="bg-primary h-[100px] flex justify-evenly items-center relative z-50">
            <Logo />
            <Nav />
            <div className="hidden md:flex">
                <NavIcon />
            </div>
        </div>
     );
}

export default Header;