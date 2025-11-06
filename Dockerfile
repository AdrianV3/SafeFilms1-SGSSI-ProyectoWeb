FROM php:7.2.2-apache
<<<<<<< HEAD
RUN docker-php-ext-install mysqli
RUN a2enmod rewrite headers
RUN sed -i 's/AllowOverride None/AllowOverride All/g' /etc/apache2/apache2.conf
=======

# Instala la extensión mysqli
RUN docker-php-ext-install mysqli

# Habilita módulos necesarios
RUN a2enmod rewrite
RUN a2enmod headers

>>>>>>> entrega_3
# Fuerza que Apache use .htaccess en la carpeta del sitio
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf && \
    sed -i '/<Directory \/var\/www\/html\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

<<<<<<< HEAD
# (Opcional) Reinicia Apache al iniciar el contenedor
CMD ["apache2-foreground"]
=======

# (Opcional) Reinicia Apache al iniciar el contenedor
CMD ["apache2-foreground"]
>>>>>>> entrega_3
