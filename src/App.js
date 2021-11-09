import './App.css';
import DistanceSlider from './components/DistanceSlider.js';
import PriceSlider from './components/PriceSlider.js';
import Attributes from './components/Attributes.js';
import RestaurantModal from './components/RestaurantModal';
import CategoryList from './components/CategoryList';
import Location from './components/Location';
import RatingSetting from './components/RatingSetting';

let query = {};

function App() {
  // let example = {
  //   "term":"boba,sushi",
  //   "location":"san francisco",
  //   "radius": 40000, // meters
  //   "price": "$,$$$"
  // };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Now!</h1>
        <CategoryList update={updateValues}/>
        <Location update={updateValues}/>
        <DistanceSlider update={updateValues} />
        <PriceSlider update={updateValues}/>
        <RatingSetting update={updateValues}/>
        <Attributes update={updateValues}/>
        <RestaurantModal />
      </header>

    </div>

  );
}

function updateValues(keyword, value) {
  query[keyword] = value;
  console.log(query);
}

export default App;
