import { useState } from 'react'
import Sorteio from '../components/Sorteio'
import Botao from '../components/Botao'
import styles from '../styles/styleComponet.module.css'

export default function principal(){
    
  const [vArray, setArray] = useState([])
  
  function generation(){
    let array = []

    // clear array
    vArray.pop()
   
    for (var i = 0; i < 6; i++){
      // generatior values random
      let v_number =  parseInt(Math.random()*60) + 1 
      //  addd element in array
      array.push(v_number)
      
    }
    
    // get value and add in array of usestage
    setArray([array.sort((n1,n2) => n1 - n2)].concat(vArray))
    
  }
  //test
  //console.log('Array',vArray)
  //console.log('Posicao', vArray[0])
 
  return(
      <>
      <div className={styles.div_column}>
        
        <Sorteio value={vArray[0]}/>
        
        
      </div>
    
        <Botao function={generation} />
      
      </>
  )
}
