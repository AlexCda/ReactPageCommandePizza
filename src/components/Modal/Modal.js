import classes from './Modal.module.css'
import { useState } from 'react';

function Modal({data, onAddToCart, onHideModal}) {
    const [quantity, setQuantity] = useState(1);
    function decreaseQuantity(){
        setQuantity(quantity - 1)
    }
    function increaseQuantity(){
        setQuantity(quantity + 1)
    }
    const handleAddToCart = () => {
        onAddToCart(data, quantity);
        onHideModal();
    };
    return  <div className={classes.modal}>
                <div className={classes["modal-content"]}>
                    <span className={classes.close} onClick={onHideModal}>×</span>
                    <img className={classes["modal-thumbnail"]} src={`${data.url}`} alt={`${data.name}`}/>
                    <h2 className={classes["modal-title"]}>{data.name}</h2>
                    <p className={classes["modal-price"]}>{data.price} €</p>
                    <div className={classes["quantity-selector"]}>
                        <button className={classes["quantity-decrease"]} onClick={decreaseQuantity}>-</button>
                        <span className={classes.quantity}>{quantity}</span>
                        <button className={classes["quantity-increase"]} onClick={increaseQuantity}>+</button>
                    </div>
                    <button className={`${classes.btn} ${classes["add-to-cart"]}`} onClick={handleAddToCart}>Ajouter au panier</button>
                </div>
            </div>
}
export default Modal;