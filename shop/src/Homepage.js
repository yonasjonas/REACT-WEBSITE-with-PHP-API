
import React from 'react';
import Slider from './Slider';


const Homepage = () => {    
        return <div>            
                <Slider />
                <p className="text-center m-5">This a website build by Jonas Samaitis D17124413 for Internet Application Development Module CA. This website is build with React.js Bootstrap. Products page reads data from the <a href="http://webface.ie/api/product/read.php" target="_blank" rel="noopener noreferrer">link</a> which is created with php that reads mysql product database and creates json file for react to process. Form on contact page has button disabled till condition is not satisfied.</p>
            </div>
}

export default Homepage;
