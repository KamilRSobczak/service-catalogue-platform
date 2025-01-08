import React, { useState } from "react";
import { useWizard } from "../../../context/WizardContext";
import { useNavigate } from "react-router";
import { submitOrder } from "../../../services/api";
import { Loader } from "../../../assets/Loader/loader";
import styles from "../serviceOrder.module.css";

const Step3 = ({ prevStep, selectedService }) => {
  const { orderData } = useWizard();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await submitOrder(orderData);
      setLoading(false);
      alert(res.message);
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert(error);
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className={styles.stepContainer}>
      {loading && <Loader message="Sending data..." />}
      <p className={styles.stepHeader}>Step 3: Order Summary</p>
      <span className={styles.spearator} />
      <div className={styles.orderSummary}>
        {selectedService && (
          <>
            <p>
              <b>Service:</b> {selectedService.name}
            </p>
            <p>
              <b>Price:</b> {selectedService.price}
            </p>
          </>
        )}
        <p>
          <b>Owner Name:</b> {orderData.ownerName}
        </p>
        <p>
          <b>Provisioning Date:</b> {orderData.provisioningDate}
        </p>
        <p>
          <b>Decommissioning Date:</b> {orderData.decommissioningDate}
        </p>
        <p>
          <b>Additional Notes:</b>{" "}
          <span className={styles.additionalNotes}>
            {orderData.additionalNotes}
          </span>
        </p>
      </div>

      <div className={styles.stepBtnContainer}>
        <button
          onClick={prevStep}
          disabled={loading}
          className={styles.stepBacktBtn}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={styles.stepNextBtn}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Step3;
