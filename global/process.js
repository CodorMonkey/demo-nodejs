/**
 * Created on 2016/7/8.
 */
process.on('exit', function (code) {
    setTimeout(function () {
        console.log('此处永远无法执行');
    }, 0);
    console.log('process exit with code:' + code);
});

process.stdout.write('hello world\n');
process.argv.forEach(function (value, index, array) {
    console.log(index + ':' + value);
});

// node.exe执行文件的绝对路径
console.log(process.execPath);
// cpu架构，如：x64
console.log(process.arch);
// 进程id
console.log(process.pid);
// 平台信息，如：win32
console.log(process.platform);

console.log('当前目录：' + process.cwd());
console.log('node版本：' + process.version);
console.log(process.memoryUsage());

console.log('app end');