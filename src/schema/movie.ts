import { Field, ObjectType, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType()
export class Movie {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field((type) => [String])
  actors: string[];

  @Field()
  releaseYear: string;

  @Field()
  updatedAt: Date;

  @Field()
  createdAt: Date;
}

@InputType()
export class CreateMovieInput implements Partial<Movie> {
  @Field()
  @Length(2, 50)
  title: string;

  @Field()
  @Length(10, 250)
  description: string;

  @Field((type) => [String])
  actors: string[];

  @Field({ nullable: true })
  releaseYear: string;
}

@InputType()
export class UpdateMovieInput implements Partial<Movie> {
  @Field({ nullable: true })
  @Length(2, 50)
  title?: string;

  @Field({ nullable: true })
  @Length(10, 250)
  description?: string;

  @Field((type) => [String], { nullable: true })
  actors?: string[];

  @Field({ nullable: true })
  releaseYear?: string;
}
