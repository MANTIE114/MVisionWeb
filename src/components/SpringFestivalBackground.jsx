import React, { useEffect, useRef } from 'react';
import './SpringFestivalBackground.css';

const SpringFestivalBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height - height; // Start above
                this.size = Math.random() * 2 + 1;
                this.speed = Math.random() * 1 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.05;
            }

            update() {
                this.y += this.speed;
                this.wobble += this.wobbleSpeed;
                this.x += Math.sin(this.wobble) * 0.5;

                if (this.y > height) {
                    this.reset();
                    this.y = -10; // Reset just above
                }
            }

            draw() {
                ctx.fillStyle = `rgba(255, 215, 0, ${this.opacity})`;
                ctx.beginPath();
                ctx.rect(this.x, this.y, this.size, this.size); // Gold squares/confetti look
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Slight push effect
            particles.forEach(p => {
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (100 - distance) / 100;
                    p.x += forceDirectionX * force * 2;
                    p.y += forceDirectionY * force * 2;
                }
            });
        };
        window.addEventListener('mousemove', handleMouseMove);

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Click interaction
        const handleClick = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            import('canvas-confetti').then((module) => {
                const confetti = module.default;
                confetti({
                    particleCount: 30,
                    spread: 40,
                    origin: { x, y },
                    startVelocity: 40,
                    colors: ['#FFD700', '#D32F2F', '#FFFFFF'], // Gold, Red, White
                    disableForReducedMotion: true,
                    shapes: ['square', 'circle'],
                    scalar: 0.8,
                    drift: 0,
                    ticks: 60
                });
            });
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleClick);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="spring-festival-bg" />;
};

export default SpringFestivalBackground;
