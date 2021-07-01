import React from "react";

function About(props) {
    
  return (
    <aside>
      <img src={props.image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

About.defaultProps = {
    image : "https://via.placeholder.com/215"
}

export default About;


// ================= // Using Props Destructuring // =================== //

// import React from "react";

// function About({ about, image = "https://via.placeholder.com/215" }) {
//   return (
//     <aside>
//       <img src={image} alt="blog logo" />
//       <p>{about}</p>
//     </aside>
//   );
// }

// export default About;