// Wheel.js (v2 polished physics)
// Spin physics: random initial velocity, friction decay, tick slowdown, fair stop
// Uses better arcade SFX from /public/sounds

import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';

export default function Wheel({ segments }){
  const [spinning, setSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const numSegments = segments.length;
    const sliceAngle = (2 * Math.PI) / numSegments;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    segments.forEach((segment, i) => {
      const startAngle = i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(200, 200);
      ctx.arc(200, 200, 190, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();

      ctx.save();
      ctx.translate(200, 200);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(segment.label, 170, 10);
      ctx.restore();
    });
  }, [segments]);

  function spin(){
    if(spinning) return;
    setSpinning(true);
    let velocity = (5 + Math.random()*5); // rad/s initial
    let current = angle;
    const decay = 0.98; // friction factor
    const tickAudio = new Audio('/sounds/tick.wav');
    const ding = new Audio('/sounds/ding.wav');
    const spinSfx = new Audio('/sounds/spin.wav');
    spinSfx.play();

    function frame(){
      velocity *= decay;
      current += velocity;
      if(velocity < 0.01){
        // landed
        ding.play();
        confetti();
        setSpinning(false);
        return;
      }
      setAngle(current);
      if(Math.random()<0.1){ tickAudio.play(); } // tick with slowdown feel
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  return (
    <div style={{textAlign:'center'}}>
      <canvas ref={canvasRef} id="wheelCanvas" width={400} height={400} style={{transform:`rotate(${angle}rad)`}}></canvas>
      <button onClick={spin} disabled={spinning}>Spin</button>
    </div>
  );
}
