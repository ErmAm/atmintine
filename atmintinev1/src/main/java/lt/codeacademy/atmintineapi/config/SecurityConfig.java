package lt.codeacademy.atmintineapi.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.atmintineapi.security.JwtAuthenticationFilter;
import lt.codeacademy.atmintineapi.service.UserService;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final ObjectMapper objectMapper;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public SecurityConfig(ObjectMapper objectMapper, UserService userService, PasswordEncoder passwordEncoder) {
        this.objectMapper = objectMapper;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers(HttpMethod.POST,"/login").permitAll()
                    .anyRequest().authenticated()
                    .and()
                .exceptionHandling()
                        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                        .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(),
                        objectMapper))
        ;

    }

//    @Bean
//    @Override
//    protected AuthenticationManager authenticationManager() throws Exception {
//        return super.authenticationManager();
//    }

//    Prisidedam autentifikacijos builderį
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        PasswordEncoder encoder1 = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        auth
                .userDetailsService(userService)
                .passwordEncoder(encoder1);
    }


//    Prisidedam enkoderį
//    @Bean
//    public PasswordEncoder encoder() {
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
}
