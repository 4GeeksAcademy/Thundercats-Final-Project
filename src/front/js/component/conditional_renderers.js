import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

// https://replit.com/@ShaneBell3/RaggedJuvenileInstance#src/ConditionalDisplay.jsx

const DisplayOrNone = ({ children }) => {
    /**
     * Displays a component if logged,
     * nothing if logged out.
     */
    const { store } = useContext(Context);

    return <>{store.token ? children : ""}</>;
};

const DisplayOrRedirect = ({ children, target }) => {
    /**
     * Displays a component if logged,
     * redirects if you are logged out.
     */
    const { store, actions } = useContext(Context);
    const nav = useNavigate();

    useEffect(() => {
        if (!store.token) {
            nav(target);
        }
    }, [store.token]);

    return <>{children}</>;
};

const AOrB = ({ a, b }) => {/**
    * Displays a component if logged,
    * and another if you are not.
    */
    const { store, actions } = useContext(Context);

    return <>{store.token ? a : b}</>;
};

export { AOrB, DisplayOrNone, DisplayOrRedirect };
