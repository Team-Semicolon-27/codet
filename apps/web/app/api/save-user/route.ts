import { NextApiRequest,NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method !=='POST'){
        return res.status(405).json({error:'method is worng'});
    }

    const token = await getToken({req,secret: process.env.AUTH_SECRET})

    if(!token){
        return res.status(401).json({error:'lund lele'});

    }

    const { id, email, name } = token;
    
    try {
        const user = await prisma.user.upsert({
          where: { email: email as string },
          update: { name: name as string },
          create: {
            id: id as string,
            email: email as string,
            name: name as string,
          },
        });
    
        console.log('User saved successfully:', user);
        return res.status(200).json({ message: 'User saved successfully', user });
      } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}