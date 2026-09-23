import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'e-stationery',
    name: 'E-Stationery Management System',
    description:
      'An online stationery and book management system with separate user and administrator dashboards. Users can browse and purchase stationery products while administrators can manage products and system data.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/razsilwal/4thSemProject',
    imageAlt: 'E-Stationery Management System dashboard',
    featured: true,
  },
  {
    id: 'car-rental',
    name: 'Car Rental Management System',
    description:
      'A web-based car rental platform where users can browse vehicles, make rental bookings, and complete online payments. Features include user authentication, vehicle booking, administrative management, and eSewa payment integration.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'eSewa'],
    githubUrl: 'https://github.com/razsilwal/Car-Rental-System-',
    imageAlt: 'Car Rental Management System booking interface',
    featured: true,
  },
  {
    id: 'shoe-store',
    name: 'Online Shoe Store',
    description:
      'An e-commerce web application that allows users to browse and purchase shoes online with database-driven product and order management.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/razsilwal/OnlineShoeStore',
    imageAlt: 'Online Shoe Store interface',
    featured: false,
  },
];
