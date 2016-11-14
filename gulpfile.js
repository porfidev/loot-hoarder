/**
 * Created by elporfirio on 11/11/16.
 */
var gulp = require('gulp');
    //debug = require('gulp-debug');


var libs = [
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-router/release/angular-ui-router.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'
];

var fonts = [
    'node_modules/bootstrap/dist/fonts/*.*'
];

var css = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.css'
];

gulp.task('compile-libs', function(){
    return gulp.src(libs)
        //.pipe(debug({verbose: true}))
        //.pipe(uglify())
        .pipe(gulp.dest('public/lib'));
});

gulp.task('compile-fonts', function(){
    return gulp.src(fonts)
    //.pipe(debug({verbose: true}))
    //.pipe(uglify())
        .pipe(gulp.dest('public/fonts'));
});

gulp.task('compile-styles', function(){
    return gulp.src(css)
    //.pipe(debug({verbose: true}))
    //.pipe(uglify())
        .pipe(gulp.dest('public/css'));
});

