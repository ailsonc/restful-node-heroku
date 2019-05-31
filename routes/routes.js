const user = require('../models/user.js');

module.exports  = function(app) {
    app.route('/api')
       .get(user.get);
};