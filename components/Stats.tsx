import React, { useState, useEffect } from 'react';
import { UsersIcon, BookOpenIcon, GlobeAltIcon, CheckBadgeIcon } from './icons/FeatureIcons';

interface StatItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, title, subtitle, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`text-center transition-all duration-700 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}>
      {/* Animated Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 bg-[#2b2b5c] rounded-full mb-4 transition-all duration-500 ${
        isVisible ? 'animate-bounce' : ''
      }`} style={{ animationDuration: '1s', animationIterationCount: '2' }}>
        <div className="text-lime-400">
          {icon}
        </div>
      </div>
      
      {/* Stats Text */}
      <div>
        <h3 className="text-xl font-bold text-[#232345] mb-1">{title}</h3>
        <p className="text-[#2b2b5c] font-medium">{subtitle}</p>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <StatItem 
            icon={<UsersIcon className="h-8 w-8" />} 
            title="45 Years of" 
            subtitle="Expertise" 
            delay={100}
          />
          <StatItem 
            icon={<BookOpenIcon className="h-8 w-8" />} 
            title="Unique Teaching" 
            subtitle="Method" 
            delay={200}
          />
          <StatItem 
            icon={<GlobeAltIcon className="h-8 w-8" />} 
            title="Native" 
            subtitle="Instructors" 
            delay={300}
          />
          <StatItem 
            icon={<CheckBadgeIcon className="h-8 w-8" />} 
            title="KHDA Certified" 
            subtitle="Courses" 
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
