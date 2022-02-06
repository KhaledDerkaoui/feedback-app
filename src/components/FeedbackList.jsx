import FeadbackItem from './FeadbackItem';
import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from "../context/feedbackContext"


const FeedbackList = () => {
  const {feedback}= useContext(FeedbackContext)
  if (!feedback || feedback.length===0) return <div>There is not feedback yet !!</div>
  return ( 
    <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}
          >
            <FeadbackItem key={item.id} item={item} />
            </motion.div>
        ))}
    </AnimatePresence>
      </div>      
    

     );
}
 
export default FeedbackList;