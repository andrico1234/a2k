import { html } from "lit";

const privacyNoticeWindow = html`
  <a2k-window heading="Privacy Notice" draggable closeable>
    <a2k-stack>
      <img class="cookie" src="/images/cookie.png" alt="a cookie" />
      <p>
        Do you remember cookie banners back in the year 2000? Neither do we.
      </p>
      <p>
        We uses privacy-focused analytics to improve the site, but we don't
        track any personal information or use tracking cookies. You won't find
        any annoying cookie banners in Andricos2000.
      </p>
      <p>
        For more info about the data we collect, check out our provider's
        <a href="https://getinsights.io/what-data-we-collect" target="_blank"
          >privacy statement</a
        >.
      </p>
    </a2k-stack>
  </a2k-window>
`;

export default privacyNoticeWindow;
