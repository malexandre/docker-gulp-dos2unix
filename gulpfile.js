/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('dos2unix', function () {
    return gulp.src(['/code/**/*'])
        .pipe(shell(['dos2unix <%= file.path %>']));
})

gulp.task('watch', function() {
    gulp.watch('/code/**/*', ['dos2unix'])
});

gulp.task('default', ['dos2unix', 'watch']);
