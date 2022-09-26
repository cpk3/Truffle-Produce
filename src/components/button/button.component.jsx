//naming my personal button with a capital to distinguish between the jsx one adn styled button

// buttons will have are...
// default button 
// inverted version 
// google sign in 
import './button.styles.scss'

const ButtonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${ButtonTypeClasses[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button; 


//question  - why passing button type as an array and not as props ()?