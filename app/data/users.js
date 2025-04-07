const users = [
    {
        email:"hiro@email.com",
        password:"password"
    },
    {
        email:"info@email.com",
        password:"password"
    },
    {
        email:"support@email.com",
        password:"password"
    }
]

export const getUserByEmail = email =>{
    const found = users.find(user => user.email === email);
    return found;
}