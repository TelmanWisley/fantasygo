import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { client } from "utils";
import { MainProvider } from "context";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MainProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </MainProvider>
);
