import React from 'react';

// Hardcoded courses with your provided image
const COURSES = [
  {
    title: "Arabic for Beginners",
    description: "Start your Arabic journey with our comprehensive beginner course. Learn essential vocabulary, basic grammar, and conversational skills through our proven immersive method.",
    image: "https://i.postimg.cc/d131jqPS/image.png"
  },
  {
    title: "Business Arabic",
    description: "Master professional Arabic for the workplace. Perfect for professionals working in Arabic-speaking environments who need to communicate effectively in business settings.",
    image: "https://i.postimg.cc/d131jqPS/image.png"
  },
  {
    title: "Conversational Arabic",
    description: "Focus on practical speaking and listening skills. This course emphasizes real-world conversations and cultural understanding for everyday interactions.",
    image: "https://i.postimg.cc/d131jqPS/image.png"
  }
];

const CourseCard: React.FC<{ course: typeof COURSES[0] }> = ({ course }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-200/50 flex flex-col group">
    <div className="overflow-hidden">
      <img 
        src={course.image} 
        alt={course.title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 text-[#232345] group-hover:text-[#2b2b5c] transition-colors duration-300">
        {course.title}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{course.description}</p>
      <a 
        href="#" 
        className="font-semibold text-[#2b2b5c] hover:text-lime-500 self-start transition-all duration-300 flex items-center group-hover:translate-x-1"
      >
        Read more →
      </a>
    </div>
  </div>
);

const PopularCourses: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#2b2b5c]">
          Our Most Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-[#2b2b5c] to-[#4d7abb] hover:from-[#4d7abb] hover:to-[#2b2b5c] text-white font-bold py-5 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
