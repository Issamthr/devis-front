FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/site-devis-api.jar site-devis-api.jar
EXPOSE 8080
CMD ["java", "-jar", "site-devis-api.jar"]
