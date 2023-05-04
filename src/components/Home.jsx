import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
       <h1>this is home {user && <span>{user.displayName}</span>}</h1>
    );
};

export default Home;