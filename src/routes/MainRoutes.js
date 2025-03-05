// MainRoutes.js
import { lazy } from 'react';
import MainLayout from '../layout/MainLayout';
import Loadable from "../components/Loadable";
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

// Chargement des pages
const HomePage = Loadable(lazy(() => import("../views/home")));
const AdminPage = Loadable(lazy(() => import("../views/admin")));
const PicturePage = Loadable(lazy(() => import("../views/picture")));

// Composant intégré pour gérer la langue selon l'URL et les query params
const LanguageRouter = ({ children }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { changeLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Récupérer le paramètre 'lang' de l'URL
    const queryLang = searchParams.get('lang');
  
    // Si 'lang' est null ou non défini, on met en anglais
    if (queryLang) {
      if (queryLang === 'he') {
        document.documentElement.dir = 'rtl'; // Configurer la direction d'écriture pour l'hébreu
      }
      else {
        document.documentElement.dir = 'ltr'; // Configurer la direction d'écriture pour l'anglais et le français
      }
      changeLanguage(queryLang);
    } else {
      changeLanguage('en'); // Par défaut, on met en anglais
    }
  }, [location, searchParams, changeLanguage]);

  return children;
};

const MainRoutes = {
  path: "/",
  element: (
    <LanguageRouter>
      <MainLayout />
    </LanguageRouter>
  ),
  children: [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/admin",
      element: <AdminPage />,
    },
    {
      path: "/picture",
      element: <PicturePage />,
    },
  ],
};

export default MainRoutes;
