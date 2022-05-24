import React from 'react'

export default function CounterButton({ label, dispatch, disabled }) {
  return (
    <button disabled={disabled} onClick={dispatch}>{label}</button>
  )
}
