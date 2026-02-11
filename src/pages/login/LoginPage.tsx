// third-party libararied
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

// Assets
import Logo from "../../assets/ds-logo.svg?react";
import GoogleIcon from "../../assets/google.svg?react";
import UserIcon from "../../assets/users.png";
import { setLoading, setUser } from "../../store/slices/auth/authSlice";

// Redux related imports
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleGoogleLogin = async () => {
    try {
      dispatch(setLoading(true));

      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGuestLogin = () => {
    dispatch(
      setUser({
        uid: "guest-123",
        email: null,
        displayName: "Guest User",
        photoURL: null,
      }),
    );

    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_#18403D_0%,_transparent_55%),radial-gradient(ellipse_at_center,_#14312F_0%,_transparent_60%)]">
      <div className="bg-[#11191a] p-10 rounded-3xl w-96 text-center shadow-2xl border border-white/5">
        <div className="flex justify-center mb-6">
          <Logo className="w-32" />
        </div>

        <h2 className="text-2xl text-white font-semibold mb-8">Welcome Back</h2>

        <button
          onClick={handleGoogleLogin}
          className="
            w-full py-3 mb-4 rounded-full cursor-pointer
            bg-white text-black
            flex items-center justify-center gap-3
            font-medium
            hover:opacity-90 transition
          "
        >
          <GoogleIcon className="w-5 h-5" />
          Login with Google
        </button>

        <button
          onClick={handleGuestLogin}
          className="
            w-full py-3 rounded-full cursor-pointer
            border border-[#2EF2C5]
            text-[#2EF2C5]
            flex items-center justify-center gap-3
            font-medium
            hover:bg-[rgba(46,242,197,0.1)]
            transition
          "
        >
          <img src={UserIcon} alt="guest" className="w-5 />
          Continue as Guest
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
