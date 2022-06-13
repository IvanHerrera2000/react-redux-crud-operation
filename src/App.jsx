import { Route, Routes, Link } from 'react-router-dom';
import UserList from './features/users/UserList';
import AddUser from './features/users/AddUser';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-16">
      <Link to="/">
        <h1 className="text-center font-bold text-2xl text-black mb-8">
          CRUD with Redux Toolkit
        </h1>
      </Link>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
