import HouseCard from "./components/HouseCard";
import houses from "./data/houses";

const App = () =>
{
    const template =
    (
        <div>
            <h1>Houses</h1>
            <section className="cards">
            {
                houses.map(house => (<HouseCard key={house.id} {...house} />))
            }
            </section>
        </div>
    );
    return template;
}

export default App;
