import ServiceDetail from "../../components/service-detail/ServiceDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlApi } from "../../const";

const ServiceDetailPage = () => {
    const serviceId = window.location.pathname.split("/")[2];
    const URLService = `${urlApi}services/${serviceId}`;

    const [serviceState, setService] = useState({});

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(URLService);
                setService(response.data);
            } catch (error) {
                console.error("Ошибка загрузки данных услуги:", error);
            }
        };
        fetchService();
    }, [URLService]);

    return (
        <ServiceDetail data={serviceState} />
    );
};

export default ServiceDetailPage;
