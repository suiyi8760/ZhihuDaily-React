export default {
  linear: p => p,
  easeInSine: p => 1 - Math.cos(Math.PI / 2 * p),
  easeOutSine: p => Math.sin(Math.PI / 2 * p),
  easeInOutSine: p => p <= 0.5 ? 0.5 * (1 - Math.cos(Math.PI * p)) : 0.5 * (Math.sin(Math.PI * (p - 0.5)) + 1),
  easeInQuad: p => p * p,
  easeOutQuad: p => 1 - Math.pow(1 - p, 2),
  easeInOutQuad: p => p <= 0.5 ? 2 * p * p : 1 - 2 * Math.pow(1 - p, 2)
}

