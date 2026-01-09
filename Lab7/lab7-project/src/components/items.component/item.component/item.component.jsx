import classes from "./item.module.css"


function ItemComponent({ data }) {
    const { title, image, price, salePrice, currency } = data;

    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                {salePrice && <span className={classes.saleBadge}>SALE</span>}
                
                <img src={image} alt={title} className={classes.image} />
            </div>

            
            <div className={classes.title}>{title}</div>
            
            <div className={classes.priceBox}>
                {salePrice ? (
                    <>
                        <span className={classes.salePrice}>
                            {currency}{salePrice}
                        </span>
                        <span className={classes.oldPrice}>
                            {currency}{price}
                        </span>
                    </>
                ) : (
                    <span className={classes.regularPrice}>
                        {currency}{price}
                    </span>
                )}
            </div>
            
        </div>
    )
}

export default ItemComponent