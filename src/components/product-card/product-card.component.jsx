import './product-card.styles.scss'

import Button from '../button/button.component.jsx'
import { startTransition } from 'react';
const ProductCard = ( {product} ) => {
    const {name, price, imageUrl} = product; 
    return (
        <div className='product-card-container'> 
            <img alt={`${name}`} src={imageUrl}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <Button buttonType='inverted'>Add to basket</Button>
            </div>
        </div>
    )
}; 

export default ProductCard;