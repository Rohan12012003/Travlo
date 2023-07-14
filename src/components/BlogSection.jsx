import React from "react";
import BlogTab from "./BlogTab";

function BlogSection() {
  const indianNames = [
    "Aarav Patel",
    "Aditi Sharma",
    "Arjun Gupta",
    "Avani Reddy",
    "Devika Desai",
    "Ishaan Choudhary"
  ];

  const holidayExperiences = [
    "Celebrated Holi with great enthusiasm, enjoying the vibrant colors and splashing water with friends and family.It was a great tour with family and friends.",
    "The beach holiday offered sun-kissed shores, refreshing waves, and blissful relaxation, creating cherished memories of golden sands and turquoise waters.",
    "The mountain holiday provided breathtaking vistas, serene trails, and a thrilling adventure, immersing us in the beauty of nature's grandeur and tranquility.",
    "Seeing elephants up close brought a sense of awe and wonder, as these majestic creatures captivated our hearts with their gentle presence and grace.",
    "Riding a boat in Kerala's backwaters gifted us with a serene and enchanting experience, gliding through picturesque canals surrounded by lush greenery and peaceful tranquility.",
    "The Andaman tour unfolded a tropical paradise, revealing pristine white beaches, crystal-clear waters, and a mesmerizing underwater world, leaving us in awe of nature's wonders."
  ];

  const imageUrls = [
    "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/02/shutterstock-133962347-kas-110517-People-throw-colors-to-each-other-during-the-Holi-celebration-at-Krishna-temple-in-India.jpg",
    "https://c0.wallpaperflare.com/preview/692/39/689/human-father-son-man.jpg",
    "https://plus.unsplash.com/premium_photo-1667516463896-e385a24d1760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbW91bnRhaW5zfGVufDB8fDB8fHww&w=1000&q=80",
    "https://www.onthegotours.com/repository/Elephants-at-Minneriya-National-Park--On-The-Go-Tours-330111483786828_crop_610_410.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4m0KO_PD33Kdz4PWohpqteW7Ra_x_3c2mQ&usqp=CAU",
    "https://e0.pxfuel.com/wallpapers/295/950/desktop-wallpaper-maldives-indian-ocean-summer-coast-beach-paradise-for-with-resolution-high-quality.jpg"
  ];

  return (
    <div className="blog-section row">
      <div className="blog-section-inner">
        {indianNames.map((name, index) => (
          <BlogTab
            key={index}
            imageurl={imageUrls[index]}
            name={name}
            content={holidayExperiences[index]}
            rating={Math.floor(Math.random() * 5) + 1}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
