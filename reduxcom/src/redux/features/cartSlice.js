import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    carts: []

}
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const itemindex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (itemindex >= 0) {
                state.carts[itemindex].qnty += 1
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },


        //remove items
        removetocart: (state, action) => {
            const data = state.carts.filter((ele) => ele.id !== action.payload)
            state.carts = data
        },


        //remove single item
        removesingleitem: (state, action) => {
            const itemindex_Dec = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[itemindex_Dec].qnty >= 1) {
                state.carts[itemindex_Dec].qnty -= 1
            }
        },
        //emptyall
        emptycart:(state,action)=>{
            state.carts=[]
        }




    }
})

export const { addtocart, removetocart, emptycart,removesingleitem } = cartSlice.actions
export default cartSlice.reducer