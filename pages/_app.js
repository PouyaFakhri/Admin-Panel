import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        toastClassName="epic-toast"
        bodyClassName="epic-toast-body"
        progressClassName="epic-toast-progress"
      />
    </QueryClientProvider>
  );
}

export default MyApp;
