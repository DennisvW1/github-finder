import React, { ReactNode, createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext({});

type Props = {
    children?: ReactNode
}
export const AlertProvider = ({ children }: Props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg: string, type: string) => {
        dispatch({
            type: "SET_ALERT",
            payload: { msg, type }
        })

        setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
    }

    return <AlertContext.Provider value={{
        alert: state,
        setAlert
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;