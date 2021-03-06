import React from 'react';
import sushi from '../../assets/sushi.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={ styles.header }>
                <h1>React Sushi Bar</h1>
                <HeaderCartButton onClick={ props.onShowCart } />
            </header>
            <div className={ styles['main-image'] }>
                <img src={ sushi } alt="logo" />
            </div>
            
        </React.Fragment>
    )
}

export default Header;
