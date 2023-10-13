import 'normalize.scss';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes/AppRouter';
import { store } from 'store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  </Provider>,
);
