import './App.css';
import EmployeeList from './pages/employee-list/employee-list';
import CreateEmployee from './pages/create-employee/create-employee';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<CreateEmployee />} />
        <Route path="employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;