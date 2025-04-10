import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51R64hyLrSdQNOahOLwp4HBIL8McumMyIlZFLSheya8Mre84d3uq4NkVkHqQVlGxikU9cr3OAOK8LdGR7pGkG97sn00ERgTiWeM"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
