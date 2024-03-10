import { createContext, useContext, useEffect, useState } from "react";
import { backend_api } from "./url";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [person, setPerson] = useState("Student");
    const [loggedUser, setcurrentUser] = useState('');
    const isLoggedIn = !!token;
    const ls = localStorage.getItem("USER");

    if (ls) {
        const parsedUser = JSON.parse(ls);
        const currentUser = parsedUser.user;
        setcurrentUser(currentUser);
    } else {
        console.log('Please login first');
    }

    

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("USER");
    }

    const userAuthentication = async () => {
        let response;
        try {
            response = await fetch(`${backend_api}/${loggedUser}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
            });

            if (response.status !== 200) {
                console.error("Server returned an error:", response.status, response.statusText);
                // You might want to throw an error or handle it in some way
            }

            const data = await response.json();

            if (data.msg) {
                localStorage.setItem("USER", JSON.stringify(data.msg));
            } else {
                console.error("Unexpected API response format:", data);
            }
        } catch (error) {
            console.error("Error during user authentication:", error);
        }
    };


    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token, person]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, token, setPerson, person, backend_api, loggedUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
