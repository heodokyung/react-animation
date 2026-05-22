import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Details from './routes/Details';
import Home from './routes/Home';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
