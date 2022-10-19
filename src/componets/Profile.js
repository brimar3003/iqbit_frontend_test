import React from 'react';

const Profile = ({data}) => {
    return (
        <div className='card'>
            <img className='card-img-top' src={data.avatar_url} alt='user_avatar'/>
            <div class="card-body">
                <h3>{data.name}</h3>
                <p>{data.login}</p>
                <a className='btn btn-primary form-control' href={data.url}>View</a>
            </div>
        </div>
    );
}

export default Profile;