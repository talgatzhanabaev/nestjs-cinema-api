import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title!: string;

  @Prop()
  description!: string;

  @Prop()
  actors!: Array<string>;

  @Prop()
  genres!: Array<string>;

  @Prop()
  producers!: Array<string>;

  @Prop()
  seance!: Date;

  @Prop()
  hallId!: Number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
