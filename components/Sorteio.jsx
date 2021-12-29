import Numeros from "./Numeros"
import Colunas from "./Colunas"
import { renderNumber } from "../functions/render"
import styles from "../styles/styleComponet.module.css"



export default function Numero(props){

 


    return (

    <>
    
    <Colunas number={renderNumber(props.value, 0)} manner={styles.v_red}/>
    <Colunas number={renderNumber(props.value, 1)} manner={styles.v_pink}/>
    <Colunas number={renderNumber(props.value, 2)} manner={styles.v_lilac}/>
    <Colunas number={renderNumber(props.value, 3)} manner={styles.v_blue}/>
    <Colunas number={renderNumber(props.value, 4)} manner={styles.b_blue_c}/>
    <Colunas number={renderNumber(props.value, 5)} manner={styles.b_blue_m}/>
   
    </>
    )

    
}