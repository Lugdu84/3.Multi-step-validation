import React, {useRef} from 'react'
import './SubForm.css'

export default function FoodStyle(props) {

  const preventFunc = e => {
    e.preventDefault();
  }

  const handleReturn = () => {
    props.modifyIndex(2)
  }

  return (
    <form onSubmit={preventFunc} className="checkbox-form">
      <p>Quelles sont tes cuisines préférées ?</p>
      <span>Choix multiples.</span>
      <label htmlFor="italian">Italienne</label>
      <input value="italian" id="italian" type="checkbox" />
      <label htmlFor="japanese">Japonaise</label>
      <input value="japanese" id="japanese" type="checkbox" />
      <label htmlFor="indian">Indienne</label>
      <input value="indian" id="indian" type="checkbox" />
      <label htmlFor="thaï">Thaïlandaise</label>
      <input value="thaï" id="thaï" type="checkbox" />
      <label htmlFor="french">Française</label>
      <input value="french" id="french" type="checkbox" />
      <label htmlFor="chinese">Chinoise</label>
      <input value="chinese" id="chinese" type="checkbox" />
      <div className="container-nav-btns">
        <button
          onClick={handleReturn}
          type='button'
          className='prev'>Précédent</button>
        <button>Validez</button>
      </div>
    </form>
  );
}
