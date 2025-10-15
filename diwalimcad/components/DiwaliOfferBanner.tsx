// import { useState, useEffect } from 'react';

// interface TimeLeft {
//   hours: number;
//   minutes: number;
//   seconds: number;
// }

// const DiwaliOfferBanner = () => {
//   const [timeLeft, setTimeLeft] = useState<TimeLeft>({
//     hours: 48,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => {
//         let { hours, minutes, seconds } = prevTime;
        
//         if (seconds === 0) {
//           if (minutes === 0) {
//             if (hours === 0) {
//               // Reset to 48 hours when countdown ends
//               return { hours: 48, minutes: 0, seconds: 0 };
//             } else {
//               hours--;
//               minutes = 59;
//               seconds = 59;
//             }
//           } else {
//             minutes--;
//             seconds = 59;
//           }
//         } else {
//           seconds--;
//         }
        
//         return { hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 text-center py-4 text-white relative overflow-hidden">
//       {/* Animated urgency elements */}
//       <div className="absolute inset-0 bg-sparkle-animation opacity-20"></div>
      
//       <div className="relative z-10">
//         <p className="text-lg font-bold mb-1 animate-pulse">
//           🪷 DIWALI SPECIAL OFFER 🪷
//         </p>
//         <p className="text-2xl font-extrabold mb-2 tracking-wider">
//           FLAT 50% OFF | Use Code: <span className="bg-white text-red-600 px-3 py-1 rounded-lg mx-2">MCAD50</span>
//         </p>
        
//         {/* Countdown Timer */}
//         <div className="flex justify-center items-center space-x-4 mb-2">
//           <span className="text-sm font-semibold">Offer ends in:</span>
//           <div className="flex space-x-2 bg-black bg-opacity-30 px-3 py-1 rounded-lg">
//             <span className="font-mono text-lg font-bold">
//               {timeLeft.hours.toString().padStart(2, '0')}
//             </span>
//             <span className="font-mono">:</span>
//             <span className="font-mono text-lg font-bold">
//               {timeLeft.minutes.toString().padStart(2, '0')}
//             </span>
//             <span className="font-mono">:</span>
//             <span className="font-mono text-lg font-bold">
//               {timeLeft.seconds.toString().padStart(2, '0')}
//             </span>
//           </div>
//         </div>
        
//         <p className="text-sm font-semibold flex items-center justify-center">
//           ⚡ Limited Seats Only! Enroll Now Before Offer Expires ⚡
//         </p>
//       </div>

//       {/* Flashing border */}
//       <div className="absolute inset-0 border-2 border-yellow-300 animate-pulse rounded-none"></div>

//       <style jsx>{`
//         @keyframes sparkle {
//           0% { background-position: 0% 50%; }
//           100% { background-position: 100% 50%; }
//         }
//         .bg-sparkle-animation {
//           background: linear-gradient(90deg, 
//             transparent 0%, 
//             #ffffff 25%, 
//             transparent 50%, 
//             #ffffff 75%, 
//             transparent 100%);
//           background-size: 200% 100%;
//           animation: sparkle 2s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DiwaliOfferBanner;


import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const DiwaliOfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              // Reset to 48 hours when countdown ends
              return { hours: 48, minutes: 0, seconds: 0 };
            } else {
              hours--;
              minutes = 59;
              seconds = 59;
            }
          } else {
            minutes--;
            seconds = 59;
          }
        } else {
          seconds--;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 text-center py-4 text-white relative overflow-hidden">
      {/* Animated urgency elements */}
      <div className="absolute inset-0 bg-sparkle-animation opacity-20"></div>
      
      <div className="relative z-10">
        <p className="text-lg font-bold mb-1 animate-pulse">
          🪷 DIWALI SPECIAL OFFER 🪷
        </p>
        <p className="text-2xl font-extrabold mb-2 tracking-wider">
          FLAT 50% OFF | Use Code: <span className="bg-white text-red-600 px-3 py-1 rounded-lg mx-2">MCAD50</span>
        </p>
        
        {/* Organizational Code */}
        <div className="mb-2">
          <p className="text-sm font-semibold mb-1 flex items-center justify-center">
            <span className="text-yellow-300 mr-1">⚠️ Important:</span> 
            Organizational Code Required for Login
          </p>
          <div className="flex items-center justify-center">
            <span className="text-sm font-semibold mr-2">Use Code:</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded-md font-bold text-lg border-2 border-yellow-300">
              ECWYN
            </span>
          </div>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex justify-center items-center space-x-4 mb-2">
          <span className="text-sm font-semibold">Offer ends in:</span>
          <div className="flex space-x-2 bg-black bg-opacity-30 px-3 py-1 rounded-lg">
            <span className="font-mono text-lg font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
            <span className="font-mono">:</span>
            <span className="font-mono text-lg font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
            <span className="font-mono">:</span>
            <span className="font-mono text-lg font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        
        <p className="text-sm font-semibold flex items-center justify-center">
          ⚡ Limited Seats Only! Enroll Now Before Offer Expires ⚡
        </p>
      </div>

      {/* Flashing border */}
      <div className="absolute inset-0 border-2 border-yellow-300 animate-pulse rounded-none"></div>

      <style jsx>{`
        @keyframes sparkle {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .bg-sparkle-animation {
          background: linear-gradient(90deg, 
            transparent 0%, 
            #ffffff 25%, 
            transparent 50%, 
            #ffffff 75%, 
            transparent 100%);
          background-size: 200% 100%;
          animation: sparkle 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DiwaliOfferBanner;