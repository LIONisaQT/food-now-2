import './App.css';
import DistanceSlider from './components/DistanceSlider.js';
import PriceSlider from './components/PriceSlider.js';
import Attributes from './components/Attributes.js';
import RestaurantModal from './components/RestaurantModal';
import CategoryList from './components/CategoryList';
import Location from './components/Location';
import RatingSetting from './components/RatingSetting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Now!</h1>
        <CategoryList />
        <Location />
        <DistanceSlider />
        <PriceSlider />
        <RatingSetting />
        <Attributes />
        <RestaurantModal />
      </header>

    </div>

  );
}

export default App;
