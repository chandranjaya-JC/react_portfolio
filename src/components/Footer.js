import "./FooterStyles.css"

import React from 'react'
import { 
    FaHome,
    FaMailBulk,
    FaPhone,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome 
                    size={20} 
                    style={{
                        color:"#fff", 
                        marginRight :"2rem"
                    }}
                    />
                    <div>
                        <p>123 Housing Clolny.</p>
                        <p>Coimbatore.</p>
                        <p>Tamil Nadu</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone 
                            size={20} 
                            style={{
                            color:"#fff", 
                            marginRight :"2rem"
                            }}
                        />
                        +91 90805 15514
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk 
                            size={20} 
                            style={{
                            color:"#fff", 
                            marginRight :"2rem"
                            }}
                        />
                        chandranjaya427@gmail
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Jaya Chandran. CEO &
                    Founder of JCTECH. I enjoy discussing
                    new projects and designing projects
                </p>
                <div className="social">
                    <FaFacebook 
                        size={20} 
                        style={{
                        color:"#fff", 
                        marginRight :"2rem"
                        }}
                    />
                    <FaLinkedin
                        size={20} 
                        style={{
                        color:"#fff", 
                        marginRight :"2rem"
                        }}
                    />
                    <FaTwitter 
                        size={20} 
                        style={{
                        color:"#fff", 
                        marginRight :"2rem"
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer