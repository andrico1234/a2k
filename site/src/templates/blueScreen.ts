import { html } from "lit";

const isMac = navigator.platform.includes("Mac");
const restartShortcut = isMac ? "Ctrl+Alt+Delete" : "Cmd+Option+Esc";

const blueScreen = html`
  <a2k-blue-screen>
    <a2k-stack>
      <p>
        An error has occurred and Andricos2000 has been shut down to prevent
        damage to your browser.
      </p>
      <p>
        If this the first time you're seeing this error, please restart
        Andricos2000 by pressing ${restartShortcut}.
      </p>
      <p>
        If you continue to experience problems, please perform a fresh reinstall
        of Andricos2000 using an official installation CD.
      </p>
    </a2k-stack>
  </a2k-blue-screen>
`;

export default blueScreen;
