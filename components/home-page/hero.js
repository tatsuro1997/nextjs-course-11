import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I7m Tatsuro</h1>
      <p>
        i blog about web development - especially fronteend frameworls lole
        Angulat or React.
      </p>
    </section>
  );
}

export default Hero;
