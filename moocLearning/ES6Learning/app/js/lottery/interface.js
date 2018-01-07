// 接口模块
import $ from 'jquery';

class Interface{
    /** 
     * 获取遗漏号码的接口
     * @param {string} issue 
     */
    getOmit(issue){
        let self = this;
        // 发起异步请求
        return new Promise((resolve, reject)=>{
            $.ajax({
                url: '/get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        }); 
    }
    /**
     * 
     * @param {string} issue 
     */
    getOpenCode(issue){
        let self = this; 
        return new Promise((resolve, reject)=>{
            $.ajax({
                url: '/get/opencode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });
    }

    getState(issue){
        let self = this;
        return new Promise((resolve,reject)=>{
            $.ajax({
                url: '/get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    resolve.call(self, res);
                },
                error: function (err) {
                    reject.call(err);
                }
            })
        });
    }
}
export default Interface