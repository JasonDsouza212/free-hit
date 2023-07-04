import React from 'react'
import '../styles/freehit.css'
import banner1 from '../assets/designer-desk-2.webp'
import banner2 from '../assets/business-presentation-1.webp'

const FreeHit = () => {
  return (
    <div className="container1">
      {/* What Box start */}
      <div className="box1">
        <div className="startbox">
          <div className="contentSection">
            <h1 id="heading1">Free Hit: Unleash the Power of Free Tools!</h1>
            <p id="para1">
              Welcome to Free-Hit! An exceptional application that opens the
              doors to a world of incredible free tools. Created by the
              brilliant open-source community, Free-Hit offers a vast collection
              of resources designed to enhance your daily life and boost your
              productivity.
            </p>
          </div>
          <img src={banner1} alt="Image 1" id="img1" />
        </div>
      </div>
      {/* What Box end */}

      {/* Why Box start */}
      <div className="box1">
        <div className="startbox">
          <img src={banner2} alt="Image 1" id="img2" />
          <div className="contentSection">
            <h1 id="heading2">Why Free-Hit: Life Deserves a Power-Up!</h1>
            <p id="para2">
              In our fast-paced world, having access to the right tools can make
              a huge difference. But finding free and valuable tools can be a
              challenge. That's where Free-Hit comes in. It's a one-stop
              solution for all your tool needs, whether you're a student,
              professional, artist, or simply someone seeking useful
              applications.
            </p>
          </div>
        </div>
      </div>
      {/*Why Box end */}

      {/* Feature Box start */}
      <div className="FeaturesBox" style={{ overflowX: 'auto' }}>
        <h1>Free-Hit's Extraordinary Features!</h1>
        <div className="features-container">
          <div className="feature-card">
            <h3>Categories</h3>
            <p>
              Free-Hit provides a range of categories to help you find tools
              that match your needs. From productivity to education, design,
              development, and more, each category is carefully curated to offer
              the most useful tools in that field.
            </p>
          </div>
          <div className="feature-card">
            <h3>Filters</h3>
            <p>
              Free-Hit makes your search process easier with intuitive filters.
              These filters help you refine your search and find tools that suit
              your specific requirements.
            </p>
          </div>
          <div className="feature-card">
            <h3>Multiple Filters</h3>
            <p>
              Free-Hit understands that your needs may not fit into a single
              category or filter. That's why you can select multiple filters at
              once. By combining different filters, you can discover tools that
              cater to your unique needs, ensuring a personalized experience.
            </p>
          </div>
          <div className="feature-card">
            <h3>Search Functionality</h3>
            <p>
              Free-Hit offers a powerful search feature. You can search for
              tools by name, keyword, or functionality. Get instant results that
              match your search query, saving you time and effort.
            </p>
          </div>
          <div className="feature-card">
            <h3>User Reviews and Ratings</h3>
            <p>
              Free-Hit includes user reviews and ratings to assist you in making
              informed decisions. Read about the experiences of other users who
              have used a particular tool, gaining valuable insights into its
              usability and effectiveness.
            </p>
          </div>
        </div>
      </div>
      {/* Feature Box end*/}
    </div>
  )
}

export default FreeHit
