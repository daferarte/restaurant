export interface CartItem {
    id: string;
    nombre: string;
    precio: number; //COP
    imagen: string;
    qty: number; //cantidad
}

export interface CartState {
    items: CartItem[];
}

export type CartAction =
| {type: "ADD_ITEM"; payload: CartItem}         //agregar o incrementar
| {type: "REMOVE_ITEM"; payload: {id:string}}   //eliminar por id
| {type: "CHANGE_QTY"; payload: {id:string; qty: number}} //setea qty
| {type: "CLEAR"};                              // vacia