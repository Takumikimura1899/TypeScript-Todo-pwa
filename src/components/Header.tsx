import { signInWithGoogle, logOut } from '../service/firebase';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

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
    <header>
      ヘッダー
      <br />
      {buttonRender()}
      <br />
      {currentUser.currentUser ? (
        <button onClick={logOut}>ログアウト</button>
      ) : (
        <button onClick={signInWithGoogle}>ログイン</button>
      )}
    </header>
  );
};

export default Header;
