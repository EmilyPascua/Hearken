export const currentQuarter = () => {
    //Get time to set the theme
    const 
        today = new Date(),
        timeOfDay = today.getHours();
    
    if (timeOfDay >= 0 && timeOfDay < 12) return 'morning';
    if (timeOfDay >= 12 && timeOfDay < 16) return 'afternoon';
    if (timeOfDay >= 16 && timeOfDay < 21) return 'evening';
    if (timeOfDay >= 21 && timeOfDay < 24) return 'night';
}