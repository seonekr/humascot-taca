import './addAmin.css';
import AdminMenu from '../adminMenu/AdminMenu';
import { useState } from 'react';

const AddAdmin = () => {
    const [adminImage, setAdminImage] = useState([]);
    const [adminFirstName, setAdminFirstName] = useState('');
    const [adminLastName, setAdminLastName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPhone, setAdminPhone] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('From Data:', {
            'First name:': adminFirstName,
            'Last name:': adminLastName,
            'Email:': adminEmail,
            'Phone:': adminPhone,
            'Password:': adminPassword,
            'image:': adminImage
        })
        setAdminImage([]);
        setAdminFirstName('');
        setAdminLastName('');
        setAdminEmail('');
        setAdminPhone('');
        setAdminPassword('');
    }

    // handle add admin
    // handle first name
    const handleFirstName = (e) => {
        const value = e.target.value;
        setAdminFirstName(value); 
    }
    // handle last name
    const handleLastName = (e) => {
        const value = e.target.value;
        setAdminLastName(value); 
    }
    // handle email address
    const handleEmail = (e) => {
        const value = e.target.value;
        setAdminEmail(value); 
    }
    // handle phone number
    const handlePhone = (e) => {
        const value = e.target.value;
        setAdminPhone(value); 
    }
    // handle password
    const handlePassowrd = (e) => {
        const value = e.target.value;
        setAdminPassword(value); 
    }


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
                <form onSubmit={handleSubmit}>
                    <div className="addAdminForm">
                        <div className="add-box">
                            <label htmlFor="fname">First name</label>
                            <input
                                type="text"
                                id='fname'
                                placeholder='Fist name'
                                value={adminFirstName}
                                onChange={handleFirstName}
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="lname">Last name</label>
                            <input
                                type="text"
                                id='lname'
                                placeholder='last name'
                                value={adminLastName}
                                onChange={handleLastName}
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id='email'
                                placeholder='email address'
                                value={adminEmail}
                                onChange={handleEmail}
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id='phone'
                                placeholder='Phone number'
                                value={adminPhone}
                                onChange={handlePhone}
                                required
                            />
                        </div>
                        <div className="add-box">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id='password'
                                placeholder='Password'
                                value={adminPassword}
                                onChange={handlePassowrd}
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