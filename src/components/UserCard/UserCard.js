import './styles.css';

const UserCard = ({ user }) => {
    const {  avatar, first_name, last_name, job, email} = user;

    return (
        <div className='card'>
            <img className="avatar" src={avatar} alt={avatar} />
            <div className="description">
                <p id="name"> <b>Name: </b> {first_name} {last_name}</p>
                {
                    (job) ?
                        <p id="job"><b>Job: </b>{job}</p> : null
                }
                <p id="email"><b>Email: </b>{email}</p>
            </div>
        </div>
    )
}

export default UserCard;