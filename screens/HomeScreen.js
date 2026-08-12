import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const characters = [
  { name: 'Nina', color: '#ffb0d0' },
  { name: 'Milo', color: '#8cc4ff' },
  { name: 'Lina', color: '#ffd46e' },
  { name: 'Noah', color: '#b4a0ff' }
];

function Avatar({ color, label }) {
  return (
    <View style={{ alignItems: 'center', width: 72 }}>
      <View style={{ width: 56, height: 56, borderRadius: 28, backgroundColor: color, justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: '#1f2937', fontWeight: 'bold' }}>{label[0]}</Text>
      </View>
      <Text style={{ color: '#1f2937', fontSize: 12 }}>{label}</Text>
    </View>
  );
}

export default function HomeScreen({ onStart, score, level }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#efebff', padding: 16 }}>
      <View style={{ borderRadius: 24, backgroundColor: '#6b46c1', padding: 18, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 16, elevation: 4 }}>
        <Text style={{ color: '#fff', fontSize: 34, fontWeight: '900', letterSpacing: 1 }}>MedsSaga</Text>
        <Text style={{ color: '#dcd6ff', marginTop: 8, fontSize: 16 }}>A playful pharmacy adventure for safe medicine decisions.</Text>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 24, padding: 18, marginBottom: 18 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 }}>
          <View style={{ width: '48%', backgroundColor: '#ede9fe', borderRadius: 18, padding: 16 }}>
            <Text style={{ color: '#5b21b6', fontSize: 14, fontWeight: '700', marginBottom: 10 }}>NEW GAME</Text>
            <Text style={{ color: '#4c1d95', fontSize: 13 }}>Start your first quest.</Text>
          </View>
          <View style={{ width: '48%', backgroundColor: '#ede9fe', borderRadius: 18, padding: 16 }}>
            <Text style={{ color: '#5b21b6', fontSize: 14, fontWeight: '700', marginBottom: 10 }}>LOAD</Text>
            <Text style={{ color: '#4c1d95', fontSize: 13 }}>Continue your saved story.</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <View style={{ backgroundColor: '#faf5ff', borderRadius: 18, flex: 1, padding: 14, marginRight: 8 }}>
            <Text style={{ color: '#5b21b6', fontSize: 14, fontWeight: '700' }}>Level</Text>
            <Text style={{ color: '#4c1d95', fontSize: 22, fontWeight: '800' }}>{level}</Text>
          </View>
          <View style={{ backgroundColor: '#faf5ff', borderRadius: 18, flex: 1, padding: 14, marginLeft: 8 }}>
            <Text style={{ color: '#5b21b6', fontSize: 14, fontWeight: '700' }}>Score</Text>
            <Text style={{ color: '#4c1d95', fontSize: 22, fontWeight: '800' }}>{score}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 }}>
          {characters.map((char) => (
            <Avatar key={char.name} color={char.color} label={char.name} />
          ))}
        </View>

        <TouchableOpacity
          onPress={onStart}
          style={{ backgroundColor: '#7c3aed', borderRadius: 18, paddingVertical: 16, alignItems: 'center' }}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Start Adventure</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#ede9fe', borderRadius: 24, padding: 20, alignItems: 'center' }}>
        <Text style={{ color: '#4c1d95', fontSize: 16, fontWeight: '700', marginBottom: 10 }}>Welcome to your pharmacy world</Text>
        <Text style={{ color: '#574b90', fontSize: 14, textAlign: 'center' }}>Choose a new game or continue your journey with fun scenes, quizzes, and safe OTC decisions.</Text>
      </View>
    </ScrollView>
  );
}
