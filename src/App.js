import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ProfileView from './components/profile-view/ProfileView'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="" element={<Navigate to="/home" />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
