import type { Course, Testimonial, NewsArticle, CompanyLogo, Review } from './types';

export const COURSES: Course[] = [
  {
    image: 'https://picsum.photos/seed/course1/600/400',
    title: 'Group Arabic Classes for Adults',
    description: 'From Beginners I for essential skills to Advanced for fluency and confidence.',
  },
  {
    image: 'https://picsum.photos/seed/course2/600/400',
    title: 'Group Arabic Classes for Children & Teens',
    description: 'Enjoy a fun introduction to the Arabic language through games, songs, and stories.',
  },
  {
    image: 'https://picsum.photos/seed/course3/600/400',
    title: 'Arabic & English Immersion Program',
    description: 'Experience language and culture — learn Arabic or English with native instructors.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Anyone who is serious to learn how to speak regular spoken Arabic in the region, must opt for ALC course. I had tried others, but they were just very formal and business making. At ALC you feel that you are seriously learning.',
    author: 'Gurpreet Singh Anand',
    role: 'Beginners I',
  },
  {
    quote: 'The teaching methodology is fantastic. The instructors are native speakers and are incredibly patient and supportive. I have learned more in 3 months than I did in a year elsewhere. Highly recommended!',
    author: 'Jane Doe',
    role: 'Intermediate II',
  },
  {
    quote: 'A wonderful environment for learning. The classes are small and interactive, which allows for a lot of personal attention. The cultural immersion programs are a brilliant addition to the curriculum.',
    author: 'John Smith',
    role: 'Advanced I',
  },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    image: 'https://picsum.photos/seed/news1/600/400',
    date: 'April 17, 2025',
    category: 'International Association of Language Centres',
    title: 'Arabic Language Centre Joins IALC as the First Member in Dubai',
    excerpt: 'We are proud to welcome the Arabic Language Centre (ALC) in Dubai as a new member of the International Association of Language Centres.',
  },
  {
    image: 'https://picsum.photos/seed/news2/600/400',
    date: 'March 7, 2025',
    category: 'Khaleej Times',
    title: 'How one family keeps a Language Centre’s legacy alive',
    excerpt: 'Maliha Wehbe’s family is committed to keeping her Dubai dream alive.',
  },
  {
    image: 'https://picsum.photos/seed/news3/600/400',
    date: 'February 22, 2025',
    category: 'Teacher Spotlight',
    title: 'Teacher Spotlight: Angela, 27 Years of Passionate Teaching',
    excerpt: 'Meet Angela, a native Arabic speaker from Jordan who has devoted 27 years to teaching at the Arabic Language Centre (ALC).',
  },
];

export const COMPANY_LOGOS: CompanyLogo[] = [
    { src: 'https://picsum.photos/seed/maf/150/50?grayscale', alt: 'Majid Al Futtaim' },
    { src: 'https://picsum.photos/seed/nbad/150/50?grayscale', alt: 'National Bank of Abu Dhabi' },
    { src: 'https://picsum.photos/seed/canada/150/50?grayscale', alt: 'Canada Consulate' },
    { src: 'https://picsum.photos/seed/gems/150/50?grayscale', alt: 'GEMS Education' },
    { src: 'https://picsum.photos/seed/expo2020/150/50?grayscale', alt: 'Expo 2020' },
    { src: 'https://picsum.photos/seed/emirates/150/50?grayscale', alt: 'Emirates' },
    { src: 'https://picsum.photos/seed/dubaigov/150/50?grayscale', alt: 'Dubai Government' },
    { src: 'https://picsum.photos/seed/dcaa/150/50?grayscale', alt: 'Dubai Civil Aviation' },
    { src: 'https://picsum.photos/seed/carrefour/150/50?grayscale', alt: 'Carrefour' },
    { src: 'https://picsum.photos/seed/britishemb/150/50?grayscale', alt: 'British Embassy' },
    { src: 'https://picsum.photos/seed/dubaichamber/150/50?grayscale', alt: 'Dubai Chamber' },
    { src: 'https://picsum.photos/seed/dewa/150/50?grayscale', alt: 'DEWA' },
    { src: 'https://picsum.photos/seed/deloitte/150/50?grayscale', alt: 'Deloitte' },
];


export const REVIEWS: Review[] = [
    { avatar: 'https://picsum.photos/seed/avatar1/40/40', name: 'Jamil Ahmed', time: '2 days ago', rating: 5, text: 'Nice no 1 place to learn Arabic for adults abd childrens' },
    { avatar: 'https://picsum.photos/seed/avatar2/40/40', name: 'Asma Ali', time: '13 days ago', rating: 5, text: 'I enrolled at rhe ALC in July during their summer intensive and four month...' },
    { avatar: 'https://picsum.photos/seed/avatar3/40/40', name: 'Gaurav Nath', time: '13 days ago', rating: 5, text: 'Perfect for beginners looking to build a strong foundation in...' },
    { avatar: 'https://picsum.photos/seed/avatar4/40/40', name: 'Abdul Rasheed', time: '13 days ago', rating: 5, text: 'Currently I finished almost 5 months with ALC, I have an amazing experience, it...' },
    { avatar: 'https://picsum.photos/seed/avatar5/40/40', name: 'Isabella Tüzer', time: '16 days ago', rating: 5, text: 'very very satisfied with my classes, thankyou so much to all the good teachers!' }
];