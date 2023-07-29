import { createContext, useContext, useReducer } from "react";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";
import reducer from "../reducers/sidebar_reducer";

const initialState = {
  isSidebarOpen: false,
};

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <SidebarContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
