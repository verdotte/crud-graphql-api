import { Field, ObjectType, InputType } from 'type-graphql';
import { Min, Max } from 'class-validator';

@ObjectType()
export class Movie {
  @Field()
  id: number;

  @Field()
  @Min(3)
  @Max(50)
  title: string;

  @Field()
  @Min(10)
  @Max(250)
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
  @Min(3)
  @Max(50)
  title: string;

  @Field()
  @Min(10)
  @Max(250)
  description: string;

  @Field((type) => [String])
  actors: string[];

  @Field({ nullable: true })
  releaseYear: string;
}

@InputType()
export class UpdateMovieInput implements Partial<Movie> {
  @Field({ nullable: true })
  @Min(3)
  @Max(50)
  title?: string;

  @Field({ nullable: true })
  @Min(10)
  @Max(250)
  description?: string;

  @Field((type) => [String], { nullable: true })
  actors?: string[];

  @Field({ nullable: true })
  releaseYear?: string;
}
