import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    backgroundColor: '#3f51b5',
    position: 'fixed',
    bottom: 0,
  },
}));

const Footer = () => {
  const classes = useStyles();
  return <Box className={classes.root}>copyright キムラタクミ</Box>;
};

export default Footer;
