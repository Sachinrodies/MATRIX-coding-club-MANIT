import { Tag, Users, ExternalLink, GraduationCap } from 'lucide-react';
import { ProjectIdea } from '../../types/project';

interface ProjectCardProps {
  project: ProjectIdea;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card h-full flex flex-col group hover:border-matrix-green-500 transition-all duration-200">
      <div className="p-4 border-b border-matrix-dark-700">
        <div className="flex items-center text-sm text-matrix-green-500 mb-2">
          <GraduationCap size={14} className="mr-1" />
          <span>Developed by MCA Students of MANIT Bhopal</span>
        </div>
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
        
        <div className="mt-auto">
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-matrix-green-500 text-white rounded-md flex items-center justify-center space-x-2 hover:bg-matrix-green-600 transition-colors w-full"
            >
              <ExternalLink size={16} />
              <span>Live Link</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;