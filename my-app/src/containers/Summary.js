import React from "react";
import {useSelector} from "react-redux";
import './HomeStyle.css'
import {useHistory} from "react-router-dom";


const Summary = () =>{
    const selected = useSelector((state) => state.allSelected.select);
    const history = useHistory();


    if(!selected.length){
        history.push({pathname:'/'})
    }

    const renderSummary = selected.map((sel)=> {
        return(
            <li key={sel[0]}>
                - {sel[1]} ({sel[0]})
            </li>
        );
    })

    return (
        <div id="Summmary">
            <h1><b>Twoja rezerwacja przebiegła pomyślnie!</b></h1>
            <h3>Wybrałeś miejsca:</h3>
            <ul>
                {renderSummary}
            </ul>
            <h3><b>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</b></h3>
        </div>
    )
}
export default Summary;