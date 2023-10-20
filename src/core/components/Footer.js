export default function Footer() {
    return(
        <div className="footer"> 
            <div className="footer-content">
                <div className="footer-column">
                    <p>
                        <b>Quick Links</b>
                    </p>
                    <p><a href = "/">Home</a></p>
                    <p><a href = "/">About Us</a></p>
                    <p><a href = "/">FAQ</a></p>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-column">
                    <p>
                        <b>Contact us</b>
                    </p>
                        <a href = "https://www.instagram.com/mahimas_art_house/"><img src="https://www.pngmart.com/files/22/Black-And-White-Instagram-Logo-PNG-File.png" style={{height: "25px"}}></img></a>
                        <a href = "https://www.twitter.com/mahimas_art_house/"><img src="https://pngimg.com/d/envelope_PNG18355.png" style={{height: "25px"}}></img></a>
                        <br></br>
                </div>
            </div>
        </div>
    )
}