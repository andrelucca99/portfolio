import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Home,
  PageContato,
  PageProjeto,
  PageSobre,
} from '../page';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'person',
        path: '/sobre',
        label: 'Sobre',
      },
      {
        icon: 'assignment',
        path: '/projetos',
        label: 'Projetos',
      },
      // {
      //   icon: 'phone',
      //   path: '/contato',
      //   label: 'Contato',
      // },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />
      <Route path="/sobre" element={<PageSobre />} />
      <Route path="/projetos" element={<PageProjeto />} />
      {/* <Route path="/contato" element={<PageContato />} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
