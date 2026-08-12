import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ScenarioScreen from './screens/ScenarioScreen';
import QuizScreen from './screens/QuizScreen';
import SummaryScreen from './screens/SummaryScreen';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [history, setHistory] = useState([]);

  const handleGameComplete = (levelScore, levelHistory) => {
    setScore(score + levelScore);
    setHistory([...history, ...levelHistory]);
    setLevel(level + 1);
    setScreen('summary');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0e2a4c' }}>
      <StatusBar barStyle="light-content" backgroundColor="#0e2a4c" />
      <View style={{ flex: 1, padding: 20 }}>
        {screen === 'home' && <HomeScreen onStart={() => setScreen('scenario')} score={score} level={level} />}
        {screen === 'scenario' && <ScenarioScreen onComplete={handleGameComplete} onBack={() => setScreen('home')} level={level} />}
        {screen === 'quiz' && <QuizScreen onComplete={handleGameComplete} onBack={() => setScreen('home')} level={level} />}
        {screen === 'summary' && (
          <SummaryScreen
            score={score}
            history={history}
            onRestart={() => {
              setScore(0);
              setLevel(1);
              setHistory([]);
              setScreen('home');
            }}
            onContinue={() => setScreen('scenario')}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
