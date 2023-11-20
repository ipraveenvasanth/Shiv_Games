
const apiUrl = 'https://testapi.theshivgames.com/api/';

export const handleLogin = async (email, password) => {

    try {
        const response = await fetch(apiUrl + "login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Login failed. Please try again.');
    }
};


export const handleRegister = async (name, email, password, confirmPassword) => {

    try {
        const response = await fetch(apiUrl + "register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                confirmpassword: confirmPassword
            }),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Registration failed. Please try again.');
    }
};

