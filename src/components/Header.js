import React from 'react';
import { Link } from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
            {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                Noote
            </div>
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>HOME</MenuItem>
                <MenuItem to={'/account'} active={router.isActive('/account')}>Account</MenuItem>
                <MenuItem to={'/view'} active={router.isActive('/view')}>View</MenuItem>
                <MenuItem to={'/setting'} active={router.isActive('/setting')}>Setting</MenuItem>
                <MenuItem to={'/'} active={router.isActive('/exit')}>Exit</MenuItem>
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: React.PropTypes.object
}

export default Header;
