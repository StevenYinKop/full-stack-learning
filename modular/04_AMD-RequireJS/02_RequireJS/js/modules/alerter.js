/*
 定义有依赖的模块
 */
define(['dataService', 'jquery'], function (dataService, $) {
  let name = 'Tom2'

  function showMsg() {
    $('body').css('background', 'gray')
    alert(dataService.getMsg() + ', ' + name)
  }

  return {showMsg}
})