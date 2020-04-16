// localStorage自定义模块
var storage = {
    setLocalStorage(key, value) {
        // localStorage不能存入数组,转成json字符串再存入
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorage(key) {
        // localStorage取出的数据格式化
        return JSON.parse(localStorage.getItem(key));
    },
    removeLocalStorage(key) {
        localStorage.removeItem(key);
    },
}
export default storage;