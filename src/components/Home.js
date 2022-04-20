import { Link } from 'react-router-dom'
const Home = () => {
    const getval = localStorage.getItem("formvalue");
    const newd = JSON.parse(getval)
    const getval2 = localStorage.getItem("output");
    const logout = () => {
        localStorage.clear();
        window.location.reload(false);
    }
    return (

        <div className='container'>
            <div className='d-flex justify-content-between py-4'>
                <div>
                    {
                        (!getval2) ?
                            <>
                                <h3>Hello user</h3></>:<h3>{newd.fname}</h3>
                    }
                </div>
                {
                    (!getval2) ?

                        <div className='d-flex gap-4'>
                            <Link className='btn bg-primary' style={{ width: "150px", color: "white" }} to="/Login">Login</Link>
                            <Link className='btn bg-primary' style={{ width: "150px", color: "white" }} to="/Registration">Register</Link>
                        </div>
                        :
                        <Link className='btn bg-primary' style={{ width: "150px", color: "white" }} to="/" onClick={logout}>Logout</Link>
                }
            </div>

        </div>

    )
}

export default Home