import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

function AuthDetails() {
  const [authUser, setAuthUser] = useState(null);
  const [userEmailDisplay, setUserEmailDisplay] = useState("");
  const [isWelcomeModalOpen, setIsWelcomModalOpen] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        setIsWelcomModalOpen(true);
        const usernameDisplay = user.email.replace(/@.*$/, "");
        setUserEmailDisplay(usernameDisplay);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <div>
      {isWelcomeModalOpen ? (
        <div className="fixed top-20 h-16 w-full bg-[#AD6E7A] text-center">
          <div className="flex h-full items-center justify-center">
            {authUser ? (
              <p className="text-white font-lato">Signed In! Welcome {userEmailDisplay}</p>
            ) : (
              <p>Signed Out</p>
            )}
          </div>
          <div className="absolute right-5 top-5 cursor-pointer font-semibold" onClick={() => setIsWelcomModalOpen(false)}>
            X
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AuthDetails;
