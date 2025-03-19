let users = global.users || [];
global.users = users;

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' })
        };
    }

    try {
        const { email, password } = JSON.parse(event.body);
        console.log('Attempting login for:', email);

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Login successful' })
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Invalid email or password' })
            };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    }
};
