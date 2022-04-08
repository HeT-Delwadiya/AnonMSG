import dbConnect from '../../../db/dbconnect'

import Msg from '../../../models/Msg'

dbConnect()

export default async (req, res) => {
       
       try {
              const msg = await Msg.create(req.body)
              res.status(200).json({success: true, msg: msg})
       } catch (error) {
              console.log(error);
              res.status(400).json({success: false})
       }
}