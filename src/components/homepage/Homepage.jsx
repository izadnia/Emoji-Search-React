import React, { useState } from 'react'
import './hompage.css'
import emoji from '../../services/emojiList.json'


function Homepage() {

  const [word, setWord] = useState('0')
  const [recoms,setRecoms] = useState([])

  const handleLoadEmoji = () => {
    var plate = []
    for (let j=0; j<emoji.length;j++){
      if (emoji[j].keywords.split(" ").includes(word[0])){
        plate.push(emoji[j].symbol)
      }
      setRecoms(plate)
    }
  }

// console.log(emoji[0].keywords.split(" ").includes("symbol"))
// console.log(word)
// console.log(recoms)

  return (
    <div className='home'>
      <div className='user'>
        <h3>Try type something in the box:</h3>
        <h4>like: "apple is a good phone"</h4>
        <h4>and see the magic happends.. :) </h4>

        <textarea id='type-box'  className='textArea' 
        onChange={ e => setWord(e.target.value.split(" ").slice(-1)) & handleLoadEmoji(e.target.value.split(" ").slice(-1)) } >
        </textarea>
      </div>

      <div className='info'>

        <h3>Emojies ? </h3>
        <h1> {recoms} </h1>

      </div>
      
    </div>
  )
}

export default Homepage