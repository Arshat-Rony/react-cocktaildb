import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
import { SparklesIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className='header'>
            <nav>

                <h1>
                    <SparklesIcon className='icon'></SparklesIcon>
                    Spoon & Forks

                </h1>
                <div className="menu">
                    <li><CustomLink to='/home'>Home</CustomLink></li>
                    <li><CustomLink to='/about'>about</CustomLink></li>
                    <li><CustomLink to='/meals'>meals</CustomLink></li>
                    <li><CustomLink to='/contact'>contact</CustomLink></li>
                    <li><CustomLink to='/orders'>orders</CustomLink></li>
                </div>
            </nav>
        </div>
    );
};

export default Header;