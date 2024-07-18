import React, { useEffect, useState } from 'react';
import Nav from "../Navigator/Nav";
import './DatabaseStyle.css'; // Add this for styling

function Database() {
    const [records, setRecords] = useState([]);
    const [filters, setFilters] = useState({ company: '', dscType: '', date: '' });
    const [message, setMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editData, setEditData] = useState({
        srNo: '',
        name: '',
        company: '',
        dscType: '',
        orderId: '',
        type: '',
        paymentType: '',
        transactionId: ''
    });

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await fetch('/api/forms');
                const data = await response.json();
                setRecords(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchRecords();
    }, []);

    const handleDelete = async (srNo) => {
        try {
            const response = await fetch(`/api/forms/${srNo}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setRecords(records.filter(record => record.srNo !== srNo));
                setMessage('Record deleted successfully');
            } else {
                setMessage('Failed to delete record');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error deleting record');
        }
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleEditChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/forms/${editData.srNo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editData)
            });

            if (response.ok) {
                setRecords(records.map(record => (record.srNo === editData.srNo ? editData : record)));
                setEditMode(false);
                setMessage('Record updated successfully');
            } else {
                setMessage('Failed to update record');
            }
        } catch (error) {
            console.error('Error updating record:', error);
            setMessage('Error updating record');
        }
    };

    const filteredRecords = records.filter(record => {
        return (
            (filters.company ? record.company === filters.company : true) &&
            (filters.dscType ? record.dscType === filters.dscType : true) &&
            (filters.date ? new Date(record.createdAt).toISOString().slice(0, 10) === filters.date : true)
        );
    });

    return (
        <div className="database-container">
            <Nav />
            <h2>Database</h2>
            {message && <p className="message">{message}</p>}
            <div className="filters">
                <select name="company" onChange={handleFilterChange}>
                    <option value="">Select Company</option>
                    <option value="ncode">Ncode</option>
                    <option value="sifi">Sifi</option>
                    <option value="capricon">Capricon</option>
                </select>
                <select name="dscType" onChange={handleFilterChange}>
                    <option value="">Select Dsc Type</option>
                    <option value="class2">Class 2</option>
                    <option value="tender">Tender</option>
                </select>
                <input
                    type="date"
                    name="date"
                    onChange={handleFilterChange}
                />
            </div>
            {editMode ? (
                <form onSubmit={handleEditSubmit}>
                    <h3>Edit Record</h3>
                    <label>Name:</label>
                    <input type="text" name="name" value={editData.name} onChange={handleEditChange} required />
                    <br />
                    <label>Company:</label>
                    <input type="text" name="company" value={editData.company} onChange={handleEditChange} required />
                    <br />
                    <label>DSC Type:</label>
                    <input type="text" name="dscType" value={editData.dscType} onChange={handleEditChange} required />
                    <br />
                    <label>Order ID:</label>
                    <input type="text" name="orderId" value={editData.orderId} onChange={handleEditChange} required />
                    <br />
                    <label>Type:</label>
                    <input type="text" name="type" value={editData.type} onChange={handleEditChange} required />
                    <br />
                    <label>Payment Type:</label>
                    <input type="text" name="paymentType" value={editData.paymentType} onChange={handleEditChange} required />
                    <br />
                    <label>Transaction ID:</label>
                    <input type="text" name="transactionId" value={editData.transactionId} onChange={handleEditChange} required />
                    <br />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Sr.no</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Dsc Type</th>
                            <th>Order ID</th>
                            <th>Type</th>
                            <th>Payment Type</th>
                            <th>Transaction ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRecords.map((record) => (
                            <tr key={record.srNo}>
                                <td>{record.srNo}</td>
                                <td>{record.name}</td>
                                <td>{record.company}</td>
                                <td>{record.dscType}</td>
                                <td>{record.orderId}</td>
                                <td>{record.type}</td>
                                <td>{record.paymentType}</td>
                                <td>{record.transactionId}</td>
                                <td>
                                    <button onClick={() => handleDelete(record.srNo)}>Delete</button>
                                    <button onClick={() => {
                                        setEditMode(true);
                                        setEditData(record);
                                    }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Database;
