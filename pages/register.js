import styles from "../styles/registerpage.module.css";
import RegisterForm from "../components/templates/RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Admin Panel</h2>
      <RegisterForm />
    </div>
  );
}

export default Register;
