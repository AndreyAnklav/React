import React from 'react'

export default function Home() {
  return (
    <InputField
    type="email"
    label="Enter your email"
    />  
  )
}
const InputField = ({type, label, value}) => (
    <label>
      {label}
      <input type={type} value={value} />
    </label>
  )