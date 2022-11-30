
export class Lab {
    constructor(id: string) {
        console.log(id)

        const div = document.getElementById(id);
        // div.style.position = 'relative';
        const canvas = document.createElement('canvas');
        canvas.width = div.clientWidth;
        canvas.height = div.clientHeight;
        canvas.style.position = 'absolute';
        div.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        this.draw(ctx);
    }
    public draw(ctx: CanvasRenderingContext2D) {
        requestAnimationFrame(() => { this.draw(ctx); });
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        ctx.beginPath();
        ctx.arc(400, 400, 100, 0, Math.PI * 2)
        ctx.closePath();
        ctx.fill();

        console.log('rendering...')

    }
}