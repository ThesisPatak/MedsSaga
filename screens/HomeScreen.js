import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Circle, Rect, Ellipse, Path, Line, Polygon } from 'react-native-svg';

const characters = [
  { name: 'Nina', color: '#ffb0d0', character: 'nina' },
  { name: 'Milo', color: '#8cc4ff', character: 'milo' },
  { name: 'Lina', color: '#ffd46e', character: 'lina' },
  { name: 'Noah', color: '#b4a0ff', character: 'noah' }
];

// SVG Character Components
function CharacterNina() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 120">
      {/* Legs */}
      <Rect x="28" y="85" width="8" height="20" fill="#000" />
      <Rect x="44" y="85" width="8" height="20" fill="#000" />
      {/* Shoes */}
      <Ellipse cx="32" cy="105" rx="6" ry="4" fill="#000" />
      <Ellipse cx="48" cy="105" rx="6" ry="4" fill="#000" />
      {/* Body - Medical Coat */}
      <Rect x="20" y="50" width="40" height="35" rx="8" fill="#fff" stroke="#000" strokeWidth="2" />
      {/* Coat buttons */}
      <Circle cx="40" cy="60" r="2" fill="#9333ea" />
      <Circle cx="40" cy="70" r="2" fill="#9333ea" />
      <Circle cx="40" cy="80" r="2" fill="#9333ea" />
      {/* Arms */}
      <Rect x="12" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      <Rect x="60" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      {/* Neck */}
      <Rect x="36" y="46" width="8" height="5" fill="#f4a483" />
      {/* Head */}
      <Circle cx="40" cy="35" r="12" fill="#f4a483" stroke="#000" strokeWidth="2" />
      {/* Hair */}
      <Path d="M 28 30 Q 28 20 40 20 Q 52 20 52 30" fill="#000" stroke="#000" strokeWidth="1" />
      {/* Hair sides */}
      <Ellipse cx="28" cy="32" rx="4" ry="6" fill="#000" />
      <Ellipse cx="52" cy="32" rx="4" ry="6" fill="#000" />
      {/* Eyes */}
      <Circle cx="36" cy="33" r="2" fill="#000" />
      <Circle cx="44" cy="33" r="2" fill="#000" />
      {/* Mouth */}
      <Path d="M 37 38 Q 40 40 43 38" stroke="#000" strokeWidth="1.5" fill="none" />
      {/* Smile cheeks */}
      <Circle cx="32" cy="36" r="1.5" fill="#ffb0d0" opacity="0.6" />
      <Circle cx="48" cy="36" r="1.5" fill="#ffb0d0" opacity="0.6" />
    </Svg>
  );
}

function CharacterMilo() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 120">
      {/* Legs */}
      <Rect x="28" y="85" width="8" height="20" fill="#000" />
      <Rect x="44" y="85" width="8" height="20" fill="#000" />
      {/* Shoes */}
      <Ellipse cx="32" cy="105" rx="6" ry="4" fill="#000" />
      <Ellipse cx="48" cy="105" rx="6" ry="4" fill="#000" />
      {/* Body - Medical Coat */}
      <Rect x="20" y="50" width="40" height="35" rx="8" fill="#fff" stroke="#000" strokeWidth="2" />
      {/* Coat buttons */}
      <Circle cx="40" cy="60" r="2" fill="#9333ea" />
      <Circle cx="40" cy="70" r="2" fill="#9333ea" />
      <Circle cx="40" cy="80" r="2" fill="#9333ea" />
      {/* Arms */}
      <Rect x="12" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      <Rect x="60" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      {/* Neck */}
      <Rect x="36" y="46" width="8" height="5" fill="#f4a483" />
      {/* Head */}
      <Circle cx="40" cy="35" r="12" fill="#f4a483" stroke="#000" strokeWidth="2" />
      {/* Hair - boy cut */}
      <Path d="M 30 25 Q 28 18 40 18 Q 52 18 50 25" fill="#000" />
      <Polygon points="40,20 45,27 35,27" fill="#000" />
      {/* Eyes - happy */}
      <Path d="M 35 32 Q 36 34 37 32" stroke="#000" strokeWidth="1.5" fill="none" />
      <Path d="M 43 32 Q 44 34 45 32" stroke="#000" strokeWidth="1.5" fill="none" />
      {/* Big smile */}
      <Path d="M 37 38 Q 40 42 43 38" stroke="#000" strokeWidth="2" fill="none" />
      {/* Cheeks */}
      <Circle cx="30" cy="35" r="2" fill="#ff9999" opacity="0.5" />
      <Circle cx="50" cy="35" r="2" fill="#ff9999" opacity="0.5" />
    </Svg>
  );
}

function CharacterLina() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 120">
      {/* Legs */}
      <Rect x="28" y="85" width="8" height="20" fill="#000" />
      <Rect x="44" y="85" width="8" height="20" fill="#000" />
      {/* Shoes */}
      <Ellipse cx="32" cy="105" rx="6" ry="4" fill="#000" />
      <Ellipse cx="48" cy="105" rx="6" ry="4" fill="#000" />
      {/* Body - Medical Coat (blue) */}
      <Rect x="20" y="50" width="40" height="35" rx="8" fill="#4a90e2" stroke="#000" strokeWidth="2" />
      {/* Coat buttons */}
      <Circle cx="40" cy="60" r="2" fill="#fff" />
      <Circle cx="40" cy="70" r="2" fill="#fff" />
      <Circle cx="40" cy="80" r="2" fill="#fff" />
      {/* Arms */}
      <Rect x="12" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      <Rect x="60" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      {/* Neck */}
      <Rect x="36" y="46" width="8" height="5" fill="#f4a483" />
      {/* Head */}
      <Circle cx="40" cy="35" r="12" fill="#f4a483" stroke="#000" strokeWidth="2" />
      {/* Hair - longer black */}
      <Path d="M 30 28 Q 28 15 40 15 Q 52 15 50 28" fill="#000" />
      <Ellipse cx="28" cy="35" rx="3" ry="8" fill="#000" />
      <Ellipse cx="52" cy="35" rx="3" ry="8" fill="#000" />
      {/* Eyes */}
      <Circle cx="36" cy="33" r="2" fill="#000" />
      <Circle cx="44" cy="33" r="2" fill="#000" />
      {/* Friendly smile */}
      <Path d="M 37 38 Q 40 40 43 38" stroke="#000" strokeWidth="1.5" fill="none" />
    </Svg>
  );
}

function CharacterNoah() {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 120">
      {/* Legs */}
      <Rect x="28" y="85" width="8" height="20" fill="#000" />
      <Rect x="44" y="85" width="8" height="20" fill="#000" />
      {/* Shoes */}
      <Ellipse cx="32" cy="105" rx="6" ry="4" fill="#000" />
      <Ellipse cx="48" cy="105" rx="6" ry="4" fill="#000" />
      {/* Body - Medical Coat (blue) */}
      <Rect x="20" y="50" width="40" height="35" rx="8" fill="#5b7eff" stroke="#000" strokeWidth="2" />
      {/* Coat buttons */}
      <Circle cx="40" cy="60" r="2" fill="#fff" />
      <Circle cx="40" cy="70" r="2" fill="#fff" />
      <Circle cx="40" cy="80" r="2" fill="#fff" />
      {/* Arms */}
      <Rect x="12" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      <Rect x="60" y="55" width="8" height="18" rx="4" fill="#f4a483" />
      {/* Neck */}
      <Rect x="36" y="46" width="8" height="5" fill="#f4a483" />
      {/* Head */}
      <Circle cx="40" cy="35" r="12" fill="#f4a483" stroke="#000" strokeWidth="2" />
      {/* Hair - black short */}
      <Path d="M 30 24 Q 28 16 40 16 Q 52 16 50 24" fill="#000" />
      <Polygon points="40,18 48,25 32,25" fill="#000" />
      {/* Eyes - friendly */}
      <Circle cx="36" cy="33" r="2" fill="#000" />
      <Circle cx="44" cy="33" r="2" fill="#000" />
      {/* Happy smile */}
      <Path d="M 37 39 Q 40 42 43 39" stroke="#000" strokeWidth="2" fill="none" />
    </Svg>
  );
}

function CharacterCard({ name, character, color }) {
  const getCharacter = () => {
    switch(character) {
      case 'nina': return <CharacterNina />;
      case 'milo': return <CharacterMilo />;
      case 'lina': return <CharacterLina />;
      case 'noah': return <CharacterNoah />;
      default: return null;
    }
  };

  return (
    <View style={{ alignItems: 'center', flex: 1, marginHorizontal: 2 }}>
      <View style={{ width: '100%', aspectRatio: 0.6, backgroundColor: color, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#000', marginBottom: 4 }}>
        {getCharacter()}
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
            <CharacterCard key={char.name} name={char.name} character={char.character} color={char.color} />
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
