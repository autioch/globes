const SIDEBAR_WIDTH = 100;

export default function gameResize() {
  return {
    dimensions: {
      targetsHeight: window.innerHeight,
      targetsWidth: window.innerWidth - SIDEBAR_WIDTH,
      sidebarWidth: SIDEBAR_WIDTH
    }
  };
}
