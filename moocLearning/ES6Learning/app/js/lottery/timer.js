// 定时器模块
class Timer{
    /**
     * 
     * @param {截止时间} end 
     * @param {时间更新的回调} update 
     * @param {倒计时结束之后的回调} handle 
     */
    countdown(end, update, handle){
        const now = new Date().getTime(); // 拿到当前时间
        const self = this; // 获取当前对象的指针
        if(now-end) { //如果当前时间大于截止时间, 说明倒计时已经结束了
            handle.call(this); // 执行倒计时结束的回调
        } else {
            let last_time = end-now; // 判断当前时间距离截止时间的剩余时间
            const px_d = 1000*60*60*24; // 一天的毫秒值
            const px_h = 1000*60*60; // 一小时的毫秒值
            const px_m = 1000*60; // 一分的毫秒值
            const px_s = 1000; // 一秒的毫秒值
            // 剩余时间包含多少天
            let d = Math.floor(last_time/px_d); 
            let h = Math.floor((last_time-d*px_d)/px_h);
            let m = Math.floor((last_time-d*px_d-h*px_h)/px_m);
            let s = Math.floor((last_time-d*px_d-h*px_h-m*px_m)/px_s);
            let r=[];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }
            if(r.length || h>0) {
                r.push(`<em>${h}</em>时`);
            }
            if(r.length || m>0) {
                r.push(`<em>${m}</em>分`);
            }
            if(r.length || s>0) {
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time=r.join('');
            update.call(self, r.join(''));
            setTimeout(() => {
                self.countdown(end,update,handle);
            }, 1000);
        }
    }
}

export default Timer;