import styles from "../styles/styleComponet.module.css"



export default function Botao(props){
    return (

        <div  className={styles.d_button}>
            <button className={styles.v_button} onClick={props.function}>Sortear</button>
        </div>


    )
}