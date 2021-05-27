import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './SeatComponentStyle.css'
import {selectedSeat, unselectedSeat} from "../redux/actions/seatActions";
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";

let count = 0;
const SeatComponent = () =>{
    const history = useHistory();
    const seats = useSelector((state) => state.allSeats.seats);
    const selected = useSelector((state) => state.allSelected.select);
    const dispatch = useDispatch();
    let divBackground;
    let freeSeats=[];
    let MAX_SEAT ;
    let NEXT_TO ;
    const location = useLocation();

    if(location.state === undefined){
        history.push({pathname:'/'})
    }else{
         MAX_SEAT = location.state.amount;
         NEXT_TO = location.state.nextTo;
    }

    const renderList = seats.map((seat)=>{

        const{id,cords,reserved}=seat;
        let classAction;
        if(reserved === true){
            classAction = "reservedSeats";
        }else{
            freeSeats.push(id);
            classAction = "availableSeats";
            if (count < MAX_SEAT)
            {
                classAction += "suggestion"
                count++
            }

        }

        function handleClick(e) {
            e.preventDefault();
            let idDiv = e.target.id;
            let valueOfDiv = (e.currentTarget.children[0]).innerText;

            if(reserved === false){

                if((selected.filter(el => el[0] === idDiv)).length){
                    dispatch(unselectedSeat(idDiv));
                    e.target.classList.remove("selected")
                    divBackground="none";
                }else if(selected.length<MAX_SEAT){
                    dispatch(selectedSeat(idDiv,valueOfDiv));
                    e.target.classList.add("selected")
                }else{
                    document.getElementById(selected[0][0]).classList.remove("selected")
                    dispatch(unselectedSeat(selected[0][0]));
                    dispatch(selectedSeat(idDiv,valueOfDiv));
                    e.target.classList.add("selected")
                }
            }
        }

        return(
                <div className={classAction} onClick={handleClick} id={id} key={id} style={{backgroundColor:`${divBackground}`,border:"2px solid black ",gridArea:`${cords.x+1}/${cords.y+1}/${cords.x+2}/${cords.y+2}`,width:"3em", height:"3em"}}><span className={"hidden"}>rząd x{cords.x+1}, miejsce y{cords.y+1}</span></div>
        );
    })

    useEffect(() => {

    if (NEXT_TO === false)
    {
        if (selected.length === 0)
        {
            const Suggestion = (amount) =>{
                let item=[];
                let count = 0;

                if(freeSeats.length)
                {
                    while (count !== amount)
                    {
                        let newItem = freeSeats[Math.floor(Math.random() *freeSeats.length)];
                        if (!item.includes(newItem))
                        {
                            item.push(newItem);
                            count++;
                        }
                    }
                }

                return item
            }
            let suggestionDiv = [];
            let elem = document.getElementsByClassName("suggestion");

            while(elem.length > 0){
                elem[0].classList.remove('suggestion');
            }

            if (MAX_SEAT <= freeSeats.length)
            {
                suggestionDiv = Suggestion(MAX_SEAT)
            }

            let sugg=0;

            for (sugg; sugg < suggestionDiv.length;sugg++){
                let el = document.getElementById(suggestionDiv[sugg])
                if (el != null)
                {
                    el.classList.add("suggestion")

                }
            }

        }else {
                let el = document.getElementsByClassName("suggestion");

                while (el.length > 0) {
                    el[0].classList.remove('suggestion');
                }
        }
    }
    else
    {
        document.querySelector("#info").innerHTML="Na ten moment sugerowanie miejsc obok siebie jest nie możliwe. Pracujemy nad tym.";
    }

    })

    return <>{renderList}</>;

};

export default SeatComponent;