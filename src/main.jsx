import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import bingeStore from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={bingeStore}>
    <App />
  </Provider>
);
