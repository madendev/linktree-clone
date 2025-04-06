import { NextRequest, NextResponse } from "next/server";
import {db} from "@/lib/db";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  try {
    const {userId} = getAuth(request);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

   let existingUser = await db.user.findUnique({
      where: { id: userId },
      include: {
        links: true,
      },
    });
    if (!existingUser) {
      existingUser = await db.user.create({
        data: {
            id: userId,
            name: "User",
            username: `user_${userId}`,
            links: {
                create: [],
                },
        },
      include: {
            links: true,
        },
      });           
    }
    return NextResponse.json(existingUser, { status: 200 });
    }
    catch (error) {
        console.error("[GET_USER_FIRST_LOGIN]", error);
        return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
        }
    }