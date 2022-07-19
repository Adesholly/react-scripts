import React, { useEffect, useState } from "react"



const URL = 'https://api.frontendexpert.io/api/fe/wordle-words'


const WordleScreen = () => {

  const[guesses, setGuesses] = useState(Array(6)).fill(null)

  useEffect(() => {

    const fetchWord = async () => {
       const response = await fetch(URL)
       const words = await response.json()
       const singleWord  = words[Math.floor(Math.random * words.length)]
        console.log(singleWord);
        }



    fetchWord()

  }, [])
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className=''>
        <div>hello 1</div><div>heell2</div>
      </div>
    </div>
  )
}

export default WordleScreen
