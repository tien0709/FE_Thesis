import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { Speech } from 'react-native-voice';
import { Permissions } from 'react-native'; // Optional for permission check

const App = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const [recording, setRecording] = useState(false);

  const requestMicrophonePermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') {
      console.warn('Microphone permission not granted');
    }
  };

  const startRecording = async () => {
    try {
      await requestMicrophonePermission(); // Call if needed
      setRecording(true);
      await Speech.startRecord({
        // Optional configuration options like language, showUI, etc.
      });
    } catch (error) {
      console.error('Recording error:', error);
    }
  };

  const stopRecording = async () => {
    try {
      setRecording(false);
      const results = await Speech.stopRecord();
      const recognized = results[0];
      setRecognizedText(recognized);
    } catch (error) {
      console.error('Stop recording error:', error);
    }
  };

  return (
    <View>
      <Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />
      <Text>{recognizedText}</Text>
    </View>
  );
};

export default App;

