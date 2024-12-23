-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "studentName" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "course1" TEXT NOT NULL,
    "course2" TEXT NOT NULL,
    "dateJoined" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
