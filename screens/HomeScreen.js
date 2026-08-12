import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const characters = [
  { name: 'Nina', color: '#ffb0d0', emoji: '👩‍⚕️' },
  { name: 'Milo', color: '#8cc4ff', emoji: '👨‍⚕️' },
  { name: 'Lina', color: '#ffd46e', emoji: '👩‍⚕️' },
  { name: 'Noah', color: '#b4a0ff', emoji: '👨‍⚕️' }
];

function CharacterCard({ color, name, emoji }) {
  return (
    <View style={{ alignItems: 'center', marginHorizontal: 8 }}>
      <View style={{ width: 70, height: 90, backgroundColor: color, borderRadius: 16, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#000', marginBottom: 8 }}>
        <Text style={{ fontSize: 40 }}>{emoji}</Text>
      </View>
      <Text style={{ color: '#1f2937', fontSize: 11, fontWeight: '700' }}>{name}</Text>
    </View>
  );
}

export default function HomeScreen({ onStart, score, level }) {
  const { width } = Dimensions.get('window');
  const isLandscape = width > 600;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#b78ef5', paddingHorizontal: 12, paddingVertical: 8 }}>
      {/* Pharmacy Storefront Header */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 }}>
        {/* Left Menu */}
        <View style={{ width: 50, alignItems: 'center', gap: 8, paddingTop: 16 }}>
          <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>📋</Text>
          </View>
          <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>⚙️</Text>
          </View>
          <View style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>📊</Text>
          </View>
        </View>

        {/* Main Storefront */}
        <View style={{ flex: 1, marginLeft: 8 }}>
          {/* Awning */}
          <View style={{ backgroundColor: '#9333ea', height: 20, borderRadius: 4, marginBottom: 4, borderWidth: 2, borderColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 12 }}>✚ MedsSaga Pharmacy ✚</Text>
          </View>

          {/* Storefront with characters */}
          <View style={{ backgroundColor: '#f3e8ff', borderRadius: 12, borderWidth: 3, borderColor: '#000', padding: 12, minHeight: 200 }}>
            {/* Top text buttons */}
            <View style={{ flexDirection: 'row', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
              <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 8, borderWidth: 2, borderColor: '#9333ea' }}>
                <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 12 }}>NEW GAME</Text>
              </View>
              <View style={{ backgroundColor: '#fff', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 8, borderWidth: 2, borderColor: '#9333ea' }}>
                <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 12 }}>LOAD</Text>
              </View>
            </View>

            {/* Characters in a row */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
              {characters.map((char) => (
                <CharacterCard key={char.name} color={char.color} name={char.name} emoji={char.emoji} />
              ))}
            </View>

            {/* Stats */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom: 12 }}>
              <View style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 2, borderColor: '#9333ea' }}>
                <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 12 }}>Level: {level}</Text>
              </View>
              <View style={{ backgroundColor: '#fff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 2, borderColor: '#9333ea' }}>
                <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 12 }}>Score: {score}</Text>
              </View>
            </View>

            {/* Start Button */}
            <TouchableOpacity
              onPress={onStart}
              style={{ backgroundColor: '#9333ea', borderRadius: 12, paddingVertical: 12, alignItems: 'center', borderWidth: 2, borderColor: '#000' }}
            >
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>► START ADVENTURE ◄</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
