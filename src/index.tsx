import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage';

const App: FC<{}> = () => {
    return <HomePage />;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
