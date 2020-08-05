import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  _id: string
  userName: string;
};

export const UserSchema = new mongoose.Schema({
  userName: {type: String, required: true}
});

const User = mongoose.model<IUser>('User', UserSchema);

export { User }