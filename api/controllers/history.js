import { db } from '../db.js'
// Definição da função que recebe os parâmetros do objeto de requisição e o objeto de resposta.
export const getHistory = (_, res) => {
    const q = 'SELECT * FROM history'

    db.query(q, (err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

//adiciona um novo historico ao bd.
export const addHistory = (req, res) => {

    const q = 'INSERT INTO history(`catetoAd`,`catetoOp`,`hipotenusa`,`currentDate`) VALUES(?)';

    const values = [
        req.body.catetoAd,
        req.body.catetoOp,
        req.body.hipotenusa,
        req.body.currentDate,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Cálculo realizado com sucesso.")
    }) 
}
export const deleteHistory = (req, res) => {
    const q = "DELETE FROM history WHERE `id` = ?";

    db.query(q, [req.params.id], (err)=> {
        if (err) return res.json(err);

        return res.status(200).json("Historico deletado com sucesso!")
    })
}