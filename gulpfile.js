﻿//
// Voraussetzungen
// - npm install gulp -g
// - devDependencies in package.json eintragen
// - npm install
//
var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concatCss = require("gulp-concat-css");

var config = {
    scriptsPath: "./lib/",
    cssPath: "./css/",
    depsFiles: [
            "./node_modules/systemjs/dist/system.src.js",
            "./node_modules/jquery/dist/jquery.js"
    ],
    cssFiles: [
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]
};

// Bundle js and css
gulp.task('bundle', ['bundle:js', 'bundle:css']);

// Bundle js files
gulp.task('bundle:js', function () {
    return gulp.src(config.depsFiles)
      .pipe(concat("deps.js"))
      .pipe(gulp.dest(config.scriptsPath))
      .pipe(rename("deps.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest(config.scriptsPath));
});

// Bundle css files
gulp.task('bundle:css', function () {
    return gulp.src(config.cssFiles)
      .pipe(concatCss("styles.css"))
      .pipe(gulp.dest(config.cssPath));
});

// Clean up copied scripts and generated js files
gulp.task("clean", function () {
    return del([
      config.scriptsPath,
      config.cssPath
    ]);
});

// The default task (called when you run `gulp` from cli)
gulp.task("default", ["bundle"]);

