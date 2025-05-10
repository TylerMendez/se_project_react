import React, { useState, useEffect } from 'react';
import { coordinates, APIkey } from '../../utils/constants';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import ItemModal from '../ItemModal/ItemModal';
import Footer from '../Footer/Footer';
import { getWeather, filterweatherData } from '../../utils/weatherAPi'; 

function App() {
  const [weatherData, setWeatherData] = useState({ type: "", temp: {F: 999},
      city: "" });
  const [activeModal, setActiveModal] = useState(""); 
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal('add-garment');
  };

  const closeActiveModal = () => {
    setActiveModal(null); 
  };

  useEffect(() => {
      getWeather(coordinates, APIkey).then((data) => { 
       const filteredData = filterweatherData(data);
    setWeatherData(filteredData);
      }).catch(console.error);
    }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick}  weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        {activeModal === 'add-garment' && (
          <ModalWithForm
            title="New garment"
            buttonText="Add Garment"
            onClose={closeActiveModal}
          >
            <label htmlFor="name" className="modal__label">
              Name
              <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
              />
            </label>

            <label htmlFor="imageUrl" className="modal__label">
              Image
              <input
                type="url"
                className="modal__input"
                id="imageUrl"
                placeholder="Image URL"
              />
            </label>

            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">Select the weather type</legend>

              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                Hot
                <input
                  id="hot"
                  name="weather"
                  type="radio"
                  className="modal__radio-input"
                />
              </label>

              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                Warm
                <input
                  id="warm"
                  name="weather"
                  type="radio"
                  className="modal__radio-input"
                />
              </label>

              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                Cold
                <input
                  id="cold"
                  name="weather"
                  type="radio"
                  className="modal__radio-input"
                />
              </label>
            </fieldset>
          </ModalWithForm>
        )}

        
        {activeModal === 'preview' && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;