import React, { createContext, useContext, useState } from "react";

const WizardContext = createContext({});

export const WizardProvider = ({ children }) => {
  const [wizardData, setWizardData] = useState({});
  const [serviceList, setServiceList] = useState([]);
  const [orderData, setOrderData] = useState(null);

  return (
    <WizardContext.Provider
      value={{
        wizardData,
        setWizardData,
        serviceList,
        setServiceList,
        orderData,
        setOrderData,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export const useWizard = () => useContext(WizardContext);
