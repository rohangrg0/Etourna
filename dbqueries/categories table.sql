CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO zoc.categories (name) VALUES
('EFootball'),
('PUBG Mobile'),
('Valorant'),
('FC'),
('Mobile Legends'),
('League of Legends'),
('Fortnite'),
('Dota'),
('CSGO');
