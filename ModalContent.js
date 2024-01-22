import React from 'react';
import { View, Text, Button } from 'react-native';

const ModalContent = ({ closeModal }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>This is the modal content</Text>
      <Button title="Close" onPress={closeModal} />
    </View>
  );
};

export default ModalContent;