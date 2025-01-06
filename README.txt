npm i jsonwebtoken 
npm i cookie-parser

----------------------------------------------------
Authentication:-


JWT=> Json Web Token 
    Token which is generated after login or register to identified the user roles and login status
     Three Types:
      Local Storage:-
            Tokens remain available even after the browser is closed and reopened.
            Capacity = 5–10 MB
            Used if the data are many to store
            LS is not available in req(Request)
      Session Storage:-
            Tokens are cleared when the browser tab or window is closed.
            Capacity = Approximately 5 MB.
            Used if the data are personal and can't be access by others
            SS is not available in req(Request)
      Cookies:-
             Tokens remain available even after the browser is closed and reopened.
             Capacity = Approximately 4 KB 
             Stored as a cookie on the Browser(client) only, with the HttpOnly and Secure flags enabled.
             If HttpOnly is false or not mention in code then JWT will be available in Server & Browser
             Used if the data are not much to store
             Cookie is available in req(Request)
     
             