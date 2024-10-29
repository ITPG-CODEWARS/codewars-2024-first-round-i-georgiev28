window.addEventListener('scroll', function() {
    const frames = 17;
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const step = (bodyHeight - windowHeight) / frames;

    const adjustedScrollY = Math.max(0, window.scrollY - 500);
    const scrollStep = Math.floor(adjustedScrollY / step);
    const maskPosition = (100 / frames) * scrollStep;

    const cover = document.getElementById('cover');
    cover.style.maskPosition = `${maskPosition}% 50%`;
    cover.style.webkitMaskPosition = `${maskPosition}% 50%`;
  });