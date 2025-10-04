import React, {createContext, useContext, useEffect, useMemo, useReducer} from "react";
import type { CartAction, CartItem, CartState } from "../types/cart";

const STORAGE_KEY = "cart:v1";

// --------- Reducer ------------

function cartReducer(state: CartState, action: CartAction):CartState{
    switch (action.type){
        case "ADD_ITEM": {
            const item = action.payload;
            const idx = state.items.findIndex((it)=> it.id === item.id);
            if(idx >= 0){
                const copy = [...state.items];
                copy[idx] = {...copy[idx], qty: copy[idx].qty + item.qty};
                return {items: copy};
            }
            return { items: [...state.items, item]};
        }
        case "REMOVE_ITEM":{
            return {items: state.items.filter((it)=> it.id !== action.payload.id)};
        }
        case "CHANGE_QTY":{
            const {id, qty} = action.payload;
            if (qty<=0){
                return { items:state.items.filter((it)=> it.id !== id)};
            }
            return{
                items: state.items.map((it)=> (it.id=== id?{...it, qty}:it)),
            };
        }
        case "CLEAR":{
            return { items: []};
        }
        default:
            return state;
    }
}

//------------ selectores y helpers --------------------
function getInitialStage(): CartState{
    try{
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw) as CartState;
    }catch {}
    return { items: []};
}

function calcSubtotal(items: CartItem[]){
    return items.reduce((acc, it)=> acc + it.precio * it.qty, 0);
}

export interface CartContextValue extends CartState{
    addItem: (item: Omit<CartItem, "qty">, qty?:number) => void;
    removeItem: (id: string, qty: number) => void;
    changeQty: (id: string, qty: number) => void;
    clear: ()=> void;
    totalItems: number;
    subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

// -------------- provider --------------
export function CartProvider({children}: {children:React.ReactNode}){
    const [state, dispatch] = useReducer(cartReducer, undefined, getInitialStage);

    // persistencia
    useEffect(()=>{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);

    const subtotal = useMemo(() => calcSubtotal(state.items), [state.items]);

    const totalItems = useMemo(
        () => state.items.reduce((acc, it)=> acc + it.qty, 0),
        [state.items]
    );

    const value: CartContextValue = {
        items: state.items,
        addItem: (item, qty = 1) => {
            dispatch({type:"ADD_ITEM", payload:{...item, qty}});
        },
        removeItem:(id) => dispatch({type: "REMOVE_ITEM", payload: {id}}),
        changeQty:(id, qty) => dispatch({type:"CHANGE_QTY", payload:{id,qty}}),
        clear: () => dispatch({type:"CLEAR"}),
        subtotal,
        totalItems,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;

}

// ---------------- hook --------------

export function useCart(){
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
    return ctx;
}