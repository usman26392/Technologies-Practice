import styles from "./loginPage.module.scss"



function Login() {
  return (
    <div className={`${styles['sign-ins-wrapper']}`} >
      <ul>
        <li className={`${styles['sign-in-btn']}`} >Sign in with Google</li>
        <li className={`${styles['sign-in-btn']}`} >Sign in with Github</li>
        <li className={`${styles['sign-in-btn']}`} >Sign in with Facebook</li>
      </ul>
    </div>
  );
}

export default Login;
