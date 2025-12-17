// components/TopUsers.tsx
import React from "react";

interface User {
  name: string;
  points: number;
}

interface Props {
  users: User[];
}

const TopUsers: React.FC<Props> = ({ users }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80">
      <h3 className="text-gray-500 font-medium mb-4">Top Users</h3>
      <ul>
        {users.map((u, idx) => (
          <li key={idx} className="mb-2">
            <span className="font-semibold">{u.name}</span> - {u.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
