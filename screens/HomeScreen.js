import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WordCard from '../components/WordCard';
import { saveWordToHistory } from '../utils/storage';

const getRandomWord = () => {
  const words = [
    {
      word: 'Serendipity',
      definition: 'The occurrence of events by chance in a happy or beneficial way.',
      example: 'Finding that rare book was pure serendipity.',
    },
    {
      word: 'Ephemeral',
      definition: 'Lasting for a very short time.',
      example: 'Fame in the digital world can be ephemeral.',
    },
    {
      word: 'Petrichor',
      definition: 'A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.',
      example: 'The petrichor filled the air after months of dryness.',
    },
    {
      word: 'Solitude',
      definition: 'The state or situation of being alone.',
      example: 'He enjoyed the peace and solitude of the mountains.',
    },
    {
      word: 'Euphoria',
      definition: 'A feeling or state of intense excitement and happiness.',
      example: 'Winning the championship brought a sense of euphoria.',
    },
    {
      word: 'Labyrinthine',
      definition: 'Like a labyrinth; irregular and twisting.',
      example: 'The old city’s labyrinthine streets were easy to get lost in.',
    },
    {
      word: 'Ineffable',
      definition: 'Too great or extreme to be expressed or described in words.',
      example: 'The beauty of the sunrise was ineffable.',
    },
    {
      word: 'Luminous',
      definition: 'Giving off light; bright or shining.',
      example: 'The moonlight cast a luminous glow over the forest.',
    },
    {
      word: 'Mellifluous',
      definition: 'Sweet or musical; pleasant to hear.',
      example: 'She had a rich, mellifluous voice.',
    },
    {
      word: 'Sonorous',
      definition: 'Capable of producing a deep or ringing sound.',
      example: 'His sonorous voice echoed through the hall.',
    },
    {
      word: 'Halcyon',
      definition: 'Denoting a period of time in the past that was idyllically happy and peaceful.',
      example: 'She often reminisced about the halcyon days of her childhood.',
    },
    {
      word: 'Ethereal',
      definition: 'Extremely delicate and light in a way that seems not of this world.',
      example: 'The dancer moved with an ethereal grace.',
    },
    {
      word: 'Quintessential',
      definition: 'Representing the most perfect or typical example of a quality or class.',
      example: 'He was the quintessential gentleman.',
    },
    {
      word: 'Zephyr',
      definition: 'A soft gentle breeze.',
      example: 'A zephyr caressed the fields at sunset.',
    },
    {
      word: 'Luminescence',
      definition: 'The emission of light by a substance not resulting from heat.',
      example: 'The luminescence of the jellyfish was mesmerizing.',
    },
    {
      word: 'Epitome',
      definition: 'A person or thing that is a perfect example of a particular quality or type.',
      example: 'She is the epitome of kindness.',
    },
    {
      word: 'Reverie',
      definition: 'A state of being pleasantly lost in one’s thoughts; a daydream.',
      example: 'He was lost in a reverie about his future.',
    },
    {
      word: 'Resplendent',
      definition: 'Attractive and impressive through being richly colorful or sumptuous.',
      example: 'The bride looked resplendent in her wedding dress.',
    },
    {
      word: 'Incandescent',
      definition: 'Emitting light as a result of being heated; full of strong emotion.',
      example: 'Her incandescent joy lit up the room.',
    },
    {
      word: 'Redolent',
      definition: 'Strongly reminiscent or suggestive of something; fragrant.',
      example: 'The room was redolent with the scent of roses.',
    },
  ];
  
  return words[Math.floor(Math.random() * words.length)];
};

export default function HomeScreen({ navigation }) {
  const [word, setWord] = useState(null);

  const fetchNewWord = async () => {
    const newWord = { ...getRandomWord(), date: new Date().toISOString() };
    setWord(newWord);
    try {
      await saveWordToHistory(newWord);
    } catch (err) {
      Alert.alert('Error', 'Failed to save the word.');
    }
  };

  useEffect(() => {
    fetchNewWord();
  }, []);

  return (
    <View style={styles.container}>
      {word && <WordCard word={word} />}
      <View style={styles.buttonContainer}>
        <Button title="New Word" onPress={fetchNewWord} />
        <View style={styles.buttonSpacer} />
        <Button title="History" onPress={() => navigation.navigate('History')} />
      </View>
      <Text style={styles.footerText}>Made by Arnav Suman</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonSpacer: {
    height: 12, // Space between the two buttons
  },
  footerText: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
  },
});
