import './addAmin.css';
import AdminMenu from '../adminMenu/AdminMenu';
import { useState } from 'react';

const AddAdmin = () => {
    const [adminImage, setAdminImage] = useState([]);


    // handle image
    const handleAdminImage = (e) => {
        const file = e.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onloadend = () => {
            setAdminImage([file]);
          };

          reader.readAsDataURL(file);
        }
    };
    return(
        <>
            <AdminMenu/>
            <section id='addAmin'>
                <form>
                    <div className="addAdminForm">
                        <div className="add-box">
                            <label htmlFor="fname">First name</label>
                            <input
                                type="text"
                                id='fname'
                                placeholder='Fist name'
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="lname">Last name</label>
                            <input
                                type="text"
                                id='lname'
                                placeholder='last name'
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='email address'
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id='phone'
                                placeholder='Phone number'
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Password'
                                required
                            />
                        </div>
                    </div>
                    <div className="imageAdmin">
                        <div className='submit'>
                            <button type='submit'>Add</button>
                        </div>
                        <div className="image">
                            <input 
                                type="file"
                                id='adminImage'
                                onChange={handleAdminImage}
                            />
                            <label htmlFor="adminImage">
                            {(adminImage && adminImage.length > 0) ? <img src={URL.createObjectURL(adminImage[0])}/>:<p>choose image</p>}
                            </label>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default AddAdmin