import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/marcoscosta90.png" alt="Marcos Costa" />           
            <div>
                <strong>Marcos Costa</strong>
                <p>                
                <img src="icons/level.svg" alt="Level" />            
                Level 1</p>
            </div>
        </div>
        
    )
}