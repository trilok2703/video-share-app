import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";

import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import "./App.css";

function App() {
  const appRouter = createBrowserRouter([{
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage/>,
        },
      ],
  }]);

  return (
    <Provider store={store}>
      <div>
        {/* 
        
          Head
          Body
            Sidebar
              MenuItems
            Main container
              Button list
              Video container
              Video Card
        */}
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
