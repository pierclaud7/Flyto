import './App.css'
// Importation des styles CSS pour l'application
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// Importation des composants nécessaires pour la gestion des routes avec React Router
import Nav from './Components/Nav/Nav'
// Importation du composant de navigation
import Index from './Components/Pages/Index'
// Importation de la page d'accueil
import About from './Components/Pages/About'
// Importation de la page "À propos"
import Tours from './Components/Pages/Tours'
// Importation de la page des tours
import ToursDetails from './Components/Pages/Tours-Details'
// Importation de la page des détails d'un tour
import Destination from './Components/Pages/Destination'
// Importation de la page des destinations
import Contact from './Components/Pages/Contact'
// Importation de la page de contact
import Footer from './Components/Footer/Footer'
// Importation du composant de pied de page
import DestinationDetails from './Components/Pages/Destination-Details'
// Importation de la page des détails d'une destination
import Blog from './Components/Pages/Blog'
// Importation de la page du blog

function App() {
  const location = useLocation();
  // Utilisation du hook `useLocation` pour obtenir l'emplacement actuel de la route

  return (
    <>
      <Nav />
      {/* Affichage du composant de navigation */}
      <Routes>
        {/* Définition des routes de l'application */}
        <Route path="/" element={<Index />} />
        {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} />
        {/* Route pour la page "À propos" */}
        <Route path="/tours" element={<Tours />} />
        {/* Route pour la page des tours */}
        <Route path="/tour-details/:id" element={<ToursDetails />} />
        {/* Route pour la page des détails d'un tour avec un paramètre dynamique `id` */}
        <Route path="/destination" element={<Destination />} />
        {/* Route pour la page des destinations */}
        <Route path="/destinationDetails" element={<DestinationDetails />} />
        {/* Route pour la page des détails d'une destination */}
        <Route path="/blog" element={<Blog />} />
        {/* Route pour la page du blog */}
        <Route path="/contact" element={<Contact />} />
        {/* Route pour la page de contact */}
      </Routes>
      {location.pathname !== '/' && <Footer />}
      {/* Affichage du pied de page uniquement si l'utilisateur n'est pas sur la page d'accueil */}
    </>
  )
}

export default App
// Exportation du composant App pour l'utiliser dans d'autres fichiers
