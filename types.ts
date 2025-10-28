
export interface Course {
  image: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface NewsArticle {
  image: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
}

export interface CompanyLogo {
  src: string;
  alt: string;
}

export interface Review {
  avatar: string;
  name: string;
  time: string;
  rating: number;
  text: string;
}
