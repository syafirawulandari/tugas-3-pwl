import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootElement from "./RootElement";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Toko from "./pages/Toko/Toko";
import DaftarBarang from "./pages/Toko/DaftarBarang";
import DetailBarang from "./pages/Toko/DetailBarang";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Beranda />} />
      <Route path="market" element={<Toko />}>
        <Route index element={<DaftarBarang />} />
        <Route path=":id" element={<DetailBarang />} />
      </Route>
      <Route path="contact" element={<Kontak />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={route} />;
}

export default App;
