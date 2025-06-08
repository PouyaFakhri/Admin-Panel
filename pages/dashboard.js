import DashboardUi from "../components/templates/DashboardUi";
import { getTokenFromServer } from "../utils/cookies";
import api from "../lib/axiosConfig"

function Dashboard({data}) {
  return (
    <>
      <DashboardUi ssrData = {data?.data}/>
    </>
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const { req } = context;
  const token = getTokenFromServer(req)
  const data = await api.get("/products" , {token} );
 
  return {
    props: {
      data,
    },
  };
}
