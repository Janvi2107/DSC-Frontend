import React from 'react';
import "./Nav.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/'); // Redirect to login page after logout
    };

    return (
        <div className="nav">
            <div className="main">
                <h2>DSC Management System</h2>
                <div className="list">
                    <ul className="nav-list">
                        <li>
                            <Link to="/home" style={{ color: 'bisque' }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/forms" style={{ color: 'bisque' }}>Forms</Link>
                        </li>
                        <li>
                            <Link to="/db" style={{ color: 'bisque' }}>Database</Link>
                        </li>
                        <li>
                            <Link to="/invoice" style={{ color: 'bisque' }}>Invoice</Link>
                        </li>
                        <li>
                            <Link to="/login" style={{ color: 'bisque' }}>Login</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} style={{ color: 'bisque', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;
