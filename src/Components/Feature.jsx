import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

const Feature = (props) => {

    return (
        <div id="features">
            <h1 className="nameToo" >Premier Bot Marketplace</h1>

            <div className='a-container'>
                <FeatureBox image={featureimage1} title="Profitability" alt="automation is more profitable" description="Businesses that utilize bots and automation grow revenue 220% faster than those that don't." />
                <FeatureBox image={featureimage} title="Optimization" alt="optimize your time with automation" description="Free your time from mundane manual tasks to focus on strategy and profitability." />
                <FeatureBox image={featureimage2} title="Advantage" alt="gain a competitive advantage over competitors with automation" description="Bots and automation level the playing field so that you can compete more effectively." />

            </div>

        </div>
    )
}

export default Feature;