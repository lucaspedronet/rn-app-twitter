/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44 + getStatusBarHeight(),
    // paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
});

export default styles;
