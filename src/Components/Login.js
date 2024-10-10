import { useRef, useState, useEffect } from "react";
import { checkvalidate } from "../utils/FormValidate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [msg, setMasg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.currentUser) {
      dispatch(removeUser);
    }
  }, [dispatch]);
  const handleLogin = () => {
    const mes = checkvalidate(
      email.current.value,
      password.current.value,
      name.current?.value
    );
    setMasg(mes);

    if (mes) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              console.error("User Not Valid", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMasg(errorCode + "--" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.codee;
          const errorMessage = error.message;
          setMasg(errorCode + "--" + errorMessage);
        });
    }
  };
  const handlesignUp = () => {
    setIsSignIn(!isSignIn);
    setMasg(null);
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };

  return (
    <div>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center">
        <img
          className="w-screen h-screen"
          src="https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg"
          alt="login"
        />
        <div className="absolute w-full md:w-4/12 p-6 bg-black bg-opacity-70 flex justify-center">
          <form
            className="px-4 py-4 m-4flex flex-col "
            onSubmit={(e) => e.preventDefault()}
          >
            <h1 className="text-white text-left text-2xl font-bold">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={name}
                className="text-gray-400  w-full p-2 my-2 bg-gray-600 border border-black"
                type="text"
                placeholder="Full Name"
              />
            )}

            <input
              ref={email}
              className="w-full p-2 my-2 bg-gray-600 text-white"
              type="text"
              placeholder="Email"
            />
            <input
              ref={password}
              className="w-full p-2 my-2 bg-gray-600 text-white"
              type="password"
              placeholder="Password"
            />
            <button
              className="w-full bg-green-500 p-2 my-2 text-gray-700 text-lg font-semibold"
              onClick={handleLogin}
            >
              {isSignIn ? "Login" : "Sign Up"}
            </button>
            <p className="text-red-400 text-lg">{msg}</p>
            <p
              className="text-white text-lg cursor-pointer hover:text-red-600"
              onClick={handlesignUp}
            >
              {isSignIn ? "NewUser?Sign Up" : "Already a User?Login"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
