-- CreateEnum
CREATE TYPE "Role" AS ENUM ('AUTHOR', 'USER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "userType" "Role" NOT NULL DEFAULT E'USER';
