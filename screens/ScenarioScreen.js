import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const scenarios = [
  {
    id: 1,
    title: 'Runny Nose Rescue',
    description: 'Nina has a mild cold. Choose the safest first step before medicine.',
    character: '👩‍⚕️',
    options: [
      { text: 'Rest, Drink Water', isCorrect: true, feedback: 'Great! Rest & fluids help first.' },
      { text: 'Strong painkiller', isCorrect: false, feedback: 'Not the best first step.' },
      { text: 'Adult cough syrup', isCorrect: false, feedback: 'Too strong for mild cold.' }
    ]
  },
  {
    id: 2,
    title: 'Sprain Relief',
    description: 'Milo twisted his ankle. Pick the safest OTC support.',
    character: '👨‍⚕️',
    options: [
      { text: 'Topical gel & ice packs', isCorrect: true, feedback: 'Correct – best for sprains!' },
      { text: 'Heartburn tablets', isCorrect: false, feedback: 'Wrong medicine type.' },
      { text: 'Antibiotic cream', isCorrect: false, feedback: 'No cut or infection.' }
    ]
  }
];

export default function ScenarioScreen({ onComplete, onBack, level }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  const scenario = scenarios[index];

  const chooseOption = (option) => {
    setSelected(option);
    const addedScore = option.isCorrect ? 10 : 0;
    setScore(score + addedScore);
    setHistory([...history, { scenario: scenario.title, selected: option.text, result: option.isCorrect, feedback: option.feedback }]);
  };

  const nextScenario = () => {
    if (index + 1 < scenarios.length) {
      setIndex(index + 1);
      setSelected(null);
    } else {
      onComplete(score, history);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#b78ef5', padding: 12 }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        {/* Main content */}
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={{ backgroundColor: '#fff', borderRadius: 12, borderWidth: 2, borderColor: '#000', padding: 12, marginBottom: 12 }}>
            <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 14 }}>Scenario {index + 1}: {scenario.title}</Text>
            <Text style={{ color: '#6b21a8', fontSize: 12, marginTop: 4 }}>{scenario.description}</Text>
          </View>

          {/* Stats */}
          <View style={{ flexDirection: 'row', gap: 8, marginBottom: 12 }}>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 10 }}>Level: {level}</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, padding: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 10 }}>Score: {score}</Text>
            </View>
          </View>

          {/* Options */}
          {scenario.options.map((option) => (
            <TouchableOpacity
              key={option.text}
              onPress={() => chooseOption(option)}
              style={{
                backgroundColor: selected === option ? '#d8b4fe' : '#fff',
                padding: 10,
                borderRadius: 8,
                marginBottom: 8,
                borderWidth: 2,
                borderColor: selected === option ? '#9333ea' : '#000'
              }}
            >
              <Text style={{ color: '#6b21a8', fontSize: 12, fontWeight: '600' }}>{option.text}</Text>
            </TouchableOpacity>
          ))}

          {/* Feedback */}
          {selected && (
            <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, marginVertical: 8, borderWidth: 2, borderColor: '#9333ea', marginBottom: 12 }}>
              <Text style={{ color: '#9333ea', fontSize: 11, fontWeight: 'bold' }}>💡 {selected.feedback}</Text>
            </View>
          )}

          {/* Navigation */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity onPress={onBack} style={{ flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 11 }}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextScenario} style={{ flex: 1, backgroundColor: '#9333ea', padding: 10, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 11 }}>{index + 1 < scenarios.length ? 'Next →' : 'Finish ✓'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Character Display */}
        <View style={{ width: 120, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 12, borderWidth: 3, borderColor: '#000', paddingVertical: 16 }}>
          <Text style={{ fontSize: 60, marginBottom: 8 }}>{scenario.character}</Text>
          <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 10, textAlign: 'center' }}>{scenario.title}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
