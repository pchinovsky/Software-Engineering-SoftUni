function calcWalkTime(steps, foot, speed) {    
        const distance = steps * foot;
        const mS = speed / 3.6;
        const breaks = distance / 500
        const breaksTime = (Math.ceil(breaks - 1)) * 60;
        const time = Math.round(distance / mS + breaksTime);
        
        const secs = (time % 60).toString().padStart(2, 0);
        const mins = (((time - secs) / 60) % 60).toString().padStart(2, 0);
        const hours = (Math.floor((time - secs) / 3600)).toString().padStart(2, 0);

        console.log(`${hours}:${mins}:${secs}`);
    }
    