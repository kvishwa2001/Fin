import React, { useEffect, useState } from "react";

const PopupModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("visitedPopup");
        if (!hasVisited) {
            setShow(true);
        }
    }, []);

    const handleParent = () => {
        window.location.href = "https://finalty.in";
    };

    const handleThisSite = () => {
        setShow(false);
        sessionStorage.setItem("visitedPopup", "true");
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center border-2 border-primary">
                <h2 className="text-2xl font-bold mb-4 text-primary">Welcome!</h2>
                <p className="mb-6 text-base text-gray-700">Would you like to check our Finalty Fintech or Finalty Wealth?</p>
                <div className="flex flex-col gap-3">
                    <button className="btn btn-primary w-full" onClick={handleParent}>
                        Visit Finality 
                    </button>
                    <button className="btn btn-secondary w-full" onClick={handleThisSite}>
                        Continue Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;