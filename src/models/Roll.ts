import { Schema, model, Document } from 'mongoose';

export interface IRoll extends Document {
  _id : string,
  userId : string,
  tableId : string,
  roll : object[]
}

const RollSchema = new Schema({
  _id: {type: String, required: true},
  userId: {
    type: String||Schema.Types.ObjectId,
    ref: 'User'
  },
  tableId: {
    type: String||Schema.Types.ObjectId,
    ref: 'Table'
  },
  roll: {type: Array, required: true}
})