import { createContext, useContext } from "react"

export const CartContext = createContext("")

export default function CartContextProvider({children}){
    return (
        <CartContext.Provider value={{
            cart,
            setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext(){
    const context = useContext(CartContext)
    if(context === undefined || context === null){
        throw new Error("not working")
    }
    return context
}