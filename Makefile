containers = $(shell docker container ls -qa)
SET_CONTAINERS = $(eval CONTAINERS=$(containers))
volumes = $(shell docker volume ls -q)
SET_VOLUMES = $(eval VOLUMES=$(volumes))
images = $(shell docker image ls -q)
SET_IMAGES = $(eval IMAGES=$(images))


doc_clean_all: doc_clean_containers doc_clean_volumes
	# deletes containers & volumes. You loose the data in the local db and get an empty db if you run this.

doc_clean_containers: 
	# deletes only the containers. the data in the database remains as-is.
	$(SET_CONTAINERS)
	docker container ls -la
	docker container rm -f $(CONTAINERS)

doc_clean_volumes: 
	# deletes only the volumes empty database (postgres) afterward.
	$(SET_VOLUMES)
	docker volume ls
	docker volume rm -f $(VOLUMES)
doc_clean_images: 
	# deletes all images locally
	$(SET_IMAGES)
	docker image ls
	docker image rm -f $(IMAGES)