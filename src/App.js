import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";
import Forms from './Components/Forms/Forms';
import { Provider } from 'react-redux';
import store from './store/store';
import PrivateRoute from './Components/PrivateRoute';
import Database from './Components/Database/Database';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/forms" element={<PrivateRoute><Forms /></PrivateRoute>} />
                    <Route path="/db" element={<PrivateRoute><Database /></PrivateRoute>} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
