import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 200,
    backgroundColor: theme.colors.ui.card,
    borderRadius: 16,
    marginBottom: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamContainer: {
    width: '100%',
    height: 130,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.ui.secondary,
    borderBottomWidth: 0.2,
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
  imgBottom: {
    width: 20,
    height: 20,
  },
  leagueContainerBottom: {
    width: '100%',
    height: 32,
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
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
  containerCardMatch: {
    width: '100%',
    alignItems: 'flex-end',
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
});

export default styles;
