import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid'
import './formStyle.css'

import { addCardAC } from '../../redux/actionCreators/cardsAC';

function Form() {

  const cardlInput = useRef();
  const descriptionInput = useRef();
  const priceInput = useRef();
  const linkInput = useRef();

  const [name, setName] = useState('1');
  const [linkText, setLinkText] = useState('1');
  const [price, setPrice] = useState('1');
  
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    
    const newCard = {
      id: uuidv4(),
      name:  cardlInput.current.value,
      description: descriptionInput.current.value,
      imgLink: linkInput.current.value,
      price: priceInput.current.value,
    }
    dispatch(addCardAC(newCard))
  }
  return (
<>
<div >
    <div>

      <p className="titleText" >Добавление товара</p>
    </div>

    <form onSubmit={formHandler} className="productForm">
        <label className="topLabel" htmlFor="first_name">Наименование товара <div className="dot1"></div></label>
          {
          name ? 
          <input onChange={(event) => setName(event.target.value)} placeholder="Введите наименование товара" ref={cardlInput} id="first_name" name="name" type="text" className="validate" required/>
          :
          <input onChange={(event) => setName(event.target.value)} placeholder="Введите наименование товара" ref={cardlInput} id="first_name" name="name" type="text" className="validateError" required/>
        }

        <label >Описание товара</label>
          <textarea ref={descriptionInput} placeholder="Введите описание товара" className="textArea" type="text"></textarea>

        <label >Ссылка на изображение товара <div className="dot2"></div></label>
          {
            linkText?
            <input onChange={(event) => setLinkText(event.target.value)} ref={linkInput} placeholder="Введите ссылку"  type="text" className="linkInp" required/>
            :
            <input onChange={(event) => setLinkText(event.target.value)} ref={linkInput} placeholder="Введите ссылку"  type="text" className="validateError" required/>
            }


        <label >Цена товара <div className="dot3"></div></label>
            {
            price?
            <input onChange={(event) => setPrice(event.target.value)} ref={priceInput} placeholder="Введите цену" type="text" className="priceInp" required/>
            :
            <input onChange={(event) => setPrice(event.target.value)} ref={priceInput} placeholder="Введите цену" type="text" className="validateError" required/>
            }

        {(name & linkText & price)? <button className="text-box btn btn-white btn-animate">Добавить товар</button> : <button disabled className="text-box btn btn-white btn-animate">Добавить товар</button>}
    </form>
  </div>

</>
  );
}

export default Form;
