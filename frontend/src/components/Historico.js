import axios from 'axios';
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import '../styles/components/historico.scss'

const Historico = ({history, setHistory}) => {

    const handleDelete = async (id) => {
        await axios
        .delete("http://192.168.1.8:8800/"+id)
        .then(({ data }) => {

            const newArray = history.filter((history) => history.id !== id);
            //cria um novo array sem o id deletado e da um sethistory para atualizar o historico.
            setHistory(newArray);
            toast.success(data);            
        })
        .catch(({data})=> toast.error(data));
    }


    return (
        <div className='container-historico'>
            <h2>Histórico:</h2>
            <div className='table-historico'>            
                <table>
                    <thead>
                        <tr>
                            <th>Cateto A</th>
                            <th>Cateto B</th>
                            <th>Hipotenusa</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, i) => (
                            <tr key={i}>
                                <td>{item.catetoAd}</td>
                                <td>{item.catetoOp}</td>
                                <td>{item.hipotenusa}</td>
                                <td>{item.currentDate}</td>
                                <td id='icon'><FaTrash onClick={() => handleDelete(item.id)}/></td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Historico