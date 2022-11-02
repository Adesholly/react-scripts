import React, { useEffect, useState } from "react"

const URL = "https://api.frontendexpert.io/api/fe/wordle-words"

const wordLength = 5

const WordleScreen = () => {
  const [guesses, setGuesses] = useState(Array(6).fill(null))
  const [answer, setAnswer] = useState('Hello')
  const [currentGuess, setCurrentGuess] = useState('')
  const [isGameOver, setIsGameOver] = useState(false)


  useEffect(() => {

    const handleType = (event) => {

      if(isGameOver) return      

      if(event.key === 'Enter'){
        if(currentGuess.length !== 5) return

        const isCorrect = answer === currentGuess
        if(isCorrect){
          setIsGameOver(true)
        }

        const newGuesses = [...guesses]
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess
        setGuesses(newGuesses)
        setCurrentGuess('')
      }

      if(event.key === 'Backspace'){
        setCurrentGuess(currentGuess.slice(0, -1))
        return

      }

      if(currentGuess.length >= wordLength) return

      const isLetter = event.key.match(/^[a-z]{1}$/) != null

      if(isLetter) setCurrentGuess(oldGuess => oldGuess + event.key)


    }

    window.addEventListener('keydown', handleType)

    return () => window.removeEventListener('keydown', handleType)

  }, [answer, currentGuess, isGameOver])

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(URL)
      const words = await response.json()
      const singleWord = words[Math.floor(Math.random * words.length)]
      console.log(singleWord)
      //setAnswer (singleWord)

    }

    fetchWord()
  }, [])

  return (

    <div className="flex flex-col gap-20 h-screen justify-center items-center">
      <div className='flex flex-col gap-1'>
        {
      guesses.map((guess, index) => {
        const isCurrentGuess = index === guesses.findIndex(val => val == null)
        return <Line
                key={index} 
                guess = { isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal = { !isCurrentGuess && guess != null }
                answer = { answer.toLowerCase() }
              /> 
       })
        }
      </div>
      <div className="">
        <h1>Keyboard{currentGuess}</h1>
      </div>

    </div>
    
  )
}

const Line = ({ guess, isFinal, answer}) => {

  const tiles = []
  
  for (let i = 0; i < wordLength; i++) {  

    const char = guess[i]

    let newClass = 'border-gray-400 border-2 w-12  h-12 uppercase text-center text-4xl '

    // Adding style to the tiles on submission

    if(isFinal){
      newClass += ' text-white'

      if(char === answer[i]){
        newClass += ' bg-green-500'

      }
      else if(answer.includes(char)){
        newClass += ' bg-yellow-500'

      } else {
        newClass += ' bg-gray-500'

      }
    }

    tiles.push(
      <div key={i} className={ newClass }>
        {char}
      </div>
    )
  }

  return <div className='flex gap-1 '>{tiles}</div>
}

export default WordleScreen
