DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    entry_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    entry_date TIMESTAMP NOT NULL,
    PRIMARY KEY (entry_id)
);

INSERT INTO diary (title, content, entry_date)
VALUES
('Morning Thoughts', 'Started the day feeling productive and ready to get things done.', '2026-08-20 09:15:00'),

('Project Progress', 'Made good progress on the backend structure of the diary application.', '2026-08-20 18:30:00'),

('Lunch Catch-Up', 'Met up with a friend for lunch and had a really good catch-up.', '2026-08-21 12:45:00'),

('Gym Session', 'Went to the gym before starting work for the day.', '2026-08-22 08:00:00'),

('Relaxing Evening', 'Watched a film and had a quiet evening at home.', '2026-08-22 20:10:00'),

('SQL Revision', 'Practised SQL queries including joins, group by and subqueries.', '2026-08-23 14:20:00'),

('Busy Morning', 'Had a busy morning but managed to finish everything I needed to do.', '2026-08-24 11:50:00'),

('MVC Practice', 'Worked on understanding how the model, controller and routes connect together.', '2026-08-25 16:00:00'),

('Diary Search Feature', 'Practised searching diary entries using dates and timestamps.', '2026-08-26 19:30:00'),

('Hackathon Planning', 'Planned the remaining features needed to finish the diary application.', '2026-08-28 10:05:00');