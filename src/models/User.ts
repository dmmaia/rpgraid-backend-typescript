import {Schema, model, Document} from "mongoose";

export interface IUser extends Document {
  _id: string
  userName: string;
};

const UserSchema = new Schema({
  _id: {type: String, required: true},
  userName: {type: String, required: true}
});

const User = model<IUser>('User', UserSchema);

export { User }