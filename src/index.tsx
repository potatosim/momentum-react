import 'normalize.scss';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Suspense fallback={'Loading...'}>
      <AppRouter />
    </Suspense>
  </BrowserRouter>,
);
