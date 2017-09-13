//grab packages /variable we need
var express= require('express');
// creating an app by calling express();
var app = express();
var ig=require('instagram-node').instagram();
// tell noode where to look for the site resources.

app.use(express.static(__dirname+'/public'));
// set the view engine to ejs 
app.set('view engine','ejs');

//configure instagram app with your access token 
ig.use({access_token:'427113870.1677ed0.d1c00c04cc0942e7a274e346877e782e',});


//set the routes    
app.get('/',function(req,res){ 
    //calling data from instagram api
    ig.user_self_media_recent(function(err,medias,pagination,rmaining,limit){
        res.render('pages/index',{grams:medias,username:medias[0].user.username});
    });
   
});
app.listen(8080);
console.log("app Started look at localhost:8080");