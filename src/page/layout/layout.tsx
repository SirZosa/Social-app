import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Outlet } from "react-router";
export default function Layout(){
    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}