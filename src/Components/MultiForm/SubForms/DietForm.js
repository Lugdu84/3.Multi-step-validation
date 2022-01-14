import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm(props) {

  const [formData, setFormData] = useState({
    dietForm: 'nodiet'
  })

  const handleRadio = (e) => {
    setFormData({
      dietForm: e.target.value
    })
  }

  const preventFunc = e => e.preventDefault();

  return (
    <form onSubmit={preventFunc} className="diet-form">
      <p>Quel est ton régime alimentaire ?</p>
      <label htmlFor="nodiet">Pas de régime en particulier</label>
      <input
        defaultChecked
        onChange={handleRadio}
        name="diet"
        id="nodiet"
        value="nodiet"
        type="radio"
      />
      <label htmlFor="homnivorus">Homnivore</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="homnivorus"
        value="homnivorus"
        type="radio"
      />
      <label htmlFor="vegetarian">Végétarien</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="vegetarian"
        value="vegetarian"
        type="radio"
      />
      <label htmlFor="vegan">Végan</label>
      <input
        onChange={handleRadio}
        name="diet"
        id="vegan"
        value="vegan"
        type="radio"
      />
      <button onClick={() => props.modifyIndex(3, formData)}>Validez</button>
    </form>
  );
}
