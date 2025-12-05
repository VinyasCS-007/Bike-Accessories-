INSERT INTO categories (name) VALUES ('Helmets'), ('Lights'), ('Locks'), ('Apparel');

INSERT INTO products (name, description, price, category_id, image_url, stock) VALUES 
('Aero Helmet', 'Aerodynamic helmet for road racing', 120.00, 1, 'https://placehold.co/600x400?text=Aero+Helmet', 50),
('Urban Light Set', 'Front and rear lights for city riding', 45.00, 2, 'https://placehold.co/600x400?text=Urban+Light+Set', 100),
('Heavy Duty U-Lock', 'Maximum security U-Lock', 60.00, 3, 'https://placehold.co/600x400?text=U-Lock', 30),
('Cycling Jersey', 'Breathable jersey for summer', 35.00, 4, 'https://placehold.co/600x400?text=Jersey', 75);
