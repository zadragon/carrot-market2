import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import Id from "pages/api/products/[id]";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
      query:{id},
      session:{user},
    } = req;
  
    const alreadyExists = await client.wondering.findFirst({
        where:{
            userId:user?.id,
            postId: +id.toString()
        },
    })


    res.json({
        ok: true,
    });
}

export default withApiSession(
  withHandler({
    methods: ["POST"],
    handler,
  })
);