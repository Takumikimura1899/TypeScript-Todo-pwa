import './App.css';
import Header from './components/Header';
// 初期化されたfirebaseを呼び出す
import './service/firebase';

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
