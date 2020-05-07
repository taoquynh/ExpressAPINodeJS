const users = [
    {
        id: 1,
        name: 'Tao Quynh',
        email: 'taoquynh@gmail.com'
    },
    {
        id: 2, 
        name: 'Quynh Tao',
        email: 'quynhtao@gmail.com'
    }
]

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Success'
        })
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}

// Export the router
module.exports = router