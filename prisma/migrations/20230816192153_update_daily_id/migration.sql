/*
  Warnings:

  - The primary key for the `Daily` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ListItem" DROP CONSTRAINT "ListItem_dailyId_fkey";

-- AlterTable
ALTER TABLE "Daily" DROP CONSTRAINT "Daily_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Daily_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Daily_id_seq";

-- AlterTable
ALTER TABLE "ListItem" ALTER COLUMN "dailyId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_dailyId_fkey" FOREIGN KEY ("dailyId") REFERENCES "Daily"("id") ON DELETE SET NULL ON UPDATE CASCADE;
