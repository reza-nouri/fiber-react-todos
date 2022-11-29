const BASE_URL = 'http://127.0.0.1:8000';

export async function getTodos(){
    const response = await fetch(`${BASE_URL}/todos`);
    const data = await response.json()

    if (!response.ok){
        throw new Error(data.message || 'Could not get todos')
    }
    return data;
}

export async function createTodo(body){
    const response = await fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if (!response.ok){
        throw new Error(data.message || 'Could not create todo')
    }
    return data;
}

export async function deleteTodo(id){
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: 'DELETE'
    });
    const data = await response.json();

    if(!response.ok){
        return new Error(data.message || 'Could not create todo')
    }

    return data;
}

export async function editTodo(body){
    const response = await fetch(`${BASE_URL}/todos/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if (!response.ok){
        throw new Error(data.message || 'Could not edit todo');
    }

    return data;
}