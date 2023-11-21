import './user.css';
import AdminMenu from '../adminMenu/AdminMenu';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const User = () => {
    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/users/" className='link-back'>
                        <FaAngleLeft id='icon_back_user'/>
                        Back
                    </Link>
                    <div>
                        User
                    </div>
                </div>
                <div className="userInfo">
                    <div className="info">
                       <div>User ID: </div>
                       <div>User Name: </div>
                       <div>User Email: </div>
                       <div>User Phone number: </div>
                       <div>Password: </div>
                       <div>Password: </div>
                       <div className='del' >
                           <AiOutlineDelete/>
                       </div>
                    </div>
                    <div className="img">
                       <img src='' alt="image" />
                    </div>
                </div>
            </section>

            {/* <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                    <button  className="btn_yes">
                      Yes
                    </button>
                    <button  className="btn_on">
                      No
                    </button>
                </div>
            </div> */}
        </>
    )
}

export default User;