import React from 'react';
import UsersList from './UsersList';

const users = [
  { id: 11, name: 'Tom', age: 20 },
  { id: 22, name: 'Bob', age: 100 },
  { id: 3424, name: 'Rob', age: 32 },
  { id: 3425, name: 'Rim', age: 45 },
  { id: 3426, name: 'Skin', age: 27 },
  { id: 3427, name: 'Bobby', age: 26 },
  { id: 3428, name: 'Jack', age: 19 },
  { id: 3429, name: 'Bom', age: 21 },
  { id: 3430, name: 'DOM', age: 22 },
  { id: 3431, name: 'Toretto', age: 60 },
];

class App extends React.Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;
