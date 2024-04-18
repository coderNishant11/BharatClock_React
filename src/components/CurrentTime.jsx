import { useState,useEffect } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const intervalId=setTimeout(() => {
        setTime(new Date())
      }, 1000);
    
      return () => clearInterval(intervalId);
    }, [time]);
    
    
    return   <p className="lead">
    This is the current time: {time.toLocaleDateString()} -{' '}
    {time.toLocaleTimeString()}
  </p>
}

export default CurrentTime;