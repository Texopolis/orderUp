/*
  Warnings:

  - You are about to drop the column `date` on the `Daily` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Master` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Daily" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "Master" ALTER COLUMN "id" SET DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Master_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Master_id_key" ON "Master"("id");
