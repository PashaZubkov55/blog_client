
import { createRoot } from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error('The #root element was not found in the DOM');
}

createRoot(rootElement).render(
  <Provider store={store}>
  <App />
</Provider>
);
