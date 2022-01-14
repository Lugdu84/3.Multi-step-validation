import React, { useRef, useEffect } from "react";
import "./SubForm.css";

export default function Allergies(props) {
  const preventFunc = (e) => {
    e.preventDefault();
    const styleData = {
      allergies: [],
    };

    allCheckboxes.current.forEach((checkbox) => {
      if (checkbox.checked) {
        styleData.allergies.push(checkbox.value);
      }
    });

    props.modifyIndex(5, styleData);
  };

  const allCheckboxes = useRef([]);

  const addCheck = (el) => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el);
    }
  };

  const handleReturn = () => {
    props.modifyIndex(3);
  };

  return (
    <form onSubmit={preventFunc} className="checkbox-form">
      <p>As-tu des allergies ?</p>
      <span>Choix multiples.</span>
      <label htmlFor="milk">Lait</label>
      <input ref={addCheck} value="milk" id="milk" type="checkbox" />
      <label htmlFor="pollen">Pollen</label>
      <input ref={addCheck} value="pollen" id="pollen" type="checkbox" />
      <label htmlFor="nuts">Noix</label>
      <input ref={addCheck} value="nuts" id="nuts" type="checkbox" />
      <label htmlFor="eggs">Oeufs</label>
      <input ref={addCheck} value="eggs" id="eggs" type="checkbox" />
      <label htmlFor="shellfish">Fruits de mer</label>
      <input ref={addCheck} value="shellfish" id="shellfish" type="checkbox" />
      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">
          Précédent
        </button>
        <button>Validez</button>
      </div>
    </form>
  );
}
