import classes from './items.module.css'
import { itemsData } from './items.data.js'
import ItemComponent from './item.component/item.component.jsx'

function ItemsComponent() {

    return (
        <div className={classes.wrapper}>
            <div className={classes.heading}>Featured Products</div>
            <div className={classes.container}>
                {itemsData.map((item, index) => (
                    <ItemComponent key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ItemsComponent