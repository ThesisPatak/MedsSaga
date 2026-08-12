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
    <View style={{ alignItems: 'center', marginHorizontal: 6, flex: 1 }}>
      <View style={{ width: '100%', aspectRatio: 0.7, backgroundColor: color, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#000', marginBottom: 6 }}>
        <Text style={{ fontSize: 36 }}>{emoji}</Text>
      </View>
      <Text style={{ color: '#1f2937', fontSize: 9, fontWeight: '700', textAlign: 'center' }}>{name}</Text>
    </View>
  );
}

export default function HomeScreen({ onStart, score, level }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#b78ef5', flexDirection: 'row', padding: 12, gap: 12 }}>
      {/* Left Sidebar - Menu Icons */}
      <View style={{ width: 50, alignItems: 'center', gap: 10, paddingTop: 12 }}>
        <View style={{ width: 44, height: 44, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>📋</Text>
        </View>
        <View style={{ width: 44, height: 44, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>👤</Text>
        </View>
        <View style={{ width: 44, height: 44, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>📊</Text>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={{ flex: 1, gap: 12 }}>
        {/* Top Section: Cross Symbol */}
        <View style={{ backgroundColor: '#fff', borderRadius: 8, borderWidth: 4, borderColor: '#000', padding: 16, alignItems: 'center', justifyContent: 'center', minHeight: 80 }}>
          <Text style={{ fontSize: 60, fontWeight: 'bold', color: '#9333ea' }}>✚</Text>
        </View>

        {/* Middle Section: Game Buttons */}
        <View style={{ flexDirection: 'row', gap: 12, flex: 1 }}>
          {/* NEW GAME Button */}
          <TouchableOpacity 
            onPress={onStart}
            style={{ flex: 1, backgroundColor: '#fff', borderRadius: 12, borderWidth: 4, borderColor: '#000', justifyContent: 'center', alignItems: 'center', paddingVertical: 16, position: 'relative' }}
          >
            <Text style={{ fontSize: 32, fontWeight: '900', color: '#9333ea', letterSpacing: 2 }}>NEW</Text>
            <Text style={{ fontSize: 32, fontWeight: '900', color: '#9333ea', letterSpacing: 2 }}>GAME</Text>
            {/* Rope decorations */}
            <View style={{ position: 'absolute', left: 8, top: '20%', width: 16, height: 16, backgroundColor: '#d97757', borderRadius: 8 }} />
            <View style={{ position: 'absolute', right: 8, top: '20%', width: 16, height: 16, backgroundColor: '#d97757', borderRadius: 8 }} />
          </TouchableOpacity>

          {/* LOAD Button */}
          <TouchableOpacity 
            style={{ flex: 1, backgroundColor: '#fff', borderRadius: 12, borderWidth: 4, borderColor: '#000', justifyContent: 'center', alignItems: 'center', paddingVertical: 16, position: 'relative' }}
          >
            <Text style={{ fontSize: 32, fontWeight: '900', color: '#9333ea', letterSpacing: 2 }}>LOAD</Text>
            {/* Rope decorations */}
            <View style={{ position: 'absolute', left: 8, top: '20%', width: 16, height: 16, backgroundColor: '#d97757', borderRadius: 8 }} />
            <View style={{ position: 'absolute', right: 8, top: '20%', width: 16, height: 16, backgroundColor: '#d97757', borderRadius: 8 }} />
          </TouchableOpacity>
        </View>

        {/* Bottom Section: Characters */}
        <View style={{ backgroundColor: '#fff', borderRadius: 8, borderWidth: 4, borderColor: '#000', padding: 12, flexDirection: 'row', gap: 6, minHeight: 140 }}>
          {characters.map((char) => (
            <CharacterCard key={char.name} color={char.color} name={char.name} emoji={char.emoji} />
          ))}
        </View>

        {/* Stats Bar */}
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#9333ea', fontWeight: '900', fontSize: 13 }}>Level: {level}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#9333ea', fontWeight: '900', fontSize: 13 }}>Score: {score}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
