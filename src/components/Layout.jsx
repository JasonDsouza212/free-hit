import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import BackToTopButton from "./BackToTop";
import DarkMode from "./DarkMode";

export default function Layout() {
    return (
        <>
            <Outlet />
            <Footer />
            <DarkMode />
            <BackToTopButton />
        </>
    )
}