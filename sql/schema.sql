PRAGMA foreign_keys = ON;

-- Create the 'lists' table to store the lists
CREATE TABLE lists(
    id INTEGER PRIMARY KEY,
    -- Unique identifier for each list
    name TEXT NOT NULL
    -- Name of the list (required field)
);

-- Create the 'items' table to store the items within each list
CREATE TABLE items(
    id INTEGER PRIMARY KEY,
    -- Unique identifier for each item
    list_id INTEGER,
    -- Foreign key referencing the id of the list in "lists" the item belongs to
    description TEXT NOT NULL,
    -- Description of the item (required field)
    completed INTEGER DEFAULT 0,
    -- Indicator of whether the item is completed (0 for not completed, 1 for completed)
    FOREIGN KEY (list_id) REFERENCES lists (id)
    -- Establishes the foreign key relationship between items and lists
);
