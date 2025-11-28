// Scrub animation ================================================ //
const sections = gsap.utils.toArray("[scrub-wrapper]");
const width = document.documentElement.clientWidth;
const height = window.innerHeight;

var mm = gsap.matchMedia();

// Image sequence progressive loading system ======================= //

// Initialize for each section
function initSections() {
  sections.forEach(function (section) {
    var prefix = section.dataset.prefix || null;
    var suffix = section.dataset.suffix || null;
    var frames = Number(section.dataset.framecount || 0);
    var canvas = section.querySelector("canvas");

    if (!canvas || !prefix || !suffix || !frames) return;

    var device = width >= 768 ? "desktop" : "mobile";

    initCanvas(section, canvas, prefix, suffix, frames, device);
  });
}

mm.add("(min-width: 768px)", () => initSections());
mm.add("(max-width: 767px)", () => initSections());

// Initialize animation on canvas for each section. Progressive load.
function initCanvas(section, canvas, prefix, suffix, frames, device) {
  const context = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;

  const frameCount = frames;
  const images = new Array(frameCount).fill(null);

  // Build file source
  const getSrc = (i) =>
    `${prefix}${device}/${(i + 1).toString().padStart(3, "0")}${suffix}`;

  // Progressive quad-pass loader (pass 0 → 1 → 2 → 3)
  function loadPass(pass = 0) {
    let loadedInPass = 0;

    for (let i = pass; i < frameCount; i += 4) {
      if (images[i]) continue; // Already loaded

      const img = new Image();
      img.src = getSrc(i);

      img.onload = () => {
        images[i] = img;
        loadedInPass++;

        // First frame of first pass initializes animation immediately
        if (pass === 0 && loadedInPass === 1) {
          initCanvasAnimations(section, images, context, canvas);
        }

        // Check if all frames of this pass are loaded
        const allLoadedInPass = images
          .map((img, idx) => (idx % 4 === pass ? !!img : true))
          .every(Boolean);

        if (allLoadedInPass && pass < 3) {
          loadPass(pass + 1); // Load next pass
        }
      };

      img.onerror = () => {
        images[i] = "error";
      };
    }
  }

  // Start progressive loading
  loadPass(0);
}

// Create ScrollTrigger animations once first frame is ready
function initCanvasAnimations(section, images, context, canvas) {
  var blocks = section.querySelectorAll("[frames-play]");

  blocks.forEach(function (block) {
    var start = Number(block.dataset.start);
    var end = Number(block.dataset.end);
    var posStart = block.dataset.startPos || "top top";
    var posEnd = block.dataset.endPos || "bottom bottom";

    var blockSequence = { frame: start - 1 };

    gsap
      .timeline({
        onUpdate: () => render(images, blockSequence, context, canvas),
        scrollTrigger: {
          trigger: block,
          pin: false,
          scrub: 1,
          start: posStart,
          end: posEnd,
          markers: false,
        },
      })
      .fromTo(
        blockSequence,
        { frame: start - 1 },
        {
          frame: end - 1,
          snap: "frame",
          ease: "none",
          duration: 1,
        },
        0
      );
  });

  // First render
  render(images, { frame: 0 }, context, canvas);

  // Responsive resize
  window.addEventListener("resize", function () {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = window.innerHeight;
    render(images, { frame: 0 }, context, canvas);
  });
}

// Render function with fallback for not-yet-loaded frames
function render(images, sequence, context, canvas) {
  let frameIndex = sequence.frame;
  let img = images[frameIndex];

  // Look backward for nearest loaded frame
  if (!img || img === "error") {
    for (let i = frameIndex - 1; i >= 0; i--) {
      if (images[i] && images[i] !== "error") {
        img = images[i];
        break;
      }
    }
  }

  // Look forward if still missing
  if (!img || img === "error") {
    for (let i = frameIndex + 1; i < images.length; i++) {
      if (images[i] && images[i] !== "error") {
        img = images[i];
        break;
      }
    }
  }

  // If no valid images yet, skip drawing
  if (!img || img === "error") return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  // Scale image to cover canvas
  const scaleFactor = Math.max(
    canvas.width / img.width,
    canvas.height / img.height
  );

  const newWidth = img.width * scaleFactor;
  const newHeight = img.height * scaleFactor;

  const x = (canvas.width - newWidth) / 2;
  const y = (canvas.height - newHeight) / 2;

  context.drawImage(img, x, y, newWidth, newHeight);
}
