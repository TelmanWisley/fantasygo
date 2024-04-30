import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { PATH } from "consts";
import { DashboardPage, LoginPage, LeaguePage } from "pages";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import "react-toastify/dist/ReactToastify.css";
import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { MainContext } from "context";
import { client } from "utils";

loadDevMessages();
loadErrorMessages();

function App() {
  const GET_DATA_QUERY = gql`
    query LoginResolver {
      getDataQuery
    }
  `;
  const { data, error } = useQuery(GET_DATA_QUERY, { client });
  const { updatePhoneNumber } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      updatePhoneNumber("");
      localStorage.removeItem("token");
      navigate(PATH.LOGIN);
      toast.error(error.message);
    }
    if (data) {
      updatePhoneNumber(data["getDataQuery"]);
    }
  }, [data, error]);

  return (
    <>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.LEAGUE} element={<LeaguePage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
