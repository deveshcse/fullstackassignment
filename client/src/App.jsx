import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import StudentsRecord from "./pages/StudentsRecord";

const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600">
        We could not able to find this page at this moment....
      </p>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <StudentsRecord /> }, // setting this to view Student record page on starting
      { path: "/students", element: <StudentsRecord /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
