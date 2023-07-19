import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";

import './styles/main.scss'
import Form from './components/Form';
import Historico from './components/Historico';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [history, setHistory] = useState([]);

  const getHistory = async () => {
    try{
      const res = await axios.get('http://192.168.1.8:8800');
      //ordenando lista por do mais recente para o menos recente
      setHistory(res.data.sort((a,b) => (a.id < b.id ? 1 : -1)));
    }catch(error) {
      console.log(error);
      if (error.message === "Network Error") {
        document.getElementById("off").style.display = "inline";
        document.getElementById("off").textContent=error.code+": Falha na conexão com o banco de dados. ";
      }
      
    }
  }

  useEffect(() => {
    getHistory();
  }, [setHistory]);

  return (
    <div className='container'>
      <h1>Calculadora de Pitagoras</h1>
      <Form getHistory={getHistory}/>
      <p id='off'></p>
      <Historico history={history} setHistory={setHistory}/>
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_CENTER} />
    </div>
  );
}

export default App;
