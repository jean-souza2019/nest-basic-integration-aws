import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import { AwsController } from './aws.controller';
import { S3ConfigModule } from './providers/s3/S3Config.module';

@Module({
  controllers: [AwsController],
  imports: [S3ConfigModule],
  providers: [AwsService, S3ConfigModule],
})
export class AwsModule {}
