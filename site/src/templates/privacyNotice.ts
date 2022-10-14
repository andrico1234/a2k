import { html } from "lit";

const privacyNoticeWindow = html`
  <a2k-window heading="Privacy Notice" draggable closeable>
    <a2k-stack>
      <p>
        Andricos2000 uses privacy-focused analytics to help improve the site. We
        don't track any personal information and we don't use tracking cookies,
        so you don't need to accept another pesky cookie banner.
      </p>
      <p>
        If you'd like to learn a little more about what data we use, check out
        our provider's
        <a href="https://getinsights.io/what-data-we-collect" target="_blank"
          >privacy statement</a
        >.
      </p>

      <!-- TODO: Add a cookie tray gif -->
      <p>Don't worry, you can still have a cookie 🍪</p>
    </a2k-stack>
  </a2k-window>
`;

export default privacyNoticeWindow;
