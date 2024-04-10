import { Suspense } from 'react';
import './styles/app.scss';

import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@components/layouts/MainLayout";
import { Home } from "@views/Home";
import { Error } from '@views/Error';

function App() {
  return (
    <Suspense fallback='Загрузка...'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;