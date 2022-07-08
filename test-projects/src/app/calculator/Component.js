import React from "react"
import { ACTIONS } from "./CalculatorScreen"

export const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.DISPLAY_OPERAND, payload: { digit } })
      }
      className='p-4 bg-pink-200/90 hover:bg-pink-100/90'
    >
      {digit}
    </button>
  )
}

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
      className='p-4 bg-pink-200/90 hover:bg-pink-100/90'
    >
      {operation}
    </button>
  )
}
