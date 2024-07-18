import Nav from "../Navigator/Nav";
import './Formsstyle.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../../store/actions/formActions';

const Forms = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        srNo: '', // Add srNo field
        name: '',
        company: '',
        dscType: '',
        orderId: '',
        type: '',
        paymentType: '',
        transactionId: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(submitForm(formData));
            setMessage('Form submitted successfully!');
            // Optionally, clear the form fields after submission
            setFormData({
                srNo: '',
                name: '',
                company: '',
                dscType: '',
                orderId: '',
                type: '',
                paymentType: '',
                transactionId: ''
            });
        } catch (error) {
            setMessage('Form submission failed. Please try again.');
        }
    };

    return (
        <div className="forms-container">
            <Nav />
            <h2>Forms</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>Sr. No:</label>
                <input type="number" name="srNo" value={formData.srNo} onChange={handleChange} required />
                <br />
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                <br />
                <label>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required />
                <br />
                <label>DSC Type:</label>
                <input type="text" name="dscType" value={formData.dscType} onChange={handleChange} required />
                <br />
                <label>Order ID:</label>
                <input type="text" name="orderId" value={formData.orderId} onChange={handleChange} required />
                <br />
                <label>Type:</label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} required />
                <br />
                <label>Payment Type:</label>
                <input type="text" name="paymentType" value={formData.paymentType} onChange={handleChange} required />
                <br />
                <label>Transaction ID:</label>
                <input type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Forms;
