import './App.css';
import Rating from '@mui/material/Rating';
import DistanceSlider from './components/DistanceSlider.js';
import PriceSlider from './components/PriceSlider.js';
import Attributes from './components/Attributes.js';
import RestaurantModal from './components/RestaurantModal';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Now!</h1>
        <section className="App-question">
          <h4>1. Choose categories!</h4>
          <CategoryList />
        </section>
        <section className="App-question">
          <h4>2. WYA?</h4>
        </section>
        <section className="App-question">
          <h4>3. How lazy are you?</h4>
          <DistanceSlider />
        </section>
        <section className="App-question">
          <h4>4. How cheap are you?</h4>
          <PriceSlider />
        </section>
        <section className="App-question">
          <h4>5. How low is the bar?</h4>
          <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" />
        </section>
        <section className="App-question">
          <h4>6. Additional attributes</h4>
          <Attributes />
        </section>
        <RestaurantModal />
      </header>

    </div>

  );
}

export default App;
