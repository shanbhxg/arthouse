import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <div className="nav-container border-b-2 border-gray-200">
            <Link href="/">
                <Logo />
            </Link>
            <div className="nav-menu border-b-2 border-gray-200">
                <div className="nav-link black"><a className="login">Profile</a></div>
                <div className="nav-link black"><a className="products">Products</a></div>
                <div className="nav-link black"><a className="FAQ">FAQ</a></div>
                <div className="nav-link black"><a className="instagram">Contact</a></div>
            </div>
        </div>
    )
}
