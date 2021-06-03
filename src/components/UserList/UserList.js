import UserCard from '../UserCard/UserCard';
import './styles.css';

const UserList = ({ users }) => {
    return (
        <div className='list-container'>
             <h1 className="title">Users List</h1>
            {users.map((user) => {
                return <UserCard key={user.id} user={user}
                />
            })
            }
        </div>
    )
}

export default UserList;