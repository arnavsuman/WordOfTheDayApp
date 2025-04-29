import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordCard({ word }) {
  return (
    <View style={styles.card}>
      <Text style={styles.word}>{word.word}</Text>
      <Text style={styles.definition}>{word.definition}</Text>
      <Text style={styles.example}>Example: {word.example}</Text>
      {word.date && <Text style={styles.date}>Date: {new Date(word.date).toLocaleDateString()}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  word: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  definition: {
    marginTop: 4,
  },
  example: {
    fontStyle: 'italic',
    marginTop: 4,
  },
  date: {
    marginTop: 6,
    color: 'gray',
  },
});
