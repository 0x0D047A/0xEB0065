const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

module.exports.build = () => gulp.src("src/**/*.ts")
  .pipe(tsProject())
  .js.pipe(gulp.dest("build"));