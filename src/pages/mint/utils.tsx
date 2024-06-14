import { Skeleton } from '@mui/material';

export const noiseProvider = () => {
    const canvas: HTMLCanvasElement = document.querySelector('canvas')!;
    const w: number = canvas.width;
    const h: number = canvas.height;
    const ocanvas: HTMLCanvasElement = document.createElement('canvas');
    ocanvas.width = w << 1;
    ocanvas.height = h << 1;

    const octx: CanvasRenderingContext2D = ocanvas.getContext('2d', { alpha: false })!;
    const idata: ImageData = octx.createImageData(ocanvas.width, ocanvas.height);
    const buffer32: Uint32Array = new Uint32Array(idata.data.buffer);

    noise(octx);

    const ctx: CanvasRenderingContext2D = canvas.getContext('2d', { alpha: false })!;
    (function loop() {
        const x: number = (w * Math.random()) | 0;
        const y: number = (h * Math.random()) | 0;
        ctx.drawImage(ocanvas, -x, -y);
        requestAnimationFrame(loop);
    })();

    function noise(ctx: CanvasRenderingContext2D) {
        let len: number = buffer32.length - 1;
        while (len--) {
            buffer32[len] = Math.random() < 0.5 ? 0 : -1 >>> 0;
        }
        ctx.putImageData(idata, 0, 0);
    }
};

export const skeletonProvider = () => {
    const temp = [];

    for (let i = 0; i < 10; i++) {
        temp.push(<Skeleton variant='rounded' height={48} />);
    }

    return temp;
};
