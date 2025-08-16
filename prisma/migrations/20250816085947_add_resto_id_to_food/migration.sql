/*
  Warnings:

  - Added the required column `resto_id` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Food" ADD COLUMN     "resto_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Food" ADD CONSTRAINT "Food_resto_id_fkey" FOREIGN KEY ("resto_id") REFERENCES "public"."restaurants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
