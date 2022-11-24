import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li><Link to="/signin">signIn</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100"><font></font>
                <div className="navbar-start"><font></font>
                    <div className="dropdown"><font></font>
                        <label tabIndex={0} className="btn btn-ghost lg:hidden"><font></font>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg><font></font>
                        </label><font></font>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
                            {menu}
                        </ul><font></font>
                    </div><font></font>
                    <Link className="btn btn-ghost normal-case text-xl">Camsec</Link><font></font>
                </div><font></font>
                <div className="navbar-center hidden lg:flex"><font></font>
                    <ul className="menu menu-horizontal p-0"><font></font>
                        {menu}
                    </ul><font></font>
                </div><font></font>

            </div>
        </div>
    );
};

export default Navbar;