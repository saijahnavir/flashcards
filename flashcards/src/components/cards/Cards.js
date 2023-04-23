import './Cards.css';
import { TiDeleteOutline } from "react-icons/ti";
import Axios from 'axios';

function Cards(props){
    

    const deleteCard = (id) =>{
        Axios.delete(`http://localhost:8000/api/delete/${id}`)
        console.log(id);
    }
    // console.log(props);
    return(
        <div className="card" key={props.data.id}>
            <h5>{props.data.question}</h5>
            <p>{props.data.answer}</p>
            {/* {props.image ? <img>{props.image}</img> : <p></p>} */}
            <h5 className="delete" onClick={()=>deleteCard(props.data.id)}><TiDeleteOutline/></h5>
        </div>
    )
} 

export default Cards;