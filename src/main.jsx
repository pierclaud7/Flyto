// Importation des modules nécessaires depuis React
import { StrictMode } from 'react'
// Importation de la méthode createRoot depuis react-dom/client pour créer un point d'entrée React
import { createRoot } from 'react-dom/client'
// Importation du fichier CSS global
import './index.css'
// Importation du composant principal de l'application
import App from './App.jsx'
// Importation de BrowserRouter pour gérer le routage dans l'application
import { BrowserRouter } from 'react-router-dom'

// Création du point d'entrée React et rendu de l'application
createRoot(document.getElementById('root')).render(
  // StrictMode est utilisé pour activer des vérifications supplémentaires en mode développement
  <StrictMode>
    {/* BrowserRouter permet de gérer les routes de l'application */}
    <BrowserRouter>
      {/* App est le composant principal de l'application */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
