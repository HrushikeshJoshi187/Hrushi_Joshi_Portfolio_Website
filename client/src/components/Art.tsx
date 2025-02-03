import image from "../assets/ask_your_crush_out_online/customize_section.png";

import "./Art.css";

const Art = (): JSX.Element => {
  return (
    <div className="art">
      <img src={image} alt="Art" className="art_image_0" />

      <img src={image} alt="Art" className="art_image_1" />
    </div>
  );
};

export default Art;
