// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var cors = require('cors')

// var app = express();

// app.use('/api/', indexRouter)
// app.use('/api/users', usersRouter)


// app.use(cors())

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.listen(5050, function (err) {
//   if (err) console.log(err);
//   console.log("Server listening on PORT", 5050);
// });

// module.exports = app;


const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cors = require('cors');
const app = express();

app.use(cors());


const buildPath = path.join(__dirname, 'dist');

// Serve all the files in the "dist" directory
app.use('', express.static(buildPath));


app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);



const port = process.env.PORT || 5050;
app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});

module.exports = app;
