import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import EditTodo from './Components/EditTodo';
function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route path='/' element={<Home />} />
          <Route path='/editTodo/:id' element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
