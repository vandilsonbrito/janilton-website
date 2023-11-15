import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <GlobalContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal() {
    return useContext(GlobalContext);
}

GlobalProvider.propTypes = {
    children: PropTypes.node
};
