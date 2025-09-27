import type { MenuItem } from "../types/menu";

export const MENU_DATA: MenuItem[] = [
    {
        id: "ent-001",
        nombre: "Ajiaco clasico",
        descripcion: "Sopa clasica colombiana",
        precio: "12500",
        categoria: "entradas",
        etiquetas: ["vegetariano", "destacado"],
        disponible: true,
        image: "/img/menu/ajiaco.webp"
    },
    {
        id:"pf-001",
        nombre: "Bandeja Paisa",
        descripcion: "Plato clasico colombiano",
        precio: "22500",
        categoria: "platos fuertes",
        etiquetas: ["destacado",],
        disponible: true,
        image: "/img/menu/bandeja.jpg"
    },
    {
        id:"pf-002",
        nombre: "Carne a la plancha",
        descripcion: "200 gr de carne de res",
        precio: "20500",
        categoria: "platos fuertes",
        etiquetas: ["destacado",],
        disponible: true,
        image: "/img/menu/carne.webp"
    },
    {
        id:"ent-002",
        nombre: "Ensalada",
        descripcion: "200 gr de ensalada",
        precio: "11500",
        categoria: "entradas",
        etiquetas: ["vegetariano", "destacado"],
        disponible: true,
        image: "/img/menu/ensalada.jpg"
    },

];