import Login from './Pages/Login';
import Produtos from './Pages/Products'

//rotas
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    {/*Rotas da aplicação*/}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="produtos" element={<Produtos />} />
      </Routes>
      
    </>
  );
}