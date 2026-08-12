import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const scenarios = [
  {
    id: 1,
    title: 'Runny Nose Rescue',
    description: 'Nina has a mild cold. Choose the safest first step before medicine.',
    options: [
      { text: 'Finish, Rest, and Drink Water', isCorrect: true, feedback: 'Great! Many cold symptoms improve with rest and fluids first.' },
      { text: 'Take a strong painkiller immediately', isCorrect: false, feedback: 'Painkillers can help fever, but not as the best first step for a mild cold.' },
      { text: 'Use cough syrup designed for adults', isCorrect: false, feedback: 'That can be too strong and unnecessary for these symptoms.' }
    ]
  },
  {
    id: 2,
    title: 'Sprain Relief',
    description: 'Milo twisted his ankle playing and wants relief. Pick the safest OTC support.',
    options: [
      { text: 'Topical pain gel and ice packs', isCorrect: true, feedback: 'Correct – topical gel and ice help pain while limiting side effects.' },
      { text: 'Heartburn tablets', isCorrect: false, feedback: 'Heartburn tablets do not help sprain pain or swelling.' },
      { text: 'Antibiotic cream', isCorrect: false, feedback: 'No cut or infection is present, so this is not needed.' }
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
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 18, backgroundColor: '#f4efff' }}>
      <View style={{ borderRadius: 24, backgroundColor: '#7c3aed', padding: 20, marginBottom: 18 }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: '800' }}>Scenario {index + 1}</Text>
        <Text style={{ color: '#ded6ff', marginTop: 10, fontSize: 16 }}>{scenario.description}</Text>
        <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: '#ede9fe', borderRadius: 16, padding: 12, width: '48%' }}>
            <Text style={{ color: '#5b21b6', fontWeight: '700' }}>Level</Text>
            <Text style={{ color: '#4c1d95', fontSize: 20, fontWeight: '800' }}>{level}</Text>
          </View>
          <View style={{ backgroundColor: '#ede9fe', borderRadius: 16, padding: 12, width: '48%' }}>
            <Text style={{ color: '#5b21b6', fontWeight: '700' }}>Score</Text>
            <Text style={{ color: '#4c1d95', fontSize: 20, fontWeight: '800' }}>{score}</Text>
          </View>
        </View>
      </View>

      {scenario.options.map((option) => (
        <TouchableOpacity
          key={option.text}
          onPress={() => chooseOption(option)}
          style={{
            backgroundColor: selected === option ? '#d8b4fe' : '#ede9fe',
            padding: 18,
            borderRadius: 20,
            marginBottom: 14,
            borderWidth: selected === option ? 2 : 0,
            borderColor: '#9333ea'
          }}
        >
          <Text style={{ color: '#3c096c', fontSize: 16, fontWeight: '600' }}>{option.text}</Text>
        </TouchableOpacity>
      ))}

      {selected && (
        <View style={{ backgroundColor: '#fff', padding: 18, borderRadius: 20, marginVertical: 18, borderWidth: 1, borderColor: '#d8b4fe' }}>
          <Text style={{ color: '#6b21a8', fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Feedback</Text>
          <Text style={{ color: '#4c1d95', fontSize: 15 }}>{selected.feedback}</Text>
        </View>
      )}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={onBack} style={{ backgroundColor: '#6d28d9', padding: 16, borderRadius: 18, width: '48%' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextScenario} style={{ backgroundColor: '#a855f7', padding: 16, borderRadius: 18, width: '48%' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>{index + 1 < scenarios.length ? 'Next' : 'Finish'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
