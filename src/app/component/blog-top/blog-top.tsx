import './index.css'
import pro from './pro-pic.jpg'
export default function BlogTop(){
    return (
        <div className="blogtop">
            <div className="pro-pic">
                <img src={pro.src} alt="这个是头像" />
            </div>
        </div>
    )
}