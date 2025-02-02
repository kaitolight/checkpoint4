/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashedPassword` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `password`,
    ADD COLUMN `email` VARCHAR(100) NOT NULL,
    ADD COLUMN `hashedPassword` VARCHAR(255) NOT NULL,
    ADD COLUMN `role` VARCHAR(100) NOT NULL;
