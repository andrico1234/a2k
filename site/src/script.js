import "./templates/ie5";
import "./templates/about";

const audioUrl = new URL("./andricos-2000-startup.mp3", import.meta.url);

const portfolioIcon = document.querySelector(
  'a2k-desktop-icon[icon="documents-icon"]'
);

portfolioIcon.onOpen = () => {
  window.location.href = "https://andri.co";
};

const contactIcon = document.querySelector(
  'a2k-desktop-icon[icon="network-icon"]'
);

contactIcon.onOpen = () => {
  window.location.href = "https://twitter.com/andricokaroulla";
};

const githubIcon = document.querySelector(
  'a2k-desktop-icon[icon="github-icon"]'
);

githubIcon.onOpen = () => {
  window.location.href = "https://github.com/andrico1234/a2k";
};

const aboutIcon = document.querySelector('a2k-desktop-icon[icon="help-icon"]');

aboutIcon.onOpen = () => {
  const aboutEl = document.createElement("a2k-about");
  document.body.append(aboutEl);
};

const internetIcon = document.querySelector(
  'a2k-desktop-icon[icon="internet-icon"]'
);

internetIcon.onOpen = () => {
  const ie5El = document.createElement("a2k-ie5");
  document.body.append(ie5El);
};

let hasStartupSoundPlayed = false;

window.addEventListener("startup-progress", (e) => {
  if (e.detail.progress < 50) return;

  if (hasStartupSoundPlayed) return;

  hasStartupSoundPlayed = true;
  playStartupSound();
});

window.addEventListener("startup-progress", (e) => {
  if (!e.detail.isComplete) return;

  setTimeout(() => {
    const startupEl = document.querySelector(".fixed-container");
    startupEl.remove();

    loadWindow();
    loadDesktopIcons();
  }, 300);
});

function playStartupSound() {
  const audio = new Audio(audioUrl);
  audio.volume = 0.3;
  audio.play();
}

function loadWindow() {
  let progress = 0;

  setTimeout(() => {
    const loadingWindow = document.querySelector(
      "a2k-window[heading='Please wait...']"
    );
    loadingWindow.removeAttribute("hidden");
    const el = document.querySelector("a2k-progress");

    const intervalId = setInterval(() => {
      if (!el) return;

      progress = progress + 1.2;

      el.setAttribute("progress", progress);
      if (progress > 40) {
        while (loadingWindow.firstChild) {
          loadingWindow.removeChild(loadingWindow.lastChild);
        }

        loadingWindow.innerHTML = `
          <p>There was an error loading Andricos2000</p>
          <p>Andricos2000 is still a work in progress, keeping checking back for updates or follow progress on Twitter</p>
        `;

        // change the content to say that there was an error loading the page
        // make the windows noise
        // enable dragging effect
        clearInterval(intervalId);
      }
    }, 100);
  }, 700);
}

function loadDesktopIcons() {
  const desktopIcons = document.querySelectorAll("a2k-desktop-icon");

  setTimeout(() => {
    desktopIcons.forEach((icon) => {
      icon.removeAttribute("hidden");
    });
  }, 1200);
}
