import { GoogleLogout } from 'react-google-login'
const clientId = "130876132345-i2vshcum1jogj249d9hu9bua01co7mr6.apps.googleusercontent.com"

const Logout = () => {

    const onSuccess = () => {
        console.log("log out successfull!");
      }
    return (
        <div >
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
};

export default Logout;