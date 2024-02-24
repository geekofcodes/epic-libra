// authService.js

const authService = {
    loginUser: async (email, password) => {
        try {
            // Perform API request to log in user
            const response = await fetch('/login', {
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
    },
    
    signupUser: async (name, email, password) => {
        try {
            // Perform API request to sign up user
            const response = await fetch('/signup', {
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
    },

    logoutUser: () => {
        // Remove user token or other stored information
        localStorage.removeItem('token');
    }
}


export default authService
