import { useState, useEffect } from 'react';
import Hero from '../components/shared/Hero';
import ContestCard from '../components/contests/ContestCard';
import NewsCard from '../components/news/NewsCard';
import ProjectCard from '../components/projects/ProjectCard';
import AnnouncementCard from '../components/announcements/AnnouncementCard';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Lightbulb, Trophy } from 'lucide-react';
import { useContest } from '../contexts/ContestContext';
import { mockNewsItems } from '../data/mockNewsData';
import { mockProjects } from '../data/mockProjectData';
import { mockAnnouncements } from '../data/mockAnnouncementData';

const Home = () => {
  const { upcomingContests } = useContest();
  const [latestNews, setLatestNews] = useState(mockNewsItems.slice(0, 3));
  const [featuredProjects, setFeaturedProjects] = useState(mockProjects.slice(0, 3));
  const [latestAnnouncements, setLatestAnnouncements] = useState(mockAnnouncements.slice(0, 2));
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
    
    // Simulate data fetching
    setLatestNews(mockNewsItems.slice(0, 3));
    setFeaturedProjects(mockProjects.slice(0, 3));
    setLatestAnnouncements(mockAnnouncements.slice(0, 2));
  }, []);
  
  return (
    <div>
      <Hero />
      
      {/* Announcements */}
      <section className="py-12 bg-matrix-dark-800">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Calendar className="mr-2 text-announce-orange" size={24} />
                Latest Announcements
              </h2>
              <p className="text-gray-400">
                Stay updated with the latest news and events from Matrix Coding Club
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestAnnouncements.map(announcement => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Contests */}
      <section className="py-16 bg-matrix-dark-900 matrix-grid">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Trophy className="mr-2 text-contest-purple" size={24} />
                Upcoming Contests
              </h2>
              <p className="text-gray-400">
                Challenge yourself with our upcoming coding competitions
              </p>
            </div>
            <Link to="/contests" className="btn-outline">
              <span>View All</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingContests.slice(0, 3).map(contest => (
              <ContestCard key={contest.id} contest={contest} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech News */}
      <section className="py-16 bg-matrix-dark-800">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <BookOpen className="mr-2 text-tech-blue" size={24} />
                Latest in Tech
              </h2>
              <p className="text-gray-400">
                Stay informed about the latest developments in technology
              </p>
            </div>
            <Link to="/tech-news" className="btn-outline">
              <span>View All</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Ideas */}
      <section className="py-16 bg-matrix-dark-900 matrix-grid">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
                <Lightbulb className="mr-2 text-matrix-green-500" size={24} />
                Featured Project Ideas
              </h2>
              <p className="text-gray-400">
                Explore interesting project ideas to enhance your portfolio
              </p>
            </div>
            <Link to="/project-ideas" className="btn-outline">
              <span>View All</span>
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-matrix-green-800 to-matrix-green-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Coding Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with fellow MCA students, participate in contests, and grow your technical skills with Matrix Coding Club.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn-primary bg-white text-matrix-green-800 hover:bg-gray-100">
              Register Now
            </Link>
            <Link to="/contests" className="btn-outline border-white text-white hover:bg-white hover:text-matrix-green-800">
              Explore Contests
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;