import React from "react"
import { useReducer } from "react"
import { DigitButton, OperationButton } from "./Component"

export const ACTIONS = {
  DISPLAY_OPERAND: "add-operand",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR_SCREEN: "clear-screen",
  DELETE_DIGIT: "delete-digit",
  CALCULATE: "calculate",
}

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.DISPLAY_OPERAND:
      if (state.currentOperand === "0" && payload.digit === "0") return state

      if (payload.digit === "." && state.currentOperand == null) return state

      if (payload.digit === "." && state.currentOperand.includes("."))
        return state

      if (state.overwrite)
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

    case ACTIONS.CLEAR_SCREEN:
      return {}

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state

      if (state.currentOperand == null)
        return {
          ...state,
          operation: payload.operation,
        }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      return {
        ...state,
        previousOperand: calculate(state),
        operation: payload.operation,
        currentOperand: null,
      }

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          overwrite: false,
          currentOperand: (state.currentOperand = null),
        }

      if (state.currentOperand == null) return state

      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.CALCULATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      )
        return state

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: calculate(state),
      }

    default:
      return state
  }
}

const formatter = new Intl.NumberFormat("NGN", {
  maximumFractionDigits: 0,
})

const formatOperand = (operand) => {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return formatter.format(integer)

  return `${formatter.format(integer)}.${decimal}`
}

const calculate = ({ currentOperand, previousOperand, operation }) => {
  const current = parseFloat(currentOperand)
  const previous = parseFloat(previousOperand)

  if (isNaN(current) || isNaN(previous)) return ""

  let calculation = ""
  switch (operation) {
    case "+":
      calculation = current + previous
      break
    case "-":
      calculation = previous - current
      break
    case "*":
      calculation = previous * current
      break
    case "÷":
      calculation = previous / current
      break
    default:
  }
  return calculation.toString()
}

const CalculatorScreen = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  return (
    <div className='bg-gradient-to-r from-violet-500 to-pink-500  h-screen flex justify-center items-center'>
      <div className='container w-80 shadow-lg'>
        <div className='bg-purple-900 text-white flex w-full h-16 flex-col items-end justify-around  px-4 py-2'>
          <div className=''>
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className='break-all text-2xl'>{formatOperand(currentOperand)}</div>
        </div>

        <div className='bg-white/80 grid grid-cols-4 gap-[2px] text-gray-900 text-2xl '>
          <button
            onClick={() => dispatch({ type: ACTIONS.CLEAR_SCREEN })}
            className='col-span-2 p-4 bg-pink-200/90 hover:bg-pink-100/90'
          >
            AC
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            className='p-4 bg-pink-200/90 hover:bg-pink-100/90'
          >
            DEL
          </button>
          <OperationButton dispatch={dispatch} operation='÷' />

          <DigitButton dispatch={dispatch} digit='1' />
          <DigitButton dispatch={dispatch} digit='2' />
          <DigitButton dispatch={dispatch} digit='3' />

          <OperationButton dispatch={dispatch} operation='*' />
          <DigitButton dispatch={dispatch} digit='4' />
          <DigitButton dispatch={dispatch} digit='5' />
          <DigitButton dispatch={dispatch} digit='6' />
          <OperationButton dispatch={dispatch} operation='+' />

          <DigitButton dispatch={dispatch} digit='7' />
          <DigitButton dispatch={dispatch} digit='8' />
          <DigitButton dispatch={dispatch} digit='9' />

          <OperationButton dispatch={dispatch} operation='-' />
          <DigitButton dispatch={dispatch} digit='0' />
          <DigitButton dispatch={dispatch} digit='.' />

          <button
            onClick={() => dispatch({ type: ACTIONS.CALCULATE })}
            className='p-4 bg-pink-200/90 hover:bg-pink-100/90 col-span-2'
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalculatorScreen
