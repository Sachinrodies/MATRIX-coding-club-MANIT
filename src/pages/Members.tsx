import { useState, useEffect } from 'react';
import { Filter, Search, Users, Sparkles } from 'lucide-react';
import MemberCard from '../components/members/MemberCard';

type RoleType = 'all' | 'lead' | 'core' | 'member' | 'new-recruit';

interface Member {
  id: string;
  name: string;
  role: 'lead' | 'core' | 'member' | 'new-recruit';
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
  bio: string;
}

// Sample data - replace with actual data from your backend
const members: Member[] = [
  
  {
    id: '1',
    name: 'Ankit Chauhan',
    role: 'lead',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEG6DC4mLsMPQ/profile-displayphoto-shrink_200_200/B56ZThy_XWGQAY-/0/1738955029029?e=2147483647&v=beta&t=ANwhbdCi3jGDokBgSFY7KpGxcPuYNG1rEbOnIyrvDOE',
    github: 'https://github.com/ankitsingh2105',
    linkedin: 'https://in.linkedin.com/in/ankitchauhan21',
    email: 'ankitchauhan21500@gmail.com',
    bio: 'Core Team Member and Technical Lead'
  },
  // Add more members as needed
  {
    id: '2',
    name: 'Risu Gupta',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQEJ891DUddiLQ/profile-displayphoto-shrink_200_200/B4DZP6KTfYHYAY-/0/1735068827564?e=2147483647&v=beta&t=5vySMaSuoCv0lznBovlerh5caejOIS-U_437X774Psw',
    linkedin: 'https://www.linkedin.com/in/risu-gupta-28aa01230/',
    github: 'https://github.com/riskmr3275',
    email: 'riskmr3275@gmail.com',
    bio: 'Event Management Head'
  },
  {
    id: '3',
    name: 'Atul Tandan',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHnGrSrfUAWzg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691404862659?e=2147483647&v=beta&t=6R8QlChvne8MXMUObJ9wm1lqBQiW4aaNhSWNWBGN5rI',
    github: 'https://github.com/atul074',
    linkedin: 'https://www.linkedin.com/in/atul-tandan-6583b7287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'ankitchauhan21500@gmail.com',
    bio: 'Web Developer'
  },
  {
    id: '4',
    name: 'Manas Das',
    role: 'core',
    image: 'https://avatars.githubusercontent.com/u/141831871?v=4',
    github: 'https://github.com/xNORAGAMIx',
    linkedin: 'https://www.linkedin.com/in/manas-d-552168146/',
    email: 'noragami0021@gmail.com',
    bio: 'Secretary'
  },
  {
    id: '5',
    name: 'Vridhi Nahata ',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGBy1m7Q-Gcxw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719049508998?e=1750896000&v=beta&t=PClDmoClAteOlzssl3dHVkDKNYX_Xo0l0NnCirrttvo',
    github: 'https://github.com/VridhiNahata',
    linkedin: 'https://www.linkedin.com/in/vridhi-nahata-8a4a14287/',
    email: 'namexyz@gmail.com',
    bio: 'Web Developer'
  },
  {
    id: '6',
    name: 'Sonali Jatav ',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGf3CSWAjTpZg/profile-displayphoto-shrink_400_400/B4DZOmVAUMG0Ag-/0/1733662345305?e=1750896000&v=beta&t=nBhJVDXD8oofRhEEQKt5kDOh6RhARvo96NW5QZmxPoM',

    github: 'https://github.com/Sonalijatav',
    linkedin: 'https://www.linkedin.com/in/sonali-jatav-540b6b202/',
    email: 'namexyz@gmail.com',
    bio: 'Web Developer'
  },
  {
    id: '7',
    name: 'Harstuti ',
    role: 'member',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEesGTAiFfdwg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718218193349?e=1750896000&v=beta&t=Qs5BgzB3ihGLA4NGlgo2coHgMQbH5rfC2xCRRaLxO5k',

    github: 'https://github.com/harstuti121',
    linkedin: 'https://www.linkedin.com/in/harstuti/',
    email: 'namexyz@gmail.com',
    bio: 'Design Team Member'
  },
  {
    id: '8',
    name: 'Nitish Kumar',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGd6R0mosGnzw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1691405196145?e=1750896000&v=beta&t=BR6FhnDX6R9xENXVA9HB-kyrIWgfnmrpAAayC1zajJ8',
    github: 'https://github.com/nitishkumar2303',
    linkedin: 'https://www.linkedin.com/in/nitishkumar2303/',
    email: 'nk2332001@gmail.com',
    bio: 'Matrix Design Team Head'
  },
  {
    id: '9',
    name: 'Kunj Arora ',
    role: 'core',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQF0HEb6ABjuyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721389348352?e=1750896000&v=beta&t=BbkTTCX5SEnTfU76uoYx6OTBVxztfXFgGdrlHBWnimE',

    github: 'https://github.com/KunjArora23',
    linkedin: 'https://www.linkedin.com/in/kunjarora23/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'namexyz@gmail.com',
    bio: 'Content Management Head'
  },

];

// New recruits data
const newRecruits: Member[] = [
  {
    id: '1',
    name: 'Sachin ',
    role: 'member',
    image: 'https://avatars.githubusercontent.com/u/97837770?v=4',
    github: 'https://github.com/Sachinrodies',
    linkedin: 'https://www.linkedin.com/in/sachin-jha-b25a71174/?original_referer=',
    email: 'sahilrodies@gmail.com',
    bio: 'Team member'
  },
  {
    id: '2',
    name: 'New Recruit 2',
    role: 'new-recruit',
    image: 'https://via.placeholder.com/150',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    email: 'newrecruit2@example.com',
    bio: 'Looking forward to contributing!'
  }
];

const Members = () => {
  const [roleFilter, setRoleFilter] = useState<RoleType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  const filteredMembers = members.filter(member => {
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    const matchesSearch = !searchTerm || 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-gray-300 max-w-3xl">
            Meet the talented individuals who make our club thrive. From leadership to core members, 
            each person brings unique skills and passion to our community.
          </p>
        </div>

        {/* New Recruits Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-matrix-green-500" size={24} />
            <h2 className="text-2xl font-bold text-white">New Recruits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newRecruits.map(recruit => (
              <MemberCard key={recruit.id} member={recruit} />
            ))}
          </div>
        </div>
        
        <div className="bg-matrix-dark-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-matrix-dark-700 border border-matrix-dark-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-matrix-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-400" />
              <span className="text-gray-400">Filter:</span>
              <div className="flex rounded-md overflow-hidden">
                <button
                  onClick={() => setRoleFilter('all')}
                  className={`px-4 py-2 text-sm font-medium ${
                    roleFilter === 'all' 
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  All
                </button>
                <button
                  onClick={() => setRoleFilter('lead')}
                  className={`px-4 py-2 text-sm font-medium ${
                    roleFilter === 'lead'
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  Leads
                </button>
                <button
                  onClick={() => setRoleFilter('core')}
                  className={`px-4 py-2 text-sm font-medium ${
                    roleFilter === 'core'
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  Core
                </button>
                <button
                  onClick={() => setRoleFilter('member')}
                  className={`px-4 py-2 text-sm font-medium ${
                    roleFilter === 'member'
                      ? 'bg-matrix-green-500 text-matrix-dark-900' 
                      : 'bg-matrix-dark-700 text-gray-300 hover:bg-matrix-dark-600'
                  } transition-colors`}
                >
                  Members
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {filteredMembers.length === 0 ? (
          <div className="text-center py-12 bg-matrix-dark-800 rounded-lg">
            <Users size={48} className="mx-auto text-gray-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No members found</h3>
            <p className="text-gray-400">
              {searchTerm 
                ? 'No members matching your search criteria. Try a different search term.'
                : 'No members are available in this category.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map(member => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Members; 