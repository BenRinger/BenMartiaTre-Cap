import React from 'react'
import Cincy from '../imgs/cincyheader.jpg'
//import Downtown from '../imgs/downtownAboutimage.jpg'

const About = () => {
  return (
    <section class="bottom">
    <header>
        <h1 class="logo">About Cincinnati</h1>
        <div class="toggle"></div>
    </header>

   <div className="card bg-dark">
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text">Cincinnati is a city in Ohio, on the Ohio River. The Over-the-Rhine district is known for its 19th-century architecture, including Findlay Market, which has food and craft vendors. To the north is the Cincinnati Zoo & Botanical Garden. The Cincinnati Museum Center encompasses history, science and children's museums in the art deco Union Terminal. Works spanning 6,000 years are on display at the Cincinnati Art Museum.Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The City is the economic and cultural hub of the Cincinnati metropolitan area. With an estimated population of 2,190,209, it is Ohio's largest metropolitan area and the nation's 29th-largest,and with a city population of 309,317, Cincinnati is the third-largest city in Ohio and 64th in the United States. Throughout much of the 19th century, it was among the top 10 U.S. cities by population, surpassed only by New Orleans and the older, established settlements of the United States eastern seaboard, as well as being the sixth-most populous city from 1840 until 1860.Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer; it is also home to the Cincinnati Cyclones, a minor league ice hockey team. The city's largest institution of higher education, the University of Cincinnati, was founded in 1819 as a municipal college and is now ranked as one of the 50 largest in the United States.Cincinnati is home to historic architecture with many structures in the urban core having remained intact for 200 years. In the late 1800s, Cincinnati was commonly referred to as the "Paris of America", due mainly to such ambitious architectural projects as the Music Hall, Cincinnatian Hotel, and Shillito Department Store. Cincinnati is the birthplace of William Howard Taft, the 27th President and former Chief Justice of the United States.</p>
    <p className="card-text"><small className="text-muted"></small></p>
  </div>
  <img src={Cincy} className="card-img-bottom img-fluid" alt="down" />
</div>



</section>



  )
}

export default About;