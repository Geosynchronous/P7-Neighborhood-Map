// Playing with GULP...
// https://github.com/udacity/fend-office-hours/tree/master/Front%20End%20Tools/Gulp


var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/min'));
});

gulp.task('default', ['scripts']);


// var gulp = require('gulp');

// gulp.task('default', ['hello', 'robot', 'ninja']);

// gulp.task('hello', function(){
//     console.log('Hello World!')
// });

// gulp.task('robot', function(){
//     console.log('I AM A ROBOT');
// });

// gulp.task('ninja', function(){
//     console.log('I AM A GULP NINJA!!!');
// });