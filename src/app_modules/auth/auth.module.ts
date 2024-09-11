import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { SecurityUtils } from './services/security-utils';
import { JwtUtils } from './services/jwt-utils';
import { Argon2PasswordEncoder } from './services/argon2-password-encoder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './Models/sql-entities/user.entity';
import { RevokedToken } from './Models/sql-entities/revoked-token.entity';
import { UserService } from './services/user.service';
import { RevokedTokenService } from './services/revoked-token.service';
import { JwtService } from '@nestjs/jwt';
import { RequestContextModule } from 'nestjs-request-context';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NotificationService } from '../notification/services/notification.service';
import { AuthController } from './controllers/auth.controller';
import { AccountController } from './controllers/account.controller';
import { FingerprintService } from './services/fingerprint.service';
import { IpService } from './services/ip.service';
import { SessionService } from '../socket.io/session-manager/services/session.service';
import { CompressionManagementService } from './services/compression-management.service';

@Module({
  providers: [
    AuthService,
    SecurityUtils,
    JwtUtils,
    Argon2PasswordEncoder,
    UserService,
    RevokedTokenService,
    JwtService,
    NotificationService,
    Object,
    SessionService,
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard
    },
    FingerprintService,
    IpService,
    CompressionManagementService

  ],
  imports: [TypeOrmModule.forFeature([User, RevokedToken]), RequestContextModule],
  controllers: [AuthController, AccountController]
})
export class AuthModule { }
