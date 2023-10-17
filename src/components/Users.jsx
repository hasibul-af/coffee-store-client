import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <div>
      <h2>Users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Creates At </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                loadedUsers.map(user => <tr key={user._id}>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>None</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
