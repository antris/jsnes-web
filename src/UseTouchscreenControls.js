const useTouchscreenControls =
  /iPhone/.test(navigator.userAgent) && /Safari/.test(navigator.userAgent);

export default useTouchscreenControls;