/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import api from '~/service/api';

import Tweet from '~/pages/Twitter';
import Header from '~/components/Header';
// import api from '~/service/api'

// import { Container } from './styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  lista: {
    padding: 20,
  },
});

export default class TimeLine extends Component {
  state = {
    // tweets: [
    //   {
    //     author: 'Lucas Pedro',
    //     content:
    //       'Muito feliz e ansioso para iniciar os curso de React-native no evento Movimento TI, do CEULP/Ulbra!',
    //     likes: 2,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Renato abração',
    //     content: 'Nada melhor que um dia após o outro!',
    //     likes: 8,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Jackline Gomes',
    //     content: 'A única certeza que tenho é a vida vale sim apena!',
    //     likes: 12,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Ana Maria',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 12,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Patricia Nogueira',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 59,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Esmeralda Arruda',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 132,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'João Batista',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 92,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Teóf',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 122,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Lucas Pedro',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 43,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    //   {
    //     author: 'Lucas Pedro',
    //     content: 'Hoje vai ser um excelente dia!',
    //     likes: 98,
    //     id: Math.random() + 1,
    //     dataAl: new Date(),
    //   },
    // ],

    tweets: [],
  };

  async componentDidMount() {
    const response = await api.get('tweets');

    console.tron.log(response.data);

    this.setState({ tweets: response.data });
  }

  navigateForNewTwitter = () => {
    const { navigation } = this.props;
    navigation.navigate('NewTwitter');
  };

  render() {
    console.tron.log(this.props);
    const { tweets } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Tweets" />
        <ScrollView style={styles.lista}>
          {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
