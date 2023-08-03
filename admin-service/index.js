const express = require ('express');
const app = express();
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api/admin', adminRoutes)

const port = 3004;
app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`);
});