import tourGuide from '../../../assets/tour-guide 1.png';
import travelling from '../../../assets/travelling 1.png';
import hands from '../../../assets/hands 1.png';
import medical from '../../../assets/medical-team 1.png';
const Category = () => {
  return (
    <div>
      <h2>CATEGORY</h2>
      <h1>We Offer Best Services</h1>

      <div>
        <div>
          <img src={tourGuide} alt="" />
          <h3>Guided Tours</h3>
          <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div>
          <img src={travelling} alt="" />
          <h3>Best Flights Options</h3>
          <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div>
          <img src={hands} alt="" />
          <h3>Religious Tours</h3>
          <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
        <div>
          <img src={medical} alt="" />
          <h3>Medical insurance</h3>
          <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
