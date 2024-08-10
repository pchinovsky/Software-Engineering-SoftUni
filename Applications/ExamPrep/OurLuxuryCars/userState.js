
export const get = () => {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : false;
};

export const set = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
};

export const auth = () => {
    return !!localStorage.getItem('userData');
};

export const id = () => {
    const data = localStorage.getItem('userData');
    if (data) {
        return JSON.parse(data)._id;
    }
    return false;
};

