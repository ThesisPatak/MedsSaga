import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const questions = [
  {
    question: 'Which OTC medicine is best for mild headache and fever?',
    answers: [
      { text: 'Ibuprofen', correct: true },
      { text: 'Cough drops', correct: false },
      { text: 'Antacid', correct: false }
    ]
  },
  {
    question: 'What should you do before taking any OTC medicine?',
    answers: [
      { text: 'Read the label', correct: true },
      { text: 'Take twice as much for faster relief', correct: false },
      { text: 'Mix with unknown herbs', correct: false }
    ]
  }
];

export default function QuizScreen({ onComplete, onBack }) {
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const answerQuestion = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 5);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelectedAnswer(null);
    } else {
      onComplete(score, []);
    }
  };

  const question = questions[current];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 18, backgroundColor: '#f3ebff' }}>
      <View style={{ borderRadius: 24, backgroundColor: '#8b5cf6', padding: 20, marginBottom: 18 }}>
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: '800' }}>Quiz Challenge</Text>
        <Text style={{ color: '#e9d5ff', marginTop: 10, fontSize: 16 }}>{question.question}</Text>
      </View>

      {question.answers.map((answer) => (
        <TouchableOpacity
          key={answer.text}
          onPress={() => answerQuestion(answer)}
          style={{
            backgroundColor: selectedAnswer === answer ? '#d8b4fe' : '#ede9fe',
            padding: 18,
            borderRadius: 20,
            marginBottom: 14,
            borderWidth: selectedAnswer === answer ? 2 : 0,
            borderColor: '#7c3aed'
          }}
        >
          <Text style={{ color: '#4c1d95', fontSize: 16, fontWeight: '700' }}>{answer.text}</Text>
        </TouchableOpacity>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 14 }}>
        <TouchableOpacity onPress={onBack} style={{ backgroundColor: '#6d28d9', padding: 16, borderRadius: 18, width: '48%' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextQuestion} style={{ backgroundColor: '#7c3aed', padding: 16, borderRadius: 18, width: '48%' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>{current + 1 < questions.length ? 'Next' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 22, padding: 18, borderWidth: 1, borderColor: '#ddd6fe' }}>
        <Text style={{ color: '#5b21b6', fontSize: 16, fontWeight: '700', marginBottom: 8 }}>Quiz Score</Text>
        <Text style={{ color: '#4c1d95', fontSize: 20, fontWeight: '800' }}>{score}</Text>
      </View>
    </ScrollView>
  );
}
