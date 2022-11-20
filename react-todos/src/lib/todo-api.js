const BASE_URL = 'http://127.0.0.1:8000';

export async function getTodos(){
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json()

    if (!response.ok){
        throw new Error(data.message || 'Could not get todos')
    }
    return data;
}