import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const symbols = ['🍎', '🍌', '🍒', '🍉', '🍇', '🍊', '🍋', '🍓'];
const totalPairs = 4;

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  useEffect(() => {
    const initialCards = [];
    const tempSymbols = [...symbols];

    for (let i = 0; i < totalPairs; i++) {
      const symbol = tempSymbols[i];
      initialCards.push({ id: i * 2, symbol, flipped: false, matched: false });
      initialCards.push({ id: i * 2 + 1, symbol, flipped: false, matched: false });
    }

    setCards(shuffleCards(initialCards));
  }, []);

  const shuffleCards = (cards) => {
    const shuffledCards = [...cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    return shuffledCards;
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [firstCard, secondCard] = selectedCards;
      if (firstCard.symbol === secondCard.symbol) {
        const newCards = cards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, flipped: true, matched: true };
          } else {
            return card;
          }
        });
        setCards(newCards);
        setMatches(prevMatches => prevMatches + 1);
      } else {
        setTimeout(() => {
          const newCards = cards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, flipped: false };
            } else {
              return card;
            }
          });
          setCards(newCards);
        }, 1000);
      }
      setSelectedCards([]);
    }

    if (matches === totalPairs) {
      Alert.alert('Felicitaciones!', 'lograste emparejar todas las frutas!');
    }
  }, [selectedCards, matches]);

  const handleCardPress = id => {
    const selectedCard = cards.find(card => card.id === id);
    if (!selectedCard.flipped && selectedCards.length < 2) {
      setSelectedCards(prevSelected => [...prevSelected, selectedCard]);
      const newCards = cards.map(card =>
        card.id === id ? { ...card, flipped: true } : card
      );
      setCards(newCards);
    }
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, item.flipped && styles.cardFlipped]}
      onPress={() => handleCardPress(item.id)}
      disabled={item.flipped || item.matched}
    >
      <Text style={styles.cardText}>{item.flipped ? item.symbol : ''}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.matchesText}>Matches: {matches}</Text>
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: 80,
    height: 80,
    margin: 5,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardFlipped: {
    backgroundColor: 'white',
  },
  cardText: {
    fontSize: 24,
  },
  matchesText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default MemoryGame;
