const gulp = require('gulp')
const ftp = require('vinyl-ftp')
const fancyLog = require('fancy-log')

gulp.task('ftp', () => {
    const ftpConfig = {
        host: 'gulp.gulp.jp',
        user: 'gulp',
        password: 'gulp',
        log: fancyLog
    }

    const connect = ftp.create(ftpConfig)

    const ftpUploadFiles = './dist/**/*'
    const remoteDistDir = 'public_html'

    return gulp.src(ftpUploadFiles)
        .pipe(connect.dest(remoteDistDir))
})