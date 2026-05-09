import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  userId!: number;

  @Prop()
  text!: string;

  @Prop()
  movieId!: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
