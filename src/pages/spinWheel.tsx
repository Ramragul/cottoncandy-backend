// Version 1 


// import React, { useState, useRef } from 'react';
// import { Box, Text } from '@chakra-ui/react';
// import { useAuth } from '../contexts/AuthContext';

// const prizes = [
//     'AD Ring worth ₹700', 
//     'AD Choker worth ₹15,000', 
//     'AD Necklace worth ₹1,299', 
//     'AD Bangles worth ₹1,500', 
//     'Better Luck Next Time'
// ];

// const prizeCount = prizes.length;


// export const SpinWheel: React.FC = () => {
//     const { authState, logout } = useAuth();
   
//     const [isSpinning, setIsSpinning] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [winningPrize, setWinningPrize] = useState('');
//     const [isRevealing, setIsRevealing] = useState(false);
//     const [revealPrize, setRevealPrize] = useState('');
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     const playSound = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     };

//     const stopSound = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     };

//     const handleSpin = () => {
//         if (isSpinning) return;

//         const spins = 5; // Number of full rotations
//         const prizeDegree = 360 / prizeCount;
//         const randomIndex = Math.floor(Math.random() * prizeCount);
//         const randomDegree = randomIndex * prizeDegree;
//         const totalRotation = 360 * spins + randomDegree; 

//         setIsSpinning(true);
//         setIsRevealing(false);
//         setWinningPrize('');
//         setRevealPrize('');

//         // Play the spinning sound
//         playSound();

//         let startTime: number;
//         const duration = 3000; // Spin duration in ms

//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const elapsed = time - startTime;

//             let progress = elapsed / duration;
//             if (progress > 1) progress = 1;

//             // Ease-out effect for more realistic stopping
//             const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

//             const currentRotation = totalRotation * easeOut(progress);
//             setRotation(currentRotation);

//             if (elapsed < duration) {
//                 requestAnimationFrame(animate);
//             } else {
//                 const finalRotation = currentRotation % 360;
//                 setRotation(finalRotation);
//                 setIsSpinning(false);
//                 stopSound(); // Stop the sound after the spin ends

//                 // Calculate the winning prize index based on the 90-degree position
//                 const adjustedRotation = (finalRotation + 90) % 360;
//                 const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
//                 setWinningPrize(prizes[calculatedIndex]);

//                 // Trigger reveal animation
//                 setIsRevealing(true);
//                 setRevealPrize(prizes[calculatedIndex]);
//             }
//         };

//         requestAnimationFrame(animate);
//     };

//     return (
//         <>
//         {authState.isAuthenticated ? (
//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             height="100vh"
//             backgroundColor="#f0f0f0"
//             padding="10px"
//             boxSizing="border-box"
//         >
//             <Box 
//                 position="relative" 
//                 width="80vw" 
//                 height="80vw"
//                 maxWidth="400px"
//                 maxHeight="400px"
//             >
//                 <Box
//                     width="100%"
//                     height="100%"
//                     borderRadius="50%"
//                     background="conic-gradient(
//                         #FFDDC1 0% 20%, 
//                         #C1FFD8 20% 40%, 
//                         #C1E4FF 40% 60%, 
//                         #F0C1FF 60% 80%, 
//                         #FFDCB0 80% 100%)"
//                     border="4px solid #000"
//                     transform={`rotate(${rotation}deg)`}
//                     transition="transform 0.1s ease"
//                     position="absolute"
//                     top="0"
//                     left="0"
//                     zIndex="1"
//                 />
//                 {isRevealing && (
//                     <Box
//                         position="absolute"
//                         top="50%"
//                         left="50%"
//                         transform="translate(-50%, -50%)"
//                         width="70%"
//                         height="70%"
//                         borderRadius="50%"
//                         backgroundColor="white"
//                         display="flex"
//                         alignItems="center"
//                         justifyContent="center"
//                         boxShadow="0 0 25px rgba(0, 255, 0, 0.7)"
//                         zIndex="2"
//                         overflow="hidden"
//                     >
//                         <Box
//                             width="100%"
//                             height="100%"
//                             borderRadius="50%"
//                             background="radial-gradient(circle, #ffeb3b, #f0f0f0)"
//                             display="flex"
//                             alignItems="center"
//                             justifyContent="center"
//                             position="absolute"
//                             top="0"
//                             left="0"
//                             transform="scale(1.1)"
//                         />
//                         <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="black" zIndex="3">
//                             {revealPrize}
//                         </Text>
//                     </Box>
//                 )}
//             </Box>
//             <Box mt="20px" display="flex" flexDirection="column" alignItems="center">
//                 <button
//                     onClick={handleSpin}
//                     style={{
//                         marginTop: '20px',
//                         padding: '12px 24px',
//                         fontSize: '18px',
//                         color: '#fff',
//                         backgroundColor: '#f7b32b',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                         zIndex: '3',
//                         textAlign: 'center',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}
//                     disabled={isSpinning}
//                 >
//                     Check Your Luck
//                 </button>
//             </Box>
//             <audio ref={audioRef} src="/spinning-sound.mp3" />
//         </Box> ) : (<Text>Please Login / Register to win Prizes</Text>)
        
//                   }  
//                   </>
//                   );
    
// };

// export default SpinWheel;



// Version 2 : Version 1 is working ,this is design enhancment 


// import React, { useState, useRef } from 'react';
// import { Box, Text, keyframes, useBreakpointValue } from '@chakra-ui/react';
// import { useAuth } from '../contexts/AuthContext';

// // Prize list
// const prizes = [
//     'Congrats You have Entered into a Lucky Draw', 
//     'Better Luck Next Time'
// ];

// const prizeCount = prizes.length;

// // Keyframes for animations
// const revealAnimation = keyframes`
//     0% { transform: scale(0); opacity: 0; }
//     50% { transform: scale(1.1); opacity: 1; }
//     100% { transform: scale(1); opacity: 1; }
// `;

// const messageAnimation = keyframes`
//     0% { opacity: 0; transform: translateY(20px); }
//     100% { opacity: 1; transform: translateY(0); }
// `;

// export const SpinWheel: React.FC = () => {
//     const { authState } = useAuth();
   
//     const [isSpinning, setIsSpinning] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [winningPrize, setWinningPrize] = useState('');
//     const [isRevealing, setIsRevealing] = useState(false);
//     const [revealPrize, setRevealPrize] = useState('');
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     const playSound = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     };

//     const stopSound = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     };

//     const handleSpin = () => {
//         if (isSpinning) return;

//         const spins = 5; // Number of full rotations
//         const prizeDegree = 360 / prizeCount;
//         const randomIndex = Math.floor(Math.random() * prizeCount);
//         const randomDegree = randomIndex * prizeDegree;
//         const totalRotation = 360 * spins + randomDegree; 

//         setIsSpinning(true);
//         setIsRevealing(false);
//         setWinningPrize('');
//         setRevealPrize('');

//         // Play the spinning sound
//         playSound();

//         let startTime: number;
//         const duration = 3000; // Spin duration in ms

//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const elapsed = time - startTime;

//             let progress = elapsed / duration;
//             if (progress > 1) progress = 1;

//             // Ease-out effect for more realistic stopping
//             const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

//             const currentRotation = totalRotation * easeOut(progress);
//             setRotation(currentRotation);

//             if (elapsed < duration) {
//                 requestAnimationFrame(animate);
//             } else {
//                 const finalRotation = currentRotation % 360;
//                 setRotation(finalRotation);
//                 setIsSpinning(false);
//                 stopSound(); // Stop the sound after the spin ends

//                 // Calculate the winning prize index based on the 90-degree position
//                 const adjustedRotation = (finalRotation + 90) % 360;
//                 const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
//                 setWinningPrize(prizes[calculatedIndex]);

//                 // Trigger reveal animation
//                 setIsRevealing(true);
//                 setRevealPrize(prizes[calculatedIndex]);
//             }
//         };

//         requestAnimationFrame(animate);
//     };

//     return (
//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             height="100vh"
//             backgroundColor={authState.isAuthenticated ? "#f0f8ff" : "#f0f0f0"}
//             padding="10px"
//             boxSizing="border-box"
//             animation={authState.isAuthenticated ? `${messageAnimation} 2s ease-in-out` : 'none'}
//         >
//             {authState.isAuthenticated ? (
//                 <>
//                     <Box 
//                         position="relative" 
//                         width="80vw" 
//                         height="80vw"
//                         maxWidth="400px"
//                         maxHeight="400px"
//                     >
//                         <Box
//                             width="100%"
//                             height="100%"
//                             borderRadius="50%"
//                             background="conic-gradient(
//                                 #FFDDC1 0% 20%, 
//                                 #C1FFD8 20% 40%, 
//                                 #C1E4FF 40% 60%, 
//                                 #F0C1FF 60% 80%, 
//                                 #FFDCB0 80% 100%)"
//                             border="4px solid #000"
//                             transform={`rotate(${rotation}deg)`}
//                             transition="transform 0.1s ease"
//                             position="absolute"
//                             top="0"
//                             left="0"
//                             zIndex="1"
//                         />
//                         {isRevealing && (
//                             <Box
//                                 position="absolute"
//                                 top="50%"
//                                 left="50%"
//                                 transform="translate(-50%, -50%)"
//                                 width="70%"
//                                 height="70%"
//                                 borderRadius="50%"
//                                 backgroundColor="white"
//                                 display="flex"
//                                 alignItems="center"
//                                 justifyContent="center"
//                                 boxShadow="0 0 25px rgba(0, 255, 0, 0.7)"
//                                 zIndex="2"
//                                 overflow="hidden"
//                                 animation={`${revealAnimation} 1s ease-in-out`}
//                             >
//                                 <Box
//                                     width="100%"
//                                     height="100%"
//                                     borderRadius="50%"
//                                     background="radial-gradient(circle, #ffeb3b, #f0f0f0)"
//                                     display="flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     position="absolute"
//                                     top="0"
//                                     left="0"
//                                     transform="scale(1.1)"
//                                 />
//                                 <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="black" zIndex="3">
//                                     {revealPrize}
//                                 </Text>
//                             </Box>
//                         )}
//                     </Box>
//                     <Box mt="20px" display="flex" flexDirection="column" alignItems="center">
//                         <button
//                             onClick={handleSpin}
//                             style={{
//                                 marginTop: '20px',
//                                 padding: '12px 24px',
//                                 fontSize: '18px',
//                                 color: '#fff',
//                                 backgroundColor: '#f7b32b',
//                                 border: 'none',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                                 zIndex: '3',
//                                 textAlign: 'center',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                             }}
//                             disabled={isSpinning}
//                         >
//                             Check Your Luck
//                         </button>
//                     </Box>
//                     <audio ref={audioRef} src="/spinning-sound.mp3" />
//                     <Box
//                         mt="40px"
//                         padding="20px"
//                         backgroundColor="#fff"
//                         borderRadius="md"
//                         boxShadow="lg"
//                         textAlign="center"
//                         width="80vw"
//                         maxWidth="600px"
//                     >
//                         <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb="10px">
//                             🎉 Win Exciting Prizes! 🎉
//                         </Text>
//                         <Text fontSize="md" mb="10px">
//                             You have a chance to win incredible prizes worth up to ₹1,00,000!
//                         </Text>
//                         <Text fontSize="md" fontWeight="bold" color="#ff4081">
//                             Premium Lehengas, American Diamond Chokers, Rings, Bangles, and Necklaces await you!
//                         </Text>
//                     </Box>
//                 </>
//             ) : (
//                 <Box
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="center"
//                     justifyContent="center"
//                     height="100vh"
//                     backgroundColor="#ffebee"
//                     padding="20px"
//                     borderRadius="md"
//                     boxShadow="lg"
//                 >
//                     <Text fontSize="2xl" fontWeight="bold" color="#d32f2f" mb="20px" animation={`${messageAnimation} 2s ease-in-out`}>
//                         🎉 Win Amazing Prizes! 🎉
//                     </Text>
//                     <Text fontSize="lg" mb="20px">
//                         To spin the wheel and win prizes worth up to ₹1,00,000, please log in or register!
//                     </Text>
//                     <Text fontSize="md" color="#d32f2f">
//                         Premium Lehengas, American Diamond Jewelry, and more await you!
//                     </Text>
//                     <Text fontSize="md" color="#d32f2f">
//                         Premium Lehengas, American Diamond Jewelry, and more await you!
//                     </Text>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default SpinWheel;


// Version 3 : 2 is working version , this is just trial and error enhancments

// import React, { useState, useRef } from 'react';
// import { Box, Text, keyframes } from '@chakra-ui/react';
// import { useAuth } from '../contexts/AuthContext';

// // Prize list
// const prizes = [
//     'Better Luck Next Time',
//     'Congrats You have Entered into Lucky Draw'
// ];

// const prizeCount = prizes.length;

// // Keyframes for animations
// const revealAnimation = keyframes`
//     0% { transform: scale(0); opacity: 0; }
//     50% { transform: scale(1.1); opacity: 1; }
//     100% { transform: scale(1); opacity: 1; }
// `;

// const messageAnimation = keyframes`
//     0% { opacity: 0; transform: translateY(20px); }
//     100% { opacity: 1; transform: translateY(0); }
// `;

// export const SpinWheel: React.FC = () => {
//     const { authState } = useAuth();

//     const [isSpinning, setIsSpinning] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [winningPrize, setWinningPrize] = useState('');
//     const [isRevealing, setIsRevealing] = useState(false);
//     const [revealPrize, setRevealPrize] = useState('');
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     const playSound = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     };

//     const stopSound = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     };

//     const handleSpin = () => {
//         if (isSpinning) return;

//         const spins = 5; // Number of full rotations
//         const prizeDegree = 360 / prizeCount;
//         const randomIndex = Math.floor(Math.random() * prizeCount);
//         const randomDegree = randomIndex * prizeDegree;
//         const totalRotation = 360 * spins + randomDegree;

//         setIsSpinning(true);
//         setIsRevealing(false);
//         setWinningPrize('');
//         setRevealPrize('');

//         // Play the spinning sound
//         playSound();

//         let startTime: number;
//         const duration = 3000; // Spin duration in ms

//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const elapsed = time - startTime;

//             let progress = elapsed / duration;
//             if (progress > 1) progress = 1;

//             // Ease-out effect for more realistic stopping
//             const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

//             const currentRotation = totalRotation * easeOut(progress);
//             setRotation(currentRotation);

//             if (elapsed < duration) {
//                 requestAnimationFrame(animate);
//             } else {
//                 const finalRotation = currentRotation % 360;
//                 setRotation(finalRotation);
//                 setIsSpinning(false);
//                 stopSound(); // Stop the sound after the spin ends

//                 // Calculate the winning prize index based on the 90-degree position
//                 const adjustedRotation = (finalRotation + 90) % 360;
//                 const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
//                 setWinningPrize(prizes[calculatedIndex]);

//                 // Trigger reveal animation
//                 setIsRevealing(true);
//                 setRevealPrize(prizes[calculatedIndex]);
//             }
//         };

//         requestAnimationFrame(animate);
//     };

//     return (
//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             height="100vh"
//             backgroundColor={authState.isAuthenticated ? "#f0f8ff" : "#f0f0f0"}
//             padding="10px"
//             boxSizing="border-box"
//             animation={authState.isAuthenticated ? `${messageAnimation} 2s ease-in-out` : 'none'}
//         >
//             {/* Lucky Draw Announcement Banner */}
//             <Box
//                 width="100%"
//                 backgroundColor="#ff5722"
//                 padding="10px"
//                 textAlign="center"
//                 color="#fff"
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 fontWeight="bold"
//                 marginBottom="20px"
//                 borderRadius="md"
//                 animation={`${messageAnimation} 2s ease-in-out`}
//             >
//                 🎉 Lucky Draw Result Announcement on August 31 at 6pm! Stay tuned! 🎉
//             </Box>

//             {authState.isAuthenticated ? (
//                 <>
//                     <Box 
//                         position="relative" 
//                         width="80vw" 
//                         height="80vw"
//                         maxWidth="400px"
//                         maxHeight="400px"
//                     >
//                         <Box
//                             width="100%"
//                             height="100%"
//                             borderRadius="50%"
//                             background="conic-gradient(
//                                 #FFDDC1 0% 20%, 
//                                 #C1FFD8 20% 40%, 
//                                 #C1E4FF 40% 60%, 
//                                 #F0C1FF 60% 80%, 
//                                 #FFDCB0 80% 100%)"
//                             border="4px solid #000"
//                             transform={`rotate(${rotation}deg)`}
//                             transition="transform 0.1s ease"
//                             position="absolute"
//                             top="0"
//                             left="0"
//                             zIndex="1"
//                         />
//                         {isRevealing && (
//                             <Box
//                                 position="absolute"
//                                 top="50%"
//                                 left="50%"
//                                 transform="translate(-50%, -50%)"
//                                 width="70%"
//                                 height="70%"
//                                 borderRadius="50%"
//                                 backgroundColor="white"
//                                 display="flex"
//                                 alignItems="center"
//                                 justifyContent="center"
//                                 boxShadow="0 0 25px rgba(0, 255, 0, 0.7)"
//                                 zIndex="2"
//                                 overflow="hidden"
//                                 animation={`${revealAnimation} 1s ease-in-out`}
//                             >
//                                 <Box
//                                     width="100%"
//                                     height="100%"
//                                     borderRadius="50%"
//                                     background="radial-gradient(circle, #ffeb3b, #f0f0f0)"
//                                     display="flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     position="absolute"
//                                     top="0"
//                                     left="0"
//                                     transform="scale(1.1)"
//                                 />
//                                 <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="black" zIndex="3">
//                                     {revealPrize}
//                                 </Text>
//                             </Box>
//                         )}
//                     </Box>
//                     <Box mt="20px" display="flex" flexDirection="column" alignItems="center">
//                         <button
//                             onClick={handleSpin}
//                             style={{
//                                 marginTop: '20px',
//                                 padding: '12px 24px',
//                                 fontSize: '18px',
//                                 color: '#fff',
//                                 backgroundColor: '#f7b32b',
//                                 border: 'none',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                                 zIndex: '3',
//                                 textAlign: 'center',
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                             }}
//                             disabled={isSpinning}
//                         >
//                             Check Your Luck
//                         </button>
//                     </Box>
//                     <audio ref={audioRef} src="/spinning-sound.mp3" />
//                     <Box
//                         mt="40px"
//                         padding="20px"
//                         backgroundColor="#fff"
//                         borderRadius="md"
//                         boxShadow="lg"
//                         textAlign="center"
//                         width="80vw"
//                         maxWidth="600px"
//                     >
//                         <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb="10px">
//                             🎉 Win Exciting Prizes! 🎉
//                         </Text>
//                         <Text fontSize="md" mb="10px">
//                             You have a chance to win incredible prizes worth up to ₹1,00,000!
//                         </Text>
//                         <Text fontSize="md" fontWeight="bold" color="#ff4081">
//                             Premium Lehengas, American Diamond Chokers, Rings, Bangles, and Necklaces await you!
//                         </Text>
//                     </Box>
//                 </>
//             ) : (
//                 <Box
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="center"
//                     justifyContent="center"
//                     height="100vh"
//                     backgroundColor="#ffebee"
//                     padding="20px"
//                     borderRadius="md"
//                     boxShadow="lg"
//                 >
//                     <Text fontSize="2xl" fontWeight="bold" color="#d32f2f" mb="20px" animation={`${messageAnimation} 2s ease-in-out`}>
//                         🎉 Win Amazing Prizes! 🎉
//                     </Text>
//                     <Text fontSize="lg" mb="10px" textAlign="center">
//                         Log in now to participate in the Lucky Draw and stand a chance to win exciting prizes!
//                     </Text>
//                     <Text fontSize="md" textAlign="center">
//                         AD jewelry, Premium Lehengas, and more await you!
//                     </Text>
//                 </Box>
//             )}
//         </Box>
//     );
// };

// export default SpinWheel;

// Version 4 : enhancement to version 3, db addition


// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Text, keyframes } from '@chakra-ui/react';
// import { useAuth } from '../contexts/AuthContext';
// import usePostData from '../hooks/usePostData'; // Import the usePostData hook

// // Prize list
// const prizes = [
//     'Better Luck Next Time',
//     'Congrats You have Entered into Lucky Draw'
// ];

// const prizeCount = prizes.length;

// // Keyframes for animations
// const revealAnimation = keyframes`
//     0% { transform: scale(0); opacity: 0; }
//     50% { transform: scale(1.1); opacity: 1; }
//     100% { transform: scale(1); opacity: 1; }
// `;

// const messageAnimation = keyframes`
//     0% { opacity: 0; transform: translateY(20px); }
//     100% { opacity: 1; transform: translateY(0); }
// `;

// export const SpinWheel: React.FC = () => {
//     const { authState } = useAuth();
//     const [isSpinning, setIsSpinning] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [winningPrize, setWinningPrize] = useState('');
//     const [isRevealing, setIsRevealing] = useState(false);
//     const [revealPrize, setRevealPrize] = useState('');
//     const audioRef = useRef<HTMLAudioElement | null>(null);

//     // Using the usePostData hook
//     const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/luckydraw');

//     const playSound = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     };

//     const stopSound = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     };

//     const handleSpin = () => {
//         if (isSpinning) return;

//         const spins = 5; // Number of full rotations
//         const prizeDegree = 360 / prizeCount;
//         const randomIndex = Math.floor(Math.random() * prizeCount);
//         const randomDegree = randomIndex * prizeDegree;
//         const totalRotation = 360 * spins + randomDegree;

//         setIsSpinning(true);
//         setIsRevealing(false);
//         setWinningPrize('');
//         setRevealPrize('');

//         // Play the spinning sound
//         playSound();

//         let startTime: number;
//         const duration = 3000; // Spin duration in ms

//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const elapsed = time - startTime;

//             let progress = elapsed / duration;
//             if (progress > 1) progress = 1;

//             // Ease-out effect for more realistic stopping
//             const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

//             const currentRotation = totalRotation * easeOut(progress);
//             setRotation(currentRotation);

//             if (elapsed < duration) {
//                 requestAnimationFrame(animate);
//             } else {
//                 const finalRotation = currentRotation % 360;
//                 setRotation(finalRotation);
//                 setIsSpinning(false);
//                 stopSound(); // Stop the sound after the spin ends

//                 // Calculate the winning prize index based on the 90-degree position
//                 const adjustedRotation = (finalRotation + 90) % 360;
//                 const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
//                 const wonPrize = prizes[calculatedIndex];
//                 setWinningPrize(wonPrize);

//                 // Trigger reveal animation
//                 setIsRevealing(true);
//                 setRevealPrize(wonPrize);

//                 // Save spin result to database
//                 const spinData = {
//                     userId: authState.userId, // Get userId from authState
//                     prize: wonPrize,
//                     eventType: 'SpinWheel',
//                     spinDate: new Date().toISOString(), // Current date-time in ISO format
//                 };

//                 postData(spinData); // Use the postData function to send the spin data to the backend
//             }
//         };

//         requestAnimationFrame(animate);
//     };

//     useEffect(() => {
//         if (responseData) {
//             console.log('Spin data saved successfully:', responseData);
//         }
//         if (error) {
//             console.error('Failed to save spin data:', error);
//         }
//     }, [responseData, error]);

//     return (
//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             height="100vh"
//             backgroundColor={authState.isAuthenticated ? "#f0f8ff" : "#f0f0f0"}
//             padding="10px"
//             boxSizing="border-box"
//             animation={authState.isAuthenticated ? `${messageAnimation} 2s ease-in-out` : 'none'}
//         >
//             {/* Lucky Draw Announcement Banner */}
//             <Box
//                 width="100%"
//                 backgroundColor="#ff5722"
//                 padding="10px"
//                 textAlign="center"
//                 color="#fff"
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 fontWeight="bold"
//                 marginBottom="20px"
//                 borderRadius="md"
//                 animation={`${messageAnimation} 2s ease-in-out`}
//             >
//                 🎉 Lucky Draw Result Announcement on August 31 at 6pm! Stay tuned! 🎉
//             </Box>

//             {/* Promotional Message Section */}
//             <Box
//                 width="100%"
//                 backgroundColor="#4caf50"
//                 padding="15px"
//                 textAlign="center"
//                 color="#fff"
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 fontWeight="bold"
//                 marginBottom="20px"
//                 borderRadius="md"
//                 animation={`${messageAnimation} 2s ease-in-out`}
//             >
//                 🎁 You have a chance to win incredible prizes worth up to ₹1,00,000! Premium Lehengas, American Diamond Chokers, Rings, Bangles, and Necklaces await you! 🎁
//             </Box>

//             {authState.isAuthenticated ? (
//                 <>
//                     <Box 
//                         position="relative" 
//                         width="80vw" 
//                         height="80vw"
//                         maxWidth="400px"
//                         maxHeight="400px"
//                     >
//                         <Box
//                             width="100%"
//                             height="100%"
//                             borderRadius="50%"
//                             background="conic-gradient(
//                                 #FFDDC1 0% 20%, 
//                                 #C1FFD8 20% 40%, 
//                                 #C1E4FF 40% 60%, 
//                                 #F0C1FF 60% 80%, 
//                                 #FFDCB0 80% 100%)"
//                             border="4px solid #000"
//                             transform={`rotate(${rotation}deg)`}
//                             transition="transform 0.1s ease"
//                             position="absolute"
//                             top="0"
//                             left="0"
//                             zIndex="1"
//                         />
//                         {isRevealing && (
//                             <Box
//                                 position="absolute"
//                                 top="50%"
//                                 left="50%"
//                                 transform="translate(-50%, -50%)"
//                                 width="70%"
//                                 height="70%"
//                                 borderRadius="50%"
//                                 backgroundColor="white"
//                                 display="flex"
//                                 alignItems="center"
//                                 justifyContent="center"
//                                 boxShadow="0 0 25px rgba(0, 255, 0, 0.7)"
//                                 zIndex="2"
//                                 overflow="hidden"
//                                 animation={`${revealAnimation} 1s ease-in-out`}
//                             >
//                                 <Box
//                                     width="100%"
//                                     height="100%"
//                                     borderRadius="50%"
//                                     background="radial-gradient(circle, #ffeb3b, #f0f0f0)"
//                                     display="flex"
//                                     alignItems="center"
//                                     justifyContent="center"
//                                     position="absolute"
//                                     top="0"
//                                     left="0"
//                                     transform="scale(1.1)"
//                                 />
//                                 <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="black" zIndex="3">
//                                     {revealPrize}
//                                 </Text>
//                             </Box>
//                         )}
//                     </Box>
//                     <Box mt="20px" display="flex" flexDirection="column" alignItems="center">
//                         <button
//                             onClick={handleSpin}
//                             style={{
//                                 marginTop: '20px',
//                                 padding: '12px 24px',
//                                 fontSize: '18px',
//                                 color: '#fff',
//                                 backgroundColor: '#f7b32b',
//                                 border: 'none',
//                                 borderRadius: '5px',
//                                 cursor: 'pointer',
//                                 zIndex: '3',
//                             }}
//                             disabled={isSpinning}
//                         >
//                             {isSpinning ? 'Spinning...' : 'Spin Now'}
//                         </button>
//                         {/* {isLoading && (
//                             <Text mt="10px" fontSize="lg" color="blue">
//                                 Saving your spin result...
//                             </Text>
//                         )}
//                         {error && (
//                             <Text mt="10px" fontSize="lg" color="red">
//                                 Error saving your spin result. Please try again.
//                             </Text>
//                         )} */}
//                         <audio ref={audioRef} src="/spinning-sound.mp3" />
//                     </Box>
//                 </>
//             ) : (
//                 <Text fontSize="xl" color="gray.700" textAlign="center" mt="20px">
//                     Please log in to spin the wheel and participate in our Lucky Draw!
//                 </Text>
//             )}
//         </Box>
//     );
// };



// Version 5 : Working Version 

import React, { useState, useRef, useEffect } from 'react';
import { Box, Text, keyframes, Button } from '@chakra-ui/react';
import { useAuth } from '../contexts/AuthContext';
import usePostData from '../hooks/usePostData'; // Import the usePostData hook
import celebrationAnimationData from '../animations/celebration.json'; // Path to your celebration Lottie animation
import Lottie from 'lottie-react';

// Prize list
const prizes = [
    'Better Luck Next Time',
    'Congrats You have Entered into Lucky Draw'
];

const prizeCount = prizes.length;

// Keyframes for animations
const revealAnimation = keyframes`
    0% { transform: scale(0); opacity: 0; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
`;

const messageAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
`;

// Define a keyframes animation for the box
const prizeMessageAnimation = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
`;

export const SpinWheel: React.FC = () => {
    const { authState } = useAuth();
    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [winningPrize, setWinningPrize] = useState('');
    const [isRevealing, setIsRevealing] = useState(false);
    const [revealPrize, setRevealPrize] = useState('');
    const [showSavingMessage, setShowSavingMessage] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false); // State for celebration animation
    const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const celebrationAudioRef = useRef<HTMLAudioElement | null>(null); // Ref for celebration sound

    // Using the usePostData hook
    const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/luckydraw');

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const stopSound = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const playCelebrationSound = () => {
        if (celebrationAudioRef.current) {
            celebrationAudioRef.current.currentTime = 0;
            celebrationAudioRef.current.play();
        }
    };

    const stopCelebrationSound = () => {
        if (celebrationAudioRef.current) {
            celebrationAudioRef.current.pause();
            celebrationAudioRef.current.currentTime = 0;
        }
    };

    const generateReferenceNumber = () => {
        return 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    };

    const handleSpin = () => {
        if (isSpinning) return;

        const spins = 5; // Number of full rotations
        const prizeDegree = 360 / prizeCount;
        const randomIndex = Math.floor(Math.random() * prizeCount);
        const randomDegree = randomIndex * prizeDegree;
        const totalRotation = 360 * spins + randomDegree;

        setIsSpinning(true);
        setIsRevealing(false);
        setWinningPrize('');
        setRevealPrize('');
        setShowSavingMessage(false);
        setShowCelebration(false); // Reset celebration animation

        // Play the spinning sound
        playSound();

        let startTime: number;
        const duration = 3000; // Spin duration in ms

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const elapsed = time - startTime;

            let progress = elapsed / duration;
            if (progress > 1) progress = 1;

            // Ease-out effect for more realistic stopping
            const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

            const currentRotation = totalRotation * easeOut(progress);
            setRotation(currentRotation);

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            } else {
                const finalRotation = currentRotation % 360;
                setRotation(finalRotation);
                setIsSpinning(false);
                stopSound(); // Stop the sound after the spin ends

                // Calculate the winning prize index based on the 90-degree position
                const adjustedRotation = (finalRotation + 90) % 360;
                const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
                const wonPrize = prizes[calculatedIndex];
                setWinningPrize(wonPrize);

                // Trigger reveal animation
                setIsRevealing(true);
                setRevealPrize(wonPrize);

                // Show saving message for 3 seconds then display reference number if applicable
                setShowSavingMessage(true);
                setTimeout(() => {
                    setShowSavingMessage(false);
                    if (wonPrize !== 'Better Luck Next Time') {
                        playCelebrationSound();
                        const refNumber = generateReferenceNumber();
                        setReferenceNumber(refNumber);
                        setShowCelebration(true); //  celebration animation
                        setTimeout(() => {
                            setShowCelebration(false);
                        }, 3000);

                        // Save spin result to database
                        const spinData = {
                            userId: authState.userId, // Get userId from authState
                            prize: wonPrize,
                            eventType: 'SpinWheel',
                            // participationDate: new Date().toISOString(), // Current date-time in ISO format
                            referenceNumber: refNumber // Include reference number in payload
                        };

                        postData(spinData); // Use the postData function to send the spin data to the backend
                    } else {
                        setReferenceNumber(null); // No reference number for "Better Luck Next Time"
                        const spinData = {
                            userId: authState.userId, // Get userId from authState
                            prize: wonPrize,
                            eventType: 'SpinWheel',
                            // participationDate: new Date().toISOString(), // Current date-time in ISO format
                            referenceNumber: "" // Include reference number in payload
                        };

                        postData(spinData); // Use the postData function to send the spin data to the backend
                    }
                }, 3000);
            }
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (responseData) {
            console.log('Spin data saved successfully:', responseData);
        }
        if (error) {
            console.error('Failed to save spin data:', error);
        }
    }, [responseData, error]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            backgroundColor={authState.isAuthenticated ? "#f0f8ff" : "#f0f0f0"}
            padding="10px"
            boxSizing="border-box"
            animation={authState.isAuthenticated ? `${messageAnimation} 2s ease-in-out` : 'none'}
        >
            {/* Lucky Draw Announcement Banner */}

            
            <Box
                width="100%"
                backgroundColor="#b5edbd"
                padding="10px"
                textAlign="center"
                color="#black"
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                marginBottom="20px"
                borderRadius="md"
                animation={`${messageAnimation} 2s ease-in-out`}
            >
                🎉 Lucky Draw Result Announcement on August 31 at 6pm! Stay tuned! Spin as much as You can and Win 🎉
            </Box>

          
            {/* Promotional Message Section */}
            {/* <Box
                width="100%"
                backgroundColor="#4caf50"
                padding="15px"
                textAlign="center"
                color="#fff"
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                marginBottom="20px"
                borderRadius="md"
                animation={`${messageAnimation} 2s ease-in-out`}
            >
                🎁 You have a chance to win incredible prizes worth up to ₹1,00,000! Premium Lehengas, American Diamond Chokers, Rings, Bangles, and Necklaces await you! 🎁
            </Box> */}

<Box
    width="100%"
    background="#1a1a2e"  // Darker background for better contrast
    padding="20px"
    textAlign="center"
    color="#f0e68c"  // Light golden color for readability
    fontSize={{ base: 'lg', md: 'xl' }}
    fontWeight="bold"
    marginBottom="30px"
    borderRadius="lg"
    boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
    border="2px solid #ffcc00"  // Bright gold border to complement the dark background
    animation={`${messageAnimation} 4s ease-in-out infinite`}
>
    🎁 <span style={{ color: '#ffd700' }}>You have a chance to win incredible prizes</span> worth up to 
    <span style={{ fontSize: '1.2em', color: '#ffeb3b' }}> ₹1,00,000</span>! 
    <span style={{ color: '#ffd700' }}>Premium Lehengas, American Diamond Chokers, Rings, Bangles,</span> 
     <span style={{ color: '#ffd700' }}>Necklaces and Many more Exciting Gifts</span> await you! 🎁
</Box>

            {authState.isAuthenticated ? (
                <>
                    <Box 
                        position="relative" 
                        width="80vw" 
                        height="80vw"
                        maxWidth="400px"
                        maxHeight="400px"
                    >
                        <Box
                            width="100%"
                            height="100%"
                            borderRadius="50%"
                            background="conic-gradient(
                                #FFDDC1 0% 20%, 
                                #C1FFD8 20% 40%, 
                                #C1E4FF 40% 60%, 
                                #F0C1FF 60% 80%, 
                                #FFDCB0 80% 100%)"
                            border="4px solid #000"
                            transform={`rotate(${rotation}deg)`}
                            transition="transform 0.1s ease"
                            position="absolute"
                            top="0"
                            left="0"
                            zIndex="1"
                        />
                        {isRevealing && (
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%)"
                                width="70%"
                                height="70%"
                                borderRadius="50%"
                                backgroundColor="white"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                boxShadow="0 0 25px rgba(0, 255, 0, 0.7)"
                                zIndex="2"
                                overflow="hidden"
                                animation={`${revealAnimation} 1s ease-in-out`}
                            >
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    fontWeight="bold"
                                    color="#000"
                                    textAlign="center"
                                    padding="10px"
                                    backgroundColor="#FFF"
                                    borderRadius="md"
                                    boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                                >
                                    {revealPrize}
                                </Text>
                            </Box>
                        )}
                    </Box>
                    <Box marginTop="20px">
                        <Button 
                            onClick={handleSpin} 
                            isDisabled={isSpinning}
                            colorScheme="pink"
                            size="lg"
                            padding="15px 30px"
                            fontSize="lg"
                            borderRadius="md"
                            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                            transition="background-color 0.2s, transform 0.2s"
                            _hover={{ backgroundColor: 'pink.600', transform: 'scale(1.50)' }}
                            _active={{ backgroundColor: 'green.700', transform: 'scale(0.95)' }}
                        >
                            {isSpinning ? 'Spinning...' : 'Spin'}
                        </Button>
                    </Box>
                    {showSavingMessage && (
                        <Box 
                            position="relative" 
                            marginTop="20px"
                            backgroundColor="#4caf50"
                            padding="15px"
                            borderRadius="md"
                            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                            zIndex="999"
                            color="white"
                            textAlign="center"
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight="bold"
                        >
                            <Text>Saving your spin result...</Text>
                        </Box>
                    )}
                    {!showSavingMessage && referenceNumber && (
                        <Box 
                            position="relative" 
                            marginTop="20px"
                            backgroundColor="#2196f3"
                            padding="15px"
                            borderRadius="md"
                            boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
                            zIndex="999"
                            color="white"
                            textAlign="center"
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight="bold"
                        >
                            {/* <Text>Your Reference Number: {referenceNumber}</Text> */}
                            <Text>
                            Your Reference Number: {referenceNumber}. Please make sure to keep a note of your reference number. Kindly visit our site on August 31, 2024, at 6 PM to check the results. All the best!
                            </Text>

                        </Box>
                    )}
                    <audio ref={audioRef} src="/spinning-sound.mp3" />
                    <audio ref={celebrationAudioRef} src="/celebration.mp3" />

                

                    {showCelebration && (
                        <Box
                            position="fixed"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            backgroundColor="rgba(255, 255, 255, 0.8)"
                            zIndex="9999"
                        >
                            <Lottie 
                                animationData={celebrationAnimationData}
                                style={{ width: '80%', maxWidth: '500px' }}
                            />
                        </Box>
                    )}
                </>
            ) : (
                // <Text fontSize="lg" fontWeight="bold">
                //     Please log in to participate in the Lucky Draw.
                // </Text>
               

                <Box
                    width="100%"
                    padding="20px"
                    backgroundColor="pink.500" // Bright, warm background color
                    borderRadius="md"
                    textAlign="center"
                    boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                >
                    <Text
                        fontSize={{ base: "xl", md: "2xl" }} // Increased font size
                        fontWeight="bold"
                        color="#ffffff" // White text color for better contrast
                        letterSpacing="wider"
                    >
                        🔒 Please <span style={{ color: "#ffeb3b" }}>log in</span> to participate in the <span style={{ color: "#ffeb3b" }}>Lucky Draw</span>! 🎉
                    </Text>
                </Box>
                

            )}
        </Box>
    );
};



// Version : 6 , 5 is working version, this is animation enhancements ( But Good UI )

// import React, { useState, useRef, useEffect } from 'react';
// import { Box, Text, keyframes, Button } from '@chakra-ui/react';
// import { useAuth } from '../contexts/AuthContext';
// import usePostData from '../hooks/usePostData'; // Import the usePostData hook
// import Lottie from 'lottie-react'; // Import Lottie for animations
// import celebrationAnimationData from '../animations/celebration.json'; // Path to your celebration Lottie animation

// // Prize list
// const prizes = [
//     'Better Luck Next Time',
//     'Congrats You have Entered into Lucky Draw'
// ];

// const prizeCount = prizes.length;

// // Keyframes for animations
// const revealAnimation = keyframes`
//     0% { transform: scale(0); opacity: 0; }
//     50% { transform: scale(1.1); opacity: 1; }
//     100% { transform: scale(1); opacity: 1; }
// `;

// const messageAnimation = keyframes`
//     0% { opacity: 0; transform: translateY(20px); }
//     100% { opacity: 1; transform: translateY(0); }
// `;

// export const SpinWheel: React.FC = () => {
//     const { authState } = useAuth();
//     const [isSpinning, setIsSpinning] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [winningPrize, setWinningPrize] = useState('');
//     const [isRevealing, setIsRevealing] = useState(false);
//     const [revealPrize, setRevealPrize] = useState('');
//     const [showSavingMessage, setShowSavingMessage] = useState(false);
//     const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
//     const [showCelebration, setShowCelebration] = useState(false); // State for celebration animation
//     const audioRef = useRef<HTMLAudioElement | null>(null);
//     const celebrationAudioRef = useRef<HTMLAudioElement | null>(null); // Ref for celebration sound

//     // Using the usePostData hook
//     const { postData, data, error, isLoading, responseData } = usePostData('/api/cc/luckydraw');

//     const playSound = () => {
//         if (audioRef.current) {
//             audioRef.current.currentTime = 0;
//             audioRef.current.play();
//         }
//     };

//     const stopSound = () => {
//         if (audioRef.current) {
//             audioRef.current.pause();
//             audioRef.current.currentTime = 0;
//         }
//     };

//     const playCelebrationSound = () => {
//         if (celebrationAudioRef.current) {
//             celebrationAudioRef.current.currentTime = 0;
//             celebrationAudioRef.current.play();
//         }
//     };

//     const stopCelebrationSound = () => {
//         if (celebrationAudioRef.current) {
//             celebrationAudioRef.current.pause();
//             celebrationAudioRef.current.currentTime = 0;
//         }
//     };

//     const generateReferenceNumber = () => {
//         return 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
//     };

//     const handleSpin = () => {
//         if (isSpinning) return;

//         const spins = 5; // Number of full rotations
//         const prizeDegree = 360 / prizeCount;
//         const randomIndex = Math.floor(Math.random() * prizeCount);
//         const randomDegree = randomIndex * prizeDegree;
//         const totalRotation = 360 * spins + randomDegree;

//         setIsSpinning(true);
//         setIsRevealing(false);
//         setWinningPrize('');
//         setRevealPrize('');
//         setShowSavingMessage(false);
//         setShowCelebration(false); // Reset celebration animation

//         // Play the spinning sound
//         playSound();

//         let startTime: number;
//         const duration = 3000; // Spin duration in ms

//         const animate = (time: number) => {
//             if (!startTime) startTime = time;
//             const elapsed = time - startTime;

//             let progress = elapsed / duration;
//             if (progress > 1) progress = 1;

//             // Ease-out effect for more realistic stopping
//             const easeOut = (progress: number) => 1 - Math.pow(1 - progress, 3);

//             const currentRotation = totalRotation * easeOut(progress);
//             setRotation(currentRotation);

//             if (elapsed < duration) {
//                 requestAnimationFrame(animate);
//             } else {
//                 const finalRotation = currentRotation % 360;
//                 setRotation(finalRotation);
//                 setIsSpinning(false);
//                 stopSound(); // Stop the sound after the spin ends

//                 // Calculate the winning prize index based on the 90-degree position
//                 const adjustedRotation = (finalRotation + 90) % 360;
//                 const calculatedIndex = Math.floor(adjustedRotation / prizeDegree);
//                 const wonPrize = prizes[calculatedIndex];
//                 setWinningPrize(wonPrize);

//                 // Trigger reveal animation
//                 setIsRevealing(true);
//                 setRevealPrize(wonPrize);

//                 // Show saving message for 3 seconds then display reference number if applicable
//                 setShowSavingMessage(true);
//                 setTimeout(() => {
//                     setShowSavingMessage(false);
//                     if (wonPrize !== 'Better Luck Next Time') {
//                         const refNumber = generateReferenceNumber();
//                         setReferenceNumber(refNumber);

//                         // Show celebration animation and sound
//                         setShowCelebration(true);
//                         playCelebrationSound();

//                         // Save spin result to database
//                         const spinData = {
//                             userId: authState.userId, // Get userId from authState
//                             prize: wonPrize,
//                             eventType: 'SpinWheel',
//                             referenceNumber: refNumber // Include reference number in payload
//                         };

//                         postData(spinData); // Use the postData function to send the spin data to the backend
//                     } else {
//                         setReferenceNumber(null); // No reference number for "Better Luck Next Time"
//                         const spinData = {
//                             userId: authState.userId, // Get userId from authState
//                             prize: wonPrize,
//                             eventType: 'SpinWheel',
//                             referenceNumber: "" // Include reference number in payload
//                         };

//                         postData(spinData); // Use the postData function to send the spin data to the backend
//                     }
//                 }, 3000);
//             }
//         };

//         requestAnimationFrame(animate);
//     };

//     useEffect(() => {
//         if (responseData) {
//             console.log('Spin data saved successfully:', responseData);
//         }
//         if (error) {
//             console.error('Failed to save spin data:', error);
//         }
//     }, [responseData, error]);

//     return (
//         <Box
//             display="flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//             height="100vh"
//             backgroundColor={authState.isAuthenticated ? "#f0f8ff" : "#f0f0f0"}
//             padding="10px"
//             boxSizing="border-box"
//             animation={authState.isAuthenticated ? `${messageAnimation} 2s ease-in-out` : 'none'}
//         >
//             {/* Lucky Draw Announcement Banner */}
//             <Box
//                 width="100%"
//                 backgroundColor="#ff5722"
//                 padding="10px"
//                 textAlign="center"
//                 color="#fff"
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 fontWeight="bold"
//                 marginBottom="20px"
//                 borderRadius="md"
//                 animation={`${messageAnimation} 2s ease-in-out`}
//             >
//                 🎉 Lucky Draw Result Announcement on August 31 at 6pm! Stay tuned! 🎉
//             </Box>

//             {/* Promotional Message Section */}
//             <Box
//                 width="100%"
//                 backgroundColor="#4caf50"
//                 padding="15px"
//                 textAlign="center"
//                 color="#fff"
//                 fontSize={{ base: 'md', md: 'lg' }}
//                 fontWeight="bold"
//                 marginBottom="20px"
//                 borderRadius="md"
//                 animation={`${messageAnimation} 2s ease-in-out`}
//             >
//                 🎁 You have a chance to win incredible prizes worth up to ₹1,00,000! Premium Lehengas, American Diamond Chokers, Rings, Bangles, and Necklaces await you! 🎁
//             </Box>

//             {authState.isAuthenticated ? (
//                 <>
//                     <Box 
//                         position="relative" 
//                         width="80vw" 
//                         height="80vw"
//                         maxWidth="400px"
//                         maxHeight="400px"
//                     >
//                         <Box
//                             width="100%"
//                             height="100%"
//                             borderRadius="50%"
//                             background="conic-gradient(
//                                 #FFDDC1 0% 20%, 
//                                 #C1FFD8 20% 40%, 
//                                 #D1C1FF 40% 60%, 
//                                 #FFC1C1 60% 80%, 
//                                 #C1E1FF 80% 100%)"
//                             transform={`rotate(${rotation}deg)`}
//                             transition="transform 1s ease-out"
//                         />
//                         <Button
//                             position="absolute"
//                             top="50%"
//                             left="50%"
//                             transform="translate(-50%, -50%)"
//                             backgroundColor="#ff4081"
//                             color="#fff"
//                             onClick={handleSpin}
//                             disabled={isSpinning}
//                             _hover={{ backgroundColor: "#e91e63" }}
//                         >
//                             {isSpinning ? 'Spinning...' : 'Spin'}
//                         </Button>
//                     </Box>

//                     <Box
//                         marginTop="20px"
//                         color={winningPrize !== 'Better Luck Next Time' ? 'green.500' : 'red.500'}
//                         fontWeight="bold"
//                         fontSize="xl"
//                         animation={isRevealing ? `${revealAnimation} 0.5s ease-out` : 'none'}
//                         opacity={isRevealing ? 1 : 0}
//                         display={isRevealing ? 'block' : 'none'}
//                     >
//                         {revealPrize}
//                     </Box>

//                     {showSavingMessage && (
//                         <Text color="blue.500" fontWeight="bold" marginTop="10px">
//                             Saving your spin result...
//                         </Text>
//                     )}

//                     {referenceNumber && (
//                         <Text color="blue.500" fontWeight="bold" marginTop="10px">
//                             Your Reference Number: {referenceNumber}
//                         </Text>
//                     )}

//                     {/* Celebration Animation and Sound */}
//                     {showCelebration && (
//                         <Box
//                             position="fixed"
//                             top="0"
//                             left="0"
//                             width="100%"
//                             height="100%"
//                             display="flex"
//                             justifyContent="center"
//                             alignItems="center"
//                             backgroundColor="rgba(255, 255, 255, 0.8)"
//                             zIndex="9999"
//                         >
//                             <Lottie 
//                                 animationData={celebrationAnimationData}
//                                 style={{ width: '80%', maxWidth: '500px' }}
//                             />
//                         </Box>
//                     )}
//                 </>
//             ) : (
//                 <Box
//                     padding="20px"
//                     backgroundColor="#f44336"
//                     color="#fff"
//                     borderRadius="md"
//                     textAlign="center"
//                     fontWeight="bold"
//                     fontSize={{ base: 'md', md: 'lg' }}
//                 >
//                     Please log in to spin the wheel and win exciting prizes!
//                 </Box>
//             )}

//             {/* Spinning and celebration audio */}
//             <audio ref={audioRef} src="/sounds/spinning.mp3" />
//             <audio ref={celebrationAudioRef} src="/sounds/celebration.mp3" />

//         </Box>
//     );
// };





