import './adminMenu.css'
import { IoDocumentText, IoSettingsOutline, IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import cart from '../../../img/cart.png';
import adminProfile from '../../../img/adminProfile.png';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <section id="dashboard">
                <div className="container_boxD">
                    <div className="left">
                        <Link to="/humascot-taca/admin">
                            <div className='logo'><span><img src={cart} alt="" /></span></div>
                        </Link>
                        <div className="menu">
                            <Link to="/humascot-taca/admin" className='link'><RxDashboard className='link_iconn'/><p>Dashboard</p></Link>
                            <Link to="/humascot-taca/admin/post" className='link'><IoDocumentText className='link_iconn'/><p>Products</p></Link>
                            <Link to="/humascot-taca/admin/gallery" className='link'><MdOutlineSell className='link_iconn'/><p>Orders</p></Link>
                            <Link to="/humascot-taca/admin" className='link'><BiUser className='link_iconn'/><p>User</p></Link>
                            <Link to="/humascot-taca/admin/addadmin" className='link'><LiaUserCogSolid className='link_iconn'/><p>Admin</p></Link>
                            <Link to="/humascot-taca/admin" className='link'><BiMessageDetail className='link_iconn'/><p>Message</p></Link>
                            <Link to="/humascot-taca/admin" className='link'><IoSettingsOutline className='link_iconn'/><p>Setting</p></Link>
                            <Link to="/humascot-taca/admin" className='link'><IoLogOutOutline className='link_iconn'/><p>Log Out</p></Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className='titleNname'><h1>Dashboard</h1></div>
                        <div className='search-box'>
                            <input type="text" placeholder='Search ...' />
                            <button type='submit'><IoSearchOutline /></button>
                        </div>
                        <div>
                            <div className='target-graph'><img src={adminProfile} alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminMenu