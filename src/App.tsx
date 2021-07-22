import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from './provider/AuthProvider';
// 初期化されたfirebaseを呼び出す
import './service/Firebase';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
