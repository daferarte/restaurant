import { NavLink } from "react-router-dom";

const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 600,
};

const activeStyle: React.CSSProperties = {
    background: "#f0f0f0",
}

export default function Header(){
    return(
        <header style={{borderBottom: "1px solid #eee", padding: "16px 0"}}>
            <div style={{maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 24}}>
                <div style={{fontSize: 20, fontWeight:800}}>
                    Mi Restaurante
                </div>
                <nav style={{display:"flex", gap:8}}>
                    <NavLink to="/" style={({isActive})=>({...linkStyle, ...(isActive ? activeStyle:{})})}>
                        Inicio
                    </NavLink>
                    <NavLink to="/menu" style={({isActive})=>({...linkStyle, ...(isActive ? activeStyle:{})})}>
                        Menu
                    </NavLink>
                    <NavLink to="/carrito" style={({isActive})=>({...linkStyle, ...(isActive ? activeStyle:{})})}>
                        Carrito
                    </NavLink>

                </nav>
            </div>
        </header>
    );
}

