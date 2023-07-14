import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "./Tab";
import BlogTab from "./BlogTab";
import BlogSection from "./BlogSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SideTab from "./SideTab";
function HomeContent(props) {
  const func = props;

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="home-content">
            <Tab
              id={"WildLife"}
              imageurl={
                "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?cs=srgb&dl=pexels-pixabay-45853.jpg&fm=jpg"
              }
              tabHeading={"Explore the Wild"}
              tabContent={
                "Wildlife tourism offers a captivating opportunity to experience and appreciate the diverse and magnificent creatures that inhabit our planet, fostering a deeper understanding and connection with the natural world."
              }
              function={func}
            />
          </div>

          <div className="home-content">
            <Tab
              id={"Mountain"}
              imageurl={
                "https://wallpapers.com/images/hd/mountain-top-t6qhv1lk4j0au09t.jpg"
              }
              tabHeading={"Conquer the Majestic Mountains"}
              tabContent={
                "Embark on an exhilarating journey to conquer majestic mountains, witness breathtaking vistas, and experience the awe-inspiring beauty of nature's highest peaks"
              }
              function={func}
            />
          </div>

          <div className="home-content">
            <Tab
              id={"Culture"}
              imageurl={
                "https://images.unsplash.com/photo-1585607344893-43a4bd91169a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              }
              tabHeading={"Immerse in India's Vibrant Cultural Tapestry"}
              tabContent={
                "Experience the rich tapestry of India's cultural heritage, where ancient traditions, architectural marvels, colorful festivals, and diverse heritage intertwine to create a captivating journey that will leave you awe-inspired."
              }
              function={func}
            />
          </div>

          <div className="home-content">
            <Tab
              id={"Beach"}
              imageurl={
                "https://c4.wallpaperflare.com/wallpaper/414/533/192/sunset-high-resolution-desktop-backgrounds-wallpaper-preview.jpg"
              }
              tabHeading={"Unwind on India's Pristine Beaches"}
              tabContent={
                "Escape to India's picturesque coastal havens, where sun-kissed beaches, turquoise waters, swaying palm trees, and a laid-back vibe invite you to relax, indulge in water sports, experience vibrant beach parties, and immerse yourself in the blissful charm of beachside retreats."
              }
              function={func}
            />
          </div>

          <div className="home-content">
            <Tab
              id={"Spritual"}
              imageurl={
                "https://ihplb.b-cdn.net/wp-content/uploads/2019/01/varansi.jpg"
              }
              tabHeading={"Discover the Spiritual Essence of India"}
              tabContent={
                "Embark on a sacred journey to India's revered temples, serene ashrams, and sacred cities, where ancient rituals, devotional practices, and spiritual wisdom converge. Immerse yourself in the divine atmosphere, experience soul-stirring ceremonies, and find solace amidst the rich tapestry of religious traditions that have thrived for centuries."
              }
              function={func}
            />
          </div>
        </div>
      </div>
      <div className="col-12 blog-section">
          <BlogSection />
        </div>
    </div>
  );
}

export default HomeContent;
