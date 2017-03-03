exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://admin:admin@ds143539.mlab.com:43539/node-blog-app-mongoose-challenge';
exports.PORT = process.env.PORT || 8080;