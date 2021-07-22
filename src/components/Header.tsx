import { signInWithGoogle, logOut } from '../service/Firebase';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header: React.FC = () => {
  // useContextを使用してAuthContextから値を取り出す。
  const currentUser = useContext(AuthContext);
  console.log(currentUser);

  const buttonRender = () => {
    if (currentUser.currentUser) {
      return <button onClick={logOut}>ログアウト</button>;
    } else {
      return <button onClick={signInWithGoogle}>ログイン</button>;
    }
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography>ヘッダー</Typography>
        <br />
        <p>関数宣言型</p>
        {buttonRender()}
        <br />
        <p>三項演算子</p>
        {currentUser.currentUser ? (
          <button onClick={logOut}>ログアウト</button>
        ) : (
          <button onClick={signInWithGoogle}>ログイン</button>
        )}
        <br />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
