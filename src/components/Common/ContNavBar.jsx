import {Link} from "react-router-dom";

const ContNavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-collapse justify-content-md-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/'} className="btn btn-dark">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/create'} className="btn btn-dark">Create user</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default ContNavBar;