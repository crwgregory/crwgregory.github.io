'use strict'

import gulp from 'gulp'

var libraries = [
  './bower_components/jquery/dist/jquery.min.js',
  './bower_components/uikit/css/uikit.min.css',
  './bower_components/uikit/js/uikit.min.js',
  './bower_components/particles.js/particles.min.js'
]

gulp.task('build', ['lib'])

gulp.task('lib', function () {
  gulp.src(libraries)
    .pipe(gulp.dest('./static'))
})
