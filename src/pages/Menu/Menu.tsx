import { NavLink, Outlet } from "react-router-dom";

const base = 
    "px3 py2 rounded-lg font-medium hover:bg-neutral-100 transition";
const active = "bg-neutral-100 text-brand-700";

export default function Menu(){
    return(
        <section className="space-y-5">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold">Menú</h1>
                <p className="text-neutral-600">
                    Explora nuestras categorias. elige una para filtrar los platos
                </p>
                <nav className="flex flex-wrap gap-2">
                    {[
                        { to:".", label: "Todos"},
                        { to:"entradas", label: "Entradas"},
                        { to:"platos-fuertes", label: "Platos fuertes"},
                        { to:"postres", label: "Postres"},
                    ].map((item)=>(
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "."}
                            className={({isActive})=> `${base} ${isActive ? active : ""}`}
                    >
                        {item.label}
                    </NavLink>
                ))}
                </nav>
            </header>

            <div className=" border rounded-xl p-4">
                <Outlet/>
            </div>

            
        </section>
    );
}