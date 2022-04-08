import dbConnect from "../../../../db/dbconnect"

import Msg from '../../../../models/Msg'

dbConnect()

export default async(req, res) => {
       const {
              query: {id}
       } = req

       try {
              const msg = await Msg.findById(id)
              if (!msg) {
                     res.status(400).json({success: false})
              } else if(msg.password==req.body.password) {
                     res.status(200).json({success: true, msg: msg})
              } else {
                     res.status(400).json({success: false, error: "Wrong password!"})
              }

       } catch (error) {
              res.status(500).json({success: false})
       }

}