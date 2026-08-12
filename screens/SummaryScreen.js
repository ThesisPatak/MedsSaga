import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function SummaryScreen({ score, history, onRestart, onContinue }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 18, backgroundColor: '#f4efff' }}>
      <View style={{ borderRadius: 24, backgroundColor: '#7c3aed', padding: 22, marginBottom: 18 }}>
        <Text style={{ color: '#fff', fontSize: 26, fontWeight: '800' }}>Adventure Summary</Text>
        <Text style={{ color: '#e9d5ff', marginTop: 10, fontSize: 16 }}>You scored {score} points. Keep learning to become a MedsSaga hero!</Text>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 24, padding: 18, marginBottom: 18, borderWidth: 1, borderColor: '#ddd6fe' }}>
        {history.length > 0 ? (
          history.map((item, index) => (
            <View key={`${item.scenario}-${index}`} style={{ marginBottom: 14 }}>
              <Text style={{ color: '#4c1d95', fontSize: 16, fontWeight: '700' }}>{item.scenario}</Text>
              <Text style={{ color: '#7c3aed', marginTop: 4 }}>{item.selected}</Text>
              <Text style={{ color: item.result ? '#16a34a' : '#dc2626', marginTop: 4 }}>{item.result ? 'Correct' : 'Try again next time'}</Text>
            </View>
          ))
        ) : (
          <Text style={{ color: '#7c3aed' }}>No scenario history available yet.</Text>
        )}
      </View>

      <TouchableOpacity onPress={onContinue} style={{ backgroundColor: '#8b5cf6', padding: 18, borderRadius: 20, marginBottom: 12 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '800' }}>Continue Adventure</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onRestart} style={{ backgroundColor: '#6d28d9', padding: 18, borderRadius: 20 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '800' }}>Restart Game</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
