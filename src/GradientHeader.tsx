import React from "react";

interface Bubble {
  pos: { x: number; y: number };
  radius: number;
  velocity: number;
  init: () => void;
  draw: () => void;
}

const GradientHeader = () => {
  let bubbles: Bubble[] = [];

  const initHeader = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d")!;

    // create bubbles
    bubbles = [];
    for (let x = 0; x < width * 0.5; x++) {
      let b: Bubble = {
        pos: { x: Math.random() * width, y: Math.random() * height },
        radius: Math.random() * 5 + 2, // Adjusted size of bubbles
        velocity: Math.random() * 2 + 1,
        init: function () {
          this.pos.x = Math.random() * width;
          this.pos.y = height;
          this.radius = Math.random() * 5 + 2; // Adjusted size of bubbles
          this.velocity = Math.random() * 2 + 1;
        },
        draw: function () {
          this.pos.y -= this.velocity;
          if (this.pos.y + this.radius < 0) {
            this.init();
          }
          ctx.beginPath();
          ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        },
      };
      bubbles.push(b);
    }
    animate();
  };

  const animate = () => {
    requestAnimationFrame(animate);
    animateHeader && drawBubbles();
  };

  const drawBubbles = () => {
    let canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => bubble.draw());
  };

  React.useEffect(() => {
    initHeader();

    const scrollCheck = () => {
      animateHeader = document.body.scrollTop <= window.innerHeight;
    };

    const resize = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let canvas = document.getElementById("demo-canvas") as HTMLCanvasElement;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  let animateHeader = true;

  return (
    <div className="row gradient-header position-relative">
      <div className="col-12 px-0 position-relative">
        {/* Gradient Background */}
        <div className="gradient-background"></div>

        {/* Canvas */}
        <canvas id="demo-canvas"></canvas>
      </div>
    </div>
  );
};

export default GradientHeader;
