import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState} from 'react';

const Admin = () => {
    const [admins, setAdmins] = useState([
        { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);


    // Get user ID
    const location = useLocation();
    const { id } = location.state || {};
    const [getId, setGetId] = useState(id);

    const filtereAdmin = admins.filter(
        (admin) => admin.adminID === getId
    );


    // Delete Admins
    const [deleteAdminId, setDeleteAdminId] = useState(null);
    const [isConfirmationPopupOpen, setConfirmationPopupOpen] = useState(false);

    const openConfirmationPopup = (adminID) => {
        setDeleteAdminId(adminID);
        setConfirmationPopupOpen(true);
    };

    const closeConfirmationPopup = () => {
        setDeleteAdminId(null);
        setConfirmationPopupOpen(false);
    };
    const deleteAdmin = () => {
        if (deleteAdminId !== null) {
          // Filter out the product with the specified ID
          const updatedAdmins = admins.filter(
            (admin) => admin.adminID !== deleteAdminId
          );
    
          // Update the state with the new array of products
          setAdmins(updatedAdmins);
    
          // Close the confirmation popup after deleting
          closeConfirmationPopup();
        }
    };

    // Update
    const navigate = useNavigate();
    // send ID of admin
    const [sendAdminId, setSendAdminId] = useState();
    const handleUpdate = (sendAdminId) => {
        setSendAdminId(sendAdminId);
        navigate("/addadmin/", { state: { sendAdminId: sendAdminId } });
    };

    return(
        <>
            <AdminMenu/>
            <section id='user'>
                <div className="back">
                    <Link to="/admins/" className='link-back'>
                        <FaAngleLeft/>
                        Back
                    </Link>
                    <div>
                        Admin
                    </div>
                </div>
                {filtereAdmin.map((admin) => (
                    <div className="userInfo" key={admin.adminID}>
                        <div className="info">
                            <div>User ID: {admin.adminID}</div>
                            <div>User Name: {admin.adminName}</div>
                            <div>User Email: {admin.email}</div>
                            <div>User Phone number: {admin.phone}</div>
                            <div>Password: {admin.password}</div>
                            <div>Password: {admin.confirmPassword}</div>
                            <div className='del-update'>
                                <div className='del' onClick={() => openConfirmationPopup(admin.adminID)}>
                                    <AiOutlineDelete/>
                                </div>
                                <div className='update upd' onClick={() => handleUpdate(admin.adminID)}>
                                    <MdOutlineEdit/>
                                </div>
                            </div>
                        </div>
                        <div className="img">
                            <img src={admin.images} alt="image" />
                        </div>
                    </div>
                ))}
                
            </section>
            {isConfirmationPopupOpen && (
              <div className="confirmation-popup">
                <p>Are you sure you want to delete?</p>
                <div className="btn_ok_on">
                  <button onClick={deleteAdmin} className="btn_yes">
                    Yes
                  </button>
                  <button onClick={closeConfirmationPopup} className="btn_on">
                    No
                  </button>
                </div>
              </div>
            )}
        </>
    )
}

export default Admin;