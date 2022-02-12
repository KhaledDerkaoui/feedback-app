import FeadbackItem from './FeadbackItem';
import {motion,AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from "../context/feedbackContext"
import Spinner from './shared/Spinner';


const FeedbackList = () => {
  const {feedback,isLoading}= useContext(FeedbackContext)
  if (!isLoading && (!feedback || feedback.length===0)) return <div>There is not feedback yet !!</div>
  return isLoading ? <Spinner/> : (
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