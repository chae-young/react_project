import { useMemo } from "react";
import { useReducer } from "react";
import { ProductDispatchContext, ProductStateContext } from "./context";

const productReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_STATUS': 
            return {...state, status: !state.status}
        default:
            return state
    }
}

export function ProductProvider({children}) {
    const [state, dispatch] = useReducer(productReducer, {
        items: [
            {id: 1, name: '티셔츠', status: true},
            {id: 2, name: '바지', status: true} 
        ]
    })

    const memoizedState = useMemo(() => state, [state])

    return (
        <ProductStateContext.Provider value={memoizedState}>
            <ProductDispatchContext.Provider value={dispatch}>
                {children}
            </ProductDispatchContext.Provider>
        </ProductStateContext.Provider>
    )
}