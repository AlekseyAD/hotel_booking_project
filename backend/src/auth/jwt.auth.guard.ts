import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    console.log('=== Ayth.Guard JWT err: ', err);
    console.log('=== Ayth.Guard JWT USER: ', user);
    console.log('=== Ayth.Guard JWT info: ', info);
    // if (err || user.role !== 'DDD') {
    if (err || !user || user?.role !== 'admin') {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
