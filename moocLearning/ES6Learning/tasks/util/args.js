import yargs from 'yargs';

// 区分开发环境和线上环境
const args = yargs

    .option('production', {
        boolean: true,
        default: false, // 设置默认值
        describe: 'min all script' // 描述
    })
    //监听要不要自动编译
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    // 要不要详细的输出命令行输出的日志
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    // 资源映射
    .option('sourcemaps', { describe: 'force the creation of sourcemap' })
    // 设置端口
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    
    .argv // 命令行输入的内容以字符串作为解析

    export default args;