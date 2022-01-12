import React, {useState} from 'react'
import './Multiform.css'

export default function Multiform() {
  const [formIndex, setFormIndex] = useState(1)
  const [allFormData, setAllFormData] = useState({
    dietForm: "",
    foodStyle: [],
    allergies: [],
    prefs: {}
  })
  return (
    <div>

    </div>
  )
}
