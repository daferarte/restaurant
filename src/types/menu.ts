export type Categoria = 
| "entradas"
| "platos fuertes"
| "postres"
| "bebidas";

export type Etiqueta = 
| "vegano"
| "vegetariano"
| "sinGluten"
| "picante"
| "destacado"
| "nuevo";

export interface MenuItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: Categoria;
    etiquetas: Etiqueta[];
    disponible: boolean;
    image: string;
}
