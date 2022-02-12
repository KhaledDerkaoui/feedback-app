import { createContext,useState, useEffect } from "react";

const FeedbackContext = createContext()

        

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit:false
    })
    
    
    const fetchFeedback = async () => {
        
        const res = await fetch("/feedback?_sort=id&_order=desc")
        const data = await res.json()
        setFeedback(data)
        setIsLoading(false)
    }


    const deleteFeedback = async id => {
        if (window.confirm('Are you sure you want to delete this feedback')) {
            await fetch(`/feedback/${id}`, {
                method:"DELETE"
            })
            setFeedback(feedback.filter(item => item.id !== id))
        } 
    }
    

    const addFeedback = async newFeedback => {
        const res = await fetch("/feedback", {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(newFeedback)
        })
        const data= await res.json()
        setFeedback([data,...feedback])
    }



    const updateFeedback = async (id, updatedItem) => {   
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(updatedItem)
        })
        const data= await res.json()
        
        const newfeedback = feedback.map(item => (item.id === id) ? { ...item, ...data } : item)
        setFeedback(newfeedback)
        setFeedbackToEdit({item:{},edit:false})
    }
    const editFeedback = item => {
        setFeedbackToEdit({item,edit:true})
    }

    useEffect(()=>{fetchFeedback()},[])
    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackToEdit,
            isLoading,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback

}}>
    {children}
</FeedbackContext.Provider>)}

export default FeedbackContext