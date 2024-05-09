/*
  Warnings:

  - You are about to drop the `Alcohol` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `end_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_age` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members_count` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `men_count` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_age` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `women_count` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Alcohol";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "isAlcohol" BOOLEAN NOT NULL,
    "percentage" INTEGER,
    "preparation" TEXT
);

-- CreateTable
CREATE TABLE "DrinkForEvent" (
    "eventId" INTEGER NOT NULL,
    "drinkId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" INTEGER NOT NULL,

    PRIMARY KEY ("eventId", "drinkId"),
    CONSTRAINT "DrinkForEvent_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DrinkForEvent_drinkId_fkey" FOREIGN KEY ("drinkId") REFERENCES "Drink" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "members_count" INTEGER NOT NULL,
    "men_count" INTEGER NOT NULL,
    "women_count" INTEGER NOT NULL,
    "min_age" INTEGER NOT NULL,
    "max_age" INTEGER NOT NULL
);
INSERT INTO "new_Event" ("createdAt", "description", "id", "title", "updatedAt") SELECT "createdAt", "description", "id", "title", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
