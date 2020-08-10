import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Link to="/">
                    <HomeIcon />
                </Link>
            </div>
        )
    }
}

export default Header;