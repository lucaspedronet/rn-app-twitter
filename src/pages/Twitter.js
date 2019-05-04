/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c2022',
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1c2022',
    marginVertical: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    marginRight: 10,
    marginLeft: 10,
  },
});

export default class Tweet extends Component {
  state = {
    like: false,
  };

  handerLikes = () => {
    const { like } = this.state;
    if (!like) {
      this.setState({ like: true });
    } else {
      this.setState({ like: false });
    }
  };

  render() {
    const { tweet } = this.props;
    const { like } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.author}>{tweet.author}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
        <View style={styles.likeButton}>
          <TouchableOpacity onPress={this.handerLikes}>
            <Icon
              name="heart-o"
              size={20}
              style={like === true ? { color: 'red' } : { bordeColor: '#999' }}
            />
          </TouchableOpacity>
          <Text style={styles.likeText}>{tweet.likes}</Text>
        </View>
      </View>
    );
  }
}
