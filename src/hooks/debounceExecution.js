import { useEffect } from "react";

export default function useDebounceExecution(time ,cb ){
    useEffect(() => {
        const timer = setTimeout(async () => {
            cb()
        }, time);
        return () => {
          clearTimeout(timer);
        };
      }, [time, cb]);

}