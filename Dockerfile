FROM php:7.2.2-apache
RUN docker-php-ext-install mysqli
RUN a2enmod rewrite headers
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf
# Fuerza que Apache use .htaccess en la carpeta del sitio
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf && \
    sed -i '/<Directory \/var\/www\/html\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# (Opcional) Reinicia Apache al iniciar el contenedor
CMD ["apache2-foreground"]