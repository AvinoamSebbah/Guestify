import { useRoutes, Navigate } from "react-router-dom";

// routes
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([
      MainRoutes,
      {
        path: "*",
        element: <Navigate to="/home" />,
      },
    ]);
}
