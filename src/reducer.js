import { getAuth, signOut } from "firebase/auth";
export const initialState = {
    basket: [],
    user: {
        isLogin: false,
        name: ''
    }
}

export const getTotalPrice = (basket) => {
    return basket.reduce((initValue, product) => {
        return initValue + product.price;
    }, 0)
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            const idRemove = state.basket.findIndex(
                (productRemove) => productRemove.id === action.id
            )
            const newBasket = [...state.basket]
            if (idRemove >= 0) {
                newBasket.splice(idRemove, 1)
            } else {
                console.warn(
                    `Can't remove product(id: ${idRemove} because it is not in the basket)`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "LOG_IN":
            return {
                ...state,
                user: { name: action.user, isLogin: true }
            }
        case "LOG_OUT":
            const auth = getAuth();
            signOut(auth).then(() => {
                return {
                    ...state,
                    user:{
                        name: '',
                        isLogin: false
                    }
                }
            }).catch((error) => {
                console.log(error);
            });
        default:
            return state;
    }
}
export default reducer;