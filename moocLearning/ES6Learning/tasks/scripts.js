import gulp from 'gulp';
import gulpif from 'gulp-if'; // gulp语句中做if判断
import concat from 'gulp-concat'; // gulp处理文件拼接
import webpack from 'webpack'; // 打包
import gulpWebpack from 'webpack-stream'; // 处理文件流
import named from 'vinyl-named'; // 对文件重命名的标志
import livereload from 'gulp-livereload'; // 热更新
import plumber from 'gulp-plumber'; // 处理文件信息流
import rename from 'gulp-rename'; // 处理文件重命名
import uglify from 'gulp-uglify'; // 处理js和css压缩
import {log, colors} from 'gulp-util'; // 在命令行工具输出的工具包
import args from './util/args'; // 对命令行参数进行解析

gulp.task('scripts', ()=>{
    return gulp.src(['app/js/index.js'])
    .pipe(plumber({
        errorHandle:function(){

        }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        module:{
            loaders: [{
                test:/\.js$/,
                loader: 'babel-loader'
            }]
        }
    }),null,(err,stats)=>{
        log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
            chunks:false
        }))
    })
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
        basename: 'cp',
        extname: '.min.js'
    }))
    .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
    .pipe(gulp.dest('server/public/js'))
    .pipe(gulpif(args.watch, livereload()))
})