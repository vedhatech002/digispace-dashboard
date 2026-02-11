import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/appRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";
import AuthInitializer from "./app/AuthInitializer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthInitializer />
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  );
}

export default App;
