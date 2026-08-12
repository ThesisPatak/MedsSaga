import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function SummaryScreen({ score, history, onRestart, onContinue }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#b78ef5', padding: 12 }}>
      {/* Header */}
      <View style={{ backgroundColor: '#fff', borderRadius: 12, borderWidth: 2, borderColor: '#000', padding: 12, marginBottom: 12 }}>
        <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 16 }}>🎉 Adventure Complete!</Text>
        <Text style={{ color: '#6b21a8', fontSize: 12, marginTop: 6 }}>You scored {score} points. Great work!</Text>
      </View>

      {/* History Panel */}
      <View style={{ backgroundColor: '#fff', borderRadius: 12, borderWidth: 2, borderColor: '#000', padding: 12, marginBottom: 12 }}>
        <Text style={{ color: '#9333va', fontWeight: 'bold', fontSize: 12, marginBottom: 8 }}>📋 Results</Text>
        {history.length > 0 ? (
          history.map((item, index) => (
            <View key={`${item.scenario}-${index}`} style={{ marginBottom: 8, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#ddd6fe' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: '#6b21a8', fontSize: 11, fontWeight: '700', flex: 1 }}>{item.scenario}</Text>
                <Text style={{ color: item.result ? '#16a34a' : '#dc2626', fontSize: 10, fontWeight: 'bold' }}>{item.result ? '✅' : '❌'}</Text>
              </View>
              <Text style={{ color: '#7c3aed', fontSize: 10, marginTop: 2 }}>{item.selected}</Text>
            </View>
          ))
        ) : (
          <Text style={{ color: '#7c3aed', fontSize: 10 }}>No history yet.</Text>
        )}
      </View>

      {/* Action Buttons */}
      <View style={{ gap: 8 }}>
        <TouchableOpacity onPress={onContinue} style={{ backgroundColor: '#9333ea', padding: 12, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>▶ Continue Adventure</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRestart} style={{ backgroundColor: '#fff', padding: 12, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
          <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 12 }}>🔄 Restart Game</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
