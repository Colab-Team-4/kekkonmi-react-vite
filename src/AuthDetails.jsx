import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeUsernameDisplay } from "./redux/displayUsername";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [userEmailDisplay, setUserEmailDisplay] = useState("");
  const [isWelcomeModalOpen, setIsWelcomModalOpen] = useState(false);
  const { nameOfUser } = useSelector((state) => state.usernameIsDisplayed);
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsWelcomModalOpen(true);
        console.log(user);
        const usernameDisplay = user.email.replace(/@.*$/, "");
        setUserEmailDisplay(usernameDisplay);
        dispatch(changeUsernameDisplay(usernameDisplay));
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return <></>;
}

export default AuthDetails;
