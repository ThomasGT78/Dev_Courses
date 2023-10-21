# Base image 
FROM python:3.9-alpine

# COPY local_file_name /docker_app_folder/file_name
COPY ./requirements.txt /app/requirements.txt 

# Go to app folder
WORKDIR /app

# install dependencies in requirements.txt
RUN pip install -r requirements.txt

# copy all content of the local file to work directory /app
COPY . /app

# specify the port number the container should expose
EXPOSE 5000

# run the application
CMD ["python", "/app/main.py"]


### COMMANDS TERMINAL:
## Build image of the app code using pythong:3.9-alpine as base image:
# docker build -t python-redis-app .