import { AsyncStorage } from 'react-native';

const addDataToLocalStorage =  async (siteName, data) => {
    await AsyncStorage.setItem(`@${siteName}`, data);
};

const getDataFromLocalStorage = async (siteName) => {
    return await AsyncStorage.getItem(`@${siteName}`);
};

const getAllDataFromLocalStorage = async () => {
    return await AsyncStorage.getAllKeys();
};

export { addDataToLocalStorage, getDataFromLocalStorage, getAllDataFromLocalStorage }