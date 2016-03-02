var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var cleancss = new LessPluginCleanCSS({ advanced: true });
var autoprefix = new LessPluginAutoPrefix({ browsers: ['> 1%', 'last 2 versions', 'ie 10'] });

var input = './src/flex-layout.less';
var output = './dist';

gulp.task('default', function () {
    gulp.watch('./src/**.less', ['compile']);
});

gulp.task('compile', function () {
    gulp.src(input)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest(output));
});

gulp.task('build', function () {
    gulp.src(input)
        .pipe(less({
            plugins: [autoprefix, cleancss]
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(output));
});