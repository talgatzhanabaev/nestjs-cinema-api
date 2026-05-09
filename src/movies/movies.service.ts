import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schemas/movie.schema';
import { Model } from 'mongoose';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const createdMovie = new this.movieModel(createMovieDto);
    return createdMovie.save();
  }

  findAll(): Promise<Movie[]> {
    return this.movieModel.find().exec();
  }

  findOne(id: string): Promise<Movie | null> {
    return this.movieModel.findById(id);
  }

  update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie | null> {
    return this.movieModel.findByIdAndUpdate(id, updateMovieDto);
  }

  remove(id: string): Promise<Movie | null> {
    return this.movieModel.findByIdAndDelete(id);
  }
}
