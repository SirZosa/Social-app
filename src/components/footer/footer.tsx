import './footer.css'
import fb from '../../assets/Facebook.png'
import ig from '../../assets/Instagram.png'
import tw from '../../assets/Twitter.png'
export default function Footer(){
    return(
        <footer>
            <hr />
            <h5 className='socials-header'>LET'S CONNECT!</h5>
            <div className="socials">
                <a href="#"><img src={ig} alt="instagram logo" /></a>
                <a href="#"><img src={fb} alt="facebook logo" /></a>
                <a href="#"><img src={tw} alt="twitter logo" /></a>
            </div>
            <hr />
            <p className='copyright'>Copyright &copy; Omar's Social App 2025</p>
        </footer>
    )
}