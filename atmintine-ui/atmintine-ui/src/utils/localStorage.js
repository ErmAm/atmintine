
export const saveToLocalStorage=(key, value) =>{

    try {
        const serializedValue = JSON.stringify(value)
        localStorage.setItem(key, serializedValue)
    } catch {

    }

}

export const loadFromLocalStorage = (key) =>{

    const serializedValue= localStorage.getItem(key)
    return JSON.parse(serializedValue)
}
