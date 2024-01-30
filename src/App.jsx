import { MovieContext,ThemeContext } from "./context";
import { useReducer, useState } from "react";
import Page from "./components/Page";
import { initialState,cartReducer } from "./reducer/CardReducer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // const [cartData,setCartData] = useState([]) //aita r labe na, aita amra useReducer diye control korbo
  const [darkMode,setDarkMode] = useState(true)
  const [state,dispatch] = useReducer(cartReducer,initialState)


  return (
    <>
    <ThemeContext.Provider value={{darkMode,setDarkMode}}>
      <MovieContext.Provider value={{state,dispatch}}>
        <Page/>
        <ToastContainer/>
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
