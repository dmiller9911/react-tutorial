var gulp = require("gulp");
var babel = require("gulp-babel");
var webpack = require("gulp-webpack");
var nodemon = require("gulp-nodemon");

gulp.task("default", function () {
  return gulp.src("src/tutorial.js")
    .pipe(babel())
//    .pipe(webpack())
    .pipe(gulp.dest(".tmp"));
});

gulp.task('webpack', function () {
    return gulp.src('src/entry.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'));
});


gulp.task('develop', ['webpack'], function () {
  nodemon({ script: 'server.js'
          , ext: 'html js'
          , ignore: ['public/']
          , tasks: ['webpack'] })
      .on('restart', function () {
      console.log('restarted!')
  })
});
