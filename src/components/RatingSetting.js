import Rating from '@mui/material/Rating';

export default function RatingSetting() {
    return (
        <section className="App-question">
            <h4>5. How low is the bar?</h4>
            <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" />
        </section>
    );
}