/**
 * Created by Ramindu on 6/18/16.
 */
// This is called with the results from from FB.getLoginStatus().

//FACEBOOK START
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
       console.log('Please log into this app.');
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        console.log('Please log into Facebook.');
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '950547965043697',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

// Load the SDK asynchronously
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Successful Facebook login for: ' + response.name);
    });
}

function fbLogin(){
    (function ($) {
        $(function () {
            $("#facebook").on("click", function () {
                FB.login(function(response) {
                    if (response.authResponse) {
                        statusChangeCallback(response);
                    }
                });
            });
        });
    })(jQuery);
}

function logoutFacebook() {
    console.log("going to log out");
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log("connected to fb, going to log out!!");
            FB.logout(function(response) {
                console.log("user is logged out!!");
                console.log(response);
            });
        }
    });
}

//FACEBOOK END

//GMAIL START
var googleUser = {};
var gmailLogin = function() {
    gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
            client_id: '316491504403-saip8l3vlltl7sc8m8jjo8qmo28qpct2.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('google'));
    });
};

function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
            console.log('inside onGmailLogin=============>');
            console.log("Signed in: " + googleUser.getBasicProfile().getName());
        }, function(error) {
            alert(JSON.stringify(error, undefined, 2));
        });
}

function signOutGmail() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        auth2.disconnect();
        // window.location.href="/logging-out.html";
        console.log('User signed out.');
    });
}

//GMAIL END


//LINKEDIN START
function liAuth(){
    IN.User.authorize(function(){
        IN.API.Profile("me")
            .fields("firstName", "lastName", "headline", "emailAddress")
            .result(function(result) {
                console.log('inside onLinkedInLogin=============>');
                console.log(result);
            })
            .error(function(err) {
                alert(err);
            });
    });
}

function linkedInSignout(){
    IN.User.logout();
}


//LINKEDIN END

function changeLoginView(changingView){
    if('toRegister' == changingView){
        document.getElementById('registerTab').style.display = 'block';
        document.getElementById('loginTab').style.display = 'none';
    } else {
        document.getElementById('loginTab').style.display = 'block';
        document.getElementById('registerTab').style.display = 'none';
    }
}



