# 🌐 Site Web du Club Blockchain d'Epitech Bénin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)

## 📖 À Propos

Le **Club Blockchain d'Epitech Bénin** est une initiative étudiante née de la collaboration entre Epitech Bénin, Future Studio et l'Africa Blockchain Institute. Fondé le **8 août 2024**, notre club vise à promouvoir l'éducation et l'innovation blockchain au Bénin et en Afrique.

### 🎯 Mission
- Promouvoir l'éducation blockchain auprès des étudiants d'Epitech
- Organiser des événements, séminaires et conférences
- Créer un écosystème d'apprentissage et d'innovation
- Développer des projets blockchain concrets

### 👥 Fondateurs
- **Soumaila CISSE** - 1er Président du Club
- **Samuel SOGLOHOUN** - Secrétaire Général et Vice-Président par Intérim
- **Godwin BEWA** - Community Manager
- **Cynthia ZINSOU** - Responsable Ressources Humaines
- **Salim KORA GUERRA**, **Constantin AWANCHEDE**, **Gaël AMOUSSOU**, **Lionel ADANKON**, **Josué ALLAGBE**, **Elisée ASSINOU**

## 🏛️ Bureau Exécutif 2025-2026

| Poste | Nom | Responsabilités |
|-------|-----|----------------|
| **Président** | Brouhane BONI GOMINA | Direction générale du club |
| **Secrétaire** | Estelle GOSSOU | Gestion administrative |
| **Trésorière** | Divine AZANMASSO | Gestion financière |
| **Chargé Évènements** | Patrice DAGBE | Organisation des activités |
| **Adjoint Évènements** | Jimmy BACHABI | Support organisation |
| **Lead Tech** | Moktar VODOUNNON | Direction technique |
| **Lead Communication** | Imane PHILIPPE | Communication externe |
| **Adjoint Communication** | Morayo ELEGBEDE | Support communication |
| **Chargé Pédago** | Christian ABIALA | Formation et éducation |
| **Lead RH** | Eunice GOSSOU-BAH | Gestion des membres |
| **Adjoint RH** | Ilhaam MAMA | Support RH |
| **Conseiller** | Farid ADOI | Conseil Tech et Pédago |
| **Coordinateur** | Samuel SOGLOHOUN | Coordination du Bureau |

## 🤝 Partenaires

- **[Epitech Bénin](https://epitech.bj/)** - École d'informatique
- **[Future Studio](https://www.futurestudio.bj/)** - Studio d'innovation
- **[Africa Blockchain Institute](https://africablockchain.institute/)** - Formation blockchain

## 🚀 Technologies Utilisées

### Frontend
- **React.js 19.1.1** - Framework JavaScript
- **TailwindCSS 4.1.13** - Framework CSS
- **Vite 7.1.2** - Build tool et serveur de développement
- **React Router** - Navigation
- **Axios** - Requêtes HTTP
- **React Hook Form** - Gestion des formulaires

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MySQL** - Base de données relationnelle
- **JWT** - Authentification
- **bcrypt** - Hachage des mots de passe
- **Multer** - Upload de fichiers
- **CORS** - Gestion des requêtes cross-origin

### Base de Données
- **PostgreSQL** (Supabase) - Base de données principale
- **Schéma relationnel** avec tables pour utilisateurs, activités, examens, etc.

### Déploiement
- **Vercel** - Frontend
- **Render** - Backend
- **Supabase** - Base de données
- **Cloudflare** - Nom de domaine et CDN

## 📁 Structure du Projet

```
Epitech-Blockchain-Website/
├── frontend/                 # Application React
│   ├── public/              # Assets statiques
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   ├── pages/          # Pages de l'application
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── services/       # Services API
│   │   ├── utils/          # Utilitaires
│   │   ├── context/        # Context React
│   │   └── assets/         # Images, icônes
│   ├── package.json
│   └── vite.config.js
├── backend/                 # API Node.js
│   ├── controllers/        # Contrôleurs
│   ├── models/            # Modèles de données
│   ├── routes/            # Routes API
│   ├── middleware/        # Middleware
│   ├── utils/             # Utilitaires
│   ├── config/            # Configuration
│   ├── package.json
│   └── server.js
├── docs/                  # Documentation
└── README.md
```

## 🎨 Fonctionnalités

### 🌐 Pages Publiques
- **Accueil** - Présentation du club et actualités
- **À Propos** - Histoire, mission, vision
- **Bureau Exécutif** - Présentation des membres
- **Partenaires** - Nos partenaires et leurs liens
- **Activités** - Événements publics et séminaires
- **Adhésion** - Formulaire pour rejoindre le club
- **Contact** - Informations de contact

### 🔐 Dashboard Authentifié

#### 👨‍💼 Administrateurs
- Gestion des membres (création, validation, rôles)
- Création/modification/suppression d'activités
- Gestion des examens en ligne
- Suivi de présence des membres
- Statistiques et rapports
- Gestion du contenu public

#### 👥 Membres
- Inscription aux activités
- Participation aux examens
- Suivi de leur présence
- Consultation du planning
- Profil personnel

## 🛠️ Installation et Configuration

### Prérequis
- **Node.js** (version 18+) - **OBLIGATOIRE**
- **npm** ou **yarn**
- **Git**
- Compte **Supabase** pour la base de données

### ⚠️ Problème CSS TailwindCSS ?

Si les styles ne s'appliquent pas :

1. **Test rapide :** Ouvrez `test-setup.html` dans votre navigateur
2. **Vérifiez la configuration :** Consultez `docs/TROUBLESHOOTING.md`
3. **Guide complet :** Consultez `docs/INSTALLATION.md`

### 1. Cloner le Repository
```bash
git clone https://github.com/votre-username/Epitech-Blockchain-Website.git
cd Epitech-Blockchain-Website
```

### 2. Configuration Backend
```bash
cd backend
npm install

# Créer le fichier .env
cp .env.example .env
# Éditer .env avec vos configurations
```

**Variables d'environnement (.env) :**
```env
PORT=5000
NODE_ENV=development
DB_HOST=your-supabase-host
DB_PORT=5432
DB_NAME=your-database-name
DB_USER=your-database-user
DB_PASSWORD=your-database-password
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=7d
```

### 3. Configuration Frontend
```bash
cd ../frontend
npm install

# Créer le fichier .env
cp .env.example .env
# Éditer .env avec l'URL de votre API
```

**Variables d'environnement (.env) :**
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Club Blockchain Epitech
```

### 4. Configuration Base de Données
```bash
# Se connecter à Supabase et exécuter le script SQL
# Voir docs/database-schema.sql
```

### 5. Démarrage en Développement
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🚀 Déploiement

### Frontend (Vercel)
1. Connecter votre repository GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Backend (Render)
1. Connecter votre repository GitHub à Render
2. Configurer les variables d'environnement
3. Déployer le service web

### Base de Données (Supabase)
1. Créer un projet Supabase
2. Configurer la base de données PostgreSQL
3. Exécuter le script de création des tables

## 📊 Base de Données

### Tables Principales
- **users** - Utilisateurs (membres, admins)
- **activities** - Activités et événements
- **registrations** - Inscriptions aux activités
- **exams** - Examens en ligne
- **exam_results** - Résultats des examens
- **attendance** - Présence aux activités
- **partnerships** - Partenaires

## 🔒 Sécurité

- Authentification JWT
- Hachage des mots de passe avec bcrypt
- Validation des données côté serveur
- Protection CORS
- Sanitisation des entrées utilisateur

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)

## 🧪 Tests

```bash
# Tests Backend
cd backend
npm test

# Tests Frontend
cd frontend
npm test
```

## 📈 Performance

- **Lighthouse Score** : 90+
- **Core Web Vitals** optimisés
- **Lazy Loading** des images
- **Code Splitting** automatique
- **CDN** via Cloudflare

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Changelog

### Version 1.0.0 (2025-01-XX)
- 🎉 Lancement initial du site
- ✨ Dashboard administrateur et membre
- 🔐 Système d'authentification
- 📅 Gestion des activités
- 📝 Système d'examens en ligne
- 👥 Gestion des membres

## 📞 Support

- **Email** : contact@epitech-blockchain.bj
- **Discord** : [Lien Discord]
- **GitHub Issues** : [Lien vers les issues]

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- **Epitech Bénin** pour le support institutionnel
- **Future Studio** pour l'accompagnement technique
- **Africa Blockchain Institute** pour la formation initiale
- Tous les membres du club pour leur engagement

---

**© 2025 Club Blockchain d'Epitech Bénin. Tous droits réservés.**

*Développé avec ❤️ par l'équipe du Club Blockchain d'Epitech Bénin*
