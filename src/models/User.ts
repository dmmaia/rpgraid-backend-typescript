import {Schema, model, Document} from "mongoose";

export interface IUser extends Document {
  _id: string
  userName: string;
  password: string;
};

const UserSchema = new Schema({
  _id: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true}
},{
  timestamps: true
});

const User = model<IUser>('User', UserSchema);

export { User }