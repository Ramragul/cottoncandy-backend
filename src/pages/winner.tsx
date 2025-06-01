// import React from "react";
// import jewelPhoto from '../assets/homePage/jewel.jpeg'

// export const Winner: React.FC = () => {
//   return (
//     <div style={styles.container}>
//       <img 
//         src={jewelPhoto}
//         alt="Winner" 
//         style={styles.image} 
//       />
//       <h2 style={styles.title}>🎉 Congratulations 🎉</h2>
//       <p style={styles.winner}>Winner: <strong>Rajesh Kumar</strong></p>
//       <p style={styles.prize}>Prize: <strong>Smartphone</strong></p>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     padding: "20px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     width: "250px",
//     textAlign: "center" as const,
//   },
//   image: {
//     width: "100%",
//     height: "auto",
//     borderRadius: "8px",
//     marginBottom: "15px",
//   },
//   title: {
//     fontSize: "18px",
//     color: "#d32f2f",
//     marginBottom: "10px",
//   },
//   winner: {
//     fontSize: "16px",
//     color: "#333",
//   },
//   prize: {
//     fontSize: "16px",
//     color: "#ff5722",
//   },
// };

// export default Winner;



// import React from "react";
// import jewelPhoto from "../assets/homePage/jewel.jpeg";

// export const Winner: React.FC = () => {
//   return (
//     <div style={styles.fullScreenContainer}>
//       <div style={styles.container}>
//         <img src={jewelPhoto} alt="Winner" style={styles.image} />
//         <h1 style={styles.title}>🎉 Congratulations, Sanjanna! 🎉</h1>
//         <p style={styles.prizeText}>
//           You've won a <strong>Premium Necklace</strong> in our Diwali Giveaway!
//         </p>
//         <p style={styles.thankYou}>Thank you to everyone who participated! 🎊</p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   fullScreenContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     height: "100vh",
//     background: "linear-gradient(135deg, #ff8a00, #e52e71)",
//     color: "#fff",
//     overflow: "hidden",
//     margin: 0,
//   },
//   container: {
//     textAlign: "center" as const,
//     padding: "20px",
//     borderRadius: "16px",
//     width: "90%",
//     maxWidth: "400px",
//     backgroundColor: "rgba(255, 255, 255, 0.15)",
//     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
//     animation: "fadeIn 1.5s ease-in-out",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "12px",
//     marginBottom: "15px",
//     animation: "zoomIn 1s ease-in-out",
//   },
//   title: {
//     fontSize: "28px",
//     color: "#ffd700",
//     fontWeight: "bold" as const,
//     marginBottom: "10px",
//   },
//   prizeText: {
//     fontSize: "18px",
//     color: "#ffffff",
//     marginBottom: "20px",
//   },
//   thankYou: {
//     fontSize: "16px",
//     color: "#ffecd1",
//   },
//   // Keyframe animations
//   "@keyframes fadeIn": {
//     "0%": { opacity: 0 },
//     "100%": { opacity: 1 },
//   },
//   "@keyframes zoomIn": {
//     "0%": { transform: "scale(0.85)", opacity: 0 },
//     "100%": { transform: "scale(1)", opacity: 1 },
//   },
// };

// export default Winner;


import React from "react";
import jewelPhoto from "../assets/homePage/Jewels.jpeg";

export const Winner: React.FC = () => {
  return (
    <div style={styles.fullScreenContainer}>
      <div style={styles.container}>
        <img src={jewelPhoto} alt="Winner" style={styles.image} />
        <h1 style={styles.title}>🎉 Congratulations, Sanjanna! 🎉</h1>
        <p style={styles.prizeText}>
          You've won a <strong>Premium Necklace</strong> in our Diwali Giveaway!
        </p>
        <p style={styles.thankYou}>Thank you to everyone who participated! 🎊</p>
        <p style={styles.encouragement}>
          Didn't win this time? Don’t worry! More chances to win in upcoming events—stay tuned! 💖
        </p>
      </div>
    </div>
  );
};

const styles = {
  fullScreenContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #ffccd5, #ff9eb6)",
    color: "#fff",
    overflow: "hidden",
    margin: 0,
  },
  container: {
    textAlign: "center" as const,
    padding: "20px",
    borderRadius: "16px",
    width: "90%",
    maxWidth: "400px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 1.5s ease-in-out",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "15px",
    animation: "zoomIn 1s ease-in-out",
  },
  title: {
    fontSize: "28px",
    color: "#ff69b4",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  prizeText: {
    fontSize: "18px",
    color: "#000000",

    marginBottom: "15px",
  },
  thankYou: {
    fontSize: "16px",
    color: "#000000",
    fontWeight: "bold" as const,
    marginBottom: "10px",
  },
  encouragement: {
    fontSize: "16px",
    color: "#000000",
    fontStyle: "italic" as const,
  },
  // Keyframe animations
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  "@keyframes zoomIn": {
    "0%": { transform: "scale(0.85)", opacity: 0 },
    "100%": { transform: "scale(1)", opacity: 1 },
  },
};

export default Winner;
