import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contests from './pages/Contests';
import ContestDetail from './pages/ContestDetail';
import ProblemDetail from './pages/ProblemDetail';
import Discussion from './pages/Discussion';
import TechNews from './pages/TechNews';
import ProjectIdeas from './pages/ProjectIdeas';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Members from './pages/Members';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contests" element={<Contests />} />
        <Route path="contests/:id" element={<ContestDetail />} />
        <Route path="problems/:id" element={<ProblemDetail />} />
        <Route path="discussions/:id" element={<Discussion />} />
        <Route path="tech-news" element={<TechNews />} />
        <Route path="project-ideas" element={<ProjectIdeas />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="members" element={<Members />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;