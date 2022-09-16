export const get = async (url) => {
    try{
        const response = await fetch(url);
        return response.json();

    }catch(error){
        console.error(error)
    }
} 