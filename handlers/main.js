exports.home = function(req, res){
    res.render('home' );
};

exports.newsletter = function(req,res){
    res. render('newsletter' , { csrf: 'CSRF token goes here' });
};
