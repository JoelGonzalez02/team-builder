import React, { useState } from 'react';

const TeamForm = ({addNewTeamMember}) => {

    const [members, setMembers] = useState({
        name: '',
        email: '',
        role: ''
    });

const handleChanges = e => {
    setMembers({...members, [e.target.name]: e.target.value});
}

const submitForm = e => {
    e.preventDefault();
    addNewTeamMember(members);
    setMembers({
        name: '',
        email: '',
        role: ''
    });
};

return (
    <form className='form' onSubmit={submitForm}>
        <label className='label' htmlFor='name'>Name</label>
        <input className='input'
            id='name'
            type='text'
            placeholder='Enter name'
            value={members.name}
            name='name'
            onChange={handleChanges}
            />

<label className='label' htmlFor='email'>Email</label>
<input className='input'
    id='email'
    type='text'
    placeholder='Enter email'
    value={members.email}
    name='email'
    onChange={handleChanges}
    />


<label className='label' htmlFor='role'>Role</label>
<input class='input'
    id='role'
    type='text'
    placeholder='Enter role'
    value={members.role}
    name='role'
    onChange={handleChanges}
    />

    <button className='button' type='submit'>Add Team Member</button>
</form>


);

};

export default TeamForm;