import AdminMenu from '../adminMenu/AdminMenu';
import user from '../../../img/users.png'
import { FaAngleLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';
import { useState, useRef} from 'react';
import Dialog from "../menagerUser/Dialog";

const Admin = () => {
    const [admins, setAdmins] = useState([
        { adminID: 1, adminName:"Sompong", email: "sompong@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 2, adminName:"Anoupha", email: "anoupha@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 3, adminName:"Sengphachan",email: "sengphachan@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
        { adminID: 4, adminName:"Khammun", email: "khammun@gmail.com", phone: "02099887676", password: "******", confirmPassword: "******", images: [user] },
    ]);

    // Dialog delete
    const [dialog, setDialog] = useState({
        message:'',
        isLoading:false
    })
    const idadminRef = useRef();
    const handleDialog = (message, isLoading) => {
        setDialog({
            message,
            isLoading,
        })
    }

    // Get user ID
    const location = useLocation();
    const { id } = location.state || {};
    const [getId, setGetId] = useState(id);

    const filtereAdmin = admins.filter(
        (admin) => admin.adminID === getId
    );

    // Delete
    const handleDelete = (adminID) => {
        handleDialog('Are you sure you want to delete?',true);
        idadminRef.current = adminID;
    };

    const areUSuredelete = (choose) => {
        if(choose) {
            setAdmins(admins.filter((admin) => admin.adminID !== idadminRef.current));
            handleDialog("",false)
        }else{
            handleDialog("",false)
        }
    }

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
                                <div onDialog={areUSuredelete} className='del' onClick={() => handleDelete(admin.adminID)}>
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
            { dialog.isLoading && <Dialog onDialog={areUSuredelete} message={dialog.message}/>}
        </>
    )
}

export default Admin;