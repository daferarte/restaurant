import { NavLink } from "react-router-dom";

const base = "px-3 py-2 rounded-lg font-semibold hover:bg-neutral-100 transition";
const active = "bg-neutral-100"

export default function Header(){
    return(
        <header className="border-b border-neutral-200">
            <div className="max-w-6xl mx-auto flex items-center gap-6 px-4 py-4">
                <div className="font-display text-xl font-bold text-brand-600">
                    Mi Restaurante
                </div>
                <nav className="flex flex-wrap gap-1">
                    {[
                        { to: "/", label: "Inicio"},
                        { to: "/menu", label: "Menú"},
                        { to: "/carrito", label: "Carrito"},
                        { to: "/sobre", label: "Sobre"},
                        { to: "/contacto", label: "Contacto"},
                    ].map((item)=>(
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>`${base} ${isActive ? active : ""}`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

