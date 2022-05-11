import React, { useContext, useState } from "react";

const AppContexte = React.createContext();
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContexte.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal,
      }}
    >
      {children}
    </AppContexte.Provider>
  );
};
//custom hook
export const useGlobalContext = () => {
  return useContext(AppContexte);
};
export { AppContexte, AppProvider };
