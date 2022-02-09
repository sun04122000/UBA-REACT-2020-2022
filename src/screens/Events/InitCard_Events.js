import React from 'react';
import "../../components/Css/Events_InitCard.css"
import { Events_InitCard } from '../../components/Javascript/Events_InitCard'
import e1 from '../../Images/Events_image/swanpil1.jpeg'
import e2 from '../../Images/Events_image/i.jpg'
import e3 from '../../Images/Events_image/anuradha1.png'
import e4 from '../../Images/Events_image/varsha1.png'
import e5 from '../../Images/Events_image/archana1.png'
import e6 from '../../Images/Events_image/naveenKumar2.png'
import e7 from '../../Images/Events_image/Winter_school.jpg'

export const InitCard_Events = () => {
  return <div>
          <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Our <span>Events</span></h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Events</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
        
          <Events_InitCard 
          image={e1}
          date='August 15, 2021'
          event='Oh Yuva! - Unleash your superpower'
          desc='On the eve of 75th Independence Day, Team UBA IITRbrought talk by Mr. Swapnil Tewari on topic- O Yuva!-Unleash your superpower.'/>
          <Events_InitCard 
          image={e2}
          date='December 29, 2020 - January 03, 2021'
          event='Sociothon'
          desc='Sociothon, a social case competition conducted by team Unnat Bharat Abhiyan, IIT Roorkee which aims to nurture and foster critical thinking skills in order to weed out various social ills.'/>
          <Events_InitCard
          image={e3}
          date='December 19, 2020'
          event='Spandan- Talk by Anuradha Kapoor'
          desc='In Spandan, Ms Anuradha Kapoor talked about how violence against women is an onging pandemic and much more.' />
      </div>
      <div className='cards'>
          <Events_InitCard 
          image={e4}
          date='December 19, 2020'
          event='Spandan- Talk by Varsha Singh'
          desc='In Spandan, a session was organised by Ms Varsha singh where she showed self Defense techniques for women and much more.'/>
          <Events_InitCard 
          image={e5}
          date='December 20, 2020'
          event='Spandan- Talk by Archana Garodia Gupta'
          desc='In Spandan, Mrs Aechana garodia Gupta talked about how rural transformation Acknowledging women and much more'/>
          <Events_InitCard 
          image={e6}
          date='September 14, 2020'
          event='Talk by Naveen Kumar Chandra'
          desc='On the eve of Hindi Diwas, Team UBA IITR brings one-of-its-kind talk by Mr. Naveen Kumar Chandra (the IAS Officer).'/>
    </div>
      <div className='cards'>
      <Events_InitCard 
           image={e7}
          date='January 17, 2020 - January 19,2020'
          event='Winter School 2020'
          desc='Three day event organised by UBA, IITR which consisted of Guest Lectures, Workshops, Panel discussion, Group Discussion, a field visit and many more.'/>

      </div>

  </div>;
};
