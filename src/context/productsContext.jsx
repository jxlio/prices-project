import { createContext } from "react";

export const productsContext = createContext()

export const productsProvider = ({children}) => {
    const [producto, setProducto] = useState([]);
    


    return(
        <productsContext.Provider value={{producto, setProducto}} ></productsContext.Provider>
    )
    
}