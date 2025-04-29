import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
function Main({ weatherData, handleCardClick }) {
    return (
      <main>
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          <p className="cards__text">Today is {weatherData.temp.F} / You may want to wear:</p>
          <ul className="cards__list">
            {defaultClothingItems
              .filter((item) => item.weather === (weatherData?.type || ''))
              .map((item) => (
                <li key={item._id}>
                  <ItemCard item={item} onCardClick={handleCardClick} />
                </li>
              ))}
          </ul>
        </section>
      </main>
    );
  }
  

export default Main