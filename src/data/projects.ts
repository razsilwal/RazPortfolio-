import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'fraudguard',
    name: 'FraudGuard — Fraud Detection & Risk Analytics',
    description:
      'An end-to-end machine learning platform for credit-card fraud detection, focusing on severe class imbalance, model comparison, PR-AUC evaluation, threshold analysis, and interpretable predictions.',
    technologies: [
      'Python',
      'scikit-learn',
      'XGBoost',
      'imbalanced-learn',
      'SHAP',
      'Streamlit',
    ],
    githubUrl: 'https://github.com/razsilwal/fraud-detection',
    liveUrl: 'https://fraud-detection-raz.streamlit.app/',
    imageAlt: 'FraudGuard fraud detection and risk analytics platform',
    featured: true,
  },

  {
    id: 'e-stationery',
    name: 'E-Stationery Management System',
    description:
      'An online stationery and book management system with separate user and administrator dashboards. Users can browse and purchase stationery products while administrators manage products and system data.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/razsilwal/4thSemProject',
    imageAlt: 'E-Stationery Management System dashboard',
    featured: true,
  },

  {
    id: 'car-rental',
    name: 'Car Rental Management System',
    description:
      'A web-based car rental platform where users can browse vehicles, make rental bookings, and complete online payments with eSewa. Includes authentication, booking management, and administrative controls.',
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