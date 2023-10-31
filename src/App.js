import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import LogIn from './pages/Login';
import Sighup from './pages/Sighup';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> : <Navigate to='/login'/>}
            /> 
            <Route 
              path="/login"
              element={!user ? <LogIn />: <Navigate to='/' />}
            /> 
            <Route 
              path="/signup"
              element={!user ? <Sighup /> : <Navigate to='/' />}
            /> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
