// 1) Import ReactDOM library
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </Provider>
  );
};

// 5) Show the component on the screen
root.render(<App />);
