import {NextResponse} from "next/server"


export const POST = async (request) => {
    const {name, email, password} = await request.json();

    console.log(name, email, password);

    //Create a DB Connection

    //Encrypt the password

    //Form a DB payload

    // Update the DB

return new NextResponse("User has been created", {
    status:201,
})

}