import React from 'react';
import { mockProjects } from '../data/mockProjectData';
import ProjectCard from '../components/projects/ProjectCard';

const ProjectIdeas: React.FC = () => {
  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Project Ideas</h1>
        <p className="text-gray-400">
          Explore interesting project ideas to enhance your portfolio and technical skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectIdeas; 