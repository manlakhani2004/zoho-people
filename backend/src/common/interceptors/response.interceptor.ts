import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((result) => {
        return {
          success: true,
          statusCode: res.statusCode,
          message: "Request successful",
          data: result,
          timestamp: new Date().toISOString(),
        };
      }),
    );
  }
}
