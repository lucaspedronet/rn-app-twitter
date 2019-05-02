/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-useless-return */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    marginTop: 30,
  },
  button: {
    height: 44,
    alignSelf: 'stretch',
    backgroundColor: '#4bb0ee',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  iconTwitter: {
    justifyContent: 'center',
  },
});

export default class Login extends Component {
  static navigationOptions = {
    header: true,
    title: 'Login',
  };

  state = {
    username: '',
  };

  componentDidMount() {
    const username = AsyncStorage.getItem('@movimentoTI:Twitter');
    console.tron.log(username);
    if (username) {
      this.navigateForTimeLine();
    }
  }

  sendLogin = async () => {
    const { username } = this.state;
    if (username.lenght === 0) return;
    await AsyncStorage.setItem('@movimentoTI:Twitter', username);
    this.navigateForTimeLine();
  };

  navigateForTimeLine = () => {
    this.props.navigation.navigate('TimeLine');
  };

  handerInpuText = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#4bb0ee" />
        <View style={styles.iconTwitter} />
        <View style={styles.content}>
          <Icon size={54} name="twitter" color="#4bb0ee" />

          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="#999"
            style={styles.input}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            placeholder="ex: LucasPedroLopes"
            returnKeyType="send"
            onSubmitEditing={this.sendLogin}
          />

          <TouchableOpacity style={styles.button} onPress={this.sendLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
