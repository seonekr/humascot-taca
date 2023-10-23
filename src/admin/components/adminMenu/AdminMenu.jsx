import './adminMenu.css'
import { IoDocumentText, IoSettingsOutline, IoLogOutOutline, IoSearchOutline } from "react-icons/io5";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineSell } from "react-icons/md";
import cart from '../../../img/cart.png';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    return(
        <>
            <section id="dashboard">
                <div className="left">
                    <Link to="/humascot-taca/admin">
                        <div className='logo'><span><img src={cart} alt="" /></span></div>
                    </Link>
                    <div className="menu">
                        <Link to="/humascot-taca/admin" className='link'><RxDashboard/><p>Dashboard</p></Link>
                        <Link to="/humascot-taca/admin/post" className='link'><IoDocumentText/><p>Products</p></Link>
                        <Link to="/humascot-taca/admin/gallery" className='link'><MdOutlineSell/><p>Orders</p></Link>
                        <Link to="/humascot-taca/admin" className='link'><BiUser/><p>User</p></Link>
                        <Link to="/humascot-taca/admin/addadmin" className='link'><LiaUserCogSolid/><p>Admin</p></Link>
                        <Link to="/humascot-taca/admin/message" className='link'><BiMessageDetail/><p>Message</p></Link>
                        <Link to="/humascot-taca/admin" className='link'><IoSettingsOutline/><p>Setting</p></Link>
                        <Link to="/humascot-taca/admin" className='link'><IoLogOutOutline/><p>Log Out</p></Link>
                    </div>
                </div>
                <div className="right">
                    <form className="search">
                        <div>dashboard</div>
                        <div className='search-box'>
                            <input type="text" placeholder='search ...'/>
                            <button type='submit'><IoSearchOutline/></button>
                        </div>
                        <div>prof</div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AdminMenu