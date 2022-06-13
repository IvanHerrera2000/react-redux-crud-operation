import { Route, Routes } from 'react-router-dom';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-16">
      <h1 className="text-center font-bold text-2xl text-black mb-8">
        CRUD with Redux Toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
