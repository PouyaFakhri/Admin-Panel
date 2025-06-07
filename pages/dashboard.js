import DashboardUi from "../components/templates/DashboardUi";
import styles from "../styles/dashboard.module.css"
import { getTokenFromServer } from "../utils/cookies";
import api from "../lib/axiosConfig"

function Dashboard({products}) {
  return (
    <div className={styles.container}>
      <DashboardUi products = {products}/>
    </div>
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const { req } = context;
  const token = getTokenFromServer(req)
  const products = await api.get("/products" , {token} );
 
  return {
    props: {
      products,
    },
  };
}
