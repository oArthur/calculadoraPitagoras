import { useRef } from "react"
import '../styles/components/form.scss';
import { toast } from "react-toastify";
import axios from "axios";

import Triangulo from '../img/triangulo.png';


const Form = ({ getHistory }) => {
    const ref = useRef();

    const currentDate = new Date().toISOString().slice(0, 19);
    //pegando date UTC.
    const calcularHipotenusa = (catetoAd, catetoOp) => {
        //realiza o seguinte calculo a²+b²=c²
        const hipotenusa = Math.sqrt(catetoAd ** 2 + catetoOp ** 2);
        return hipotenusa;
    }


    const handleSubmit = async (e) => {
        //nao recarrega a pagina
        e.preventDefault();
        //pega os valores atual dos inputs.
        const history = ref.current;

        if (
            !history.catetoAd.value ||
            !history.catetoOp.value
        ) {
            return toast.warn("Preencha todos os campos!");
        } else if (
            isNaN(history.catetoAd.value) ||
            isNaN(history.catetoOp.value)
        ) {
            return toast.error("Preencha os compos com numeros!");
        } else if (
            history.catetoAd.value <= 0 ||
            history.catetoOp.value <= 0
        ) {
            return toast.error("Os lados do triangulo devem ser positivos.");
        } 
         else {
            const hipotenusa = calcularHipotenusa(history.catetoAd.value, history.catetoOp.value)
            await axios.post("http://192.168.1.8:8800/", {
                catetoAd: history.catetoAd.value,
                catetoOp: history.catetoOp.value,
                hipotenusa: hipotenusa,
                currentDate: currentDate,

            })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
                
                document.getElementById("resultado").textContent=`Resultado: Cateto A: ${history.catetoAd.value} Cateto B: ${history.catetoOp.value} = Hipotenusa ${hipotenusa}`
        }
        history.catetoAd.value = "";
        history.catetoOp.value = "";
        //refresh history
        getHistory();
    };
          
    return (
        <>
            <form onSubmit={handleSubmit} ref={ref} className="form-container">
              <img src={Triangulo} alt='triangulo de pitagoras'></img>

                <div className="input-area">
                    <input name="catetoAd" maxLength="3" placeholder="Insira o Cateto A"></input>
                    <div className="underline"></div>
                </div>
                <div className="input-area">
                    <input name="catetoOp" maxLength="3" placeholder="Insira o Cateto B"></input>
                    <div className="underline"></div>
                </div>
                <input type="submit" value="calcular"></input>
            </form>
            <p id="resultado"></p>
        </>
    )
}
export default Form