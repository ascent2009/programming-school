import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import StartPage from './components/pages/StartPage';
import NotFoundPage from './components/pages/NotFoundPage';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<MainPage />} /> */}
      <Route index element={<StartPage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="main/:userID" element={<MainPage />} />
      <Route path="contacts" />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default App;
