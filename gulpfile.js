/**
 * Created by elporfirio on 11/11/16.
 */
var gulp = require('gulp');
    //debug = require('gulp-debug');


var libs = [
    'node_modules/angular/angular.js'
];

gulp.task('compilelibs', function(){
    return gulp.src(libs)
        //.pipe(debug({verbose: true}))
        //.pipe(uglify())
        .pipe(gulp.dest('public/lib'));
});