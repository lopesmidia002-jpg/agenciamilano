FROM nginx:alpine

# Remove default nginx template configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom optimized nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all website assets and files into the web root
COPY . /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Health check to ensure nginx is serving requests properly
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
