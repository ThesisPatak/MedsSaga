import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const questions = [
  {
    question: 'Which OTC medicine is best for mild headache and fever?',
    emoji: '🤕',
    answers: [
      { text: 'Ibuprofen', correct: true },
      { text: 'Cough drops', correct: false },
      { text: 'Antacid', correct: false }
    ]
  },
  {
    question: 'What should you do before taking any OTC medicine?',
    emoji: '📖',
    answers: [
      { text: 'Read the label', correct: true },
      { text: 'Take twice as much', correct: false },
      { text: 'Mix with herbs', correct: false }
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
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#b78ef5', padding: 12 }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        {/* Main Quiz Content */}
        <View style={{ flex: 1 }}>
          {/* Question Header */}
          <View style={{ backgroundColor: '#fff', borderRadius: 12, borderWidth: 2, borderColor: '#000', padding: 12, marginBottom: 12 }}>
            <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 13 }}>Question {current + 1}</Text>
            <Text style={{ color: '#6b21a8', fontSize: 12, marginTop: 4, fontWeight: '600' }}>{question.question}</Text>
          </View>

          {/* Answer Options */}
          {question.answers.map((answer) => (
            <TouchableOpacity
              key={answer.text}
              onPress={() => answerQuestion(answer)}
              style={{
                backgroundColor: selectedAnswer === answer ? '#d8b4fe' : '#fff',
                padding: 10,
                borderRadius: 8,
                marginBottom: 8,
                borderWidth: 2,
                borderColor: selectedAnswer === answer ? '#9333ea' : '#000'
              }}
            >
              <Text style={{ color: '#6b21a8', fontSize: 12, fontWeight: '600' }}>○ {answer.text}</Text>
            </TouchableOpacity>
          ))}

          {/* Score Display */}
          <View style={{ backgroundColor: '#fff', borderRadius: 8, padding: 10, marginVertical: 12, borderWidth: 2, borderColor: '#9333ea', alignItems: 'center' }}>
            <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 11 }}>Score: {score}</Text>
          </View>

          {/* Navigation Buttons */}
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity onPress={onBack} style={{ flex: 1, backgroundColor: '#fff', padding: 10, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 11 }}>← Back</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextQuestion} style={{ flex: 1, backgroundColor: '#9333ea', padding: 10, borderRadius: 8, borderWidth: 2, borderColor: '#000', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 11 }}>{current + 1 < questions.length ? 'Next →' : '✓ Done'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Question Emoji Display */}
        <View style={{ width: 120, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 12, borderWidth: 3, borderColor: '#000', paddingVertical: 16 }}>
          <Text style={{ fontSize: 60, marginBottom: 8 }}>{question.emoji}</Text>
          <Text style={{ color: '#9333ea', fontWeight: 'bold', fontSize: 10, textAlign: 'center' }}>Quiz {current + 1}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
