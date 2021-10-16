import './App.css';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import DistanceSlider from './components/DistanceSlider.js';
import PriceSlider from './components/PriceSlider.js';
import Attributes from './components/Attributes.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Now!</h1>
        <section className="App-question">
          <h4>1. Choose categories!</h4>
        </section>
        <section className="App-location">
          <h4>2. WYA?</h4>
        </section>
        <section className="App-distance">
          <h4>3. How lazy are you?</h4>
          <DistanceSlider />
        </section>
        <section className="App-price">
          <h4>4. How cheap are you?</h4>
          <PriceSlider />
        </section>
        <section className="App-rating">
          <h4>5. How low is the bar?</h4>
          <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" />
        </section>
        <section className="App-attributes">
          <h4>6. Additional attributes</h4>
          <Attributes />
        </section>
        <Button variant ="contained">Food Now!</Button>
      </header>

    </div>

  );
}

export default App;
