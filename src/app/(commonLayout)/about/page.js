import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-xl text-center mx-2">About Page</h1>
      <p className={styles.text_color}>Custom styles CSS</p>
    </div>
  );
};

export default AboutPage;
