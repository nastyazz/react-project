import { useEffect, useState } from "react";
import axios from "axios";
import ServicesList from "../../components/service-list/ServiceList";
import { urlApi } from "../../const";

const ServicePage = () => {
    const URLServices = `${urlApi}services`;
    const [servicesState, setServices] = useState([]);
    useEffect(() => {
        axios
            .get(URLServices)
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error("Error fetching services:", error);
            });
    }, [URLServices]);

    return (
        <div>
            <ServicesList data={servicesState} />
        </div>
    );
};

export default ServicePage;
