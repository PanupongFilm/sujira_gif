// models/Wish.ts
import mongoose, { Schema, model, models } from 'mongoose';

const WishSchema = new Schema({
  wishName: { type: String, required: true },
  isAccept: { type: Boolean, required: true }
});

const Wish = models.Wish || model('Wish', WishSchema);
export default Wish;