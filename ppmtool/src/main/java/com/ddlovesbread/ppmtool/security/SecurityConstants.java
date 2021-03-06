package com.ddlovesbread.ppmtool.security;

public class SecurityConstants {

    public static final String SIGNUP_URLS = "/api/users/**";
    public static final String H2_URL = "h2-console/**";
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION = 300_000;
}
