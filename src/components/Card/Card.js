import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, body, icon, topColor }) => {
    console.log(icon);
    return (
        <div className={styles.container}>
            <div style={{backgroundColor: topColor, height: '5px'}}></div>
            <article style={{padding: '1rem'}}>
                <header style={{color: '#4c4c4c', fontWeight: '500', fontSize: '1rem', textAlign: 'left'}}>
                    {title}
                </header>
                <p style={{textAlign: 'left', color: '#aaa', fontSize: '0.85rem'}}>
                    {body}
                </p>
                <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <img 
                        src={icon} 
                        alt="data icon"
                        height="75"
                        width="75" 
                    />
                </div>

                
            </article>
        </div>
    )   
}

export default Card;