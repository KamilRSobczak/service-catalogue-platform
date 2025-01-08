import { useEffect, useState } from "react";
import { fetchServiceById } from "../../services/api";
import { useWizard } from "../../context/WizardContext";
import Step1 from "./Step1/step1";
import Step2 from "./Step2/step2";
import Step3 from "./Step3/step3";
import { Loader } from "../../assets/Loader/loader";
import styles from "./serviceOrder.module.css";

const ServiceOrder = ({ serviceId }) => {
  const { setOrderData } = useWizard();
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    setOrderData(null);
    fetchServiceById(Number(serviceId))
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
      });
  }, [serviceId]);

  function serviceSteps() {
    return (
      <>
        {currentStep === 1 && <Step1 nextStep={nextStep} />}
        {currentStep === 2 && (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            selectedService={service}
          />
        )}
        {currentStep === 3 && (
          <Step3 prevStep={prevStep} selectedService={service} />
        )}
      </>
    );
  }

  return (
    <div>
      <h1 className={styles.header}>Service Order</h1>
      {loading ? (
        <Loader message="Loading selected service data..." />
      ) : (
        serviceSteps()
      )}
    </div>
  );
};

export default ServiceOrder;
