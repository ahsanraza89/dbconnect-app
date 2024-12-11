import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {

    let data = await req.json();

    if (data.action == "login") {

        let userMila = await User.aggregate(
         [   {
            $match : {

                user_email: data.user_email,
                user_password: data.user_password
            }

        }]);

        console.log(userMila);

        if (userMila.length > 0) {

            return NextResponse.json({ success: true})
        }else{
            return NextResponse.json({success : false})
        }
    } else {
        let newUser = new User;

        newUser.businessEmailAddress = data.businessEmailAddress
        newUser.companyName = data.companyName
        newUser.fullName = data.fullName
        newUser.user_password = data.user_password
        newUser.user_email = data.user_email;

        await newUser.save();

        console.log("User Saved");

        return NextResponse.json({success : true})


    }


}

export async function GET(req) {

    const users  = await User.find();
    return NextResponse.json({success: true , users})
    
}

export async function DELETE(req) {
    const userId = req.nextUrl.searchParams.get('userId');

    await User.findByIdAndDelete(userId);
    console.log(req.nextUrl.searchParams.get('userId'));

    return NextResponse.json({success : true})
}