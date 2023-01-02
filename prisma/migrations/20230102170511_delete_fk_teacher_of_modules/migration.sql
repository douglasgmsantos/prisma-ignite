/*
  Warnings:

  - You are about to drop the column `fk_id_teacher` on the `modules` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "modules" DROP CONSTRAINT "modules_fk_id_teacher_fkey";

-- AlterTable
ALTER TABLE "modules" DROP COLUMN "fk_id_teacher";
