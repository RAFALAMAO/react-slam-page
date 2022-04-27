// import { motion } from 'framer-motion';
import { FaSpinner } from 'react-icons/fa';
import Styles from './Spinner.module.css';
// import { Rotate } from './SpinnerStyles';

// --------------------   Con CSS tradicional ----------------
export default function Loading() {
  return (
    <div className={Styles.spinner}>
      <FaSpinner className={Styles.spinning} size={80}/>
    </div>
  )
}

// --------------------   Styled components ----------------
// const divStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '300px',
// }
// const spinnerStyle = {
//   color: 'rgb(120, 253, 255)',
//   borderRadius: '100%',
//   background: '#001736',
//   boxShadow:[
//     "2px 2px 10px #2c568b",
//     "-2px -2px 10px #3c74bd"]
// }

// export default function Loading() {
//   return (
//     <div style={divStyle}>
//       <Rotate>
//         <FaSpinner style={spinnerStyle} size={80}/>
//       </Rotate>
//     </div>
//   )
// }

// -------------------- Framer motion ----------------
// const divStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '300px',
// }
// const spinnerStyle = {
//   color: 'rgb(120, 253, 255)',
//   borderRadius: '100%',
//   background: '#001736',
//   boxShadow:[
//     "2px 2px 10px #2c568b",
//     "-2px -2px 10px #3c74bd"]
// }

// const animationConfig = {
//   animate: {
//     rotate:[0, 360,],
//     opacity: [0.6, 1, 0.6]
//   },
//   transition: {
//     duration: .8 ,
//     repeat:Infinity,
//     // ease: "linear"
//   },
//   style: {
//     display: 'flex',
//     padding: '0'
//   }
// }

// export default function Loading() {
//   return (
//     <div style={divStyle}>
//       <motion.div
//         initial="hidden"
//         animate={animationConfig.animate}
//         transition={animationConfig.transition}
//         style={animationConfig.style}
//       >
//         <FaSpinner style={spinnerStyle} size={80}/>
//       </motion.div>
//     </div>
//   )
// }