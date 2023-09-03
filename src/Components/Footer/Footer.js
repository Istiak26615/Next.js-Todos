import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-white p-4">
                <div className="container text-center">
                    <div className='flex justify-evenly'>
                        <p>Affiliates</p>
                        <p>Privacy Policy</p>
                        <p>CCPA</p>
                        <p>Terms & Conditions</p>
                        <p>Sitemap</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                        <p>Press</p>
                    </div>
                    <div className='mt-6 mb-6 flex justify-evenly' >
                        <a className='p-3' href="https://www.facebook.com">
                            <FontAwesomeIcon icon={faFacebook} height="2rem" />
                        </a>
                        <a className='p-3' href="https://www.youtube.com">
                            <FontAwesomeIcon icon={faYoutube} height="2rem" />
                        </a>
                        <a className='p-3' href="https://www.twitter.com">
                            <FontAwesomeIcon icon={faTwitter} height="2rem" />
                        </a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer