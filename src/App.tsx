import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Contests from './pages/Contests';
import ContestDetail from './pages/ContestDetail';
import ProblemDetail from './pages/ProblemDetail';
import Discussion from './pages/Discussion';
import TechNews from './pages/TechNews';
import ProjectIdeas from './pages/ProjectIdeas';
import ProjectDetail from './pages/ProjectDetail';
import Profile from './pages/Profile';
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
        <Route path="project-ideas/:id" element={<ProjectDetail />} />
        <Route path="profile" element={<Profile />} />
        <Route path="register" element={<Register />} />
        <Route path="members" element={<Members />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;