// authService.js
const loginUser = async (email, password) => {
    try {
        // Perform API request to log in user
        const response = await fetch('http://your-api-url/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        // Store user token or other necessary information
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

const signupUser = async (name, email, password) => {
    try {
        // Perform API request to sign up user
        const response = await fetch('http://your-api-url/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Signup failed');
        }
        // Store user token or other necessary information
        localStorage.setItem('token', data.token);
        return data;
    } catch (error) {
        throw error;
    }
};

const logoutUser = () => {
    // Remove user token or other stored information
    localStorage.removeItem('token');
};

export { loginUser, signupUser, logoutUser };
