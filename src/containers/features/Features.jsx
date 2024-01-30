import React from 'react'
import './features.css';
import { Feature } from '../../components';

const featureseData = [
{
  title : 'Exclusive Beta Releases' , 
  text : 'Be among the first to test our latest innovations before they hit the market. Your feedback shapes the future of technology.'
} ,

{
  title : 'Insider Updates' , 
  text : 'Stay in the loop with insider information and sneak peeks into upcoming features and developments. Knowledge is power'
} ,

{
  title : 'VIP Access' , 
  text : 'Unlock VIP benefits including early access to events, special offers, and priority support. Join our inner circle of innovators.'
} ,

{
  title : 'Join the Community' , 
  text : 'Connect with like-minded individuals, share ideas, and collaborate on projects. Together, we can drive innovation forward.'
}
];
const Features = () => {
  return (
    <div className="features section__padding" id='features'>
      <div className="features__heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className="features__container">
        {
          featureseData.map((item , index) => (
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features