import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import RootLayout from "./RootLayout";
import ContactLayout from "./ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./JobsLayout";
import Jobs, { JobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoder } from "./Components/JobDetails";
import Error from "./Components/Error";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}  errorElement={<Error />}>
          <Route index loader={JobsLoader} element={<Jobs />} />
          <Route
            path=":id"
            element={<JobDetails />}
            loader={JobDetailsLoder}
           
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
