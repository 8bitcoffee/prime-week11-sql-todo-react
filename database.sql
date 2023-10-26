CREATE TABLE "todo-list"(
	"id" SERIAL PRIMARY KEY,
	"title" varchar(50) NOT NULL,
	"complete" BOOLEAN DEFAULT false,
	"duedate" DATE NOT NULL,
	"priority" INTEGER NOT NULL DEFAULT 3,
	"description" varchar(500)
);

INSERT INTO "todo-list"("title","duedate","description")
VALUES
	('Create SQL table','2023-10-28','Need to define headers, create fake data'),
	('Create Prentus profile','2023-10-30','Add personal profile and get ready for job hunting'),
	('Make list of jobs','2023-10-31','Add list of job descriptions and start crafting CV to meet those');