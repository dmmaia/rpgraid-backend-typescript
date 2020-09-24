import { Schema, model, Document} from 'mongoose';

export interface ITable extends Document {
    tableName: string;
    UserId: Schema.Types.ObjectId;
}

const TableSchema = new Schema({
    tableName: {required: true},
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Table = model<ITable>('Table', );

export { Table }