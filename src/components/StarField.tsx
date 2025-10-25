import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars: Star[] = [];
    const numStars = 150;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const shootingStars: ShootingStar[] = [];

    const createShootingStar = () => {
      const side = Math.floor(Math.random() * 4);
      let x, y, angle;

      switch (side) {
        case 0:
          x = Math.random() * canvas.width;
          y = 0;
          angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
          break;
        case 1:
          x = canvas.width;
          y = Math.random() * canvas.height;
          angle = (3 * Math.PI) / 4 + (Math.random() - 0.5) * 0.5;
          break;
        case 2:
          x = Math.random() * canvas.width;
          y = canvas.height;
          angle = (7 * Math.PI) / 4 + (Math.random() - 0.5) * 0.5;
          break;
        default:
          x = 0;
          y = Math.random() * canvas.height;
          angle = (Math.PI * 7) / 4 + (Math.random() - 0.5) * 0.5;
      }

      shootingStars.push({
        x,
        y,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 3 + 4,
        opacity: 1,
        angle,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      shootingStars.forEach((star, index) => {
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );

        gradient.addColorStop(0, `rgba(0, 191, 165, ${star.opacity})`);
        gradient.addColorStop(0.5, `rgba(99, 102, 241, ${star.opacity * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        ctx.stroke();

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;

        if (
          star.opacity <= 0 ||
          star.x < -star.length ||
          star.x > canvas.width + star.length ||
          star.y < -star.length ||
          star.y > canvas.height + star.length
        ) {
          shootingStars.splice(index, 1);
        }
      });

      if (Math.random() < 0.01 && shootingStars.length < 3) {
        createShootingStar();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: "transparent" }}
    />
  );
};
