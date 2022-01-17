import styles from './Frase.module.css'

function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <span className={styles.fraseContent}> Este é um componente com uma frase</span>
        </div>
    )
}

export default Frase