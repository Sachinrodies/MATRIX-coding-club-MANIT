import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Tag, Users, CheckCircle, ExternalLink } from 'lucide-react';
import { mockProjects } from '../data/mockProjectData';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container-custom py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
          <Link to="/project-ideas" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <Link 
          to="/project-ideas"
          className="inline-flex items-center text-gray-400 hover:text-matrix-green-500 mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to Projects</span>
        </Link>

        <div className="card">
          <div className="p-6 border-b border-matrix-dark-700">
            <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-matrix-dark-700 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Users size={14} className="mr-1 text-matrix-green-500" />
                <span>Difficulty: {project.difficulty}</span>
              </div>
              <div className="flex items-center">
                <Tag size={14} className="mr-1 text-matrix-green-500" />
                <span>Category: {project.category}</span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">Project Description</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>

              {project.id === 'project-7' && (
                <div className="mb-6 p-4 bg-matrix-dark-800 rounded-lg border border-matrix-green-500/20">
                  <h3 className="text-lg font-semibold text-matrix-green-500 mb-2">Live System</h3>
                  <p className="text-gray-300 mb-4">
                    The system is now live and available for use at:
                  </p>
                  <a 
                    href="https://att-lib.manit.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-matrix-green-500 hover:text-matrix-green-400 transition-colors flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    https://att-lib.manit.ac.in/
                  </a>
                </div>
              )}

              <h2 className="text-2xl font-semibold text-white mb-4">Requirements</h2>
              <ul className="space-y-2 mb-6">
                {project.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="text-matrix-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-4">
                {project.websiteUrl && (
                  <a 
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>Visit Website</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    <Github size={16} className="mr-2" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 