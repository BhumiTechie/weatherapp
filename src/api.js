const API_KEY = '723345418320a543756863c42b5750f6';


export const fetchWeatherData = async (city) => {
    
    if (!city) {
        console.error('City parameter is required.');
        return null;
    }

    try {
       
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    
        if (!res.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
      
        const data = await res.json();
        return data;
    } catch (error) {
        // Error handling
        console.error('Error fetching weather data:', error);
        return null;
    }
};
