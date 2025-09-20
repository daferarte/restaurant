import { Outlet } from "react-router-dom";
import  Header  from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
    return(
        <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1 px-4 py-6 max-w-6xl mx-auto">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}