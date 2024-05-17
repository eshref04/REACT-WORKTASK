import React from 'react'
import "./CardsItem.css"

const CardsItem = ({item}) => {
  const [basket, setBasket] = useState(
    localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
  );

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addBasket = (id) => {
    const findBasketItem = basket.find((e) => e.id === id);
    if (findBasketItem) {
     
      const updatedBasket = basket.map((item) =>
        item.id === id ? { ...item,
              count: item.count + 1,
              totalPrice: parseFloat(item.totalPrice) + parseFloat(item.price),
            } : item
      );
      setBasket(updatedBasket);
    } else {
     
      const newBasketItem = {
        ...item,
        count: 1,
        totalPrice: parseFloat(item.price),
      };
      setBasket([...basket, newBasketItem]);
    }}

  return (
    <div >
       <div>
        <div><img src={item.image} alt="" /></div>
        <h3>{item.title}</h3>
        <p>{item.category}</p>
       </div>
       <span>${item.price}</span>

       
    </div>
  )
}

export default CardsItem
