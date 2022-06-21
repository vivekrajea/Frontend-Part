import React, { Component } from 'react'
import DataService from '../services/DataService'
export default class CreateDataComponent extends Component {
  render() {
    return (
      <div>
        <h1>Form to Fill</h1>
        <div className='container'>
           <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Add Data</h3>
                    <div className="card-body">
                      <form >
                        <div className="form-group">
                            <label>Company Code</label>
                            <input placeholder='Company Code' name='companyCode' className='form-control' value = {this.state.code} onChange = {this.changeCodeHandler} />
                        </div>
                      </form>  
                    </div>
                </div>
           </div>
        </div>
      </div>
    )
  }
}
