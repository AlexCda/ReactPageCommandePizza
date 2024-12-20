import classes from './Button.module.css'
function Button({data, onShowModal}) {
   
    return  <div className={classes.buttons}>
                <button className={`${classes.btn} ${classes.order}`} onClick={() => onShowModal(data)}>Commander</button>
            </div>
} 
export default Button;