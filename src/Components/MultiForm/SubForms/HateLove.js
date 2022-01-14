import React, {useState} from 'react'
import './SubForm.css'

export default function HateLove(props) {

  const [formData, setFormData] = useState({
    prefs: {
      love: "",
      hate: ""
    }
  })

  const preventFunc = (e) => {
    e.preventDefault()
  }

  const handleReturn = () => {
    props.modifyIndex(4)
  }

  const handleTxtArea = (e, prefs) => {
    if (prefs === "love") {
      setFormData({
        prefs: {
          ...formData.prefs,
          love: e.target.value,
        },
      });
    }
    else if (prefs === "hate") {
      setFormData({
        prefs: {
          ...formData.prefs,
          hate: e.target.value,
        },
      });
    }
  }

  return (
    <form onSubmit={preventFunc} className="preferences-form">
      <p>Parle-nous des aliments que tu préfères et que tu détestes !</p>
      <label htmlFor="prefered">
        Tes aliments préférés, séparés par une virgule :
      </label>
      <textarea
        onChange={(e) => handleTxtArea(e, "love")}
        id="prefered"
        placeholder="Un ou plusieurs, si tu en as"
      ></textarea>
      <label htmlFor="hated">
        Les aliments que tu ne supportes pas, séparés par une virgule :
      </label>
      <textarea
        id="hated"
        onChange={(e) => handleTxtArea(e, "hate")}
        placeholder="Un ou plusieurs, si tu en as"
      ></textarea>
      <div className="container-nav-btns">
        <button type="button" className="prev" onClick={handleReturn}>
          Précédent
        </button>
        <button onClick={() => props.modifyIndex(6, formData)}>Validez</button>
      </div>
    </form>
  );
}
