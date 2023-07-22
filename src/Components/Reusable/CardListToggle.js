import "./css/CardListToggle.css"

import { BsListUl } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import React from 'react'

function CardListToggle({view, setView}) {
    return (
      <div className="cardListToggle">
        <div
          className={`cardListToggle__icon ${
            view === "card" ? "cardListToggle__icon--active" : ""
          }`}
          onClick={() => setView("card")}
        >
          <FiCreditCard />
        </div>
        <div
          className={`cardListToggle__icon ${
            view === "list" ? "cardListToggle__icon--active" : ""
          }`}
          onClick={() => setView("list")}
        >
          <BsListUl />
        </div>
      </div>
    );
}

export default CardListToggle
