import styles from './../styles.module.css'

const stylesDiv = {
    padding: 20,
    marginBottom: 10,
    backgroundColor: 'pink'
}

const Joke = (props) => {
    return (
        <div style={stylesDiv}>
            <h2 className={styles.joke}>{ props.question? props.question: '' }</h2>
            <h1 style={{color: 'green'}}>{ props.punchline }</h1>
        </div>
    )
}

export default Joke