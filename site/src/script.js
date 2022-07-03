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
  const aboutWindow = document.createElement("a2k-window");

  aboutWindow.setAttribute("draggable", "");
  aboutWindow.setAttribute("closeable", "");
  aboutWindow.setAttribute("heading", "About Andricos2000");

  const childElement = document.createElement("p");
  childElement.textContent = "Deets coming soon...";
  aboutWindow.appendChild(childElement);

  document.body.appendChild(aboutWindow);
};

const internetIcon = document.querySelector(
  'a2k-desktop-icon[icon="internet-icon"]'
);

internetIcon.onOpen = () => {
  const aboutWindow = document.createElement("a2k-window");

  aboutWindow.setAttribute("draggable", "");
  aboutWindow.setAttribute("closeable", "");
  aboutWindow.setAttribute("heading", "Internet Explorer 11");

  const childElement = document.createElement("p");
  childElement.textContent = "Deets coming soon...";
  aboutWindow.appendChild(childElement);

  document.body.appendChild(aboutWindow);
};

window.addEventListener("startup-complete", () => {
  const startupEl = document.querySelector(".fixed-container");

  startupEl.remove();

  let progress = 0;
  const loadingWindow = document.querySelector(
    "a2k-window[heading='Please wait...']"
  );

  const intervalId = setInterval(() => {
    const el = document.querySelector("a2k-progress");

    if (!el) return;

    progress = progress + 1.2;

    el.setAttribute("progress", progress);
    if (progress > 70) {
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
});
