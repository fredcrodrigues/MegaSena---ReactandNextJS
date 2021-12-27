import Numeros from "./Numeros"
import Colunas from "./Colunas"
import styles from "../styles/styleComponet.module.css"



export default function Numero(props){

    //test
    console.log('Component:', props.value)
    

    function renderNumber(num){

        if (props.value != null){
            return <Numeros position ={props.value[num]}/>
        }
        //else{
          //  return <Numeros position ={0}/>
        //}
    }
    //solution possible for render  the component
    //{ v_numero ? <Numeros posicao ={props.valor[0]} />: null }

    return (

    <>
    
    <Colunas number={renderNumber(0)} manner={styles.v_red}/>
    <Colunas number={renderNumber(1)} manner={styles.v_pink}/>
    <Colunas number={renderNumber(2)} manner={styles.v_lilac}/>
    <Colunas number={renderNumber(3)} manner={styles.v_blue}/>
    <Colunas number={renderNumber(4)} manner={styles.b_blue_c}/>
    <Colunas number={renderNumber(5)} manner={styles.b_blue_m}/>
   
    </>
    )

    
}