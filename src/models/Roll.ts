import { Schema, model, Document } from 'mongoose';

export interface IRoll extends Document {
  userId : string,
  tableId : string,
  roll : string[]
}

const RollSchema = new Schema({
  userId: {
    type: String||Schema.Types.ObjectId,
    ref: 'User'
  },
  tableId: {
    type: String||Schema.Types.ObjectId,
    ref: 'Table'
  },
  roll: {type: Array, required: true}
},{
  timestamps: true
})

const Roll = model<IRoll>('Roll', RollSchema);
export { Roll }