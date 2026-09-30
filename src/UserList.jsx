import React, { Fragment } from 'react';

function UserList({ users }) {
  return (
    <Fragment>
      {users.map((user) => (
        <Fragment key={user.name}>
          <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '12px 16px',
            margin: '8px 0',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
          }}>
            <p style={{ margin: '0 0 4px 0' }}>
              <strong>نام:</strong> {user.name}
            </p>
            <p style={{ margin: '0 0 4px 0' }}>
              <strong>سن:</strong> {user.age}
            </p>
            <p style={{ margin: 0 }}>
              <strong>شهر:</strong> {user.city}
            </p>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default UserList;
