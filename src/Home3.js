import profile from "./profile1.jpg";
import profile2 from "./profile2.jpg";
import profile3 from "./profile3.jpg";
import profile4 from "./profile4.jpg";



const Home3=()=>{
    return(
        <section className="third-section">
      <div className="third-section-block">
        <h1>Testimonials</h1>
        <div className="reviews">
          <div className="review first-review">
            <div className="rating">Awesome!</div>
            <div className="reviewer">
              <div className="reviewer-img">
              <img className='profile' src={profile} alt="profile" />
              </div>
              <p>Selena G.</p>
            </div>
            <p className="review-text">
              Like this place! Delicious food, friendly stuff and amazing
              atmosphere.{" "}
            </p>
          </div>
          <div className="review second-review">
            <div className="rating">Nice!</div>
            <div className="reviewer">
              <div className="reviewer-img">
              <img className='profile' src={profile2} alt="profile2" />
              </div>
              <p>Brandon M.</p>
            </div>
            <p className="review-text">
            The greek salad was excellent! love it so much{" "}
            </p>
          </div>
          <div className="review third-review">
            <div className="rating">Amazing!</div>
            <div className="reviewer">
              <div className="reviewer-img">
              <img className='profile' src={profile3} alt="profile3" />
              </div>
              <p>Peter R.</p>
            </div>
            <p className="review-text">
            You have to try the Greek Salad! I highly recommend it{" "}
            </p>
          </div>
          <div className="review forth-review">
            <div className="rating">Excellent!</div>
            <div className="reviewer">
              <div className="reviewer-img">
              <img className='profile' src={profile4} alt="profile4" />
              </div>
              <p>Neha J.</p>
            </div>
            <p className="review-text">
            Awesome place peaceful atmosphere with delicious food{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};
export default Home3;