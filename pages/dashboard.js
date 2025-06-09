import DashboardUi from "../components/templates/DashboardUi";
import { getTokenFromServer } from "../utils/cookies";
import api from "../lib/axiosConfig";
import { DecodeJwt } from "../utils/jwt";

function Dashboard({ data, userName }) {
  return (
    <>
      <DashboardUi ssrData={data?.data} userName={userName}/>
    </>
  );
}

export default Dashboard;

export async function getServerSideProps(context) {
  const { req } = context;
  const token = getTokenFromServer(req);
  const userName = await DecodeJwt(token);
  const data = await api.get("/products?limit=10", { token });

  return {
    props: {
      data,
      userName,
    },
  };
}
