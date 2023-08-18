const { task, src, dest } = require('gulp'),
    zip = require('gulp-zip');

task('default', () => src(['index.html', 'setlists/*'], { base: '.' }).pipe(zip('jerks.zip')).pipe(dest('dist')));
