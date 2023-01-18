import { useContext, useEffect } from "react";
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../context/Profile";

function Login() {
  const { setProfile, isLogin, setIsLogin, setSocial } =
    useContext(ProfileContext);
  let navigate = useNavigate();

  const handleLogin = () => {
    if (isLogin) {
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    handleLogin();
  }, [!isLogin]);

  return (
    <div className="container">
      <div className="social-buttons">
        <LoginSocialGoogle
          client_id="102350549936-sd4802n9e1o7foabsn3iab3ookpkm3fo.apps.googleusercontent.com"
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ data }) => {
            console.log(data);
            setProfile(data);
            setSocial("Google");
            setIsLogin(true);
          }}
          onReject={(err) => console.log(err)}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        <LoginSocialFacebook
          appId="847143323029920"
          onResolve={({ data }) => {
            console.log(data);
            setProfile(data);
            setSocial("Facebook");
            setIsLogin(true);
          }}
          onReject={(err) => console.log(err)}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default Login;
