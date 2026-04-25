import {request} from '@playwright/test'

export async function createdUserViaAPI(){
    const apiContext = await request.newContext();
    const response = await apiContext.post('hhtps://reqres.in/api/users',{
        data:{email:"testuser@gmail.com",password:"test@123"}

    })

    const data = await response.json()
    return{
        email: data.email || "testuser@gmail.com", password: "test@123"
    }
}