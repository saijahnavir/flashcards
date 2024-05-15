import './Body.css';
import Addcard from '../addcard/Addcard';
import react, { useEffect, useState} from "react";
import Cards from '../cards/Cards';
import Axios from 'axios';



const Body = () =>{

  const [card, setCard] = useState([]);



  useEffect(() => {
    Axios.get("http://localhost:8000/api/get")
    .then((response) =>{
      setCard(response.data)
    })
  },[card]);
  

    return(
        <div className='page-body'>
            <h3 className='header'>FLASH CARDS</h3>
            <p className='empty'>   </p>
            <Addcard/>

            {card.map( (val) => (
              <Cards data={val}/>
            ))}
            
        </div>
    )

}

export default Body;