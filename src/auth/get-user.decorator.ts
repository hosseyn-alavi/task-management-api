import { GetTaskResDto } from './../tasks/dto/get-task-dto';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): GetTaskResDto => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
