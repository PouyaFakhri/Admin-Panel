import Dashboard from "../components/templates/Dashboard";
import styles from "../styles/dashboard.module.css"
import { getTokenFromServer } from "../utils/cookies";
import api from "../lib/axiosConfig"

function dashboard({products}) {
  return (
    <div className={styles.container}>
      <Dashboard products = {products}/>
    </div>
  );
}

export default dashboard;

export async function getServerSideProps(context) {
  console.log(context)
  const { req } = context;
  const token = getTokenFromServer(req)
  const products = await api.get("/products" , {token} );
 
  return {
    props: {
      products,
    },
  };
}
