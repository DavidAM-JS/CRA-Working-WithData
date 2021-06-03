import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import avatar1 from '../../images/avatar1.png';
import './styles.css';

const Form = ({ showUsers }) => {
    const [firstName, setFirstNameState] = useState('');
    const [lastName, setLastNameState] = useState('');
    const [jobName, setJobState] = useState('');

    const handleFirstName = (event) => setFirstNameState(event.target.value)

    const handleLastName = (event) => setLastNameState(event.target.value)
    
    const handleJobName = (event) => setJobState(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { firstName: firstName, lastName: lastName, job: jobName };

        if (inputsValidate(newUser)) {
            try {
                fetch('https://reqres.in/api/users', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name: firstName, job: jobName})
                }).then((response) => {
                  console.log(response);
                  return response.json();
                }).then((data) => {
                  console.log(data);
                  const newUser = {id: `${data.id}`, avatar: avatar1, first_name: firstName, last_name: lastName, email:`${firstName.toLowerCase()}.${lastName.toLowerCase()}@reqres.in`, job: jobName}
                  showUsers(newUser);
                })
              } catch (error) {
                alert('There was an error while showing the users');
              }
        } else {
            alert('You cant have empty fields');
        }
    }

    const inputsValidate = (user) => {
        const keys = Object.values(user);
        return keys.every(input => input !== '');
    }
 
    return (
        <div className='form-container'>
            <h1>Create a New User</h1>
            <form>
                <TextField 
                    className="input"
                    label='First Name'
                    margin="normal"
                    variant="outlined"
                    value={firstName} 
                    onChange={handleFirstName}
                    required/>
                <TextField
                    className="input"
                    label='Last Name'
                    margin='normal' 
                    variant="outlined"
                    value={lastName} 
                    onChange={handleLastName}
                    required/>
                <TextField
                    className="input"
                    label='Job'
                    margin='normal' 
                    variant="outlined"
                    value={jobName}
                    onChange={handleJobName}
                    required/>
                <Button className="button" color="secondary" variant="contained" onClick={handleSubmit}>CREATE USER</Button>
            </form>
        </div>

    )
}

export default Form;