import React, { useState } from "react";
import { useWizard } from "../../../context/WizardContext";
import styles from "../serviceOrder.module.css";

const Step1 = ({ nextStep }) => {
  const { orderData, setOrderData } = useWizard();
  const [ownerName, setOwnerName] = useState(
    orderData?.ownerName ? orderData.ownerName : ""
  );
  const [provisioningDate, setProvisioningDate] = useState(
    orderData?.provisioningDate ? orderData.provisioningDate : ""
  );
  const [decommissioningDate, setDecommissioningDate] = useState(
    orderData?.decommissioningDate ? orderData.decommissioningDate : ""
  );

  const handleNext = (e) => {
    e.preventDefault();
    setOrderData({
      ...orderData,
      ownerName: e.target.ownerName.value,
      provisioningDate: e.target.provisioningDate.value,
      decommissioningDate: e.target.decommissioningDate.value,
    });
    nextStep();
  };

  const getMinDataRange = () => {
    if (!provisioningDate) return "";
    try {
      const date = new Date(provisioningDate);
      date.setDate(date.getDate() + 1);
      return date.toISOString().split("T")[0]; // Converting to YYYY-MM-DD
    } catch {
      return "";
    }
  };

  const getMaxDataRange = () => {
    if (!provisioningDate) return "";
    try {
      const date = new Date(decommissioningDate);
      date.setDate(date.getDate() - 1);
      return date.toISOString().split("T")[0];
    } catch {
      return "";
    }
  };

  return (
    <div className={styles.stepContainer}>
      <p className={styles.stepHeader}>Step 1: Owner Details</p>
      <span className={styles.spearator} />
      <br />
      <form onSubmit={handleNext}>
        <div>
          <label>Owner Name: </label>
          <input
            type="text"
            name="ownerName"
            placeholder="e.g. Jan Kowalski"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <span>
          <label>Provisioning Date: </label>
          <input
            type="date"
            name="provisioningDate"
            placeholder="Provisioning Date"
            value={provisioningDate}
            max={getMaxDataRange()}
            onChange={(e) => setProvisioningDate(e.target.value)}
            required
          />
        </span>
        <span>
          <label>Decommissioning Date: </label>
          <input
            type="date"
            name="decommissioningDate"
            placeholder="Decommissioning Date"
            value={decommissioningDate}
            disabled={!provisioningDate}
            min={getMinDataRange()}
            onChange={(e) => setDecommissioningDate(e.target.value)}
            required
          />
        </span>
        <div className={styles.stepBtnContainer}>
          <button type="submit" className={styles.stepNextBtn}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
