import { signInWithGoogle, logOut } from '../service/Firebase';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  button: {
    color: '#FFF',
  },
}));

const Header: React.FC = () => {
  // useContextを使用してAuthContextから値を取り出す。
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  const buttonRender = () => {
    if (currentUser.currentUser) {
      return (
        <Button className={classes.button} onClick={logOut}>
          ログアウト
        </Button>
      );
    } else {
      return (
        <Button className={classes.button} onClick={signInWithGoogle}>
          ログイン
        </Button>
      );
    }
  };

  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>
          ToDoList
          <br />
        </Typography>
        {buttonRender()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
