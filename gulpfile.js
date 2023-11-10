const { task, src, dest } = require('gulp'),
    zip = require('gulp-zip');

task('default', () => src('./dist/**/*').pipe(zip('jerks.zip')).pipe(dest('dist')));
