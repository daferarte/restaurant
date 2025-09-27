import { MENU_DATA } from "../data/menu";
import { Categoria, Etiqueta, MenuItem } from "../types/menu";

type Query = {
    categoria?: Categoria;
    etiquetas?: Etiqueta[];
    q?: string;
    soloDisponibles?: boolean;
}

export function getMenu(): MenuItem[]{
    return MENU_DATA;
}

export function queryMenu(params: Query = {}): MenuItem[]{
    const { categoria, etiquetas, q, soloDisponibles}=params;

    return MENU_DATA.filter((item)=>{
        if (soloDisponibles && !item.disponible) return false;
        if (categoria && item.categoria !== categoria) return false;
        if (etiquetas && etiquetas.length > 0){
            const tieneTodas = etiquetas.every((tag)=>item.etiquetas.includes(tag));
            if (!tieneTodas) return false;
        }

        if (q && q.trim()){
            const needle = q.toLowerCase();
            const hayMatch =
                item.nombre.toLowerCase().includes(needle) ||
                item.descripcion.toLowerCase().includes(needle);
            if (!hayMatch) return false;
        }

        return true;
    });
}