import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>nushReads</h2>
            <p className='fs-17'>Welcome to nushReads, the ultimate app for book lovers! Whether you're a casual reader, an avid bookworm, or a professional researcher, nushReads transforms your reading experience into a seamless and enriching journey.

Key Features:

Vast Library: Access millions of books from various genres including fiction, non-fiction, academic texts, and more. Discover new releases, bestsellers, and timeless classics with just a few taps.

Personalized Recommendations: Enjoy tailored book suggestions based on your reading habits, favorite genres, and authors. The more you read, the better our recommendations get.

Smart Bookshelves: Organize your collection effortlessly with customizable bookshelves. Sort your books by genre, author, or reading status, and create themed shelves for special collections.
Reading Goals & Stats: Set personal reading goals and track your progress with detailed statistics. See how many books you've read, pages turned, and time spent reading.


Cross-Platform Sync: Start reading on your phone, continue on your tablet, and finish on your e-reader. nushReads syncs your library and reading progress across all your devices.

</p>

<p className='fs-17'>Why nushReads?

nushReads is designed to enhance every aspect of your reading life. With its user-friendly interface, powerful features, and vibrant community, it’s more than just an app—it’s a complete reading ecosystem. Whether you’re diving into the latest thriller, studying for exams, or exploring new genres, nushReads makes it easy, enjoyable, and incredibly convenient.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
