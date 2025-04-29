import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'WORD_HISTORY';

export const saveWordToHistory = async (word) => {
  const history = await getHistory();
  const updatedHistory = [word, ...history];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
};

export const getHistory = async () => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearHistory = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};
