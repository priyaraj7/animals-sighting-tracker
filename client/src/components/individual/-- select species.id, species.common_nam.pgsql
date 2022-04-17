-- select species.id, species.common_name, individuals.id, individuals.nick_name, sightings.location, sightings.date_time, sightings.healthy, sightings.id  from species, sightings, individuals where species.id=individuals.species_id and sightings.individual_id = individuals.id;

SELECT 
   sightings.date_time as last_seen, sightings.healthy, sightings.location as last_seen_location, individuals.nick_name as name, species.common_name 
FROM 
  sightings
RIGHT JOIN individuals
   ON individuals.id = sightings.individual_id
RIGHT JOIN species
  ON species.id = individuals.species_id
where sightings.date_time is NOT NULL and sightings.healthy = false ORDER by sightings.date_time LIMIT 10
-- select * from species;
