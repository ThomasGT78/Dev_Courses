# Use an official Debian-based image as the base image
FROM debian:bullseye-slim

# Update the package list and install Nginx
RUN apt-get update \
    && apt-get install -y nginx \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Expose port 80 (HTTP) for Nginx
EXPOSE 80

# Start Nginx in the foreground when the container starts
CMD ["nginx", "-g", "daemon off;"]



#### Commandes Terminales:
#> docker build -t debian-nginx .
#> docker run -d debian-nginx