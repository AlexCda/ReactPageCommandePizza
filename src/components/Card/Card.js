import Button from '../Button/Button'
import classes from './Card.module.css'
function Card({onShowModal, data}) {
    return <div className={classes["pizza-card"]}>
                <img src={`${data.url}`} alt={`${data.name}`}/>
                <h2>{data.name}</h2>
                <p className={classes.description}>{data.ingredients}</p>
                <p className={classes.price}>{data.price} €</p>
                    <Button data={data} onShowModal={onShowModal}/>
            </div>
}
export default Card;