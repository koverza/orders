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

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'User already exists' })
            };
        }

        users.push({ email, password });
        console.log('Registered users:', users);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User registered successfully' })
        };
    } catch (error) {
        console.error('Error in registration:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' })
        };
    }
};


