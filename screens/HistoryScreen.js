import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet, Text, Alert } from 'react-native';
import { getHistory, clearHistory } from '../utils/storage';
import WordCard from '../components/WordCard';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  const loadHistory = async () => {
    const data = await getHistory();
    setHistory(data);
  };

  const handleClearHistory = async () => {
    await clearHistory();
    setHistory([]);
    Alert.alert('Success', 'History cleared.');
  };

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <WordCard word={item} />}
        ListEmptyComponent={<Text>No history yet.</Text>}
      />
      <Button title="Clear History" onPress={handleClearHistory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
