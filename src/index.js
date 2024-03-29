import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Seatbooking from "./components/Seatbooking";
import Landing from "./pages/Landing";
import MovieBooking from "./pages/MovieBooking";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Landing/>
  },
  {
    path: "/movies/:id",
    element: <MovieBooking />,
  },
  {
    path:"/seats",
    element:<Seatbooking/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <RouterProvider router={routes}>
    
        <App />
     
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
