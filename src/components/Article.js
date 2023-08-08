import React from "react";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";

function Article() {
  return (
    <main>
      <article>
        <time dateTime="2020-11-11" className="date">
          11-11-20
        </time>
        <h1>On the Street in Brookyn</h1>
        <img src={Image1} alt="img" />
        <p>
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          nunc euismod, tincidunt tortor sed, aliquet ipsum. Fusce euismod,
          lorem ut tincidunt tincidunt, mauris ex lacinia nisi, id lacinia nisl
          nunc vitae ligula. Nullam id mauris nec nisl congue ultrices. Sed
          auctor, nunc ac lacinia rutrum, erat urna consequat lectus, id aliquam
          mauris ex id nunc. Sed vel mauris id enim lacinia lacinia. Nulla
          facilisi. Sed auctor, nunc ac lacinia rutrum, erat urna consequat
          lectus, id aliquam mauris ex id nunc. Sed vel mauris id enim lacinia
          lacinia. Nulla facilisi.
        </p>
        <a href="#" className="continue">
          Continue...
        </a>
      </article>

      <article>
        <time dateTime="2020-11-11" className="date">
          11-11-20
        </time>
        <h1>Vintage in Vogue</h1>
        <img src={Image2} alt="img" />
        <p>
          Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          nunc euismod, tincidunt tortor sed, aliquet ipsum. Fusce euismod,
          lorem ut tincidunt tincidunt, mauris ex lacinia nisi, id lacinia nisl
          nunc vitae ligula. Nullam id mauris nec nisl congue ultrices. Sed
          auctor, nunc ac lacinia rutrum, erat urna consequat lectus, id aliquam
          mauris ex id nunc. Sed vel mauris id enim lacinia lacinia. Nulla
          facilisi. Sed auctor, nunc ac lacinia rutrum, erat urna consequat
          lectus, id aliquam mauris ex id nunc. Sed vel mauris id enim lacinia
          lacinia. Nulla facilisi.
        </p>
        <a href="#" className="continue">
          Continue...
        </a>
      </article>
    </main>
  );
}

export default Article;
