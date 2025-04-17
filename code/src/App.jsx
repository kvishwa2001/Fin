
import { RouterProvider, createBrowserRouter } from "react-router";
import { router } from "./routes/routes.jsx";
import PopupModal from "./components/PopupModal";

const App = () => {
  return (
    <>
      <PopupModal />
      <RouterProvider router={router} />
    </>
  )
};

export default App;