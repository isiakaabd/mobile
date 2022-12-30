import { Modal, StyleSheet, View } from "react-native";

const Modals = ({ children, open, close, modalStyle }) => {
  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={open}
        onRequestClose={close}
      >
        <View style={[styles.modalView, { ...modalStyle }]}>{children}</View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    width: 300,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 22,
  },
  modalView: {
    margin: 10,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modals;
