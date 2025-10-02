PLP Bookstore - Week 1: MongoDB Data Layer Fundamentals
This document serves as the official guide for the Week 1 MongoDB Fundamentals assignment. It provides an overview of the repository contents and precise instructions for running the provided scripts, ensuring compliance with all assignment objectives.

 Repository Contents
This repository contains the following critical files:

insert_books.js:

Purpose: Initializes the plp_bookstore database and populates the books collection.

Data: Contains 12 book documents with all required fields (title, author, genre, published_year, price, in_stock, pages, publisher).



queries.js:

Purpose: Executes all required database operations for Tasks 2, 3, 4, and 5.

Contents: Solutions for CRUD operations, advanced filtering, aggregation pipelines, and indexing commands.

README.md:

Purpose: Instruction guide :

Purpose: Visual verification of the data insertion and collection setup within MongoDB Compass or Atlas.

 Execution Instructions
The following steps are required to run and verify the assignment components. The scripts must be executed in a MongoDB Shell (MQL) environment, such as mongosh or the Shell tab in MongoDB Compass.

Prerequisites
A running MongoDB instance (Local or Atlas) accessible via the Shell.

Step 1: Data Initialization (insert_books.js)
This command ensures the database is created, cleared, and populated with fresh data.

load('insert_books.js')

(Expected Output: A confirmation message indicating 11 documents were successfully inserted.)

Step 2: Query and Analysis Execution (queries.js)
This command runs the comprehensive suite of queries, updates, deletions, aggregations, and indexing commands.

load('queries.js')

(Expected Output: The shell will sequentially display the results for all tasks, including query results, modification summaries, aggregation outputs (e.g., average prices), and the explain('executionStats') output confirming index usage for Task 5.)

 Task Completion Summary
The queries.js file successfully addresses all grading criteria:

Task

Coverage

Demonstration

Task 2

Basic CRUD Operations

find(), updateOne(), and deleteOne().

Task 3

Advanced Queries

Conjunctive filtering, Projection, Sorting (sort), and Pagination (limit/skip).

Task 4

Aggregation Pipelines

Calculation of $avg price by genre, author book count, and $grouping by publication decade.

Task 5

Indexing & Performance

Creation of single and compound indexes, verified by the explain() method