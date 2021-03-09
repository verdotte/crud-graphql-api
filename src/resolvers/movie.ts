import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Service } from 'typedi';
import { Movie, CreateMovieInput, UpdateMovieInput } from '../schema/movie';
import { MovieService } from '../database/services/movieService';

@Service()
@Resolver((of) => Movie)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query((returns) => [Movie], { nullable: true })
  async getMovies(): Promise<Movie[]> {
    return await this.movieService.getAll();
  }

  @Query((returns) => Movie, { nullable: true })
  async getMovie(@Arg('id') id: number): Promise<Movie | undefined> {
    return await this.movieService.getOne(id);
  }

  @Mutation((returns) => Movie)
  async addMovie(
    @Arg('MovieInput') createMovieInput: CreateMovieInput,
  ): Promise<Movie> {
    return await this.movieService.create(createMovieInput);
  }

  @Mutation((returns) => Movie)
  async updateMovie(
    @Arg('id') id: number,
    @Arg('MovieInput') updateMovieInput: UpdateMovieInput,
  ): Promise<Movie> {
    return await this.movieService.update(id, updateMovieInput);
  }

  @Mutation((returns) => Boolean)
  async deleteMovie(@Arg('id') id: number): Promise<boolean> {
    return await this.movieService.delete(id);
  }
}
