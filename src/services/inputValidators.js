const isUserNameValid = (userName) => {
    const regex = /^[a-zA-Z0-9]*$/;

    return regex.test(userName);
};
const isPasswordValid = (userName) => {
    const regex = /^\S*$/;

    return regex.test(userName);
};

export {
    isUserNameValid,
    isPasswordValid,
};
