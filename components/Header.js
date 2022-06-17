import styles from '../styles/Header.module.css';

function Header(){
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Lyrica</h1>
        </header>
    )
}

export default Header;