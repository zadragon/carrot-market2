import {withIronSessionApiRoute} from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";

declare module "iron-session" {
  interface IronSessionData{
    user?:{
      id:number;
    }
  }

}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
    
    console.log(req.session.user);
    res.status(200).end()
}

export default withIronSessionApiRoute(withHandler("GET", handler),{
    cookieName:"carrotsession",
    password:"9981237498723412341234123412341324"
});