import { configureStore } from "@reduxjs/toolkit";
import QuantitySlice from "./AllStoreSlice/AddQuantitySlice";
import PriceAndQuantitySlice from "./AllStoreSlice/PriceAndQuantitySlice";
import PrintSlice from "./AllStoreSlice/PrintSlice";
import ItemViewSlice from "./AllStoreSlice/ItemViewSlice";
import LoginCanteenUserSlice from "./AllStoreSlice/LoginCanteenUserSlice";
import AddProductCanteenSlice from "./AllStoreSlice/AddProductCanteenSlice";
import AllMenuItemsSlice from "./AllStoreSlice/AllMenuItemsSlice";
import canteenIdSlice from "./AllStoreSlice/CanteenIdSlice";    



export const store = configureStore({
    reducer: {
        Quantity: QuantitySlice,
        PriceAndQuantity: PriceAndQuantitySlice,
        PrintData: PrintSlice,
        ItemView: ItemViewSlice,
        LoginCanteenUser: LoginCanteenUserSlice,
        AddProductCanteen: AddProductCanteenSlice,
        allMenuItems: AllMenuItemsSlice,
        canteenId : canteenIdSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
