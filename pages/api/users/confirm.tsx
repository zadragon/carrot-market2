import {withIronSessionApiRoute} from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    const { token } = req.body;
    console.log(token);
    res.status(200).end()
}

export default withIronSessionApiRoute(withHandler("POST", handler),{
    cookieName:"carrotsession",
    password:"9981237498723412341234123412341324"
});