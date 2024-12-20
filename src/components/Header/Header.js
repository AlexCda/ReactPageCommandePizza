import classes from './Header.module.css';
function Header() {
    return  <header className={classes.header}>
                <h1>Pizzeria</h1>
                <p>Les meilleures pizzas artisanales</p>
            </header>
}
export default Header;