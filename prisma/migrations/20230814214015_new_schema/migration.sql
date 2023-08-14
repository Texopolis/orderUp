/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_masterId_fkey";

-- AlterTable
ALTER TABLE "Daily" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Master" ADD COLUMN     "items" TEXT[];

-- DropTable
DROP TABLE "Item";
