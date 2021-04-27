import styles from './Login.module.scss';

function Login(): JSX.Element {
    return (
        <div className={styles.login}>
            <div className={styles.loginItems}>
                <h1 className={styles.h1}>Login</h1>
                <input className={styles.input} type="text" placeholder="example@tptlive.ee" id="username"/>
                <input className={styles.input} type="text" placeholder="password" id="password"/>
                <button className={styles.button}>Login</button>
            </div>
            
        </div>
    );
}
export default Login;