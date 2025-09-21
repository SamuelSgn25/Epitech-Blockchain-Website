import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, BookOpen, Award, Target, Globe } from 'lucide-react';
import { ROUTES } from '../utils/constants';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté dynamique d\'étudiants passionnés par la blockchain et les technologies émergentes.'
    },
    {
      icon: Calendar,
      title: 'Événements Réguliers',
      description: 'Participez à nos séminaires, conférences et ateliers pour approfondir vos connaissances en blockchain.'
    },
    {
      icon: BookOpen,
      title: 'Formation Continue',
      description: 'Bénéficiez de formations de qualité dispensées par des experts et nos partenaires institutionnels.'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Obtenez des certifications reconnues et participez à nos examens pour valider vos compétences.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Membres Actifs' },
    { number: '20+', label: 'Événements Organisés' },
    { number: '3', label: 'Partenaires Stratégiques' },
    { number: '100%', label: 'Satisfaction' }
  ];

  const executiveMembers = [
    {
      name: 'Brouhane BONI GOMINA',
      position: 'Président',
      image: '/images/executives/president.jpg'
    },
    {
      name: 'Samuel SOGLOHOUN',
      position: 'Coordonateur du Bureau Exécutif',
      image: '/images/executives/coordinator.jpg'
    },
    {
      name: 'Estelle GOSSOU',
      position: 'Secrétaire',
      image: '/images/executives/secretary.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo Principal */}
            <div className="flex justify-center mb-8">
              <img 
                src="/images/logo/Epitech Blockchain Club Logo.jpg" 
                alt="Logo Club Blockchain Epitech Bénin" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover shadow-lg"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Club Blockchain
              <span className="block text-green-600">Epitech Bénin</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Promouvoir l'éducation et l'innovation blockchain au Bénin et en Afrique. 
              Rejoignez-nous pour explorer l'univers passionnant de la blockchain !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.MEMBERSHIP}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                Rejoindre le Club
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={ROUTES.ACTIVITIES}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Voir les Activités
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Rejoindre Notre Club ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les avantages de faire partie de notre communauté blockchain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Board Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Bureau Exécutif 2025-2026
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rencontrez les membres qui dirigent notre club avec passion et dévouement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {executiveMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to={ROUTES.EXECUTIVE_BOARD}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            >
              Voir Tous les Membres
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Partenaires Stratégiques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec des institutions de renom pour offrir la meilleure expérience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Epitech Bénin
              </h3>
              <p className="text-gray-600 mb-4">
                École d'informatique et d'innovation technologique
              </p>
              <a
                href="https://epitech.bj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Visiter le site →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Future Studio
              </h3>
              <p className="text-gray-600 mb-4">
                Studio d'innovation et de développement technologique
              </p>
              <a
                href="https://www.futurestudio.bj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Visiter le site →
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Africa Blockchain Institute
              </h3>
              <p className="text-gray-600 mb-4">
                Institut de formation et de recherche en blockchain
              </p>
              <a
                href="https://africablockchain.institute/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                Visiter le site →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Rejoindre l'Aventure Blockchain ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté et participez à la révolution blockchain au Bénin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={ROUTES.MEMBERSHIP}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Devenir Membre
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to={ROUTES.CONTACT}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
