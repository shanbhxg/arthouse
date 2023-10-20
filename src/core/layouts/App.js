import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function AppLayout({children}) {
    return (
        <>
        <Meta/>
        <Navbar/>
        {children}
        <Footer/>
        <div className="footer-end">
            Made with <a href = "https://github.com/shanbhxg"> ❤️</a>
        </div>
        </>
    )
}