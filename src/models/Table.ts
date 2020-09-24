import { Schema, model, Document} from 'mongoose';

export interface ITable extends Document {
    _id: string;
    tableName: string;
    userId: Schema.Types.ObjectId;
};

const TableSchema = new Schema({
    _id: {type: String, required: true},
    tableName: {type: String, required: true},
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Table = model<ITable>('Table', TableSchema);

export { Table }