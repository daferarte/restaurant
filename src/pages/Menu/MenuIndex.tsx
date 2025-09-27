import { getMenu } from "../../services/menu.service";
import { formatCOP } from "../../utils/currency";

export default function MenuIndex(){
    const items =getMenu();
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">Todos los platos</h2>
            <p className="text-neutral-600">Total: {items.length} items</p>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it)=>(
                    <li key={it.id} className="border rounded-xl p-4">
                        <img src={it.image} alt={it.nombre} className="w-full h-40 object-cover rounded-lg mb-3"/>
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold">{it.nombre}</h3>
                            <span className="text-brand-700">{formatCOP(it.precio)}</span>
                        </div>
                        <p className="text-sm text-neutral-600">{it.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}