import React, { Fragment } from 'react';
import Header from './Header';
import './Home.css';
import Pride from './../../Assets/1.png';
import Ing from './../../Assets/2.png';
import { Carousel } from 'react-bootstrap';
import {Data , Slider} from '../../Data';
import Footer from '../Footer/Footer';

const Home = () => {

  const blogItem = Data.map((item) => {
    return (
      <div className='col-md-4'>
        <div className='box'>
          <img src={item.img} />
          <h5>{item.title}</h5>
          <h6>{item.time}</h6>
          <p>{item.price}</p>
        </div>
        <button><a href='#'>Order Now</a></button>
      </div>
    )
  })

  const slides = Slider.map((slide) => {
    return (
      <Carousel.Item>
        <img src={slide.img}/>
        <Carousel.Caption>
          <p>{slide.text}</p>
          <h3>{slide.name}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  return (
    <Fragment>
      <Header />


      <section className='numbers'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className='col-md-3'>
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className='col-md-3'>
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>


      <section className='pride' id='pride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={Pride} title='pride' />
            </div>
            <div className='col-md-6'>
              <h2>We pride ourselves on making real food from the best ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <button><a href='#'>Learn More</a></button>
            </div>
          </div>
        </div>
      </section>


      <section className='ingredients'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button><a href='#'>Learn More</a></button>
            </div>
            <div className='col-md-6'>
              <img src={Ing} title='ing' />
            </div>
          </div>
        </div>
      </section>


      <section className='story'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>When a man's stomach is full it makes no <br />
                difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <a href='#'>Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>


      <section className='blogs' id='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br /> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and <br />
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
          </div>
          <div className='row'>
            {blogItem}
          </div>
        </div>
      </section>


      <section className='slider' id='testi'>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <Carousel>
                {slides}
              </Carousel>
            </div>
          </div>
        </div>
      </section>


      <section className='faq' id='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 col-lg-12'>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6 col-lg-6'>
              <div className='text'>
                <h3><span>~</span> Is Foodera Bread really baked fresh each day?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
              <div className='text'>
                <h3><span>~</span> Can I order your products online?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
            </div>
            <div className='col-md-6 col-lg-6'>
              <div className='text'>
                <h3><span>~</span> Do you bake breads containing animal fats or products?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </div>
              <div className='text'>
                  <h3><span>~</span> When are you opening a shop near me?</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                </div>
            </div>
          </div>
        </div>
      </section>


      <section className='bakers'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9 col-md-9'>
              <h2>Baked fresh daily by bakers with passion.</h2>
            </div>
            <div className='col-lg-3 col-md-3'>
              <button><a href='#'>Learn More</a></button>
            </div>
          </div>
        </div>
      </section>


      <section className='subscribe'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h2>
              <p>Limited time offer for this month. No credit card required.</p>
              <form>
                <input type='text' placeholder='Email Adress Here'/>
                <button type='submit'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>



      <Footer/>

    </Fragment>
  )
}

export default Home
