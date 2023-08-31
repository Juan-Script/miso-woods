export const Footer = () => {
  return (
    <div className="footer_grid">
      <hr className="footer_hr"></hr>
      <div className="footer_content">
        <div className="footer_content_newsletter">
          <div className="footer_content_newsletter_title">
            <h2>Sign up for our newsletter</h2>
          </div>
          <div className="footer_container_input">
            <div className="footer_content_newsletter_subtitle">
              <p>
                Be the first to know about our special offers, news, and
                updates.
              </p>
            </div>
            <div className="input-container">
              <input type="text" placeholder="Email Address" />
              <div className="signup-container"></div>
              <span className="signup-button">Sign up</span>
            </div>
          </div>
        </div>
        <div className="footer_content_sitemap">
          <div className="footer_content_sitemap_links">
            <div>
              <h5 className="sitemap_title">Miso Woods</h5>
              <ol>Instagram</ol>
              <ol>Reddit</ol>
              <ol>Discord</ol>
              <ol>Email</ol>
            </div>
          </div>
          <div className="footer_content_sitemap_social">
            <div>
              <h5 className="sitemap_title">Quick links</h5>
              <ol>Search</ol>
              <ol>About Us</ol>
              <ol>Contact</ol>
              <ol>Terms of Service</ol>
              <ol>Privacy Policy</ol>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>- BY MISO WOODS -</p>
      </div>
    </div>
  );
};
