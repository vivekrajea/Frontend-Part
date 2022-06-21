import React, { useState, useEffect } from 'react'
import DataService from '../services/DataService';
import { useNavigate, Link, useParams } from 'react-router-dom';
export const AddDataComponent = () => {

    const [code, setcode] = useState('')
    const [codeHRIS, setcodeHRIS] = useState('')
    const [name, setname] = useState('')
    const [abbrName, setabbrName] = useState('')
    const [regNo, setregNo] = useState('')
    const [logo, setlogo] = useState('')
    const [activeDate, setactiveDate] = useState()
    const [isActive, setisActive] = useState()
    const [createdOn, setcreatedOn] = useState()
    const [createdBy, setcreatedBy] = useState('')
    const [lastModifiedOn, setlastModifiedOn] = useState()
    const [lastModifiedBy, setlastModifiedBy] = useState('')
    const [deactivatedBy, setdeactivatedBy] = useState('')
    const [deactivatedOn, setdeactivatedOn] = useState()
    const [reactivatedBy, setreactivatedBy] = useState('')
    const [reactivatedOn, setreactivatedOn] = useState()


    const navigate = useNavigate();
    let { id } = useParams();
    console.log(id);
    const saveOrUpdateData = (e) => {

        e.preventDefault();

        const data = { code, codeHRIS, name, abbrName, regNo, logo, activeDate, isActive, createdOn, createdBy, lastModifiedOn, lastModifiedBy, deactivatedBy, deactivatedOn, reactivatedBy, reactivatedOn }
        if (id) {
            DataService.updateData(data, id).then((response) => {
                navigate('/data')
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            DataService.createData(data).then((response) => {
                navigate('/data');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        console.log(id);
        DataService.getDataById(id).then((response) => {
            // console.log(response);
            setcode(response.data.code)
            setcodeHRIS(response.data.code)
            setname(response.data.code)
            setabbrName(response.data.code)
            setregNo(response.data.code)
            setlogo(response.data.code)
            setactiveDate(response.data.code)
            setisActive(response.data.code)
            setcreatedOn(response.data.code)
            setcreatedBy(response.data.code)
            setlastModifiedOn(response.data.code)
            setlastModifiedBy(response.data.code)
            setdeactivatedBy(response.data.code)
            setdeactivatedOn(response.data.code)
            setreactivatedBy(response.data.code)
            setreactivatedOn(response.data.code)
            
        }).catch(error => {
            console.log(error)
        })

    }, [])

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Data</h2>
        } else {
            return <h2 className="text-center">Add Data</h2>
        }
    }



    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form >
                                <div className="form-group mb-2">
                                    <label className="form-label">Code :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company Code'
                                        name='code'
                                        className='form-control'
                                        value={code}
                                        onChange={(e) => setcode(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Code HRIS :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company Code HRIS'
                                        name='codeHRIS'
                                        className='form-control'
                                        value={codeHRIS}
                                        onChange={(e) => setcodeHRIS(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Name :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company Name'
                                        name='name'
                                        className='form-control'
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Abbr Name :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company Abbr Name'
                                        name='abbrName'
                                        className='form-control'
                                        value={abbrName}
                                        onChange={(e) => setabbrName(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Reg No :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company Reg No'
                                        name='regNo'
                                        className='form-control'
                                        value={regNo}
                                        onChange={(e) => setregNo(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">logo :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Company logo'
                                        name='logo'
                                        className='form-control'
                                        value={logo}
                                        onChange={(e) => setlogo(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Active Date :</label>
                                    <input
                                        type="date"
                                        placeholder='Enter Active Date'
                                        name='activeDate'
                                        className='form-control'
                                        value={activeDate}
                                        onChange={(e) => setactiveDate(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Is Active :</label>
                                    <input
                                        type="text"
                                        placeholder='Is Active'
                                        name='isActive'
                                        className='form-control'
                                        value={isActive}
                                        onChange={(e) => setisActive(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Created On :</label>
                                    <input
                                        type="date"
                                        placeholder='Enter Created On'
                                        name='createdOn'
                                        className='form-control'
                                        value={createdOn}
                                        onChange={(e) => setcreatedOn(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">createdBy :</label>
                                    <input
                                        type="text"
                                        placeholder='Created By'
                                        name='createdBy'
                                        className='form-control'
                                        value={createdBy}
                                        onChange={(e) => setcreatedBy(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Modified On :</label>
                                    <input
                                        type="date"
                                        placeholder='Last Modified On'
                                        name='name'
                                        className='form-control'
                                        value={lastModifiedOn}
                                        onChange={(e) => setlastModifiedOn(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Modified By :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Last Modified By'
                                        name='lastModifiedBy'
                                        className='form-control'
                                        value={lastModifiedBy}
                                        onChange={(e) => setlastModifiedBy(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Deactivated By :</label>
                                    <input
                                        type="text"
                                        placeholder='Deactivated By'
                                        name='deactivatedBy'
                                        className='form-control'
                                        value={deactivatedBy}
                                        onChange={(e) => setdeactivatedBy(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">deactivatedOn :</label>
                                    <input
                                        type="date"
                                        placeholder='Deactivated On'
                                        name='deactivatedOn'
                                        className='form-control'
                                        value={deactivatedOn}
                                        onChange={(e) => setdeactivatedOn(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Reactivated By :</label>
                                    <input
                                        type="text"
                                        placeholder='Reactivated By'
                                        name='name'
                                        className='form-control'
                                        value={reactivatedBy}
                                        onChange={(e) => setreactivatedBy(e.target.value)}

                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">reactivatedOn :</label>
                                    <input
                                        type="date"
                                        placeholder='Reactivated On'
                                        name='reactivatedOn'
                                        className='form-control'
                                        value={reactivatedOn}
                                        onChange={(e) => setreactivatedOn(e.target.value)}

                                    ></input>
                                </div>
                                <button className="btn btn-success" style={{ marginLeft: "10px" }} onClick={(e) => saveOrUpdateData(e)}>Submit</button>
                                <Link to="/data" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
