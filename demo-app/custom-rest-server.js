const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ASD2738ASDASD';

const server = jsonServer.create();
server.use(bodyParser.json());

const filename = path.join(__dirname, 'data', 'customers.json');

// middleware for all incoming requests to handle CORS
server.use((req, resp, next) => {
    resp.set('Access-Control-Allow-Origin', '*');
    resp.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    resp.set('Access-Control-Allow-Headers', 'Content-Type,Accept,Authorization');
    next();
});

// a handler function for POST requests for the url '/customers'
server.options('/*', (req, resp) => {
    resp.end();
});

server.post('/customers', (req, resp) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            data = '[]';
        }
        data = JSON.parse(data);
        let maxId = data.reduce((acc, cust) => acc > cust.id ? acc : cust.id, 0);
        req.body['id'] = maxId + 1;
        data.push({ ...req.body });

        fs.writeFile(filename, JSON.stringify(data), 'utf-8', (err, doc) => {
            if (err) throw err;

            let { id, name } = req.body;
            let token = jwt.sign({ id, name }, SECRET_KEY);
            resp.json({ id, name, token });
        });
    });
});

const verifyUser = (email, password) => {
    data = fs.readFileSync(filename, 'utf-8'); // TODO: check for existence of file
    data = JSON.parse(data);
    const index = data.findIndex(c => c.email === email && c.password === password);

    if (index === -1) {
        return false;
    }
    else {
        return data[index];
    }
}


server.post('/login', (req, resp) => {
    let { email, password } = req.body;
    let user = verifyUser(email, password);

    if (user) {
        let { id, name } = user;
        let token = jwt.sign({ id, name }, SECRET_KEY);
        resp.json({ id, name, token });
        return;
    }
    resp.status(401).json('Invalid email/password');
});

server.post('/orders', (req, resp, next) => {
    let auth = req.headers.authorization;
    if (!auth) {
        resp.status(401).json('Authorization header is missing');
        return;
    }

    let [bearer, token] = auth.split(' ');
    if (bearer && bearer === 'Bearer') {
        try {
            let user = jwt.verify(token, SECRET_KEY);
            req.body.customerId = user.id;
            next();
        }
        catch (e) {
            resp.status(403).json('Authorization token is not valid');
            return;
        }
    }
    else {
        resp.status(403).json('Authorization token is not valid');
        return;
    }
});


const router = jsonServer.router('./db/data.json');
server.use(router);

const port = 4000;
server.listen(port, () => {
    console.log('REST Endpoint started at port ' + port);
});