import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {setSeats} from "../redux/actions/seatActions";
import SeatComponent from "./SeatComponent";
import {Button} from "antd";
import './LegendStyle.css';
import {useHistory} from "react-router-dom";

const SeatListing = () =>{
    const selected = useSelector((state) => state.allSelected.select);
    const history = useHistory();

    const seats = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchSeats = async () => {
        const response = await axios.get("http://localhost:3004/seats").catch((err)=>{
        });
        dispatch(setSeats(response.data));
    };

    useEffect(()=>{
        fetchSeats();
    },[]);

    function checkDimensions(seats) {
        let maxX = 0;
        let maxY = 0;
        for(let seat of seats) {
            const {cords} = seat;
            if (cords.x > maxX)
                maxX = cords.x;
            if (cords.y > maxY)
                maxY = cords.y;
        }
        return (
            [maxX+1, maxY+1]
        );
    }

    let maxDimensions=checkDimensions(seats.allSeats.seats);

     function reservation() {
         history.push({pathname:'/summary'})
         return function (p1: React.MouseEvent<HTMLElement>) {
        };
    }

    return (
        <div> <span id="info"></span>
        <div style={{display:"grid",gridGap:"1em", padding:"2em",justifyContent:"center", gridTemplateColumns: `repeat(${maxDimensions[1]},minmax(min-content, 3em))`, gridTemplateRows: `repeat(${maxDimensions[0]},minmax(min-content, 3em))`}} >
        <SeatComponent/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}} id="legend">
            <div style={{display:"flex"}}>
                <div className="divLegend" style={{backgroundColor:"white"}}></div>
                <span >Miejsca dostepne</span>
            </div>
            <div style={{display:"flex"}}>
                <div className="divLegend" style={{backgroundColor:"#474747"}}></div>
                <span >Miejsca zarezerwowane</span>

            </div>
            <div style={{display:"flex"}}>
                <div className="divLegend" style={{backgroundColor:"#ffd979"}}></div>
                <span >Miejsca sugerowane</span>

            </div>
            <div style={{display:"flex"}}>
                <div className="divLegend" style={{backgroundColor:"#ff8a05"}}></div>
                <span >Twój wybór</span>

            </div>
            <div style={{display:"flex"}}>
                <Button disabled={selected.length < 1} style={{width:"9em", height:"3em",border:"1.5px solid black", justifyContent:"center" }} onClick={reservation}>REZERWUJ</Button>
            </div>
        </div>
        </div>
    );
};

export default SeatListing;





