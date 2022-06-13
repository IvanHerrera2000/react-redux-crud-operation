import React from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/outline';

function UserList() {
  const users = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Sara', email: 'sara@gmail.com' },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div
        className="bg-gray-300 p-5 flex items-center justify-between"
        key={user.id}
      >
        <div>
          <h3 className="font-bold text-lg text-black">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          {/* edit icon from heroicons */}
          <button>
            <PencilIcon className="h-5 w-5" />
          </button>
          {/* delete icon from heroicons */}
          <button>
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    ));

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {users.length ? (
        renderCard()
      ) : (
        <p className="text-center col-span-2 text-gray-700 font-semibold">
          No User
        </p>
      )}
    </div>
  );
}

export default UserList;
