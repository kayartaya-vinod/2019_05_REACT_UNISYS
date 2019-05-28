const baseUrl = 'http://localhost:4000/contacts/';

export const getAllContacts = () => {
    // the return value from this function is a Promise object
    // and the caller of this function should handle the resolved
    // or rejected data
    return fetch(baseUrl).then(resp => resp.json());
}


export const deleteContact = async (id) => {
    let resp = await fetch(baseUrl + id, { method: 'DELETE' });
    return await resp.json();
}

export const addContact = async (contact) => { // 'contact' doesn't have id
    let resp = await fetch(baseUrl, { 
        method: 'POST', 
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json(); // resp.json() is the contact with id (auto-generated)
}

export const updateContact = async (contact) => {
    let resp = await fetch(baseUrl + contact.id, { 
        method: 'PUT', 
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}