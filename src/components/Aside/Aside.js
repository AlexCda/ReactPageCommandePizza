import classes from './Aside.module.css';
function Aside({cart}) {
    const total = cart.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
    console.log({cart})
    return  <aside className={classes["cart-section"]}>
                <h2 className={classes["cart-title"]}>Votre Panier</h2>
                <div className={classes["cart-pizzas"]}>
                    {cart.map((pizza, num) => (
                        <div key={num} className={classes["cart-pizza"]}>
                            <span>{pizza.name} X {pizza.quantity} </span>
                            <span className={classes["element-price"]}> {pizza.quantity * pizza.price} €</span>
                        </div>
                    ))}
                    
                </div>
                <p className={classes["cart-total"]}>Total : {total} €</p>
            </aside>
}

export default Aside;