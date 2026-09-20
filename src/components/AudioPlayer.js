/**
 * Serene Kerala Hindu Wedding Ambient Audio Player
 * Features an authentic Carnatic temple drone (Tanpura & gentle Veena resonance)
 * synthesized natively via Web Audio API. 
 * Manual user play/pause toggle with smooth fade-in/fade-out.
 */

export function initAudioPlayer() {
  let isPlaying = false;
  let audioCtx = null;
  let masterGain = null;
  let droneInterval = null;

  // Floating button DOM
  const btn = document.createElement('button');
  btn.className = 'audio-control-btn';
  btn.setAttribute('aria-label', 'Toggle Traditional Kerala Wedding Music');
  btn.setAttribute('title', 'Play Traditional Temple Music');
  btn.innerHTML = `
    <span class="audio-pulse"></span>
    <svg class="audio-icon-play" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  `;
  document.body.appendChild(btn);

  function setupAudio() {
    if (audioCtx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0, audioCtx.currentTime);

    // Subtle low-pass filter for warm, soothing acoustics
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, audioCtx.currentTime);

    masterGain.connect(filter);
    filter.connect(audioCtx.destination);
  }

  // Authentic Tanpura Pa-Sa-Sa-Sa Drone pitches based on C# / D
  const BASE_FREQ = 138.59; // C#3 (auspicious traditional pitch)
  const NOTES = {
    Pa: BASE_FREQ * 1.5,        // 207.89 Hz
    Sa_high: BASE_FREQ * 2,    // 277.18 Hz
    Sa_mid: BASE_FREQ * 1,     // 138.59 Hz
    Ga: BASE_FREQ * 1.25,      // 173.24 Hz (Anthara Gandharam for Raga Mohanam)
    Dha: BASE_FREQ * 1.667     // 231.02 Hz (Chathusruthi Dhaivatham)
  };

  function playTone(freq, duration, gainLevel, detune = 0) {
    if (!audioCtx || !isPlaying) return;
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.detune.setValueAtTime(detune, audioCtx.currentTime);

    const now = audioCtx.currentTime;
    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(gainLevel, now + 0.8);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + duration);
  }

  function startDroneCycle() {
    let step = 0;
    const cycle = [
      { freq: NOTES.Pa, dur: 4.5, gain: 0.16 },
      { freq: NOTES.Sa_high, dur: 4.0, gain: 0.14 },
      { freq: NOTES.Sa_high, dur: 4.0, gain: 0.14 },
      { freq: NOTES.Sa_mid, dur: 5.5, gain: 0.22 },
      { freq: NOTES.Ga, dur: 4.2, gain: 0.12 },
      { freq: NOTES.Dha, dur: 4.5, gain: 0.11 }
    ];

    function tick() {
      if (!isPlaying) return;
      const cur = cycle[step % cycle.length];
      playTone(cur.freq, cur.dur, cur.gain, Math.random() * 4 - 2);
      step++;
    }

    tick();
    droneInterval = setInterval(tick, 1400);
  }

  function start() {
    setupAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!isPlaying) {
      isPlaying = true;
      btn.classList.add('playing');
      btn.setAttribute('title', 'Pause Traditional Music');
      masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.65, audioCtx.currentTime + 1.5);
      startDroneCycle();
    }
  }

  function stop() {
    if (isPlaying) {
      isPlaying = false;
      btn.classList.remove('playing');
      btn.setAttribute('title', 'Play Traditional Music');
      if (masterGain && audioCtx) {
        masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 1.0);
      }
      clearInterval(droneInterval);
    }
  }

  function toggleMusic() {
    if (isPlaying) {
      stop();
    } else {
      start();
    }
  }

  btn.addEventListener('click', toggleMusic);

  return {
    start,
    stop,
    toggle: toggleMusic,
    isPlaying: () => isPlaying
  };
}
