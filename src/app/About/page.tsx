import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import backgroundImg from "../../../public/About/bg.jpg";
import dp from "../../../public/About/da.png"
import dp2 from "../../../public/About/me.png"
import Footer from '../footer';
import Header from "../header";
import styles from './About.module.css'; 


const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.background}>
        <Image
          src={backgroundImg}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.content}>
      
        <div className={styles.contentWrapper}>
          <div className={styles.teamInfo}>
          </div>
          <div className={styles.images}>
            <div className={styles.desc}>
            <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
            <div className={styles.desch}>Introducing Team Psyches groundbreaking platform, where individuals have the freedom to unleash their creativity and intellect! Imagine a space where your ideas, articles, and research papers are not just shared but immortalized on the blockchain, revolutionizing the very essence of content publication.</div>
            <p>Welcome to the Future of Knowledge Sharing</p>

    <p><strong>Unlocking Decentralization:</strong> In a world where centralized control stifles innovation, our platform empowers you to take the reins. By leveraging blockchain technology, we redefine content distribution, breaking down the barriers to access and putting you in control.  🚀</p>

    <p><strong>Fostering Ideas:</strong> Got an innovative idea that could change the world? Publish it here, and it becomes a part of the blockchains immutable ledger. No more worries about plagiarism or content theft—your intellectual property is secured by the power of decentralization. 💡</p>

    <p><strong>Articles that Stand the Test of Time:</strong> Your articles arent just stories; theyre legacies. When you publish with us, your work is etched into the blockchain, ensuring that it persists for generations to come, accessible to all who seek knowledge. 📚</p>

    <p><strong>Empowering Research:</strong> Researchers, unite! Share your groundbreaking discoveries with the world and establish a trail of credibility. Our blockchain-based system adds an unprecedented layer of trust to your research papers.📚</p>

    <p><strong>Global Accessibility:</strong> We believe that knowledge knows no borders. By decentralizing content publication, we break down geographic barriers and make valuable information accessible to anyone, anywhere. 🌍</p>

    <p><strong>Security Beyond Compare:</strong> The blockchains security features safeguard your content from tampering, censorship, and unauthorized alterations, ensuring that your work retains its integrity. 🛡️</p>

    <p>Join us at Team Psyche, and together, lets liberate knowledge from the constraints of centralization. Our platform is more than just a place to publish—its a catalyst for change, a monument to your brilliance, and a gateway to a decentralized world of ideas.</p>

    <p>Welcome to the future. Welcome to the blockchain-powered revolution in content publication. Welcome to Almera.🛡️</p>

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default About;