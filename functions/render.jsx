import Numeros from "../components/Numeros"

export function renderNumber(value, num){
   
    if (value != null){
        return <Numeros position ={value[num]}/>
    }

}

