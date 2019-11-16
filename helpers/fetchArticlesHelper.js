import NetInfo from "@react-native-community/netinfo";
import {addDataToLocalStorage, getDataFromLocalStorage} from "./asyncStorage";

const fetchArticles = async (siteName) => {
    const netInfoFetch = await NetInfo.fetch();
    const {name} = siteName;
    if (netInfoFetch.isConnected) {
        const response = await fetch(`https://infinite-fjord-69137.herokuapp.com/${name}`, {
            headers: {
                Accept: 'application/json',
            },
        });

        const data = await response.json();
        await addDataToLocalStorage(name, JSON.stringify(data));
        return data;
    }
    else {
        const data =  await getDataFromLocalStorage(name);
        return JSON.parse(data);
    }
};

export { fetchArticles };
