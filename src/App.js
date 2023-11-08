// import logo from './logo.svg';
import './App.css';
import '@radix-ui/themes/styles.css';


import FilterSection from './sections/FilterSection';
import UserContainer from './sections/UserContainer';

function App() {
  return (
    <div className="application__center">
      <FilterSection />
      <UserContainer />
    </div>
  );
}

export default App;
