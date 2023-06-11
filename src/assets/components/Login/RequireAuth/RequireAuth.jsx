import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";
import Loading from "../../Loading/Loading";

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (error) {
        toast.error("Error occured!");
    }
    if (loading) {
        return (
            <div className="mt-52">
                <Loading />
            </div>
        );
    }
    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }
    return children;
};

export default RequireAuth;
