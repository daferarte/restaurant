import { Outlet } from "react-router-dom";
import  Header  from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
    return(
        <div style={{minHeight: "100dvh", display:"flex", flexDirection:"column"}}>
            <Header />
            <main style={{flex:1, padding:"24px", maxWidth: 1200, margin: "0 auto"}}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}