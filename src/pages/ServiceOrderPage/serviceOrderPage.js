import ServiceOrder from "../../components/ServiceOrderWizard/serviceOrder";
import { useParams } from "react-router-dom";

const ServiceOrderPage = () => {
  const { id } = useParams();
  return <ServiceOrder serviceId={id} />;
};

export default ServiceOrderPage;
