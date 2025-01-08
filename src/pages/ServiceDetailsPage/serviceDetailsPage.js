import ServiceDetails from "../../components/ServiceDetails/serviceDetails";
import { useParams } from "react-router-dom";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  return <ServiceDetails serviceId={id} />;
};

export default ServiceDetailsPage;
