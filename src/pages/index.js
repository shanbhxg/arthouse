import Image from "next/image"

export default function HomePage() {
    return (
        <div className="grid-halves h-screen-navbar" style={{gridTemplateColumns: "3fr 1.25fr"}}>
            <div className="bg-green">
                <div className="column-padding">
                    <div className="centered">
                        <div className="content-grid home-hero">
                            <h1>
                                Welcome to <b style={{color: "#8d4431"}}>Mahimas arthouse</b>!
                            </h1>
                            <p className = "sub-subtitle">
                                Your one-stop destination for the most creative gifts!
                            </p>
                            {/* <a href = '/products' className="large-button"> */}
                                <div className="large-button-text">Shop now!</div>
                            {/* </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-yellow">
                    <div className="callout-wrap">
                        <img src="https://i.imgur.com/GoiKGvX.png" className="callout-icon" alt="callout-icon"></img>
                    </div>
            </div>
        </div>
    )
}