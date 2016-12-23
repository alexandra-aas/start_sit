/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class PlayerCard extends Component {
  render() {
    return (
      <View style={styles.playerCard}>
        <Text style={styles.playerName}>
          {this.props.name}
        </Text>
        <Text style={styles.playerGame}>
          {this.props.team} at {this.props.opponent}
        </Text>
        <View style={styles.playerPointsContainer}>
          <Text style={styles.playerPoints}>
            {this.props.points}
          </Text>
        </View>
        <View style={styles.playerMeta}>
          <Text style={styles.playerStatus}>
            {this.props.status}
          </Text>
          <Text style={styles.playerRank}>
            WK 16 QB Rank
            #{this.props.rank}
          </Text>
        </View>
      </View>
    );
  }
}

export default class StartSit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayerCard
          name='Russel Wilson'
          team='Seahawks'
          opponent='Rams'
          points='15'
          status='active'
          rank='12' />
        <PlayerCard
          name='Ben Roethlisberger'
          team='Steelers'
          opponent='Falcons'
          points='20'
          status='active'
          rank='11' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  playerCard: {
    alignSelf: 'stretch',
    backgroundColor: '#002a5c',
    borderRadius: 10,
    margin: 20,
  },
  playerPointsContainer: {
    backgroundColor: '#56C50F',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    position: 'absolute',
    right: 0,
  },
  playerPoints: {
    color: '#fff'
  },
  playerName: {
    color: '#fff',
    fontFamily: 'SpaceMono-Regular',
    marginLeft: 30,
    marginTop: 30,
  },
  playerGame: {
    color: '#fff',
    marginLeft: 30,
    marginTop: 10,
    opacity: 0.4,
  },
  playerMeta: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 30,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingTop: 20,
    paddingRight: 30,
  }
});

AppRegistry.registerComponent('StartSit', () => StartSit);
