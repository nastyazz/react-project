import NewsList from "../../components/news_list/NewsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { urlApi } from "../../const";

function MainPage() {
    const URLNews = urlApi + 'main';
    const [newsState, setNews] = useState([]);

    useEffect(() => {
        axios.get(URLNews)
            .then((response) => {
                const mainList = response.data;
                setNews(mainList);
            })
            .catch((error) => {
                console.error("Error fetching news data:", error);
            });
    }, [URLNews]);

    return (
        <div>
            <NewsList data={newsState} />
        </div>
    );
}

export default MainPage;
