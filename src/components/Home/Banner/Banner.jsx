import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>GitKart</h1>
                <p>
                    Discover beauty and relaxation at GitKart GlamHub. Book your makeup, nails, hair, spa, and mehndi services with us. Elevate your style, enhance your beauty. Welcome to a world of self-care.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
