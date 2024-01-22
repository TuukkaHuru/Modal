import React, { useState } from 'react';
import { View, Text, Modal, Pressable, StyleSheet } from 'react-native';
import ModalContent from './ModalContent';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={openModal}>
        <Text>Show modal message</Text>
      </Pressable>

      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        <ModalContent closeModal={closeModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});