import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Profile from '../../componets/Profile';
import Repositories from '../../componets/Repositories';
import { API_ENDPOINT } from '../../constants';

const GithubUser = () => {

    // State
    
    const [profileData, setProfileData] = useState({});
    const [repositoriesData, setRepositoriesData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    // Functions

    const getData = async () => {
        await axios({
            url: `${API_ENDPOINT}`,
            method: 'GET'
        }).then(async (profileResponse) => {
            await axios({
                url: `${API_ENDPOINT}/repos`,
                method: 'GET'
            }).then((repositoriesResponse) => {
                setRepositoriesData(repositoriesResponse.data);
                setProfileData(profileResponse.data);
                setLoading(false);
            }).catch((error) => {
                console.error(`Error: ${error}`);
            });
        }).catch((error) => {
            console.error(`Error: ${error}`);
        });
    }

    // View

    if(loading){
        return(
            <div className='d-flex align-items-center justify-content-center w-100' style={{height: '100vh'}}>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-sm-4'>
                    <Profile data={profileData} />
                </div>
                <div className='col-sm-8'>
                    <Repositories data={repositoriesData} />
                </div>
            </div>
        </div>
    );
}

export default GithubUser;