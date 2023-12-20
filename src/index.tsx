import { createRoot } from 'react-dom/client';

import { Header } from './components/Header';

import './css/settings.css';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
