import React, {useRef, useEffect} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

  const preventFunc = e => {
    e.preventDefault();
    const styleData = {
      foodStyle: []
    }

    allCheckboxes.current.forEach(checkbox => {
      if (checkbox.checked) {
        styleData.foodStyle.push(checkbox.value)
      }
    })

    props.modifyIndex(4, styleData)
  }

  const allCheckboxes = useRef([])

  const addCheck = el => {
    if (el && !allCheckboxes.current.includes(el)) {
      allCheckboxes.current.push(el)
    }
  }

  const handleReturn = () => {
    props.modifyIndex(2)
  }

  return (
    <form onSubmit={preventFunc} className="checkbox-form">
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples.</span>
      <label htmlFor="italian">Italienne</label>
      <input ref={addCheck} value="italian" id="italian" type="checkbox" />
      <label htmlFor="japanese">Japonaise</label>
      <input ref={addCheck} value="japanese" id="japanese" type="checkbox" />
      <label htmlFor="indian">Indienne</label>
      <input ref={addCheck} value="indian" id="indian" type="checkbox" />
      <label htmlFor="thaï">Thaïlandaise</label>
      <input ref={addCheck} value="thaï" id="thaï" type="checkbox" />
      <label htmlFor="french">Française</label>
      <input ref={addCheck} value="french" id="french" type="checkbox" />
      <label htmlFor="chinese">Chinoise</label>
      <input ref={addCheck} value="chinese" id="chinese" type="checkbox" />
      <div className="container-nav-btns">
        <button onClick={handleReturn} type="button" className="prev">
          Précédent
        </button>
        <button>Validez</button>
      </div>
    </form>
  );
}
