import React from 'react';
import Pagination from './Pagination';
import User from './User';

// algo
// 1. make layout => html, css
// 2. break into components
// 3. move html into jsx => static version
// 4. identify state and props
// 5. write logic app

// state
// currentPage: number

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const { users } = this.props;
    const totalItems = users.length;
    const itemsPerPage = 3;
    const { currentPage } = this.state;

    const indexFrom = itemsPerPage * currentPage - itemsPerPage;
    const indexTo = itemsPerPage * currentPage;
    const usersListRender = users.slice(indexFrom, indexTo);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />

        <ul className="users">
          {usersListRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
