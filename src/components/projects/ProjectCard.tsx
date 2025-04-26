import { Github, Tag, Users, ExternalLink } from 'lucide-react';
import { ProjectIdea } from '../../types/project';

interface ProjectCardProps {
  project: ProjectIdea;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card h-full flex flex-col group hover:border-matrix-green-500 transition-all duration-200">
      <div className="p-4 border-b border-matrix-dark-700">
        <h3 className="text-xl font-semibold text-white group-hover:text-matrix-green-500 transition-colors">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-matrix-dark-700 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-gray-300 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center">
            <Users size={14} className="mr-1 text-matrix-green-500" />
            <span>Difficulty: {project.difficulty}</span>
          </div>
          <div className="flex items-center">
            <Tag size={14} className="mr-1 text-matrix-green-500" />
            <span>Category: {project.category}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 hover:bg-matrix-green-600 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Link</span>
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center space-x-2 hover:border-matrix-green-500 hover:text-matrix-green-500 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;