import React, { useEffect, useState } from 'react'
import DataService from '../services/DataService'
import { Link } from 'react-router-dom';
export const CompData = () => {

    const [datas, setdatas] = useState([])

    useEffect(() => {

        getAllDatas();

    }, [])
    
    const getAllDatas = () =>{
        DataService.getDatas().then((response) => {
            setdatas(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteData = (dataId) =>{
        DataService.deleteData(dataId).then((response) =>{
            getAllDatas();
        }).catch(error =>{
            console.log(error);
        })
    } 



    return (
        <div className='container'>
            <h2 className='text-center'>List Data</h2>
            <Link to = "/add-data" className = "btn btn-primary mb-2">Add Data</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Company Code</td>
                        <td>Company Name</td>
                        <td>Last Modified On</td>
                        <td>Last Modified By</td>
                        <td>Actions</td>
                    </tr>

                </thead>
                <tbody>
                    {
                        datas.map(
                            data =>
                                <tr key={data.code}>
                                    <td>{data.code}</td>
                                    <td>{data.name}</td>
                                    <td>{data.lastModifiedOn}</td>
                                    <td>{data.lastModifiedBy}</td>
                                    <td>
                                        <Link className="btn btn-info" to = {`/edit-employee/${data.code}`}>Update</Link>
                                        <button className="btn btn-danger" onClick={() =>deleteData(data.code)}
                                        style = {{marginLeft : "10px"}}>Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CompData;
