/*
  Warnings:

  - The primary key for the `ListItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ListItem" DROP CONSTRAINT "ListItem_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ListItem_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ListItem_id_seq";
