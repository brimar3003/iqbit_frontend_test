import React from 'react'

const Repositories = ({data}) => {
    return (
        <div className='row'>
            <div className='col-sm-12 mb-5'>
        	    <h2>Repositories</h2>
            </div>
            {
                data.map((item) => {
                    return(
                        <div className='row mt-2'>
                            <div className='col-sm-11'>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <p>Created at: <span style={{color: 'gray'}}>{item.created_at}</span></p>
                            </div>
                            <div className='col-sm-1'>
                                <a href={item.html_url} className='btn btn-primary' style={{float: 'right'}}>View</a>
                            </div>
                            <hr style={{borderTop: '1px gray solid'}}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Repositories;