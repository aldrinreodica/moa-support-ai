import { User } from '@moa/database';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async signUp(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const newUser = await this.authService.register(email, password);
    const accessToken = await this.authService.generateToken(newUser);

    return {
      accessToken,
      user: newUser,
    };
  }
}
