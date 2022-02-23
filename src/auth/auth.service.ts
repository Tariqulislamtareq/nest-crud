import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      message: 'This is signup',
    };
  }

  signin() {
    return {
      message: 'This is signin',
    };
  }
}
