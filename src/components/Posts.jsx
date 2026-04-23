import React from "react";

export const Posts = ({ postList }) => {
  return (
    <div id="users">
      <h2>Users:</h2>
      {postList.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.name}</td>
                  <td>{post.username}</td>
                  <td>{post.email}</td>
                  <td>{post.address.street}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2> Loading...</h2>
      )}
    </div>
  );
};
