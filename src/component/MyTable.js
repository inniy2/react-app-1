import React from 'react';

const MyTable = () => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-0 ">
                <h2>Alter schedule</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                    </div>
                    <button type="button" className="btn btn-big btn-primary" data-toggle="modal" data-target="#addAlterSchedule">ADD</button>  
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Shard Name</th>
                    <th>Database Name</th>
                    <th>Table NAME</th>
                    <th>Table Size (GB)</th>
                    <th>Table Size (Rows)</th>
                    <th>ECT (H)</th>
                    <th>Registration Date</th>
                    <th>Status</th>
                    <th>Updator</th>
                    <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>15-08-2019</td>
                    <td>03:15</td>
                    <td>ORDER-EU</td>
                    <td>taxify_company</td>
                    <td>order</td>
                    <td>141</td>
                    <td>125,987,938</td>
                    <td>10</td>
                    <td>20-07-2019</td>
                    <td>Resisted</td>
                    <td>Sangsun</td>
                    <td><button type="button" className="btn btn-sm btn-primary" data-toggle="modal" data-target="#addAlterSchedule">Edit</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

    );
}

export default MyTable