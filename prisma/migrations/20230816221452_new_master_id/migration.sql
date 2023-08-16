/*
  Warnings:

  - The primary key for the `Master` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Master" DROP CONSTRAINT "Master_pkey",
ALTER COLUMN "id" SET DEFAULT 'MASTER',
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Master_pkey" PRIMARY KEY ("id");
