import React, {useState} from 'react'
import './SubForm.css'

export default function DietForm() {
  const preventFunc = e => e.preventDefault();
  return (
    <form
      onSubmit={preventFunc}
      className='diet-form'>
      <p>Quel est ton régime alimentaire ?</p>
    </form>
  )
}
