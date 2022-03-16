import React from 'react';
import ProductCart from '../ProductCard/ProductCart';
import { useSelector } from 'react-redux';
import './list.css'
import Select from '../Select/Select';

function ProductList(props) {

  const { cards } = useSelector((state) => state.cardReducer)
  return (
<>
    <Select/>
    <div className="cardList">
      {console.log(cards)}
      {cards?.length ? cards.map((element) => <ProductCart element={element} key={element.id}/>)
      :
      <div>Добавьте товары</div>
    }
    </div>
</>
  );
}

export default ProductList;
