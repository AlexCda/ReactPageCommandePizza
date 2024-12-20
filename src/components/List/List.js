import Card from '../Card/Card'
import classes from './List.module.css'

const pizzas = [
    {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&amp;auto=format",
         name:"Margherita",
         ingredients:"Tomate, mozzarella, basilic frais",
         price:12.90
    },
    {
        url: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&amp;auto=format",
         name:"Regina",
         ingredients:"Tomate, mozzarella, jambon, champignons",
         price:14.90
    },
    {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&amp;auto=format",
         name:"Calzone",
         ingredients:"Tomate, mozzarella, jambon, œuf",
         price:15.90
    },
    {
        url: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&amp;auto=format",
         name:"Végétarienne",
         ingredients:"Tomate, légumes grillés, olives",
         price:13.90
    },
]
          
function List({onShowModal}) {
    const pizzaList = pizzas.map(function(pizza) {
        return  <Card 
                    onShowModal = {onShowModal}
                    data={pizza}
                    key={pizza.name}
                />
    })
    return  <section className={classes["menu-container"]}>
                    {pizzaList}
            </section>
}
export default List;