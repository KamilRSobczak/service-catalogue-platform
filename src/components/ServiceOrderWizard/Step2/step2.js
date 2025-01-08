import React, { useState } from "react";
import { useWizard } from "../../../context/WizardContext";
import styles from "../serviceOrder.module.css";

const Step2 = ({ nextStep, prevStep, selectedService }) => {
  const { orderData, setOrderData } = useWizard();
  const [additionalNotes, setAdditionalNotes] = useState(
    orderData?.additionalNotes || ""
  );

  const handleNext = (e) => {
    setOrderData({
      ...orderData,
      selectedService: selectedService,
      additionalNotes: e.target.additionalNotes.value,
    });
    nextStep();
  };

  return (
    <div className={styles.stepContainer}>
      <p className={styles.stepHeader}>Step 2: Cost Details</p>
      <span className={styles.spearator} />
      {selectedService && (
        <div className={styles.orderSummary}>
          <p>
            <b>Service:</b> {selectedService.name}
          </p>
          <p>
            <b>Price</b>: {selectedService.price}
          </p>
        </div>
      )}
      <form onSubmit={handleNext}>
        <span>
          <label>Additional Notes (max 250 characters)</label>
          <textarea
            placeholder="Additional Notes (max 250 characters)"
            name="additionalNotes"
            value={additionalNotes}
            maxLength="250"
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </span>

        <div className={styles.stepBtnContainer}>
          <button onClick={prevStep} className={styles.stepBacktBtn}>
            Back
          </button>
          <button type="submit" className={styles.stepNextBtn}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
