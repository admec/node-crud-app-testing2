const express = require( "express" );
// const bodyparser = require( "body-parser" );
const cors = require( "cors" );

require( "./config/database" );
const hb = require( "./config/handlebars" )
const users = require( "./routes/users" )

const app = express();

//to get the data from form
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//set template engine
app.engine("hbs", hb);
app.set("view engine","hbs");

//make way for some custom css, js and images
app.use('/custom/css', express.static(__dirname + '/views/static/css'));
app.use('/custom/js', express.static(__dirname + '/views/static/js'));
app.use('/custom/imgs', express.static(__dirname + '/views/static/imgs'));

app.use(cors());

app.use("/users", users);

//Home route
app.get('/', (req, res) => {
    res.render('home');
});

module.exports = app;