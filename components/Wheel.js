// Wheel.js (v2 polished physics)
// Spin physics: random initial velocity, friction decay, tick slowdown, fair stop
// Uses better arcade SFX from /public/sounds

import { useRef, useState } from 'react';
import confetti from 'canvas-confetti';

export default function Wheel({ wheel }){
  const [spinning, setSpinning] = useState(false);
  const [angle, setAngle] = useState(0);

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
      <canvas id="wheelCanvas" width={400} height={400} style={{transform:`rotate(${angle}rad)`}}></canvas>
      <button onClick={spin} disabled={spinning}>Spin</button>
    </div>
  );
}
