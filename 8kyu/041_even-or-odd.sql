-- Even or Odd
SELECT number,
CASE
  WHEN FLOOR(number % 2) = 0 THEN 'Even'
  ELSE 'Odd'
END AS is_even
FROM numbers;