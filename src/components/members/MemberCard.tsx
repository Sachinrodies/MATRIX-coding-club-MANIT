import { User, Github, Linkedin, Mail } from 'lucide-react';

interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
  bio: string;
}

interface MemberCardProps {
  member: Member;
}

const MemberCard = ({ member }: MemberCardProps) => {
  return (
    <div className="bg-matrix-dark-800 rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-matrix-dark-700 overflow-hidden">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User size={24} className="text-gray-400" />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="text-matrix-green-500">{member.role}</p>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{member.bio}</p>
        
        <div className="flex space-x-3">
          {member.github && (
            <a 
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-matrix-green-500 transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          {member.linkedin && (
            <a 
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-matrix-green-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-matrix-green-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard; 