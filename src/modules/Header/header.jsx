import { FaceBookIcon,   HeartIcon,   InstagramIcon, NimadirIcon, PhoneIcon, SaveIcon, SearchIcon, TwitterIcon, YouTubeIcon } from "../../assets/icons"
import { languageImg, logo } from "../../assets/images"
import "./header.scss"
import { HeaderBottomContent } from "./style"


function Header() {
    return(
        <header className="site-header">
            <div className="header-top">
                <div className="containers">
                {/* top header */}
                <div className="header-top__wrapper">
                    <div className="left-wrapper">
                        <div>
                            <FaceBookIcon/>
                            <TwitterIcon/>
                            <YouTubeIcon/>
                            <InstagramIcon/>
                        </div>
                        <div>
                            <PhoneIcon/>
                            <a href="tel:+1234567890">(+123)4567890</a>
                        </div>
                    </div>

                        <div className="right-wrapper">
                            <span>USD $</span>
                            <img src={languageImg} alt="photo" width={16} height={11} />
                            <p>English</p>
                        </div>

                </div>
                 <HeaderBottomContent>
                    <img src={logo} alt="logo" width={114} height={34} />

                    <nav>
                        <a href="#">HOME</a>
                        <a href="#">SHOP</a>
                        <a href="#">PAGES</a>
                        <a href="#">BLOG</a>
                        <a href="#">CONTACT US</a>
                    </nav>

                    <div>
                        <SearchIcon/>
                        <NimadirIcon/>
                        <HeartIcon/>
                        <SaveIcon/>
                    </div>
                </HeaderBottomContent>
                </div> 
            </div>
        </header>
    )
}
export default Header