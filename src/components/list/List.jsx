import React from 'react'
import './list.css'
import emojiSource from '../../services/emojiList.json'
import { useState, useEffect } from 'react'


function List() {

  const [page,setPage] = useState(0)
  const [activePageNumber,setActivePageNumber]= useState(1)
  function calculatePageCount(){
    if ((emojiSource.length % 20) > 0 ){
      return parseInt(emojiSource.length/20)+1
    }else{
      return parseInt(emojiSource.length/20)  
    }
  }

  useEffect(()=>{
    setPage(calculatePageCount())
  },[])

  function handleclick (pageNumber){
    console.log("hh")
    setActivePageNumber(pageNumber)
  }
  
  return (
    <div className='list'>
      <h2> list of emojies:</h2>
      <tr>
        <th className='title'>title:</th>
        <th className='sym'>symbol:</th>
        <th className='keyword'>Keywords:</th>
      </tr>
      <div id="table-emoji">
      <table >
      {emojiSource.slice(20*activePageNumber,20*(activePageNumber+1)).map((data, symbol)=>(
        
          
          <tr>
            <td className='title'>{data.title}</td>
            <td className='sym'>{data.symbol}</td>
            <td className='keyword'>{data.keywords}</td>
          </tr>
        
        


        
      ))}

      </table>
        </div>
        <h2>Pages :</h2>
    <ul className='pagination'>
        
        {new Array(page).fill(0).slice(1,activePageNumber+5).map((item,index)=>(
          
          <li className={activePageNumber === index+1 ? 'active' : ''} >
            <button onClick={()=>handleclick(index+1)}> {index+1} </button>
          </li>
        ))}
        <p> . . . </p>
        <button onClick={()=>handleclick(90)}> Last page </button>
    </ul>
            


    </div>
  )
}

export default List