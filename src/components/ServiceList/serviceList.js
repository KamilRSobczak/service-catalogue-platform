import { Link } from "react-router";
import { useWizard } from "../../context/WizardContext";
import styles from "./serviceList.module.css";
import { useState, useEffect } from "react";
import { fetchServices } from "../../services/api";
import { Loader } from "../../assets/Loader/loader";

const ServiceList = () => {
  const { serviceList, setServiceList } = useWizard();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices()
      .then((data) => {
        setServiceList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  function serviceListHandler() {
    return (
      <ul className={styles.serviceContainer}>
        {serviceList.map((service) => (
          <li key={service.id} className={styles.service}>
            <p className={styles.serviceHeader}>{service.name}</p>
            <p className={styles.description}>{service.shortDescription}</p>
            <div className={styles.price}>
              <span>{service.price}</span>{" "}
              <Link to={`/service/${service.id}`} className={styles.button}>
                View Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      {loading ? (
        <Loader message="Loading services..." />
      ) : error ? (
        <p>error</p>
      ) : (
        <div className={styles.serciveList}>
          <h1 className={styles.header}>Service List</h1>
          {serviceListHandler()}
        </div>
      )}
    </>
  );
};

export default ServiceList;
