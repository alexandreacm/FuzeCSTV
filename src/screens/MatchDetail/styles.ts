import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg.primary,
    alignItems: 'center',
  },
  title: {
    color: theme.colors.text.white,
  },
  teamContainer: {
    width: '100%',
    height: 130,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
  },
  middleTitle: {
    width: 14,
    height: 14,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    margin: 20,
    textAlign: 'center',
    color: theme.colors.ui.secondary,
  },
  leagueTitle: {
    width: 260,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    color: theme.colors.text.white,
    marginLeft: 8,
  },
  containerImg: {
    width: 90,
    height: 90,
    alignItems: 'center',
    padding: 8,
  },
  titleLeague: {
    width: 120,
    fontFamily: theme.fonts.titleBold,
    fontSize: 10,
    textAlign: 'center',
    color: theme.colors.text.white,
    paddingTop: 5,
  },
  containerLogoTeam: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.text.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  DefaultTeamLogo: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.ui.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 12,
    textAlign: 'center',
    color: theme.colors.text.white,
    lineHeight: 14.06,
    marginBottom: 12,
  },
  cardNamePlayer: {
    width: 174,
    height: 58,
    borderRadius: 12,
    backgroundColor: '#272639',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    margin: 8,
  },
  frameNamePicture: {
    width: 154,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  frameNickname: {
    width: 90,
    height: 31,
  },
  nickname: {
    fontFamily: theme.fonts.titleBold,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'right',
    color: theme.colors.text.white,
  },
  playerName: {
    lineHeight: 15,
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
    color: theme.colors.text.playerName,
  },
  picture: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  DefaultPicture: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.ui.secondary,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    backgroundColor: theme.colors.ui.error,
    padding: 10,
    color: theme.colors.text.white,
  },
  containerTime: {
    marginVertical: 20,
  },
});

export default styles;
