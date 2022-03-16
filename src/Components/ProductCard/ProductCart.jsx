import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { deleteCardAC } from '../../redux/actionCreators/cardsAC';
import './cardStyle.css'

function ProductCart({ element }) {

  const [mouseState, setMouseState] = useState(false);
  const dispatch = useDispatch()
  return (
    
    <div 
    onMouseEnter={(e) => {
      setMouseState(true);
    }}
    onMouseLeave={(e) => {
      setMouseState(false);
    }}
    className="container"
    >   
        {mouseState ? <div className="delete" onClick={() => dispatch(deleteCardAC(element.id))}>X</div> : ""}
        <div className="img" style={{ backgroundImage: `url(${element.imgLink})`}}></div>
        <div className="cardTitle">{element.name}</div>
        <div className="cardDisc">{element.description}</div>
        <div className="cardPrice">{element.price}</div>
    </div>
  );
}

export default ProductCart;
