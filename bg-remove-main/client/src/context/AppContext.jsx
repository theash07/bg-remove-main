import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();

    const [image, setImage] = useState(false);
    const [resultImage, setResultImage] = useState(false);
    const [credit, setCredit] = useState(false);

    const { getToken } = useAuth();
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    console.log("Backend URL:", backendUrl);

    const loadCreditsData = async () => {
        try {
            const token = await getToken();

            const res = await axios.get(
                `${backendUrl}/api/user/credits`,
                {
                    headers: { token }
                }
            );

            if (res.data.success) {
                setCredit(res.data.credits);
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const removeBG = async (image) => {
        try {

            if (!isSignedIn) {
                return openSignIn();
            }

            setImage(image);
            setResultImage(false);

            navigate("/result");

            const token = await getToken();

            const formData = new FormData();
            formData.append("image", image);

            const { data } = await axios.post(
                `${backendUrl}/api/image/remove-bg`,
                formData,
                {
                    headers: { token }
                }
            );

            if (data.success) {
                setResultImage(data.resultImage);

                if (data.creditBalance !== undefined) {
                    setCredit(data.creditBalance);
                }

            } else {

                toast.error(data.message);

                if (data.creditBalance !== undefined) {
                    setCredit(data.creditBalance);
                }

                if (data.creditBalance === 0) {
                    navigate("/buy");
                }
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const value = {
        image,
        setImage,
        resultImage,
        setResultImage,
        credit,
        backendUrl,
        loadCreditsData,
        removeBG
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;