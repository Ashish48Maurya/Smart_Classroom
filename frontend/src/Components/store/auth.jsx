import { createContext, useContext, useEffect, useState } from "react";
import { backend_api } from "./url";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [person, setPerson] = useState("Student");
    const [loggedUser, setcurrentUser] = useState('');
    const isLoggedIn = !!token;
    
    useEffect(() => {
        const ls = localStorage.getItem("USER");
        if (ls) {
            const parsedUser = JSON.parse(ls);
            setcurrentUser(parsedUser);
        } else {
            console.log("Please Login First");
        }
    }, []);


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("USER");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const authenticateUser = async () => {
            if (token) {
                await userAuthentication();
            }
        };

        authenticateUser();
    }, [token, person, userAuthentication]);


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
