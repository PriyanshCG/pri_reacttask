import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 200; // Increased count
        const colors = ['#06b6d4', '#3b82f6', '#22d3ee', '#14b8a6'];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.angle = Math.random() * Math.PI * 2;
                this.spin = Math.random() * 0.05 + 0.02;
            }

            update() {
                this.angle += this.spin;
                this.x += Math.cos(this.angle) * 1.5 + this.speedX;
                this.y += Math.sin(this.angle) * 1.5 + this.speedY;

                if (this.x < -50 || this.x > canvas.width + 50 || this.y < -50 || this.y > canvas.height + 50) {
                    this.init();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            // Trail effect: instead of clearing, draw a semi-transparent rectangle
            ctx.fillStyle = 'rgba(2, 6, 23, 0.15)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default Background;
