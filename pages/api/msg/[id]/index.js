import dbConnect from "../../../../db/dbconnect"

import Msg from '../../../../models/Msg'

dbConnect()

export default async(req, res) => {
       const {
              query: {id},
              method
       } = req

       switch (method) {
              case 'GET':
                     try {
                            const msg = await Msg.findById(id)
                            if (!msg) {
                                   res.status(200).json({success: false})
                            } else if(msg.password) {
                                   res.status(200).json({success: true, passProtected: true, passHint: msg.passHint})
                            } else {
                                   res.status(200).json({success: true, msg: msg})
                            }

                     } catch (error) {
                            res.status(400).json({success: false})
                     }
                     break;
              
              case 'DELETE':
                     try {
                            const msg = await Msg.deleteOne({_id: id})
                            if (!msg) {
                                   res.status(400).json({success: false})
                            }
                            res.status(200).json({success: true, msg: msg})

                     } catch (error) {
                            res.status(400).json({success: false})
                     }
                     break;
       
              default:
                     res.status(400).json({success: false})
                     break;
       }
}