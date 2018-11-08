var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
//    res.send("this will be the landing page sooon!");
    res.render("landing");
});

app.get("/tours", function(req, res){
    var places = [
        // {name: "Houston Museum", image: "https://www.tripadvisor.com/Attraction_Review-g56003-d212138-Reviews-Houston_Museum_District-Houston_Texas.html"},
        {name: "Houston Museum", image: "https://media-cdn.tripadvisor.com/media/photo-f/0c/ac/64/54/mfa-facade.jpg"},
        {name: "NRG Stadium", image: "https://media-cdn.tripadvisor.com/media/photo-f/01/33/73/88/reliant-stadium.jpg"},
        {name: "Minute Miad Park", image: "https://media-cdn.tripadvisor.com/media/photo-f/01/04/89/5c/minute-maid-park-june.jpg"},
        {name: "Toyota Center", image: "https://media-cdn.tripadvisor.com/media/photo-f/01/41/e7/b0/nba-the-toyota-center.jpg"}
    ]
    res.render("tours", {places:places});
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});