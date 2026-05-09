import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const createdComment = new this.commentModel(createCommentDto);
    return createdComment.save();
  }

  findAll(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  findOne(id: string): Promise<Comment | null> {
    return this.commentModel.findById(id);
  }

  update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment | null> {
    return this.commentModel.findByIdAndUpdate(id, updateCommentDto);
  }

  remove(id: string): Promise<Comment | null> {
    return this.commentModel.findByIdAndDelete(id);
  }
}
