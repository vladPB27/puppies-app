export async function getDogsService() {

    const API_DOGS = import.meta.env.VITE_API_DOGS;
    try {
        
        return await fetch(`${API_DOGS}/breeds`)
            .then(async res => {
                if(res.ok){
                    return await res.json()
                }else throw new Error(`HTTP error: ${res.status}`)
            })
    } catch (error) {
        console.log(error);

    }
}