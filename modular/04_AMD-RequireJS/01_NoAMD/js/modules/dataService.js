(function (window) {
  let msg = 'atguigu.com'

  function getMsg() {
    return msg.toUpperCase()
  }

  window.dataService = {getMsg}
})(window)
