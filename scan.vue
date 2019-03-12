<template lang='pug'>
    <canvas class="pdf-viewer-canvas" id="myCanvas"></canvas>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import pdfjs from "pdfjs-dist";
import {
    namespace
} from 'vuex-class';
const homeModule = namespace('home');

//组件引用，mixins，filters 等放在 @Component 里面
@Component
export default class Scan extends Vue {
    //公共缩放比例
    @Prop() scale: any;
    _scale: number = 1;
    //获取路径
    @homeModule.Getter('targetUrl') url: any;
    //所有标注
    @homeModule.Getter('marks') marks: any;
    @homeModule.Getter('headMarks') headMarks: any;

    //监听缩放
    @Watch('scale')
    onScaleChange(val: number, oldVal: number) {
        this.renderScan();
    }
    //监听url
    @Watch('url')
    onUrlChange(val: number, oldVal: number) {
        this.renderScan(true);
    }

    //画图方法
    draw(fn: Function) {
        let canvas: any = document.getElementById('myCanvas');
        let ctx = canvas.getContext("2d");
        fn(canvas, ctx);
    }
    //渲染pdf
    // renderPDF() {
    //     this.draw((canvas: any, ctx: any) => {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height);
    //         canvas.style.border = '1px solid #E5E1E1';
    //         //这里放一个loadding
    //         let loadingTask = pdfjs.getDocument(this.url);
    //         loadingTask.promise.then(
    //             (pdf: any) => {
    //                 pdf.getPage(1).then((page: any) => {
    //                     let viewport = page.getViewport(this.scale);
    //                     canvas.height = viewport.height;
    //                     canvas.width = viewport.width;
    //                     let renderContext = {
    //                         canvasContext: ctx,
    //                         viewport
    //                     };
    //                     let renderTask = page.render(renderContext);
    //                     renderTask.promise.then(() => {
    //                         this.addAllMarks();
    //                         // 影藏loadding
    //                     });
    //                 });
    //             },
    //             (err: any) => {
    //                 throw err;
    //             }
    //         );
    //     });
    // }
    //渲染图片
    renderImg(isInit?: boolean) {
        let img = new Image();
        img.src = this.url;
        if (img.complete) {
            this.drawImg(img, isInit);
        } else {
            img.onload = () => {
                this.drawImg(img, isInit);
            }
            img.onerror = () => {
                //加载失败
            }
        }
    }

    drawImg(img: any, isInit?: boolean) {
        if (isInit) {
            let elem: any = document.getElementById("centerScan");
            let w: any = elem.clientWidth || elem.offsetWidth;
            if (img.width > w-30) {
                this._scale = (w-30)/img.width;
            }
        }
        this.draw((canvas: any, ctx: any) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let width = img.width * this.scale * this._scale;
            let height = img.height * this.scale * this._scale;
            canvas.height = height;
            canvas.width = width;
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
            this.addAllMarks();
        });
    }
    renderScan(isInit?: boolean) {
        // if (this.url && /.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(this.url.toLowerCase())) {
        //     this.renderImg();
        // } else if (this.url && /.pdf$/.test(this.url.toLowerCase())) {
        //     this.renderPDF();
        // }
        this.renderImg(isInit);
    }
    addMark(coordinates: any) {
        this.draw((canvas: any, ctx: any) => {
            let { top, left, right, bottom } = coordinates;
            let width = (right - left) * this.scale* this._scale;
            let height = (bottom - top) * this.scale* this._scale;
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.fillStyle = 'rgba(234,170,0,.5)';
            ctx.fillRect(left * this.scale* this._scale, top * this.scale* this._scale, width, height);
            ctx.stroke();
        });
    }
    //[`blockRef_${index}_${k}`]: { updated: false, coordinates: item[k].coordinates, }
    addAllMarks() {
        if (this.marks) {
            for (let key in this.marks) {
                if (this.marks[key]['updated'] === true) {
                    this.addMark(this.marks[key].coordinates);
                }
            }
        }
        if (this.headMarks) {
            for (let k in this.headMarks) {
                if (this.headMarks[k]['updated'] === true) {
                    this.addMark(this.headMarks[k].coordinates);
                }
            }
        }
    }
    // mounted() {
    //     this.renderScan();
    // }
}
</script>

<style lang='scss'>

</style>
