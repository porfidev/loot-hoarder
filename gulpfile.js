/**
 * Created by elporfirio on 11/11/16.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
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

var jsfiles = [
    'public/modules/**/*.js'
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


gulp.task('check-js', function(){
   gulp.src(jsfiles)
       .pipe(jshint())
       .pipe(jshint.reporter('jshint-stylish', {
           verbose: true
       }));
});


gulp.task('inject', function () {
    var injectSrc = gulp.src([
        './public/styles/*.css',
        './public/modules/**/*.js'
    ], {read: false});

    var injectOptions = {
        ignorePath: '/public'
    };

   return gulp.src('./public/*.html')
       .pipe(inject(injectSrc, injectOptions))
       .pipe(gulp.dest('./public'));
});

gulp.task('server', function(){
   var options = {
       script: 'app.js',
       delayTime: 1,
       env: {
           'PORT': 3000
       },
       watch: jsfiles,
       exec: 'node --debug'
   };

    return nodemon(options)
        .on('restart', function(event){
            console.info('Reiniciando ...');
        });
});
