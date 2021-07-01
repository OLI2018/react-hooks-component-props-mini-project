import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

export default Header;

// ================= // Using Props Destructuring // =================== //

// import React from "react";

// function Header({ name }) {
//   return (
//     <header>
//       <h1>{name}</h1>
//     </header>
//   );
// }

// export default Header;





