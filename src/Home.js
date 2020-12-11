import React from 'react';
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            {/* <p>It's My Home Component</p> */}
            <div className="home__container">
               <img 
               className="home__image"
               src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
               alt="" />  

               <div className="home__row">
                   <Product 
                        id="11110001"
                        title="Logitech G502 Hero High Performance Gaming Mouse"
                        image="https://images-na.ssl-images-amazon.com/images/I/31BzhyIRe5L._AC_US240_FMwebp_QL65_.jpg"  
                        price={43.97}  
                        rating={5}
                        />
                   <Product 
                        id="11110002"
                        title="Sony WH-CH510 Wireless Headphones with 35 Hours Battery Life- (Black)"
                        image="https://www.reliancedigital.in/medias/Sony-Bluetooth-Headphone-CH510-Black-491600518-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0OTUxMjl8aW1hZ2UvanBlZ3xpbWFnZXMvaDdiL2hmMy85Mjk5Nzg3MTUzNDM4LmpwZ3w1NzAwNTljNjBlMzQ3ZTJjNjdkOTJiNmYzNzgzNDM5NWJkYWQzNjdmOWIxZWJiZjA5NGU3MmRlOGFiMGYxYTVk"  
                        price={54.46}  
                        rating={4}
                        />
               </div>
               <div className="home__row">
                   <Product 
                        id="11110003"
                        title="SG Full Cricket Kit with Duffle Bag and Spofly Brand Ball(with helmat)"
                        image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7LDkeRLe2u3uxo9JjW1FUQUIUF-Q20xSqydDI1qw1hS6_tt_SOsFvafsFlXe_nJE4xeHikN07W5Y&usqp=CAc"  
                        price={84}  
                        rating={5}
                        />
                   <Product 
                        id="11110004"
                        title="Akai Professional MPK mini MK3 – 25 Key USB MIDI Keyboard Controller With 8 Backlit Drum Pads, 8 Knobs and Music Production Software included"
                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCvS1rvzP-ukNIqaR00XtmcprAVahRwb1SKrR-eG1KeI5CkKAhTANIIvxAlUVkknfFUtlNIvvIsw&usqp=CAc"  
                        price={138.58}  
                        rating={4}
                        />
                   <Product 
                        id="11110005"
                        title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
                        image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US240_FMwebp_QL65_.jpg"  
                        price={103.79}  
                        rating={5}
                        />
               </div>
               <div className="home__row">
                    <Product 
                        id="11110006"
                        title="Fitbit Inspire 2 Health & Fitness Tracker with a Free 1-Year Fitbit Premium Trial, 24/7 Heart Rate, Black/Black, One Size (S & L Bands Included)"
                        image="https://images-na.ssl-images-amazon.com/images/I/31czMWqckzL._AC_US240_FMwebp_QL65_.jpg"  
                        price={68.95}  
                        rating={5}
                        />
               </div>  

            </div>
        </div>
    )
}

export default Home;
