import { FaArrowLeft } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import user from "../../img/user.png";
import "./chatroom.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Chatroom = () => {

    const[file, setFile] = useState();

    // Previw image before submit
    const handleFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setFile(reader.result);
        };

        if (file) {
          reader.readAsDataURL(file);
        }

    };

    return(
        <>
            <section id="chatroom">
                <div className="header">
                    <div className="header-box">
                        <Link to="/humascot-taca/chatuser"><FaArrowLeft/></Link>
                        <div className="user">
                            <span className="profile"><img src={user} alt="" /></span>
                            <span><p>name</p><p className="status">status</p></span></div>
                    </div>
                    <div className="header-box"><p className="dot-button">...</p></div>
                </div>
                <div className="user-chat">
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!ggggggggggggggggggggggggggllo
                            gggggggggggggggggggggggggglloggggggggggggggggggggggggggll
                            ogggggggggggggggggggggggggglloggggggggggggggggggggggggggllo
                            gggggggggggggggggggggggggglloggggggggggggggggggggggggggggggg!!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Hi!!</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Hi!!</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Hi!!</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Higgggggggggggggggggggggggggllo
                            gggggggggggggggggggggggggglloggggggggggggggggggggggggggll
                            ogggggggggggggggggggggggggglloggggggggggggggggggggggggggllo
                            gggggggggggggggggggggggggglloggggggggggggggggggggggggggggggg!!</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Hi!!</p></div>
                    </div>
                    <div className="sender">
                        <div className="profile"><img src={user} alt="" /></div>
                        <div className="message"><p>Hello!</p></div>
                    </div>
                    <div className="recipient">
                        <div className="message"><p>Hi!!</p></div>
                    </div>
                </div>

                {/* view image file */}
                { file && <div className="show-file"><span><img src={file} alt="" /></span></div>}
                
                <div className="send-bar">
                    <form>
                        <div className="file">
                            <input 
                                type="file"
                                id="file"
                                onChange={handleFile}
                            />
                            <label htmlFor="file">+</label>
                        </div>
                        <div className="message">
                            <input
                                type="text"
                                placeholder="type here ..."
                            />
                        </div>
                        <div className="send-button"><button type="submit"><IoIosSend/></button></div>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Chatroom;