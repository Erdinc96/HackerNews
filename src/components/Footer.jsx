
const Footer = () => {

    return (
        <footer>
        <div className='footer'>
        <img src="../public/Hacker-News-logo.webp" alt="hacker logo" />
        <nav>
        <p id='footer-p'>&copy;2024, Cable News Netwok. All Rights Reserved</p>
            <ul className="footer-nav nav-foot">
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Accessability && CC</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">NewsLetters</a></li>
                <li><a href="#">Transcripts</a></li>
            </ul>
        </nav>
        
        <section className="soc-sec">
            <p><b>Follow Hacker News</b></p>
            <nav>
                <ul className="social nav-foot">
                    <li><a href="#" title="Visit us on Facebook" className="social-links"><i className="fa-brands fa-facebook social-links fa-xl"></i></a></li>
                    <li><a href="#" title="Visit us on Twitter" className="social-links"><i className="fa-brands fa-twitter fa-xl"></i></a></li>
                    <li><a href="#" title="Visit us on Instagram" className="social-links"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
                    <li><a href="#" title="Visit us on LinkedIn" className="social-links"><i className="fa-brands fa-linkedin fa-xl"></i></a></li>
                    <li><a href="#" title="Visit us on TikTok" className="social-links"><i className="fa-brands fa-tiktok fa-xl"></i></a></li>
                </ul>
            </nav>
        </section>
        </div>
        </footer>
    )
}

export default Footer;