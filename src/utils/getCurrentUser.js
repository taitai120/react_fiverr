const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("currentUser")).data;
};

export default getCurrentUser;
