import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchServiceById } from "../../services/api";
import { Loader } from "../../assets/Loader/loader";
import styles from "./serviceDetails.module.css";

const ServiceDetails = ({ serviceId }) => {
  const [service, setService] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServiceById(Number(serviceId))
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
      });
  }, [serviceId]);

  function serviceDetail() {
    return service ? (
      <div className={styles.service}>
        <p className={styles.serviceHeader}>{service.name}</p>
        <p className={styles.description}>{service.detailedDescription}</p>
        <div className={styles.price}>
          <span>{service.price}</span>{" "}
          <Link
            to={`/service/${service?.id}/order`}
            className={styles.orderButton}
          >
            Place An Order
          </Link>
        </div>
      </div>
    ) : (
      <p>No service found under this id</p>
    );
  }

  return (
    <div>
      {loading ? (
        <Loader message="Loading service details..." />
      ) : (
        <>
          <h1 className={styles.header}>Service Detail</h1>
          {serviceDetail()}
          <br />
          <Link to={`/`} className={styles.backBtn}>
            Back
          </Link>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
