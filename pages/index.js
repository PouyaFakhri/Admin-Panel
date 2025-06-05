import LoginForm from "../components/templates/LoginForm";
import styles from "../styles/loginpage.module.css"

function Login() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Panel</h2>
      <LoginForm />
    </div>
  );
}

export default Login;
