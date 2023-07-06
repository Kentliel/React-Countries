import './App.css';
import CountriesList from './components/CountruesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <CountriesList />
    </div>
  );
}

export default App;
