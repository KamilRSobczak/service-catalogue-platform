import { services } from "../data/data";

/**
 * Fetching the list of services.
 * @returns {Promise<Array>} - A promise resolving to the list of services.
 */
export const fetchServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 500); //500ms delay
  });
};

/**
 * Fetching a specific service by ID.
 * @param {number} id - The ID of the service to fetch.
 * @returns {Promise<Object>} - A promise resolving to the service object.
 */
export const fetchServiceById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const service = services.find((s) => s.id === id);
      if (service) {
        resolve(service);
      } else {
        reject(new Error("Service not found"));
      }
    }, 500); //500ms delay
  });
};

/**
 * Submitting an order.
 * @param {object} orderData - The order details including the selected service and user inputs.
 * @returns {Promise<Object>} - A promise that resolves with a success message or rejects with an error.
 */
export const submitOrder = (orderData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful submission 90% of the time
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        console.log("Order submitted:", orderData);
        resolve({ message: "Order successfully submitted!" });
      } else {
        reject(new Error("Failed to submit order. Please try again later."));
      }
    }, 2000); //2 seconds delay
  });
};
