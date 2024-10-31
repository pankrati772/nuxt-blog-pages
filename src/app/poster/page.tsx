'use client';

import React, { Component, createRef } from 'react';
import * as fabric from "fabric";

interface PosterState {
    counter: number;
}

class Poster extends Component<any, PosterState> {
    canvasRef: React.RefObject<HTMLCanvasElement>;
    fabricCanvas: fabric.Canvas | null = null;

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        };
        this.canvasRef = createRef();
    }

    componentDidMount() {
        console.log('组件挂载');

        if (this.canvasRef.current) {
            // 创建 Fabric.js Canvas 实例
            this.fabricCanvas = new fabric.Canvas(this.canvasRef.current);
            console.log(this.fabricCanvas);
            // 在这里添加你的 Fabric.js 代码
            let text2 = new fabric.IText('Hello Fabric123', {
                left: 200,
                top: 200,
                fill: 'black',
                editable: true, // 确保可编辑
                selectable: true, // 确保可选中
                hasControls: true, // 确保有控件来缩放和旋转
                hasBorders: true // 确保有边框
            })
            this.fabricCanvas.add(text2);

            this.addText()
        }
    }

    componentWillUnmount() {
        // 在组件卸载时销毁 Fabric.js Canvas 实例
        if (this.fabricCanvas) {
            this.fabricCanvas.dispose();
            this.fabricCanvas = null;
        }
    }

    addText (){
        if (this.fabricCanvas) {
            let text2 = new fabric.IText('Hello Fabric123', {
                left: 500,
                top: 200,
                fill: 'red',
                editable: true, // 确保可编辑
                selectable: true, // 确保可选中
                hasControls: true, // 确保有控件来缩放和旋转
                hasBorders: true // 确保有边框
            })
            this.fabricCanvas.add(text2);
            this.fabricCanvas.renderAll();
        }
    }

    render() {
        return (
            <div>
                <canvas
                    id="canvas"
                    width="1000"
                    height="600"
                    ref={this.canvasRef}
                    style={{ border: '1px solid #ccc' }}
                ></canvas>
            </div>
        );
    }
}

export default Poster;
