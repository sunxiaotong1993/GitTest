/**
 * Created by XiaoTong on 2017/8/6.
 */

function handleError(message,error) {
    if (error) {
        console.log(message + '失败');
        console.log(error);
        return false
    } else {
        console.log(message + '成功');
        return true

    }
}

//如果想直接用的话:
// module.exports = handleError