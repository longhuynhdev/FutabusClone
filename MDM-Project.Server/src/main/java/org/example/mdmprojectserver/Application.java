package org.example.mdmprojectserver;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication


//@EnableRedisRepositories(
//        basePackages = "org.example.mdmprojectserver.redis.repository",
//        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(jpa|mongodb)\\.repository\\..*")
//)

@EnableMongoRepositories(
        basePackages = "org.example.mdmprojectserver.mongodb.repository",
        excludeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = "org\\.example\\.mdmprojectserver\\.(jpa|redis)\\.repository\\..*")
)


@OpenAPIDefinition(info = @Info(title = "MDM Project API", version = "1.0", description = "MDM Project API"))
public class Application implements CommandLineRunner {
    public Application() {
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) {


    }

}
