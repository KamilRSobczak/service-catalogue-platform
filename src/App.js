import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage/serviceDetailsPage";
import ServiceOrderPage from "./pages/ServiceOrderPage/serviceOrderPage";
import HeaderNavBar from "./components/HeaderNavBar/HeaderNavBar";
import { WizardProvider } from "./context/WizardContext";
import styles from "./app.module.css";
const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <HeaderNavBar />
        <WizardProvider>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/service/:id" element={<ServiceDetailsPage />} />
            <Route path="/service/:id/order" element={<ServiceOrderPage />} />
          </Routes>
        </WizardProvider>
      </div>
    </Router>
  );
};

export default App;
