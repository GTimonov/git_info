import React from 'react';
import { Modal, StyleSheet, Text, View , TouchableHighlight} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';
import LoginView from './src/views/LoginView';
import Expo from "expo";

export default class App extends React.Component {
  
  state = { loading: true };


  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>

        {/* <Icon ios='ios-menu' android="md-menu" style={{fontSize: 30, color: 'red'}}/> */}

        <LoginView/>

      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#fff',
  },
});
