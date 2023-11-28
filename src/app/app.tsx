import MuiProvider from "@/app/providers/mui-provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "@/shared/router/router.tsx";

const App = () => {
  return (
    <MuiProvider>
      <RouterProvider router={router} />
    </MuiProvider>
  );
};

export default App;
