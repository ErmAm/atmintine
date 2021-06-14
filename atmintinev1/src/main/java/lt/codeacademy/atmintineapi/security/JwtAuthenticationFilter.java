package lt.codeacademy.atmintineapi.security;


import com.fasterxml.jackson.databind.ObjectMapper;
import lt.codeacademy.atmintineapi.model.User;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.apache.commons.lang3.StringUtils.isEmpty;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final ObjectMapper objectMapper;
    private final JwtService jwtService;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
                                   ObjectMapper objectMapper, JwtService jwtService) {
        super(authenticationManager);
        this.objectMapper = objectMapper;
        this.jwtService = jwtService;
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            LoginDto loginDto = objectMapper.readValue(request.getReader(), LoginDto.class);
            UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

            return getAuthenticationManager().authenticate(authRequest);
        } catch (IOException e) {
            throw new BadCredentialsException("Unable to parse credentials.");
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult) throws ServletException, IOException {

        SecurityContextHolder.getContext().setAuthentication(authResult);
        response.addHeader("Authorization", jwtService.createToken((User) authResult.getPrincipal()));
        chain.doFilter(request,response);

    }


//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
//
//        String authorizationHeader = request.getHeader("Authorization");
//
//        if (isEmpty(authorizationHeader) && !authorizationHeader.startsWith("Bearer ")) {
//            chain.doFilter(request, response);
//            return;
//        }
//
//        String jwt = authorizationHeader.replace("Bearer ", "");
//        Authentication authentication = jwtService.parseToken(jwt);
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        chain.doFilter(request, response);
//    }



//    //    1.2 truputi autowirinimo
//    private ObjectMapper objectMapper;
//    private final JwtService jwtService;
//
//    public JwtAuthenticationFilter(AuthenticationManager authenticationManager,
//                                   ObjectMapper objectMapper,
//                                   JwtService jwtService
//    ) {
//        super(authenticationManager);
//        this.objectMapper = objectMapper;
//    }
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
////        1.1 nuskaitome body iš post requesto
//
//        try {
//            LoginDto loginDto = objectMapper.readValue(request.getReader(), LoginDto.class);
//            UsernamePasswordAuthenticationToken authRequest =
//                    new UsernamePasswordAuthenticationToken(loginDto.getUsername(),loginDto.getPassword());
//
//
//            return getAuthenticationManager()
//                    .authenticate(authRequest);
//        } catch (IOException e) {
//            throw new BadCredentialsException("Unable to parse credentials");
//        }
//
//    }
}
