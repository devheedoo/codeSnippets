package com.a2m.webapps.webCommons;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

/**
 * StrictTransportSecurityFilter
 * 이 사이트는 오직 HTTPS 연결만 지원합니다. 를 알리는 헤더 설정 (HTTP Strict Transport Security, HSTS)
 * - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
 * @author kimhd
 */
public class StrictTransportSecurityFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletResponse resp = (HttpServletResponse) response;
        resp.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
        chain.doFilter(request, response);
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // TODO Auto-generated method stub
    }

    @Override
    public void destroy() {
        // TODO Auto-generated method stub
    }
    
}
