import { Link } from 'react-router-dom'
import CommercialImage from '../assets/commercialPayment.webp'
import WebInWeb from './WebInWeb';

function BodyInfo() {
    return(
        <>
        <div className='bodyinfo_container'>

            <h3 className='body_history'>Established in 2004, Alipay.com Co., Ltd. (Alipay China) has been committed to the creation and development of a digital payment open platform. In <br /> May 2011, Alipay China was one of the first companies to receive a payment business license from the People's Bank of China. It developed Quick <br />Pay, barcode payment, smile-to-pay and QR code payment solutions to serve the digital payment needs across a vast array of use cases, including <br />commercial operations, public services, and transportation. Alipay China contributes to the real economy by delivering payment services to over one <br />billion users and 80 million merchants.</h3>

            <h2 className='product_header'>Product and Services</h2>
            
            <Link to='/commercial' className='all_links'><h3 className='product_router'>Commercial Payment</h3></Link>
            <Link to='/convenient' className='all_links'><h3 className='product_router'>Convenient Payment</h3></Link>
            <Link to='/transport' className='all_links'><h3 className='product_router'>Payment for Transport</h3></Link>

            <img src={CommercialImage} alt="commercial image" className='commercial_image'/>
            <h2 className='commercial_payment'>Commercial Payment</h2> 

            <WebInWeb />
   



           
        </div>
        </>
    )
}


export default BodyInfo;