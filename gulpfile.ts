const tslint = require('gulp-tslint');

import * as gulp from 'gulp'
import * as tsc from 'gulp-typescript'
import * as jasmine from 'gulp-jasmine'
import * as sourcemaps from 'gulp-sourcemaps'
import * as clean from 'gulp-clean'
import * as babel from 'gulp-babel'
 
gulp.task('build', () => {
    return gulp.src('src/**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(tsc.createProject('tsconfig.json')())
            .pipe(babel({
                presets: [['@babel/env', {targets: {node: "current"}}]]
            }))
            .pipe(sourcemaps.write(null, null))
            .pipe(gulp.dest('dist'));
});

gulp.task('test', () => {
    return gulp.src('dist/*.spec.js')
            .pipe(jasmine({
                verbose:true
            }));
});

gulp.task("tslint", () => {
    return gulp.src('src/**/*.ts')
            .pipe(tslint({
                formatter: "verbose"
            }))
            .pipe(tslint.report());
});

gulp.task('sourcemaps', () => {
    return gulp.src('dist/*.js')
            .pipe(sourcemaps.init())
            .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist/*', {read: false})
            .pipe(clean());
});

gulp.task('babel', () => {
    return gulp.src('dist/*.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('clean', 'tslint', 'build'/*, 'test'*/));
