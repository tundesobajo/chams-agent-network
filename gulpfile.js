const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

const paths = {
  app: {
    src: ['app/'],
  },
  css: {
    vendor: [
      'node_modules/bootstrap/scss/bootstrap.scss',
      'node_modules/font-awesome/scss/font-awesome.scss',
    ],
    src: ['src/scss/**/*.scss'],
    dest: 'public/css/',
  },
  js: {
    vendor: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jquery-once/jquery.once.min.js',
      // 'node_modules/popper.js/dist/popper.min.*',
      'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    ],
    src: ['src/js/**/*.js'],
    dest: 'public/js/',
  },
  font: {
    vendor: ['node_modules/font-awesome/fonts/*'],
    src: [],
    dest: 'public/fonts/',
  },
  image: {
    vendor: [],
    src: ['src/images/*'],
    dest: 'public/images/',
  },
};

function delcss() {
  return del(paths.css.dest);
}
function deljs() {
  return del(paths.js.dest);
}
function delfont() {
  return del(paths.font.dest);
}

function clean() {
  return del([paths.css.dest, paths.js.dest, paths.font.dest]);
}

function css() {
  return gulp
    .src([].concat(paths.css.src))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src([].concat(paths.js.vendor, paths.js.src))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
}

function font() {
  return gulp.src([].concat(paths.font.vendor, paths.font.src)).pipe(gulp.dest(paths.font.dest));
}

function startNodemon(done) {
  const STARTUP_TIMEOUT = 5000;
  let starting = false;
  const onReady = () => {
    starting = false;
    done();
  };

  nodemon({
    script: './bin/www',
    watch: paths.app.src,
    env: { NODE_ENV: 'development' },
    // 'delay': "2500",
    ext: 'js,json,hbs',
    stdout: false, // without this line the stdout event won't fire
  })
    .on('start', () => {
      starting = true;
      setTimeout(onReady, STARTUP_TIMEOUT);
    })
    .on('stdout', stdout => {
      if (starting) onReady(); // Runs once
      process.stdout.write(stdout); // pass the stdout through
    })
    .on('restart', () => {
      browserSync.reload();
    });
  gulp.watch(paths.css.src, css);
}

function startBrowserSync(done) {
  browserSync.init(
    {
      proxy: 'http://localhost:3000',
      files: ['public/**/*.*', 'app/**/*.hbs'],
      browser: 'google chrome',
      port: 3001,
    },
    done,
  );
}

exports.css = gulp.series(delcss, css);
exports.js = gulp.series(deljs, js);
exports.font = gulp.series(delfont, font);
exports.clean = clean;
exports.nodemon = startNodemon;
exports.browsersync = startBrowserSync;
exports.build = gulp.series(clean, gulp.parallel(css, js, font));
exports.default = gulp.series(clean, gulp.parallel(css, js, font), startNodemon, startBrowserSync);
