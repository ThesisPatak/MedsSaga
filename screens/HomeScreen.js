import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const characters = [
  { name: 'Nina', color: '#ffb0d0', emoji: '👩‍⚕️' },
  { name: 'Milo', color: '#8cc4ff', emoji: '👨‍⚕️' },
  { name: 'Lina', color: '#ffd46e', emoji: '👩‍⚕️' },
  { name: 'Noah', color: '#b4a0ff', emoji: '👨‍⚕️' }
];

function CharacterCard({ color, name, emoji }) {
  return (
    <View style={{ alignItems: 'center', flex: 1, marginHorizontal: 2 }}>
      <View style={{ width: '100%', aspectRatio: 0.6, backgroundColor: color, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#000', marginBottom: 4 }}>
        <Text style={{ fontSize: 44, lineHeight: 55 }}>{emoji}</Text>
      </View>
      <Text style={{ color: '#1f2937', fontSize: 9, fontWeight: '900', textAlign: 'center' }}>{name}</Text>
    </View>
  );
}

export default function HomeScreen({ onStart, score, level }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#b78ef5', flexDirection: 'row', padding: 10, gap: 10 }}>
      {/* Left Sidebar - Menu Icons */}
      <View style={{ width: 55, alignItems: 'center', gap: 8, paddingTop: 8 }}>
        <View style={{ width: 48, height: 48, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24 }}>📋</Text>
        </View>
        <View style={{ width: 48, height: 48, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24 }}>👤</Text>
        </View>
        <View style={{ width: 48, height: 48, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 24 }}>📊</Text>
        </View>
      </View>

      {/* Main Content Area */}
      <View style={{ flex: 1, gap: 8 }}>
        {/* Cross Symbol - Large Box at Top */}
        <View style={{ backgroundColor: '#fff', borderRadius: 10, borderWidth: 4, borderColor: '#000', padding: 12, alignItems: 'center', justifyContent: 'center', minHeight: 100 }}>
          <Text style={{ fontSize: 90, fontWeight: 'bold', color: '#9333ea', lineHeight: 100 }}>✚</Text>
        </View>

        {/* Window/Blinds Section */}
        <View style={{ backgroundColor: '#8cc4ff', borderRadius: 8, borderWidth: 3, borderColor: '#000', height: 30, justifyContent: 'center', paddingHorizontal: 8 }}>
          <View style={{ height: 2, backgroundColor: '#fff', marginBottom: 4 }} />
          <View style={{ height: 2, backgroundColor: '#fff', marginBottom: 4 }} />
          <View style={{ height: 2, backgroundColor: '#fff', marginBottom: 4 }} />
          <View style={{ height: 2, backgroundColor: '#fff' }} />
        </View>

        {/* Game Buttons - Large */}
        <View style={{ flexDirection: 'row', gap: 8, flex: 0.8 }}>
          {/* NEW GAME Button */}
          <TouchableOpacity 
            onPress={onStart}
            style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, borderWidth: 4, borderColor: '#000', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, position: 'relative', shadowColor: '#000', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.2 }}
          >
            {/* Rope on left */}
            <View style={{ position: 'absolute', left: 12, top: 12, width: 18, height: 18, backgroundColor: '#d97757', borderRadius: 50%, borderWidth: 2, borderColor: '#8b4513' }} />
            <View style={{ position: 'absolute', left: 12, top: 40, width: 16, height: 3, backgroundColor: '#d97757', transform: [{ rotate: '15deg' }] }} />
            
            {/* Text */}
            <Text style={{ fontSize: 36, fontWeight: '900', color: '#9333ea', textAlign: 'center', lineHeight: 40 }}>NEW</Text>
            <Text style={{ fontSize: 36, fontWeight: '900', color: '#9333ea', textAlign: 'center', lineHeight: 40 }}>GAME</Text>
            
            {/* Rope on right */}
            <View style={{ position: 'absolute', right: 12, top: 12, width: 18, height: 18, backgroundColor: '#d97757', borderRadius: 50%, borderWidth: 2, borderColor: '#8b4513' }} />
            <View style={{ position: 'absolute', right: 12, top: 40, width: 16, height: 3, backgroundColor: '#d97757', transform: [{ rotate: '-15deg' }] }} />
          </TouchableOpacity>

          {/* LOAD Button */}
          <TouchableOpacity 
            style={{ flex: 1, backgroundColor: '#fff', borderRadius: 16, borderWidth: 4, borderColor: '#000', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, position: 'relative', shadowColor: '#000', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.2 }}
          >
            {/* Rope on left */}
            <View style={{ position: 'absolute', left: 12, top: 18, width: 18, height: 18, backgroundColor: '#d97757', borderRadius: 50%, borderWidth: 2, borderColor: '#8b4513' }} />
            <View style={{ position: 'absolute', left: 12, top: 44, width: 16, height: 3, backgroundColor: '#d97757', transform: [{ rotate: '15deg' }] }} />
            
            {/* Text */}
            <Text style={{ fontSize: 40, fontWeight: '900', color: '#9333ea', textAlign: 'center', lineHeight: 45 }}>LOAD</Text>
            
            {/* Rope on right */}
            <View style={{ position: 'absolute', right: 12, top: 18, width: 18, height: 18, backgroundColor: '#d97757', borderRadius: 50%, borderWidth: 2, borderColor: '#8b4513' }} />
            <View style={{ position: 'absolute', right: 12, top: 44, width: 16, height: 3, backgroundColor: '#d97757', transform: [{ rotate: '-15deg' }] }} />
          </TouchableOpacity>
        </View>

        {/* Characters Display - Larger */}
        <View style={{ backgroundColor: '#fff', borderRadius: 10, borderWidth: 4, borderColor: '#000', padding: 8, flexDirection: 'row', gap: 3, flex: 1, justifyContent: 'center' }}>
          {characters.map((char) => (
            <CharacterCard key={char.name} color={char.color} name={char.name} emoji={char.emoji} />
          ))}
        </View>

        {/* Stats Bar at Bottom */}
        <View style={{ flexDirection: 'row', gap: 8, height: 50 }}>
          <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', paddingVertical: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#9333ea', fontWeight: '900', fontSize: 14, letterSpacing: 1 }}>Level: {level}</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, borderWidth: 3, borderColor: '#000', paddingVertical: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#9333ea', fontWeight: '900', fontSize: 14, letterSpacing: 1 }}>Score: {score}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
